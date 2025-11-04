import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  photos: any[] = [];

  /**
   * ✅ VERSIÓN SIMPLIFICADA - Sin Filesystem, solo Camera
   */
  public async addNewToGallery(): Promise<any> {
    try {
      console.log('📸 1. Iniciando servicio de cámara...');

      // 1. Verificar permisos actuales primero
      let permResult = await Camera.checkPermissions();
      console.log('🔐 2. Permisos actuales:', permResult);

      // 2. Si no están concedidos, pedirlos
      if (permResult.camera !== 'granted') {
        console.log('🔄 3. Solicitando permisos de cámara...');
        permResult = await Camera.requestPermissions();
        
        // 3. Si aún no tiene permisos, mostrar error específico
        if (permResult.camera !== 'granted') {
          throw new Error('PERMISSIONS_DENIED');
        }
      }

      console.log('✅ 4. Permisos concedidos, tomando foto...');

      // 4. Tomar la foto con DataUrl (NO necesita Filesystem)
      const capturedPhoto = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl, // ← CLAVE: Evita Filesystem
        source: CameraSource.Camera,
        quality: 80,
        allowEditing: false,
        saveToGallery: false
      });

      console.log('📷 5. Foto capturada exitosamente');

      // 5. Verificar que tenemos los datos de la foto
      if (!capturedPhoto.dataUrl) {
        throw new Error('NO_PHOTO_DATA');
      }

      console.log('✅ 6. Generando ID único para la foto...');

      // 6. Generar ID único para la foto
      const photoId = `photo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      // 7. Retornar objeto con la imagen en base64 (lista para usar)
      return {
        format: capturedPhoto.format,
        base64Imagen: capturedPhoto.dataUrl, // ← Ya viene en base64
        idFoto: photoId,
        webPath: capturedPhoto.webPath // Opcional, para referencia
      };

    } catch (error) {
      console.error('❌ ERROR en servicio de cámara:', error);
      console.error('❌ Mensaje del error:', error.message);
      
      // Manejo específico de errores
      if (error.message === 'PERMISSIONS_DENIED') {
        throw new Error('Se necesitan permisos de cámara para tomar fotos. Por favor, habilítalos en Configuración > Aplicaciones.');
      } else if (error.message === 'NO_PHOTO_DATA') {
        throw new Error('No se pudo obtener la foto correctamente. Intenta nuevamente.');
      } else if (error.message.includes('User cancelled')) {
        throw new Error('Captura de foto cancelada por el usuario.');
      } else if (error.message.includes('app canceled')) {
        throw new Error('Captura de foto cancelada.');
      } else {
        throw new Error(`Error al tomar la foto: ${error.message || 'Error desconocido'}`);
      }
    }
  }

  /**
   * ✅ ELIMINAR FOTO - Método mejorado
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
   * ✅ OBTENER FOTOS - Para uso interno
   */
  getPhotos(): any[] {
    return this.photos;
  }

  /**
   * ✅ LIMPIAR FOTOS - Para reset
   */
  clearPhotos(): void {
    this.photos = [];
    console.log('🧹 Todas las fotos eliminadas del servicio');
  }

  /**
   * ✅ AGREGAR FOTO EXISTENTE - Para cargar desde cache
   */
  addExistingPhoto(photoData: any): void {
    if (photoData && photoData.idFoto) {
      this.photos.push(photoData);
      console.log('📁 Foto existente agregada:', photoData.idFoto);
    }
  }
}