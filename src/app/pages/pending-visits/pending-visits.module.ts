import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PendingVisitsPageRoutingModule } from './pending-visits-routing.module';
import { PendingVisitsPage } from './pending-visits.page';
import { PipesModule } from '../../pipes/pipes.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PipesModule, ScrollingModule, PendingVisitsPageRoutingModule],
  declarations: [PendingVisitsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PendingVisitsPageModule {}
