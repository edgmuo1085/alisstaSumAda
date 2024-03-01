import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { SignaturePad } from 'angular2-signaturepad';
import { finalize } from 'rxjs/operators';
import { ActivityListCompanyService } from 'src/app/services/activities/activityListCompany/activity-list-company.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { ConnectionStatusEnum, NetworkService } from 'src/app/services/network/network.service';

/**
 * Componente para la vista de firma de actualización.
 */
@Component({
  selector: 'app-signature',
  templateUrl: './signature.page.html',
  styleUrls: ['./signature.page.scss'],
})
export class SignaturePage implements OnInit {
  /**
   * Referencia del componente de firma.
   */
  @ViewChild(SignaturePad)
  signaturePad: SignaturePad;

  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Compañía actual.
   */
  company: any;

  /**
   * Datos del responsable de la ARL (usuario actual).
   */
  responsableARL: any;

  /**
   * Opciones para el control de firma.
   */
  readonly SIGNATURE_PAD_OPTIONS = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 300,
  };

  /**
   * Opciones del navegador embebido.
   */
  readonly BROWSER_OPTIONS: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no',
    closebuttoncaption: 'Cerrar',
    disallowoverscroll: 'no',
    toolbar: 'yes',
    enableViewportScale: 'no',
    allowInlineMediaPlayback: 'no',
    presentationstyle: 'fullscreen',
    fullscreen: 'yes',
  };

  /**
   * Coordenadas del dispositivo.
   */
  private coords: { lat: string; lng: string };

  constructor(
    public alertCtrl: AlertController,
    public loadingCtlr: LoadingController,
    public activityListCompany: ActivityListCompanyService,
    public ngZone: NgZone,
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router,
    private net: NetworkService,
    private alertService: AlertService,
    private iab: InAppBrowser,
    private geolocation: Geolocation
  ) {}

  ngOnInit(): void {
    this.getGeolocation();
  }

  /**
   * Maneja el evento de culminación de dibujado en el componente de firma.
   */
  drawComplete(pad: SignaturePad, control: string): void {
    const firma = pad.toDataURL().split(',');
    const firmaBase64 = firma[0].concat(',').concat(' ').concat(firma[1]);
    this.formGroup.controls[control].setValue(firmaBase64);
  }

  /**
   * Limpia el control de firma.
   */
  clear(pad: SignaturePad, control: string) {
    pad.clear();
    this.formGroup.controls[control].reset();
  }

  /**
   * Abre una ventana del navegador del dispositivo con la _url_ indicada.
   *
   * @param url Dirección _url_.
   */
  async openLink(url: string): Promise<void> {
    this.iab.create(url, '_blank', this.BROWSER_OPTIONS);
  }

  /**
   * Envía los datos al servidor para su procesamiento.
   */
  async send(): Promise<void> {
    if (this.formGroup.invalid) {
      return;
    }

    const onError = async (): Promise<void> => {
      const alert = await this.alertCtrl.create({
        backdropDismiss: false,
        mode: 'ios',
        header: `Error`,
        message: 'Ha ocurrido un error en el servidor y no se pudieron guardar los datos. ¿Desea guardarlos para más tarde?',
        buttons: [
          {
            text: 'Guardar para más tarde',
            handler: () => {
              this.ngZone.run(async () => {
                await this.guardar();
                this.router.navigate(['../../../../'], { relativeTo: this.route });
              });
            },
          },
          { text: 'Seguir editando', role: 'cancel' },
        ],
      });

      await alert.present();
    };

    const value = this.formGroup.value;
    //this.responsableARL.idLicenciaSst

    this.company.edActa_Actualizacion_Empresa = {
      RA_ResposableId: this.responsableARL.idRegistro,
      RA_ResposableDocumento: this.responsableARL.idPersona,
      RA_ResposableNombre: `${this.responsableARL.nombres} ${this.responsableARL.apellidos}`,
      RA_ResposableNumeroLicenciaSST: this.responsableARL.idLicenciaSst,
      RA_ResponsableRazonSocial: this.responsableARL.nombreProveedor,
      RA_ResponsableCargo: this.responsableARL.cargo,
      RA_ResponsableFirma: value.firmaARL,
      RE_ResposableId: value.responsable.id,
      RE_ResposableDocumento: value.responsable.numeroDocumento,
      RE_ResposableNombre: value.responsable.Nombre,
      RE_ResponsableCargo: value.responsable.cargo,
      RE_ResponsableFirma: value.firmaEmpresa,
      FirmaQR: value.qr,
      strIp: this.net.ipAddress.ip ? this.net.ipAddress.ip : '',
      Latitud: this.coords?.lat ?? '',
      Longitud: this.coords?.lat ?? '',
    };

    if (this.net.getNetworkStatus() !== ConnectionStatusEnum.Online) {
      const alert = await this.alertService.showAlert(
        'Atención',
        'El móvil no tiene acceso a datos, por lo cual la actualización de empresa se guardó con estado pendiente por enviar.'
      );

      alert.present();
      await this.guardar();
      this.router.navigate(['../../../../'], { relativeTo: this.route });

      return;
    }

    const loading = await this.alertService.showLoading();

    this.companiesService
      .save()
      .pipe(finalize(() => this.alertService.hideLoading(loading)))
      .subscribe({
        next: async r => {
          const result = JSON.stringify(r).includes('false');
          console.log('REsultado de save compañia', r);
          console.log('REsultado de save compañia result', result);

          if (result == true) {
            onError();
            return;
          }

          const alert = await this.alertService.showAlert('Empresa actualizada', 'Los datos se han registrado exitosamente.');

          alert.present();
          this.router.navigate(['../../../../'], { relativeTo: this.route });
        },
        error: onError,
      });
  }

  /**
   * Guarda los cambios de la empresa actual en el almacén de datos.
   */
  private async guardar(): Promise<void> {
    this.company.__confirmed = true;
    const result = await this.companiesService.saveChanges();

    if (!result) {
      const _alert = await this.alertCtrl.create({
        backdropDismiss: false,
        header: 'Atención',
        mode: 'ios',
        message: 'No tiene espacio suficiente en el dispositivo. Intente liberar memoria.',
        buttons: ['ACEPTAR'],
      });

      await _alert.present();
    }
  }

  /**
   * Emite una alerta para solicitar al usuario el código de verificación. También tiene opción
   * para recuperación de este código a través de un correo electrónico.
   */
  async solicitarCodigoVerificacion(): Promise<void> {
    const correo = this.formGroup.controls.correo.value;

    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      mode: 'ios',
      header: `Ingrese el código de verificación. Si selecciona la opción reenviar código, se enviará al siguiente correo: ${correo}.`,
      inputs: [
        {
          name: 'verificationCode',
          type: 'number',
          placeholder: 'Código de verificación',
        },
      ],
      buttons: [
        {
          text: 'Reenviar código',
          handler: () => {
            this.reenviarCodigo(this);
          },
        },
        {
          text: 'Aceptar',
          handler: codigo => {
            this.comprobarCodigoVerificacion(codigo, this);
          },
        },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });

    await alert.present();
  }

  /**
   * Comprueba que haya conexión a internet.
   */
  validateNetwork(): boolean {
    const status = this.net.getNetworkStatus();

    return status === ConnectionStatusEnum.Online;
  }

  /**
   * Obtiene la geolocalización del dispositivo.
   */
  private async getGeolocation(): Promise<void> {
    const loading = await this.alertService.showLoading();

    this.geolocation
      .getCurrentPosition()
      .then(response => {
        this.coords = {
          lat: `${response.coords.latitude}`,
          lng: `${response.coords.longitude}`,
        };

        this.getCompany();
      })
      .catch(async error => {
        if (error.code === 1) {
          // Si se produce un error de este tipo es porque se está intentando acceder al servicio
          // de ubicación desde un origen inseguro. Se asume que entonces se está ejecutando la aplicación
          // desde el servidor de desarrollo de Ionic

          this.coords = {
            lat: '0',
            lng: '0',
          };

          this.getCompany();

          return;
        }

        const alert = await this.alertCtrl.create({
          header: 'Atención',
          backdropDismiss: false,
          mode: 'ios',
          message: 'Debe conceder permisos de ubicación a la aplicación para poder continuar.',
          buttons: ['ACEPTAR'],
        });

        alert.present();
        this.router.navigate(['../../../'], { relativeTo: this.route });
      })
      .finally(() => {
        loading.dismiss();
      });
  }

  /**
   * Establece la empresa de la vista de detalles.
   */
  private async getCompany(): Promise<void> {
    const id = +this.route.snapshot.params.id;

    try {
      this.company = await this.companiesService.prepareCompany(id);
    } catch {
      this.company = this.companiesService.company;
    }

    if (!this.company) {
      this.router.navigate(['../']);

      return;
    }

    this.responsableARL = await this.companiesService.responsableARL;
    this.initForm();
  }

  /**
   * Inicializa el formulario.
   */
  private initForm(): void {
    const responsableControl = new FormControl(undefined, [Validators.required]);
    const tipoDocumentoControl = new FormControl({ value: undefined, disabled: true });
    const documentoControl = new FormControl({ value: undefined, disabled: true });
    const correoControl = new FormControl({ value: undefined, disabled: true });
    const cargoControl = new FormControl({ value: undefined, disabled: true });
    const qrControl = new FormControl(false);
    const firmaARLControl = new FormControl(undefined, [Validators.required]);
    const codigoVerificacionControl = new FormControl(undefined, [Validators.required]);
    const firmaEmpresaControl = new FormControl(undefined, [Validators.required]);

    this.formGroup = new FormGroup({
      responsable: responsableControl,
      tipoDocumento: tipoDocumentoControl,
      documento: documentoControl,
      correo: correoControl,
      cargo: cargoControl,
      qr: qrControl,
      firmaARL: firmaARLControl,
      codigoVerificacion: codigoVerificacionControl,
      firmaEmpresa: firmaEmpresaControl,
    });

    this.formGroup.controls.responsable.valueChanges.subscribe(v => {
      if (!v) {
        this.formGroup.controls.tipoDocumento.reset();
        this.formGroup.controls.documento.reset();
        this.formGroup.controls.correo.reset();
        this.formGroup.controls.cargo.reset();
        this.formGroup.controls.qr.reset();

        return;
      }

      this.formGroup.controls.tipoDocumento.setValue(v.tipoDocumentoDescripcion);
      this.formGroup.controls.documento.setValue(v.numeroDocumento);
      this.formGroup.controls.correo.setValue(v.correo);
      this.formGroup.controls.cargo.setValue(v.cargo);
    });

    this.formGroup.controls.qr.valueChanges.subscribe(v => {
      if (v) {
        this.formGroup.controls.codigoVerificacion.reset();
        this.formGroup.controls.codigoVerificacion.disable();
        this.formGroup.controls.firmaEmpresa.reset();
        this.formGroup.controls.firmaEmpresa.disable();

        return;
      }

      this.formGroup.controls.codigoVerificacion.enable();
      this.formGroup.controls.firmaEmpresa.enable();
    });
  }

  /**
   * Reenvía el código de verficación al responsable de la empresa a su correo.
   *
   * @param component Referencia de este componente.
   */
  private async reenviarCodigo(component: SignaturePage): Promise<void> {
    const available = component.validateNetwork();

    if (!available) {
      const alert = await component.alertCtrl.create({
        header: 'Alerta',
        backdropDismiss: false,
        mode: 'ios',
        message: 'No tienes conexión a internet para utilizar esta funcionalidad.',
        buttons: ['ACEPTAR'],
      });

      await alert.present();

      return;
    }

    const loading = await component.loadingCtlr.create({
      mode: 'ios',
      message: 'Reenviando código de verificación...',
    });

    loading.present();

    const responsableID = component.formGroup.controls.responsable.value.id;
    const empresaID = component.company.Fk_Id_EmpresaSUM;
    const correo = component.formGroup.controls.correo.value;
    let result: any;
    let header: string;
    let message: string;

    try {
      result = await component.activityListCompany.recordarCodigoVerificacion(responsableID, empresaID).toPromise();

      if (result) {
        header = 'Exitoso';
        message = `Se reenvió el código de verificación al correo ${correo}.`;
      } else {
        header = 'Error';
        message = `No se pudo enviar el código de verificación al correo ${correo}.`;
      }
    } catch {
      header = 'Error';
      message = `No se pudo enviar el código de verificación al correo ${correo}.`;
    }

    const alert = await component.alertCtrl.create({
      header,
      backdropDismiss: false,
      mode: 'ios',
      message,
      buttons: ['ACEPTAR'],
    });

    loading.dismiss();
    await alert.present();
  }

  /**
   * Comprueba que el código de verificación introducido y el que posee el responsable de la empresa
   * coincidan.
   *
   * @param codigo Código introducido.
   * @param componente Referencia de este componente.
   */
  private async comprobarCodigoVerificacion(codigo: any, componente: SignaturePage): Promise<void> {
    if (componente.formGroup.controls.responsable.value.codigoVerificacion !== codigo.verificationCode) {
      componente.ngZone.run(() => {
        componente.formGroup.controls.codigoVerificacion.reset();
      });

      const alert = await componente.alertCtrl.create({
        header: 'Atención',
        backdropDismiss: false,
        mode: 'ios',
        message: 'El código ingresado no es válido. Por favor intente nuevamente.',
        buttons: ['ACEPTAR'],
      });

      await alert.present();

      return;
    }

    componente.ngZone.run(() => {
      componente.formGroup.controls.codigoVerificacion.setValue(codigo.verificationCode);
    });
  }

  // const = {
  //   "Pk_Id_AS_004_Empresas_AMigrar": 25,
  //   "Fk_Id_Tipo_Documento": 2,
  //   "strNumeroDcto": "800167494",
  //   "strSiglaEmpresa": "NI",
  //   "strRazonSocial": "ADA S.A",
  //   "strTelefono": "3225499",
  //   "strCelular": "",
  //   "strCorreoElectronico": "margarita.arrazola@fiscalia.gov.co",
  //   "intAnioGestion": 2022,
  //   "Fk_Id_Departamento": 2,
  //   "Fk_Id_Municipio": 126,
  //   "strDireccion": "CL 53B 46 50 PI 3",
  //   "Fk_Id_SucursalPyP": 9,
  //   "strCodigoActividadEconomica": "5752301",
  //   "strDescripcionSectorEconomico": "ADMINISTRACION PUBLICA Y DEFENSA",
  //   "Int_Estado_Empresa": 1,
  //   "strEstadoEmp": null,
  //   "Fk_Id_EmpresaSUM": 1,
  //   "Numeral_Historico": 1,
  //   "Fecha_Registro": "2022-02-17T11:53:06.517",
  //   "Fecha_Actualizacion_App": "1900-01-01T00:00:00",
  //   "Fk_Id_Tipo_Documento_representate_Legal": 1,
  //   "strSiglaRepresentanteLegal": "CC",
  //   "strNumeroDcto_Representant_Legal": "19266052",
  //   "strNombre_Representant_Legal": "NESTOR HUMBERTO MARTINEZ",
  //   "strActividadEconomicaNombre": "EMPRESAS DEDICADAS A ACTIVIDADES DE LA JUSTICIA INCLUYE SOLAMENTE A EMPRESAS DEDICADAS A LOS SERVICIOS PRESTADOS POR LA JURISDICCION PENAL COMO MAGISTRADOS, JUECES REGIONALES, JUECES PENALES DEL CIRCUITO, FISCALES Y/O SERVICIOS DE SEGURIDAD DE LA FISCALIA GENERAL DE LA NACION, SERVICIOS PRESTADOS POR EL MINISTERIO PBLICO EN LO PENAL, COMO PROCURADORES DELEGADOS EN LO PENAL, PROCURADORES DELEGADOS PARA LOS DERECHOS HUMANSO, PROCURADORES DELEGADOS ENTE LA SALA PENAL DE LA CORTE SUPREMA DE JUSTICIA, FUNCIONARIOS Y EMPLEADOS DE LA OFICINA DE INVESTIGACIONES ESPECIALES Y EMPLEADOS DE LOS CUERPOS DE SEGURIDAD.",
  //   "stringCodigoDeVerificacion": null,
  //   "Fk_Id_UsuariosAutorizadosxEmpresa": 0,
  //   "stringObservaciones": null,
  //   "Fk_ID_UsuarioResponsable": 3336,
  //   "strNombreResponable": "ADRIAN MARCEL GOMEZ CANO",
  //   "strRolResponsable": "PROVEEDOR",
  //   "str_Sigla_Documento": "NI",
  //   "Nombre_Departamento": "ATLANTICO",
  //   "Nombre_Municipio": "BARRANQUILLA",
  //   "strObservaciones": null,
  //   "totalEmpres": 0,
  //   "Token_Actualizacion": "1Z3bRkmlflQoFbOPnv2m9JtK",
  //   "Fuente": 2,
  //   "strFuente": null,
  //   "eDResponsableActualizacion":
  //     [{
  //       "id": 120, "numeroDocumento": "36564761",
  //       "tipoDocumentoDescripcion": "CÉDULA DE CIUDADANÍA",
  //       "Nombre": "MARGARITA ROSA ARRAZOLA BERROCAL",
  //       "cargo": "Profesional SG-SST",
  //       "codigoVerificacion": "383059",
  //       "correo": "hayda.rodriguez@ada.co"
  //     }],
  //   "eDSedesActualizadas":
  //   {
  //     "Pk_ID_AS_004_SedesActualizar": 5,
  //     "Fk_Id_Tipo_Documento": 2,
  //     "strNumeroDcto": "800187568",
  //     "strRazonSocial": "FISCALIA GENERAL DE LA NACION BARRANQUILLA",
  //     "strSiglaEmpresa": "NI",
  //     "intIDSede": 0,
  //     "strDireccion": "CL 53B 46 50 PI 3",
  //     "srtIndicadorZona": "U",
  //     "Fk_Id_Departamento": 2,
  //     "Fk_Id_Municipio": 126,
  //     "strDepartamento": null,
  //     "Int_Estado_Sede": 1,
  //     "strCorreoElectronico": "margarita.arrazola@fiscalia.gov.co",
  //     "strTelefono": "3225499",
  //     "strCodigoPostal": "552555",
  //     "Fk_Id_EmpresaSUM": 233,
  //     "Fk_Id_AS_004_Empresas_AMigrar": 25,
  //     "Fecha_Registro": "2022-02-17T11:53:06.55",
  //     "Fecha_UltimaActualizacion": "1900-01-01T00:00:00",
  //     "Nombre_Departamento_Sede": "ATLANTICO",
  //     "Nombre_Municipio_Sede": "BARRANQUILLA",
  //     "strEstadoSede": "Activa",
  //     "strNombreSede": null
  //   },
  //   "eDListaMaestrosDirecciones":
  //   {
  //     "listaMaestrosAvenida":
  //       [{
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 1,
  //         "strDescripcionCatologo": "Autopista",
  //         "strSigla": null,
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 2,
  //         "strDescripcionCatologo": "Avenida",
  //         "strSigla": "AV",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 3,
  //         "strDescripcionCatologo": "Avenida Calle",
  //         "strSigla": "AC",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 4,
  //         "strDescripcionCatologo": "Avenida Carrera",
  //         "strSigla": "AK",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 5,
  //         "strDescripcionCatologo": "Bulevar",
  //         "strSigla": "BL",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 6,
  //         "strDescripcionCatologo": "Calle",
  //         "strSigla": "CL",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 7,
  //         "strDescripcionCatologo": "Carrera",
  //         "strSigla": "KR",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 8,
  //         "strDescripcionCatologo": "Carretera",
  //         "strSigla": "CT", "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 9,
  //         "strDescripcionCatologo": "Circular",
  //         "strSigla": "CQ",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 10,
  //         "strDescripcionCatologo": "Circunvalar",
  //         "strSigla": "CV",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 11,
  //         "strDescripcionCatologo": "Cuentas Corridas",
  //         "strSigla": "CC", "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 12,
  //         "strDescripcionCatologo": "Diagonal",
  //         "strSigla": "DG",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 13,
  //         "strDescripcionCatologo": "Pasaje",
  //         "strSigla": "PJ",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 14,
  //         "strDescripcionCatologo": "Paseo",
  //         "strSigla": "PS",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 15,
  //         "strDescripcionCatologo": "Peatonal",
  //         "strSigla": "PT",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 16,
  //         "strDescripcionCatologo": "Transversal",
  //         "strSigla": "TV", "Fk_ID_Tipo": 1, "total": 0
  //       }, {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 17,
  //         "strDescripcionCatologo": "Troncal",
  //         "strSigla": "TC",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 19,
  //         "strDescripcionCatologo": "Variante",
  //         "strSigla": "VT",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 20,
  //         "strDescripcionCatologo": "Vía",
  //         "strSigla": "VI",
  //         "Fk_ID_Tipo": 1,
  //         "total": 0
  //       }],
  //     "listaMaestrosCuadrante":
  //       [{
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 21,
  //         "strDescripcionCatologo": "Este",
  //         "strSigla": "ESTE", "Fk_ID_Tipo": 2,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 22,
  //         "strDescripcionCatologo": "Norte",
  //         "strSigla": "NORTE", "Fk_ID_Tipo": 2,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 23,
  //         "strDescripcionCatologo": "Oeste",
  //         "strSigla": "OESTE",
  //         "Fk_ID_Tipo": 2,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 24,
  //         "strDescripcionCatologo": "Sur",
  //         "strSigla": "SUR",
  //         "Fk_ID_Tipo": 2,
  //         "total": 0
  //       }],
  //     "listaMaestrosSufijos":
  //       [{
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 25,
  //         "strDescripcionCatologo": "Administración",
  //         "strSigla": "AD",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 26,
  //         "strDescripcionCatologo": "Agrupación",
  //         "strSigla": "AG",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 27,
  //         "strDescripcionCatologo": "Altillo",
  //         "strSigla": "AL",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 28,
  //         "strDescripcionCatologo": "Apartamento",
  //         "strSigla": "AP",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 29,
  //         "strDescripcionCatologo": "Barrio",
  //         "strSigla": "BR",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 30,
  //         "strDescripcionCatologo": "Bloque",
  //         "strSigla": "BQ",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 31,
  //         "strDescripcionCatologo": "Bodega",
  //         "strSigla": "BG",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 32,
  //         "strDescripcionCatologo": "Casa",
  //         "strSigla": "CS",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 33,
  //         "strDescripcionCatologo": "Célula",
  //         "strSigla": "CU",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 34,
  //         "strDescripcionCatologo": "Centro Comercial",
  //         "strSigla": "CE",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 35,
  //         "strDescripcionCatologo": "Ciudadela",
  //         "strSigla": "CD", "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 36,
  //         "strDescripcionCatologo": "Conjunto Residencial",
  //         "strSigla": "CO", "Fk_ID_Tipo": 3, "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 37,
  //         "strDescripcionCatologo": "Consultorio",
  //         "strSigla": "CN",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 38,
  //         "strDescripcionCatologo": "Corregimiento",
  //         "strSigla": "C",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 39,
  //         "strDescripcionCatologo": "Deposito", "strSigla": "DP", "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 40,
  //         "strDescripcionCatologo": "Deposito Sótano",
  //         "strSigla": "DS",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 41,
  //         "strDescripcionCatologo": "Edificio",
  //         "strSigla": "ED",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 42,
  //         "strDescripcionCatologo": "Entrada",
  //         "strSigla": "EN",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 43,
  //         "strDescripcionCatologo": "Esquina",
  //         "strSigla": "EQ",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 44,
  //         "strDescripcionCatologo": "Estación",
  //         "strSigla": "ES",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 45,
  //         "strDescripcionCatologo": "Etapa",
  //         "strSigla": "ET",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 46,
  //         "strDescripcionCatologo": "Exterior",
  //         "strSigla": "EX",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 47,
  //         "strDescripcionCatologo": "Finca",
  //         "strSigla": "FI",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 48,
  //         "strDescripcionCatologo": "Garaje",
  //         "strSigla": "GA",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       }, {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 49,
  //         "strDescripcionCatologo": "Garaje Sótano",
  //         "strSigla": "GS",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 50,
  //         "strDescripcionCatologo": "Interior",
  //         "strSigla": "IN",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 51,
  //         "strDescripcionCatologo": "Kilómetro",
  //         "strSigla": "KM",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 52,
  //         "strDescripcionCatologo": "Local",
  //         "strSigla": "LC",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 53,
  //         "strDescripcionCatologo": "Local Mezzanine",
  //         "strSigla": "LM",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 54,
  //         "strDescripcionCatologo": "Lote",
  //         "strSigla": "LT",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 55,
  //         "strDescripcionCatologo": "Manzana",
  //         "strSigla": "MZ",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 56,
  //         "strDescripcionCatologo": "Mezzanine",
  //         "strSigla": "MN",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 57,
  //         "strDescripcionCatologo": "Módulo",
  //         "strSigla": "MD",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 58,
  //         "strDescripcionCatologo": "Oficina",
  //         "strSigla": "OF",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 59,
  //         "strDescripcionCatologo": "Parque",
  //         "strSigla": "PQ",
  //         "Fk_ID_Tipo": 3,
  //         "total": 0
  //       },
  //       {
  //         "Pk_Id_AS_004_Catalago_Informacion_Direccion": 60,
  //         "strDescripcionCatologo": "Parqueadero", "strSigla": "PA", "Fk_ID_Tipo": 3, "total": 0
  //       },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 61, "strDescripcionCatologo": "Pent-House", "strSigla": "PN", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 62, "strDescripcionCatologo": "Piso", "strSigla": "PI", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 63, "strDescripcionCatologo": "Planta", "strSigla": "PL", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 64, "strDescripcionCatologo": "Porteria", "strSigla": "PR", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 65, "strDescripcionCatologo": "Predio", "strSigla": "PD", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 66, "strDescripcionCatologo": "Puesto", "strSigla": "PU", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 67, "strDescripcionCatologo": "Round Point", "strSigla": "RP", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 68, "strDescripcionCatologo": "Sector", "strSigla": "SC", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 69, "strDescripcionCatologo": "Semisótano", "strSigla": "SS", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 70, "strDescripcionCatologo": "Sótano", "strSigla": "SO", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 71, "strDescripcionCatologo": "Suite", "strSigla": "ST", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 72, "strDescripcionCatologo": "Supermanzana", "strSigla": "SM", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 73, "strDescripcionCatologo": "Terraza", "strSigla": "TZ", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 74, "strDescripcionCatologo": "Torre", "strSigla": "TR", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 75, "strDescripcionCatologo": "Unidad", "strSigla": "UN", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 76, "strDescripcionCatologo": "Unidad Residencial", "strSigla": "UL", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 77, "strDescripcionCatologo": "Urbanización", "strSigla": "UR", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 78, "strDescripcionCatologo": "Vereda", "strSigla": "VRD", "Fk_ID_Tipo": 3, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 79, "strDescripcionCatologo": "Zona", "strSigla": "ZN", "Fk_ID_Tipo": 3, "total": 0 }],
  //     "listaMaestrosBarrios":
  //       [{ "Pk_Id_AS_004_Catalago_Informacion_Direccion": 80, "strDescripcionCatologo": "Barrio", "strSigla": "BR", "Fk_ID_Tipo": 4, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 81, "strDescripcionCatologo": "Ciudadela", "strSigla": "CD", "Fk_ID_Tipo": 4, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 82, "strDescripcionCatologo": "Supermanzana", "strSigla": "SM", "Fk_ID_Tipo": 4, "total": 0 }],
  //     "listaMaestrosUrbanizacion":
  //       [{ "Pk_Id_AS_004_Catalago_Informacion_Direccion": 83, "strDescripcionCatologo": "Bloque", "strSigla": "BQ", "Fk_ID_Tipo": 5, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 84, "strDescripcionCatologo": "Célula", "strSigla": "CU", "Fk_ID_Tipo": 5, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 85, "strDescripcionCatologo": "Conjunto Residencial", "strSigla": "CO", "Fk_ID_Tipo": 5, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 86, "strDescripcionCatologo": "Etapa", "strSigla": "ET", "Fk_ID_Tipo": 5, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 87, "strDescripcionCatologo": "Urbanización", "strSigla": "UR", "Fk_ID_Tipo": 5, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 88, "strDescripcionCatologo": "Sector", "strSigla": "SC", "Fk_ID_Tipo": 5, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 89, "strDescripcionCatologo": "Torre", "strSigla": "TO", "Fk_ID_Tipo": 5, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 90, "strDescripcionCatologo": "Zona", "strSigla": "ZN", "Fk_ID_Tipo": 5, "total": 0 }],
  //     "listaMaestrosManzana":
  //       [{ "Pk_Id_AS_004_Catalago_Informacion_Direccion": 91, "strDescripcionCatologo": "Manzana", "strSigla": "MZ", "Fk_ID_Tipo": 6, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 92, "strDescripcionCatologo": "Interior", "strSigla": "IN", "Fk_ID_Tipo": 6, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 93, "strDescripcionCatologo": "Sector", "strSigla": "SC", "Fk_ID_Tipo": 6, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 94, "strDescripcionCatologo": "Etapa", "strSigla": "ET", "Fk_ID_Tipo": 6, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 95, "strDescripcionCatologo": "Edificio", "strSigla": "ED", "Fk_ID_Tipo": 6, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 96, "strDescripcionCatologo": "Módulo", "strSigla": "MD", "Fk_ID_Tipo": 6, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 97, "strDescripcionCatologo": "Torre", "strSigla": "TO", "Fk_ID_Tipo": 6, "total": 0 }],
  //     "listaMaestrosTipoDePredio":
  //       [{ "Pk_Id_AS_004_Catalago_Informacion_Direccion": 98, "strDescripcionCatologo": "Altillo", "strSigla": "AL", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 99, "strDescripcionCatologo": "Apartamento", "strSigla": "AP", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 100, "strDescripcionCatologo": "Bodega", "strSigla": "BG", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 101, "strDescripcionCatologo": "Casa", "strSigla": "CS", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 102, "strDescripcionCatologo": "Consultorio", "strSigla": "CN", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 103, "strDescripcionCatologo": "Deposito", "strSigla": "DP", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 104, "strDescripcionCatologo": "Deposito Sótano", "strSigla": "DS", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 105, "strDescripcionCatologo": "Garaje", "strSigla": "GA", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 106, "strDescripcionCatologo": "Garaje Sótano", "strSigla": "GS", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 107, "strDescripcionCatologo": "Local", "strSigla": "LC", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 108, "strDescripcionCatologo": "Local Mezzanine", "strSigla": "LM", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 109, "strDescripcionCatologo": "Lote", "strSigla": "LT", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 110, "strDescripcionCatologo": "Mezzanine", "strSigla": "MN", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 111, "strDescripcionCatologo": "Oficina", "strSigla": "OF", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 112, "strDescripcionCatologo": "Parqueadero", "strSigla": "PA", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 113, "strDescripcionCatologo": "Pent-House", "strSigla": "PN", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 114, "strDescripcionCatologo": "Planta", "strSigla": "PL", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 115, "strDescripcionCatologo": "Predio", "strSigla": "PD", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 116, "strDescripcionCatologo": "Semisótano", "strSigla": "SS", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 117, "strDescripcionCatologo": "Sótano", "strSigla": "SO", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 118, "strDescripcionCatologo": "Suite", "strSigla": "ST", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 119, "strDescripcionCatologo": "Terraza", "strSigla": "TZ", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 120, "strDescripcionCatologo": "Unidad", "strSigla": "UN", "Fk_ID_Tipo": 7, "total": 0 },
  //       { "Pk_Id_AS_004_Catalago_Informacion_Direccion": 121, "strDescripcionCatologo": "Unidad Residencial", "strSigla": "UL", "Fk_ID_Tipo": 7, "total": 0 }]
  //   }, "edActa_Actualizacion_Empresa":
  //   {
  //     "RA_ResposableId": "3336",
  //     "RA_ResposableDocumento": "8160997",
  //     "RA_ResposableNombre": "ADRIAN MARCEL GOMEZ CANO",
  //     "RA_ResposableNumeroLicenciaSST": "75897",
  //     "RA_ResponsableRazonSocial": "BENEFICIOS INTEGRALES OPORTUNOS S.A.S.",
  //     "RA_ResponsableCargo": "Profesional ",
  //     "RA_ResponsableFirma": "data:image/png;base64, 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",
  //     "RE_ResposableId": 120,
  //     "RE_ResposableDocumento": "36564761",
  //     "RE_ResposableNombre": "MARGARITA ROSA ARRAZOLA BERROCAL",
  //     "RE_ResponsableCargo": "Profesional SG-SST",
  //     "FirmaQR": true,
  //     "strIp": "181.143.29.58"
  //   }, "listaPersonasContacto": null
  // }
}
