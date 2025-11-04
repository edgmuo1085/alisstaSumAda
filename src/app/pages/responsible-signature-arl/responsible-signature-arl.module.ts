import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsibleSignatureARLPageRoutingModule } from './responsible-signature-arl-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

import { ResponsibleSignatureARLPage } from './responsible-signature-arl.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ResponsibleSignatureARLPageRoutingModule, ComponentsModule],
  declarations: [ResponsibleSignatureARLPage],
  providers: [],
})
export class ResponsibleSignatureARLPageModule {}
