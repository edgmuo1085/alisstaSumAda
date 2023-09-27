import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivityListCompanyService } from '../../services/activities/activityListCompany/activity-list-company.service';
import { liberarActividades } from '../../intarfaces/interfaces';
import { CacheService } from '../../services/cache/cache.service';
import { NetworkService } from '../../services/network/network.service';

@Component({
  selector: 'app-release-activities',
  templateUrl: './release-activities.page.html',
  styleUrls: ['./release-activities.page.scss'],
})
export class ReleaseActivitiesPage implements OnInit {
  response: any[] = [
    {
      numeroDocumento: '123456',
      name: 'Coca cola',
      listaActividades: [
        {
          id: 1,
          codigo: 'Codigo 1',
        },
        {
          id: 2,
          codigo: 'Codigo 2',
        },
      ],
    },
    {
      numeroDocumento: '789012',
      name: 'ADA',
      listaActividades: [
        {
          id: 3,
          codigo: 'Codigo 3',
        },
      ],
    },
  ];

  listActivity: any[] = [];

  textoBuscar: string;

  lines: string;

  actividadesSeleccionadas: any[] = [];

  isSelectecActivity = false;

  loading: any;

  informacionUsuario: any;

  constructor(
    private loadingCtlr: LoadingController,
    private cacheService: CacheService,
    private alertController: AlertController,
    private listActivitiesCompany: ActivityListCompanyService,
    private net: NetworkService,
    private storage: Storage
  ) {
    this.lines = 'none';
  }

  ionViewWillEnter() {
    this.listActivities();
    this.net.showIPAddress();
  }

  ngOnInit() {}

  async listActivities() {
    this.informacionUsuario = await this.storage.get('sesion');
    this.presentLoading();
    const actividades = await this.listActivitiesCompany.listActivityForCompany(this.informacionUsuario.idPersona).toPromise();
    this.listActivity = actividades.listActivitiesCompany;
    this.loading.dismiss();
  }

  search(event) {
    this.textoBuscar = event.detail.value;
  }

  activitySelected(actividadSeleccionada) {
    const idSelected = actividadSeleccionada.id;
    const existe = this.actividadesSeleccionadas.find(item => item.id === idSelected);
    if (existe) {
      this.actividadesSeleccionadas.forEach(element => {
        const item = element;
        if (item === existe) {
          this.actividadesSeleccionadas.splice(existe, 1);
        }
      });
    } else {
      this.actividadesSeleccionadas.push(actividadSeleccionada);
    }
  }

  async liberarActividad() {
    this.presentLoading();
    const idActividadesSeleccionadas = [];
    this.actividadesSeleccionadas.forEach(element => {
      idActividadesSeleccionadas.push(element.id);
    });
    const objLiberar: liberarActividades = {
      ListaIdsActividades: idActividadesSeleccionadas,
      direccionIP: this.cacheService.ipAddress,
      CedulaUsuarioModifica: this.informacionUsuario.idPersona,
    };
    const siLiberoActividades = await this.listActivitiesCompany.liberarActivities(objLiberar).toPromise();
    if (siLiberoActividades) {
      this.notification('Atención', 'Se logró liberar la(s) actividad(es) seleccionadas');
      this.listActivities();
    } else {
      this.notification('Error', 'Ocurrio un error al tratar de liberar la actividad');
    }
    this.loading.dismiss();
  }

  async presentLoading() {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    return this.loading.present();
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
}
