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
  ) {}

  async ngOnInit() {
    await this.loadDeviceUUID();
    await this.uploadInfoUser();
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

  async uploadInfoUser() {
    const userSession = await this.appStorage.get<any>(this.appStorage.KEY_SESSION);

    if (userSession && userSession.nombres && userSession.apellidos) {
      this.nameUserRegister = `${userSession.nombres} ${userSession.apellidos}`;
    } else {
      this.nameUserRegister = 'Usuario';
      console.warn('No se encontró información del usuario en Preferences.');
    }
  }

}
