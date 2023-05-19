import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAddressPage } from './edit-address.page';

const routes: Routes = [
  {
    path: '',
    component: EditAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditAddressPageRoutingModule { }
