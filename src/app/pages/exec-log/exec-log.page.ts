import { Component, OnInit } from '@angular/core';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ResendVerificationCodeComponent } from '../../components/resend-verification-code/resend-verification-code.component';
import { ActivityListCompanyService } from 'src/app/services/activities/activityListCompany/activity-list-company.service';
import { ProgressBarValues } from 'src/app/intarfaces/interfaces';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-exec-log',
  templateUrl: './exec-log.page.html',
  styleUrls: ['./exec-log.page.scss'],
})
export class ExecLogPage implements OnInit {

  optMenuOptions: Observable<any[]>;
  optMenuHelpOptions: Observable<any[]>;

  nameUserRegister = '';

  listActivity: any[] = [];
  listActivityTotal = 0;
  showListPendingVisit = true;
  loading: any;

  progressBar: ProgressBarValues = {
    visible: false,
    progress: 0,
    records: 0,
    refreshBtnEnable: false,
  };

  constructor(
    private listActivitiesCompanySv: ActivityListCompanyService,
    private loadingCtlr: LoadingController,
    private menuConfOptions: MenuConfiguracionService,
    private modalCtrl: ModalController,
    private storage: Storage,                 // Ionic Storage se mantiene
    private appStorage: AppStorageService,    // Usamos Preferences solo para la sesión
    private alertCtrl: AlertController
  ) {}

  async ngOnInit() {
    this.optMenuOptions = this.menuConfOptions.getMenuExceActivities();
    this.optMenuHelpOptions = this.menuConfOptions.getMenuHelpExceActivities();
    await this.uploadInfoUser();
  }

  optionSelectedMenu(itemSelected) {
    switch (itemSelected.title) {
      case 'Recordar código':
        this.showResendVerificationCode();
        break;
    }
  }

  // -------------------------
  // Cargar nombre del usuario
  // -------------------------
  async uploadInfoUser() {
    const nameUser = await this.appStorage.get(this.appStorage.KEY_SESSION);
    if (nameUser) {
      const nombreCompleto = `${nameUser.nombre1} ${nameUser.apellido1}`;
      this.nameUserRegister = nombreCompleto;
    }
  }

  // -------------------------
  // Modal recordar código
  // -------------------------
  async showResendVerificationCode() {
    const modal = await this.modalCtrl.create({
      component: ResendVerificationCodeComponent,
    });
    await modal.present();
  }

  // -------------------------
  // Cargar lista de actividades
  // -------------------------
  async listActivities() {
    await this.presentLoading();

    const userSession = await this.appStorage.get(this.appStorage.KEY_SESSION);
    if (!userSession) {
      this.loading.dismiss();
      return;
    }

    setTimeout(() => {
      this.listActivitiesCompanySv.listActivityForCompanyPerPage(userSession).subscribe(
        async response => {

          if (response.listActivitiesCompany.length > 0) {

            this.listActivityTotal = response.listActivitiesCompany[0].intTotalRegistros;
            const listActivity = response.listActivitiesCompany || [];

            const actasGuardadas: any[] =
              (await this.storage.get('actasAsesoriaSinInternet')) || [];

            this.listActivitiesCompanySv.actasGuardadas = actasGuardadas;
            this.listActivitiesCompanySv.listActivitiesFilter(listActivity);

            // Guardar en ionic storage (correcto para datos grandes)
            await this.storage.set('departamentos', response.listDepartamentos);
            await this.storage.set('municipios', response.listMunicipios);
            await this.storage.set('listArchivosSoporte', response.listArchivosSoporte);
            await this.storage.set('listaActividades', listActivity);

            this.listActivitiesCompanySv.setActivities(listActivity);
            this.validateDataListActivities();

            this.showListPendingVisit = false;
            this.loading.dismiss();

            // Paginación de actividades
            if (listActivity.length < this.listActivityTotal) {
              this.listActivitiesCompanySv.progressBarValues$.subscribe(pb => {
                this.progressBar = pb;
              });

              this.listActivitiesCompanySv.listActivityForCompanyForPage(this.listActivityTotal);

              this.listActivitiesCompanySv.activities$.subscribe(async listActivitiesForPage => {
                await this.storage.set('listaActividades', listActivitiesForPage);
                await this.validateDataListActivities();
              });
            } else {
              this.listActivitiesCompanySv.presentToastActivitiesPaginator(
                'Actividades cargadas con éxito.',
                'primary'
              );
            }

          } else {
            await this.whitoutListActivitiesCompanyAlert();
            this.loading.dismiss();
          }
        },
        err => {
          this.loading.dismiss();
          this.showListPendingVisit = false;
        }
      );
    }, 600);
  }

  // -------------------------
  // Loading
  // -------------------------
  async presentLoading() {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    await this.loading.present();
  }

  // -------------------------
  // Validar lista
  // -------------------------
  async validateDataListActivities() {
    const dataListActivities = await this.storage.get('listaActividades');
    this.listActivity = dataListActivities
      ? dataListActivities.filter((a: any) => a.listaActividadesMigradas.length > 0)
      : [];
  }

  // -------------------------
  // Alert sin actividades
  // -------------------------
  async whitoutListActivitiesCompanyAlert() {
    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Aviso',
      message: 'El Usuario no tiene Actividades Migradas.',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
