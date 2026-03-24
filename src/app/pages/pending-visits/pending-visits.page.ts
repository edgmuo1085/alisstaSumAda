import { Component, OnInit, OnDestroy } from '@angular/core';
import { Storage } from '@ionic/storage-angular';;
import { Subscription } from 'rxjs';

import { NetworkService } from '../../services/network/network.service';
import { ProgressBarValues } from 'src/app/intarfaces/interfaces';

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
    private storage: Storage,                   // Ionic Storage para datos grandes    // Preferences / AppStorageService para sesion
    private net: NetworkService,
  ) { }

  async ngOnInit() {
    await this.validateDataListActivities();
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
