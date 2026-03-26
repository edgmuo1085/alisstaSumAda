import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  deviceUUID: string;
  nameUserRegister: string;

  constructor(
    private appStorage: AppStorageService
  ) { }

  async ngOnInit() {
    await this.loadDeviceUUID();
    this.appStorage.user$.subscribe(user => {
      this.nameUserRegister = user
        ? `${user.nombres} ${user.apellidos}`
        : 'Usuario';
    });
  }

  async loadDeviceUUID() {
    try {
      const { identifier } = await Device.getId();
      this.deviceUUID = identifier;
      console.log('UUID del dispositivo:', this.deviceUUID);
    } catch (err) {
      console.error('Error al obtener UUID:', err);
      this.deviceUUID = 'UUID no disponible';
    }
  }
}
