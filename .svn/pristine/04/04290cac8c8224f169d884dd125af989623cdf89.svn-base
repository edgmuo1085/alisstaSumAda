import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ActivityListCompanyService } from '../../services/activities/activityListCompany/activity-list-company.service';
import { NetworkService } from '../../services/network/network.service';

/**
 * Componente de la vista de visitas pendientes.
 */
@Component({
  selector: 'app-pending-visits',
  templateUrl: './pending-visits.page.html',
  styleUrls: ['./pending-visits.page.scss'],
})
export class PendingVisitsPage implements OnInit {

  listActivity: any[] = [];

  textoBuscar = '';
  moduloBuscar = '';
  loading: any;

  // Para la prueba
  showListPendingVisit = true;

  isConnected = false;

  constructor(private listActivitiesCompany: ActivityListCompanyService,
    private network: Network,
    private storage: Storage,
    private net: NetworkService,
    private loadingCtlr: LoadingController,
    private router: Router) { }

  ngOnInit() {
    this.validateDataListActivities();
    this.net.showIPAddress();
  }

  /**
   * Establece el texto a buscar en la lista
   *
   * @param event texto a buscar
   */
  search(event: any) {
    this.textoBuscar = event.detail.value;
  }

  /**
   * Establece el filtrado por modulo
   *
   * @param event modulo a buscar
   */
  searchModulo(event: any) {
    this.moduloBuscar = event.detail.value;
  }

  companySelected(activity: any) {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < activity.listaActividadesMigradas.length; i++) {
      activity.listaActividadesMigradas[i].estadoInterno = 'Migradas';
    }
    sessionStorage.companySelected = JSON.stringify(activity);

  }

  async listActivities() {
    this.presentLoading();
    const documentoUsuario = await this.storage.get('sesion');

    setTimeout(() => {
      this.listActivitiesCompany.listActivityForCompany(documentoUsuario.idPersona).subscribe(async (response) => {
        console.log('Respuesta de actividade', response );
        
        const listActivity = response.listActivitiesCompany || [];
        const actasGuardadas: any[] = await this.storage.get('actasAsesoriaSinInternet') || [];

        listActivity.forEach((a: any) => {
          a.listaActividadesMigradas = a.listaActividadesMigradas
            .filter((aa: any) => actasGuardadas.find(aaa => aaa.activities.find((aaaa: any) => aaaa.id === aa.id)) === undefined);
        });

        this.storage.set('departamentos', response.listDepartamentos);
        this.storage.set('municipios', response.listMunicipios);
        this.storage.set('listArchivosSoporte', response.listArchivosSoporte);

        // Guardar las actividades en un BD local.
        this.storage.set('listaActividades', listActivity);
        this.validateDataListActivities();
        this.showListPendingVisit = false;
        this.loading.dismiss();
      }, err => {
        this.loading.dismiss();
        this.showListPendingVisit = false;
      });
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

}
