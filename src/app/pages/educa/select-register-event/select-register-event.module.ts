import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectRegisterEventPageRoutingModule } from './select-register-event-routing.module';

import { SelectRegisterEventPage } from './select-register-event.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SelectRegisterEventPageRoutingModule],
  declarations: [SelectRegisterEventPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SelectRegisterEventPageModule {}
