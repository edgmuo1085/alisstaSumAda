import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './login.page';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  imports: [CommonModule, FormsModule, ComponentsModule, ReactiveFormsModule, IonicModule, LoginPageRoutingModule],
  declarations: [LoginPageComponent],
  providers: [],
})
export class LoginPageModule {}
