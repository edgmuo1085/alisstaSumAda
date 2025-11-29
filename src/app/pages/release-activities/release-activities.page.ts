import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivityListCompanyService } from '../../services/activities/activityListCompany/activity-list-company.service';
import { LiberarActividades } from '../../intarfaces/interfaces';
import { CacheService } from '../../services/cache/cache.service';
import { NetworkService } from '../../services/network/network.service';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-release-activities',
  templateUrl: './release-activities.page.html',
  styleUrls: ['./release-activities.page.scss'],
})
export class ReleaseActivitiesPage {
  listActivity: any[] = [];
  actividadesSeleccionadas: any[] = [];
  textoBuscar = '';
  lines = 'none';
  loading: HTMLIonLoadingElement | null = null;
  informacionUsuario: any;

  constructor(
    private loadingCtlr: LoadingController,
    private alertController: AlertController,
    private listActivitiesCompany: ActivityListCompanyService,
    private cacheService: CacheService,
    private net: NetworkService,
    private storage: Storage,                 // Ionic Storage para datos grandes
    private appStorage: AppStorageService     // Preferences para 'sesion'
  ) {}

  ionViewWillEnter() {
    this.listActivities();
    this.net.showIPAddress();
  }

  // carga de datos (sesion en AppStorageService; listas grandes en Ionic Storage)
  async listActivities() {
    try {
      // SESION: usar AppStorageService (Preferences)
      this.informacionUsuario = await this.appStorage.get(this.appStorage.KEY_SESSION);

      // LISTA y demás: conservar en Ionic Storage (minúsculas)
      this.listActivity = (await this.storage.get('listaActividades')) || [];

      console.log('Usuario cargado:', this.informacionUsuario);
      console.log('Listado de actividades:', this.listActivity);
    } catch (err) {
      console.error('Error listActivities:', err);
      this.listActivity = [];
    }
  }

  search(event: any) {
    this.textoBuscar = event?.detail?.value ?? '';
  }

  activitySelected(actividadSeleccionada: any) {
    const existeIndex = this.actividadesSeleccionadas.findIndex(item => item.id === actividadSeleccionada.id);
    if (existeIndex !== -1) {
      // quitar la actividad por índice
      this.actividadesSeleccionadas.splice(existeIndex, 1);
    } else {
      // agregar
      this.actividadesSeleccionadas.push(actividadSeleccionada);
    }
  }

  async liberarActividad() {
    await this.presentLoading();

    try {
      const idsSeleccionados = this.actividadesSeleccionadas.map(a => a.id);

      const objLiberar: LiberarActividades = {
        ListaIdsActividades: idsSeleccionados,
        direccionIP: this.cacheService.ipAddress, // volvemos a usar cacheService
        CedulaUsuarioModifica: this.informacionUsuario?.idPersona,
      };

      // llamada al servicio
      const siLiberoActividades = await this.listActivitiesCompany.liberarActivities(objLiberar).toPromise();

      if (siLiberoActividades) {
        this.notification('Atención', 'Se logró liberar la(s) actividad(es) seleccionadas');

        // leer lista desde Ionic Storage (clave: 'listaActividades')
        const listaActividades: any[] = (await this.storage.get('listaActividades')) || [];

        // filtrar las actividades liberadas
        for (const actividad of listaActividades) {
          if (Array.isArray(actividad.listaActividadesMigradas)) {
            actividad.listaActividadesMigradas = actividad.listaActividadesMigradas.filter(
              actMigrada => !idsSeleccionados.includes(actMigrada.id)
            );
          }
        }

        // persistir la lista actualizada en Ionic Storage (minúsculas)
        await this.storage.set('listaActividades', listaActividades);

        // refrescar vista
        await this.listActivities();
        this.actividadesSeleccionadas = [];
      } else {
        this.notification('Error', 'Ocurrió un error al tratar de liberar la(s) actividad(es)');
      }
    } catch (err) {
      console.error('Error liberando actividades:', err);
      this.notification('Error', 'Ocurrió un error al intentar liberar las actividades.');
    } finally {
      await this.dismissLoading();
    }
  }

  async presentLoading() {
    if (this.loading) return;
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (!this.loading) return;
    try {
      await this.loading.dismiss();
    } catch {}
    this.loading = null;
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
}
