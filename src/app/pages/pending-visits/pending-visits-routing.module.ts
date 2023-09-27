import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PendingVisitsPage } from './pending-visits.page';

const routes: Routes = [
  {
    path: '',
    component: PendingVisitsPage,
  },
  {
    path: ':id',
    loadChildren: () => import('../visit/visit.module').then(m => m.VisitPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingVisitsPageRoutingModule {}
