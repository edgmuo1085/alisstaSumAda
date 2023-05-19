import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { RegistroAsistenteEvento } from '../../../intarfaces/interfaces';
import { CacheService } from '../../../services/cache/cache.service';
import { EventService } from '../../../services/event/event.service';


@Component({
  selector: 'app-select-register-event',
  templateUrl: './select-register-event.page.html',
  styleUrls: ['./select-register-event.page.scss'],
})
/**
 * Este componente es el encargado de seleccionar la opción del registro
 */
export class SelectRegisterEventPage implements OnInit {

  swiperOpts = {
    allowSlidePrev: false,
    allowSlideNext: false
  };

  nombreEvento: string;

  constructor(private barcodeScanner: BarcodeScanner,
    private cacheService: CacheService,
    private alertController: AlertController,
    private eventService: EventService,
    private router: Router) { }

  ngOnInit() {
    this.nombreEvento = sessionStorage.nombreEvento;
  }

  /**
   * Cuando se selecciona QR, este abre la camara, valida que sea QR_CODE y manda la información del
   * código QR para posteriormente enviar el registro del código
   */

  async codeQRRegister() {
    const eventIdSelected = await this.cacheService.newRegisterEvent.FK_ID_Evento.toString();
    this.barcodeScanner.scan()
      .then(data => {

        if (data.cancelled !== true) {
          const info = data.text.trim();
          const dataUsuarioQR = JSON.parse(info);
          const fechaNacimiento = moment(dataUsuarioQR.fchnac || dataUsuarioQR.fchNac, 'DD/MM/YYYY');

          const registroUsuarioAsistente: RegistroAsistenteEvento = {
            strTipoIdentificacionEmpresa: dataUsuarioQR.tiEmpr,
            strNumeroDocumentoEmpresa: dataUsuarioQR.numEmpr,
            strRazonSocial: dataUsuarioQR.razonEmpr,
            strTipoDocumentoEmpleado: dataUsuarioQR.tiAsistente,
            strNumeroDocumentoEmpleado: dataUsuarioQR.numAsistente,
            strNombreEmpleado: dataUsuarioQR.nomAsist,
            FK_ID_Cargo: dataUsuarioQR.cargo,
            FK_ID_Sexo: dataUsuarioQR.sexo,
            dtmFechaNacimiento: fechaNacimiento.format('MM/DD/YYYY'),
            strTelefono: dataUsuarioQR.tele,
            strEmail: dataUsuarioQR.email,
            FK_ID_Evento: eventIdSelected
          };
          this.registerUserQR(registroUsuarioAsistente);
        }
      }).catch(error => {
        this.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
      });
  }

  /**
   * La funcionalidad de este método es simplemente redireccionar a registerEventManual, dicha pagina estará el formulario
   * para su posterior consulta.
   */
  registerManual() {
    this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual');
  }

  /**
   * Método que permite enviar la petición al servicio para posteriormente realizar el registro.
   */
  registerUserQR(registroNuevoUsuarioAsistente: RegistroAsistenteEvento) {
    this.eventService.registerResponsibleQR(registroNuevoUsuarioAsistente)
      .subscribe(response => {
        this.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
      }, err => {
        this.confirmationRegister('Error.', 'Falló la inscripción del asistente al evento.');
      });
  }

  /**
   * Este es el método simplemente muestra la alerta para el registro.
   */
  async confirmationRegister(resultadoAlerta: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: resultadoAlerta,
      mode: 'ios',
      message: mensaje,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

}
