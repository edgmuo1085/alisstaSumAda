import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitTypePage } from './visit-type.page';

const routes: Routes = [
  {
    path: '',
    component: VisitTypePage
  },
  {
    path: 'company-info',
    loadChildren: () => import('../company-info/company-info.module').then(m => m.CompanyInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitTypePageRoutingModule { }
