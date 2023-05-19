import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckChangesGuard } from 'src/app/services/companies/checkChanges.guard';
import { DetailsPage } from './details.page';

const routes: Routes = [
  {
    path: '',
    canDeactivate: [CheckChangesGuard],
    component: DetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsPageRoutingModule { }
