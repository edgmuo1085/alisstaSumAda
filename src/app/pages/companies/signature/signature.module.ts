import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule } from '@ionic/angular';
import { SignaturePageRoutingModule } from './signature-routing.module';
import { SignaturePage } from './signature.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SignaturePageRoutingModule, ComponentsModule],
  declarations: [SignaturePage],
  providers: [InAppBrowser],
})
export class SignaturePageModule {}
