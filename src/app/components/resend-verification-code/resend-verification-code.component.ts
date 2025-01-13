import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivityListCompanyService } from 'src/app/services/activities/activityListCompany/activity-list-company.service';

@Component({
  selector: 'app-resend-verification-code',
  templateUrl: './resend-verification-code.component.html',
  styleUrls: ['./resend-verification-code.component.scss'],
})
export class ResendVerificationCodeComponent implements OnInit {
  /**
   * Este componente es la popup que esta en el menú luego de ingresar en la opción de registro de ejecución de actividades
   */

  listaResponsables: any[] = [];
  responsableList: any[] = [];
  responsablesSeleccionados: any[] = [];
  loading: any;
  textoBuscar = '';

  constructor(
    private modalCtrl: ModalController,
    private listActivitiesCompany: ActivityListCompanyService,
    private storage: Storage,
    private activityListCompany: ActivityListCompanyService,
    private loadingCtlr: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.listActivities();
  }

  /**
   * listActivities() lista las actividades dependiendo de las actividades migradas al usuario que se logueo en la app
   */
  async listActivities() {
    const documentoUsuario = await this.storage.get('sesion');
    // this.presentLoading('Cargando responsables ...');
    // const responsables = await this.listActivitiesCompany.listActivityForCompany(documentoUsuario.idPersona).toPromise();
    this.listaResponsables = await this.storage.get('listaActividades');
    let responsables = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.listaResponsables.length; i++) {
      if (this.listaResponsables[i].listaReposables.length > 0) {
        const idEmpresa = this.listaResponsables[i].id;
        const nameEmpresa = this.listaResponsables[i].name;
        const docEmpresa = this.listaResponsables[i].numeroDocumento;
        const empresaInfo = { nameEmpresa, docEmpresa }
        // tslint:disable-next-line: prefer-for-of
        for (let j = 0; j < this.listaResponsables[i].listaReposables.length; j++) {
          const element = this.listaResponsables[i].listaReposables[j];
          // const objResponsables = {
          //   idEmpresa,
          //   listaResponsables: element,
          // };
          responsables.push({ idEmpresa, element });
        }
        this.responsableList.push({ empresaInfo, responsables });
        responsables = []
      }
    }
    this.listaResponsables = responsables;
  }

  /**
   * Buscar el responsable al que se le quiere reenviar el código de verificación
   */
  search(event) {
    this.textoBuscar = event.detail.value;
  }

  selectResponsible(responsable: { idEmpresa: number; element: { id: number } }) {
    // Busca el índice del objeto en el array por el `element.id`
    const index = this.responsablesSeleccionados.findIndex(
      (item) => item.element.id === responsable.element.id
    );

    if (index !== -1) {
      // Si existe, elimina el objeto completo
      this.responsablesSeleccionados.splice(index, 1);
    } else {
      // Si no existe, agrega el nuevo objeto
      this.responsablesSeleccionados.push(responsable);
    }
  }

  /**
   * Método que permite reeenviar el código de verificación a usuario seleccionado.
   */

  async resendCode() {
    if (this.responsablesSeleccionados.length === 1) {
      const usuarioAEnviarCodigo = this.responsablesSeleccionados[0];
      this.presentLoading('Reenviando código ...');
      // tslint:disable-next-line: max-line-length
      const siEnvioCorreo = await this.activityListCompany
        .recordarCodigoVerificacion(usuarioAEnviarCodigo.element.id, usuarioAEnviarCodigo.idEmpresa)
        .toPromise();
      if (siEnvioCorreo) {
        this.notification('Atención', `Se reenvío el código de verificación al usuario:${usuarioAEnviarCodigo.element.correo} `);
      } else {
        this.notification('Error', `No se pudo envíar el correo al siguiente usuario: ${usuarioAEnviarCodigo.element.correo}`);
      }
    } else {
      this.notification('Error', 'Se debe seleccionar solo un usuario');
    }
    this.loading.dismiss();
  }

  // Cerrar la modal.
  regresar() {
    this.modalCtrl.dismiss();
  }

  // Cargar el loading
  async presentLoading(message) {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message,
    });
    return this.loading.present();
  }

  // Cargar la notificación cuando se envía o no el código de verificación.
  async notification(titulo, notificacion) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR'],
    });

    await alert.present();
    alert.onDidDismiss();
  }
}
