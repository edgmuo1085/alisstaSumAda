import { Component, OnInit,  ViewChild } from '@angular/core';
import { CacheService } from '../../../services/cache/cache.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from '../../../services/event/event.service';
import { AlertController } from '@ionic/angular';
import { RegistroAsistenteEvento } from '../../../intarfaces/interfaces';
import { Router } from '@angular/router';


@Component({
  selector: 'app-info-register-event-manual',
  templateUrl: './info-register-event-manual.page.html',
  styleUrls: ['./info-register-event-manual.page.scss'],
})




export class InfoRegisterEventManualPage implements OnInit {


  /**
   * Se crea esta variable porque crea un formulario cuando trae información al momento de consultar
   * al invitado
   */
  formInfoUserRegisterEvent: FormGroup;

  /**
   * Se crea esta variable porque crea un formulario cuando NO trae información al momento de consultar
   * al invitado 
   */
  formInfoUserRegisterEventEmpty: FormGroup;

  /**
   * InfoUser es la variable donde se guarda la información del invitado a registrar.
   */
  infoUser;

  /**
   * Nombre del evento para mostrar cual es el nombre seleccionado
   */
  nombreEvento: string;

  /**
   * Almacena todos los documentos que son permitidos al momento de registrar un asistente
   * (CC, NIT, CE) etc.
   */
  documentsType: [] = [];

  /**
   * Almacena los diferentes tipos de cargos que posee la herramienta, por el momento son 3
   * Directivo, RESPONSABLE SGSST, TRABAJADOR
   */
  typeCharges: [] = [];

  /**
   * Array de generos, Masculino y femenino
   */
  typeSex: [] = [];

  /**
   * Esta variable valida si la consulta del invitado trae o no información del asistente.
   */
  isResponsibleEmpty: boolean;


  

  constructor( private cacheService: CacheService,
               private eventService: EventService,
               private router: Router,
               private alertController: AlertController,
               private formBuilder: FormBuilder ) { }

  /**
   * Este metodo tiene varias cosas a tener en cuenta, las cuales son:
   * 1. Carga los documentos, los tipos de cargo y los sexos al momento de cargar la pagina.
   * 2. valida que valor viene en la variable sessionStorage.infoResponsibleManualEvent para posteriormente
   *    armar el formulario. Si viene null lo arma vacio si viene con datos crea el formulario con datos y 
   *    bloquea unos campos que no son editables.
   * 
   */
  ngOnInit() {
    this.getDocumentsTypeUser();
    this.getTypesCharge();
    this.getTypesSex();
    if (sessionStorage.infoResponsibleManualEvent === 'null') {
      this.createFormInfoUserRegister();
      this.isResponsibleEmpty = true;
    } else {
      this.isResponsibleEmpty = false;
      this.infoUser = JSON.parse(sessionStorage.infoResponsibleManualEvent);
      this.createFormInfoUserRegisterWithInformation();
      setTimeout(() => {
        this.formInfoUserRegisterEvent.patchValue({
          tipoDocEmp: this.infoUser.strTipoIdentificacionEmpresa,
          documentoEmp: this.infoUser.strNumeroDocumentoEmpresa,
          razonSocial: this.infoUser.strRazonSocial,
          tipoDoc: this.infoUser.strTipoDocumentoEmpleado,
          idPersona: this.infoUser.strNumeroDocumentoEmpleado,
          nombre: this.infoUser.strNombreEmpleado,
          cargo: this.infoUser.FK_ID_Cargo,
          // edad: this.infoUser.dtmFechaNacimiento.toString().split('T')[0],
          edad: this.infoUser.dtmFechaNacimiento,
          sexo: this.infoUser.FK_ID_Sexo,
          telefono: this.infoUser.strTelefono,
          email: this.infoUser.strEmail
        });
      }, 1000);
    }
    this.nombreEvento = sessionStorage.nombreEvento;
  }

  createFormInfoUserRegister() {
    this.formInfoUserRegisterEventEmpty = this.formBuilder.group({
      tipoDocEmp: [ '', Validators.required ],
      documentoEmp: [ '', Validators.required ],
      razonSocial: ['', Validators.required],
      tipoDoc: [ '', Validators.required ],
      idPersona: [ '', Validators.required ],
      nombre: ['', Validators.required ],
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      cargo: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{6,}$')]
    });
  }

  createFormInfoUserRegisterWithInformation() {
    this.formInfoUserRegisterEvent = this.formBuilder.group({
      tipoDocEmp: [ {value: '', disabled: true},  ],
      documentoEmp: [ {value: '', disabled: true} ],
      razonSocial: [{value: '', disabled: true}],
      tipoDoc: [ {value: '', disabled: true} ],
      idPersona: [ {value: '', disabled: true} ],
      nombre: [ {value: '', disabled: true} ],
      sexo: [''],
      edad: [''],
      cargo: [''],
      telefono: [''],
      email: ['', Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{6,}$')]
    });
  }

  /**
   * Metodo para obtener los documentos permitidos para la selección de tipo de documentos
   */
  getDocumentsTypeUser() {
    this.eventService.getDocumentType()
      .subscribe(response => {
        this.documentsType = response.Documentos;
      });
  }

  /**
   * Metodo para obtener los cargos permitidos para la selección de cargo
   */
  getTypesCharge() {
    this.eventService.getDocumentType()
      .subscribe(response => {
        this.typeCharges = response.Cargos;
      });
  }

  /**
   * Metodo para obtener el tipo de sexo permitidos 
   */
  getTypesSex() {
    this.eventService.getDocumentType()
      .subscribe(response => {
        this.typeSex = response.Sexos;
      });
  }


  /**
   *
   * Este metodo recibe el formulario con el fin de armar el objeto que se necesita para realizar el registro
   * valida si la variable isResponsibleEmpty llega con algun dato o no y luego lanza el metodo para
   * el registro como tal.
   */
  registerResponsible(newResponsible) {
    const eventoId = this.cacheService.newRegisterEvent.FK_ID_Evento.toString();
    if (this.isResponsibleEmpty) {
      const fechaNacimiento = newResponsible.controls.edad.value.toISOString().split('T')[0];
      const newRegister: RegistroAsistenteEvento = {
        strTipoIdentificacionEmpresa: newResponsible.value.tipoDocEmp,
        strNumeroDocumentoEmpresa: newResponsible.value.documentoEmp,
        strTipoDocumentoEmpleado: newResponsible.value.tipoDoc,
        strNumeroDocumentoEmpleado: newResponsible.value.idPersona,
        strNombreEmpleado: newResponsible.value.nombre,
        dtmFechaNacimiento: fechaNacimiento,
        FK_ID_Sexo: newResponsible.value.sexo,
        strTelefono: newResponsible.value.telefono,
        FK_ID_Cargo: newResponsible.value.cargo,
        FK_ID_Evento: eventoId,
        strRazonSocial: newResponsible.value.razonSocial,
        strEmail: newResponsible.value.email
      };
      this.registerNewResponsibleWhenIsEmpty(newRegister);
    } else {

      const documentTypeCompany = this.validateDocumentType(newResponsible.controls.tipoDocEmp.value);

      const newRegister: RegistroAsistenteEvento = {
        strTipoIdentificacionEmpresa: documentTypeCompany,
        strNumeroDocumentoEmpresa: newResponsible.controls.documentoEmp.value,
        strTipoDocumentoEmpleado: newResponsible.controls.tipoDoc.value,
        strNumeroDocumentoEmpleado: newResponsible.controls.idPersona.value,
        strNombreEmpleado: newResponsible.controls.nombre.value,
        dtmFechaNacimiento: newResponsible.value.edad,
        FK_ID_Sexo: newResponsible.value.sexo,
        strTelefono: newResponsible.value.telefono,
        FK_ID_Cargo: newResponsible.value.cargo,
        FK_ID_Evento: eventoId,
        strRazonSocial: newResponsible.controls.razonSocial.value,
        strEmail: newResponsible.value.email
      };

      this.registerNewResponsibleWhenIsEmpty(newRegister);

    }
  }

  /**
   * Este metodo lanza el registro como tal del invitado al evento.
   */
  registerNewResponsibleWhenIsEmpty(newResponsibleEvent: RegistroAsistenteEvento) {
    this.eventService.registerResponsibleManual(newResponsibleEvent)
      .subscribe( response => {
        this.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
        this.router.navigateByUrl('u/consultEvent/selectRegisterEvent');
      }, err => {
        this.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
      });
  }


  /**
   * 
   * Este metodo se encarga de validar el tipo del documento para que no exista un error cuando 
   * consultan la información que viene del asistente, puede que no venga con el dato como tal, ejemplo
   * NIT y no NI, como se reconoce en la BD
   */
  validateDocumentType(value: string): string {
    switch (value) {
      case 'NIT':
        return 'NI';
        break;
      case 'CÉDULA DE CIUDADANIA':
        return 'CC';
        break;
      case 'CÉDULA DE EXTRANJERÍA':
        return 'CE';
        break;
      case 'NUIP':
        return 'NU';
        break;
      case 'PASAPORTE':
        return 'PA';
        break;
      case 'TARJETA DE IDENTIDAD':
        return 'ti';
        break;
      case 'PERMISO ESPECIAL DE PERMANENCIA':
        return 'PE';
        break;
      default:
        break;
    }
  }


  /**
   * Alerta que confirma el exito o fallido del registro manual
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
