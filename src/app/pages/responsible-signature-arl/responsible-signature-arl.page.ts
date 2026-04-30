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
import { ResponseToObject } from 'src/app/services/activities/updateActivityHours/updateActivityHours.service';
import { UpdateListaActividadesService } from 'src/app/services/activities/updateListaActividades/update-lista-actividades.service';

@Component({
  selector: 'app-responsible-signature-arl',
  templateUrl: './responsible-signature-arl.page.html',
  styleUrls: ['./responsible-signature-arl.page.scss'],
})
export class ResponsibleSignatureARLPage implements OnInit {
  private promise: Promise<string>;

  // signature options
  public signaturePadOptions: object = {
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
    private toastController: ToastController,
    private responseToObjectSv: ResponseToObject,
    private updateListaActividadesSv: UpdateListaActividadesService
  ) { }

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
    this.actaAsesoriaGestionada = await this.cacheService.createActaAsesoria(idProveedor);

    const files = this.getFiles();

    if (checkNetwork) {
      await this.handleNetworkAvailable(files);
    } else {
      await this.handleNetworkUnavailable(files);
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

  /** ------------------------------------------------------------------
   *  handleNetworkAvailable: proceso principal con conexión a internet
   *  ------------------------------------------------------------------
   *  Cada paso valida el resultado y muestra un mensaje amigable
   *  antes de detener el proceso si algo falla.
   */
  private async handleNetworkAvailable(files: any[]) {
    await this.processTracker.startProcess('Creando acta de asesoría...');

    try {
      // 1️⃣ Crear acta
      const creacionActa = await this.createActaAsesoria();
      if (!creacionActa) {
        return; // createActaAsesoria ya mostró el error con finish()
      }

      const actaId = creacionActa[1];
      await this.processTracker.completeLastStep();

      // 2️⃣ Subir archivos
      if (files.length > 0) {
        await this.processTracker.addStep('Subiendo archivos adjuntos...');
        const archivosOk = await this.uploadFiles(actaId, files);
        if (!archivosOk) {
          await this.processTracker.finish(
            false,
            'El acta se creó correctamente, pero algunos archivos adjuntos no pudieron subirse.'
          );
          return;
        }
        await this.processTracker.completeLastStep();
      }

      // 3️⃣ Enviar correos
      await this.processTracker.addStep('Enviando notificación por correo...');
      const correosOk = await this.sendCorreoNotificacion();
      if (!correosOk) {
        await this.processTracker.finish(
          false,
          'El acta se creó y los archivos se subieron, pero no se pudo enviar la notificación por correo.\n\nPor favor, contacta a soporte para verificar que el correo de notificación se envió correctamente.'
        );
        return;
      }
      await this.processTracker.completeLastStep();

      // 4️⃣ Actualizar actividades
      await this.processTracker.addStep('Actualizando lista de actividades...');
      await this.updateListaActividadesSv.update(
        this.responseToObjectSv.responseParser(creacionActa),
        this.actaAsesoriaGestionada
      );
      await this.processTracker.completeLastStep();

      // 5️⃣ Limpiar archivos locales solo si TODO fue exitoso
      this.photoService.photos = [];
      this.removeFile();

      // 6️⃣ Final exitoso
      await this.processTracker.finish(true, 'Acta de asesoría creada exitosamente');
      this.router.navigateByUrl('/u/execLog');

    } catch (error) {
      console.error('handleNetworkAvailable error:', error);
      await this.processTracker.finish(
        false,
        'Ocurrió un error inesperado durante el proceso.\n\nPor favor intenta nuevamente. Si el problema persiste, contacta a soporte.'
      );
    }
  }

  /**
   * Crea el acta de asesoría en el backend.
   * @returns arreglo con la respuesta parseada o null si falló
   */
  private async createActaAsesoria(): Promise<string[] | null> {
    try {
      let creacionActa = await this.advisoryTopicService
        .saveActaAsesoria(this.actaAsesoriaGestionada)
        .toPromise();

      creacionActa = creacionActa?.split(';') ?? [];

      if (creacionActa[0] === 'true' && creacionActa[1] !== '-1') {
        return creacionActa;
      }

      await this.processTracker.finish(
        false,
        `No se pudo crear el acta de asesoría.\n\nLog enviado al equipo de soporte.'}`
      );
      return null;

    } catch (err) {
      console.error('createActaAsesoria error:', err);
      await this.processTracker.finish(
        false,
        'Error de conexión al crear el acta de asesoría.\n\nVerifica tu conexión a internet e intenta nuevamente.'
      );
      return null;
    }
  }

  /**
   * Sube archivos adjuntos al acta.
   * @returns true si todos se subieron bien, false si alguno falló
   */
  private async uploadFiles(actaId: string, files: any[]): Promise<boolean> {
    let allSuccess = true;

    for (const file of files) {
      const body = { ...file, UidActaAsesoria: +actaId };
      try {
        await this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();
      } catch (err) {
        console.error('Error al subir archivo:', file?.nombreArchivo || 'desconocido', err);
        allSuccess = false;
        // continúa con el siguiente archivo
      }
    }

    return allSuccess;
  }

  /** ------------------------------------------------------------------
   *  handleNetworkUnavailable: guarda el acta localmente sin conexión
   *  ------------------------------------------------------------------
   */
  private async handleNetworkUnavailable(files: any[] = []) {
    try {
      const activitiesChange: any[] = [];
      const getInfoActaAsesoria = this.cacheService.getAllInfoToAdvisory();
      const actSelec = JSON.parse(sessionStorage.getItem('companySelected') || '{}');

      for (const actividad of actSelec.listaActividadesMigradas || []) {
        const encontro = (getInfoActaAsesoria.activities || []).find(
          (element: any) => element.idActividad === actividad.idActividad
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

      await this.cacheService.saveActasAsesoria(files);
      this.notification(
        'Atención',
        'No hay conexión a internet. El acta se guardó con estado pendiente por enviar.\n\nCuando tengas conexión, puedes enviarla desde la opción "Actas por Enviar".'
      );
      this.router.navigateByUrl('/u/execLog');

    } catch (err) {
      console.error('handleNetworkUnavailable error:', err);
    }
  }

  /**
   * Envía notificaciones por correo a los responsables del acta.
   * @returns true si todos los correos se enviaron bien, false si alguno falló
   */
  private async sendCorreoNotificacion(): Promise<boolean> {
    try {
      if (!this.actaAsesoriaGestionada?.TTA_lista?.length) {
        return true; // no hay correos que enviar, se considera exitoso
      }

      let allSuccess = true;

      for (const tta of this.actaAsesoriaGestionada.TTA_lista) {
        const notifCorreoActa: CorreoNotificacionActaApp = {
          Fk_ID_ActividadMigradaPorUsuario: tta.id
        };
        try {
          await this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();
        } catch (err) {
          console.error('Error al enviar correo de notificación para actividad', tta.id, err);
          allSuccess = false;
        }
      }

      return allSuccess;
    } catch (err) {
      console.error('sendCorreoNotificacion error:', err);
      return false;
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
      } catch {
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

  /**
   * Obtiene la lista de archivos a subir (documentos + fotos).
   * IMPORTANTE: Ya NO elimina los archivos físicos aquí;
   * la limpieza se hace solo si el proceso completo es exitoso.
   */
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
        Base64: documento.foto?.base64Imagen,
      };
      files.push(objAdjuntarImg);
    }

    return files;
  }
}
