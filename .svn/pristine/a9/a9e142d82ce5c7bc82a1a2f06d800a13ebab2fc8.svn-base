import { Component, OnInit } from '@angular/core';
import { Sesion } from '../../intarfaces/interfaces';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  infoProfile: any;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.uploadInfoProfile();
  }

  async uploadInfoProfile() {
    this.infoProfile = await this.storage.get('sesion');
  }
}
