import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, CameraPermissionType } from '@capacitor/camera';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  photos: any[] = [];

  public async addNewToGallery(): Promise<any> {
    try {
      console.log('📸 1. Iniciando servicio de cámara...');

      // 1. Verificar permisos actuales
      let permResult = await Camera.checkPermissions();
      console.log('🔐 2. Permisos actuales:', permResult);

      // 2. Detectar versión Android para permisos
      const deviceInfo = await Device.getInfo();
      const isAndroid13Plus = deviceInfo.platform === 'android' && 
                             parseInt(deviceInfo.osVersion) >= 13;
      
      console.log(`📱 Android ${deviceInfo.osVersion}+, necesita permisos media:`, isAndroid13Plus);

      // 3. Solicitar permisos faltantes - ✅ CORREGIDO: Usar CameraPermissionType
      if (permResult.camera !== 'granted' || 
          (isAndroid13Plus && permResult.photos !== 'granted')) {
        
        console.log('🔄 3. Solicitando permisos completos...');
        
        // ✅ CORRECCIÓN: Usar los tipos específicos de CameraPermissionType
        const permissionsToRequest: { permissions: CameraPermissionType[] } = isAndroid13Plus ? 
          { permissions: ['camera', 'photos'] as CameraPermissionType[] } : 
          { permissions: ['camera'] as CameraPermissionType[] };
          
        permResult = await Camera.requestPermissions(permissionsToRequest);
        
        // Verificar todos los permisos necesarios
        if (permResult.camera !== 'granted' || 
            (isAndroid13Plus && permResult.photos !== 'granted')) {
          
          const missingPerms = [];
          if (permResult.camera !== 'granted') missingPerms.push('Cámara');
          if (isAndroid13Plus && permResult.photos !== 'granted') missingPerms.push('Fotos/Galería');
          
          throw new Error(`PERMISSIONS_DENIED: ${missingPerms.join(', ')}`);
        }
      }

      console.log('✅ 4. Todos los permisos concedidos, tomando foto...');

      // 4. Tomar la foto
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
        quality: 80,
        allowEditing: false,
        saveToGallery: false
      });

      if (!capturedPhoto.dataUrl) {
        throw new Error('NO_PHOTO_DATA');
      }

      const photoId = `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      return {
        format: capturedPhoto.format,
        base64Imagen: capturedPhoto.dataUrl,
        idFoto: photoId,
        webPath: capturedPhoto.webPath
      };

    } catch (error) {
      console.error('❌ ERROR en servicio de cámara:', error);
      
      // Manejo mejorado de errores
      if (error.message.includes('PERMISSIONS_DENIED')) {
        const missing = error.message.replace('PERMISSIONS_DENIED: ', '');
        throw new Error(`Se necesitan permisos de ${missing}. Por favor, habilítalos en Configuración > Aplicaciones > Alissta SUM > Permisos.`);
      } else if (error.message === 'NO_PHOTO_DATA') {
        throw new Error('No se pudo obtener la foto correctamente. Intenta nuevamente.');
      } else if (error.message.includes('User cancelled') || error.message.includes('app canceled')) {
        throw new Error('Captura de foto cancelada.');
      } else {
        throw new Error(`Error al tomar la foto: ${error.message || 'Error desconocido'}`);
      }
    }
  }

  /**
   * ✅ ELIMINAR FOTO
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
   * ✅ OBTENER FOTOS
   */
  getPhotos(): any[] {
    return this.photos;
  }

  /**
   * ✅ LIMPIAR FOTOS
   */
  clearPhotos(): void {
    this.photos = [];
    console.log('🧹 Todas las fotos eliminadas del servicio');
  }

  /**
   * ✅ AGREGAR FOTO EXISTENTE
   */
  addExistingPhoto(photoData: any): void {
    if (photoData && photoData.idFoto) {
      this.photos.push(photoData);
      console.log('📁 Foto existente agregada:', photoData.idFoto);
    }
  }
}