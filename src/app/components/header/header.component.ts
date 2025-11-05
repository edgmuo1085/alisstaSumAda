import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  /**
   * El headerComponent es el encargado de mostrar la información del usuario logueado en la aplicación
   */

  /**
   * Identificador universal del dispositivo.
   */
  deviceUUID: string;

  /**
   * Variable que contiene el nombre del usuario ingresado.
   */
  nameUserRegister: string;

  constructor(
    private storage: Storage
  ) {} 

  async ngOnInit() {
    await this.loadDeviceUUID();
    await this.uploadInfoUser();
  };

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
    const nameUser = await this.storage.get('sesion');
    const nombreCompleto = nameUser.nombres + ' ' + nameUser.apellidos;
    this.nameUserRegister = nombreCompleto;
  }
}
