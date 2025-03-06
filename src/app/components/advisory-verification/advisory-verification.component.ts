import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CacheService } from '../../services/cache/cache.service';

@Component({
  selector: 'app-advisory-verification',
  templateUrl: './advisory-verification.component.html',
  styleUrls: ['./advisory-verification.component.scss'],
})
export class AdvisoryVerificationComponent implements OnInit {
  /**
   * Este componente es el que arma toda la información cuando se le da clic en ver el acta
   * el boton ver acta esta en la ruta pages/survey-and-signature/signature-qr ó signature-without-qr.
   */

  verification: any;

  constructor(
    private modalCtrl: ModalController,
    private cacheService: CacheService
  ) {}

  ngOnInit() {
    this.getInfoAdvisory();
  }

  /**
   * Este método permite obtener toda la información que ingresaron en el acta gestionada
   */
  getInfoAdvisory() {
    this.verification = this.cacheService.getAllInfoToAdvisory();
  }

  /**
   * Cierra la modal de ver el acta.
   */
  regresar() {
    this.modalCtrl.dismiss();
  }
}
