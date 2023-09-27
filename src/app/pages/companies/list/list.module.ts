import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ListPageRoutingModule, PipesModule, ScrollingModule],
  declarations: [ListPage],
})
export class ListPageModule {}
