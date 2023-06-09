import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavbarPageRoutingModule } from './navbar-routing.module';
import { NavbarPage } from './navbar.page';
import { NavbarService } from './navbar.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavbarPageRoutingModule
  ],
  declarations: [
    NavbarPage
  ],
  providers: [
    NavbarService
  ]
})
export class NavbarPageModule {}
