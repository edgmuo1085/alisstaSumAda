import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectRegisterEventPage } from './select-register-event.page';

const routes: Routes = [
  {
    path: '',
    component: SelectRegisterEventPage
  },
  {
    path: 'registerEventManual',
    loadChildren: () => import('../manual-event-register/manual-event-register.module').then(m => m.ManualEventRegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectRegisterEventPageRoutingModule {}
