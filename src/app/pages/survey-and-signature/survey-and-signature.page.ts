import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { AlertController, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AdvisoryVerificationComponent } from '../../components/advisory-verification/advisory-verification.component';
import { ActivityListCompanyService } from '../../services/activities/activityListCompany/activity-list-company.service';
import { AdvisoryTopicService } from '../../services/activities/advisoryTopic/advisory-topic.service';
import { PhotoServiceService } from '../../services/attach/photo-service.service';
import { CacheService } from '../../services/cache/cache.service';
import { ConnectionStatusEnum, NetworkService } from '../../services/network/network.service';
import { CorreoNotificacionActaApp } from 'src/app/intarfaces/interfaces';

@Component({
  selector: 'app-survey-and-signature',
  templateUrl: './survey-and-signature.page.html',
  styleUrls: ['./survey-and-signature.page.scss'],
})
export class SurveyAndSignaturePage implements OnInit {
  data: any[] = [];
  selectedVal: any;
  showSignature = false;
  verificationCode: number;

  responsibleList: any[] = [];

  textCheckFirma: any = 'NO';
  disabledFirma = false;

  infoSurveyQR: any;

  disabledBtnSignature = false;

  valueNetwork: any;

  actasAsesoria = [];

  infoUserARL: any;

  actaAsesoriaGestionada: any;

  cargaArchivos: any;

  loading: any;

  filesBase64: any[] = [];

  filesConcat: any = '';

  constructor(
    private platform: Platform,
    private cacheService: CacheService,
    private router: Router,
    private storage: Storage,
    private net: NetworkService,
    private photoService: PhotoServiceService,
    private loadingCtlr: LoadingController,
    private advisoryTopicService: AdvisoryTopicService,
    private activityListCompany: ActivityListCompanyService,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) {}

  async ionViewWillEnter() {
    await this.readFile();
  }

  ngOnInit() {
    this.responsibleList = JSON.parse(sessionStorage.companySelected).listaReposables;
    console.log('responsables', this.responsibleList);
    this.data = this.responsibleList;
    this.getInfoUser();
  }

  async getInfoUser() {
    this.infoUserARL = await this.storage.get('sesion');
    console.log('this.infoUserARL', this.infoUserARL);
  }

  async confirmVerificationCode() {
    const alert = await this.createVerificationCodeAlert();
    alert.onDidDismiss().then(async () => {
      await this.handleAlertDismiss();
    });
    await alert.present();
  }
  
  private async createVerificationCodeAlert() {
    return this.alertController.create({
      cssClass: 'my-custom-class',
      backdropDismiss: false,
      mode: 'ios',
      header: `Ingrese el código de verificación, si seleccionas la opción reenviar código, se enviará al siguiente correo: ${this.selectedVal.correo}`,
      inputs: [
        {
          name: 'verificationCodeInput',
          type: 'tel',
          placeholder: 'Código de verificación',
        },
      ],
      buttons: [
        {
          text: 'Reenviar código',
          handler: () => this.handleResendCode(),
        },
        {
          text: 'Aceptar',
          handler: data => this.handleVerification(data),
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => console.log('Confirm Cancel'),
        },
      ],
    });
  }
  
  private handleVerification(data: any) {
    if (this.selectedVal) {
      this.disabledFirma = true;
      if (this.selectedVal.codigoVerificacion === data.verificationCodeInput) {
        this.verificationCode = data.verificationCodeInput;
        this.disabledBtnSignature = true;
      } else {
        this.notification('Atención', 'El código ingresado no es válido, por favor intente nuevamente');
        this.disabledFirma = false;
      }
    } else {
      this.notification('Alerta', 'Debes seleccionar a un responsable de la empresa.');
    }
  }
  
  private async handleResendCode() {
    if (this.selectedVal) {
      const checkNetwork = this.validateNetwork();
      if (checkNetwork) {
        await this.resendVerificationCode();
      } else {
        this.notification('Alerta', 'No tienes conexión a internet para realizar esta funcionalidad');
      }
    } else {
      this.notification('Alerta', 'Debes seleccionar a un responsable de la empresa.');
    }
  }
  
  private async resendVerificationCode() {
    const idEmpresa = JSON.parse(sessionStorage.companySelected).id;
    const idResponsable = this.selectedVal.id;
    await this.presentLoading('Reenviando código de verificación ...');
    const siEnvioCorreo = await this.activityListCompany.recordarCodigoVerificacion(idResponsable, idEmpresa).toPromise();
    this.loading.dismiss();
    if (siEnvioCorreo) {
      this.notification('Exitoso', `Se reenvió el código de verificación al correo ${this.selectedVal.correo}`);
    } else {
      this.notification('Error', `No se pudo enviar el código de verificación al correo: ${this.selectedVal.correo}`);
    }
  }
  
  private async handleAlertDismiss() {
    // Aquí puedes manejar lo que ocurra después de cerrar el alerta.
  }
  

  OnChange(event) {
    this.selectedVal = event.detail.value;
  }

  getInfoSignatureQR(infoQR) {
    const fechaCreaciónActa = new Date();

    if (this.textCheckFirma === 'NO') {
      this.textCheckFirma = false;
      const answerPoll = infoQR.answerPoll.charAt(0);
      this.infoSurveyQR = {
        nombreResponsable: this.selectedVal.Nombre,
        responsableId: this.selectedVal.id,
        tipoDocumentoResponsable: this.selectedVal.tipoDocumentoDescripcion,
        numeroDocumentoResponsable: this.selectedVal.numeroDocumento,
        cargo: this.selectedVal.cargo,
        firmaQR: this.textCheckFirma,
        answerPool: answerPoll,
        signature: infoQR.signatureEntered,
        dateCreatedSurvey: fechaCreaciónActa,
      };
      this.cacheService.saveSurveyQR(this.infoSurveyQR);
      this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature/responsibleSignatureARL');
    } else {
      this.textCheckFirma = true;
      this.infoSurveyQR = {
        nombreResponsable: this.selectedVal.Nombre,
        responsableId: this.selectedVal.id,
        tipoDocumentoResponsable: this.selectedVal.tipoDocumentoDescripcion,
        numeroDocumentoResponsable: this.selectedVal.numeroDocumento,
        cargo: this.selectedVal.cargo,
        firmaQR: this.textCheckFirma,

        nombreResponsableARL: infoQR.nombreResponsableARL,
        apellidoResponsableARL: infoQR.apellidosResponsableARL,
        documentoResponsableARL: infoQR.documentoUsuarioARL,
        nombreProveedor: infoQR.nombreProveedor,
        cargoARL: infoQR.cargo,
        licenciaSSTARL: infoQR.licenciaSST,
        signature: infoQR.signatureEntered,
        dateCreatedSurvey: fechaCreaciónActa,
      };
      this.cacheService.saveSurveyQR(this.infoSurveyQR);
      this.sendTask();
    }
  }

  changeOptSignature(event) {
    if (event.detail.checked === true) {
      this.showSignature = true;
      this.textCheckFirma = 'SI';
    } else {
      this.showSignature = false;
      this.textCheckFirma = 'NO';
    }
  }

  async verification() {
    const infoActa = this.cacheService.getAllInfoToAdvisory();
    const modal = await this.modalCtrl.create({
      component: AdvisoryVerificationComponent,
      componentProps: {
        info: infoActa,
      },
    });

    modal.present();
  }

  async sendTask() {
    const checkNetwork = this.validateNetwork();
    if (checkNetwork) {
      await this.handleNetworkTask();
    } else {
      await this.handleOfflineTask();
    }
  }
  
  async handleNetworkTask() {
    const idProveedor = this.infoUserARL.idProveedor;
    this.actaAsesoriaGestionada = this.cacheService.createActaAsesoria(idProveedor);
    const files = this.getFiles();
    
    await this.presentLoading('Creando acta de asesoría ...');
    let creacionActa = await this.advisoryTopicService.saveActaAsesoria(this.actaAsesoriaGestionada).toPromise();
    creacionActa = creacionActa.split(';');
  
    if (creacionActa[0] === 'true' && creacionActa[1] !== '-1') {
      await this.uploadFiles(files, +creacionActa[1]);
      await this.sendEmailNotifications();
      await this.updateActivities();
      
      this.photoService.photos = [];
      this.notification('Atención', 'Se ha creado el acta de asesoría');
      this.router.navigateByUrl('/u/execLog');
    } else {
      this.notification('Error', 'No se pudo crear el acta de asesoría');
    }
  
    this.loading.dismiss();
  }
  
  async handleOfflineTask() {
    const activitiesChange = [];
    const getInfoActaAsesoria = this.cacheService.getAllInfoToAdvisory();
    const actSelec = JSON.parse(sessionStorage.companySelected);
  
    for (const actividad of actSelec.listaActividadesMigradas) {
      const { idActividad } = actividad;
      const encontro = getInfoActaAsesoria.activities.find(element => element.idActividad === idActividad);
      
      if (encontro) {
        encontro.estadoInterno = 'Por enviar';
        activitiesChange.push(encontro);
      } else {
        activitiesChange.push(actividad);
      }
    }
  
    actSelec.listaActividadesMigradas = activitiesChange;
    const cambioCompanySelected = JSON.stringify(actSelec);
    sessionStorage.setItem('companySelected', cambioCompanySelected);
  
    const saveActaAsesoria = this.cacheService.saveActasAsesoria(this.getFiles());
  
    if (saveActaAsesoria) {
      this.registerTime(this.actaAsesoriaGestionada.AE_HorasTotales);
      this.notification('Atención', 'El móvil no tiene acceso a datos, por lo cual el acta de asesoría se guardó con estado pendiente por enviar.');
      this.router.navigateByUrl('/u/execLog');
    }
  }
  
  async uploadFiles(files, uidActaAsesoria) {
    for (const f of files) {
      const body = { ...f, UidActaAsesoria: uidActaAsesoria };
      await this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();
    }
  }
  
  async sendEmailNotifications() {
    if (this.actaAsesoriaGestionada && this.actaAsesoriaGestionada.TTA_lista && this.actaAsesoriaGestionada.TTA_lista.length > 0) {
      for (const tta of this.actaAsesoriaGestionada.TTA_lista) {
        const idActividadMigradaPorUsuario = tta.id;
        const notifCorreoActa: CorreoNotificacionActaApp = { Fk_ID_ActividadMigradaPorUsuario: idActividadMigradaPorUsuario };
        await this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();
      }
    }
  }
  
  async updateActivities() {
    const listaActividades = await this.storage.get('listaActividades');
    
    for (const actividad of listaActividades) {
      const actividadesMigradas = actividad.listaActividadesMigradas;
      const ids: number[] = [];
  
      for (const element of actividadesMigradas) {
        const idActividad = element.id;
        const TTA_LISTA = this.actaAsesoriaGestionada.TTA_lista;
        const index = TTA_LISTA.findIndex(x => x.id === idActividad);
  
        if (index > -1) {
          ids.push(idActividad);
        }
      }
      
      actividad.listaActividadesMigradas = actividadesMigradas.filter(a => !ids.includes(a.id));
    }
  
    this.storage.set('listaActividades', listaActividades);
  }
  
  async readFile() {
    const documentosAdjuntados = this.cacheService.saveAttach;

    for (const documento of documentosAdjuntados) {
      const { nombreArchivo, idActividad, extensionBase64, tipoDocumento } = documento;
    
      try {
        const data = await Filesystem.readFile({
          path: `${idActividad}/${nombreArchivo}`,
          directory: Directory.Data,
        });
    
        const base64 = `${extensionBase64},${data.data}`;
        const objUploadFile = {
          UidActividadMigradaXUSuario: idActividad,
          TipoSoporte: tipoDocumento,
          Base64: base64,
        };
    
        this.filesBase64.push(objUploadFile);
      } catch (e) {
        console.log(e);
      }
    }
    
  }

  removeFile() {
    const activities = this.cacheService.saveAttach;

    for (const activity of activities) {
      const { nombreArchivo, idActividad } = activity;
    
      try {
        Filesystem.deleteFile({
          path: `${idActividad}/${nombreArchivo}`,
          directory: Directory.Data,
        });
      } catch { /* empty */ }
    }    
  }

  validateNetwork() {
    const status = this.net.getNetworkStatus();

    if (status === ConnectionStatusEnum.Offline) {
      this.presentToast();
    }

    return status === ConnectionStatusEnum.Online;
  }

  async presentLoading(message) {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message,
    });
    return this.loading.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Verifique su conexión a internet.',
      duration: 2000,
    });
    toast.present();
  }

  async notification(titulo, notificacion) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR'],
    });

    alert.onDidDismiss();

    await alert.present();
  }

  /**
   * Registra el tiempo de ejecución de esta actividad para el día actual.
   *
   * @param duration Texto que contiene la duración de la actividad.
   */
  private async registerTime(duration: string): Promise<void> {
    const re = /(\d+)(\s+Horas\s+)(\d+)(\s+Minutos)/gm;
    const results = re.exec(duration);

    if (!results) {
      return;
    }

    const minutes = +results[1] * 60 + +results[3];
    await this.cacheService.setRegisteredTime(minutes);
  }

  private getFiles(): any[] {
    const files: any[] = [];
    const imagenesAdjuntas = this.cacheService.obtenerAdjuntosFoto();

for (const objAdjuntarDoc of this.filesBase64) {
  files.push(objAdjuntarDoc);
}

for (const element of imagenesAdjuntas) {
  for (const documento of element) {
    const objAdjuntarImg = {
      UidActividadMigradaXUSuario: documento.idActividad,
      TipoSoporte: documento.idTipoArchivo,
      base64: documento.foto.base64Imagen,
    };
    files.push(objAdjuntarImg);
  }
}


    this.removeFile();

    return files;
  }
}
