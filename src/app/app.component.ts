import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Plugins } from '@capacitor/core';
import { OneSignal, OSNotification, OSNotificationOpenedResult } from '@ionic-native/onesignal/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { environment } from '../environments/environment';
import { NetworkService } from './services/network/network.service';
const { DarkMode } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private oneSignal: OneSignal,
    private alertCtrl: AlertController,
    private networkService: NetworkService,
    private location: Location
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkDarkTheme();
      this.initOneSignal();
      this.networkService.initializeNetworkEvents();
      this.registerBackButtonListener();
      this.router.navigateByUrl('login');
    });
  }

  async checkDarkTheme(): Promise<void> {
    let shouldAdd: boolean;

    if (this.platform.is('android')) {
      shouldAdd = (await DarkMode.isDarkModeOn()).isDarkModeOn;

      DarkMode.addListener('darkModeStateChanged', (state: any) => {
        this.toggleDarkTheme(state.isDarkModeOn);
      });
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
      prefersDark.addEventListener('change', mediaQuery => this.toggleDarkTheme(mediaQuery.matches));
      shouldAdd = prefersDark.matches;
    }

    this.toggleDarkTheme(shouldAdd);
  }

  initOneSignal(): void {
    this.oneSignal.startInit(environment.ONE_SIGNAL_APP_ID, environment.ONE_SIGNAL_SENDER_ID);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe((notification: OSNotification) => {
      this.onNotificationReceived(notification);
    });
    this.oneSignal.handleNotificationOpened().subscribe((result: OSNotificationOpenedResult) => {
      this.onNotificationOpened(result);
    });
    this.oneSignal.endInit();
  }

  onNotificationReceived(notification: OSNotification): void {}

  async onNotificationOpened(result: OSNotificationOpenedResult) {
    const alert = await this.alertCtrl.create({
      header: 'Alissta SUM Comunicaciones',
      mode: 'ios',
      message: result.notification.payload.body,
      buttons: ['ACEPTAR'],
    });
    await alert.present();
    let communicationId = result.notification.payload.additionalData.PKConversacion;
    this.router.navigate(['u/list-communications', communicationId]);
  }

  /**
   * Alterna el modo oscuro en base al parámetro indicado.
   *
   * @param shouldAdd Indica si activar o no el modo oscuro.
   */
  private toggleDarkTheme(shouldAdd: boolean): void {
    document.body.classList.toggle('dark', shouldAdd);
  }

  /**
   * Registra el agente de escucha para el evento de uso del botón físico de atrás de _Android_.
   *
   * Se registra aquí para que el evento se encuentre activo en toda la aplicación. Si al presionar
   * el botón, el usuario se encuentra en una vista a la que no puede retroceder, se intenta cerrar
   * la aplicacación. De lo contrario, se navegará a la vista anterior.
   */
  private async registerBackButtonListener(): Promise<void> {
    this.platform.backButton.subscribeWithPriority(10, async () => {
      const currentUrl = this.router.url;

      if (['/login', '/u/home'].indexOf(currentUrl) > -1) {
        this.closeApp();

        return;
      }

      this.location.back();

      // Por la forma en la que está construido el DOM de la aplicación, el botón físico de
      // atrás no puede completar la navegación correctamente puesto que la vista anterior
      // no es ocultada. Lo siguiente es ocultar la vista anterior de manera manual

      setTimeout(() => {
        const routerOutlet = document.querySelector('app-navbar ion-router-outlet');

        if (!routerOutlet) {
          return;
        }

        if (currentUrl.endsWith('edit-address')) {
          // Caso vista de edición de dirección de empresa

          return;
        }

        console.log(currentUrl);
        routerOutlet.lastElementChild.classList.add('ion-page-hidden');
      }, 200);
    });
  }

  private async closeApp(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Alissta SUM',
      mode: 'ios',
      message: '¿Está seguro que desea salir de la aplicación?',
      buttons: [
        {
          text: 'ACEPTAR',
          handler: () => {
            App.exitApp();
          },
        },
        {
          text: 'CANCELAR',
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
