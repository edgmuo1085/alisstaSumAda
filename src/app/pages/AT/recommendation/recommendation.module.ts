import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecommendationPageRoutingModule } from './recommendation-routing.module';
import { RecommendationPage } from './recommendation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecommendationPageRoutingModule
  ],
  declarations: [RecommendationPage]
})
export class RecommendationPageModule { }
