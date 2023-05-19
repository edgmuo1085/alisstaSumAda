import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitSubjectsPage } from './visit-subjects.page';

const routes: Routes = [
  {
    path: '',
    component: VisitSubjectsPage
  },
  {
    path: 'upload',
    loadChildren: () => import('../uploader/uploader.module').then(m => m.UploaderPageModule)
  },
  {
    path: 'type',
    loadChildren: () => import('../visit-type/visit-type.module').then(m => m.VisitTypePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitSubjectsPageRoutingModule {}
