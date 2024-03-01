import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoRegisterEventManualPage } from './info-register-event-manual.page';

const routes: Routes = [
  {
    path: '',
    component: InfoRegisterEventManualPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoRegisterEventManualPageRoutingModule {}
