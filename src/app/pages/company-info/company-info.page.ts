import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CacheService } from '../../services/cache/cache.service';
// import { AppStorageService } from 'src/app/app-storage.service';
import { Storage } from '@ionic/storage-angular';;
import { GeolocationService } from 'src/app/services/geolocation/geolocation.service';
import { GeolocationResult } from 'src/app/intarfaces/interfaces';

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
    // private appStorage: AppStorageService,
    private storage: Storage,
    public alertController: AlertController,
    private router: Router,
    private geolocationSv: GeolocationService
  ) {}

  async ionViewWillEnter() {
    this.infoCompany = JSON.parse(sessionStorage.companySelected);

    // 🟢 Migrado a AppStorageService
    this.departments = await this.storage.get('departamentos');
    this.cities = await this.storage.get('municipios');

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
  const location = await this.geolocationSv.getGeolocation();

  if (location.success && location.coords) {
    this.coords = `${location.coords.lat},${location.coords.lng}`;
    this.formInfoCompany.controls.locationCompany.setValue(this.coords);
  } else {
    // Mostrar alerta según el tipo de error
    await this.showGeolocationError(location);
    
    // Limpiar validadores
    this.formInfoCompany.controls.locationCompany.setValue('');
    this.formInfoCompany.controls.locationCompany.clearValidators();
    this.formInfoCompany.controls.locationCompany.updateValueAndValidity();
  }
}

private async showGeolocationError(location: GeolocationResult) {
  let message = location.error || 'Error desconocido al obtener la ubicación';
  
  if (location.errorCode === 'PERMISSION_DENIED') {
    message = 'Permiso de ubicación denegado. Active los permisos en la configuración de su dispositivo.';
  } else if (location.errorCode === 'NOT_SUPPORTED') {
    message = 'La geolocalización no está disponible en este dispositivo.';
  }

  const alert = await this.alertController.create({
    header: 'Atención',
    backdropDismiss: false,
    mode: 'ios',
    message: message,
    buttons: ['ACEPTAR']
  });

  await alert.present();
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
