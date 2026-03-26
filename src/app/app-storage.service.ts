import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  // Keys usados en la app
  readonly KEY_CREDENTIALS = 'credentials'; // { nit, documento, password } (opcional: password puede omitirse)
  readonly KEY_SESSION = 'sesion';
  readonly KEY_BIOMETRIC_ENABLED = 'biometricEnabled';
  readonly KEY_ENCRYPT_INFO_USER = 'encryptInfoUser';
  readonly KEY_AUTOLOGIN = 'autologin';
  readonly KEY_LAST_EMPLOYER = 'lastEmployerID';
  readonly KEY_LAST_USERID = 'lastUserID';
  readonly KEY_AMBIENTE = 'ambienteSeleccionado';

  readonly KEY_INFO_USER_AUTH = 'infoUserAuth';
  readonly KEY_SHOW_LOGIN_FINGER = 'showLoginWithFinger';
  readonly KEY_ACTIVATE_FINGER = 'activateFinger';
  readonly KEY_IS_LOGIN_WITH_FINGER = 'isLoginWithFinger';
  readonly KEY_IS_FINGER_FACE_AVAILABLE = 'isFingerFaceAvailable';


  async set(key: string, value: any): Promise<void> {
    await Preferences.set({ key, value: JSON.stringify(value) });
  }

  async get<T = any>(key: string): Promise<T | null> {
    const res = await Preferences.get({ key });
    if (!res || res.value == null) return null;
    try {
      return JSON.parse(res.value) as T;
    } catch {
      // valor no JSON
      return res.value as any as T;
    }
  }

  async remove(key: string): Promise<void> {
    await Preferences.remove({ key });
  }

  async clear(): Promise<void> {
    await Preferences.clear();
  }

  async setSession(user: any) {
    await this.set(this.KEY_SESSION, user);
    this.userSubject.next(user);
  }

  async clearSession() {
    await this.remove(this.KEY_SESSION);
    this.userSubject.next(null);
  }

  async loadSession() {
    const user = await this.get(this.KEY_SESSION);
    this.userSubject.next(user);
  }
}
