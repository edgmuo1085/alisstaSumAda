import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, CameraPermissionType } from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  photos: any[] = []; // ✅ MANTENER este array

  // ✅ NUEVAS VARIABLES para control de estado
  private isTakingPhoto = false;
  private photoPromise: Promise<any> | null = null;
  private retryCount = 0;
  private readonly MAX_RETRIES = 2;

  /**
   * ✅ MÉTODO MEJORADO: Tomar foto con manejo de ciclo de vida
   */
  public async addNewToGallery(): Promise<any> {
    // Evitar múltiples llamadas simultáneas
    if (this.isTakingPhoto) {
      throw new Error('Ya hay una operación de cámara en curso');
    }

    if (this.photoPromise) {
      return this.photoPromise;
    }

    this.isTakingPhoto = true;
    this.photoPromise = this._takePhotoWithRetry(); // Método mejorado con reintentos

    try {
      const result = await this.photoPromise;
      this.retryCount = 0; // Reset contador en éxito
      return result;
    } catch (error) {
      this.retryCount = 0; // Reset contador en error final
      throw error;
    } finally {
      this.isTakingPhoto = false;
      this.photoPromise = null;
    }
  }

  /**
   * ✅ MÉTODO MEJORADO: Lógica con reintentos automáticos
   */
  private async _takePhotoWithRetry(): Promise<any> {
    try {
      return await this._takePhoto();
    } catch (error) {
      // Verificar si es un error recuperable y tenemos reintentos disponibles
      if (this.isRecoverableCameraError(error) && this.retryCount < this.MAX_RETRIES) {
        this.retryCount++;
        console.log(`🔄 Reintento ${this.retryCount}/${this.MAX_RETRIES} después de error de cámara`);

        // Pequeña pausa antes del reintento
        await this.delay(1000);

        return await this._takePhotoWithRetry();
      }

      // Si no es recuperable o se agotaron los reintentos, lanzar error
      throw error;
    }
  }

  /**
   * ✅ MÉTODO PRIVADO: Lógica real de tomar foto
   */
  private async _takePhoto(): Promise<any> {
    try {
      console.log('📸 1. Iniciando servicio de cámara...');

      // 1. Detectar plataforma
      const deviceInfo = await Device.getInfo();
      const isWeb = deviceInfo.platform === 'web';
      console.log(`🌐 Plataforma detectada: ${deviceInfo.platform}${isWeb ? ' (web)' : ' (móvil)'}`);

      // 2. Verificar y solicitar permisos (solo en móvil)
      const permissionsGranted = await this.checkAndRequestPermissions();

      if (!permissionsGranted) {
        throw new Error('PERMISSIONS_DENIED: No se concedieron todos los permisos necesarios');
      }

      console.log('✅ 2. Todos los permisos concedidos, tomando foto...');

      // 3. Configurar listener solo para dispositivos móviles
      //    (cuando la app vuelve de la cámara nativa al primer plano)
      let appResumePromise: Promise<void> | null = null;
      if (!isWeb) {
        appResumePromise = new Promise<void>((resolve) => {
          const handler = App.addListener('appStateChange', (state) => {
            if (state.isActive) {
              console.log('🔄 App volvió al primer plano después de la cámara');
              handler.remove();
              resolve();
            }
          });
        });
      }

      // 4. Tomar la foto o seleccionar imagen según la plataforma:
      //    - En web: usa CameraSource.Photos (abre selector de archivos)
      //    - En móvil: usa CameraSource.Camera (abre la cámara nativa)
      const photoPromise = Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: isWeb ? CameraSource.Photos : CameraSource.Camera,
        quality: 80,
        allowEditing: false,
        saveToGallery: false
      });

      // 5. Esperar la foto (y el resumen de la app solo si es móvil)
      const capturedPhoto = isWeb
        ? await photoPromise
        : (await Promise.all([photoPromise, appResumePromise!]))[0];

      if (!capturedPhoto.dataUrl) {
        throw new Error('NO_PHOTO_DATA');
      }

      // 5. Pequeña pausa para asegurar estabilidad
      await this.delay(500);

      const photoId = `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      console.log('✅ 3. Foto tomada exitosamente, ID:', JSON.stringify(photoId, null, 2));

      const photoData = {
        format: capturedPhoto.format,
        base64Imagen: capturedPhoto.dataUrl,
        idFoto: photoId,
        webPath: capturedPhoto.webPath,
        timestamp: new Date().toISOString()
      };

      // ✅ OPCIONAL: Agregar automáticamente al array de fotos
      this.photos.push(photoData);

      return photoData;

    } catch (error) {
      console.error('❌ ERROR en _takePhoto:', JSON.stringify(error, null, 2));

      // Manejo mejorado de errores con mensajes específicos
      const userFriendlyError = this.getUserFriendlyErrorMessage(error);
      throw new Error(userFriendlyError);
    }
  }

  /**
   * ✅ DETECTAR ERRORES RECUPERABLES (especialmente para Xiaomi)
   */
  private isRecoverableCameraError(error: any): boolean {
    const errorMessage = error.message?.toLowerCase() || '';
    const errorString = JSON.stringify(error).toLowerCase();

    // Errores que pueden solucionarse con un reintento
    const recoverableErrors = [
      'permission',
      'camera',
      'background_camera',
      'user cancelled',
      'app canceled',
      'no_photo_data',
      'cancelada',
      'unknown error',
      'error desconocido'
    ];

    return recoverableErrors.some(recoverableError =>
      errorMessage.includes(recoverableError) ||
      errorString.includes(recoverableError)
    );
  }

  /**
   * ✅ MENSAJES DE ERROR AMIGABLES PARA EL USUARIO
   */
  private getUserFriendlyErrorMessage(error: any): string {
    const errorMessage = error.message?.toLowerCase() || '';

    if (errorMessage.includes('permissions_denied') || errorMessage.includes('permission')) {
      return 'Se necesitan permisos de cámara. Por favor, habilítalos en Configuración > Aplicaciones > Alissta SUM > Permisos.';
    } else if (errorMessage.includes('no_photo_data')) {
      return 'No se pudo obtener la foto correctamente. Intenta nuevamente.';
    } else if (errorMessage.includes('user cancelled') || errorMessage.includes('app canceled') || errorMessage.includes('cancelada')) {
      return 'Captura de foto cancelada.';
    } else if (this.retryCount >= this.MAX_RETRIES) {
      return 'No se pudo acceder a la cámara después de varios intentos. Por favor verifica los permisos y reinicia la aplicación.';
    } else {
      return `Error al tomar la foto: ${error.message || 'Error desconocido'}`;
    }
  }

  /**
   * ✅ MÉTODO DE PERMISOS (sin cambios)
   */
  private async checkAndRequestPermissions(): Promise<boolean> {
    try {
      console.log('🔐 Verificando permisos...');

      const deviceInfo = await Device.getInfo();
      console.log('📱 Información del dispositivo:', JSON.stringify(deviceInfo, null, 2));

      // 🌐 Si es web (navegador), no solicitar permisos de Capacitor.
      // El navegador maneja los permisos nativamente al intentar abrir la cámara.
      if (deviceInfo.platform === 'web') {
        console.log('🌐 Plataforma web detectada - permisos gestionados por el navegador');
        return true;
      }

      // 📷 Solo solicitar permiso de cámara, NO de galería ('photos')
      const permissionsToRequest: CameraPermissionType[] = ['camera'];

      console.log('🔄 Solicitando permisos:', JSON.stringify(permissionsToRequest, null, 2));

      const newPerms = await Camera.requestPermissions({
        permissions: permissionsToRequest
      });

      console.log('📋 Nuevos permisos:', JSON.stringify(newPerms, null, 2));

      const allGranted = permissionsToRequest.every(perm => newPerms[perm] === 'granted');
      console.log(`✅ ¿Todos los permisos concedidos? ${allGranted}`);

      return allGranted;

    } catch (error) {
      console.error('❌ Error en checkAndRequestPermissions:', JSON.stringify(error, null, 2));
      return false;
    }
  }

  /**
   * ✅ DELAY HELPER
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * ✅ ELIMINAR FOTO (usa el array photos)
   */
  deletePhoto(photoSelected: any) {
    try {
      const idFotoAEliminar = photoSelected.idFoto;
      const index = this.photos.findIndex(x => x.idFoto === idFotoAEliminar);

      if (index > -1) {
        this.photos.splice(index, 1);
        console.log('🗑️ Foto eliminada:', JSON.stringify(idFotoAEliminar, null, 2));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error eliminando foto:', JSON.stringify(error, null, 2));
      return false;
    }
  }

  /**
   * ✅ OBTENER FOTOS (usa el array photos)
   */
  getPhotos(): any[] {
    return this.photos;
  }

  /**
   * ✅ LIMPIAR FOTOS (usa el array photos)
   */
  clearPhotos(): void {
    this.photos = [];
    console.log('🧹 Todas las fotos eliminadas del servicio');
  }

  /**
   * ✅ AGREGAR FOTO EXISTENTE (usa el array photos)
   */
  addExistingPhoto(photoData: any): void {
    if (photoData && photoData.idFoto) {
      this.photos.push(photoData);
      console.log('📁 Foto existente agregada:', JSON.stringify(photoData.idFoto, null, 2));
    }
  }
}