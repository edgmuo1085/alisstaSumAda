import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { Network } from '@ionic-native/network/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    PipesModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    NetworkInterface,
    BarcodeScanner,
    Camera,
    Geolocation,
    FingerprintAIO,
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy,
    },
    OneSignal,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
