import { Injectable } from '@angular/core';
import { AlertButton, AlertController, LoadingController } from '@ionic/angular';

type HandlerButton = (value: any) => boolean | void | { [key: string]: any; };

/**
 * Servicio general de alertas.
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private loadingCtlr: LoadingController,
    private alertCtrl: AlertController
  ) { }

  /**
   * Muestra una alerta con opciones de aceptar y cancelar.
   *
   * En caso de que no se envíe ningún manejador para los eventos de aceptación o cancelación,
   * la alerta solo contendrá un botón para aceptar.
   *
   * @param header Título.
   * @param message Mensaje.
   * @param acceptHandler Manejador del evento de aceptación.
   * @param cancelHandler Manejador del evento de cancelación.
   */
  async showAlert(
    header: string,
    message: string,
    acceptHandler?: HandlerButton,
    cancelHandler?: HandlerButton
  ): Promise<HTMLIonAlertElement> {
    const buttons: (string | AlertButton)[] = [];

    if (acceptHandler || cancelHandler) {
      buttons.push({ text: 'Aceptar', role: 'accept', handler: acceptHandler });
      buttons.push({ text: 'Cancelar', role: 'cancel', handler: cancelHandler });
    } else {
      buttons.push({ text: 'Aceptar', role: 'cancel' });
    }

    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header,
      message,
      buttons
    });

    await alert.present();

    return alert;
  }

  /**
   * Oculta la alerta indicada.
   *
   * @param alert Alerta a ocultar.
   */
  async hideAlert(alert: HTMLIonAlertElement): Promise<boolean> {
    return await alert.dismiss();
  }

  /**
   * Muestra alerta de carga.
   */
  async showLoading(): Promise<HTMLIonLoadingElement> {
    const alert = await this.loadingCtlr.create({ message: 'Cargando...', mode: 'ios' });
    await alert.present();

    return alert;
  }

  /**
   * Oculta la alerta de carga indicada.
   *
   * @param element Alerta a ocultar.
   */
  async hideLoading(alert: HTMLIonLoadingElement): Promise<boolean> {
    return await alert.dismiss();
  }

}