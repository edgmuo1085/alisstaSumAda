import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceService {

  photos: any[] = [];

  constructor() { }

  public async addNewToGallery(): Promise<any> {

    // Take a photo
    const capturedPhoto = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera,
      quality: 60
    });

    const fotoIngresada = {
      format: capturedPhoto.format,
      base64Imagen: capturedPhoto.dataUrl,
      idFoto: new Date().getTime().toString(16)
    };
    // this.photos.push(fotoIngresada);
    return fotoIngresada;
  }

  deletePhoto(photoSelected, index) {
    const idFotoAEliminar = photoSelected.idFoto;
    const encontro = this.photos.find(x => x.idFoto === idFotoAEliminar);
    if (encontro) {
      this.photos.splice(encontro, 1);
    }
  }

}
