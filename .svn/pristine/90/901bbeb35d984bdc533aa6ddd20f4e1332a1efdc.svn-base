import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AdvisoryTopicService } from '../../services/activities/advisoryTopic/advisory-topic.service';
import { CacheService } from '../../services/cache/cache.service';
import { ConnectionStatusEnum, NetworkService } from '../../services/network/network.service';

@Component({
  selector: 'app-tasks-to-send',
  templateUrl: './tasks-to-send.page.html',
  styleUrls: ['./tasks-to-send.page.scss'],
})
export class TasksToSendPage implements OnInit {

  listAdvisory = [];

  loading: HTMLIonLoadingElement;

  infoUserARL: any;

  textoBuscar: string;

  actas: any[];

  constructor(
    private storage: Storage,
    private toastController: ToastController,
    private loadingCtlr: LoadingController,
    private cacheService: CacheService,
    private alertController: AlertController,
    private advisoryTopicService: AdvisoryTopicService,
    private net: NetworkService
  ) {
    this.actas = [];
  }

  ngOnInit() {
    this.getInfoUser();
    this.getAdvisoryActsWithoutSending();
  }

  async getInfoUser() {
    this.infoUserARL = await this.storage.get('sesion');
  }

  search(event) {
    this.textoBuscar = event.detail.value;
  }

  async getAdvisoryActsWithoutSending() {
    this.listAdvisory = await this.storage.get('actasAsesoriaSinInternet');
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
      duration: 2000
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

  async sendTasks(): Promise<void> {
    const checkNetwork = this.validateNetwork();

    if (!checkNetwork) {
      this.notification('Atención', 'Compruebe su conexión a internet.');

      return;
    }

    const totalActas = this.actas.length;
    const actasEnviadas: any[] = [];
    await this.presentLoading();

    for (let i = 0; i < this.actas.length; i++) {
      const a = this.actas[i];

      const toast = await this.toastController.create({
        message: `Enviando acta ${i + 1} de ${totalActas}...`,
        duration: 2000
      });

      toast.present();
      const acta = this.buildActa(a);
      const response = await this.sendTask(acta, a.files);
      this.cacheService.limpiarVariablesAsesoria();

      if (response) {
        actasEnviadas.push(a);
      }
    }

    this.loading.dismiss();
    actasEnviadas.forEach(a => this.actaSeleccionada({ detail: { checked: false } }, a));
    this.listAdvisory = this.listAdvisory.filter(a => actasEnviadas.find(aa => aa === a) === undefined);
    this.storage.set('actasAsesoriaSinInternet', this.listAdvisory);
    this.notification('Atención', 'Los documentos seleccionados se enviaron satisfactoriamente a la web.');
  }

  async sendTask(acta: any, files: any[] = []): Promise<boolean> {
    let response: boolean;
    let creacionActa = await this.advisoryTopicService.saveActaAsesoria(acta).toPromise();
    creacionActa = creacionActa.split(';');

    if (creacionActa[0] === 'true' && creacionActa[1] !== '-1') {
      for (const f of files) {
        const body = { ...f, UidActaAsesoria: +creacionActa[1] };
        await this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();
      }

      response = true;
    } else {
      this.notification('Error', 'Ocurrio un error y no se pudo crear el acta de asesoría');
      response = false;
    }

    return response;
  }

  async notification(titulo, notificacion) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR']
    });

    alert.onDidDismiss();

    await alert.present();
  }

  /**
   * Construye el cuerpo de la petición para guardar el acta.
   *
   * @param acta Acta.
   */
  private buildActa(acta: any): any {
    this.cacheService.saveSurveyARL(acta.infoSurveyARL);
    this.cacheService.saveSurveyQR(acta.infoSurveyQR);
    this.cacheService.saveTypeAdvice(acta.typeAdvisory);
    this.cacheService.saveInfoCompany(acta.infoCompany);
    this.cacheService.saveActivities(acta.activities);
    this.cacheService.saveCommentsAdvice(acta.commentsAdvice);
    const idProveedor = this.infoUserARL.idProveedor;
    const body = this.cacheService.createActaAsesoria(idProveedor);

    return body;
  }

}
