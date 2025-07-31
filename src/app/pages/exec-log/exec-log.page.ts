import { Component, OnInit } from '@angular/core';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { ResendVerificationCodeComponent } from '../../components/resend-verification-code/resend-verification-code.component';
import { progressBarValues } from 'src/app/intarfaces/interfaces';
import { ActivityListCompanyService } from 'src/app/services/activities/activityListCompany/activity-list-company.service';

/**
 * Componente para la vista de registro de ejecución.
 */
@Component({
  selector: 'app-exec-log',
  templateUrl: './exec-log.page.html',
  styleUrls: ['./exec-log.page.scss'],
})
export class ExecLogPage implements OnInit {
  /**
   * Array de opciones del menú de ejecución de actividades
   */
  optMenuOptions: Observable<any[]>;

  /**
   * Array de opciones del menú de ayuda de ejecución de actividades
   */
  optMenuHelpOptions: Observable<any[]>;

  /**
   * Variable que contiene el nombre del usuario ingresado.
   */
  nameUserRegister: string;

  listActivity: any[] = [];
  listActivityTotal: number = 0;
  showListPendingVisit = true;
  loading: any;
  progressBar: progressBarValues | any = {
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
    private storage: Storage,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.optMenuOptions = this.menuConfOptions.getMenuExceActivities();
    this.optMenuHelpOptions = this.menuConfOptions.getMenuHelpExceActivities();
    this.uploadInfoUser();
  }

  optionSelectedMenu(itemSelected) {
    switch (itemSelected.title) {
      case 'Visitas pendientes':
        break;
      case 'Tareas por enviar':
        break;
      case 'Liberar actividades':
        break;
      case 'Recordar código':
        this.showResendVerificationCode();
        break;
      case 'Ayuda PDF':
        break;
      case 'Instructivo':
        break;
      default:
        break;
    }
  }

  async uploadInfoUser() {
    const nameUser = await this.storage.get('sesion');
    const nombreCompleto = nameUser.nombre1 + ' ' + nameUser.apellido1;
    this.nameUserRegister = nombreCompleto;
  }

  async showResendVerificationCode() {
    const modal = await this.modalCtrl.create({
      component: ResendVerificationCodeComponent,
    });

    return await modal.present();
  }

  async listActivities() {
    this.presentLoading();
    const documentoUsuario = await this.storage.get('sesion');
    setTimeout(() => {
      //TODO: evaluar purgar memoria de array de la lista
      this.listActivitiesCompanySv.listActivityForCompanyPerPage(documentoUsuario).subscribe(
        async response => {
          console.log('Respuesta de actividade', response);
          if(response.listActivitiesCompany.length > 0){
          const listActivityTotal = response.listActivitiesCompany[0].intTotalRegistros;
          this.listActivityTotal = listActivityTotal;
          const listActivity = response.listActivitiesCompany || [];
          const actasGuardadas: any[] = (await this.storage.get('actasAsesoriaSinInternet')) || [];
          console.log('Actas Guardadas Metodo: ', actasGuardadas);
          this.listActivitiesCompanySv.actasGuardadas = actasGuardadas;
          this.listActivitiesCompanySv.listActivitiesFilter(listActivity);
          this.storage.set('departamentos', response.listDepartamentos);
          this.storage.set('municipios', response.listMunicipios);
          this.storage.set('listArchivosSoporte', response.listArchivosSoporte);
          // Guardar las actividades en un BD local.
          this.storage.set('listaActividades', listActivity);
          this.listActivitiesCompanySv.setActivities(listActivity);
          this.validateDataListActivities();
          this.showListPendingVisit = false;
          this.loading.dismiss();
          if (listActivity.length < listActivityTotal) {
            this.listActivitiesCompanySv.progressBarValues$.subscribe(progressBarValues => {
              (this.progressBar = progressBarValues), console.log('Progressss...!!: ', progressBarValues);
            });
            this.listActivitiesCompanySv.listActivityForCompanyForPage(listActivityTotal);
            this.listActivitiesCompanySv.activities$.subscribe(async listActivitiesForPage => {
              this.storage.set('listaActividades', listActivitiesForPage);
              await this.storage.get('listaActividades');
              this.validateDataListActivities();
            })}else{
            this.listActivitiesCompanySv.presentToastActivitiesPaginator("Actividades cargadas con Exito.", "primary")
          }
        }else{
          console.log("El usuario no tiene visitas pendientes");
          this.whitoutListActivitiesCompanyAlert()
          this.loading.dismiss();
        }
          
        },
        err => {
          this.loading.dismiss();
          this.showListPendingVisit = false;
        }
      );
    }, 2000);
  }
  async presentLoading() {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    return this.loading.present();
  }
  async validateDataListActivities() {
    const dataListActivities = await this.storage.get('listaActividades');
    if (dataListActivities) {
      this.listActivity = dataListActivities.filter((a: any) => a.listaActividadesMigradas.length > 0);
    } else {
      this.listActivity = [];
    }
  }

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
