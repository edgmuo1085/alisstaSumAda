import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisitSubjectsPageRoutingModule } from './visit-subjects-routing.module';
import { VisitSubjectsPage } from './visit-subjects.page';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, VisitSubjectsPageRoutingModule],
  declarations: [VisitSubjectsPage],
})
export class VisitSubjectsPageModule {}
