import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { actaAsesoria, uploadFile } from '../../../intarfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AdvisoryTopicService {
  API_SAVE_ACTA_ASESORIA = environment.API_SAVE_ACTA_ASESORIA;
  API_UPLOAD_FILE_ACTA_ASESORIA = environment.API_UPLOAD_FILE_ACTA_ASESORIA;
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
}
