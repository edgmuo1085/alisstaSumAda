import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';;
import { Subscription } from 'rxjs';

import { ActivityListCompanyService } from '../../services/activities/activityListCompany/activity-list-company.service';
import { NetworkService } from '../../services/network/network.service';
import { ProgressBarValues } from 'src/app/intarfaces/interfaces';
import { AppStorageService } from 'src/app/app-storage.service'; // path según tu proyecto

/**
 * Componente de la vista de visitas pendientes.
 */
@Component({
  selector: 'app-visits-history',
  templateUrl: './visits-history.page.html',
  styleUrls: ['.//visits-history.page.scss'],
})
export class VisitsHistoryPageComponent implements OnInit, OnDestroy {
  listActivity: any[] = [];
  listActivityTotal = 0;
  progressBar: ProgressBarValues = {
    visible: false,
    progress: 0,
    records: 0,
    refreshBtnEnable: false,
  };

  textoBuscar = '';
  moduloBuscar = '';
  loading: HTMLIonLoadingElement | null = null;

  // Para la prueba
  showListPendingVisit = true;

  isConnected = false;

  private subs: Subscription[] = [];

  constructor(
    private listActivitiesCompany: ActivityListCompanyService,
    private storage: Storage,                   // Ionic Storage para datos grandes
    private appStorage: AppStorageService,      // Preferences / AppStorageService para sesion
    private net: NetworkService,
    private loadingCtlr: LoadingController,
    private router: Router
  ) { }

  async ngOnInit() {
    await this.validateDataListActivities();
    this.net.showIPAddress();

    // Suscribirse a los observables del servicio
    const pbSub = this.listActivitiesCompany.progressBarValues$
      .subscribe(pb => this.progressBar = pb);
    this.subs.push(pbSub);

    const activitiesSub = this.listActivitiesCompany.activities$
      .subscribe(activities => {
        this.listActivity = activities.filter((a: any) => (a.listaActividadesMigradas?.length ?? 0) > 0);
        this.listActivityTotal = activities.length > 0
          ? (activities[0]?.intTotalRegistros ?? activities.length)
          : 0;
      });
    this.subs.push(activitiesSub);
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }

  /**
   * Establece el texto a buscar en la lista
   */
  search(event: any) {
    this.textoBuscar = event?.detail?.value ?? '';
  }

  /**
   * Establece el filtrado por modulo
   */
  searchModulo(event: any) {
    this.moduloBuscar = event?.detail?.value ?? '';
  }

  companySelected(activity: any) {
    console.log("Actividad..!!: ", activity)
    for (const actividad of activity.listaActividadesMigradas) {
      actividad.estadoInterno = 'Migradas';
    }
    console.log("Actividad 2 ..!!: ", activity)
    sessionStorage.setItem('companySelected', JSON.stringify(activity));
  }

  /**
   * Carga las actividades (método principal).
   * Usa el nuevo método del servicio que encapsula toda la lógica.
   */
  async listActivities() {
    await this.presentLoading();

    // Usar el nuevo método del servicio que encapsula toda la lógica
    const sub = this.listActivitiesCompany.loadAllActivities().subscribe({
      next: () => {
        this.showListPendingVisit = false;
        this.dismissLoading();
      },
      error: () => {
        this.showListPendingVisit = false;
        this.dismissLoading();
      }
    });

    this.subs.push(sub);
  }

  async presentLoading() {
    if (this.loading) return; // ya mostrado
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      try {
        await this.loading.dismiss();
      } catch { }
      this.loading = null;
    }
  }

  /**
   * Valida/lee la lista de actividades desde Ionic Storage (clave grande)
   */
  async validateDataListActivities() {
    try {
      const dataListActivities: any[] = await this.storage.get('listaActividades');
      if (Array.isArray(dataListActivities)) {
        this.listActivity = dataListActivities.filter((a: any) => (a.listaActividadesMigradas?.length ?? 0) > 0);
      } else {
        this.listActivity = [];
      }
    } catch (err) {
      console.error('Error leyendo listaActividades desde Storage:', err);
      this.listActivity = [];
    }
  }


}
