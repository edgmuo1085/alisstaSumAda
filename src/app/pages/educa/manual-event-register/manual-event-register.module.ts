import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManualEventRegisterPageRoutingModule } from './manual-event-register-routing.module';

import { ManualEventRegisterPage } from './manual-event-register.page';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, ManualEventRegisterPageRoutingModule],
  declarations: [ManualEventRegisterPage],
})
export class ManualEventRegisterPageModule {}
