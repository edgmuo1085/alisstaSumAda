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
  selector: 'app-pending-visits',
  templateUrl: './pending-visits.page.html',
  styleUrls: ['./pending-visits.page.scss'],
})
export class PendingVisitsPage implements OnInit, OnDestroy {
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
  ) {}

  ngOnInit() {
    this.validateDataListActivities();
    this.net.showIPAddress();
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
    for (const actividad of activity.listaActividadesMigradas) {
      actividad.estadoInterno = 'Migradas';
    }
    sessionStorage.setItem('companySelected', JSON.stringify(activity));
  }

  /**
   * Carga las actividades (método principal).
   *
   * NOTA: usamos AppStorageService solo para 'sesion' y
   * mantenemos Ionic Storage para claves grandes/offline.
   */
  async listActivities() {
    await this.presentLoading();

    try {
      // SESIÓN (small) -> Preferences via AppStorageService
      const documentoUsuario = await this.appStorage.get(this.appStorage.KEY_SESSION);
      if (!documentoUsuario) {
        // no hay sesión -> cerrar loader y devolver
        await this.dismissLoading();
        this.showListPendingVisit = false;
        return;
      }

      // Llamada al servicio que trae las actividades
      const sub = this.listActivitiesCompany.listActivityForCompanyPerPage(documentoUsuario)
        .subscribe({
          next: async response => {
            try {
              const listActivity = response.listActivitiesCompany || [];
              this.listActivityTotal = listActivity[0]?.intTotalRegistros ?? listActivity.length;

              // ACTAS GUARDADAS -> estas son OFFLINE: mantener en Ionic Storage
              const actasGuardadas: any[] = (await this.storage.get('actasAsesoriaSinInternet')) || [];
              this.listActivitiesCompany.actasGuardadas = actasGuardadas;

              // Filtrado inicial (servicio)
              this.listActivitiesCompany.listActivitiesFilter(listActivity);

              // Guardar catálogos y listas grandes EN IONIC STORAGE (SQLite)
              await this.storage.set('departamentos', response.listDepartamentos || []);
              await this.storage.set('municipios', response.listMunicipios || []);
              await this.storage.set('listArchivosSoporte', response.listArchivosSoporte || []);

              // Guardar actividades (primer lote) EN IONIC STORAGE
              await this.storage.set('listaActividades', listActivity);
              this.listActivitiesCompany.setActivities(listActivity);

              // Actualizar vista
              await this.validateDataListActivities();
              this.showListPendingVisit = false;

              // Si hay paginación (más registros por cargar)
              if (listActivity.length < this.listActivityTotal) {
                // Observamos progress bar values
                const pbSub = this.listActivitiesCompany.progressBarValues$
                  .subscribe(pb => this.progressBar = pb);
                this.subs.push(pbSub);

                // Solicitar páginas restantes (el servicio llenará activities$)
                this.listActivitiesCompany.listActivityForCompanyForPage(this.listActivityTotal);

                const activitiesSub = this.listActivitiesCompany.activities$
                  .subscribe(async listActivitiesForPage => {
                    // Reescribir lista completa en Storage (lote final)
                    await this.storage.set('listaActividades', listActivitiesForPage || []);
                    await this.validateDataListActivities();
                  });

                this.subs.push(activitiesSub);
              } else {
                // todo cargado
                this.listActivitiesCompany.presentToastActivitiesPaginator('Actividades cargadas con éxito.', 'primary');
              }

            } catch (innerErr) {
              console.error('Error procesando respuesta de actividades:', innerErr);
            } finally {
              await this.dismissLoading();
            }
          },
          error: async err => {
            console.error('Error al traer actividades:', err);
            await this.dismissLoading();
            this.showListPendingVisit = false;
          }
        });

      this.subs.push(sub);

    } catch (err) {
      console.error('listActivities error:', err);
      await this.dismissLoading();
      this.showListPendingVisit = false;
    }
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
      } catch {}
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
