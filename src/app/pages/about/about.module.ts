import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AboutPageRoutingModule } from './about-routing.module';
import { AboutPageComponent } from './about.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AboutPageRoutingModule],
  declarations: [AboutPageComponent],
  providers: [],
})
export class AboutPageModule {}
