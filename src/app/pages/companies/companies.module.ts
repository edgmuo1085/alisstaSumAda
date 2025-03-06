import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompaniesPageRoutingModule } from './companies-routing.module';
import { CompaniesPage } from './companies.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ComponentsModule, CompaniesPageRoutingModule],
  declarations: [CompaniesPage],
})
export class CompaniesPageModule {}
