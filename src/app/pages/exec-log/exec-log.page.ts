import { Component, OnInit } from '@angular/core';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Observable } from 'rxjs';
import { ResendVerificationCodeComponent } from '../../components/resend-verification-code/resend-verification-code.component';
import { ActivityListCompanyService } from 'src/app/services/activities/activityListCompany/activity-list-company.service';
import { ProgressBarValues } from 'src/app/intarfaces/interfaces';
import { AppStorageService } from 'src/app/app-storage.service';
import { LoadingController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exec-log',
  templateUrl: './exec-log.page.html',
  styleUrls: ['./exec-log.page.scss'],
})
export class ExecLogPage implements OnInit {

  optMenuOptions: Observable<any[]>;

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
    private appStorage: AppStorageService,
  ) { }

  async ngOnInit() {
    this.optMenuOptions = this.menuConfOptions.getMenuExceActivities();
    await this.uploadInfoUser();

    // Suscribirse a los observables del servicio
    this.listActivitiesCompanySv.progressBarValues$.subscribe(pb => {
      this.progressBar = pb;
    });

    this.listActivitiesCompanySv.activities$.subscribe(activities => {
      this.listActivity = activities.filter((a: any) => a.listaActividadesMigradas?.length > 0);
      this.listActivityTotal = activities.length > 0
        ? (activities[0]?.intTotalRegistros ?? activities.length)
        : 0;
    });

    console.log("Progress: ", this.progressBar)
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
      cssClass: 'resend-verification-modal'
    });
    await modal.present();
  }

  // -------------------------
  // Cargar lista de actividades
  // -------------------------
  async listActivities() {
    await this.presentLoading();

    this.progressBar.refreshBtnEnable = true;

    // Usar el nuevo método del servicio que encapsula toda la lógica
    this.listActivitiesCompanySv.loadAllActivities().subscribe({
      next: () => {
        this.showListPendingVisit = false;
        this.loading.dismiss();
      },
      error: () => {
        this.showListPendingVisit = false;
        this.loading.dismiss();
      }
    });
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

}
