import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateCommunicationPage } from './create-communication.page';

const routes: Routes = [
  {
    path: '',
    component: CreateCommunicationPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateCommunicationPageRoutingModule {}
