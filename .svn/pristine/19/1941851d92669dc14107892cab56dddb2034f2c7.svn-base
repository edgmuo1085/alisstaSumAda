import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, fromEvent, merge, Observable, of } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { CacheService } from '../../services/cache/cache.service';
import { environment } from './../../../environments/environment';

export enum ConnectionStatusEnum {
  Online,
  Offline
}

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  private hasConnection = new BehaviorSubject(false);

  ipAddress: any;

  connectionStatus: ConnectionStatusEnum;

  constructor(
    private network: Network,
    private http: HttpClient,
    private cacheService: CacheService,
    private plt: Platform
  ) {
    this.connectionStatus = ConnectionStatusEnum.Offline;
    this.showIPAddress();
  }

  showIPAddress() {
    this.http.get('https://api.ipify.org/?format=json').subscribe((ip) => {
      this.connectionStatus = ConnectionStatusEnum.Online;
      this.ipAddress = ip;
      this.cacheService.saveIpAddress(this.ipAddress.ip);
    });
  }

  private getNetworkTestRequest(): Observable<any> {
    return this.http.get(environment.API_GET_BRANCH_OFFICE_EVENT);
  }

  public getNetworkType(): string {
    return this.network.type;
  }

  public getNetworkStatus(): ConnectionStatusEnum {
    return this.connectionStatus;
  }

  public async testNetworkConnection() {
    try {
      this.getNetworkTestRequest().subscribe(
        success => {
          this.hasConnection.next(true);
          return;
        }, error => {
          this.hasConnection.next(false);
          return;
        });
    } catch (err) {
      console.log('err testNetworkConnection', err);
      this.hasConnection.next(false);
      return;
    }
  }

  initializeNetworkEvents(): void {
    if (this.plt.is('cordova')) {
      this.network.onConnect().subscribe(() => this.connectionStatus = ConnectionStatusEnum.Online);
      this.network.onDisconnect().subscribe(() => this.connectionStatus = ConnectionStatusEnum.Offline);

      return;
    }

    const connectionEvents = merge(
      of(navigator.onLine),
      fromEvent(window, 'online').pipe(mapTo(ConnectionStatusEnum.Online)),
      fromEvent(window, 'offline').pipe(mapTo(ConnectionStatusEnum.Offline))
    );

    connectionEvents.subscribe((status: ConnectionStatusEnum) => this.connectionStatus = status);
  }

}
