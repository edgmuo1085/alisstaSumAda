import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { CacheService } from '../../services/cache/cache.service';

@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.page.html',
  styleUrls: ['./company-info.page.scss'],
})
export class CompanyInfoPage implements OnInit {
  infoCompany: any = {};

  formInfoCompany: FormGroup;

  coords: string;

  // departments = DEPARTMENTS;
  departments = [];

  // cities = CITIES;
  cities = [];

  getCities: any[] = [];

  /**
   * Ruta de la vista de comentarios.
   */
  private readonly COMMENTS_PATH = '/u/execLog/pending-visits/visit-id/company-info/comments';

  /**
   * Ruta de la vista de recomendaciones.
   */
  private readonly RECOMMENDATION_PATH = '/u/execLog/pending-visits/visit-id/recommendation';

  constructor(
    private formBuilder: FormBuilder,
    private geolocation: Geolocation,
    private cacheService: CacheService,
    private storage: Storage,
    public alertController: AlertController,
    private router: Router
  ) {}

  async ionViewWillEnter() {
    this.infoCompany = JSON.parse(sessionStorage.companySelected);
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

  ngOnInit() {}

  createFormInfoCompany() {
    this.formInfoCompany = this.formBuilder.group({
      addressCompany: ['', Validators.required],
      phoneContact: ['', Validators.required],
      Department: ['', Validators.required],
      municipality: ['', Validators.required],
      locationCompany: ['', Validators.required],
    });
  }

  getGeolocation() {
    this.geolocation
      .getCurrentPosition()
      .then(response => {
        this.coords = response.coords.latitude + ',' + response.coords.longitude;
        this.formInfoCompany.controls.locationCompany.setValue(this.coords);
      })
      .catch(async error => {
        if (error.code === 1) {
          // Si se produce un error de este tipo es porque se está intentando acceder al servicio
          // de ubicación desde un origen inseguro. Se asume que entonces se está ejecutando la aplicación
          // desde el servidor de desarrollo de Ionic. A continuación se invalida la obligatoriedad para
          // este campo

          this.formInfoCompany.controls.locationCompany.clearValidators();
          this.formInfoCompany.controls.locationCompany.updateValueAndValidity();

          return;
        }

        const alert = await this.alertController.create({
          header: 'Atención',
          backdropDismiss: false,
          mode: 'ios',
          message: 'No se ha podido determinar la ubicación de su dispositivo. Intente nuevamente.',
          buttons: ['ACEPTAR'],
        });

        alert.present();
      });
  }

  changeDepartment(event) {
    const departmentSelected = event.detail.value;
    this.getCities = [];
    const result = this.cities.filter(x => x.NombreDepartamento === departmentSelected);
    this.getCities = result;
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
      emailContacto: this.formInfoCompany.value.emailContact,
      departamento: this.formInfoCompany.value.Department,
      departamentoId: departId,
      municipio: this.formInfoCompany.value.municipality,
      municipioId: municipioId,
    };

    this.cacheService.saveInfoCompany(infoCompanySelected);
    const path = this.getNextPage();
    this.router.navigateByUrl(path);
  }

  /**
   * Determina la ruta de la siguiente página de acuerdo a si en el conjunto de actividades
   * seleccionada existe alguna con recomendaciones, por lo que hay que mostrar el formulario
   * de recomendaciones. De no existir ninguna, sigue a la vista de comentarios de la visita.
   */
  private getNextPage(): string {
    const actividadesSeleccionadas = this.cacheService.activitiesSelectedForExec;
    const found = actividadesSeleccionadas.find(a => a.siniestro);
    const path = found ? `${this.RECOMMENDATION_PATH}/${found.id}` : this.COMMENTS_PATH;

    return path;
  }
}
