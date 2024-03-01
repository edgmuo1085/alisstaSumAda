import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { CacheService } from '../../../services/cache/cache.service';

/**
 * Componente de la vista de tipo de visita específica.
 */
@Component({
  selector: 'app-specific',
  templateUrl: './specific.component.html',
  styleUrls: ['./specific.component.scss'],
})
export class SpecificComponent implements OnInit {
  formDateSpecific: FormGroup;

  /**
   * Estos @Output() son los encargados de enviarles las fechas al componente padre
   * en este caso seria visit-type.ts, cada orden:
   * @Output() specificStartHourSelected: Esta variable indica la hora
   * de inicio de la asesoria especifica
   * @Output() specificEndHourSelected: Esta variable indica la hora de finalización de
   * la asesoria especifica
   * @Output() specificTotalHour: Esta variable indica el total de horas calculadas.
   */
  @Output() dateStartSpecific = new EventEmitter();
  @Output() specificStartHourSelected = new EventEmitter();
  @Output() specificEndHourSelected = new EventEmitter();
  @Output() specificTotalHour = new EventEmitter();
  @Output() showButtonNext = new EventEmitter();

  /**
   * Estas tres variables se encargan de interpolar los valores por medio del [(ngModel)] en el html
   * para cada una de las horas, fecha inicial, hora inicial, hora final y total de horas.
   */
  customStartDate;
  customEndDate;
  totalHours;

  showStartTodaySpecificAdvice = false;

  disabledBtnDateStart = false;

  date: string;

  constructor(
    private datePicker: DatePicker,
    private cacheService: CacheService,
    private formBuilder: FormBuilder,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.initFormDateSpecific();
    const infoVisitType = this.cacheService.getSaveTypeAdvice();

    if (Object.keys(infoVisitType).length !== 0) {
      if (infoVisitType.type === 'Especifica') {
        this.formDateSpecific.patchValue({
          startTodaySecific: moment(infoVisitType.fechaInicialAsesoria, 'YYYY-MM-DD').toISOString(),
          startHour: moment(infoVisitType.startHour, 'hh:mm A').toISOString(),
          endHour: moment(infoVisitType.endHour, 'hh:mm A').toISOString(),
        });

        this.setVisitDate(infoVisitType.fechaInicialAsesoria);
        this.setInitialHour(infoVisitType.startHour);
        this.setEndHour(infoVisitType.endHour);
      }
    }
  }

  initFormDateSpecific() {
    this.formDateSpecific = this.formBuilder.group({
      startTodaySecific: ['', Validators.required],
      startHour: ['', Validators.required],
      endHour: ['', Validators.required],
    });
  }

  startTodaySpecific() {
    // REFACTOR: Esta notificación no tiene efecto sobre la asignación de la fecha. El usuario es
    // advertido sobre un escenario que no puede ser modificado pero no tiene opción una vez que ha
    // marcado el botón de asignación de fecha
    this.notification('Está seguro de iniciar la actividad en este momento, recuerde que esta fecha no puede modificarse.');

    this.setVisitDate(moment().startOf('day').toISOString().split('T')[0]);
  }

  changeHourStar(event) {
    this.setInitialHour(event.detail.value.split('T')[1]);
  }

  changeHourEnd(event) {
    this.setEndHour(event.detail.value.split('T')[1]);
  }

  async validateHours(hourStart, hourEnd, hourMigrated): Promise<string> {
    // REFACTOR: No debe usarse una cadena arbitraria como _NO SE PUEDE_ para cubrir un escenario.
    // Podría definirse que este método regrese el número de horas de diferencia entre la inicial
    // y la final, y en cualquier otro caso, se usase _undefined_

    const start = hourStart.split(':');
    const end = hourEnd.split(':');

    if (parseInt(end[0], 10) === parseInt(start[0], 10)) {
      const resultHour = parseInt(end[0], 10) - parseInt(start[0], 10);
      if (resultHour < hourMigrated) {
        return 'No se puede';
      }
    }

    if (parseInt(end[0], 10) > parseInt(start[0], 10)) {
      const resultHour = parseInt(end[0], 10) - parseInt(start[0], 10);
      const resultMinutes = +this.validateMinutes(hourStart, hourEnd, hourMigrated);
      const registeredMinutes = await this.cacheService.getRegisteredTime();

      if (resultHour * 60 + resultMinutes + registeredMinutes <= 600) {
        if (resultHour >= hourMigrated) {
          return resultHour.toString();
        } else {
          return 'No se puede';
        }
      } else {
        this.notification('Excede las horas permitidas a ejecutar. Las cuales son hasta 10 horas por día');
      }
    } else {
      this.totalHours = 0;
      this.notification('La hora final no puede ser menor a la hora inicial');
    }
  }

  validateMinutes(hourStart, hourEnd, hourMigrated): string {
    const start = hourStart.split(':');
    const end = hourEnd.split(':');
    if (parseInt(end[1], 10) > parseInt(start[1], 10)) {
      const resultMinutes = parseInt(end[1], 10) - parseInt(start[1], 10);
      return resultMinutes.toString();
    } else {
      const resultMinutes = parseInt(start[1], 10) - parseInt(end[1], 10);
      return resultMinutes.toString();
    }
  }

  /**
   * Esta es la popUp cuando pasa alguna excepción en la selección de las horas.
   */

  async notification(notificacion) {
    const alert = await this.alertController.create({
      header: 'Atención',
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR'],
    });

    alert.onDidDismiss();

    await alert.present();
  }

  /**
   * Establece la fecha de la visita.
   *
   * @param date Fecha de la visita.
   */
  private setVisitDate(date: string): void {
    this.date = date;
    this.formDateSpecific.controls.startTodaySecific.setValue(this.date);
    this.disabledBtnDateStart = true;
    this.showStartTodaySpecificAdvice = true;
    this.dateStartSpecific.emit(this.date);
    this.showButtonNext.emit(this.formDateSpecific.controls.endHour.valid);
  }

  /**
   * Establece la hora inicial de la visita.
   *
   * @param initialHour Hora inicial de la visita.
   */
  private setInitialHour(initialHour: string): void {
    this.customStartDate = initialHour;
    this.validateVisitDuration();
  }

  /**
   * Establece la hora final de la visita.
   *
   * @param endHour Hora final de la visita.
   */
  private setEndHour(endHour: string): void {
    this.customEndDate = endHour;
    this.validateVisitDuration();
  }

  /**
   * Comprueba que las horas inicial y final de la visita sean válidas y que la duración de la visita
   * sea menor o igual que la estimada para la actividad. Si todo está en orden, emite los valores para
   * el componente padre.
   */
  private async validateVisitDuration(): Promise<void> {
    if (!this.customStartDate || !this.customEndDate) {
      return;
    }

    const horasMigradas = this.cacheService.migratedHours;
    const hours = await this.validateHours(this.customStartDate, this.customEndDate, horasMigradas);
    let showButton: boolean;

    switch (hours) {
      case undefined:
        showButton = false;
        this.totalHours = 0;
        this.formDateSpecific.controls.endHour.reset();

        break;
      case 'No se puede':
        showButton = false;
        this.totalHours = 0;
        this.formDateSpecific.controls.endHour.reset();

        // REFACTOR: Debe normalizarse el mostrar notificaciones. O bien lo hace este método, o lo hace el
        // de validación de horas.
        this.notification(`No es posible ya que las horas de esta actividad no pueden ser menores a ${horasMigradas} horas.`);

        break;
      default:
        const now = moment();
        const realStartDate = now.format('YYYY-MM-DD') + `T${this.customStartDate}`;
        const realEndDate = now.format('YYYY-MM-DD') + `T${this.customEndDate}`;
        const start = moment(realStartDate);
        const end = moment(realEndDate);
        const duration = moment.duration(end.diff(start));
        const _hours = Math.floor(duration.asHours());
        const _minutes = Math.floor(duration.asMinutes() % 60);
        const totalHours = _hours + _minutes / 60;

        if (totalHours < horasMigradas) {
          showButton = false;
          this.totalHours = 0;
          this.formDateSpecific.controls.endHour.reset();

          // REFACTOR: Debe normalizarse el mostrar notificaciones. O bien lo hace este método, o lo hace el
          // de validación de horas.
          this.notification(`No es posible ya que las horas de esta actividad no pueden ser menores a ${horasMigradas} horas.`);
        } else {
          showButton = !!this.date;
          this.totalHours = _hours + ' Horas ' + _minutes + ' Minutos';
        }
    }

    this.specificStartHourSelected.emit(this.customStartDate);
    this.specificEndHourSelected.emit(this.customEndDate);
    this.specificTotalHour.emit(this.totalHours);
    this.showButtonNext.emit(showButton);
  }
}
