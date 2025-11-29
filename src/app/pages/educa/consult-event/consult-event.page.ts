import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController, LoadingController } from '@ionic/angular';
import { ResponsableEvento } from 'src/app/intarfaces/interfaces';
import { CacheService } from '../../../services/cache/cache.service';
import { EventService } from '../../../services/event/event.service';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-consult-event',
  templateUrl: './consult-event.page.html',
  styleUrls: ['./consult-event.page.scss'],
})
export class ConsultEventPage {
  formConsultEvent: UntypedFormGroup;

  dateEvent: string;
  dateMin = Date();

  branchOffices: any[] = [];
  municipalities: any[] = [];
  eventsBranchOffice: any[] = [];

  loading: HTMLIonLoadingElement | null = null;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private eventService: EventService,
    private cacheService: CacheService,
    private loadingCtlr: LoadingController,
    private storage: AppStorageService,
    private alertController: AlertController,
    private router: Router
  ) {}

  ionViewWillEnter() {
    this.dateEvent = new Date().toISOString();
    this.dateMin = this.dateEvent.split('T')[0];
  }

  ionViewDidEnter() {
    this.createFormConsultEvent();
    this.getBranchsEvent();
  }

  /** Crear formulario */
  createFormConsultEvent() {
    this.formConsultEvent = this.formBuilder.group({
      dateEvent: [{ value: this.dateEvent, disabled: true }, Validators.required],
      branchOffice: ['', Validators.required],
      municipality: ['', Validators.required],
      event: ['', Validators.required],
      geo: [false, Validators.required],
      geoText: ['']
    });
  }

  /** Loading */
  async presentLoading(message = 'Cargando') {
    this.loading = await this.loadingCtlr.create({ mode: 'ios', message });
    await this.loading.present();
  }

  async dismissLoading() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }

  /** Cargar sucursales */
  async getBranchsEvent() {
    await this.presentLoading();

    this.eventService.getBranchOfficeEvent().subscribe({
      next: res => {
        this.branchOffices = res.Sucursales || [];
        this.dismissLoading();
      },
      error: () => this.dismissLoading()
    });
  }

  /** Seleccionar sucursal */
  async selectedBranchOffice(ev: any) {
    const branchOfficeId = ev.detail.value;
    if (!branchOfficeId) return;

    await this.presentLoading();

    this.eventService.getMunicipyBrachOffice(branchOfficeId).subscribe({
      next: res => {
        this.municipalities = res.Municipios || [];
        this.dismissLoading();
      },
      error: () => this.dismissLoading()
    });
  }

  /** Seleccionar municipio */
  async selectedMunicipy(ev: any) {
    const municipyId = ev.detail.value;
    if (!municipyId) return;

    await this.presentLoading();

    this.eventService.getEventForMunicipy(municipyId).subscribe({
      next: res => {
        this.eventsBranchOffice = res.Eventos || [];
        this.dismissLoading();
      },
      error: () => this.dismissLoading()
    });
  }

  /** Registrar evento */
  async selectEvent() {
    const sesion = await this.storage.get(this.storage.KEY_SESSION);   // ← MIGRADO CORRECTO

    if (!sesion || !this.formConsultEvent.valid) {
      return this.Alert();
    }

    sessionStorage.nombreEvento = this.formConsultEvent.value.event?.Evento;

    const payload: ResponsableEvento = {
      FK_ID_Evento: this.formConsultEvent.value.event.Fk_Id_Evento,
      strDocumentoUsuario: sesion.idPersona,
      dtmFechaRegistro: this.formConsultEvent.controls.dateEvent.value,
      strGeoposicionamiento: this.formConsultEvent.value.geoText
    };

    this.cacheService.saveRegisterEvent(payload);

    this.eventService.createEventResponsible(payload).subscribe({
      next: () => this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent'),
      error: () => this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent')
    });

    this.formConsultEvent.reset({ geo: false });
  }

  /** Geolocalización */
  async changeGeo(event: any) {
    if (!event.detail.checked) {
      this.formConsultEvent.controls.geoText.setValue('');
      return;
    }

    await this.presentLoading('Obteniendo ubicación...');

    try {
      const permission = await Geolocation.requestPermissions();
      if (permission.location !== 'granted') {
        throw new Error();
      }

      const pos = await Geolocation.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 10000
      });

      const coords = `${pos.coords.latitude},${pos.coords.longitude}`;
      this.formConsultEvent.controls.geoText.setValue(coords);
    } catch {
      this.formConsultEvent.controls.geo.setValue(false);
      this.formConsultEvent.controls.geoText.setValue('');
    }

    await this.dismissLoading();
  }

  /** Alert */
  async Alert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      mode: 'ios',
      message: 'Todos los campos son obligatorios.',
      buttons: ['ACEPTAR'],
    });
    await alert.present();
  }
}
