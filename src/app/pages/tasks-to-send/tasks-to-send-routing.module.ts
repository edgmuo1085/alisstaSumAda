import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksToSendPage } from './tasks-to-send.page';

const routes: Routes = [
  {
    path: '',
    component: TasksToSendPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksToSendPageRoutingModule {}
