// import { Injectable } from '@angular/core';


// import * as CryptoJS from 'crypto-js';

// @Injectable({
//   providedIn: 'root'
// })
// export class CryptoService {

//   static password = 'Alissta';

//   private static salt = CryptoJS.enc.Utf8.parse('0102030405060708'); // Misma salt en bytes

//   static encrypt(plainText: string): string {
//     console.log("dentro de CRYPTO: ", plainText);
//     if (!plainText) {
//       return '';
//     }

//     // Convertir la contraseña en hash SHA-256
//     const passwordHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(this.password));

//     // Generar clave y vector de inicialización (IV) con PBKDF2
//     const key = CryptoJS.PBKDF2(passwordHash.toString(), this.salt, {
//       keySize: 256 / 32 + 128 / 32, // AES KeySize (256 bits) + IV (128 bits)
//       iterations: 1000,
//       hasher: CryptoJS.algo.SHA256
//     });

//     const aesKey = CryptoJS.lib.WordArray.create(key.words.slice(0, 8)); // 256 bits
//     const iv = CryptoJS.lib.WordArray.create(key.words.slice(8, 12)); // 128 bits

//     // Encriptar con AES-256-CBC
//     const encrypted = CryptoJS.AES.encrypt(plainText, aesKey, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//     });

//     return encrypted.toString();
//   }

//   static decrypt(encryptedText: string ): string {
//     if (!encryptedText) {
//       return '';
//     }

//     console.log("Texto Encriptado: ", encryptedText )

//     // Convertir la contraseña en hash SHA-256
//     const passwordHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(this.password));

//     // Generar clave y vector de inicialización (IV) con PBKDF2
//     const key = CryptoJS.PBKDF2(passwordHash.toString(), this.salt, {
//       keySize: 256 / 32 + 128 / 32,
//       iterations: 1000,
//       hasher: CryptoJS.algo.SHA256
//     });

//     const aesKey = CryptoJS.lib.WordArray.create(key.words.slice(0, 8)); // 256 bits
//     const iv = CryptoJS.lib.WordArray.create(key.words.slice(8, 12)); // 128 bits

//     // Desencriptar con AES-256-CBC
//     const decrypted = CryptoJS.AES.decrypt(encryptedText, aesKey, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//     });

//     return decrypted.toString(CryptoJS.enc.Utf8);
//   }
// }

// import { Injectable } from '@angular/core';
// import * as CryptoJS from 'crypto-js';

// @Injectable({
//   providedIn: 'root'
// })
// export class CryptoService {

//   private static password = 'Alissta';
//   private static salt = CryptoJS.enc.Utf8.parse('0102030405060708'); // Misma salt en bytes
//   private static iterations = 1000;

//   // Generar Clave y IV Correctamente
//   private static generateKeyAndIV() {
//     const passwordHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(this.password));

//     const key = CryptoJS.PBKDF2(passwordHash.toString(), this.salt, {
//       keySize: 256 / 32, // 32 bytes = 256 bits para AES-256
//       iterations: this.iterations,
//       hasher: CryptoJS.algo.SHA256
//     });

//     const iv = CryptoJS.PBKDF2(passwordHash.toString(), this.salt, {
//       keySize: 128 / 32, // 16 bytes = 128 bits para IV
//       iterations: this.iterations,
//       hasher: CryptoJS.algo.SHA256
//     });

//     return { key, iv };
//   }

//   static encrypt(plainText: string): string {
//     if (!plainText) return '';

//     const { key, iv } = this.generateKeyAndIV();

//     const encrypted = CryptoJS.AES.encrypt(plainText, key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//     });

//     return encrypted.toString();
//   }

//   static decrypt(encryptedText: string): string {
//     if (!encryptedText) return '';

//     const { key, iv } = this.generateKeyAndIV();

//     const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC,
//       padding: CryptoJS.pad.Pkcs7
//     });

//     return decrypted.toString(CryptoJS.enc.Utf8);
//   }
// }

import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

//   private static password = 'Alissta';
//   private static salt = CryptoJS.enc.Utf8.parse('0102030405060708'); // Misma salt en bytes
//   private static iterations = 1000;

//   // Generar Clave y IV Correctamente
//   private static generateKeyAndIV() {
//     const passwordHash = CryptoJS.SHA256(CryptoJS.enc.Utf8.parse(this.password));
  
//     // Generar una secuencia de bytes más larga (48 bytes: 32 para la clave + 16 para el IV)
//     const keyAndIV = CryptoJS.PBKDF2(passwordHash, this.salt, {
//       keySize: (256 + 128) / 32, // 48 bytes (256 bits para la clave + 128 bits para el IV)
//       iterations: this.iterations,
//       hasher: CryptoJS.algo.SHA256
//     });
  
//     // Extraer la clave (primeros 32 bytes) y el IV (siguientes 16 bytes)
//     const key = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(0, 8)); // 256 bits
//     const iv = CryptoJS.lib.WordArray.create(keyAndIV.words.slice(8, 12)); // 128 bits
  
//     // Imprimir para verificación
//     console.log('Clave generada (Angular):', key.toString(CryptoJS.enc.Hex));
//     console.log('IV generado (Angular):', iv.toString(CryptoJS.enc.Hex));
  
//     return { key, iv };
//   }

//   static encrypt(plainText: string): string {
//     if (!plainText) return '';

//     const { key, iv } = this.generateKeyAndIV();

//     const encrypted = CryptoJS.AES.encrypt(plainText, key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC
//     });

//     return encrypted.toString();
//   }

//   static decrypt(encryptedText: string): string {
//     if (!encryptedText) return '';

//     const { key, iv } = this.generateKeyAndIV();

//     const decrypted = CryptoJS.AES.decrypt(encryptedText, key, {
//       iv: iv,
//       mode: CryptoJS.mode.CBC
//     });

//     return decrypted.toString(CryptoJS.enc.Utf8);
//   }

//  plainText = "Text to encrypt";
//  cipherText = "<cipher text from encryption function>";
//  static secret = "Alissta";

//  static key = CryptoJS.enc.Utf8.parse(CryptoService.secret);

 

//  static encrypt(text: string): string{
//   console.log("Ingreso a encriptar: ", text)
//  const encryptedBytes = CryptoJS.AES.encrypt(text, this.key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
//   return encryptedBytes.toString();
//  }

//  static decrypt(text: string):string{
//   console.log("Ingreso a desencriptar: ", text)
//   const decryptedBytes = CryptoJS.AES.decrypt(text, this.key, {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7});
//   console.log("dedencript")
//   return decryptedBytes.toString(CryptoJS.enc.Utf8);
//  }


  // static secret = "Alissta";
  // static key = CryptoJS.enc.Utf8.parse(CryptoService.secret); // Clave en formato UTF-8

  // static encrypt(text: string): string {
  //   console.log("Ingreso a encriptar: ", text);
  //   const encryptedBytes = CryptoJS.AES.encrypt(text, CryptoService.key, {
  //     mode: CryptoJS.mode.ECB,
  //     padding: CryptoJS.pad.Pkcs7
  //   });
  //   return encryptedBytes.toString();
  // }

  // static decrypt(text: string): string {
  //   console.log("Ingreso a desencriptar: ", text);
  //   const decryptedBytes = CryptoJS.AES.decrypt(text, CryptoService.key, {
  //     mode: CryptoJS.mode.ECB,
  //     padding: CryptoJS.pad.Pkcs7
  //   });

  //   try {
  //     return decryptedBytes.toString(CryptoJS.enc.Utf8);
  //   } catch (error) {
  //     console.error("Error al desencriptar:", error);
  //     return ""; // Retornar string vacío en caso de erro
  //   }
  // }

  static secretKey = '+[7¡+mqM:xzcyK[x+sXV\vS(*Cm3<b|y'; // Debe ser de 32 caracteres
  static iv = '-{&kZJ`K7>)=TFt^'; // Debe ser de 16 caracteres

  constructor() {}


  // Encriptar datos antes de enviarlos al backend
  static encrypt(data: any): string {
    console.info("Texto que se va a Encriptar", data)
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
