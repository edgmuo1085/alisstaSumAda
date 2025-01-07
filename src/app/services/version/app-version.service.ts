import { HttpClient } from '@angular/common/http';
import { getPlatform, Injectable } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppVersionService {
  private appVersion: string = ''; // Versión local de la app (puedes obtenerla dinámicamente en Capacitor)

  appsTable = {
    1: 'Alissta Gestion Android',
    2: 'Alissta Gestion IOS',
    3: 'Alissta SUM Android',
    4: 'Alissta SUM IOS',
  };

  constructor(
    private http: HttpClient,
    private alertCtrl: AlertController,
    private platform: Platform
  ) {}

  // Método asíncrono para verificar la versión
  async checkForUpdate(): Promise<void> {
    const env = environment.APP_VERSION_ENVIRONMENT;

    let apiVersionUrl =
      env === 'https://sproveedor.adacsc.co/sg-sst/'
        ? 'https://sempresa.adacsc.co/sg-sst/Empresa/Obtener-Version-APP?intAppSistema=4'
        : 'https://test-positiva-webservice-empresa-pre.adacsc.co/sg-sst/Empresa/Obtener-Version-APP?intAppSistema=4';
    //TODO: Si se requieren mas ambientes, es mejor crear un enum con las url de los web Services

    try {
      const appInfo = await App.getInfo(); // Obtiene la versión actual
      this.appVersion = appInfo.version;

      const response: any = await this.http.get(apiVersionUrl).toPromise();

      console.log('Url de entorno: ', apiVersionUrl);

      if (this.isVersionOutdated(this.appVersion, response)) {
        this.showUpdateAlert(response);
      }
    } catch (error) {
      console.error('Error al verificar la versión', error);
    }
  }
  // Método para comparar versiones
  private isVersionOutdated(local: string, latest: string): boolean {
    const localParts = local.split('.').map(Number);
    const latestParts = latest.split('.').map(Number);

    for (let i = 0; i < 3; i++) {
      if (latestParts[i] > (localParts[i] || 0)) {
        return true; // La versión local está desactualizada
      } else if (latestParts[i] < (localParts[i] || 0)) {
        return false; // La versión local está actualizada
      }
    }
    return false; // Las versiones son iguales
  }

  // Mostrar alerta con dos botones
  private async showUpdateAlert(apiVersion: string): Promise<void> {
    const isIos = this.platform.is('ios'); // Detectar si la plataforma es iOS

    const alert = await this.alertCtrl.create({
      header: '', // Dejarlo vacío para personalizar el mensaje
      message: `
        <div style="text-align: center;">
          <img src="../assets/logos/logo_alissta_alert.png" alt="App Icon" style="width: 70px; max-width: 70px !important; display: block; margin: 0 auto;"/>
          <h2 style="margin: 0;">Actualización disponible</h2>
          <p style="margin: 5px 0;">Versión actual: <strong>${this.appVersion}</strong></p>
          <p style="margin: 5px 0;">Versión disponible: <strong>${apiVersion}</strong></p>
          <p style="margin: 10px 0;">
            ${
              isIos
                ? '¡Actualiza desde la App Store para seguir disfrutando de las nuevas mejoras!'
                : '¡Actualiza para seguir disfrutando de las nuevas mejoras!'
            }
          </p>
        </div>
      `,
      buttons: isIos
        ? [
            {
              text: 'Más tarde',
              role: 'cancel',
            },
          ] // En iOS no hay botones
        : [
            {
              text: 'Actualizar ahora',
              handler: () => {
                // this.redirectToStore(); // Redirigir a la tienda
              },
            },
            {
              text: 'Más tarde',
              role: 'cancel',
            },
          ],
      mode: 'ios',
      cssClass: 'custom-update-alert',
      backdropDismiss: false,
    });
    await alert.present();
  }

  // Redirigir a la tienda adecuada
  // private redirectToStore(): void {
  //   if (this.platform.is('android')) {
  //     window.open('https://play.google.com/store/apps/details?id=co.gov.alissta&pcampaignid=web_share', '_system');
  //   } else if (this.platform.is('ios')) {
  //     window.open('https://apps.apple.com/co/app/alissta/id1306274186', '_system');
  //   }
  // }
  // async redirectToStore(): Promise<void> {
  //   const androidUrl = 'https://play.google.com/store/apps/details?id=co.gov.alissta&pcampaignid=web_share';
  //   const iosUrl = 'itms-apps://itunes.apple.com/app/id1306274186';

  //   if (this.platform.is('android')) {
  //     // Abre Play Store
  //     await Browser.open({ url: androidUrl });
  //   } else if (this.platform.is('ios')) {
  //     // Abre App Store directamente
  //     await Browser.open({ url: iosUrl });
  //   } else {
  //     console.log('Plataforma no soportada para redirección a la tienda.');
  //   }
  // }

  // async redirectToStore(): Promise<void> {
  //   const androidUrl = 'market://details?id=co.gov.alissta';
  //   const iosUrl = 'itms-apps://itunes.apple.com/app/id1306274186';
  //   const fallbackAndroidUrl = 'https://play.google.com/store/apps/details?id=co.gov.alissta&pcampaignid=web_share';
  //   const fallbackIosUrl = 'https://apps.apple.com/co/app/alissta/id1306274186';

  //   try {
  //     if (this.platform.is('android')) {
  //       // Intenta abrir Play Store directamente
  //       await App.openUrl({ url: androidUrl });
  //     } else if (this.platform.is('ios')) {
  //       // Intenta abrir App Store directamente
  //       await App.openUrl({ url: iosUrl });
  //     } else {
  //       console.log('Plataforma no soportada para redirección a la tienda.');
  //     }
  //   } catch (error) {
  //     console.error('Error al abrir la tienda, intentando fallback:', error);
  //     // Fallback al navegador si falla
  //     const fallbackUrl = this.platform.is('android') ? fallbackAndroidUrl : fallbackIosUrl;
  //     window.open(fallbackUrl, '_system');
  //   }
  // }

  // async redirectToStore(): Promise<void> {
  //   const androidUrl = 'https://play.google.com/store/apps/details?id=co.positiva.alisstasum&pcampaignid=web_share';
  //   const iosUrl = 'https://apps.apple.com/co/app/alissta-sum/id1534224945';

  //   try {
  //     const url = this.platform.is('android') ? androidUrl : iosUrl;

  //     // Asegúrate de manejar plataformas no soportadas
  //     if (!url) {
  //       throw new Error('Plataforma no soportada para redirección a la tienda.');
  //     }

  //     // Abre el enlace en el navegador
  //     await Browser.open({ url });
  //   } catch (error) {
  //     // Manejo de errores
  //     console.error('Error al redirigir a la tienda:', error);
  //   }
  // }
}
