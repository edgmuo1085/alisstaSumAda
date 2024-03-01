import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { liberarActividades } from 'src/app/intarfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ActivityListCompanyService {
  // API_LISTACTIVITYCOMPANY = environment.API_LISTACTIVITIESXCOMPANY;
  API_LISTACTIVITYCOMPANY;
  API_LIBERAR_ACTIVIDADES = environment.API_LIBERAR_ACTIVIDADES;
  API_RECOVERY_VERIFICATION_CODE;

  constructor(private http: HttpClient) {}

  // listActivityForCompany(): Observable<any> {
  //   return this.http.get(this.API_LISTACTIVITYCOMPANY);
  // }

  listActivityForCompany(documentoUsuario): Observable<any> {
    this.API_LISTACTIVITYCOMPANY = '';
    this.API_LISTACTIVITYCOMPANY = environment.API_GET_Avtividades_Empresa;
    this.API_LISTACTIVITYCOMPANY = `${this.API_LISTACTIVITYCOMPANY}?pNumeroDocumento=${documentoUsuario}`;
    console.log('Servicio de lista de actividades ->', this.API_LISTACTIVITYCOMPANY);
    return this.http.post(this.API_LISTACTIVITYCOMPANY, null);
  }

  liberarActivities(objLiberarActividad: liberarActividades): Observable<any> {
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
