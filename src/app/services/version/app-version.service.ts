import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { ModalController, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { environment } from '../../../environments/environment'
import { UpdateAlertComponent } from '../../components/update-alert/update-alert.component';

@Injectable({
  providedIn: 'root'
})
export class AppVersionService {
  private appVersion = ""; // Versión local de la app (puedes obtenerla dinámicamente en Capacitor)


  appsTable = {
    1: "Alissta Gestion Android",
    2: "Alissta Gestion IOS",
    3: "Alissta SUM Android",
    4: "Alissta SUM IOS"
  };

  constructor(
    private http: HttpClient,
    private modalCtrl: ModalController,
    private platform: Platform
  ) { }

  // Método asíncrono para verificar la versión
  async checkForUpdate(): Promise<void> {
    const env = environment.production

    const apiVersionUrl = env
      ? 'https://sempresa.adacsc.co/sg-sst/Empresa/Obtener-Version-APP?intAppSistema=3'
      : 'https://test-positiva-webservice-empresa-pre.adacsc.co/sg-sst/Empresa/Obtener-Version-APP?intAppSistema=3'
    //TODO: Si se requieren mas ambientes, es mejor crear un enum con las url de los web Services

    try {
      const appInfo = await App.getInfo(); // Obtiene la versión actual
      this.appVersion = appInfo.version;

      const response: any = await this.http.get(apiVersionUrl).toPromise();

      console.log('Url de entorno: ', apiVersionUrl)

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

  // Mostrar modal de actualización
  private async showUpdateAlert(apiVersion: string): Promise<void> {
    const isIos = this.platform.is('ios'); // Detectar si la plataforma es iOS

    const modal = await this.modalCtrl.create({
      component: UpdateAlertComponent,
      componentProps: {
        appVersion: this.appVersion,
        apiVersion: apiVersion,
        isIos: isIos
      },
      backdropDismiss: false,
      cssClass: 'process-tracker-centered-modal'
    });

    await modal.present();

    const { data } = await modal.onDidDismiss();

    // Si el usuario hizo clic en "Actualizar ahora", redirigir a la tienda
    if (data === 'update') {
      this.redirectToStore();
    }
  }


  async redirectToStore(): Promise<void> {
    const androidUrl = 'https://play.google.com/store/apps/details?id=co.positiva.alisstasum&pcampaignid=web_share';
    const iosUrl = 'https://apps.apple.com/co/app/alissta-sum/id1534224945';

    try {
      const url = this.platform.is('android') ? androidUrl : iosUrl;

      // Asegúrate de manejar plataformas no soportadas
      if (!url) {
        throw new Error('Plataforma no soportada para redirección a la tienda.');
      }

      // Abre el enlace en el navegador
      await Browser.open({ url });
    } catch (error) {
      // Manejo de errores
      console.error('Error al redirigir a la tienda:', error);
    }
  }
}
