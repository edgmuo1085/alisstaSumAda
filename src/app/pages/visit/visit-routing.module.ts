import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitPage } from './visit.page';

const routes: Routes = [
  {
    path: '',
    component: VisitPage,
  },
  {
    path: 'subjects',
    loadChildren: () => import('../visit-subjects/visit-subjects.module').then(m => m.VisitSubjectsPageModule),
  },
  {
    path: 'type',
    loadChildren: () => import('../visit-type/visit-type.module').then(m => m.VisitTypePageModule),
  },
  {
    path: 'company-info',
    loadChildren: () => import('../company-info/company-info.module').then(m => m.CompanyInfoPageModule),
  },
  {
    path: 'comments',
    loadChildren: () => import('../comments/comments.module').then(m => m.CommentsPageModule),
  },
  {
    path: 'survey-signature',
    loadChildren: () => import('../survey-and-signature/survey-and-signature.module').then(m => m.SurveyAndSignaturePageModule),
  },
  {
    path: 'recommendation/:activityId',
    loadChildren: () => import('../AT/recommendation/recommendation.module').then(m => m.RecommendationPageModule),
  },
  {
    path: 'recommendation/:activityId/follow-up/:recomendationId',
    loadChildren: () => import('../AT/follow-up/follow-up.module').then(m => m.FollowUpPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisitPageRoutingModule {}
