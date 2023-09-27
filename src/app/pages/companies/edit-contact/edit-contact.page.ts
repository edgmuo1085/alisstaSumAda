import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { NavbarService } from '../../navbar/navbar.service';

/**
 * Controlador de la vista de edición de contacto.
 */
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.page.html',
  styleUrls: ['./edit-contact.page.scss'],
})
export class EditContactPage {
  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Compañía actual.
   */
  company: any;

  /**
   * Expresión regular para validar correos electrónicos.
   */
  readonly EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  /**
   * Tipos de papel o representación.
   */
  readonly TIPOS_REPRESENTACION = [
    { label: 'Representante Legal', value: 'Representante Legal' },
    { label: 'Reponsable SG-SST', value: 'Reponsable SG-SST' },
    { label: 'COPASST', value: 'COPASST' },
    { label: 'Talento Humano', value: 'Talento Humano' },
  ];

  /**
   * Tipos de documento.
   */
  readonly TIPOS_DOCUMENTO = [
    { label: 'CC', value: 'CC' },
    { label: 'CE', value: 'CE' },
    { label: 'PA', value: 'PA' },
    { label: 'PE', value: 'PE' },
    { label: 'PT', value: 'PT' },
  ];

  /**
   * Tipos de sexo.
   */
  readonly TIPOS_SEXO = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' },
  ];

  constructor(
    private navbarService: NavbarService,
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter(): void {
    this.navbarService.setVisibility(false);
    this.formGroup = undefined;
    this.getCompany();
  }

  ionViewWillLeave(): void {
    this.navbarService.setVisibility(true);
  }

  /**
   * Guarda los cambios.
   */
  async save(): Promise<void> {
    if (this.formGroup.invalid) {
      const alert = await this.alertCtrl.create({
        header: 'Atención',
        mode: 'ios',
        message: 'Compruebe el correcto diligenciamiento de TODOS los campos obligatorios.',
        buttons: ['ACEPTAR'],
      });

      await alert.present();

      return;
    }

    const value = this.formGroup.value;

    const contacto = {
      strPapelRespresentacion: value.representacion.value,
      strSiglaTipoDoc: value.tipoDocumento.label,
      strNumeroDocumento: value.numeroDocumento,
      strPrimerNombre: value.primerNombre,
      strSegundoNombre: value.segundoNombre,
      strPrimerApellido: value.primerApellido,
      strSegundoApellido: value.segundoApellido,
      strSexo: value.sexo.value,
      strCelular: value.celular,
      strTelefono: value.telefono,
      strEmail: value.correo,
      intTipoDocumento: value.tipoDocumento.value,
    };

    const contactos = this.company.listaPersonasContacto ?? [];
    const index = contactos.findIndex((c: any) => c.strNumeroDocumento === contacto.strNumeroDocumento);

    if (index > -1) {
      contactos[index] = contacto;
    } else {
      contactos.push(contacto);
    }

    this.company.listaPersonasContacto = contactos;

    const updated = this.company.__updated ?? [];
    const found = updated.find((m: string) => m === 'contact-data');

    if (!found) {
      updated.push('contact-data');
      this.company.__updated = updated;
    }

    this.cancel();
  }

  /**
   * Cancela la edición de la empresa.
   */
  cancel(): void {
    const id = this.route.snapshot.params.id;
    this.router.navigate([`/u/companies/list/${id}/contact-list`], { replaceUrl: true });
  }

  /**
   * Establece la empresa de la vista de edición de datos de empresa.
   */
  private async getCompany(): Promise<void> {
    const id = +this.route.snapshot.params.id;

    try {
      this.company = await this.companiesService.prepareCompany(id);
    } catch {
      this.company = this.companiesService.company;
    }

    if (!this.company) {
      this.cancel();

      return;
    }

    this.initForm();
  }

  /**
   * Inicializa el formulario.
   */
  private initForm(): void {
    const contact = this.getCurrentContact();

    const representacion = this.TIPOS_REPRESENTACION.find(r => r.value === contact.strPapelRespresentacion);
    const representacionControl = new FormControl(representacion, [Validators.required]);

    const tipoDocumento = this.TIPOS_DOCUMENTO.find(d => d.value === contact.intTipoDocumento);
    const tipoDocumentoControl = new FormControl(tipoDocumento, [Validators.required]);

    const numeroDocumentoControl = new FormControl(contact.strNumeroDocumento, [Validators.required]);
    const primerNombreControl = new FormControl(contact.strPrimerNombre, [Validators.required]);
    const segundoNombreControl = new FormControl(contact.strSegundoNombre);
    const primerApellidoControl = new FormControl(contact.strPrimerApellido, [Validators.required]);
    const segundoApellidoControl = new FormControl(contact.strSegundoApellido);

    const sexo = this.TIPOS_SEXO.find(s => s.value === contact.strSexo);
    const sexoControl = new FormControl(sexo, [Validators.required]);

    const correoControl = new FormControl(contact.strEmail, [Validators.required, Validators.pattern(this.EMAIL_REGEX)]);
    const celularControl = new FormControl(contact.strCelular, [Validators.required, Validators.pattern(/^3\d{9}$/)]);
    const telefonoControl = new FormControl(contact.strTelefono, [Validators.required, Validators.pattern(/^\d{7,10}$/)]);

    this.formGroup = new FormGroup({
      representacion: representacionControl,
      tipoDocumento: tipoDocumentoControl,
      numeroDocumento: numeroDocumentoControl,
      primerNombre: primerNombreControl,
      segundoNombre: segundoNombreControl,
      primerApellido: primerApellidoControl,
      segundoApellido: segundoApellidoControl,
      sexo: sexoControl,
      correo: correoControl,
      celular: celularControl,
      telefono: telefonoControl,
    });
  }

  /**
   * Obtiene el contacto que se va a editar, si se trata de una edición.
   */
  private getCurrentContact(): any {
    const documento = this.route.snapshot.queryParams.id;

    if (!documento) {
      return {};
    }

    const contactos = this.company.listaPersonasContacto ?? [];
    const contacto = contactos.find((c: any) => c.strNumeroDocumento === documento);

    return contacto || {};
  }
}
