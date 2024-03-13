import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CorreoNotificacionActaApp, actaAsesoria, uploadFile } from '../../../intarfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdvisoryTopicService {
  API_SAVE_ACTA_ASESORIA = environment.API_SAVE_ACTA_ASESORIA;
  API_UPLOAD_FILE_ACTA_ASESORIA = environment.API_UPLOAD_FILE_ACTA_ASESORIA;
  API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP = environment.API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP;
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient) {}

  saveActaAsesoria(actaAses: actaAsesoria): Observable<any> {
    const rq = actaAses;
    console.log(rq);
    return this.http.post(this.API_SAVE_ACTA_ASESORIA, rq);
  }

  uploadFileActaAsesoria(file: uploadFile): Observable<any> {
    const rq = file;
    return this.http.post(this.API_UPLOAD_FILE_ACTA_ASESORIA, rq);
  }

  // Envio correo notificacion
  enviarCorreoNotificacionActaApp(correoNotif: CorreoNotificacionActaApp): Observable<any> {
    const rq = correoNotif;
    console.log(rq);
    return this.http.post(this.API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP, rq);
  }

}
