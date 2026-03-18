import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisitHistoryDetailPageComponent } from './visit-history-detail.page';
import { VisitHistoryDetailPageRoutingModule } from './visit-history-detail-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, VisitHistoryDetailPageRoutingModule],
  declarations: [VisitHistoryDetailPageComponent],
})
export class VisitHistoryDetailPageModule { }
