import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { CacheService } from '../../../services/cache/cache.service';

/**
 * Componente para la vista de visita fallida.
 */
@Component({
  selector: 'app-fail',
  templateUrl: './fail.component.html',
  styleUrls: ['./fail.component.scss'],
})
export class FailComponent implements OnInit {

  formCommentFail: FormGroup;
  minDate = new Date();
  contador = 0;
  showFieldNewDateRepro = false;
  @Input() typeMenu;
  @Output() infoCommentFail = new EventEmitter();

  /**
   * Opciones para la ventana emergente para seleccionar el motivo de la visita fallida.
   */
  readonly ALERT_OPTIONS = {
    header: 'Seleccione el motivo'
  };

  motivos: any[] = [
    {
      valor: 'Reprogramación'
    },
    {
      valor: 'Cancelación de la empresa'
    },
    {
      valor: 'Otro motivo'
    }
  ];

  enablenewDateField = true;

  constructor(private router: Router,
    private alertController: AlertController,
    private cacheService: CacheService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initFormCommentFail();

    const informacionVisita = this.cacheService.getSaveCommentsAdvice();
    if (Object.keys(informacionVisita).length !== 0) {
      this.formCommentFail.patchValue({
        description: informacionVisita.description,
        justify: informacionVisita.justify,
        newDateActivity: informacionVisita.newDateActivity
      });

      setTimeout(() => {
        const motivo = this.validarMotivo(informacionVisita.motive);
        this.formCommentFail.controls.motive.setValue(motivo);
      }, 500);
    }

  }

  // Formulario cuando la asesoría no fue exitosa.
  initFormCommentFail() {
    this.formCommentFail = this.formBuilder.group({
      description: ['', Validators.required],
      motive: ['', Validators.required],
      justify: ['', Validators.required],
      newDateActivity: ['', Validators.required]
    });

    this.formCommentFail.controls.description.valueChanges.subscribe(v => {
      const value: string = v || '';
      this.contador = value.length;
    });
  }

  validarMotivo(motivo) {

    switch (motivo) {
      case 'R':
        return 'Reprogramación';
        break;
      case 'C':
        return 'Cancelación de la empresa';
        break;
      case 'O':
        return 'Otro motivo';
        break;
      default:
        break;
    }

  }

  // Oculta el campo fecha cuando el motivo es diferente a reprogramación.
  changeValueMotive(event) {
    const valueSelected = event.detail.value;
    if (valueSelected === 'Reprogramación') {
      this.enablenewDateField = false;
      this.showFieldNewDateRepro = true;
      this.formCommentFail.controls.newDateActivity.enable();
    } else {
      this.enablenewDateField = true;
      this.showFieldNewDateRepro = false;
      this.formCommentFail.controls.newDateActivity.disable();
    }
  }

  /**
   * Valida en las actividades seleccionadas de la gestión de la asesoria no sea mayor a 1 ya que no se debe
   * permitir que la asesoria no sea exitosa y pedirle al usuario que firme, si no es exitosa se redirecciona 
   * a la parte inicial (Lista de actividades)
   */
  next() {
    if (this.formCommentFail.invalid) {
      this.notification('Todos los campos son obligatorios');
      this.infoCommentFail.emit({});

      return;
    }

    const actividadesSeleccionadas = this.cacheService.getSaveActivitiesSelected();

    if (actividadesSeleccionadas.find(a => parseInt(a.horasEjecutadas, 10) > 1)) {
      this.notificationHorasEjecutadas('La asesoría NO exitosa no se permite registrar mas de 1 hora');
      this.infoCommentFail.emit({});

      return;
    }

    const newDateActivity = this.formCommentFail.controls.newDateActivity.value._d ?
      this.formCommentFail.controls.newDateActivity.value._d.toISOString() :
      this.formCommentFail.controls.newDateActivity.value;

    const infoCommentFail = {
      type: this.typeMenu,
      typeSelected: this.enablenewDateField,
      description: this.formCommentFail.controls.description.value,
      motive: this.formCommentFail.controls.motive.value.charAt(0),
      justify: this.formCommentFail.controls.justify.value,
      newDateActivity: this.enablenewDateField ? 'N/A' : newDateActivity,
      redireccionar: true
    };

    this.infoCommentFail.emit(infoCommentFail);
  }

  async notification(notificacion) {
    const alert = await this.alertController.create({
      header: 'Atención',
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR']
    });

    await alert.present();

    alert.onDidDismiss();

  }

  async notificationHorasEjecutadas(notificacion) {
    const alert = await this.alertController.create({
      header: 'Atención',
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR']
    });

    await alert.present();

    const { data } = await alert.onDidDismiss();

    this.router.navigateByUrl('u/execLog/pending-visits/visit-id/subjects');
  }

}
