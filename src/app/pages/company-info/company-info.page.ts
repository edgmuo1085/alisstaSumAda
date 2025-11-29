import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';
import { CacheService } from '../../services/cache/cache.service';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.page.html',
  styleUrls: ['./company-info.page.scss'],
})
export class CompanyInfoPage {
  infoCompany: any = {};

  formInfoCompany: UntypedFormGroup;

  coords: string;

  departments = [];
  cities = [];
  getCities: any[] = [];

  private readonly COMMENTS_PATH = '/u/execLog/pending-visits/visit-id/company-info/comments';
  private readonly RECOMMENDATION_PATH = '/u/execLog/pending-visits/visit-id/recommendation';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private cacheService: CacheService,
    private appStorage: AppStorageService,
    public alertController: AlertController,
    private router: Router
  ) {}

  async ionViewWillEnter() {
    this.infoCompany = JSON.parse(sessionStorage.companySelected);

    // 🟢 Migrado a AppStorageService
    this.departments = await this.appStorage.get('departamentos');
    this.cities = await this.appStorage.get('municipios');

    const departamento = {
      detail: {
        value: this.infoCompany.departamentoDescripcion,
      },
    };
    this.changeDepartment(departamento);
  }

  ionViewDidEnter() {
    this.createFormInfoCompany();

    const infoCompany = this.cacheService.getSaveInfoCompany();

    this.formInfoCompany.patchValue({
      addressCompany: this.infoCompany.direccion,
      phoneContact: this.infoCompany.telefonoContacto,
      Department: this.infoCompany.departamentoDescripcion,
      municipality: this.infoCompany.minicipioDescripcion,
    });

    if (!!infoCompany.latitud && !!infoCompany.longitud) {
      this.formInfoCompany.controls.locationCompany.setValue(`${infoCompany.latitud},${infoCompany.longitud}`);
    }
  }

  createFormInfoCompany() {
    this.formInfoCompany = this.formBuilder.group({
      addressCompany: ['', Validators.required],
      phoneContact: ['', Validators.required],
      Department: ['', Validators.required],
      municipality: ['', Validators.required],
      locationCompany: ['', Validators.required],
    });
  }

  async getGeolocation() {
    try {
      const permission = await Geolocation.requestPermissions();

      if (permission.location !== 'granted') {
        throw new Error('Permisos de ubicación no concedidos');
      }

      const response = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000,
      });

      this.coords = response.coords.latitude + ',' + response.coords.longitude;
      this.formInfoCompany.controls.locationCompany.setValue(this.coords);
    } catch (error: any) {

      if (error.message?.includes('denied') || error.code === 'NOT_AUTHORIZED') {
        const alert = await this.alertController.create({
          header: 'Atención',
          backdropDismiss: false,
          mode: 'ios',
          message: 'No se ha podido determinar la ubicación de su dispositivo. Intente nuevamente.',
          buttons: ['ACEPTAR'],
        });

        await alert.present();
      } else {
        this.formInfoCompany.controls.locationCompany.clearValidators();
        this.formInfoCompany.controls.locationCompany.updateValueAndValidity();
      }
    }
  }

  changeDepartment(event) {
    const departmentSelected = event.detail.value;
    this.getCities = this.cities.filter(x => x.NombreDepartamento === departmentSelected);
  }

  async showAlertInfoCompany() {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'Alerta',
      message: 'Todos los campos son obligatorios.',
      buttons: ['ACEPTAR'],
    });

    await alert.present();
  }

  next() {
    if (this.formInfoCompany.invalid) {
      this.showAlertInfoCompany();
      return;
    }

    const depart = this.departments.find(dep => dep.Nombre === this.formInfoCompany.value.Department);
    const departId = depart.IdDepartamento;

    const munic = this.cities.find(munic => munic.NombreDepartamento === this.formInfoCompany.value.Department);
    const municipioId = munic.IdMunicipio;

    const coordenadas = this.formInfoCompany.value.locationCompany.split(',');

    const infoCompanySelected = {
      nombre: this.infoCompany.name,
      tipoDocumento: this.infoCompany.tipoDocumentoDescripcion,
      numeroDocumento: this.infoCompany.numeroDocumento,
      direccion: this.formInfoCompany.value.addressCompany,
      latitud: coordenadas[0],
      longitud: coordenadas[1],
      telefono: this.formInfoCompany.value.phoneContact,
      emailContacto: this.infoCompany.emailContacto ?? null,
      departamento: this.formInfoCompany.value.Department,
      departamentoId: departId,
      municipio: this.formInfoCompany.value.municipality,
      municipioId: municipioId,
    };

    this.cacheService.saveInfoCompany(infoCompanySelected);

    const path = this.getNextPage();
    this.router.navigateByUrl(path);
  }

  private getNextPage(): string {
    const actividadesSeleccionadas = this.cacheService.activitiesSelectedForExec;
    const found = actividadesSeleccionadas.find(a => a.siniestro);
    return found ? `${this.RECOMMENDATION_PATH}/${found.id}` : this.COMMENTS_PATH;
  }
}
