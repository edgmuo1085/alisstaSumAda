import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';;
import { AppStorageService } from 'src/app/app-storage.service';
import { AdvisoryTopicService } from '../../services/activities/advisoryTopic/advisory-topic.service';
import { CacheService } from '../../services/cache/cache.service';
import { UpdateListaActividadesService } from '../../services/activities/updateListaActividades/update-lista-actividades.service';
import { ResponseToObject } from '../../services/activities/updateActivityHours/updateActivityHours.service';
import { ConnectionStatusEnum, NetworkService } from '../../services/network/network.service';
import { Router } from '@angular/router';
import { ProcessTrackerService } from 'src/app/services/activities/advisoryTopic/process-tracker.service';
import { CorreoNotificacionActaApp } from 'src/app/intarfaces/interfaces';
import { ActivityForSend, File } from './task-to-send.interface';
import { ValidateFileTypeService } from 'src/app/services/activities/validateFileType/validateFileType.service';

@Component({
  selector: 'app-tasks-to-send',
  templateUrl: './tasks-to-send.page.html',
  styleUrls: ['./tasks-to-send.page.scss'],
})
export class TasksToSendPage implements OnInit {
  listAdvisory: ActivityForSend[] = [];
  fileLIstAdvisory: File[] = [];

  loading: HTMLIonLoadingElement;

  infoUserARL: any;

  textoBuscar: string;

  actas: any[];

  constructor(
    private storage: Storage,
    private appStorage: AppStorageService,
    private toastController: ToastController,
    private loadingCtlr: LoadingController,
    private cacheService: CacheService,
    private alertController: AlertController,
    private advisoryTopicService: AdvisoryTopicService,
    private net: NetworkService,
    private router: Router,
    private responseToObject: ResponseToObject,
    private updateListaActividadesSv: UpdateListaActividadesService,
    private processTracker: ProcessTrackerService,
    private validateFileTypeSv: ValidateFileTypeService
  ) {
    this.actas = [];
  }

  ngOnInit() {
    this.getInfoUser();
    this.getAdvisoryActsWithoutSending();
  }

  async getInfoUser() {
    this.infoUserARL = await this.appStorage.get('sesion');
  }

  search(event) {
    this.textoBuscar = event.detail.value;
  }

  async getAdvisoryActsWithoutSending() {
    this.listAdvisory = (await this.storage.get('actasAsesoriaSinInternet')) ?? [];
    console.log("Task to send: ", this.listAdvisory)
  }

  addImgandTypeToFiles(file: File): string {

    console.log("File recibido en addImgandTypeToFiles: ", JSON.stringify(file));

    if (file.Base64.split(';')[0].includes('pdf')) {
      return "../../../assets/icon/pdf_icon.svg"
    } else {
      return "../../../assets/icon/jpg_icon.svg"
    }


  }
  validateFileType(type: string): string {
    return this.validateFileTypeSv.validateFileType(type) ?? 'Tipo desconocido';
  }

  actaSeleccionada(event: any, advisoryAct: any) {
    if (!event.detail.checked) {
      const index = this.actas.findIndex(a => a === advisoryAct);

      if (index < 0) {
        return;
      }

      this.actas.splice(index, 1);

      return;
    }

    this.actas.push(advisoryAct);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Verifique su conexión a internet.',
      duration: 2000,
    });
    toast.present();
  }

  validateNetwork() {
    const status = this.net.getNetworkStatus();

    if (status === ConnectionStatusEnum.Offline) {
      this.presentToast();
    }

    return status === ConnectionStatusEnum.Online;
  }

  async presentLoading() {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    return this.loading.present();
  }

  /**
   * Envía todas las actas seleccionadas usando un SOLO modal de ProcessTrackerService
   * que acumula todos los pasos de todas las actas secuencialmente.
   */
  async sendTasks(): Promise<void> {
    const checkNetwork = this.validateNetwork();

    if (!checkNetwork) {
      this.notification('Atención', 'Compruebe su conexión a internet.');
      return;
    }

    const totalActas = this.actas.length;
    const actasEnviadas: any[] = [];

    // 🟢 Abrimos UN SOLO modal para todo el proceso
    await this.processTracker.startProcess('Enviando actas de asesoría...');

    for (let i = 0; i < totalActas; i++) {
      const a = this.actas[i];
      const acta = await this.buildActa(a);
      const success = await this.processSingleActa(i, totalActas, acta, a.files);
      this.cacheService.limpiarVariablesAsesoria();

      if (success) {
        actasEnviadas.push(a);
      }
    }

    // ✅ Limpiar storage y navegar
    actasEnviadas.forEach(a => this.actaSeleccionada({ detail: { checked: false } }, a));
    this.listAdvisory = this.listAdvisory.filter(a => actasEnviadas.find(aa => aa === a) === undefined);
    await this.storage.set('actasAsesoriaSinInternet', this.listAdvisory);

    // 🔚 Mostrar resumen final con un solo finish()
    const enviadas = actasEnviadas.length;
    if (enviadas === totalActas) {
      await this.processTracker.finish(true, `Todas las actas (${totalActas}) se enviaron correctamente.`);
    } else if (enviadas > 0) {
      await this.processTracker.finish(true, `Se enviaron ${enviadas} de ${totalActas} actas.`);
    } else {
      await this.processTracker.finish(false, 'No se pudo enviar ninguna acta. Verifica tu conexión e intenta nuevamente.');
      return;
    }

    this.router.navigateByUrl('/u/home');
  }

  /**
   * Procesa un acta individual agregando sus pasos al tracker ya abierto.
   *
   * @param index Índice del acta actual (0-based).
   * @param total Total de actas a enviar.
   * @param acta Cuerpo del acta a enviar.
   * @param files Archivos adjuntos.
   * @returns true si se completó exitosamente, false si falló.
   */
  private async processSingleActa(index: number, total: number, acta: any, files: any[]): Promise<boolean> {
    const actaLabel = `Acta ${index + 1} de ${total}`;

    try {
      // 1️⃣ Crear acta
      this.processTracker.addStep(`${actaLabel}: Creando acta de asesoría...`);

      let creacionActa = await this.advisoryTopicService
        .saveActaAsesoria(acta)
        .toPromise();

      this.processTracker.completeLastStep();

      creacionActa = creacionActa?.split(';') ?? [];

      if (!(creacionActa[0] === 'true' && creacionActa[1] !== '-1')) {
        this.processTracker.addStep(`❌ ${actaLabel}: No se pudo crear el acta de asesoría.`);
        return false;
      }

      // 2️⃣ Subir archivos adjuntos (si existen)
      if (files.length > 0) {
        this.processTracker.addStep(`${actaLabel}: Subiendo archivos adjuntos...`);

        for (const f of files) {
          const body = { ...f, UidActaAsesoria: +creacionActa[1] };
          await this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();
        }

        this.processTracker.completeLastStep();
      }

      // 3️⃣ Enviar notificación por correo
      this.processTracker.addStep(`${actaLabel}: Enviando notificación por correo...`);
      await this.sendEmailNotifications(acta);
      this.processTracker.completeLastStep();

      // 4️⃣ Actualizar lista de actividades
      this.processTracker.addStep(`${actaLabel}: Actualizando lista de actividades...`);
      await this.updateListaActividadesSv.update(
        this.responseToObject.responseParser(creacionActa),
        acta
      );
      this.processTracker.completeLastStep();

      // ✅ Éxito para esta acta
      this.processTracker.addStep(`✅ ${actaLabel}: Completada`);

      return true;

    } catch (error) {
      console.error(`Error en ${actaLabel}:`, error);
      const errorMsg = (error as any)?.message || 'Intente nuevamente.';
      this.processTracker.addStep(`❌ ${actaLabel}: Error - ${errorMsg}`);
      return false;
    }
  }

  /**
   * Envía notificaciones por correo a los responsables del acta.
   *
   * @param acta Cuerpo del acta que contiene la lista TTA.
   */
  private async sendEmailNotifications(acta: any): Promise<void> {
    const ttaList = acta?.TTA_lista;

    if (ttaList && ttaList.length > 0) {
      for (const tta of ttaList) {
        const idActividadMigradaPorUsuario = tta.id;
        const notifCorreoActa: CorreoNotificacionActaApp = {
          Fk_ID_ActividadMigradaPorUsuario: idActividadMigradaPorUsuario,
        };
        await this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();
      }
    }
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
   * Construye el cuerpo de la petición para guardar el acta.
   *
   * @param acta Acta.
   */
  private async buildActa(acta: any): Promise<any> {
    this.cacheService.saveSurveyARL(acta.infoSurveyARL);
    this.cacheService.saveSurveyQR(acta.infoSurveyQR);
    this.cacheService.saveTypeAdvice(acta.typeAdvisory);
    this.cacheService.saveInfoCompany(acta.infoCompany);
    this.cacheService.saveActivities(acta.activities);
    this.cacheService.saveCommentsAdvice(acta.commentsAdvice);
    const idProveedor = this.infoUserARL.idProveedor;
    const body = await this.cacheService.createActaAsesoria(idProveedor);

    return body;
  }
}
