import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CacheService } from '../../services/cache/cache.service';
import { VisitSubject } from './visit-history-detail.typings';
import { Browser } from '@capacitor/browser';

/**
 * Componente para la vista de temas de visita.
 */
@Component({
  selector: 'app-visit-subjects',
  templateUrl: './visit-history-detail.page.html',
  styleUrls: ['./visit-history-detail.page.scss'],
})
export class VisitHistoryDetailPageComponent implements OnInit {


  /**
   * Temas de la asesoria.
   */
  subjects: VisitSubject[];



  constructor(
    private alertController: AlertController,
    private router: Router,
    public cacheService: CacheService
  ) { }

  ionViewWillEnter() {
    for (const doc of this.cacheService.infoDocumentosPorActividad) {
      const idActividadDocumentos = doc.idActividad;

      for (const element of this.subjects) {
        if (element.id === idActividadDocumentos) {
          element.cantidadDocumentos = doc.cantidadDocumentosAdjuntos;
        }
      }
    }
  }


  ngOnInit() {
    this.cacheService.limpiarVariablesAsesoria();
    this.updateListAdvisoryTopic();
  }

  /**
   * Método que agrega los valores de cada actividad migrada a cada una de las tarjetas
   */
  updateListAdvisoryTopic() {
    const listActivMigradas = JSON.parse(sessionStorage.companySelected).listaActividadesMigradas;
    this.subjects = listActivMigradas;
    console.log("Lista Act Migradas", listActivMigradas)

  }

  async goToActivitySupport(url: string) {
    try {
      if (url) {
        await Browser.open({ url });
      } else {
        console.warn('URL de recuperación de contraseña no disponible');
        return
      }
    } catch (e) {
      console.error('Error abriendo recuperación de contraseña:', JSON.stringify(e, null, 2));
    }
  }
}
