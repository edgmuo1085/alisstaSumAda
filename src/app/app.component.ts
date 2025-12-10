import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';
import { AlertController, Platform } from '@ionic/angular';
import { environment } from '../environments/environment';
import { NetworkService } from './services/network/network.service';
import { AppVersionService } from './services/version/app-version.service';
import { ApiUrlService } from './services/apiUrl/api-url.service';
import { Subscription } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  ambienteNombre = '';
  isProduction = environment.production;
  private subscription = new Subscription();

  constructor(
    private platform: Platform,
    private router: Router,
    private alertCtrl: AlertController,
    private networkService: NetworkService,
    private location: Location,
    private AppVersionSv: AppVersionService,
    private apiUrlSv: ApiUrlService,
    private storage: Storage, //TODO: VAlidar la migracion de todas las importaciones a ul servicio
  ) {
    this.initializeApp();
    this.listenToAppState();
    this.AppVersionSv.checkForUpdate(); 
  }

  ngOnInit() {
    if (!this.isProduction) {
      // Esperar a que el servicio esté inicializado
      this.subscription.add(
        this.apiUrlSv.initialized$.subscribe(initialized => {
          if (initialized) {
            this.subscription.add(
              this.apiUrlSv.ambienteNombre$.subscribe(nombre => {
                this.ambienteNombre = nombre;
              })
            );
          }
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.storage.create(); //TODO: Validar migrar el uso del storage a el servicio
      this.initializeCapacitorPlugins();
      this.checkDarkTheme();
      this.networkService.initializeNetworkEvents();
      this.registerBackButtonListener();
      this.router.navigateByUrl('login');
    });
  }

    private async initializeCapacitorPlugins() {
    try {
      // ✅ StatusBar con Capacitor (reemplaza StatusBar de Ionic Native)
      await StatusBar.setStyle({ 
        style: Style.Dark // Texto blanco para mejor contraste
      });
      
      // ✅ SplashScreen con Capacitor (reemplaza SplashScreen de Ionic Native)
      await SplashScreen.hide();
      
      console.log('✅ Capacitor plugins initialized successfully');
    } catch (error) {
      // ⚠️ Esto es normal en entorno web/emulador sin plugins nativos
      console.warn('Capacitor plugins not available in current environment:', error);
    }
  }

     // Escucha cambios de estado en la app (foreground/background)
     listenToAppState(): void {
      App.addListener('appStateChange', ({ isActive }) => {
        if (isActive) {
          console.log('La app volvió al primer plano.');
          this.AppVersionSv.checkForUpdate(); // Verifica actualizaciones al volver al foreground
        }
      });
    }

  // async checkDarkTheme(): Promise<void> {
  //   let shouldAdd: boolean;

  //   if (this.platform.is('android')) {
  //     shouldAdd = (await DarkMode.isDarkModeOn()).isDarkModeOn;

  //     DarkMode.addListener('darkModeStateChanged', (state: any) => {
  //       this.toggleDarkTheme(state.isDarkModeOn);
  //     });
  //   } else {
  //     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  //     prefersDark.addEventListener('change', mediaQuery => this.toggleDarkTheme(mediaQuery.matches));
  //     shouldAdd = prefersDark.matches;
  //   }

  //   this.toggleDarkTheme(shouldAdd);
  // }

  checkDarkTheme(): void {
  try {
    // Verificar si el navegador soporta matchMedia
    if (!window.matchMedia) {
      console.log('Dark mode not supported in this browser');
      return;
    }

    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Aplicar tema inicial
    this.toggleDarkTheme(prefersDark.matches);
    
    // Escuchar cambios (con compatibilidad cross-browser)
    const changeHandler = (mediaQuery: MediaQueryListEvent) => {
      this.toggleDarkTheme(mediaQuery.matches);
    };
    
    // Soporte para navegadores modernos y antiguos
    if (prefersDark.addEventListener) {
      prefersDark.addEventListener('change', changeHandler);
    } else if (prefersDark.addListener) {
      // Fallback para navegadores antiguos
      prefersDark.addListener(changeHandler);
    }
    
  } catch (error) {
    console.warn('Error in dark theme detection:', error);
    // La app continúa funcionando normalmente
  }
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
