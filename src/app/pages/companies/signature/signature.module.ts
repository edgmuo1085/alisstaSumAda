import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule } from '@ionic/angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { SignaturePageRoutingModule } from './signature-routing.module';
import { SignaturePage } from './signature.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SignaturePadModule, SignaturePageRoutingModule],
  declarations: [SignaturePage],
  providers: [InAppBrowser],
})
export class SignaturePageModule {}
