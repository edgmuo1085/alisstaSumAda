import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { File } from '@ionic-native/file/ngx';
import { AlertController, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AdvisoryVerificationComponent } from '../../components/advisory-verification/advisory-verification.component';
import { AdvisoryTopicService } from '../../services/activities/advisoryTopic/advisory-topic.service';
import { PhotoServiceService } from '../../services/attach/photo-service.service';
import { CacheService } from '../../services/cache/cache.service';
import { ConnectionStatusEnum, NetworkService } from '../../services/network/network.service';
import { CorreoNotificacionActaApp } from 'src/app/intarfaces/interfaces';
import { SignaturePadComponent } from 'src/app/components/signature-pad/signature-pad.component';

@Component({
  selector: 'app-responsible-signature-arl',
  templateUrl: './responsible-signature-arl.page.html',
  styleUrls: ['./responsible-signature-arl.page.scss'],
})
export class ResponsibleSignatureARLPage implements OnInit {
  private promise: Promise<string>;

  // tslint:disable-next-line: ban-types
  public signaturePadOptions: Object = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 300,
  };

  /**
   * infoUserARL, esta variable permite saber la información del usuario logeado en la aplicación
   */
  infoUserARL: any;

  /**
   * signatureEntered, Es la variable que almacena la firma ingresada por el personal de la ARL.
   */
  signatureEntered: any;

  /**
   * valueNetwork, es la variable que almacena si hay o no internet para proceder a la creación del acta.
   */
  valueNetwork: any;

  /**
   * loading, la variable para mostrar el loading al momento de enviar la información del acta.
   */
  loading: any;

  /**
   * filesBase64, es un arreglo que almacena los base64 de los archivos que han sido leidos, que almacenaron en la actividad.
   */
  filesBase64: any[] = [];

  /**
   * cargaArchivos, es solo una variable donde se almacena el resultado si es exitoso o no la carga del archivo.
   */
  cargaArchivos: any;

  /**
   * actaAsesoriaGestionada, es la variable que almacena la respuesta de la creación del acta de asesoria, por ejemplo: 'true;32'
   * el cual indica que fue creada con exito y ademas que el 32 es el número del acta de asesoría
   */
  actaAsesoriaGestionada: any;

  constructor(
    private storage: Storage,
    private net: NetworkService,
    private modalCtrl: ModalController,
    private photoService: PhotoServiceService,
    private file: File,
    private plt: Platform,
    private router: Router,
    private loadingCtlr: LoadingController,
    private alertController: AlertController,
    private cacheService: CacheService,
    private advisoryTopicService: AdvisoryTopicService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.getInfoUser();
  }

  async ionViewWillEnter() {
    await this.readFile();
  }

  async getInfoUser() {
    this.infoUserARL = await this.storage.get('sesion');
  }

  drawComplete(signature: string) {
    const firma = signature.split(',');
    this.signatureEntered = firma[0].concat(',').concat(' ').concat(firma[1]);
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing in ARL page');
  }

  clear(signaturePadComponent: SignaturePadComponent) {
    signaturePadComponent.clear();
  }

  handleClear(isEmpty: boolean): void {
    console.log('¿La firma está vacía?:', isEmpty);
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

  validateNetwork() {
    const status = this.net.getNetworkStatus();

    if (status === ConnectionStatusEnum.Offline) {
      this.presentToast();
    }

    return status === ConnectionStatusEnum.Online;
  }

  async sendTask() {
    const infoSurveyResponsibleARL = this.getSurveyResponsibleData();
    this.cacheService.saveSurveyARL(infoSurveyResponsibleARL);
  
    const checkNetwork = this.validateNetwork();
    const idProveedor = this.infoUserARL.idProveedor;
    this.actaAsesoriaGestionada = this.cacheService.createActaAsesoria(idProveedor);
  
    const files = this.getFiles();
  
    if (checkNetwork) {
      await this.handleNetworkAvailable(files);
    } else {
      await this.handleNetworkUnavailable();
    }
  }
  
  private getSurveyResponsibleData() {
    return {
      responsableId: this.infoUserARL.idPersona,
      responsableDocumento: this.infoUserARL.idPersona,
      responsableNombre: `${this.infoUserARL.nombres} ${this.infoUserARL.apellidos}`,
      responsableNumeroLicenciaSST: this.infoUserARL.idLicenciaSst,
      responsableCargo: this.infoUserARL.cargo,
      responsableRazonSocial: this.infoUserARL.nombreProveedor,
      responsableFirma: this.signatureEntered,
    };
  }
  
  private async handleNetworkAvailable(files: any[]) {
    await this.presentLoading('Creando acta de asesoría ...');
    console.log("Estos son files: ", files)
    try {
      const creacionActa = await this.createActaAsesoria();
      if (creacionActa) {
        await this.uploadFiles(creacionActa, files);
        await this.updateListaActividades();
        this.notification('Atención', 'Se ha creado el acta de asesoría');
        this.router.navigateByUrl('/u/execLog');
      } else {
        this.notification('Error', 'No se pudo crear el acta de asesoría');
      }
    } finally {
      this.loading.dismiss();
    }
  }
  
  private async createActaAsesoria(): Promise<string | null> {
    let creacionActa = await this.advisoryTopicService
      .saveActaAsesoria(this.actaAsesoriaGestionada)
      .toPromise();
    creacionActa = creacionActa.split(';');
    return creacionActa[0] === 'true' && creacionActa[1] !== '-1' ? creacionActa[1] : null;
  }
  
  private async uploadFiles(actaId: string, files: any[]) {
    for (const file of files) {
      const body = { ...file, UidActaAsesoria: +actaId };
      await this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();
    }
  
    if (this.actaAsesoriaGestionada?.TTA_lista?.length) {
      for (const tta of this.actaAsesoriaGestionada.TTA_lista) {
        const notifCorreoActa: CorreoNotificacionActaApp = { Fk_ID_ActividadMigradaPorUsuario: tta.id };
        await this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();
      }
    }
  
    this.photoService.photos = [];
  }
  
  private async updateListaActividades() {
    const listaActividades = await this.storage.get('listaActividades');
  
    for (const actividad of listaActividades) {
      const { listaActividadesMigradas } = actividad;
  
      for (const element of listaActividadesMigradas) {
        const idActividad = element.id;
        const TTA_LISTA = this.actaAsesoriaGestionada.TTA_lista;
        const encontro = TTA_LISTA.find(x => x.id === idActividad);
  
        if (encontro) {
          const index = listaActividadesMigradas.indexOf(element);
          if (index > -1) {
            listaActividadesMigradas.splice(index, 1);
          }
          actividad.listaActividadesMigradas = listaActividadesMigradas;
        }
      }
    }
  
    await this.storage.set('listaActividades', listaActividades);
  }
  
  private async handleNetworkUnavailable() {
    const activitiesChange = [];
    const getInfoActaAsesoria = this.cacheService.getAllInfoToAdvisory();
    const actSelec = JSON.parse(sessionStorage.companySelected);
  
    for (const actividad of actSelec.listaActividadesMigradas) {
      const encontro = getInfoActaAsesoria.activities.find(
        element => element.idActividad === actividad.idActividad
      );
  
      if (encontro) {
        encontro.estadoInterno = 'Por enviar';
        activitiesChange.push(encontro);
      } else {
        activitiesChange.push(actividad);
      }
    }
  
    actSelec.listaActividadesMigradas = activitiesChange;
    sessionStorage.setItem('companySelected', JSON.stringify(actSelec));
  
    const saveActaAsesoria = this.cacheService.saveActasAsesoria();
    if (saveActaAsesoria) {
      this.notification('Atención', 'Se guardo el acta de asesoría pero con estado pendiente por enviar');
      this.router.navigateByUrl('/u/execLog');
    }
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
    
        const base64 = extensionBase64.concat(',').concat(data.data);
        const objUploadFile = {
          UidActividadMigradaXUSuario: idActividad,
          TipoSoporte: tipoDocumento,
          Base64: base64,
        };
    
        this.filesBase64.push(objUploadFile);
      } catch { /* empty */ }
    }
    
  }

  removeFile() {
    const activities = this.cacheService.saveAttach;

    for (const activity of activities) {
      const nombreArchivo = activity.nombreArchivo;
      const idActividad = activity.idActividad;
    
      try {
        Filesystem.deleteFile({
          path: `${idActividad}/${nombreArchivo}`,
          directory: Directory.Data,
        });
      } catch { /* empty */ }
    }
    
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

  private getFiles(): any[] {
    const files: any[] = [];
    const imagenesAdjuntas = this.cacheService.obtenerAdjuntosFoto();

    for (const objAdjuntarDoc of this.filesBase64) {
      files.push(objAdjuntarDoc);
    }
    
    for (const element of imagenesAdjuntas) {
      element.forEach(async documento => {
        const objAdjuntarImg = {
          UidActividadMigradaXUSuario: documento.idActividad,
          TipoSoporte: documento.idTipoArchivo,
          base64: documento.foto.base64Imagen,
        };
    
        files.push(objAdjuntarImg);
      });
    }
    

    this.removeFile();

    return files;
  }
}
