import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { IonicModule } from '@ionic/angular';
import { SettingsPageRoutingModule } from './settings-routing.module';
import { SettingsPage } from './settings.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FontAwesomeModule, SettingsPageRoutingModule],
  declarations: [SettingsPage],
  providers: [AppRate, InAppBrowser],
})
export class SettingsPageModule {}
