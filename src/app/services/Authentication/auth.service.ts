import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { userAuth } from '../../intarfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_LOGIN = environment.API_AUTH;
  httpHeaders: HttpHeaders;

  secretKey = '8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@';

  encryptInfoUser: string;

  constructor(private http: HttpClient,
    private storage: Storage) { }

  login(employerID: number, userID: string, password: string): Observable<any> {
    const rq = {
      nitEmpresa: employerID,
      documentoEmpleado: userID,
      pass: password
    };
    console.log('Url Login',this.API_LOGIN);
    return this.http.post(this.API_LOGIN, rq);
  }

  async saveSesion(newSesion: any): Promise<void> {
    console.log('Newsesion', newSesion);
    const previousSession = await this.storage.get('sesion');
    console.log('previousSession', previousSession);

    if (previousSession) {
      const previousIdRegistro = previousSession.idRegistro;
      const currentIdRegistro = newSesion.idRegistro;

      if (previousIdRegistro !== currentIdRegistro) {
        this.storage.clear();
        localStorage.clear();
        sessionStorage.clear();
      }
    }

    this.storage.set('sesion', newSesion);
  }

  saveRegisterUserAuth(userInfoAuth: userAuth) {
    this.storage.set('infoUserAuth', userInfoAuth);
  }

  async encrypt(value: string): Promise<string> {
    const isLogged = await this.storage.get('encryptInfoUser');
    if (isLogged === null) {
      this.encryptInfoUser = CryptoJS.AES.encrypt(value, this.secretKey.trim()).toString();
      this.storage.set('encryptInfoUser', this.encryptInfoUser);
    }
    return this.encryptInfoUser;
  }

  decrypt(textToDecrypt: string) {
    return CryptoJS.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
  }

}
