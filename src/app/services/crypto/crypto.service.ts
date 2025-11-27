import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  static secretKey = '+[7¡+mqM:xzcyK[x+sXV\vS(*Cm3<b|y'; // Debe ser de 32 caracteres
  static iv = '-{&kZJ`K7>)=TFt^'; // Debe ser de 16 caracteres

  constructor() {}


  // Encriptar datos antes de enviarlos al backend
  static encrypt(data: any): string {
    console.info("Texto que se va a Encriptar", JSON.stringify(data,null,2))
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(this.secretKey), {
      iv: CryptoJS.enc.Utf8.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  // Desencriptar respuesta del backend
  static decrypt(encryptedData: string): any {
    const decrypted = CryptoJS.AES.decrypt(encryptedData, CryptoJS.enc.Utf8.parse(this.secretKey), {
      iv: CryptoJS.enc.Utf8.parse(this.iv),
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
  }

}
