import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManualEventRegisterPage } from './manual-event-register.page';

const routes: Routes = [
  {
    path: '',
    component: ManualEventRegisterPage,
  },
  {
    path: 'infoRegisterUserManual',
    loadChildren: () =>
      import('../info-register-event-manual/info-register-event-manual.module').then(m => m.InfoRegisterEventManualPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManualEventRegisterPageRoutingModule {}
