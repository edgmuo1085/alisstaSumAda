import { Injectable } from '@angular/core';

import {  HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { recommendationDetail, recommendationAT } from 'src/app/intarfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecommendationATService {

  API_LIST_RECOMMENDATION_AT = environment.API_LIST_RECOMMENDATION_AT;
  API_INFO_RECOMMENDATION_AT = environment.API_INFO_RECOMMENDATION_AT;
  API_SAVE_RECOMMENDATION_DETAIL_AT = environment.API_SAVE_RECOMMENDATION_DETAIL_AT;
  API_SAVE_RECOMMENDATION_AT = environment.API_SAVE_RECOMMENDATION_AT;

  constructor( private http: HttpClient ) { }

  /**
   * Listar las recomendaciones de AT
   */
  getListRecommendationAT(idProveedor) {
    const rq = {
      docEmpresa: idProveedor
    };
    return this.http.post<any>(this.API_LIST_RECOMMENDATION_AT, rq);
  }

  /**
   * Cargar la información al momento de seleccionar una opción de la lista de recomendaciones AT
   */
  getInfoRecommendationAT(idRecommendationSelect) {
    const rq = {
      idSiniestro: idRecommendationSelect
    };
    return this.http.post<any>(this.API_INFO_RECOMMENDATION_AT, rq);
  }

  /**
   * Guardar el detalle de la recomendación AT seleccionada
   */
  saveRecommendationSelected(recommendationSelected: recommendationDetail) {
    return this.http.post<any>(this.API_SAVE_RECOMMENDATION_DETAIL_AT, recommendationSelected);
  }


  saveRecommendationAT( recommendation: recommendationAT ) {
    return this.http.post<any>(this.API_SAVE_RECOMMENDATION_AT, recommendation);
  }

}
