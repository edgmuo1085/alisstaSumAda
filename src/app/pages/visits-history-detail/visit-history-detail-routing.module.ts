import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitHistoryDetailPageComponent } from './visit-history-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VisitHistoryDetailPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitHistoryDetailPageRoutingModule { }
