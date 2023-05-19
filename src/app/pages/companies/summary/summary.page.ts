import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { NavbarService } from '../../navbar/navbar.service';

/**
 * Componente para la vista de resumen.
 */
@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage {

  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Listado de departamentos.
   */
  departamentos: any[];

  /**
   * Listado de municipios.
   */
  municipios: any[];

  /**
   * Listado de contactos para esta empresa.
   */
  contacts: any[];

  /**
   * Indicadores de zona.
   */
  readonly TIPOS_ZONA = [
    { label: 'Urbana', value: 'U' },
    { label: 'Rural', value: 'R' }
  ];

  /**
   * Tipos de papel o representación.
   */
  readonly TIPOS_REPRESENTACION = [
    { label: 'Representante Legal', value: 'Representante Legal' },
    { label: 'Reponsable SG-SST', value: 'Reponsable SG-SST' },
    { label: 'Talento Humano', value: 'Talento Humano' }
  ];

  /**
   * Tipos de documento.
   */
  readonly TIPOS_DOCUMENTO = [
    { label: 'CC', value: 'CC' },
    { label: 'CE', value: 'CE' },
    { label: 'PA', value: 'PA' },
    { label: 'PE', value: 'PE' }
  ];

  /**
   * Tipos de sexo.
   */
  readonly TIPOS_SEXO = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' }
  ];

  /**
   * Compañía actual.
   */
  private company: any;

  constructor(
    private navbarService: NavbarService,
    private route: ActivatedRoute,
    private companiesService: CompaniesService,
    private router: Router
  ) { }

  ionViewWillEnter(): void {
    this.navbarService.setVisibility(false);
    this.getCompany();
  }

  ionViewWillLeave(): void {
    this.navbarService.setVisibility(true);
  }

  /**
   * Redirige a la vista de firma.
   */
  next(): void {
    this.router.navigate(['../../../signature'], { relativeTo: this.route });
  }

  /**
   * Redirige a la vista de detalles de esta empresa para permitir la edición de nuevo.
   */
  cancel(): void {
    const id = this.route.snapshot.params.id;
    this.router.navigate([`/u/companies/list/${id}`], { replaceUrl: true });
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

    const razonSocialControl = new FormControl({ value: this.company.strRazonSocial, disabled: true });

    const idSedeControl = new FormControl({ value: this.company.eDSedesActualizadas.strNombreSede, disabled: true });

    const direccionControl = new FormControl({ value: this.company.strDireccion, disabled: true });

    const indicadorZonaControl = new FormControl({ value: this.company.eDSedesActualizadas.srtIndicadorZona, disabled: true });

    const departamento = {
      Pk_Id_Departamento: this.company.eDSedesActualizadas.Fk_Id_Departamento,
      Nombre_Departamento: this.company.eDSedesActualizadas.Nombre_Departamento_Sede
    };

    const departamentoSedeControl = new FormControl({ value: departamento, disabled: true });

    const municipio = {
      IdMunicipio: this.company.eDSedesActualizadas.Fk_Id_Municipio,
      NombreMunicipio: this.company.eDSedesActualizadas.Nombre_Municipio_Sede
    };

    const municipioSedeControl = new FormControl({ value: municipio, disabled: true });

    const estadoSedeControl = new FormControl({ value: this.company.eDSedesActualizadas.strNombreSede, disabled: true });

    const actividadEconomica = `${this.company.strCodigoActividadEconomica} ${this.company.strActividadEconomicaNombre}`;
    const actividadEconomicaControl = new FormControl({ value: actividadEconomica, disabled: true });

    const sectorEconomicoControl = new FormControl({ value: this.company.strDescripcionSectorEconomico, disabled: true });

    const celularControl = new FormControl({ value: this.company.strCelular, disabled: true });

    const telefonoNotificacionControl = new FormControl({ value: this.company.strTelefono, disabled: true });

    const correoControl = new FormControl({ value: this.company.strCorreoElectronico, disabled: true });

    const codigoPostalControl = new FormControl({ value: this.company.eDSedesActualizadas.strCodigoPostal, disabled: true });

    const identificacionRepresentante = `${this.company.strSiglaRepresentanteLegal} ${this.company.strNumeroDcto_Representant_Legal}`;
    const identificacionRepresentanteControl = new FormControl({ value: identificacionRepresentante, disabled: true });

    const representanteLegalControl = new FormControl({ value: this.company.strNombre_Representant_Legal, disabled: true });

    const formGroup = new FormGroup({
      identificacionEmpresa: identificacionEmpresaControl,
      razonSocial: razonSocialControl,
      idSede: idSedeControl,
      direccion: direccionControl,
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

    const contacts: any[] = this.company.listaPersonasContacto ?? [];

    contacts.forEach((c: any, i) => {
      const representacion = this.TIPOS_REPRESENTACION.find(r => r.value === c.strPapelRespresentacion);
      const representacionControl = new FormControl({ value: representacion, disabled: true });

      const tipoDocumento = this.TIPOS_DOCUMENTO.find(d => d.value === c.intTipoDocumento);
      const tipoDocumentoControl = new FormControl({ value: tipoDocumento, disabled: true });

      const numeroDocumentoControl = new FormControl({ value: c.strNumeroDocumento, disabled: true });

      const primerNombreControl = new FormControl({ value: c.strPrimerNombre, disabled: true });

      const segundoNombreControl = new FormControl({ value: c.strSegundoNombre, disabled: true });

      const primerApellidoControl = new FormControl({ value: c.strPrimerApellido, disabled: true });

      const segundoApellidoControl = new FormControl({ value: c.strSegundoApellido, disabled: true });

      const sexo = this.TIPOS_SEXO.find(s => s.value === c.strSexo);
      const sexoControl = new FormControl({ value: sexo, disabled: true });

      const correoControl = new FormControl({ value: c.strEmail, disabled: true });

      const celularControl = new FormControl({ value: c.strCelular, disabled: true });

      const telefonoControl = new FormControl({ value: c.strTelefono, disabled: true });

      formGroup.addControl(`representacion_${i}`, representacionControl);
      formGroup.addControl(`tipoDocumento_${i}`, tipoDocumentoControl);
      formGroup.addControl(`numeroDocumento_${i}`, numeroDocumentoControl);
      formGroup.addControl(`primerNombre_${i}`, primerNombreControl);
      formGroup.addControl(`segundoNombre_${i}`, segundoNombreControl);
      formGroup.addControl(`primerApellido_${i}`, primerApellidoControl);
      formGroup.addControl(`segundoApellido_${i}`, segundoApellidoControl);
      formGroup.addControl(`sexo_${i}`, sexoControl);
      formGroup.addControl(`correo_${i}`, correoControl);
      formGroup.addControl(`celular_${i}`, celularControl);
      formGroup.addControl(`telefono_${i}`, telefonoControl);
    });

    this.contacts = Array.from(Array(contacts.length).keys());
    this.formGroup = formGroup;
  }

}
