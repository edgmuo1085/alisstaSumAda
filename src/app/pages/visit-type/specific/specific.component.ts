import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { CacheService } from '../../../services/cache/cache.service';

interface ValidationResult {
  valid: boolean;
  message?: string;
}

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
  customStartDate: string;
  customEndDate: string;
  customStartDateISO: string;
  totalHours: string;
  minEndHour: string | null = null;

  showStartTodaySpecificAdvice = false;
  disabledBtnDateStart = false;
  date: string; // Fecha de hoy en formato YYYY-MM-DD

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

    this.setVisitDate(moment().startOf('day').format('YYYY-MM-DD'));

    this.showDateButton = true;

    this.formDateSpecific.get('startHour')?.enable();
    this.formDateSpecific.get('endHour')?.enable();

    this.formDateSpecific.get('startTodaySecific')?.disable();
  }

  changeHourStar(event) {
    let value = event.detail.value;
    if (!value) value = new Date().toISOString();

    const normalized = this.normalizeHour(value);
    this.customStartDate = normalized;
    this.customStartDateISO = value;

    // Establecer minEndHour con fecha de hoy y hora inicial
    if (this.date) {
      this.minEndHour = `${this.date}T${normalized}`;
    } else {
      this.minEndHour = value;
    }

    // Auto-setear la hora final sumando migratedHours a la hora inicial seleccionada
    const horasMigradas = this.cacheService.migratedHours;
    if (horasMigradas && horasMigradas > 0 && this.date) {
      const startMoment = moment(`${this.date}T${this.customStartDate}`);
      const endMoment = startMoment.clone().add(horasMigradas, 'hours');
      this.customEndDate = endMoment.format('HH:mm:00');
    }

    // Validar inmediatamente si ya existe hora final
    if (this.customEndDate) {
      this.validateAndEmit();
    } else {
      this.clearValidation();
    }
  }

  changeHourEnd(event) {
    let value = event.detail.value;
    if (!value) value = new Date().toISOString();

    this.customEndDate = this.normalizeHour(value);

    // Validar inmediatamente si ya existe hora inicial
    if (this.customStartDate) {
      this.validateAndEmit();
    } else {
      this.clearValidation();
    }
  }

  /**
   * Esta es la popUp cuando pasa alguna excepción en la selección de las horas.
   */
  async notification(notificacion: string) {
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
    console.log("Llego al seteo de la hora inicial::: ", initialHour);
    this.customStartDate = initialHour;
    // Actualizar minEndHour para el picker
    if (this.date) {
      this.minEndHour = `${this.date}T${initialHour}`;
    }
    if (this.customEndDate) {
      this.validateAndEmit();
    }
  }

  /**
   * Establece la hora final de la visita.
   *
   * @param endHour Hora final de la visita.
   */
  private setEndHour(endHour: string): void {
    this.customEndDate = endHour;
    if (this.customStartDate) {
      this.validateAndEmit();
    }
  }

  /**
   * Valida las horas y emite eventos si son válidas.
   */
  private validateAndEmit(): void {
    if (!this.customStartDate || !this.customEndDate || !this.date) {
      return;
    }

    const validation = this.validateTimes(this.customStartDate, this.customEndDate);
    if (!validation.valid) {
      this.notification(validation.message);
      this.totalHours = '0';
      this.showButtonNext.emit(false);
      return;
    }

    // Calcular duración para mostrar
    const start = moment(`${this.date}T${this.customStartDate}`);
    const end = moment(`${this.date}T${this.customEndDate}`);
    const duration = moment.duration(end.diff(start));
    const hours = duration.hours();
    const minutes = duration.minutes();
    this.totalHours = `${hours} Horas ${minutes} Minutos`;

    // Emitir valores al padre
    this.specificStartHourSelected.emit(this.customStartDate);
    this.specificEndHourSelected.emit(this.customEndDate);
    this.specificTotalHour.emit(this.totalHours);
    this.showButtonNext.emit(true);
  }

  /**
   * Limpia la validación cuando falta alguna hora.
   */
  private clearValidation(): void {
    this.totalHours = '0';
    this.showButtonNext.emit(false);
  }

  /**
   * Valida que las horas sean correctas.
   * - La hora final debe ser posterior a la inicial.
   * - Ninguna hora puede ser futura (fecha es hoy).
   * - La duración debe ser >= migratedHours.
   */
  private validateTimes(startTime: string, endTime: string): ValidationResult {
    const now = moment();
    const today = this.date || now.format('YYYY-MM-DD');

    // Combinar fecha actual con horas
    const start = moment(`${today}T${startTime}`);
    const end = moment(`${today}T${endTime}`);

    // 1. Validar que start < end
    if (!end.isAfter(start)) {
      return { valid: false, message: 'La hora final no puede ser menor a la hora inicial' };
    }

    // 2. Validar que ninguna hora sea futura (fecha es hoy)
    // if (start.isAfter(now)) {
    //   return { valid: false, message: 'La hora inicial no puede ser en el futuro' };
    // }

    // if (end.isAfter(now)) {
    //   return { valid: false, message: 'La hora final no puede ser en el futuro' };
    // }

    // 3. Validar duración mínima (migratedHours)
    const duration = moment.duration(end.diff(start));
    const totalHours = duration.asHours();
    const horasMigradas = this.cacheService.migratedHours || 0;

    if (totalHours < horasMigradas) {
      return {
        valid: false,
        message: `No es posible ya que las horas de esta actividad no pueden ser menores a ${horasMigradas} horas.`
      };
    }

    return { valid: true };
  }

  /**
   * Normaliza una hora en formato ISO o time string a "HH:mm:00".
   */
  private normalizeHour(value: string): string {
    // Si es ISO string (ej: "2026-03-24T14:30:00.000Z"), extraer parte de tiempo
    const timePart = value.split('T')[1] || value;
    // Tomar HH:mm (ignorar segundos y milisegundos)
    const [hh, mm] = timePart.split(':');
    return `${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:00`;
  }

  /**
   * Formatea una hora para mostrar en la UI.
   */
  formatForDisplay(time: string): string {
    if (!time) return '';
    const normalized = time.length === 8 ? `1970-01-01T${time}` : time;
    return moment(normalized).format('hh:mm A');
  }
}