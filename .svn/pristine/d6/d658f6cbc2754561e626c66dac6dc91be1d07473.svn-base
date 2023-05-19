import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CacheService } from '../../services/cache/cache.service';

/**
 * Componente de tipo de visita.
 */
@Component({
  selector: 'app-visit-type',
  templateUrl: './visit-type.page.html',
  styleUrls: ['./visit-type.page.scss'],
})
export class VisitTypePage implements OnInit {

  /**
   * Nombre del tipo de visita actualmente activo.
   */
  subframe: string;

  /**
   * Nombre para visita específica.
   */
  readonly SPECIFIC_FRAME = 'Especifica';

  /**
   * Nombre para visita por proyecto.
   */
  readonly PER_PROJECT_FRAME = 'Proyecto';

  /**
   * Variables que permitiran validar al momento de enviar la información desde el padre, en este caso 
   * visit-type, para cuando sea desde asesoria especifica.
   */
  dateSpecific: string;
  startHourSpecific: string;
  endHourSpecific: string;
  totalHourSpecific: number;
  showButtonNext: boolean;

  /**
   * Variables que permitiran validar al momento de enviar la información desde el padre, en este caso 
   * visit-type, para cuando sea desde asesoria del proyecto.
   */
  dateProject: any;


  /**
   * Mensaje que se muestra en la popUp cuando algo pasa al momento de darle continuar
   */
  messageNotificacion: string;

  /**
   * Se crean estos objetos para almacenar la respuesta y de esta manera ir teniedo la información 
   * al momento de enviar todo el formulario
   */
  objectSpecific = {};
  objectProject = {};

  constructor(
    private router: Router,
    private cacheService: CacheService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    const infoVisitType = this.cacheService.getSaveTypeAdvice();

    this.subframe = Object.keys(infoVisitType).length === 0 ?
      this.SPECIFIC_FRAME :
      infoVisitType.type;
  }

  /**
   * Cambia el frame del tipo de visita actualmente activo.
   *
   * @param subframe Nombre del frame que va a volverse activo.
   */
  switchFrame(subframe: string): void {
    this.subframe = subframe;
  }

  /**
   * ************ ASESORÍA ESPECIFICA ***********
   * Los métodos que se mencionan a continuación simplemente reciben la información
   * del componente specific.component.ts por medio de los Output() para "centralizar"
   * de alguna manera la data en el componente padre. Los metodos son los siguientes:
   * 1. getDateStart( dateSpecific ) : El encargado de manipular la fecha inicial de la asesoria.
   * 2. getSpecificStartHour( specificStartHour ): Es el encargado de manipular la hora inicial
   * del a asesoría.
   * 3. getSpecificEndHour( specificEndHour ): Es el encargado de manipular la hora final de la asesoria
   * 4. getTotalHoursSpecific( totalHoursSpecific ): Es el encargado de manipular el número total de horas
   * de la asesoria
   */

  getDateStart(dateSpecific) {
    this.dateSpecific = dateSpecific;
  }

  getSpecificStartHour(specificStartHour) {
    this.startHourSpecific = specificStartHour;
  }

  getSpecificEndHour(specificEndHour) {
    this.endHourSpecific = specificEndHour;
  }

  getTotalHoursSpecific(totalHoursSpecific) {
    this.totalHourSpecific = totalHoursSpecific;
  }

  getShowButtonNext(showButton) {
    this.showButtonNext = showButton;
  }


  /**
   * Este método es el encargado de validar que exista una fecha de asesoria por proyecto para
   * dejarlo seguir tranzando
   */


  getProjectDateSelected(dateProjectSelected) {
    this.dateProject = dateProjectSelected;
  }

  next() {

    if (this.subframe === 'Especifica') {
      this.objectSpecific = {
        type: this.subframe,
        typeSelected: true,
        fechaInicialAsesoria: this.dateSpecific,
        startHour: this.startHourSpecific,
        endHour: this.endHourSpecific,
        totalHours: this.totalHourSpecific
      };

      this.cacheService.saveTypeAdvice(this.objectSpecific);
      this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects/type/company-info');

      return;
    }

    if (this.subframe === 'Proyecto') {
      if (this.dateProject) {
        const date = this.dateProject.split('T')[0].split('-');
        const month = this.changeTextForMounth(date[1]);
        this.objectProject = {
          type: this.subframe,
          typeSelected: true,
          year: date[0],
          month,
          date: this.dateProject
        };
        this.cacheService.saveTypeAdvice(this.objectProject);
        this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects/type/company-info');
      }
    }
  }

  changeTextForMounth(numMes) {
    switch (numMes) {
      case "01":
        return 'Enero';

      case "02":
        return 'Febrero';

      case "03":
        return 'Marzo';

      case "04":
        return 'Abril';

      case "05":
        return 'Mayo';

      case "06":
        return 'Junio';

      case "07":
        return 'Julio';

      case "08":
        return 'Agosto';

      case "09":
        return 'Septiembre';

      case "10":
        return 'Octubre';

      case "11":
        return 'Noviembre';

      case "12":
        return 'Diciembre';

      default:
        break;
    }
  }

  async Alert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      mode: 'ios',
      message: this.messageNotificacion,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

}
