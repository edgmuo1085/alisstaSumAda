import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultEventPage } from './consult-event.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultEventPage,
  },
  {
    path: 'selectRegisterEvent',
    loadChildren: () => import('../select-register-event/select-register-event.module').then(m => m.SelectRegisterEventPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultEventPageRoutingModule {}
