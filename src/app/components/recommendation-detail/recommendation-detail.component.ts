import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { RecommendationATService } from '../../services/AT/recommendation-at.service';
import { recommendationDetail } from 'src/app/intarfaces/interfaces';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recommendation-detail',
  templateUrl: './recommendation-detail.component.html',
  styleUrls: ['./recommendation-detail.component.scss'],
})
export class RecommendationDetailComponent implements OnInit {
  /**
   * Este componente es el encargado de mostrar la información de las recomendaciones que estan en el modulo
   * de recomendaciones AT, esta se activa al momento de seleccionar una recomendación
   */

  @Input() id;
  @Input() dateRadication;
  formRegisterRecommendationDetail: FormGroup;
  enabledField = false;
  disabledField = true;
  idRecommendationSelected: string;
  saveRecommendationDetail: recommendationDetail;
  maxDateImplementation: any;

  constructor(
    private modalCtrl: ModalController,
    private alertController: AlertController,
    private recommendationService: RecommendationATService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const date = this.dateRadication.split('T')[0].split('-');
    const newFecha = date[1] + '/' + date[2] + '/' + date[0];
    this.maxDateImplementation = new Date(newFecha);
    this.createFormRecomemendation();
  }

  /**
   * Método que permite crear el formulario de la recomendación seleccionada
   */

  createFormRecomemendation() {
    this.formRegisterRecommendationDetail = this.formBuilder.group({
      checkRecomendation: ['', Validators.required],
      implementationDate: [''],
      wasEffective: [''],
      notImplementation: [''],
      nameSupport: [''],
    });
  }

  /**
   * Este método se ejecuta cuando cambia el valor de la pregunta ¿ La recomendación fue implementada ?
   * y dependiendo de esto activar o desactivar algunos botones.
   */

  changeOptionCheckRecommendation(event) {
    const optionSelected = event.detail.value;
    if (optionSelected === 'true') {
      this.disabledField = false;
      this.formRegisterRecommendationDetail.controls.implementationDate.enable();
      this.formRegisterRecommendationDetail.controls.notImplementation.disable();
    } else {
      this.disabledField = true;
      this.formRegisterRecommendationDetail.controls.notImplementation.enable();
      this.formRegisterRecommendationDetail.controls.implementationDate.disable();
      this.formRegisterRecommendationDetail.controls.implementationDate.reset();
      this.formRegisterRecommendationDetail.controls.wasEffective.reset();
    }
  }

  /**
   * Este metodo basicamente muestra la alerta de exito o fallido segun sea el caso al momento de
   * ejecutar el servicio
   */
  async confirmationRegister(resultadoAlerta: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: resultadoAlerta,
      mode: 'ios',
      message: mensaje,
      buttons: [
        {
          text: 'ACEPTAR',
          handler: () => {
            this.modalCtrl.dismiss();
          },
        },
      ],
    });
    await alert.present();
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

  /**
   * register(), permite consumir un servicio el cual guarda el detalle de la recomendación seleccionada.
   */

  register() {
    const checkRecommendation = this.formRegisterRecommendationDetail.value.checkRecomendation === 'true';
    const wasEffective = this.formRegisterRecommendationDetail.value.wasEffective === 'true';
    if (!checkRecommendation) {
      this.saveRecommendationDetail = {
        PK_ID_Recomendacion: this.id,
        fueImplementada: checkRecommendation,
        fueEficaz: wasEffective,
        causaDeLaNoImplementacion: this.formRegisterRecommendationDetail.value.notImplementation,
        nombreSoporte: this.formRegisterRecommendationDetail.value.nameSupport,
      };
    } else {
      const recommendationDate = this.formRegisterRecommendationDetail.value.implementationDate.toISOString().split('T')[0];
      const date = recommendationDate.split('-');
      const dateString = date[2] + '/' + date[1] + '/' + date[0];
      this.saveRecommendationDetail = {
        PK_ID_Recomendacion: this.id,
        fueImplementada: checkRecommendation,
        fechaImplementacion: dateString,
        fueEficaz: wasEffective,
        causaDeLaNoImplementacion: this.formRegisterRecommendationDetail.value.notImplementation,
        nombreSoporte: this.formRegisterRecommendationDetail.value.nameSupport,
      };
    }
    this.recommendationService.saveRecommendationSelected(this.saveRecommendationDetail).subscribe(
      response => {
        this.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
      },
      err => {
        console.error('No fue exitoso el registro', err);
        this.confirmationRegister('Error.', 'No se pudo realizar el registro para el detalle de la recomendación');
      }
    );
  }
}
