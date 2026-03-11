import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
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
  formDateSpecific: UntypedFormGroup;
  showDateButton = false;

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
  minEndHour: string | null = null;

  showStartTodaySpecificAdvice = false;

  disabledBtnDateStart = false;

  date: string;

  constructor(
    private cacheService: CacheService,
    private formBuilder: UntypedFormBuilder,
    private alertController: AlertController
  ) { }

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
      startTodaySecific: [{ value: '', disabled: false }, Validators.required],
      startHour: [{ value: '', disabled: true }, Validators.required],
      endHour: [{ value: '', disabled: true }, Validators.required],
    });
  }

  startTodaySpecific() {
    // REFACTOR: Esta notificación no tiene efecto sobre la asignación de la fecha. El usuario es
    // advertido sobre un escenario que no puede ser modificado pero no tiene opción una vez que ha
    // marcado el botón de asignación de fecha
    this.notification('Está seguro de iniciar la actividad en este momento, recuerde que esta fecha no puede modificarse.');

    this.setVisitDate(moment().startOf('day').toISOString().split('T')[0]);

    this.showDateButton = true;

    this.formDateSpecific.get('startHour')?.enable();
    this.formDateSpecific.get('endHour')?.enable();

    this.formDateSpecific.get('startTodaySecific')?.disable();
  }

  changeHourStar(event) {

    let value = event.detail.value;
    console.log('changeHourStar..!! ', value);
    console.log('Hora Actual', new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' }));

    if (!value) value = this.getCurrentHour();

    const normalized = this.normalizeHour(value);
    this.setInitialHour(normalized);
    this.minEndHour = value;
  }


  changeHourEnd(event) {

    let value = event.detail.value;

    if (!value) value = this.getCurrentHour();

    const normalized = this.normalizeHour(event.detail.value);
    this.setEndHour(normalized);
  };

  private getCurrentHour(): string {
    const now = new Date();

    const bogotaTime = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'America/Bogota',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    }).format(now);

    return `${bogotaTime}`;
  };

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
    console.log("Llego al seteo de la hora inicial::: ", initialHour)
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

    const start = moment(`1970-01-01T${this.customStartDate}`);
    const end = moment(`1970-01-01T${this.customEndDate}`);

    if (end.isBefore(start)) {
      this.notification('La hora final no puede ser menor a la hora inicial');
      this.totalHours = 0;
      return;
    }

    const duration = moment.duration(end.diff(start));
    const hours = duration.hours();
    const minutes = duration.minutes();

    const totalDecimal = hours + minutes / 60;

    if (totalDecimal < horasMigradas) {

      this.notification(
        `No es posible ya que las horas de esta actividad no pueden ser menores a ${horasMigradas} horas.`
      );

      this.totalHours = 0;
      return;
    }

    this.totalHours = `${hours} Horas ${minutes} Minutos`;

    this.specificStartHourSelected.emit(this.customStartDate);
    this.specificEndHourSelected.emit(this.customEndDate);
    this.specificTotalHour.emit(this.totalHours);

    this.showButtonNext.emit(true);
  }

  private normalizeHour(value: string): string {
    const time = value.split('T')[1] || value;
    const [hh, mm] = time.split(':');
    return `${hh}:${mm}:00`;
  }

  formatForDisplay(time: string): string {
    if (!time) return '';
    const normalized = time.length === 8 ? `1970-01-01T${time}` : time;
    return moment(normalized).format('hh:mm A');
  }
}
