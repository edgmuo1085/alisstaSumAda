import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TalkService {
  constructor(private http: HttpClient) {}

  API_LIST_TEMAS_COMUNICACION = environment.API_LIST_TEMAS_COMUNICACION;

  API_BUSCAR_COMUNICACION = environment.API_BUSCAR_CUMUNICACIONES;

  API_LIST_MENSAJES_CONVERSACION = environment.API_LIST_MENSAJES_CONVERSACION;

  API_CAMBIAR_ESTADO_USUARIO = environment.API_CAMBIAR_ESTADO_USUARIO;

  API_GUARDAR_MENSAJE = environment.API_GUARDAR_MENSAJE;

  API_EDITAR_ELIMINAR_MENSAJE = environment.API_EDITAR_ELIMINAR_MENSAJE;

  talkSelected: any;

  rolesVisualizadosHistoricos: any[] = [];

  changeStateUser(pPKConversacionUsuario: number, pPKConversacion: number, pEstado: string, pIP: string, pPKUidUsuario: number) {
    let url = '';
    // tslint:disable-next-line: max-line-length
    url = `${this.API_CAMBIAR_ESTADO_USUARIO}?pPKConversacionUsuario=${pPKConversacionUsuario}&pPKConversacion=${pPKConversacion}&pEstado=${pEstado}&pIP=${pIP}&pPKUidUsuario=${pPKUidUsuario}`;
    return this.http.post<any>(url, null);
  }

  getTemasComunicacion() {
    return this.http.post<any>(this.API_LIST_TEMAS_COMUNICACION, null);
  }

  // tslint:disable-next-line: max-line-length
  searchComunicacion(
    pRazonSocialNit?: string,
    tema?: string,
    fechaInicial?: string,
    fechaFinal?: string,
    usuario?: string,
    idRol?: string
  ) {
    let url = '';
    // tslint:disable-next-line: max-line-length
    url = `${this.API_BUSCAR_COMUNICACION}?pRazonSocialNit=${pRazonSocialNit}&pPKTema=${tema}&pFechaInicio=${fechaInicial}&pFechaFin=${fechaFinal}&pUidUsuario=${usuario}&pUidRol=${idRol}`;
    return this.http.post<any>(url, null);
  }

  getMensajes(pPKConversacion: number, pUidUsuario: number) {
    let url = '';
    url = `${this.API_LIST_MENSAJES_CONVERSACION}?pPKConversacion=${pPKConversacion}&pUidUsuario=${pUidUsuario}`;
    return this.http.post<any>(url, null);
  }

  saveMessageConversation(mensaje) {
    return this.http.post<any>(this.API_GUARDAR_MENSAJE, mensaje);
  }

  deleteMessage(mensaje) {
    return this.http.post<any>(this.API_EDITAR_ELIMINAR_MENSAJE, mensaje);
  }

  saveSelectedCoversation(talk) {
    this.talkSelected = talk;
  }

  getSelectedConversation() {
    return this.talkSelected;
  }

  saveRolesHistoricos(rolesHistoricos) {
    this.rolesVisualizadosHistoricos = rolesHistoricos;
  }

  getRolesHistoricos() {
    return this.rolesVisualizadosHistoricos;
  }
}
