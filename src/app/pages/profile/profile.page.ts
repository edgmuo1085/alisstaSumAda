import { Component, OnInit } from '@angular/core';

import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  infoProfile: any;

  constructor(private appStorage: AppStorageService) {}

  ngOnInit() {
    this.uploadInfoProfile();
  }

  async uploadInfoProfile() {
    this.infoProfile = await this.appStorage.get('sesion');
  }
}
