import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
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


  constructor( private device: Device,
               private storage: Storage ) {
                this.deviceUUID = this.device.uuid;
                }

  ngOnInit() {
    this.uploadInfoUser();
  }

  async uploadInfoUser() {
    const nameUser = await this.storage.get('sesion');
    const nombreCompleto = nameUser.nombres + ' ' + nameUser.apellidos;
    this.nameUserRegister = nombreCompleto;
  }

}
