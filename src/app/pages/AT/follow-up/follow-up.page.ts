import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { CacheService } from 'src/app/services/cache/cache.service';

@Component({
  selector: 'app-follow-up',
  templateUrl: './follow-up.page.html',
  styleUrls: ['./follow-up.page.scss'],
})
export class FollowUpPage implements OnInit {
  /**
   * Recomendación.
   */
  recomendacion: any;

  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Indica la fecha actual para controlar el maximo
   * de fecha de implementacion
   */
  dateNow = moment(new Date()).format('YYYY-MM-DD');

  constructor(
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private location: Location
  ) {}

  ngOnInit() {}

  ionViewWillEnter(): void {
    this.establecerRecomendacion();
    this.initForm();
  }

  /**
   * Guarda el formulario de la recomendación actual.
   */
  async save(): Promise<void> {
    if (this.formGroup.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        mode: 'ios',
        message: 'Todos los campos son obligatorios.',
        buttons: ['OK'],
      });

      alert.present();

      return;
    }

    const body = this.formGroup.value;
    this.recomendacion.implementada = body.implementada;
    this.recomendacion.Fecha_Implementacion = body.fechaImplementacion;
    this.recomendacion.fueronEficaces = body.eficacia;
    this.recomendacion.causaNoImplementancion = body.causa;
    this.recomendacion.InformacionEnvidencia = body.nombreSoporte;
    this.recomendacion.diligenciado = true;
    this.location.back();
  }

  /**
   * Establece la recomendación actual.
   */
  private establecerRecomendacion(): void {
    const actividades = this.cacheService.activitiesSelectedForExec;
    const idActividad = +this.route.snapshot.params.activityId;
    const actividad = actividades.find(a => a.id === idActividad);
    const recomendaciones = actividad.siniestro.Recomendaciones;
    const idRecomendacion = +this.route.snapshot.params.recomendationId;
    const recomendacion = recomendaciones.find((r: any) => r.Pk_Id_SiniestroRecomendaciones === idRecomendacion);
    this.recomendacion = recomendacion;

    if (!recomendacion.diligenciado) {
      // Como el formulario viene con valores por defecto desde el servicio, debe establecerse una bandera
      // que nos indique si el usuario es el que ha establecido estos valores de la recomendación o corresponden
      // a los por defecto que establece el servicio. Usamos una clave adicional dentro de la recomendación
      // a la que llamamos _diligenciado_ para estos efectos.
      this.clearValues();
    }
  }

  /**
   * Limpia los valores por defecto que vienen desde el servicio para una recomendación vacía.
   */
  private clearValues(): void {
    this.recomendacion.implementada = null;
    this.recomendacion.Fecha_Implementacion = null;
    this.recomendacion.fueronEficaces = null;
    this.recomendacion.causaNoImplementancion = null;
    this.recomendacion.InformacionEnvidencia = null;
  }

  /**
   * Inicializa el formulario de la recomendación.
   */
  private initForm(): void {
    const implementadaControl = new FormControl(this.recomendacion.implementada, [Validators.required]);
    const fechaImplementacionControl = new FormControl(this.recomendacion.Fecha_Implementacion, [Validators.required]);
    const eficaciaControl = new FormControl(this.recomendacion.fueronEficaces, [Validators.required]);
    const causaControl = new FormControl(this.recomendacion.causaNoImplementancion, [Validators.required]);
    const nombreSoporteControl = new FormControl(this.recomendacion.InformacionEnvidencia, []);

    this.formGroup = new FormGroup({
      implementada: implementadaControl,
      fechaImplementacion: fechaImplementacionControl,
      eficacia: eficaciaControl,
      causa: causaControl,
      nombreSoporte: nombreSoporteControl,
    });

    this.setupForm();
  }

  /**
   * Establece comportamiento para los campos del formulario en base a sus valores.
   */
  private setupForm(): void {
    const controls = this.formGroup.controls;

    controls.implementada.valueChanges.subscribe(v => {
      if (v === false) {
        controls.fechaImplementacion.setValue(null);
        controls.fechaImplementacion.disable();
        controls.nombreSoporte.setValidators([]);
        controls.nombreSoporte.updateValueAndValidity();
        controls.eficacia.setValue(null);
        controls.eficacia.disable();

        controls.causa.enable();

        return;
      }

      controls.fechaImplementacion.enable();
      controls.nombreSoporte.setValidators([Validators.required]);
      controls.nombreSoporte.updateValueAndValidity();
      controls.eficacia.enable();

      controls.causa.setValue(null);
      controls.causa.disable();
    });

    // Para forzar la validación de estado previamente establecida
    controls.implementada.setValue(controls.implementada.value);
  }
}
