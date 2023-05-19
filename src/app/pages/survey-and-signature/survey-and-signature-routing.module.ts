import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveyAndSignaturePage } from './survey-and-signature.page';

const routes: Routes = [
  {
    path: '',
    component: SurveyAndSignaturePage
  },
  {
    path: 'responsibleSignatureARL',
    loadChildren: () =>
      import('../responsible-signature-arl/responsible-signature-arl.module').then(m => m.ResponsibleSignatureARLPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SurveyAndSignaturePageRoutingModule {}
