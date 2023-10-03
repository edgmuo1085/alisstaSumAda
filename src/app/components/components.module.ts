import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { Device } from '@ionic-native/device/ngx';
import { RecommendationDetailComponent } from './recommendation-detail/recommendation-detail.component';
import { AdvisoryVerificationComponent } from './advisory-verification/advisory-verification.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material';
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

import { registerLocaleData } from '@angular/common';
// importar locales
import localePy from '@angular/common/locales/es-PY';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';
import { ResendVerificationCodeComponent } from './resend-verification-code/resend-verification-code.component';
import { PipesModule } from '../pipes/pipes.module';
import { InactiveUsersTalkComponent } from './inactive-users-talk/inactive-users-talk.component';
import { PopoverComponent } from './popover/popover.component';
import { ScannerQrComponent } from './scanner-qr/scanner-qr.component';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localePy, 'es');
registerLocaleData(localePt, 'pt');
registerLocaleData(localeEn, 'en');

@NgModule({
  declarations: [
    HeaderComponent,
    RecommendationDetailComponent,
    AdvisoryVerificationComponent,
    ResendVerificationCodeComponent,
    InactiveUsersTalkComponent,
    PopoverComponent,
    ScannerQrComponent,
  ],
  exports: [
    HeaderComponent,
    RecommendationDetailComponent,
    AdvisoryVerificationComponent,
    ResendVerificationCodeComponent,
    InactiveUsersTalkComponent,
    PopoverComponent,
    ScannerQrComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    RouterModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    PipesModule,
  ],
  providers: [
    Device,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: LOCALE_ID, useValue: 'es' },
  ],
  entryComponents: [
    RecommendationDetailComponent,
    AdvisoryVerificationComponent,
    ResendVerificationCodeComponent,
    InactiveUsersTalkComponent,
  ],
})
export class ComponentsModule {}
