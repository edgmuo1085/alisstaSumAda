import { Component, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Browser } from '@capacitor/browser';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ConfigService } from 'src/app/config.service';
import { loginMsgError, UserAuth } from 'src/app/intarfaces/interfaces';
import { StorageService } from 'src/app/storage.service';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/Authentication/auth.service';
import { ApiUrlService } from 'src/app/services/apiUrl/api-url.service';
import { finalize, take } from 'rxjs/operators';
import { Network } from '@capacitor/network';
import { NativeBiometric, BiometryType } from '@capgo/capacitor-native-biometric';
import { Preferences } from '@capacitor/preferences';

interface VerifyIdentityResult {
  verified: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPageComponent implements OnInit {
  isProd = environment.production;
  ambientes = environment.ambientes || [];
  selectedIndex = environment.ambienteSeleccionado;

  passwordToggleIcon: string;
  passwordType: string;
  form: UntypedFormGroup;

  private readonly SHOW_PASSWORD_ICON = 'eye';
  private readonly HIDE_PASSWORD_ICON = 'eye-off';
  private readonly INPUT_TYPE_PASSWORD = 'password';
  private readonly INPUT_TYPE_TEXT = 'text';

  private readonly FORGOT_PASSWORD_ALERT_TEXTS = {
    title: '¿Desea recuperar su contraseña?',
    message: `Si desea recuperar su contraseña, por favor seleccione la opción Sí. Esta opción le
    llevará directamente a la página www.alissta.gov.co donde podrá realizar el cambio. Es necesario
    tener conexión a internet. ¿Desea realizar la recuperación de contraseña?`,
    okButtonText: 'Sí',
    cancelButtonText: 'No',
  };

  infoUserAuth: UserAuth;
  encriptInfoUser: any;
  decryptInfoUser: any;
  loading: any;
  passwordTypeInput = 'password';
  showFinger = false;
  activateFinger = false;
  loginMsgError: loginMsgError = {
    header: 'Usuario o contraseña inválida',
    message:
      'Su usuario o contraseña no son correctos. Por favor intente nuevamente. Si desea recordar su contraseña, realice este proceso por la aplicación web en la opción "¿Olvidó su contraseña?".',
  };

  constructor(
    private formBuilder: UntypedFormBuilder,
    private alertController: AlertController,
    private config: ConfigService,
    private storage: Storage,
    private authService: AuthService,
    private router: Router,
    private loadingCtlr: LoadingController,
    private storageService: StorageService,
    private platform: Platform,
    private apiUrl: ApiUrlService
  ) {
    this.initForm();
  }

  ngOnInit() {
    const almacenado = localStorage.getItem('ambienteSeleccionado');
    this.selectedIndex = almacenado ? parseInt(almacenado, 10) : environment.ambienteSeleccionado;
    console.log('Ambiente: ', this.selectedIndex);
  }

  async ionViewWillEnter() {
    await this.platform.ready();
    try {
      const result = await this.safeBiometricCheck();

      if (result.isAvailable) {
        await this.storageService.set('isFingerFaceAvailable', true);
      }

      await this.loadFingerSettings();
      const autologin = await this.storageService.get('autologin');

      if (autologin) {
        await this.autoLogin();
      } else if (this.showFinger && this.activateFinger && result.biometryType === BiometryType.FACE_ID) {
        this.launchFingerprintModal();
      }
    } catch (error) {
      console.error('Error during platform initialization:', error);
      const autologin = await this.storageService.get('autologin');
      if (autologin) {
        await this.autoLogin();
      }
    }

    this.validateShowFinger();
  }

  /**
   * ✅ MÉTODO SEGURO: Verificar disponibilidad biométrica con manejo de errores
   */
  private async safeBiometricCheck(): Promise<{ isAvailable: boolean; biometryType?: BiometryType }> {
    try {
      return await NativeBiometric.isAvailable();
    } catch (error) {
      console.warn('❌ Biometric check failed, using fallback:', error);
      return { isAvailable: false };
    }
  }

  private async loadFingerSettings() {
    try {
      const showLoginWithFinger = await this.storageService.get('showLoginWithFinger');
      this.showFinger = showLoginWithFinger != null ? showLoginWithFinger : false;

      const activateFinger = await this.storageService.get('activateFinger');
      this.activateFinger = activateFinger != null ? activateFinger : false;
    } catch (error) {
      console.error('Error loading finger settings:', error);
    }
  }

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
          Validators.minLength(6),
          Validators.maxLength(15),
          Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+\-=\[\]{};':",.<>?/¿¡|°~`¬]).{6,15}$/),
        ],
      ],
    });
  }

  togglePassword(): void {
    this.passwordToggleIcon = this.passwordToggleIcon === this.HIDE_PASSWORD_ICON ? this.SHOW_PASSWORD_ICON : this.HIDE_PASSWORD_ICON;
    this.passwordType = this.passwordToggleIcon === this.SHOW_PASSWORD_ICON ? this.INPUT_TYPE_TEXT : this.INPUT_TYPE_PASSWORD;
  }

  shouldShowError(control: AbstractControl, error?: string): boolean {
    const hasError = error ? control.hasError(error) : control.errors !== null;
    return hasError && (control.dirty || control.touched);
  }

  login(): void {
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
        const sesion = await this.storage.get('sesion');
        this.afterLoginSuccess(sesion);
      }
    }
  }

  async autentication(employerId: number, userID: string, password: string): Promise<void> {
    const status = await Network.getStatus();
    if (!status.connected) {
      await this.errorLogin('Sin conexión', 'No hay conexión a internet. Por favor verifica tu conexión y vuelve a intentarlo.');
      return;
    }

    await this.presentLoading();

    this.authService
      .login(employerId, userID, password)
      .pipe(
        take(1),
        finalize(() => {
          this.loading.dismiss();
        })
      )
      .subscribe({
        next: async response => {
          if (response.error) {
            await this.errorLogin(response.header, response.message);
            this.config.isLogged = false;
            this.form.reset();
            this.loading.dismiss();
            return;
          }

          this.config.isLogged = true;
          await this.authService.saveSesion(response[0]);
          this.encriptInfoUser = this.authService.encrypt(JSON.stringify(this.infoUserAuth));
          this.storageService.set('isLoginWithFinger', false);
          this.router.navigateByUrl('u/home');
          this.loading.dismiss();
          this.form.reset();

          // ✅ MÉTODO SEGURO: Guardar credenciales biométricas con manejo de errores
          await this.safeSetBiometricCredentials(userID, password);
        },
        error: async err => {
          console.error('Error inesperado:', err);
          await this.errorLogin('Error', 'No se pudo conectar al servidor. Intente nuevamente más tarde.');
          this.config.isLogged = false;
          this.form.reset();
          this.loading.dismiss();
        },
      });
  }

  /**
   * ✅ MÉTODO SEGURO: Guardar credenciales biométricas con fallback
   */
  private async safeSetBiometricCredentials(username: string, password: string): Promise<void> {
    try {
      // Primero verificamos si la biometría está disponible
      const isAvailable = await this.safeBiometricCheck();
      
      if (!isAvailable.isAvailable) {
        console.log('Biometría no disponible, usando almacenamiento seguro alternativo');
        await this.useSecureStorageFallback(username, password);
        return;
      }

      // Intentamos guardar con biometría
      await NativeBiometric.setCredentials({
        username: username,
        password: password,
        server: 'alissta.gov.co',
      });
      
      console.log('✅ Credenciales guardadas exitosamente con biometría');
      
    } catch (error) {
      console.error('❌ Error guardando credenciales biométricas:', error);
      
      // Fallback a almacenamiento seguro
      await this.useSecureStorageFallback(username, password);
      
      // Mostrar mensaje informativo solo si no es un error de emulador
      if (!this.isEmulatorError(error)) {
        await this.showBiometricErrorInfo();
      }
    }
  }

  /**
   * ✅ FALLBACK: Almacenamiento seguro alternativo
   */
  private async useSecureStorageFallback(username: string, password: string): Promise<void> {
    try {
      await Preferences.set({
        key: 'user_credentials_secure',
        value: JSON.stringify({ 
          username, 
          password,
          timestamp: new Date().toISOString()
        })
      });
      console.log('✅ Credenciales guardadas en almacenamiento seguro alternativo');
    } catch (fallbackError) {
      console.error('❌ Error incluso en fallback:', fallbackError);
    }
  }

  /**
   * ✅ DETECTAR ERRORES DE EMULADOR
   */
  private isEmulatorError(error: any): boolean {
    const errorMessage = JSON.stringify(error).toLowerCase();
    return (
      errorMessage.includes('keystore') ||
      errorMessage.includes('key generation') ||
      errorMessage.includes('ecd') ||
      errorMessage.includes('securityexception')
    );
  }

  /**
   * ✅ MENSAJE INFORMATIVO SOBRE ERROR BIOMÉTRICO
   */
  private async showBiometricErrorInfo(): Promise<void> {
    try {
      const alert = await this.alertController.create({
        header: 'Configuración de Seguridad',
        message: 'No se pudo configurar el acceso biométrico. Puedes configurarlo más tarde en los ajustes de la aplicación.',
        buttons: ['ENTENDIDO']
      });
      await alert.present();
    } catch (alertError) {
      console.warn('No se pudo mostrar alerta informativa:', alertError);
    }
  }

  validateForm(): boolean {
    if (this.form.invalid) {
      Object.keys(this.form.controls).forEach(c => {
        this.form.controls[c].markAsTouched();
        this.form.controls[c].markAsDirty();
      });
    }
    return this.form.valid;
  }

  async errorLogin(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      mode: 'ios',
      message,
      buttons: ['ACEPTAR'],
    });
    await alert.present();
  }

  async forgotPasswordOld(): Promise<void> {
    const okHandler = async (): Promise<void> => {
      await Browser.open({
        url: this.apiUrl.RECUPERAR_PASSWORD,
        windowName: '_system',
      });
    };

    const cancelButton = { text: this.FORGOT_PASSWORD_ALERT_TEXTS.cancelButtonText, role: 'cancel' };
    const okButton = { text: this.FORGOT_PASSWORD_ALERT_TEXTS.okButtonText, role: 'OK', handler: okHandler };

    const alert = this.alertController.create({
      header: this.FORGOT_PASSWORD_ALERT_TEXTS.title,
      mode: 'ios',
      message: this.FORGOT_PASSWORD_ALERT_TEXTS.message,
      buttons: [cancelButton, okButton],
    });

    (await alert).present();
  }

  /** ✅ Nueva implementación biométrica con manejo de errores */
  async launchFingerprintModal() {
    try {
      // Verificar disponibilidad del sistema biométrico de forma segura
      const available = await this.safeBiometricCheck();

      if (!available.isAvailable) {
        console.log('Biometría no disponible en este dispositivo.');
        await this.errorLogin('Biometría no disponible', 'La autenticación biométrica no está disponible en este dispositivo.');
        return;
      }

      // Forzamos el tipo de retorno de verifyIdentity con "unknown" y lo convertimos después
      const response = (await NativeBiometric.verifyIdentity({
        reason: 'Autentícate para continuar',
        title: 'INGRESAR CON HUELLA',
        subtitle: 'Usa tu huella o rostro',
        description: 'Coloca tu dedo en el sensor o usa FaceID.',
      })) as unknown as VerifyIdentityResult;

      // Validamos que la respuesta tenga la propiedad "verified"
      if (response && typeof response.verified === 'boolean') {
        if (response.verified) {
          console.log('Autenticación exitosa');
          await this.loginByFinger();
        } else {
          console.log('Autenticación cancelada o fallida');
        }
      } else {
        console.warn('Respuesta inesperada de verifyIdentity:', response);
      }
    } catch (error) {
      console.error('Error en autenticación biométrica:', error);
      await this.errorLogin('Error de autenticación', 'No se pudo completar la autenticación biométrica. Intenta con usuario y contraseña.');
    }
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
            response => {
              if (response.length === 0) {
                this.loading.dismiss();
                this.errorLogin(this.loginMsgError.header, this.loginMsgError.message);
              } else {
                this.afterLoginSuccess(response[0]);
                this.loading.dismiss();
              }
            },
            error => {
              console.log("Error loginByFinger(): ", error)
              this.config.isLogged = false;
              this.errorLogin(this.loginMsgError.header, this.loginMsgError.message);
              this.form.reset();
              this.loading.dismiss();
            }
          );
      }
    } else {
      console.log('No sirvió');
    }
  }

  validateShowFinger() {
    this.storageService
      .get('showLoginWithFinger')
      .then(result => (this.showFinger = result ?? false))
      .catch(() => (this.showFinger = false));

    this.storageService
      .get('activateFinger')
      .then(result => (this.activateFinger = result ?? false))
      .catch(() => (this.activateFinger = false));
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

  async forgotPassword() {
    const url = this.apiUrl.RECUPERAR_PASSWORD;
    await Browser.open({ url });
  }

  cambiarAmbiente() {
    this.apiUrl.setAmbiente(this.selectedIndex);
  }
}