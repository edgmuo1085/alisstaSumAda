import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SignaturePageRoutingModule } from './signature-routing.module';
import { SignaturePage } from './signature.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, SignaturePageRoutingModule, ComponentsModule],
  declarations: [SignaturePage],
  providers: [],
})
export class SignaturePageModule {}
