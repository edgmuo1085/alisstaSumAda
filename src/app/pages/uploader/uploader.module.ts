import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { UploaderPageRoutingModule } from './uploader-routing.module';
import { UploaderPage } from './uploader.page';
import { File } from '@ionic-native/file/ngx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IonicModule, UploaderPageRoutingModule],
  declarations: [UploaderPage],
  providers: [File],
})
export class UploaderPageModule {}
