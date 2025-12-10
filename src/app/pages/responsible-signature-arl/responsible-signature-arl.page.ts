import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Directory, Filesystem } from '@capacitor/filesystem';
import { AlertController, LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';;
import { AdvisoryVerificationComponent } from '../../components/advisory-verification/advisory-verification.component';
import { AdvisoryTopicService } from '../../services/activities/advisoryTopic/advisory-topic.service';
import { PhotoServiceService } from '../../services/attach/photo-service.service';
import { CacheService } from '../../services/cache/cache.service';
import { NetworkService } from '../../services/network/network.service';
import { CorreoNotificacionActaApp } from 'src/app/intarfaces/interfaces';
import { SignaturePadComponent } from 'src/app/components/signature-pad/signature-pad.component';
import { ProcessTrackerService } from 'src/app/services/activities/advisoryTopic/process-tracker.service';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-responsible-signature-arl',
  templateUrl: './responsible-signature-arl.page.html',
  styleUrls: ['./responsible-signature-arl.page.scss'],
})
export class ResponsibleSignatureARLPage implements OnInit {
  private promise: Promise<string>;

  // signature options
  public signaturePadOptions: Object = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 300,
  };

  infoUserARL: any;
  signatureEntered: any;
  valueNetwork: any;
  loading: any;
  filesBase64: any[] = [];
  cargaArchivos: any;
  actaAsesoriaGestionada: any;

  constructor(
    private storage: Storage,                    // Ionic Storage -> datos grandes (listaActividades, actas, etc.)
    private appStorage: AppStorageService,       // Preferences -> session small data (sesion)
    private net: NetworkService,
    private modalCtrl: ModalController,
    private photoService: PhotoServiceService,
    private plt: Platform,
    private router: Router,
    private loadingCtlr: LoadingController,
    private alertController: AlertController,
    private cacheService: CacheService,
    private advisoryTopicService: AdvisoryTopicService,
    private processTracker: ProcessTrackerService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    // Obtener la sesión desde AppStorageService (Preferences)
    this.getInfoUser();
  }

  async ionViewWillEnter() {
    await this.readFile();
  }

  // ---------------------------
  // Info user (small) -> Preferences
  // ---------------------------
  async getInfoUser() {
    try {
      // Use AppStorageService for 'sesion'
      this.infoUserARL = await this.appStorage.get(this.appStorage.KEY_SESSION);
      // fallback: some installations could still have it in ionic storage — try fallback but avoid overwriting pref
      if (!this.infoUserARL) {
        const fallback = await this.storage.get('sesion');
        if (fallback) this.infoUserARL = fallback;
      }
    } catch (err) {
      console.error('Error leyendo sesión:', err);
      this.infoUserARL = null;
    }
  }

  drawComplete(signature: string) {
    if (!signature) return;
    const firma = signature.split(',');
    this.signatureEntered = `${firma[0]}, ${firma[1] ?? ''}`;
  }

  drawStart() {
    // noop or log if needed
    // console.log('begin drawing in ARL page');
  }

  clear(signaturePadComponent: SignaturePadComponent) {
    signaturePadComponent?.clear();
  }

  handleClear(isEmpty: boolean): void {
    // noop - handler placeholder
  }

  async verification() {
    const infoActa = this.cacheService.getAllInfoToAdvisory();
    const modal = await this.modalCtrl.create({
      component: AdvisoryVerificationComponent,
      componentProps: { info: infoActa },
    });
    await modal.present();
  }

  async sendTask() {
    const infoSurveyResponsibleARL = this.getSurveyResponsibleData();
    this.cacheService.saveSurveyARL(infoSurveyResponsibleARL);

    const checkNetwork = await this.net.testNetworkConnection();
    const idProveedor = this.infoUserARL?.idProveedor;
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
      responsableId: this.infoUserARL?.idPersona,
      responsableDocumento: this.infoUserARL?.idPersona,
      responsableNombre: `${this.infoUserARL?.nombres ?? ''} ${this.infoUserARL?.apellidos ?? ''}`.trim(),
      responsableNumeroLicenciaSST: this.infoUserARL?.idLicenciaSst,
      responsableCargo: this.infoUserARL?.cargo,
      responsableRazonSocial: this.infoUserARL?.nombreProveedor,
      responsableFirma: this.signatureEntered,
    };
  }

  private async handleNetworkAvailable(files: any[]) {
    await this.processTracker.startProcess('Creando acta de asesoría...');

    try {
      const creacionActa = await this.createActaAsesoria();
      if (!creacionActa) {
        await this.processTracker.finish(false, 'No se pudo crear el acta de asesoría');
        return;
      }
      await this.processTracker.completeStep(0);

      if (files && files.length) {
        await this.processTracker.addStep('Subiendo archivos adjuntos...');
        await this.uploadFiles(creacionActa, files);
        await this.processTracker.completeStep(this.stepsLength() - 1);
      }

      await this.processTracker.addStep('Enviando notificación por correo...');
      await this.sendCorreoNotificacion(creacionActa);
      await this.processTracker.completeStep(this.stepsLength() - 1);

      await this.processTracker.addStep('Actualizando lista de actividades...');
      await this.updateListaActividades();
      await this.processTracker.completeStep(this.stepsLength() - 1);

      await this.processTracker.finish(true, 'Acta de asesoría creada');
      this.router.navigateByUrl('/u/execLog');
    } catch (error) {
      console.error('Error en handleNetworkAvailable:', error);
      await this.processTracker.finish(false, 'Error en el proceso, intente de nuevo.');
    }
  }

  private stepsLength(): number {
    return (this as any).processTracker['steps']?.length || 0;
  }

  private async createActaAsesoria(): Promise<string | null> {
    try {
      let creacionActa = await this.advisoryTopicService.saveActaAsesoria(this.actaAsesoriaGestionada).toPromise();
      creacionActa = creacionActa?.split(';') ?? [];
      return creacionActa[0] === 'true' && creacionActa[1] !== '-1' ? creacionActa[1] : null;
    } catch (err) {
      console.error('createActaAsesoria error:', err);
      return null;
    }
  }

  private async uploadFiles(actaId: string, files: any[]) {
    for (const file of files) {
      const body = { ...file, UidActaAsesoria: +actaId };
      try {
        await this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();
      } catch (err) {
        console.error('uploadFiles error for file:', file, err);
        // continúa con el siguiente archivo
      }
    }
    // limpiar fotos en memoria del servicio
    this.photoService.photos = [];
  }

  private async updateListaActividades() {
    try {
      const listaActividades: any[] = (await this.storage.get('listaActividades')) || [];

      if (!Array.isArray(listaActividades)) return;

      for (const actividad of listaActividades) {
        const { listaActividadesMigradas } = actividad;
        if (!Array.isArray(listaActividadesMigradas)) continue;

        for (const element of [...listaActividadesMigradas]) {
          const idActividad = element.id;
          const TTA_LISTA = this.actaAsesoriaGestionada?.TTA_lista ?? [];
          const encontro = TTA_LISTA.find(x => x.id === idActividad);

          if (encontro) {
            const index = actividad.listaActividadesMigradas.indexOf(element);
            if (index > -1) actividad.listaActividadesMigradas.splice(index, 1);
          }
        }
      }

      // persistir cambios en Ionic Storage (clave: 'listaActividades' en minúsculas)
      await this.storage.set('listaActividades', listaActividades);
    } catch (err) {
      console.error('updateListaActividades error:', err);
    }
  }

  private async handleNetworkUnavailable() {
    try {
      const activitiesChange: any[] = [];
      const getInfoActaAsesoria = this.cacheService.getAllInfoToAdvisory();
      const actSelec = JSON.parse(sessionStorage.getItem('companySelected') || '{}');

      for (const actividad of actSelec.listaActividadesMigradas || []) {
        const encontro = (getInfoActaAsesoria.activities || []).find(
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
    } catch (err) {
      console.error('handleNetworkUnavailable error:', err);
    }
  }

  private async sendCorreoNotificacion(actaId: string) {
    try {
      if (this.actaAsesoriaGestionada?.TTA_lista?.length) {
        for (const tta of this.actaAsesoriaGestionada.TTA_lista) {
          const notifCorreoActa: CorreoNotificacionActaApp = {
            Fk_ID_ActividadMigradaPorUsuario: tta.id
          };
          await this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();
        }
      }
    } catch (err) {
      console.error('sendCorreoNotificacion error:', err);
    }
  }

  async readFile() {
    const documentosAdjuntados = this.cacheService.saveAttach || [];

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
      } catch (err) {
        // si no existe archivo o error, continuar
      }
    }
  }

  removeFile() {
    const activities = this.cacheService.saveAttach || [];

    for (const activity of activities) {
      const nombreArchivo = activity.nombreArchivo;
      const idActividad = activity.idActividad;

      try {
        Filesystem.deleteFile({
          path: `${idActividad}/${nombreArchivo}`,
          directory: Directory.Data,
        });
      } catch { /* continuar */ }
    }
  }

  async presentLoading(message: string) {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message,
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 5000,
      position: 'top',
      color: 'danger'
    });
    await toast.present();
  }

  async notification(titulo: string, notificacion: string) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR'],
    });

    await alert.present();
  }

  private getFiles(): any[] {
    const files: any[] = [];
    const imagenesAdjuntas = this.cacheService.obtenerAdjuntosFoto() || [];

    // archivos base64 en filesBase64
    for (const objAdjuntarDoc of this.filesBase64) {
      files.push(objAdjuntarDoc);
    }

    // fotos en cacheService
    for (const documento of imagenesAdjuntas) {
      const objAdjuntarImg = {
        UidActividadMigradaXUSuario: documento.idActividad,
        TipoSoporte: documento.idTipoArchivo,
        base64: documento.foto?.base64Imagen,
      };
      files.push(objAdjuntarImg);
    }

    // eliminar archivos físicos
    this.removeFile();

    return files;
  }
}
