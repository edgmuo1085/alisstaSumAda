import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListConfirmedPage } from './list-confirmed.page';

const routes: Routes = [
  {
    path: '',
    component: ListConfirmedPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListConfirmedPageRoutingModule {}
