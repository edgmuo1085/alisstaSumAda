import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { LiberarActividades, ProgressBarValues } from 'src/app/intarfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ActivityListCompanyService {
  progressBar: ProgressBarValues = {
    visible: false,
    progress: 0,
    records: 0,
    refreshBtnEnable: true
  };

  private activitiesSubject = new BehaviorSubject<any[]>([]);
  private progressBarValues = new BehaviorSubject<ProgressBarValues>(this.progressBar);
  private cantidadRegistrosPorPagina:number = 10;
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

  API_REGISTROS_PAGINA = environment.API_GET_Cantidad_Registros_Por_Pagina;
  API_LISTACTIVITYCOMPANY: string = '';
  API_LIBERAR_ACTIVIDADES = environment.API_LIBERAR_ACTIVIDADES;
  API_RECOVERY_VERIFICATION_CODE;

  constructor(private http: HttpClient,
    private toastCtrl: ToastController,
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

  listActivityForCompany(documentoUsuario): Observable<any> {
    this.API_LISTACTIVITYCOMPANY = '';
    this.API_LISTACTIVITYCOMPANY = environment.API_GET_Avtividades_Empresa;
    this.API_LISTACTIVITYCOMPANY = `${this.API_LISTACTIVITYCOMPANY}?pNumeroDocumento=${documentoUsuario}`;
    console.log('Servicio de lista de actividades ->', this.API_LISTACTIVITYCOMPANY);
    return this.http.post(this.API_LISTACTIVITYCOMPANY, null);
  }

  listActivityForCompanyPerPage(documentoUsuario): Observable<any> {
    this.API_LISTACTIVITYCOMPANY = '';
    this.API_LISTACTIVITYCOMPANY = environment.API_GET_Avtividades_Empresa;
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
      this. progressBar = {
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
      response => {
        // console.log(`Respuesta de la página ${currentPage}:`, response.listActivitiesCompany);
        const currentActivities = this.activitiesSubject.getValue();
        const newActivities = response.listActivitiesCompany;
        this.listActivitiesFilter(newActivities);
        const activities = currentActivities.concat(newActivities)

        this.activitiesSubject.next(activities)
        this.progressBar.visible = true;
        this.progressBar.progress = Number((activities.length / this.progressBar.records).toFixed(1))
        this.progressBar.refreshBtnEnable = true;
        this.progressBarValues.next(this.progressBar);

        console.log('Grupo llamadas...!!: ', url, currentPage + 1, totalPages);
        this.listActivityForCompanyBucle(url, currentPage + 1, totalPages);
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

  listActivitiesFilter(listActivity): any[] {
    console.log("Actas Guardads Filtro: ", this.actasGuardadas);
    return listActivity.forEach((a: any) => {
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
    this.API_RECOVERY_VERIFICATION_CODE = environment.API_RECOVERY_VERIFICATION_CODE;
    // tslint:disable-next-line: max-line-length
    this.API_RECOVERY_VERIFICATION_CODE = `${this.API_RECOVERY_VERIFICATION_CODE}?pUidUsuariosAutorizadosxEmpresa=${pUidUsuariosAutorizadosxEmpresa}&pUidEmpresaSum=${pUidEmpresaSum}`;
    return this.http.post(this.API_RECOVERY_VERIFICATION_CODE, null);
  }
}
