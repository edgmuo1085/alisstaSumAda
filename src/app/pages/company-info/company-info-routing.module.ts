import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyInfoPage } from './company-info.page';
const routes: Routes = [
  {
    path: '',
    component: CompanyInfoPage,
  },
  {
    path: 'comments',
    loadChildren: () => import('../comments/comments.module').then(m => m.CommentsPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanyInfoPageRoutingModule {}
