import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'about',
    loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
  },
  {
    path: 'termAndConditions',
    loadChildren: () => import('../terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
