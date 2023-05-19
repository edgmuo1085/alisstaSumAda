import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuConfiguracionService {

  constructor(private http: HttpClient) { }

  /**
   * Este metodo permite hacer la petición al archivo donde estan las opciones para el menú de
   * la vista de configuración
   */
  getMenuOpts() {
    return this.http.get<any[]>('/assets/data/menuConfiguracion.json');
  }

  /**
   * Este método permite consultar las opciones que existen en el menú principal home.page.html
   */
  getMenuMain() {
    return this.http.get<any[]>('/assets/data/menuPrincipal-prod.json');
  }

  /**
   * Este método permite consultar las opciones que existen en el menú de ejecución de
   * actividades
   */
   getMenuExceActivities() {
     return this.http.get<any[]>('/assets/data/menuExecuteActi.json');
   }

   /**
    * Este método permitre consultar las opciones de ayuda en el menú de ejecución de
    * actividades
    */

   getMenuHelpExceActivities() {
    return this.http.get<any[]>('/assets/data/menuHelpExecuteActi.json');
  }

   /**
    * Este método permite consultar las opciones cuando se selecciona una visita
    */
   getMenuActivitySelected() {
     return this.http.get<any[]>('/assets/data/menuVisitActivity.json');
   }
}
