import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TalkPageRoutingModule } from './talk-routing.module';
import { TalkPage } from './talk.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, TalkPageRoutingModule],
  declarations: [TalkPage],
})
export class TalkPageModule {}
