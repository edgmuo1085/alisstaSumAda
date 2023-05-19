import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleaseActivitiesPage } from './release-activities.page';

const routes: Routes = [
  {
    path: '',
    component: ReleaseActivitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleaseActivitiesPageRoutingModule {}
