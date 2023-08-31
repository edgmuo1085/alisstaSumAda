import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
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
import { SignaturePadModule } from 'angular2-signaturepad';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SignaturePadModule,
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
      useClass: IonicRouteStrategy
    },
    OneSignal
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
