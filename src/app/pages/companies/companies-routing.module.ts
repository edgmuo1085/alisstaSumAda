import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesPage } from './companies.page';

const routes: Routes = [
  {
    path: '',
    component: CompaniesPage
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'list/:id',
    loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
  },
  {
    path: 'list/:id/edit-company',
    loadChildren: () => import('./edit-company/edit-company.module').then(m => m.EditCompanyPageModule)
  },
  {
    path: 'list/:id/edit-address',
    loadChildren: () => import('./edit-address/edit-address.module').then( m => m.EditAddressPageModule)
  },
  {
    path: 'list/:id/contact-list',
    loadChildren: () => import('./contact-list/contact-list.module').then( m => m.ContactListPageModule)
  },
  {
    path: 'list/:id/contact-list/edit-contact',
    loadChildren: () => import('./edit-contact/edit-contact.module').then(m => m.EditContactPageModule)
  },
  {
    path: 'list/:id/summary',
    loadChildren: () => import('./summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'list/:id/signature',
    loadChildren: () => import('./signature/signature.module').then( m => m.SignaturePageModule)
  },
  {
    path: 'list-confirmed',
    loadChildren: () => import('./list-confirmed/list-confirmed.module').then( m => m.ListConfirmedPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompaniesPageRoutingModule { }
