import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { InAppBrowser, InAppBrowserObject, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ConfigService } from 'src/app/config.service';
import { userAuth } from 'src/app/intarfaces/interfaces';
import { StorageService } from 'src/app/storage.service';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/Authentication/auth.service';
import { SettingsPage } from '../../settings/settings.page';

const { App } = Plugins;

/**
 * Componente de la vista de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  options: InAppBrowserOptions = {
    location: 'yes', // Or 'no'
    hidden: 'no', // Or  'yes'
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes', // Android only ,shows browser zoom controls
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no', // Android only
    closebuttoncaption: 'Cerrar', // iOS only
    disallowoverscroll: 'no', // iOS only
    toolbar: 'yes', // iOS only
    enableViewportScale: 'no', // iOS only
    allowInlineMediaPlayback: 'no', // iOS only
    presentationstyle: 'fullscreen', // iOS only
    fullscreen: 'yes', // Windows only
  };

  /**
   * Ícono que acompaña al control de usuario de contraseña para permitir al usuario revelar y
   * ocultar la contraseña.
   */
  passwordToggleIcon: string;

  /**
   * Tipo del control de usuario para la contraseña.
   *
   * Se usa para permitir mostrar/ocultar la contraseña.
   */
  passwordType: string;

  /**
   * Formulario.
   */
  form: FormGroup;

  /**
   * Clase CSS del ícono para revelar contraseña en el control de usuario.
   */
  private readonly SHOW_PASSWORD_ICON = 'eye';

  /**
   * Clase CSS del ícono para ocultar contraseña en el control de usuario.
   */
  private readonly HIDE_PASSWORD_ICON = 'eye-off';

  /**
   * Tipo de control de usuario para contraseñas.
   */
  private readonly INPUT_TYPE_PASSWORD = 'password';

  /**
   * Tipo de control de usuario para cadenas de textos.
   */
  private readonly INPUT_TYPE_TEXT = 'text';

  /**
   * Cadenas de texto para la ventana de alerta de recuperación de contraseña.
   */
  private readonly FORGOT_PASSWORD_ALERT_TEXTS = {
    title: '¿Desea recuperar su contraseña?',
    message: `Si desea recuperar su contraseña, por favor seleccione la opción Sí. Esta opción le
    llevará directamente a la página www.alissta.gov.co donde podrá realizar el cambio. Es necesario
    tener conexión a internet. ¿Desea realizar la recuperación de contraseña?`,
    okButtonText: 'Sí',
    cancelButtonText: 'No',
  };

  infoUserAuth: userAuth;
  encriptInfoUser: any;
  decryptInfoUser: any;
  loading: any;
  passwordTypeInput = 'password';
  showFinger = false;
  activateFinger = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private iab: InAppBrowser,
    private config: ConfigService,
    private storage: Storage,
    private authService: AuthService,
    private router: Router,
    private loadingCtlr: LoadingController,
    private faio: FingerprintAIO,
    private storageService: StorageService,
    private platform: Platform,
    private oneSignal: OneSignal
  ) {
    this.initForm();
  }

  ngOnInit() {}

  ionViewWillEnter() {
    this.platform.ready().then(() => {
      this.faio
        .isAvailable()
        .then((ava: any) => {
          this.storageService.set('isFingerFaceAvailable', true);

          this.storageService
            .get('showLoginWithFinger')
            .then(result => {
              if (result != null) {
                this.showFinger = result;
              }
            })
            .catch(e => {
              console.log('error: ' + e);
            });

          this.storageService
            .get('activateFinger')
            .then(result => {
              if (result != null) {
                this.activateFinger = result;
              }
            })
            .catch(e => {
              console.log('error: ' + e);
            });

          this.storageService
            .get('autologin')
            .then(result => {
              if (result != null) {
                if (result) {
                  this.autoLogin();
                } else {
                  if (this.showFinger && this.activateFinger && ava === 'face') {
                    this.launchFingerprintModal();
                  }
                }
              }
            })
            .catch(e => {
              console.log('error: ' + e);
            });
        })
        .catch((error: any) => {
          this.storageService.get('autologin').then(result => {
            if (result) {
              this.autoLogin();
            }
          });
        });
    });

    this.validateShowFinger();
  }

  /**
   * Inicializa el formulario de inicio de sesión.
   */
  initForm(): void {
    this.passwordToggleIcon = this.HIDE_PASSWORD_ICON;
    this.passwordType = 'password';
    this.form = this.formBuilder.group({
      employerID: ['', Validators.required],
      userID: ['', Validators.required],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(15),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{6,}$'),
        ],
      ],
    });
  }

  /**
   * Muestra u oculta la contraseña en el control de usuario.
   */
  togglePassword(): void {
    this.passwordToggleIcon = this.passwordToggleIcon === this.HIDE_PASSWORD_ICON ? this.SHOW_PASSWORD_ICON : this.HIDE_PASSWORD_ICON;
    this.passwordType = this.passwordToggleIcon === this.SHOW_PASSWORD_ICON ? this.INPUT_TYPE_TEXT : this.INPUT_TYPE_PASSWORD;
  }

  /**
   * Indica si debe mostrarse un mensaje de error al usuario para este control.
   *
   * Un mensaje de error se muestra cuando el usuario ha interactuado con el control
   * o cuando se haya establecido programáticamente para mostrarse.
   *
   * @param control Control de usuario.
   * @param error Tipo de error que se está evaluando. Si no se proporciona, se evalúa cualquier tipo de error.
   */
  shouldShowError(control: AbstractControl, error?: string): boolean {
    const hasError = !!error ? control.hasError(error) : control.errors !== null;

    return hasError && (control.dirty || control.touched);
  }

  /**
   * Si el formulario es válido, realiza el inicio de sesión.
   */
  login(): void {
    console.log('El formulario es: ', this.form);
    const employerId = this.form.value.employerID;
    const userID = this.form.value.userID;
    const password = this.form.value.password;
    this.infoUserAuth = {
      documentoEmpleador: employerId,
      documentoUsuario: userID,
      password,
    };
    const validForm = this.validateForm();
    if (validForm) {
      this.autentication(employerId, userID, password);
    }
  }

  async autoLogin() {
    const infoUserAuthSave = await this.storage.get('encryptInfoUser');
    if (infoUserAuthSave) {
      this.decryptInfoUser = this.authService.decrypt(infoUserAuthSave);
      if (this.decryptInfoUser) {
        // El siguiente código podría usarse para cuando se implemente el servicio de autenticación
        // por tokens, cuando tenga que actualizarse el token de sesión y el token de refresco esté
        // caduco
        //
        // this.decryptInfoUser = JSON.parse(this.decryptInfoUser);
        // const employerId = this.decryptInfoUser.documentoEmpleador;
        // const userID = this.decryptInfoUser.documentoUsuario;
        // const password = this.decryptInfoUser.password;
        // this.autentication(employerId, userID, password);

        const sesion = await this.storage.get('sesion');
        this.afterLoginSuccess(sesion);
      }
    }
  }

  async autentication(employerId: number, userID: string, password: string): Promise<void> {
    await this.presentLoading();

    setTimeout(() => {
      this.authService.login(employerId, userID, password).subscribe(
        async response => {
          console.log('respuesta del login', response);
          let localStorageNotification: string = localStorage.getItem(SettingsPage.NOTIFICATIONS_KEY);
          let notification: boolean;
          if (localStorageNotification) {
            console.log('localStorageNotification', localStorageNotification);
            notification = localStorageNotification == 'true';
          } else {
            console.log('ELSE');
            notification = true;
            localStorage.setItem(SettingsPage.NOTIFICATIONS_KEY, 'true');
          }
          this.oneSignal.setSubscription(notification);
          console.log('setSubscription', notification);
          this.oneSignal.sendTag('PERSONAL', response['0'].idRegistro);
          console.log('oneSignal.sendTag');
          this.config.isLogged = true;
          await this.authService.saveSesion(response[0]);
          console.log('saveSesion', response[0]);
          this.encriptInfoUser = this.authService.encrypt(JSON.stringify(this.infoUserAuth));
          console.log('encriptInfoUser', this.encriptInfoUser);
          this.storageService.set('isLoginWithFinger', false);
          this.router.navigateByUrl('u/home');
          console.log('no llega');
          this.loading.dismiss();
          console.log('no llega2');
          this.form.reset();
        },
        error => {
          this.config.isLogged = false;
          this.errorLogin();
          this.form.reset();
          this.loading.dismiss();
        }
      );
    }, 2000);
  }

  /**
   * Comprueba si el formulario es válido.
   *
   * Si el formulario no es válido, marca todos los controles de usuario como si el usuario hubiese
   * interactuado con ellos para mostrar los mensajes de error.
   */
  validateForm(): boolean {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(c => {
        this.form.controls[c].markAsTouched();
        this.form.controls[c].markAsDirty();
      });
    }

    return this.form.valid;
  }

  /**
   * Muestra una ventana de diálogo que le permite al usuario saber que fallo el inició de sesion
   */

  async errorLogin() {
    const alert = await this.alertController.create({
      header: 'Usuario o contraseña inválida',
      mode: 'ios',
      // tslint:disable-next-line: max-line-length
      message:
        'Su usuario o contraseña no son correctos. Por favor intente nuevamente. Si desea recordar su contraseña realice este proceso por la aplicación web en la opción ¿Olvidó su contraseña?',
      buttons: ['ACEPTAR'],
    });

    await alert.present();
  }

  /**
   * Muestra una ventana de diálogo que le permite al usuario ir a la página de _Alissta_ para realizar
   * recuperación de contraseña.
   */
  async forgotPassword(): Promise<void> {
    const okHandler = (): void => {
      // this.iab.create(this.config.allistaPasswordRecoveryURL, '_system');
      // this.iab.create(this.config.allistaPasswordRecoveryURL, '_blank', this.options);

      let inAppBrowser: InAppBrowserObject = this.iab.create(environment.RECUPERAR_PASSWORD, '_blank', this.options);
      inAppBrowser.on('message').subscribe(event => {
        inAppBrowser.close();
      });
    };

    const cancelButton = {
      text: this.FORGOT_PASSWORD_ALERT_TEXTS.cancelButtonText,
      role: 'cancel',
    };

    const okButton = {
      text: this.FORGOT_PASSWORD_ALERT_TEXTS.okButtonText,
      role: 'OK',
      handler: okHandler,
    };

    const alert = this.alertController.create({
      header: this.FORGOT_PASSWORD_ALERT_TEXTS.title,
      mode: 'ios',
      message: this.FORGOT_PASSWORD_ALERT_TEXTS.message,
      buttons: [cancelButton, okButton],
    });

    (await alert).present();
  }

  /**
   * Este método abre la opción para ingresar con huella dactilar
   */
  launchFingerprintModal() {
    this.faio
      .isAvailable()
      .then((result: any) => {
        console.log(result);
        this.faio
          .show({
            cancelButtonTitle: 'Cancelar',
            disableBackup: true,
            title: 'INGRESAR CON HUELLA',
          })
          .then((result: any) => {
            console.log('Authenticacion exitosa');
            this.loginByFinger();
          })
          .catch((error: any) => {
            console.log('Authenticacion erronea');
          });
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  async loginByFinger(): Promise<void> {
    const infoUserAuthSave = await this.storage.get('encryptInfoUser');
    if (infoUserAuthSave) {
      this.decryptInfoUser = this.authService.decrypt(infoUserAuthSave);
      if (this.decryptInfoUser) {
        await this.presentLoading();
        this.decryptInfoUser = JSON.parse(this.decryptInfoUser);
        this.authService
          .login(this.decryptInfoUser.documentoEmpleador, this.decryptInfoUser.documentoUsuario, this.decryptInfoUser.password)
          .subscribe(
            (response: any) => {
              if (response.length === 0) {
                this.loading.dismiss();
                this.errorLogin();
              } else {
                this.afterLoginSuccess(response[0]);
                this.loading.dismiss();
              }
            },
            (error: any) => {
              this.config.isLogged = false;
              this.errorLogin();
              this.form.reset();
              this.loading.dismiss();
            }
          );
      }
    } else {
      console.log('No sirvio');
    }
  }

  validateShowFinger() {
    this.storageService
      .get('showLoginWithFinger')
      .then(result => {
        if (result != null) {
          this.showFinger = result;
        } else {
          this.showFinger = false;
        }
      })
      .catch(e => {
        console.log(e);
        this.showFinger = false;
      });
    this.storageService
      .get('activateFinger')
      .then(result => {
        if (result != null) {
          this.activateFinger = result;
        } else {
          this.activateFinger = false;
        }
      })
      .catch(e => {
        console.log(e);
        this.activateFinger = false;
      });
  }

  async afterLoginSuccess(response: any): Promise<void> {
    this.config.isLogged = true;
    await this.authService.saveSesion(response);
    this.encriptInfoUser = this.authService.encrypt(JSON.stringify(this.infoUserAuth));
    this.router.navigateByUrl('u/home');
    this.form.reset();
  }

  async presentLoading() {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    return this.loading.present();
  }
}
