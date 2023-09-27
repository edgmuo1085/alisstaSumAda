import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCompanyPage } from './edit-company.page';

const routes: Routes = [
  {
    path: '',
    component: EditCompanyPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditCompanyPageRoutingModule {}
