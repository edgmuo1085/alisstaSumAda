import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, PermissionStatus } from '@capacitor/camera';
import { Filesystem } from '@capacitor/filesystem';

@Injectable({
  providedIn: 'root',
})
export class PhotoServiceService {
  photos: any[] = [];

  public async addNewToGallery(): Promise<any> {
    // 🔹 Pedir permisos de cámara y fotos
    const permResult: PermissionStatus = await Camera.requestPermissions();

    if (permResult.camera !== 'granted') {
      throw new Error('Permiso de cámara denegado');
    }

    if (permResult.photos !== 'granted') {
      throw new Error('Permiso de fotos/almacenamiento denegado');
    }

    // 🔹 Tomar la foto
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 60,
    });

    // 🔹 Convertir a base64
    const file = await Filesystem.readFile({
      path: capturedPhoto.path!,
    });

    return {
      format: capturedPhoto.format,
      base64Imagen: `data:image/${capturedPhoto.format};base64,${file.data}`,
      idFoto: new Date().getTime().toString(16),
    };
  }

  deletePhoto(photoSelected: any) {
    const idFotoAEliminar = photoSelected.idFoto;
    const encontro = this.photos.find(x => x.idFoto === idFotoAEliminar);
    if (encontro) {
      this.photos.splice(encontro, 1);
    }
  }
}
