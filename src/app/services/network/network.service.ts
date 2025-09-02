import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { BehaviorSubject, fromEvent, merge, Observable, of } from 'rxjs';
import { mapTo, retry } from 'rxjs/operators';
import { CacheService } from '../../services/cache/cache.service';
import { environment } from './../../../environments/environment';

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

  loading: any;

  constructor(
    private network: Network,
    private http: HttpClient,
    private cacheService: CacheService,
    private plt: Platform,
     private alertController: AlertController,
    private loadingCtlr: LoadingController
  ) {
    this.connectionStatus = ConnectionStatusEnum.Offline;
    this.showIPAddress();
  }

  showIPAddress() {
    this.http.get('https://api.ipify.org/?format=json').subscribe(ip => {
      this.connectionStatus = ConnectionStatusEnum.Online;
      this.ipAddress = ip;
      this.cacheService.saveIpAddress(this.ipAddress.ip);
    });
  }

  private getNetworkTestRequest(): Observable<any> {
    return this.http.get(environment.API_GET_BRANCH_OFFICE_EVENT).pipe(retry(2));
  }

  public getNetworkType(): string {
    return this.network.type;
  }

  public getNetworkStatus(): ConnectionStatusEnum {
    return this.connectionStatus;
  }

  public async testNetworkConnection(send = true): Promise<boolean> {
    if (!send) {
      this.hasConnection.next(false);
      return false;
    } else {
      await this.presentLoading('Verificando conexión ...');
    }

    return new Promise(resolve => {
      this.getNetworkTestRequest().subscribe(
        async () => {
          this.hasConnection.next(true);
          await this.loading.dismiss();
          resolve(true);
        },
        async () => {
          await this.loading.dismiss();

          // Mostrar el alert y esperar la decisión del usuario
          const alert = await this.alertController.create({
            header: 'Parece que no estás conectado a Internet. ¿Quieres intentar enviar o guardar el acta?',
            mode: 'ios',
            buttons: [
              {
                text: 'Intentar Enviar',
                role: 'retry',
                handler: async () => {
                  await alert.dismiss();
                  // Volver a intentar conexión y devolver lo que retorne
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
  }
  

  initializeNetworkEvents(): void {
    if (this.plt.is('cordova')) {
      this.network.onConnect().subscribe(() => (this.connectionStatus = ConnectionStatusEnum.Online));
      this.network.onDisconnect().subscribe(() => (this.connectionStatus = ConnectionStatusEnum.Offline));

      return;
    }

    const connectionEvents = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(ConnectionStatusEnum.Online)),
      fromEvent(window, 'offline').pipe(mapTo(ConnectionStatusEnum.Offline))
    );

    connectionEvents.subscribe((status: ConnectionStatusEnum) => (this.connectionStatus = status));
  }

    async presentLoading(message) {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message,
    });
    return this.loading.present();
  }
}
