import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MunicipiosFilterPipe } from 'src/app/pipes/municipiosFilter.pipe';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { EditCompanyPageRoutingModule } from './edit-company-routing.module';
import { EditCompanyPage } from './edit-company.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReactiveFormsModule, PipesModule, EditCompanyPageRoutingModule],
  declarations: [EditCompanyPage],
})
export class EditCompanyPageModule {}
