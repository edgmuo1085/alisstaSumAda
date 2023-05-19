import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { NavbarService } from '../../navbar/navbar.service';

/**
 * Componente para la vista de edición de datos de empresa.
 */
@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.page.html',
  styleUrls: ['./edit-company.page.scss'],
})
export class EditCompanyPage {

  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Compañía actual.
   */
  company: any;

  /**
   * Listado de departamentos.
   */
  departamentos: any[];

  /**
   * Listado de municipios.
   */
  municipios: any[];

  /**
   * Expresión regular para validar correos electrónicos.
   */
  readonly EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  /**
   * Indicadores de zona.
   */
  readonly TIPOS_ZONA = [
    { label: 'Urbana', value: 'U' },
    { label: 'Rural', value: 'R' }
  ];

  /**
   * Expresión regular para validar números de teléfono celular.
   */
  private readonly CELLPHONE_REGEX = /^3[\d]{9}$/;

   /**
   * Expresión regular para validar solo números.
   */
    private readonly NUMBER_ONLY = /^[0-9]{10}$/;


  /**
   * Expresión regular para validar números de teléfono fijo.
   */
  private readonly TEL_REGEX = /^[\d]{7,10}$/;

  /**
   * Expresión regular para código postal.
   */
  private readonly ZIPCODE_REGEX = /^[\d]{6}$/;

  /**
   * Textos de ayuda.
   */
   private readonly HINTS = {
    direccion: {
      text: 'al dar clic tendrá la posibilidad de actualizar la dirección de la sede principal.',
      highlightedText: 'Estimado usuario: '
    }
  };

  constructor(
    private navbarService: NavbarService,
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router,
    private alertCtrl: AlertController,
    private popoverCtrl: PopoverController
  ) { }

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
        buttons: ['ACEPTAR']
      });

      await alert.present();

      return;
    }

    const value = this.formGroup.value;
    this.company.eDSedesActualizadas.srtIndicadorZona = value.indicadorZona;
    this.company.strCelular = value.celular;
    this.company.strTelefono = value.telefonoNotificacion;
    this.company.eDSedesActualizadas.strTelefono = this.company.strTelefono;
    this.company.eDSedesActualizadas.strCelular = this.company.strCelular;
    this.company.strCorreoElectronico = value.correo;
    this.company.eDSedesActualizadas.strCorreoElectronico = this.company.strCorreoElectronico;
    this.company.eDSedesActualizadas.strCodigoPostal = value.codigoPostal;
    this.company.strCodigoPostal = this.company.eDSedesActualizadas.strCodigoPostal;
    this.company.eDSedesActualizadas.Fk_Id_Departamento = value.departamentoSede.Pk_Id_Departamento;
    this.company.eDSedesActualizadas.Nombre_Departamento_Sede = value.departamentoSede.Nombre_Departamento;
    this.company.Fk_Id_Departamento = this.company.eDSedesActualizadas.Fk_Id_Departamento;
    this.company.Nombre_Departamento = this.company.eDSedesActualizadas.Nombre_Departamento_Sede;
    this.company.eDSedesActualizadas.Fk_Id_Municipio = value.municipioSede.IdMunicipio;
    this.company.eDSedesActualizadas.Nombre_Municipio_Sede = value.municipioSede.NombreMunicipio;
    this.company.Fk_Id_Municipio = this.company.eDSedesActualizadas.Fk_Id_Municipio;
    this.company.Nombre_Municipio = this.company.eDSedesActualizadas.Nombre_Municipio_Sede;

    const updated = this.company.__updated ?? [];
    const found = updated.find((m: string) => m === 'company-data');

    if (!found) {
      updated.push('company-data');
      this.company.__updated = updated;
    }

    this.cancel();
  }

  /**
   * Cancela la edición de la empresa.
   */
  cancel(): void {
    const id = this.route.snapshot.params.id;
    this.router.navigate([`/u/companies/list/${id}`], { replaceUrl: true });
  }

  /**
   * Al cambiar un departamento, se restablece el control para el municipio también.
   */
  changeDepartamento(): void {
    this.formGroup.controls.municipioSede.reset();
  }

  /**
   * Comparación de objetos para establecer valores en selectores de municipios y departamentos.
   *
   * @param mode Modo.
   */
  compareWith(mode: 'departamento' | 'municipio'): (a: any, b: any) => boolean {
    const key = mode === 'departamento' ? 'Pk_Id_Departamento' : 'IdMunicipio';

    return (a: any, b: any) => {
      return a && b ? a[key] === b[key] : a === b;
    };
  }

  async showPopover(event: any, field: string): Promise<void> {
    const popover = await this.popoverCtrl.create({
      event,
      component: PopoverComponent,
      componentProps: { text: this.HINTS[field].text, highlightedText: this.HINTS[field].highlightedText }
    });

    await popover.present();
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

    this.departamentos = await this.companiesService.departamentos;
    this.municipios = await this.companiesService.municipios;
    this.initForm();
  }

  /**
   * Inicializa el formulario.
   */
  private initForm(): void {
    const identificacionEmpresa = `${this.company.str_Sigla_Documento} ${this.company.strNumeroDcto}`;
    const identificacionEmpresaControl = new FormControl({ value: identificacionEmpresa, disabled: true });

    const razonSocialEmpresaControl = new FormControl({ value: this.company.strRazonSocial, disabled: true });

    const idSedeControl = new FormControl({ value: this.company.eDSedesActualizadas.strNombreSede, disabled: true });

    const direccionSedeControl = new FormControl(this.company.eDSedesActualizadas.strDireccion, [Validators.required]);

    const indicadorZonaControl = new FormControl(this.company.eDSedesActualizadas.srtIndicadorZona, [Validators.required]);

    const departamento = {
      Pk_Id_Departamento: this.company.eDSedesActualizadas.Fk_Id_Departamento,
      Nombre_Departamento: this.company.eDSedesActualizadas.Nombre_Departamento_Sede
    };

    const departamentoSedeControl = new FormControl(departamento, [Validators.required]);

    const municipio = {
      IdMunicipio: this.company.eDSedesActualizadas.Fk_Id_Municipio,
      NombreMunicipio: this.company.eDSedesActualizadas.Nombre_Municipio_Sede
    };

    const municipioSedeControl = new FormControl(municipio, [Validators.required]);

    const estadoSedeControl = new FormControl({ value: this.company.eDSedesActualizadas.strNombreSede, disabled: true });

    const actividadEconomica = `${this.company.strCodigoActividadEconomica} ${this.company.strActividadEconomicaNombre}`;
    const actividadEconomicaControl = new FormControl({ value: actividadEconomica, disabled: true });

    const sectorEconomicoControl = new FormControl({ value: this.company.strDescripcionSectorEconomico, disabled: true });

    const celularControl = new FormControl(this.company.strCelular, [Validators.pattern(this.CELLPHONE_REGEX), Validators.pattern(this.NUMBER_ONLY), Validators.maxLength(10)]);

    const telefonoNotificacionControl = new FormControl(this.company.strTelefono, [Validators.pattern(this.TEL_REGEX), Validators.pattern(this.NUMBER_ONLY), Validators.maxLength(10)]);

    const correoControl = new FormControl(this.company.strCorreoElectronico, [Validators.required, Validators.pattern(this.EMAIL_REGEX)]);

    const codigoPostalControl = new FormControl(this.company.eDSedesActualizadas.strCodigoPostal, [Validators.pattern(this.ZIPCODE_REGEX)]);

    const identificacionRepresentante = `${this.company.strSiglaRepresentanteLegal} ${this.company.strNumeroDcto_Representant_Legal}`;
    const identificacionRepresentanteControl = new FormControl({ value: identificacionRepresentante, disabled: true });

    const representanteLegalControl = new FormControl({ value: this.company.strNombre_Representant_Legal, disabled: true });

    this.formGroup = new FormGroup({
      identificacionEmpresa: identificacionEmpresaControl,
      razonSocialEmpresa: razonSocialEmpresaControl,
      idSede: idSedeControl,
      direccionSede: direccionSedeControl,
      indicadorZona: indicadorZonaControl,
      departamentoSede: departamentoSedeControl,
      municipioSede: municipioSedeControl,
      estadoSede: estadoSedeControl,
      actividadEconomica: actividadEconomicaControl,
      sectorEconomico: sectorEconomicoControl,
      celular: celularControl,
      telefonoNotificacion: telefonoNotificacionControl,
      correo: correoControl,
      codigoPostal: codigoPostalControl,
      identificacionRepresentante: identificacionRepresentanteControl,
      representanteLegal: representanteLegalControl
    });
  }

}
