import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarPage } from './navbar.page';

const routes: Routes = [
  {
    path: 'u',
    component: NavbarPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule),
      },
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule),
      },
      {
        path: 'execLog',
        loadChildren: () => import('../exec-log/exec-log.module').then(m => m.ExecLogPageModule),
      },
      {
        path: 'consultEvent',
        loadChildren: () => import('../educa/consult-event/consult-event.module').then(m => m.ConsultEventPageModule),
      },
      {
        path: 'terms-and-conditions',
        loadChildren: () => import('../terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule),
      },
      {
        path: 'survey-and-signature',
        loadChildren: () => import('../survey-and-signature/survey-and-signature.module').then(m => m.SurveyAndSignaturePageModule),
      },
      {
        path: 'select-register-event',
        loadChildren: () =>
          import('../educa/select-register-event/select-register-event.module').then(m => m.SelectRegisterEventPageModule),
      },
      {
        path: 'manual-event-register',
        loadChildren: () =>
          import('../educa/manual-event-register/manual-event-register.module').then(m => m.ManualEventRegisterPageModule),
      },
      {
        path: 'info-register-event-manual',
        loadChildren: () =>
          import('../educa/info-register-event-manual/info-register-event-manual.module').then(m => m.InfoRegisterEventManualPageModule),
      },
      {
        path: 'list-communications',
        loadChildren: () =>
          import('../communications/list-communications/list-communications.module').then(m => m.ListCommunicationsPageModule),
      },
      {
        path: 'list-communications/:communicationId',
        loadChildren: () =>
          import('../communications/list-communications/list-communications.module').then(m => m.ListCommunicationsPageModule),
      },
      {
        path: 'talk/:idTalk',
        loadChildren: () => import('../communications/talk/talk.module').then(m => m.TalkPageModule),
      },
      {
        path: 'create-communications',
        loadChildren: () =>
          import('../communications/create-communication/create-communication.module').then(m => m.CreateCommunicationPageModule),
      },
      {
        path: 'companies',
        loadChildren: () => import('../companies/companies.module').then(m => m.CompaniesPageModule),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'u/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'u/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarPageRoutingModule {}
