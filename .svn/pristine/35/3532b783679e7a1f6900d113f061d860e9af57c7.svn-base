import { Component, OnInit } from '@angular/core';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ResendVerificationCodeComponent } from '../../components/resend-verification-code/resend-verification-code.component';

/**
 * Componente para la vista de registro de ejecución.
 */
@Component({
  selector: 'app-exec-log',
  templateUrl: './exec-log.page.html',
  styleUrls: ['./exec-log.page.scss'],
})
export class ExecLogPage implements OnInit {

  /**
   * Array de opciones del menú de ejecución de actividades
   */
  optMenuOptions: Observable<any[]>;

  /**
   * Array de opciones del menú de ayuda de ejecución de actividades
   */
  optMenuHelpOptions: Observable<any[]>;

  /**
   * Variable que contiene el nombre del usuario ingresado.
   */
  nameUserRegister: string;

  constructor( private menuConfOptions: MenuConfiguracionService,
               private modalCtrl: ModalController,
               private storage: Storage ) { }

  ngOnInit() {
    this.optMenuOptions = this.menuConfOptions.getMenuExceActivities();
    this.optMenuHelpOptions = this.menuConfOptions.getMenuHelpExceActivities();
    this.uploadInfoUser();
  }

  optionSelectedMenu( itemSelected ) {
    switch ( itemSelected.title ) {
      case 'Visitas pendientes':
        break;
      case 'Tareas por enviar':
        break;
      case 'Liberar actividades':
        break;
      case 'Recordar código':
        this.showResendVerificationCode();
        break;
      case 'Ayuda PDF':
        break;
      case 'Instructivo':
        break;
      default:
        break;
    }
  }

  async uploadInfoUser() {
    const nameUser = await this.storage.get('sesion');
    const nombreCompleto = nameUser.nombre1 + ' ' + nameUser.apellido1;
    this.nameUserRegister = nombreCompleto;
  }

  async showResendVerificationCode() {
    const modal = await this.modalCtrl.create({
      component: ResendVerificationCodeComponent
    });

    return await modal.present();
  }

}
