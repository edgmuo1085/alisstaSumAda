import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsibleSignatureARLPage } from './responsible-signature-arl.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsibleSignatureARLPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsibleSignatureARLPageRoutingModule {}
