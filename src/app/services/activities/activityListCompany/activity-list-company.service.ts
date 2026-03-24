import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, firstValueFrom } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { LiberarActividades, ProgressBarValues } from 'src/app/intarfaces/interfaces';
import { ApiUrlService } from '../../apiUrl/api-url.service';
import { AppStorageService } from 'src/app/app-storage.service';

@Injectable({
  providedIn: 'root',
})
export class ActivityListCompanyService {
  progressBar: ProgressBarValues = {
    visible: false,
    progress: 0,
    records: 0,
    refreshBtnEnable: false
  };

  private activitiesSubject = new BehaviorSubject<any[]>([]);
  private progressBarValues = new BehaviorSubject<ProgressBarValues>(this.progressBar);
  private cantidadRegistrosPorPagina: number = 10;
  public activities$ = this.activitiesSubject.asObservable();
  public progressBarValues$ = this.progressBarValues.asObservable();
  public actasGuardadas = [];

  async presentToastActivitiesPaginator(message: string, color: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 5000,
      position: 'bottom',
      color,
      mode: 'ios',
    });
    toast.present();
  }



  setActivities(newActivities: any[]) {
    console.log("Seteo: ", newActivities)
    this.activitiesSubject.next(newActivities);
  }

  API_REGISTROS_PAGINA = this.apiUrl.API_GET_Cantidad_Registros_Por_Pagina;
  API_LISTACTIVITYCOMPANY: string = '';
  API_LIBERAR_ACTIVIDADES = this.apiUrl.API_LIBERAR_ACTIVIDADES;
  API_RECOVERY_VERIFICATION_CODE;

  constructor(
    private http: HttpClient,
    private toastCtrl: ToastController,
    private apiUrl: ApiUrlService,
    private storage: Storage,
    private appStorage: AppStorageService
  ) {
    this.getRecordsForPage()
  }

  async getRecordsForPage(): Promise<void> {

    await this.http.post<any>(this.API_REGISTROS_PAGINA, {}).subscribe(
      (response) => {
        this.cantidadRegistrosPorPagina = response.intCantidadRegistrosPorPagina;
        console.log("Cantidaddd...!!!", this.cantidadRegistrosPorPagina)
      },
      (error) => {
        console.error('Error en la consulta:', error);
      }
    );
  }

  // listActivityForCompany(documentoUsuario): Observable<any> {
  //   this.API_LISTACTIVITYCOMPANY = '';
  //   this.API_LISTACTIVITYCOMPANY = this.apiUrl.API_GET_Avtividades_Empresa;
  //   this.API_LISTACTIVITYCOMPANY = `${this.API_LISTACTIVITYCOMPANY}?pNumeroDocumento=${documentoUsuario}`;
  //   console.log('Servicio de lista de actividades ->', this.API_LISTACTIVITYCOMPANY);
  //   return this.http.post(this.API_LISTACTIVITYCOMPANY, null);
  // }

  listActivityForCompanyPerPage(documentoUsuario): Observable<any> {
    this.API_LISTACTIVITYCOMPANY = '';
    this.API_LISTACTIVITYCOMPANY = this.apiUrl.API_GET_Avtividades_Empresa;
    const { idPersona, tipoDocProveedor, idProveedor } = documentoUsuario
    const params: string = `?pNumeroDocumento=${idPersona}&tipoDocProveedor=${tipoDocProveedor}&idProveedor=${idProveedor}&intCantReg=${this.cantidadRegistrosPorPagina}`
    this.API_LISTACTIVITYCOMPANY = `${this.API_LISTACTIVITYCOMPANY}${params}`
    console.log('Servicio de lista de actividades ->', this.API_LISTACTIVITYCOMPANY);
    const url: string = `${this.API_LISTACTIVITYCOMPANY}&numPag=${1}`
    return this.http.post(url, null);
  }

  listActivityForCompanyForPage(listActivityTotal) {

    this.presentToastActivitiesPaginator("Espera mientras se descargan las Actividades.", "primary")
    this.progressBar.visible = true;
    this.progressBar.records = listActivityTotal;
    this.progressBarValues.next(this.progressBar);

    let totalPages: number = listActivityTotal % this.cantidadRegistrosPorPagina > 0
      ? Math.floor(listActivityTotal / this.cantidadRegistrosPorPagina) + 1
      : Math.floor(listActivityTotal / this.cantidadRegistrosPorPagina)
    // let totalPages: number = Math.floor(listActivityTotal / activitiesForPage) + 1; //cuadrar cuando no hay residuo
    let currentPage: number = 2;

    this.listActivityForCompanyBucle(this.API_LISTACTIVITYCOMPANY, currentPage, totalPages);

    console.log('Servicio de lista de actividades buble ->', listActivityTotal);
    console.log('Total Paginas numero', totalPages);

  }

  listActivityForCompanyBucle(url: string, currentPage: number, totalPages: number) {

    if (currentPage > totalPages) {
      console.log('Todas las páginas han sido procesadas');
      this.progressBar = {
        visible: false,
        progress: 0,
        records: 0,
        refreshBtnEnable: false
      };

      setTimeout(() => {
        this.progressBarValues.next(this.progressBar);
      }, 2000);
      this.presentToastActivitiesPaginator("Actividades cargadas con Exito.", "primary")
      return;
    }

    this.getListActivitiesForPage(url, currentPage).subscribe(
      async response => {
        try {
          // console.log(`Respuesta de la página ${currentPage}:`, response.listActivitiesCompany);
          const currentActivities = this.activitiesSubject.getValue();
          const newActivities = response.listActivitiesCompany;
          this.listActivitiesFilter(newActivities);
          const activities = currentActivities.concat(newActivities)

          // Guardar actividades acumuladas en storage
          await this.storage.set('listaActividades', activities);

          this.activitiesSubject.next(activities)
          this.progressBar.visible = true;
          this.progressBar.progress = Number((activities.length / this.progressBar.records).toFixed(1))
          this.progressBar.refreshBtnEnable = true;
          this.progressBarValues.next(this.progressBar);

          console.log('Grupo llamadas...!!: ', url, currentPage + 1, totalPages);
          this.listActivityForCompanyBucle(url, currentPage + 1, totalPages);
        } catch (error) {
          console.error(`Error procesando página ${currentPage}:`, error);
        }
      },
      error => {
        console.error(`Error en la página ${currentPage}:`, error);
        this.progressBar.visible = false;
        this.progressBar.refreshBtnEnable = false;
        this.progressBarValues.next(this.progressBar);
        this.presentToastActivitiesPaginator("Error al cargar las actividades, intentalo nuevamente por favor.", "danger")
      },
      () => {
        console.log(`Llamada a la página ${currentPage} completada`);
      }
    )
  }
  getListActivitiesForPage(url: string, page: number): Observable<any> {
    url = `${url}&numPag=${page}`
    console.log("Current PAge: ", url)
    return this.http.post(url, {}); // Llamado POST a la API
  }

  listActivitiesFilter(listActivity): void {
    console.log("Actas Guardads Filtro: ", this.actasGuardadas);
    listActivity.forEach((a: any) => {
      a.listaActividadesMigradas = a.listaActividadesMigradas.filter(
        (aa: any) => this.actasGuardadas.find(aaa => aaa.activities.find((aaaa: any) => aaaa.id === aa.id)) === undefined
      );
    });
  }

  liberarActivities(objLiberarActividad: LiberarActividades): Observable<any> {
    console.log("En el Servicio: ", objLiberarActividad)
    const rq = objLiberarActividad;
    return this.http.post(this.API_LIBERAR_ACTIVIDADES, rq);
  }

  recordarCodigoVerificacion(pUidUsuariosAutorizadosxEmpresa: number, pUidEmpresaSum: number): Observable<any> {
    this.API_RECOVERY_VERIFICATION_CODE = '';
    this.API_RECOVERY_VERIFICATION_CODE = this.apiUrl.API_RECOVERY_VERIFICATION_CODE;
    // tslint:disable-next-line: max-line-length
    this.API_RECOVERY_VERIFICATION_CODE = `${this.API_RECOVERY_VERIFICATION_CODE}?pUidUsuariosAutorizadosxEmpresa=${pUidUsuariosAutorizadosxEmpresa}&pUidEmpresaSum=${pUidEmpresaSum}`;
    return this.http.post(this.API_RECOVERY_VERIFICATION_CODE, null);
  }

  /**
   * Método principal que encapsula toda la lógica de carga de actividades.
   * Obtiene la sesión del usuario, carga actas guardadas, obtiene la primera página,
   * guarda datos auxiliares en storage y gestiona la paginación si es necesaria.
   * Emite progreso a través de progressBarValues$ y actividades completas a través de activities$.
   * @returns Observable que emite cuando la carga inicial está completa
   */
  loadAllActivities(): Observable<void> {
    return new Observable(observer => {
      this.loadAllActivitiesInternal().then(
        () => {
          observer.next(undefined);
          observer.complete();
        },
        error => {
          observer.error(error);
        }
      );
    });
  }

  /**
   * Implementación interna asíncrona de loadAllActivities
   */
  private async loadAllActivitiesInternal(): Promise<void> {
    try {
      // 1. Obtener sesión del usuario
      const userSession = await this.appStorage.get(this.appStorage.KEY_SESSION);
      if (!userSession) {
        throw new Error('No hay sesión de usuario');
      }

      // 2. Cargar actas guardadas desde storage
      this.actasGuardadas = (await this.storage.get('actasAsesoriaSinInternet')) || [];

      // 3. Obtener primera página de actividades
      const firstPageResponse = await firstValueFrom(this.listActivityForCompanyPerPage(userSession));

      if (!firstPageResponse.listActivitiesCompany || firstPageResponse.listActivitiesCompany.length === 0) {
        // No hay actividades
        this.presentToastActivitiesPaginator('El Usuario no tiene Actividades Migradas.', 'primary');
        return;
      }

      const listActivity = firstPageResponse.listActivitiesCompany || [];
      const listActivityTotal = listActivity[0]?.intTotalRegistros ?? listActivity.length;

      // 4. Aplicar filtro inicial
      this.listActivitiesFilter(listActivity);

      // 5. Guardar datos auxiliares en storage
      await this.storage.set('departamentos', firstPageResponse.listDepartamentos || []);
      await this.storage.set('municipios', firstPageResponse.listMunicipios || []);
      await this.storage.set('listArchivosSoporte', firstPageResponse.listArchivosSoporte || []);

      // 6. Guardar actividades iniciales y emitir
      await this.storage.set('listaActividades', listActivity);
      this.setActivities(listActivity);

      // 7. Iniciar paginación si es necesario
      if (listActivity.length < listActivityTotal) {
        this.listActivityForCompanyForPage(listActivityTotal);
      } else {
        this.presentToastActivitiesPaginator('Actividades cargadas con éxito.', 'primary');
      }

    } catch (error) {
      console.error('Error en loadAllActivities:', error);
      this.presentToastActivitiesPaginator('Error al cargar las actividades, inténtalo nuevamente por favor.', 'danger');
      throw error;
    }
  }
}
