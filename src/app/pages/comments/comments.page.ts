import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CacheService } from '../../services/cache/cache.service';

/**
 * Componente de la vista de observaciones y recomendaciones.
 */
@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  /**
   * Nombre del tipo de visita actualmente activo.
   */
  subframe: string;

  /**
   * Nombre para visita exitosa.
   */
  readonly SUCCESS_FRAME = 'Exitosa';

  /**
   * Nombre para visita fallida.
   */
  readonly FAIL_FRAME = 'Fallo';

  opcionMenu: string;

  constructor(
    private cacheService: CacheService,
    private router: Router,
    private alertController: AlertController
  ) {
    this.subframe = this.SUCCESS_FRAME;
    this.opcionMenu = this.subframe;
  }

  ngOnInit() {
    const informacionVisita = this.cacheService.getSaveCommentsAdvice();
    if (Object.keys(informacionVisita).length !== 0) {
      if (informacionVisita.type === 'Fallo') {
        this.switchFrame('Fallo');
      }
      if (informacionVisita.type === 'Exitosa') {
        this.switchFrame('Exitosa');
      }
    }
  }

  /**
   * Cambia el frame del resultado de la visita actualmente activo.
   *
   * @param subframe Nombre del frame que va a volverse activo.
   */
  switchFrame(subframe: string): void {
    if (this.cacheService.typeAdvice.type === 'Proyecto') {
      this.notification('Atención', 'El tipo de asesoría seleccionada fue por Proyecto');
      this.subframe = this.SUCCESS_FRAME;
      this.opcionMenu = this.subframe;
    } else {
      this.subframe = subframe;
      this.opcionMenu = this.subframe;
    }
  }

  getInfoComment(infoComment) {
    this.cacheService.saveCommentsAdvice(infoComment);
    const informacionVisita = this.cacheService.getSaveCommentsAdvice();
    if (informacionVisita.redireccionar === true) {
      this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature');
    }
  }

  async notification(titulo, notificacion) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR'],
    });

    alert.onDidDismiss();

    await alert.present();
  }
}
