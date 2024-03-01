import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { responsableEvento, RegistroAsistenteEvento } from '../../intarfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // API_USERREGISTREMODEL = environment.API_GETUSERREGISTEREVENT;
  // API_CREATEEVENT = environment.API_CREATE_EVENT;

  API_SEARCH_BRANCH_OFFICES_FOR_EVENT = environment.API_GET_BRANCH_OFFICE_EVENT;
  API_SEARCH_MUNICIPY_BRANCH_OFFICE_FOR_EVENT = environment.API_GET_MUNICIPY_BRANCH_OFFICE_EVENT;
  API_SEARCH_EVENT_FOR_MUNICIPY = environment.API_GET_EVENT_FOR_MUNICIPY;
  API_RESPONSIBLE_EVENT = environment.API_POST_CREATE_RESPONSIBLE_EVENT;
  API_REGISTER_RESPONSIBLE_QR = environment.API_POST_REGISTER_RESPONSIBLE_EVENT_QR;
  API_REGISTER_RESPONSIBLE_MANUAL = environment.API_POST_REGISTER_RESPONSIBLE_EVENT_MANUAL;
  API_SEARCH_RESPONSIBLE_MANUAL_EVENT = environment.API_GET_SEARCH_RESPONSIBLE_MANUAL_EVENT;
  API_DOCUMENTS_TYPE = environment.API_GET_DOCUMENTS_TYPE;

  constructor(private http: HttpClient) {}

  /**
   * Metodo que realiza la petición para obtener las sucursales segun la fecha del
   * sistema, esto en el módulo de eventos positiva.
   */
  getBranchOfficeEvent() {
    return this.http.get<any>(this.API_SEARCH_BRANCH_OFFICES_FOR_EVENT);
  }

  /**
   * Metodo que realiza la petición para obtener los municipios acorde a la sucursal seleccionada la cual llega por parametro
   * esto en el módulo de eventos positiva.
   */
  getMunicipyBrachOffice(idBranchOffice: any) {
    const urlGetMunicipyBranchOffice = `${this.API_SEARCH_MUNICIPY_BRANCH_OFFICE_FOR_EVENT}?Fk_Id_Sucursal=${idBranchOffice}`;
    return this.http.get<any>(urlGetMunicipyBranchOffice);
  }

  /**
   * Método que realiza la petición para obtener los eventos segun el municipio seleccionado
   */

  getEventForMunicipy(idMunicipy: any) {
    const urlEventForMunicipy = `${this.API_SEARCH_EVENT_FOR_MUNICIPY}?FK_Id_Municipio=${idMunicipy}`;
    return this.http.get<any>(urlEventForMunicipy);
  }

  /**
   * Este método consulta los diferentes documentos que puede tener un usuario, (CC, NIT, CE, etc)
   */
  getDocumentType() {
    return this.http.get<any>(this.API_DOCUMENTS_TYPE);
  }

  /**
   * Este metodo se encarga de guardar el responsable del evento.
   */
  createEventResponsible(responsibleEvent: responsableEvento) {
    return this.http.post<responsableEvento>(this.API_RESPONSIBLE_EVENT, responsibleEvent);
  }

  /**
   * ESte metodo permite guardar el registro del invitado de eventos positiva cuando la opción es por código QR
   */
  registerResponsibleQR(resposibleEventQR: RegistroAsistenteEvento) {
    return this.http.post<RegistroAsistenteEvento>(this.API_REGISTER_RESPONSIBLE_QR, resposibleEventQR);
  }

  /**
   * Este metodo permite guardar el registro del invitado de eventos positiva cuando la opción es por código Manual.
   */
  registerResponsibleManual(responsibleEventManual: RegistroAsistenteEvento) {
    return this.http.post<RegistroAsistenteEvento>(this.API_REGISTER_RESPONSIBLE_MANUAL, responsibleEventManual);
  }

  /**
   * parametros:
   * - documentoAsistente
   * - idEvento
   * Este metodo permite consultar la información del usuario el cual sera registrado manualmente,
   * recive dos parametros para dicha consulta.
   */
  getSearchResponsibleEventManual(documentoAsistente: string, idEvento: number) {
    const urlSearchResponsibleManualEvent = `${this.API_SEARCH_RESPONSIBLE_MANUAL_EVENT}?NumeroIdentificacionEmpleado=${documentoAsistente}&Fk_Id_Evento=${idEvento}`;
    return this.http.get(urlSearchResponsibleManualEvent);
  }
}
