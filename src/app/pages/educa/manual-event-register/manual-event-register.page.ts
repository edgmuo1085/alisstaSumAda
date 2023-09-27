import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../../../services/event/event.service';
import { RegistroAsistenteEvento } from '../../../intarfaces/interfaces';
import { CacheService } from '../../../services/cache/cache.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-manual-event-register',
  templateUrl: './manual-event-register.page.html',
  styleUrls: ['./manual-event-register.page.scss'],
})
export class ManualEventRegisterPage implements OnInit {
  // Variable para la creación del formulario
  formConsultUser: FormGroup;
  // Contiene el nombre de evento
  nombreEvento: string;
  // Es un array con los diferentes tipos de documento que se permiten seleccionar
  documentsType: [] = [];

  constructor(
    private formbuilder: FormBuilder,
    private alertController: AlertController,
    private eventService: EventService,
    private barcodeScanner: BarcodeScanner,
    private cacheService: CacheService,
    private router: Router
  ) {}

  ngOnInit() {
    this.nombreEvento = sessionStorage.nombreEvento;
    this.createFormConsultUser();
    this.getDocumentsTypeUser();
  }

  /**
   * Método que permite crear el formulario para la consulta del invitado
   */
  createFormConsultUser() {
    this.formConsultUser = this.formbuilder.group({
      identificationTypeCompany: ['', Validators.required],
      identificationNumberCompany: ['', Validators.required],
      identificationTypeUser: ['', Validators.required],
      identificationNumberUser: ['', Validators.required],
    });
  }

  /**
   * Este método permite ir a consultar el servicio cuales son los tipos de documentos
   * existentes en la BD
   */
  getDocumentsTypeUser() {
    this.eventService.getDocumentType().subscribe(response => {
      this.documentsType = response.Documentos;
    });
  }

  /**
   * El método search como su nombre lo dice es buscar de acuerdo a la información ingresada.
   * Aqui se deben tener en cuenta dos cosas:
   * 1. si efectivamente el servicio responde exitoso (true) es por que trajo información del invitado
   * esto quiere decir que se guarda dicha información en el sessionStorage cuyo nombre es infoResponsibleManualEvent.
   * Esa información servirá para armar el formulario de registro manual cuandro trae datos
   * 2. Si el servicio responde un error (417), esto quiere indicar que no esta invitado y que se debe escribir
   * todos los datos en en registro manual y asi lanzar la peticion.
   * Por eso en la variable infoResponsibleManualEvent se guarda el err.error equivalente a 'null'.
   */
  search() {
    if (this.formConsultUser.valid) {
      const eventIdSelected = this.cacheService.newRegisterEvent.FK_ID_Evento;
      const documentoAsistente = this.formConsultUser.value.identificationNumberUser;
      this.eventService.getSearchResponsibleEventManual(documentoAsistente, eventIdSelected).subscribe(
        response => {
          const infoResponsibleManualEvent = JSON.stringify(response);
          sessionStorage.infoResponsibleManualEvent = infoResponsibleManualEvent;
          this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual/infoRegisterUserManual');
        },
        err => {
          sessionStorage.infoResponsibleManualEvent = err.error;
          this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual/infoRegisterUserManual');
        }
      );
    } else {
      this.Alert();
    }
  }

  /**
   * Desde esta vista tambien se pueden registrar por medio del QR, por ende este metodo,
   * abre la camara, lee el QR, arma el objeto y lanza la petición para realizar el registro del invitado
   */
  async openScanQr() {
    const eventIdSelected = await this.cacheService.newRegisterEvent.FK_ID_Evento.toString();
    this.barcodeScanner
      .scan()
      .then(data => {
        if (data.cancelled !== true) {
          const dataUsuarioQR = JSON.parse(data.text);
          const registroUsuarioAsistente: RegistroAsistenteEvento = {
            strTipoIdentificacionEmpresa: dataUsuarioQR.tiEmpr,
            strNumeroDocumentoEmpresa: dataUsuarioQR.numEmpr,
            strRazonSocial: dataUsuarioQR.razonEmpr,
            strTipoDocumentoEmpleado: dataUsuarioQR.tiAsistente,
            strNumeroDocumentoEmpleado: dataUsuarioQR.tiAsistente,
            strNombreEmpleado: dataUsuarioQR.numAsistente,
            FK_ID_Cargo: dataUsuarioQR.cargo,
            FK_ID_Sexo: dataUsuarioQR.sexo,
            dtmFechaNacimiento: dataUsuarioQR.fchnac,
            strTelefono: dataUsuarioQR.tele,
            strEmail: dataUsuarioQR.email,
            FK_ID_Evento: eventIdSelected,
          };
          this.registerUserQR(registroUsuarioAsistente);
        }
      })
      .catch(error => {
        this.confirmationRegister('Error.', 'Falló la inscripción del asistente al evento.');
      });
  }

  /**
   *
   * Este metodo es el encargado de lanzar la petición para realizar el registro como tal
   */
  registerUserQR(registroNuevoUsuarioAsistente: RegistroAsistenteEvento) {
    this.eventService.registerResponsibleQR(registroNuevoUsuarioAsistente).subscribe(
      response => {
        this.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
      },
      err => {
        this.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
      }
    );
  }

  /**
   * Este metodo basicamente muestra la alerta de exito o fallido segun sea el caso al momento de
   * ejecutar el servicio
   */
  async confirmationRegister(resultadoAlerta: string, mensaje: string) {
    const alert = await this.alertController.create({
      header: resultadoAlerta,
      mode: 'ios',
      message: mensaje,
      buttons: ['ACEPTAR'],
    });
    await alert.present();
  }

  /**
   * Este muestra la alerta cuando se lanza la petición y hay algun campo en el formulario vacio.
   */
  async Alert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      message: 'Todos los campos son obligatorios.',
      buttons: ['ACEPTAR'],
    });

    await alert.present();
  }
}
