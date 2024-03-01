import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCommunicationsPage } from './list-communications.page';

const routes: Routes = [
  {
    path: '',
    component: ListCommunicationsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCommunicationsPageRoutingModule {}
