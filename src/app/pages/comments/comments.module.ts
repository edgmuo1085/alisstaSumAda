import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { IonicModule } from '@ionic/angular';
import { CommentsPageRoutingModule } from './comments-routing.module';
import { CommentsPage } from './comments.page';
import { FailComponent } from './fail/fail.component';
import { SuccessComponent } from './success/success.component';

import { MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule } from '@angular/material';

import {MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter} from '@angular/material';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CommentsPageRoutingModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
  ],
  declarations: [
    CommentsPage,
    SuccessComponent,
    FailComponent
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
              {
                provide: DateAdapter,
                useClass: MomentDateAdapter,
                deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
              },

              {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}]
})
export class CommentsPageModule {}
