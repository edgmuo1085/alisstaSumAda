import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { NavbarService } from '../../navbar/navbar.service';

/**
 * Componente para la vista de edición de dirección.
 */
@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.page.html',
  styleUrls: ['./edit-address.page.scss'],
})
export class EditAddressPage {
  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Compañía actual.
   */
  company: any;

  /**
   * Tipos de vía.
   */
  tiposVia: any[];

  /**
   * Tipos de cuadrante.
   */
  tiposCuadrante: any[];

  /**
   * Tipos de complemento.
   */
  complementos: any[];

  /**
   * Tipos de barrio.
   */
  tiposBarrio: any[];

  /**
   * Tipos de urbanización.
   */
  tiposUrbanizacion: any[];

  /**
   * Tipos de manzana.
   */
  tiposManzana: any[];

  /**
   * Tipos de predio.
   */
  tiposPredio: any[];

  /**
   * Indica si mostrar u ocultar la sección de complemento de dirección.
   */
  showComplemento: boolean;

  /**
   * Expresiones regulares para solo números.
   */
  private readonly ONLY_NUMBERS_REGEX = /^\d*$/;

  constructor(
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    private router: Router,
    private navbarService: NavbarService,
    private companiesService: CompaniesService
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
   * Previsualiza la dirección ingresada.
   */
  async preview(): Promise<void> {
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
    let direccion = '';

    Object.entries(value).forEach(([k, v]) => {
      let currentValue: string;

      if (typeof v === 'object') {
        currentValue = (v as any)?.strSigla ?? '';
      } else {
        currentValue = (v as string) ?? '';
      }

      direccion += ` ${currentValue}`;
    });

    direccion = direccion.replace(/\-|(numero|número|num|no|n)(\s|\.|\d)|\.|\,|\;|\#|\&|/gi, '');
    direccion = direccion.replace(/\s{2,}/gi, ' ');
    direccion = direccion.replace(/á/, 'a');
    direccion = direccion.replace(/é/, 'e');
    direccion = direccion.replace(/í/, 'i');
    direccion = direccion.replace(/ó/, 'o');
    direccion = direccion.replace(/ú/, 'u');
    direccion = direccion.trim();
    direccion = direccion.toUpperCase();

    const alert = await this.alertCtrl.create({
      header: 'Compruebe la dirección',
      mode: 'ios',
      message: direccion,
      buttons: [
        { text: 'Confirmar', role: 'confirm', handler: () => this.save(direccion) },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });

    await alert.present();
  }

  /**
   * Guarda los cambios.
   *
   * @param direccion Dirección.
   */
  save(direccion: string): void {
    this.company.strDireccion = direccion;
    this.company.eDSedesActualizadas.strDireccion = this.company.strDireccion;

    const updated = this.company.__updated ?? [];
    const found = updated.find((m: string) => m === 'company-data');

    if (!found) {
      updated.push('company-data');
      this.company.__updated = updated;
    }

    this.cancel();
  }

  /**
   * Cancela la edición de la dirección.
   */
  cancel(): void {
    const id = this.route.snapshot.params.id;
    this.router.navigate([`/u/companies/list/${id}/edit-company`], { replaceUrl: true });
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

    this.tiposVia = await this.companiesService.vias;
    this.tiposCuadrante = await this.companiesService.cuadrantes;
    this.complementos = await this.companiesService.complementos;
    this.tiposBarrio = await this.companiesService.barrios;
    this.tiposUrbanizacion = await this.companiesService.urbanizaciones;
    this.tiposManzana = await this.companiesService.manzanas;
    this.tiposPredio = await this.companiesService.predios;
    this.initForm();
  }

  /**
   * Inicializa el formulario.
   */
  private initForm(): void {
    const tipoViaControl = new FormControl(undefined);
    const numeroViaControl = new FormControl(undefined);
    const nomenclaturaPrincipalControl = new FormControl(undefined);
    const prefijoControl = new FormControl(undefined);
    const letraPrefijoControl = new FormControl(undefined);
    const cuadranteControl = new FormControl(undefined);
    const viaGeneradoraControl = new FormControl(undefined, [Validators.pattern(this.ONLY_NUMBERS_REGEX)]);
    const letraViaControl = new FormControl(undefined);
    const sufijoControl = new FormControl(undefined);
    const letraSufijoControl = new FormControl(undefined);
    const numeroPlacaControl = new FormControl(undefined, [Validators.pattern(this.ONLY_NUMBERS_REGEX)]);
    const complementoControl = new FormControl(undefined);
    const barrioControl = new FormControl(undefined);
    const nombreBarrioControl = new FormControl(undefined);
    const urbanizacionControl = new FormControl(undefined);
    const nombreUrbanizacionControl = new FormControl(undefined);
    const manzanaControl = new FormControl(undefined);
    const nombreManzanaControl = new FormControl(undefined);
    const veredaControl = new FormControl(undefined);
    const corregimientoControl = new FormControl(undefined);
    const tipoPredioControl = new FormControl(undefined);
    const nombrePredioControl = new FormControl(undefined);

    this.formGroup = new FormGroup({
      tipoVia: tipoViaControl,
      numeroVia: numeroViaControl,
      nomenclaturaPrincipal: nomenclaturaPrincipalControl,
      prefijo: prefijoControl,
      letraPrefijo: letraPrefijoControl,
      cuadrante: cuadranteControl,
      viaGeneradora: viaGeneradoraControl,
      letraVia: letraViaControl,
      sufijo: sufijoControl,
      letraSufijo: letraSufijoControl,
      numeroPlaca: numeroPlacaControl,
      complemento: complementoControl,
      barrio: barrioControl,
      nombreBarrio: nombreBarrioControl,
      urbanizacion: urbanizacionControl,
      nombreUrbanizacion: nombreUrbanizacionControl,
      manzana: manzanaControl,
      nombreManzana: nombreManzanaControl,
      vereda: veredaControl,
      corregimiento: corregimientoControl,
      tipoPredio: tipoPredioControl,
      nombrePredio: nombrePredioControl,
    });
  }
}
