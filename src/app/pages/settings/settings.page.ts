import { Component, OnInit } from '@angular/core';
import { faBook, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ConfigService } from '../../config.service';
import { Observable } from 'rxjs';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { StorageService } from 'src/app/storage.service';
import { ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { OneSignal } from '@ionic-native/onesignal/ngx';


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
    laterButtonLabel: 'Recordarme más tarde'
  };

  /**
   * Identificadores de la aplicación para realizar calificación en el mercado de aplicaciones.
   */
  private readonly RATE_APP_IDS = {
    ios: `<${this.config.iosAppID}>`,
    android: `market://details?id=<${this.config.androidAppID}>`
  };

  public static readonly NOTIFICATIONS_KEY: string = 'notifications';

  notifications: boolean;
  autologin: boolean;
  touchfaceid: boolean;
  isFingerFaceAvailable = false;

  constructor(
    private appRate: AppRate,
    private config: ConfigService,
    private iab: InAppBrowser,
    private storage: Storage,
    private menuConfOptions: MenuConfiguracionService,
    private router: Router,
    private storageService: StorageService,
    private toastController: ToastController,
    private oneSignal: OneSignal
  ) {
    this.faBook = faBook;
  }

  ngOnInit(): void {
    this.optMenuOptions = this.menuConfOptions.getMenuOpts();
    this.storageService.get('autologin').then(result => {
      if (result != null) {
        this.autologin = result;
      }
    }).catch(e => {
      console.log('error: ' + e);
    });
    this.storageService.get('activateFinger').then(result => {
      if (result != null) {
        this.touchfaceid = result;
      }
    }).catch(e => {
      console.log('error: ' + e);
    });
    this.storageService.get('isFingerFaceAvailable').then(result => {
      if (result != null) {
        this.isFingerFaceAvailable = result;
      }
    }).catch(e => {
      console.log('error: ' + e);
    });

    let localStorageNotifications: string = localStorage.getItem(SettingsPage.NOTIFICATIONS_KEY);
    this.notifications = (localStorageNotifications == 'true');
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
    localStorage.setItem(SettingsPage.NOTIFICATIONS_KEY, (this.notifications) ? 'true' : 'false');
    if (this.notifications) this.oneSignal.setSubscription(true);
    else this.oneSignal.setSubscription(false);
  }

  /**
   * Muestra una ventana de diálogo que le permite al usuario calificar la aplicación en el mercado
   * de aplicaciones.
   */
  async rateApp(): Promise<void> {
    this.appRate.setPreferences({
      storeAppURL: this.RATE_APP_IDS,
      customLocale: this.RATE_APP_TEXTS,
      simpleMode: true
    });

    this.appRate.promptForRating(true);
  }

  /**
   * Abre la dirección URL de la web de _Alissta_ en un navegador para realizar el cambio de contraseña.
   */
  async changePassword(): Promise<void> {
    // this.iab.create(this.config.alisstaChangePasswordURL, '_system');
    this.iab.create(environment.RECUPERAR_PASSWORD, '_system');

  }

  /**
   * Método para cerrar la sesion voluntaria
   */
  singOff() {
    this.oneSignal.setSubscription(false);
    this.oneSignal.deleteTag('PERSONAL');
    this.storage.clear();
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  async toastBiometric(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  async toastAutologin(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  switchTouchFaceID(): void {
    this.storageService.set('activateFinger', this.touchfaceid);
    if (!this.touchfaceid) {
      this.toastBiometric('¡TouchID/FaceID desactivado!');
    } else {
      this.toastBiometric('¡TouchID/FaceID activado!');
    }
  }

  switchAutologin(): void {
    this.storageService.set('autologin', this.autologin);
    if (!this.autologin) {
      this.toastAutologin('¡Autologin desactivado!');
    } else {
      this.toastAutologin('¡Autologin activado!');
    }
  }

}
