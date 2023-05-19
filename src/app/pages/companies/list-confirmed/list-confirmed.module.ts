import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ListConfirmedPageRoutingModule } from './list-confirmed-routing.module';
import { ListConfirmedPage } from './list-confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListConfirmedPageRoutingModule,
    PipesModule
  ],
  declarations: [ListConfirmedPage]
})
export class ListConfirmedPageModule {}
