import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignaturePadModule } from 'angular2-signaturepad';
import { ComponentsModule } from './../../components/components.module';
import { SignatureQRComponent } from './signature-qr/signature-qr.component';
import { SignatureWithoutQRComponent } from './signature-without-qr/signature-without-qr.component';
import { SurveyAndSignaturePageRoutingModule } from './survey-and-signature-routing.module';
import { SurveyAndSignaturePage } from './survey-and-signature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignaturePadModule,
    SurveyAndSignaturePageRoutingModule,
    ComponentsModule
  ],
  declarations: [
    SurveyAndSignaturePage,
    SignatureQRComponent,
    SignatureWithoutQRComponent
  ]
})
export class SurveyAndSignaturePageModule { }
