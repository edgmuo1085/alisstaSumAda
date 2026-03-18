import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VisitsHistoryPageRoutingModule } from './visits-history-routing.module';
import { VisitsHistoryPageComponent } from './visits-history.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PipesModule, ScrollingModule, VisitsHistoryPageRoutingModule],
  declarations: [VisitsHistoryPageComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class VisitsHistoryPageModule { }
