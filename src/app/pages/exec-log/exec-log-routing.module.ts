import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExecLogPage } from './exec-log.page';

const routes: Routes = [
  {
    path: '',
    component: ExecLogPage
  },
  {
    path: 'pending-visits',
    loadChildren: () => import('../pending-visits/pending-visits.module').then(m => m.PendingVisitsPageModule)
  },
  {
    path: 'tasks-to-send',
    loadChildren: () => import('../tasks-to-send/tasks-to-send.module').then(m => m.TasksToSendPageModule)
  },
  {
    path: 'releaseActivities',
    loadChildren: () => import('../release-activities/release-activities.module').then(m => m.ReleaseActivitiesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExecLogPageRoutingModule {}
