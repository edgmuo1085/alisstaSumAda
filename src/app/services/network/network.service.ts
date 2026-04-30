import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@capacitor/network';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { CacheService } from '../../services/cache/cache.service';
import { ApiUrlService } from '../apiUrl/api-url.service';

export enum ConnectionStatusEnum {
  Online,
  Offline,
}

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  private hasConnection = new BehaviorSubject(false);

  ipAddress: any;
  connectionStatus: ConnectionStatusEnum;

  loading: HTMLIonLoadingElement | null = null;
  private isTestingConnection = false;

  constructor(
    private http: HttpClient,
    private cacheService: CacheService,
    private alertController: AlertController,
    private loadingCtlr: LoadingController,
    private apiUrl: ApiUrlService,
    private platform: Platform
  ) {
    this.connectionStatus = ConnectionStatusEnum.Offline;

    // Asegurar que Ionic esté listo
    this.platform.ready().then(() => {
      this.showIPAddress();
    });
  }

  showIPAddress() {
    this.http.get('https://api.ipify.org/?format=json').subscribe(ip => {
      this.connectionStatus = ConnectionStatusEnum.Online;
      this.ipAddress = ip;
      this.cacheService.saveIpAddress(this.ipAddress.ip);
    });
  }

  private getNetworkTestRequest(): Observable<any> {
    return this.http
      .get(this.apiUrl.API_GET_BRANCH_OFFICE_EVENT)
      .pipe(retry(2));
  }

  public async getNetworkType(): Promise<string> {
    const status = await Network.getStatus();
    return status.connectionType;
  }

  public getNetworkStatus(): ConnectionStatusEnum {
    return this.connectionStatus;
  }

  public async testNetworkConnection(send = true): Promise<boolean> {
    // Evitar ejecuciones simultáneas
    if (this.isTestingConnection) return false;

    this.isTestingConnection = true;

    try {
      if (!send) {
        this.hasConnection.next(false);
        return false;
      }

      await this.presentLoading('Verificando conexión ...');

      return await new Promise(resolve => {
        this.getNetworkTestRequest().subscribe(
          async () => {
            this.hasConnection.next(true);
            await this.safeDismissLoading();
            resolve(true);
          },
          async () => {
            await this.safeDismissLoading();

            const alert = await this.alertController.create({
              header:
                'Parece que no estás conectado a Internet. ¿Quieres intentar enviar o guardar el acta?',
              mode: 'ios',
              buttons: [
                {
                  text: 'Intentar Enviar',
                  role: 'retry',
                  handler: async () => {
                    await alert.dismiss();
                    const retryResult = await this.testNetworkConnection(true);
                    resolve(retryResult);
                  },
                },
                {
                  text: 'Guardar',
                  role: 'confirm',
                  handler: () => {
                    this.hasConnection.next(false);
                    resolve(false);
                  },
                },
              ],
            });

            await alert.present();
          }
        );
      });
    } finally {
      this.isTestingConnection = false;
    }
  }

  initializeNetworkEvents(): void {
    Network.addListener('networkStatusChange', (status) => {
      this.connectionStatus = status.connected
        ? ConnectionStatusEnum.Online
        : ConnectionStatusEnum.Offline;

      console.log(
        'Network status changed:',
        JSON.stringify(status, null, 2)
      );
    });

    Network.getStatus().then(status => {
      this.connectionStatus = status.connected
        ? ConnectionStatusEnum.Online
        : ConnectionStatusEnum.Offline;
    });
  }

  async presentLoading(message: string) {
    // Asegurar que Ionic esté listo
    await this.platform.ready();

    // Evitar múltiples loadings
    if (this.loading) {
      await this.safeDismissLoading();
    }

    try {
      this.loading = await this.loadingCtlr.create({
        mode: 'ios',
        message,
      });

      await this.loading.present();
    } catch (error) {
      console.warn('Error creando loading:', error);
      this.loading = null;
    }
  }

  async safeDismissLoading() {
    if (!this.loading) return;

    try {
      await this.loading.dismiss();
    } catch (error) {
      console.warn('Error cerrando loading:', error);
    } finally {
      this.loading = null;
    }
  }
}