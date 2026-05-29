import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, CameraPermissionType } from '@capacitor/camera';
import { Device } from '@capacitor/device';
import { App } from '@capacitor/app';

@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  photos: any[] = [];

  private isTakingPhoto = false;
  private photoPromise: Promise<any> | null = null;
  private retryCount = 0;
  private readonly MAX_RETRIES = 2;
  private readonly PHOTO_TIMEOUT_MS = 90000; // 90 segundos de timeout total

  /**
   * Tomar foto con manejo de ciclo de vida
   */
  public async addNewToGallery(): Promise<any> {
    if (this.isTakingPhoto) {
      throw new Error('Ya hay una operación de cámara en curso');
    }

    if (this.photoPromise) {
      return this.photoPromise;
    }

    this.isTakingPhoto = true;
    this.photoPromise = this._takePhotoWithRetry();

    try {
      const result = await this.photoPromise;
      this.retryCount = 0;
      return result;
    } catch (error) {
      this.retryCount = 0;
      throw error;
    } finally {
      this.isTakingPhoto = false;
      this.photoPromise = null;
    }
  }

  /**
   * Lógica con reintentos automáticos
   */
  private async _takePhotoWithRetry(): Promise<any> {
    try {
      return await this._takePhoto();
    } catch (error) {
      if (this.isRecoverableCameraError(error) && this.retryCount < this.MAX_RETRIES) {
        this.retryCount++;
        console.log(`🔄 Reintento ${this.retryCount}/${this.MAX_RETRIES} después de error de cámara`);

        await this.delay(1000);

        return await this._takePhotoWithRetry();
      }

      throw error;
    }
  }

  /**
   * Lógica real de tomar foto
   */
  private async _takePhoto(): Promise<any> {
    try {
      console.log('📸 1. Iniciando servicio de cámara...');

      const deviceInfo = await Device.getInfo();
      const isWeb = deviceInfo.platform === 'web';
      const isIOS = deviceInfo.platform === 'ios';
      console.log(`🌐 Plataforma detectada: ${deviceInfo.platform}${isWeb ? ' (web)' : ' (móvil)'}`);

      // 1. Verificar y solicitar permisos (solo en móvil)
      const permissionsGranted = await this.checkAndRequestPermissions();

      if (!permissionsGranted) {
        throw new Error('PERMISSIONS_DENIED: No se concedieron todos los permisos necesarios');
      }

      console.log('✅ 2. Todos los permisos concedidos, tomando foto...');

      // 2. Tomar la foto
      const photoPromise = Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: isWeb ? CameraSource.Photos : CameraSource.Camera,
        quality: 80,
        allowEditing: false,
        saveToGallery: false
      });

      // 3. Timeout global para la operación completa
      const timeoutPromise = this.delay(this.PHOTO_TIMEOUT_MS).then(() => {
        throw new Error('TIMEOUT: La operación de cámara tardó demasiado');
      });

      // 4. En iOS: la cámara se abre como un modal IN-APP (no cambia el estado de la app)
      //    Por lo tanto appStateChange NO se dispara cuando se cierra la cámara.
      //    Solo esperamos la foto directamente con un timeout de seguridad.
      //    En Android: algunos dispositivos también abren la cámara como modal.
      let capturedPhoto: any;

      if (isWeb) {
        // Web: solo esperar la foto
        capturedPhoto = await Promise.race([photoPromise, timeoutPromise]);
      } else if (isIOS) {
        // iOS: ¡NO esperar appResumePromise! La cámara en iOS es modal in-app.
        // Solo esperar la foto con timeout, para evitar que se cuelgue para siempre.
        console.log('🍎 iOS detectado - NO se usará appStateChange (cámara modal in-app)');
        capturedPhoto = await Promise.race([photoPromise, timeoutPromise]);
      } else {
        // Android: esperar foto + appResumePromise por si la cámara se abre como actividad separada
        console.log('🤖 Android detectado - usando appStateChange como respaldo');
        const appResumePromise = new Promise<void>((resolve) => {
          const handler = App.addListener('appStateChange', (state) => {
            if (state.isActive) {
              console.log('🔄 App volvió al primer plano después de la cámara');
              handler.remove();
              resolve();
            }
          });
        });

        // Competencia entre: foto + resume vs timeout
        capturedPhoto = await Promise.race([
          Promise.all([photoPromise, appResumePromise]).then(results => results[0]),
          timeoutPromise
        ]);
      }

      if (!capturedPhoto || !capturedPhoto.dataUrl) {
        throw new Error('NO_PHOTO_DATA');
      }

      await this.delay(500);

      const photoId = `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      console.log('✅ 3. Foto tomada exitosamente, ID:', photoId);

      const photoData = {
        format: capturedPhoto.format,
        base64Imagen: capturedPhoto.dataUrl,
        idFoto: photoId,
        webPath: capturedPhoto.webPath,
        timestamp: new Date().toISOString()
      };

      this.photos.push(photoData);

      return photoData;

    } catch (error) {
      console.error('❌ ERROR en _takePhoto:', error);

      const userFriendlyError = this.getUserFriendlyErrorMessage(error);
      throw new Error(userFriendlyError);
    }
  }

  /**
   * Detectar errores recuperables para reintento
   */
  private isRecoverableCameraError(error: any): boolean {
    const errorMessage = error.message?.toLowerCase() || '';
    const errorString = JSON.stringify(error).toLowerCase();

    const recoverableErrors = [
      'permission',
      'camera',
      'background_camera',
      'user cancelled',
      'app canceled',
      'no_photo_data',
      'cancelada',
      'unknown error',
      'error desconocido',
      'timeout'
    ];

    return recoverableErrors.some(recoverableError =>
      errorMessage.includes(recoverableError) ||
      errorString.includes(recoverableError)
    );
  }

  /**
   * Mensajes de error amigables
   */
  private getUserFriendlyErrorMessage(error: any): string {
    const errorMessage = error.message?.toLowerCase() || '';

    if (errorMessage.includes('permissions_denied') || errorMessage.includes('permission')) {
      return 'Se necesitan permisos de cámara. Por favor, habilítalos en Configuración > Aplicaciones > Alissta SUM > Permisos.';
    } else if (errorMessage.includes('no_photo_data')) {
      return 'No se pudo obtener la foto correctamente. Intenta nuevamente.';
    } else if (errorMessage.includes('timeout')) {
      return 'La cámara no respondió a tiempo. Por favor, intenta nuevamente.';
    } else if (errorMessage.includes('user cancelled') || errorMessage.includes('app canceled') || errorMessage.includes('cancelada')) {
      return 'Captura de foto cancelada.';
    } else if (this.retryCount >= this.MAX_RETRIES) {
      return 'No se pudo acceder a la cámara después de varios intentos. Por favor verifica los permisos y reinicia la aplicación.';
    } else {
      return `Error al tomar la foto: ${error.message || 'Error desconocido'}`;
    }
  }

  /**
   * Verificación y solicitud de permisos
   */
  private async checkAndRequestPermissions(): Promise<boolean> {
    try {
      console.log('🔐 Verificando permisos...');

      const deviceInfo = await Device.getInfo();
      console.log('📱 Información del dispositivo:', JSON.stringify(deviceInfo, null, 2));

      if (deviceInfo.platform === 'web') {
        console.log('🌐 Plataforma web detectada - permisos gestionados por el navegador');
        return true;
      }

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
      console.error('❌ Error en checkAndRequestPermissions:', error);
      return false;
    }
  }

  /**
   * Delay helper
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Eliminar foto del array
   */
  deletePhoto(photoSelected: any) {
    try {
      const idFotoAEliminar = photoSelected.idFoto;
      const index = this.photos.findIndex(x => x.idFoto === idFotoAEliminar);

      if (index > -1) {
        this.photos.splice(index, 1);
        console.log('🗑️ Foto eliminada:', idFotoAEliminar);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error eliminando foto:', error);
      return false;
    }
  }

  /**
   * Obtener fotos
   */
  getPhotos(): any[] {
    return this.photos;
  }

  /**
   * Limpiar fotos
   */
  clearPhotos(): void {
    this.photos = [];
    console.log('🧹 Todas las fotos eliminadas del servicio');
  }

  /**
   * Agregar foto existente
   */
  addExistingPhoto(photoData: any): void {
    if (photoData && photoData.idFoto) {
      this.photos.push(photoData);
      console.log('📁 Foto existente agregada:', photoData.idFoto);
    }
  }

  /**
   * Reset forzado de estado (por si algo queda bloqueado)
   */
  forceReset(): void {
    this.isTakingPhoto = false;
    this.photoPromise = null;
    this.retryCount = 0;
    console.log('🔄 Estado del servicio de fotos restablecido forzosamente');
  }
}
