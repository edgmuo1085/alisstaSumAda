// src/app/services/auth-facade/auth-facade.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';
import { take, finalize } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';

import { AuthService } from './auth.service';
import { BiometricService } from './biometric.service';
import { ConfigService } from 'src/app/config.service';
import { AppStorageService } from 'src/app/app-storage.service';



@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {

  private secretKey = '8y/B?E(H+MbQeThWmYq3t6w9z$C&F)J@';
  private encryptInfoUser: string;

  constructor(
    private auth: AuthService,
    private storage: AppStorageService,
    private biometric: BiometricService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private configSv: ConfigService,
  ) {}

  private async presentLoading(message = 'Cargando') {
    const l = await this.loadingCtrl.create({
      message,
      mode: 'ios',
    });
    await l.present();
    return l;
  }

  /**
   * Login con usuario/clave.
   * - Llama a AuthService.login (usa CryptoService internamente)
   * - Guarda sesión en AppStorageService
   * - Guarda last employer / user
   * - Ofrece activar biometría (si está disponible)
   */
// Dentro de AuthFacadeService

// async loginWithPassword(employerID: number, userID: string, password: string): Promise<void> {
//   console.log('[AuthFacade] loginWithPassword START');//delete
//   const loading = await this.presentLoading('Iniciando sesión...');
//    console.log('[AuthFacade] Loading presented'); //delete

//   this.auth
//     .login(employerID, userID, password)
//     .pipe(take(1))
//     .subscribe(
//       async (response: any) => {
//         console.log('[AuthFacade] login response:', JSON.stringify(response, null, 2)); //delete
//         try {
//           if (response?.error) {
//              console.log('[AuthFacade] Login error returned by server'); //delete
//               this.configSv.isLogged = false;
//             const alertErr = await this.alertCtrl.create({
//               header: response.header || 'Error',
//               message: response.message || 'Error en el inicio de sesión',
//               buttons: ['ACEPTAR'],
//             });
//             await alertErr.present();
//             return;
//           }

//          const session = Array.isArray(response) ? response[0] : response;
//           console.log('[AuthFacade] Parsed session:', JSON.stringify(session, null, 2)); //delete

//           this.configSv.isLogged = true;

//           await this.storage.set(this.storage.KEY_SESSION, session);
//           console.log('[AuthFacade] Session saved'); //delete

//           await this.storage.set(this.storage.KEY_LAST_EMPLOYER, employerID);
//           console.log('[AuthFacade] employerID saved'); //delete

//           await this.storage.set(this.storage.KEY_LAST_USERID, userID);
//           console.log('[AuthFacade] userID saved'); //delete

//           // 3) Cerrar loader ANTES de preguntar por biometría para que la UI quede interactiva.
//           try { await loading.dismiss();
//             console.log('[AuthFacade] Loading dismissed'); //delete
//            } catch (e) {console.log("[AuthFacade] Error dismissing loading:", JSON.stringify(e, null, 2)); }

//           // 4) Preguntar al usuario si quiere activar biometría y esperar su decisión.
//           //    maybeAskEnableBiometric ahora devuelve Promise<boolean> que resuelve cuando termina todo el flujo.
//           console.log('[AuthFacade] Calling maybeAskEnableBiometric...');//delete
//           await this.maybeAskEnableBiometric(employerID, userID, password);
//           console.log('[AuthFacade] maybeAskEnableBiometric finished');//delete

//           // 5) Navegar al dashboard (siempre)
//          console.log('[AuthFacade] NAVIGATING to /u/u/home ...');
//           await this.router.navigateByUrl('/u/home');
//           console.log('[AuthFacade] Navigation executed');
//         } catch (err) {
//           console.error('Error handling login response:', JSON.stringify(err, null, 2));
//           // Asegurar que cerramos el loader si algo falla
//           try { await loading.dismiss(); } catch (e) {console.log("Error en el login.dismiss: ", JSON.stringify(e, null, 2))}
//           const alert = await this.alertCtrl.create({
//             header: 'Error',
//             message: 'Ocurrió un error durante el proceso de inicio de sesión.',
//             buttons: ['ACEPTAR'],
//           });
//           await alert.present();
//         }
//       },
//       async err => {
//         // error HTTP
//          this.configSv.isLogged = false;
//         try { await loading.dismiss(); } catch (e) {console.log("erroe en HTTP Login: ", JSON.stringify(e, null, 2))}
//         console.error('Login HTTP error:', JSON.stringify(err, null, 2));
//         const alert = await this.alertCtrl.create({
//           header: 'Error',
//           message: 'No se pudo conectar al servidor. Intente nuevamente más tarde.',
//           buttons: ['ACEPTAR'],
//         });
//         await alert.present();
//       }
//     );
// }

async loginWithPassword(employerID: number, userID: string, password: string): Promise<void> {
  console.log('[AuthFacade] loginWithPassword START');
  const loading = await this.presentLoading('Iniciando sesión...');
  
  this.auth
    .login(employerID, userID, password)
    .pipe(take(1))
    .subscribe(
      async (response: any) => {
        console.log('[AuthFacade] login response:', JSON.stringify(response, null, 2));
        try {
          if (response?.error) {
            this.configSv.isLogged = false;
            const alertErr = await this.alertCtrl.create({
              header: response.header || 'Error',
              message: response.message || 'Error en el inicio de sesión',
              buttons: ['ACEPTAR'],
            });
            await alertErr.present();
            return;
          }

          const session = Array.isArray(response) ? response[0] : response;
          console.log('[AuthFacade] Parsed session:', JSON.stringify(session, null, 2));

          this.configSv.isLogged = true;

          // ✅ MIGRADO: Guardar sesión con validación de sesión previa
          await this.saveSessionWithValidation(session);
          
          // ✅ MIGRADO: Guardar información del usuario (como en el servicio antiguo)
          const userAuth = {
            documentoEmpleador: employerID,
            documentoUsuario: userID,
            password: password,
          };
          
          await this.saveEncryptedUserInfo(userAuth); // Como encrypt() del antiguo
          await this.saveUserAuthInfo(userAuth);      // Como saveRegisterUserAuth() del antiguo

          await this.storage.set(this.storage.KEY_LAST_EMPLOYER, employerID);
          await this.storage.set(this.storage.KEY_LAST_USERID, userID);

          // ✅ MIGRADO: Guardar flag de login con huella (como en el componente antiguo)
          await this.storage.set(this.storage.KEY_IS_LOGIN_WITH_FINGER, false);

          try { 
            await loading.dismiss();
          } catch (e) {
            console.log("[AuthFacade] Error dismissing loading:", JSON.stringify(e, null, 2)); 
          }

          console.log('[AuthFacade] Calling maybeAskEnableBiometric...');
          await this.maybeAskEnableBiometric(employerID, userID, password);
          console.log('[AuthFacade] maybeAskEnableBiometric finished');

          console.log('[AuthFacade] NAVIGATING to /u/home ...');
          await this.router.navigateByUrl('/u/home');
          
        } catch (err) {
          console.error('Error handling login response:', JSON.stringify(err, null, 2));
          try { await loading.dismiss(); } catch (e) {}
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'Ocurrió un error durante el proceso de inicio de sesión.',
            buttons: ['ACEPTAR'],
          });
          await alert.present();
        }
      },
      async err => {
        this.configSv.isLogged = false;
        try { await loading.dismiss(); } catch (e) {}
        console.error('Login HTTP error:', JSON.stringify(err, null, 2));
        const alert = await this.alertCtrl.create({
          header: 'Error',
          message: 'No se pudo conectar al servidor. Intente nuevamente más tarde.',
          buttons: ['ACEPTAR'],
        });
        await alert.present();
      }
    );
}

/**
 * ✅ NUEVO MÉTODO: Guardar sesión con validación (como en el servicio antiguo)
 */
  private async saveSessionWithValidation(newSession: any): Promise<void> {
    console.log('New session', newSession);
    
    // Obtener sesión previa
    const previousSession = await this.storage.get(this.storage.KEY_SESSION);
    console.log('Previous session', previousSession);

    if (previousSession) {
      const previousIdRegistro = previousSession.idRegistro;
      const currentIdRegistro = newSession.idRegistro;

      // Si es un usuario diferente, limpiar todo
      if (previousIdRegistro !== currentIdRegistro) {
        await this.storage.clear();
        localStorage.clear();
        sessionStorage.clear();
      }
    }

    // Guardar nueva sesión
    await this.storage.set(this.storage.KEY_SESSION, newSession);
  };

/**
 * ✅ NUEVO MÉTODO: Guardar información encriptada del usuario
 */
  private async saveEncryptedUserInfo(userAuth: any): Promise<void> {
    try {
      // Verificar si ya existe información encriptada
      const existingEncryptedInfo = await this.storage.get(this.storage.KEY_ENCRYPT_INFO_USER);
      
      if (!existingEncryptedInfo) {
        // ✅ USAR EL MÉTODO CORRECTO: CryptoService.encrypt() para consistencia
        // Pero para storage local, necesitamos usar CryptoJS como en el servicio antiguo
        this.encryptInfoUser = CryptoJS.AES.encrypt(
          JSON.stringify(userAuth), 
          this.secretKey.trim()
        ).toString();
        
        await this.storage.set(this.storage.KEY_ENCRYPT_INFO_USER, this.encryptInfoUser);
        console.log('[AuthFacade] Encrypted user info saved with CryptoJS');
      } else {
        this.encryptInfoUser = existingEncryptedInfo;
        console.log('[AuthFacade] Encrypted user info already exists');
      }
    } catch (error) {
      console.error('[AuthFacade] Error saving encrypted user info:', error);
    }
  }

   private decryptUserInfo(encryptedValue: string): string {
    try {
      return CryptoJS.AES.decrypt(encryptedValue, this.secretKey.trim()).toString(CryptoJS.enc.Utf8);
    } catch (error) {
      console.error('[AuthFacade] Error decrypting user info:', error);
      return '';
    }
  };


    private async saveUserAuthInfo(userInfoAuth: any): Promise<void> {
    try {
      await this.storage.set(this.storage.KEY_INFO_USER_AUTH, userInfoAuth);
      console.log('[AuthFacade] User auth info saved');
    } catch (error) {
      console.error('[AuthFacade] Error saving user auth info:', error);
    }
  };

  async tryAutoLoginWithEncryptedInfo(): Promise<boolean> {
    try {
      const encryptedInfo = await this.storage.get(this.storage.KEY_ENCRYPT_INFO_USER);
      if (encryptedInfo) {
        const decryptedInfo = this.decryptUserInfo(encryptedInfo);
        if (decryptedInfo) {
          const userAuth = JSON.parse(decryptedInfo);
          const session = await this.storage.get(this.storage.KEY_SESSION);
          
          if (session) {
            console.log('[AuthFacade] Auto-login successful with encrypted info');
            this.configSv.isLogged = true;
            await this.router.navigateByUrl('/u/home');
            return true;
          }
        }
      }
      return false;
    } catch (error) {
      console.error('[AuthFacade] Error in auto-login with encrypted info:', error);
      return false;
    }
  };

/**
 * Pregunta al usuario si quiere activar biometría, espera la decisión/verificación/guardado.
 * Devuelve true si al final la biometría quedó activada, false en caso contrario.
 */
private async maybeAskEnableBiometric(
  employerID: number | string,
  userID: string,
  password: string
): Promise<boolean> {

  console.log('[AuthFacade] maybeAskEnableBiometric START');

  const avail = await this.biometric.isAvailable();
  console.log('[AuthFacade] biometric available:', JSON.stringify(avail));

  if (!avail) {
    console.log('[AuthFacade] Biometric NOT available → disabling flag');
    await this.storage.set(this.storage.KEY_BIOMETRIC_ENABLED, false);
    return false;
  }

  return new Promise<boolean>(async (resolve) => {
    console.log('[AuthFacade] creating biometric enable alert...');

    const alert = await this.alertCtrl.create({
      header: 'Activar acceso biométrico',
      message: '¿Deseas activar el inicio de sesión con huella / FaceID para este usuario?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: async () => {
            console.log('[AuthFacade] User selected NO for biometric');
            await this.storage.set(this.storage.KEY_BIOMETRIC_ENABLED, false);

            console.log('[AuthFacade] dismissing alert (NO option)');
            await alert.dismiss();

            resolve(false);
          },
        },
        {
          text: 'Sí',
          handler: async () => {
            console.log('[AuthFacade] User selected YES for biometric');

            try {
              const verified = await this.biometric.verifyIdentity();
              console.log('[AuthFacade] biometric.verifyIdentity:', JSON.stringify(verified));

              if (!verified) {
                console.log('[AuthFacade] verifyIdentity FAILED → disabling flag');
                await this.storage.set(this.storage.KEY_BIOMETRIC_ENABLED, false);

                console.log('[AuthFacade] dismissing alert (verification failed)');
                await alert.dismiss();

                resolve(false);
                return;
              }

              console.log('[AuthFacade] verifyIdentity OK, saving credentials...');
              const saved = await this.biometric.storeCredentials(employerID, userID, password);

              console.log('[AuthFacade] biometric.storeCredentials returned:', JSON.stringify(saved));

              const enabled = !!saved;
              await this.storage.set(this.storage.KEY_BIOMETRIC_ENABLED, enabled);

              console.log('[AuthFacade] KEY_BIOMETRIC_ENABLED set to:', JSON.stringify(enabled));

              console.log('[AuthFacade] dismissing alert (success)');
              await alert.dismiss();

              resolve(enabled);
            } catch (err) {
              console.error('[AuthFacade] error in biometric flow:', JSON.stringify(err));

              await this.storage.set(this.storage.KEY_BIOMETRIC_ENABLED, false);

              console.log('[AuthFacade] dismissing alert (error)');
              await alert.dismiss();

              resolve(false);
            }
          },
        },
      ],
    });

    console.log('[AuthFacade] presenting biometric enable alert');
    await alert.present();
  });
}




  /**
   * Login por biometría:
   * - verifica flag biometricEnabled en storage
   * - solicita verifyIdentity (prompt)
   * - obtiene credenciales del plugin biométrico y hace login
   */
  async loginWithBiometric(): Promise<void> {
    // Verificar si el usuario previamente activó biometría
    const enabled = await this.storage.get<boolean>(this.storage.KEY_BIOMETRIC_ENABLED);
    if (!enabled) {
      // opcional: mostrar mensaje
      const alert = await this.alertCtrl.create({
        header: 'Biometría desactivada',
        message: 'La autenticación biométrica no está activada para ningún usuario.',
        buttons: ['ACEPTAR'],
      });
      await alert.present();
      return;
    }

    // Verificar disponibilidad
    const avail = await this.biometric.isAvailable();
    if (!avail) {
      const alert = await this.alertCtrl.create({
        header: 'Biometría no disponible',
        message: 'El dispositivo no soporta autenticación biométrica.',
        buttons: ['ACEPTAR'],
      });
      await alert.present();
      return;
    }

    // Prompt biométrico
    const verified = await this.biometric.verifyIdentity();
    if (!verified) {
      // usuario canceló o falló
      return;
    }

    // Obtener credenciales desde plugin biométrico
    const creds = await this.biometric.getCredentials();
    if (!creds) {
      const alert = await this.alertCtrl.create({
        header: 'Credenciales no encontradas',
        message: 'No se encontraron credenciales guardadas para iniciar sesión con biometría.',
        buttons: ['ACEPTAR'],
      });
      await alert.present();
      return;
    }

    // Recuperar último employerID guardado
    const employerID = (await this.storage.get<number>(this.storage.KEY_LAST_EMPLOYER)) ?? 0;
    const username = creds.username;
    const password = creds.password;

    // Hacer login normal (AuthService ya encripta la petición)
    const loading = await this.presentLoading('Iniciando sesión...');
    this.auth
      .login(employerID, username, password)
      .pipe(
        take(1),
        finalize(() => loading.dismiss())
      )
      .subscribe(
        async (response: any) => {
          if (response?.error) {
            this.configSv.isLogged = false;
            const alert = await this.alertCtrl.create({
              header: response.header || 'Error',
              message: response.message || 'Error en el inicio de sesión',
              buttons: ['ACEPTAR'],
            });
            await alert.present();
            return;
          }

          const session = Array.isArray(response) ? response[0] : response;
          this.configSv.isLogged = true;
          await this.storage.set(this.storage.KEY_SESSION, session);
          await this.router.navigateByUrl('/u/home');
        },
        async err => {
          this.configSv.isLogged = false;
          console.error('Error loginWithBiometric -> login:', JSON.stringify(err, null, 2));
          const alert = await this.alertCtrl.create({
            header: 'Error',
            message: 'No se pudo iniciar sesión con las credenciales guardadas.',
            buttons: ['ACEPTAR'],
          });
          await alert.present();
        }
      );
  }

  /**
   * Intento de autologin con session guardada (no biométrico).
   * Si existe una sesión válida en storage lleva a /u/u/home.
   */
  async tryAutoLogin(): Promise<boolean> {
    const session = await this.storage.get(this.storage.KEY_SESSION);
    if (session) {
      // Ojo: aquí podrías validar token/expiración si aplica
      await this.router.navigateByUrl('/u/home');
      return true;
    }
    return false;
  }

  /**
   * Logout: borra session y credenciales (opcional)
   */
  async logout(clearBiometric = true): Promise<void> {
    if (clearBiometric) {
      try {
        await this.biometric.deleteCredentials();
      } catch (e) {
        console.warn('No se pudieron eliminar credenciales biométricas:', JSON.stringify(e, null, 2));
      }
    }
    await this.storage.clear();
    await this.router.navigateByUrl('/login');
  }
}
