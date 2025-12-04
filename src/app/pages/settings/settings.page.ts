import { Component, OnInit } from '@angular/core';
import { faBook, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Browser } from '@capacitor/browser';
import { ConfigService } from '../../config.service';
import { Observable } from 'rxjs';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Router } from '@angular/router';
import { AppStorageService } from 'src/app/app-storage.service';
import { ToastController } from '@ionic/angular';
import { ApiUrlService } from 'src/app/services/apiUrl/api-url.service';
import { AppLauncher } from '@capacitor/app-launcher';
import { Storage } from '@ionic/storage';

/**
 * Componente de la vista de configuraciones.
 */
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  /**
   * Array de opciones del menú de configuración
   */
  optMenuOptions: Observable<any[]>;

  /**
   * Clase para el ícono de tratamiento de datos.
   */
  faBook: IconDefinition;

  /**
   * Cadenas de texto para la ventana de alerta de calificación de la aplicación.
   */
  private readonly RATE_APP_TEXTS = {
    title: 'Reseña Alissta SUM',
    message: `Si te gusta Alissta SUM, ¿podrías escribirnos una reseña? No tomará más de un minuto. ¡Gracias por tu apoyo!`,
    rateButtonLabel: 'Escribir reseña ahora',
    cancelButtonLabel: 'No, gracias',
    laterButtonLabel: 'Recordarme más tarde',
  };

  /**
   * Identificadores de la aplicación para realizar calificación en el mercado de aplicaciones.
   */
  private readonly RATE_APP_IDS = {
    ios: `<${this.config.iosAppID}>`,
    android: `market://details?id=${this.config.androidAppID}`,
  };

  public static readonly NOTIFICATIONS_KEY: string = 'notifications';

  notifications: boolean;
  autologin: boolean;
  touchfaceid: boolean;
  isFingerFaceAvailable = false;

  constructor(
    private config: ConfigService,
    private menuConfOptions: MenuConfiguracionService,
    private router: Router,
    private appStorageSv: AppStorageService,
    private ionicStorage: Storage,
    private toastController: ToastController,
    private apiUrl: ApiUrlService
  ) {
    this.faBook = faBook;
  }

  ngOnInit(): void {
    this.optMenuOptions = this.menuConfOptions.getMenuOpts();
    this.appStorageSv
      .get('autologin')
      .then(result => {
        if (result != null) {
          this.autologin = result;
        }
      })
      .catch(e => {
        console.log('error: ' + e);
      });
    this.appStorageSv
      .get('activateFinger')
      .then(result => {
        if (result != null) {
          this.touchfaceid = result;
        }
      })
      .catch(e => {
        console.log('error: ' + e);
      });
    this.appStorageSv
      .get('isFingerFaceAvailable')
      .then(result => {
        if (result != null) {
          this.isFingerFaceAvailable = result;
        }
      })
      .catch(e => {
        console.log('error: ' + e);
      });

    const localStorageNotifications: string = localStorage.getItem(SettingsPage.NOTIFICATIONS_KEY);
    this.notifications = localStorageNotifications == 'true';
  }

  /**
   * Este metodo permite capturar la opción seleccionada en el menu y de esa manera realizar la
   * respectiva acción
   *
   */
  optionSelectedMenu(optMenuSelected: any) {
    switch (optMenuSelected.title) {
      case 'Notificaciones':
        break;
      case 'TouchID/FaceID':
        break;
      case 'Autologin':
        break;
      case 'Tutoriales':
        break;
      case 'Calificar el APP':
        this.rateApp();
        break;
      case 'Acerca de':
        this.router.navigate(['u', 'settings', 'about']);
        break;
      case 'Terminos y condiciones':
        this.router.navigateByUrl('u/settings/termAndConditions');
        break;
      case 'Cambiar contraseña':
        this.changePassword();
        break;
      case 'Cerrar sesión':
        this.singOff();
        break;
      default:
        break;
    }
  }

  switchNotifications(): void {
    this.notifications = !this.notifications;
    localStorage.setItem(SettingsPage.NOTIFICATIONS_KEY, this.notifications ? 'true' : 'false');
    const message = this.notifications ? '¡Notificaciones activadas!' : '¡Notificaciones desactivadas!';
    this.showToast(message);
  }

  /**
   * Abre la dirección URL de la web de _Alissta_ en un navegador para realizar el cambio de contraseña.
   */
  async changePassword(): Promise<void> {
    await Browser.open({
      url: this.apiUrl.RECUPERAR_PASSWORD,
      presentationStyle: 'fullscreen', // Opcional - similar a tu configuración anterior
    });
  }

  /**
   * Método para cerrar la sesion voluntaria
   */
async singOff() {
  try {
    // 1. Obtener TODAS las claves de biometría ANTES de limpiar
    const biometricData = await this.appStorageSv.get('isFingerFaceAvailable');
    const activateFinger = await this.appStorageSv.get('activateFinger');
    const biometricEnabled = await this.appStorageSv.get(this.appStorageSv.KEY_BIOMETRIC_ENABLED); // ← NUEVA
    const ambienteSeleccionado = await this.appStorageSv.get('ambienteSeleccionado');

    // 2. Limpiar ambos storages
    await this.appStorageSv.clear();
    await this.ionicStorage.clear();

    // 3. Limpiar otros storages
    localStorage.clear();
    sessionStorage.clear();

    // 4. Restaurar TODAS las claves importantes
    if (biometricData !== null) {
      await this.appStorageSv.set('isFingerFaceAvailable', biometricData);
    }
    if (activateFinger !== null) {
      await this.appStorageSv.set('activateFinger', activateFinger);
    }
    if (biometricEnabled !== null) {
      await this.appStorageSv.set(this.appStorageSv.KEY_BIOMETRIC_ENABLED, biometricEnabled); // ← NUEVA
    }
    if (ambienteSeleccionado !== null) {
      await this.appStorageSv.set('ambienteSeleccionado', ambienteSeleccionado);
    }

    // 5. Navegar al login
    this.router.navigateByUrl('/login');

  } catch (error) {
    console.error('Error durante cierre de sesión:', error);
    this.router.navigateByUrl('/login');
  }
}

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  switchTouchFaceID(): void {
    this.appStorageSv.set('activateFinger', this.touchfaceid);
    const message = this.touchfaceid ? '¡TouchID/FaceID activado!' : '¡TouchID/FaceID desactivado!';
    this.showToast(message);
  }

  switchAutologin(): void {
    this.appStorageSv.set('autologin', this.autologin);
    const message = this.autologin ? '¡Autologin activado!' : '¡Autologin desactivado!';
    this.showToast(message);
  }

  async rateApp() {
    const userAgent = navigator.userAgent;
    const dispositivo = userAgent.includes('Android') ? 'android' : 'ios';

    if (dispositivo === 'android') {
      await AppLauncher.openUrl({
        url: this.RATE_APP_IDS.android,
      });
    } else {
      await AppLauncher.openUrl({
        url: `https://apps.apple.com/us/app/${this.RATE_APP_IDS.ios}`,
      });
    }
  }
}
