import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateCommunicationPageRoutingModule } from './create-communication-routing.module';

import { CreateCommunicationPage } from './create-communication.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, CreateCommunicationPageRoutingModule],
  declarations: [CreateCommunicationPage],
})
export class CreateCommunicationPageModule {}
