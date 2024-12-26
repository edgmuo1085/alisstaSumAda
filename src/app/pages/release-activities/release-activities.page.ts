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
    this.listActivity = await this.storage.get('listaActividades');
    console.log("UsuarioStorageado: ", this.informacionUsuario)
    // this.presentLoading();
    // const actividades = await this.listActivitiesCompany.listActivityForCompany(this.informacionUsuario.idPersona).toPromise();
    // this.listActivity = actividades.listActivitiesCompany;
    console.log("LIstado de Actividades 2.0: ", this.listActivity);
    // this.loading.dismiss();
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
    // Mostrar el indicador de carga
    this.presentLoading();
  
    // Obtener los IDs de las actividades seleccionadas
    const idActividadesSeleccionadas = this.actividadesSeleccionadas.map(element => element.id);
  
    // Crear el objeto para enviar al servidor
    const objLiberar: liberarActividades = {
      ListaIdsActividades: idActividadesSeleccionadas,
      direccionIP: this.cacheService.ipAddress,
      CedulaUsuarioModifica: this.informacionUsuario.idPersona,
    };
  
    // Llamada al servicio para liberar las actividades
    const siLiberoActividades = await this.listActivitiesCompany.liberarActivities(objLiberar).toPromise();
  
    if (siLiberoActividades) {
      // Notificar éxito
      this.notification('Atención', 'Se logró liberar la(s) actividad(es) seleccionadas');
  
      // Obtener la lista de actividades del storage
      const listaActividades = await this.storage.get('listaActividades') || [];
  
      // Recorrer cada elemento de la lista y filtrar las actividades migradas
      listaActividades.forEach(actividad => {
        if (actividad.listaActividadesMigradas) {
          actividad.listaActividadesMigradas = actividad.listaActividadesMigradas.filter(
            actMigrada => !idActividadesSeleccionadas.includes(actMigrada.id)
          );
        }
      });
  
      // Guardar nuevamente en el storage la lista actualizada
      await this.storage.set('listaActividades', listaActividades);
  
      // Lógica adicional (si es necesario refrescar la lista visible)
      this.listActivities();
    } else {
      // Notificar error en la liberación
      this.notification('Error', 'Ocurrió un error al tratar de liberar la(s) actividad(es)');
    }
  
    // Cerrar el indicador de carga
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
