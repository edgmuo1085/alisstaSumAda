import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitsHistoryPageComponent } from './visits-history.page';

const routes: Routes = [
  {
    path: '',
    component: VisitsHistoryPageComponent,
  },
  {
    path: 'history',
    loadChildren: () =>
      import('../visits-history-detail/visit-history-detail.module')
        .then(m => m.VisitHistoryDetailPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitsHistoryPageRoutingModule { }
