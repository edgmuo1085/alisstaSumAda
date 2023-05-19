import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { responsableEvento } from 'src/app/intarfaces/interfaces';
import { CacheService } from '../../../services/cache/cache.service';
import { EventService } from '../../../services/event/event.service';

@Component({
  selector: 'app-consult-event',
  templateUrl: './consult-event.page.html',
  styleUrls: ['./consult-event.page.scss'],
})
export class ConsultEventPage implements OnInit {


  /**
   * formConsultEvent, es el formulario de consultar el evento.
   */
  formConsultEvent: FormGroup;

  /**
   * dataEvent, la variable de la fecha actual del sistema
   * dateMin, para validar que el usuario no seleccione una fecha pasada
   * customPickerOptions, para que las opciones del iondatetime sean personalizadas.
   */
  dateEvent;
  dateMin = Date();
  customPickerOption: any;
  months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


  /**
   * Variable que almacenara las sucursales
   */
  branchOffices: any[] = [];

  /**
   * Variable que almacena los municipios
   */
  municipalities: any[] = [];

  /**
   * Variable que almacena los eventos
   */
  eventsBranchOffice: any[] = [];
  eventSelectedList: any;

  loading: any;


  constructor(private formBuilder: FormBuilder,
    private eventService: EventService,
    private cacheService: CacheService,
    private loadingCtlr: LoadingController,
    private storage: Storage,
    private alertController: AlertController,
    private geolocation: Geolocation,
    private router: Router) { }

  ionViewWillEnter() {
    this.dateEvent = new Date().toISOString();
    this.dateMin = this.dateEvent.split('T')[0];
  }

  ionViewDidEnter() {
    this.createFormConsultEvent();
    this.getBranchsEvent();
  }

  ngOnInit() {

  }

  /**
   * Método para crear el formulario para consultar el evento
   */

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


  /**
   * Cargar las sucursales de los eventos acorde a la fecha del sistema
   */
  async getBranchsEvent(): Promise<void> {
    await this.presentLoading();

    setTimeout(() => {
      this.eventService.getBranchOfficeEvent()
        .subscribe((response) => {
          this.branchOffices = response.Sucursales;
          this.loading.dismiss();
        }, err => {
          this.loading.dismiss();
        });
    }, 1500);
  }

  /**
   * Cuando seleccionan una sucursal y de esta manera cargan los municipios
   */
  async selectedBranchOffice(branchSelected: any): Promise<void> {
    const branchOfficeId = branchSelected.detail.value;

    if ([undefined, null, ''].indexOf(branchOfficeId) > -1) {
      return;
    }

    await this.presentLoading();

    setTimeout(() => {
      this.eventService.getMunicipyBrachOffice(branchOfficeId)
        .subscribe((response) => {
          this.municipalities = [];
          this.municipalities = response.Municipios;
          this.loading.dismiss();
        }, err => {
          this.loading.dismiss();
        });
    }, 1500);
  }


  /**
   * Cuando selecciona un municipio y de esta manera cargan los eventos que hay en el municipio.
   */
  async selectedMunicipy(municipySelected: any): Promise<void> {
    const municipyId = municipySelected.detail.value;

    if ([undefined, null, ''].indexOf(municipyId) > -1) {
      return;
    }

    await this.presentLoading();

    this.eventService.getEventForMunicipy(municipyId)
      .subscribe((response) => {
        this.eventsBranchOffice = [];
        this.eventsBranchOffice = response.Eventos;
        this.loading.dismiss();
      }, err => {
        this.loading.dismiss();
      });

  }



  /**
   * Cuando se se da click a seleccionar al evento para realizar el registro
   * Este metodo primero saca la información del usuario que esta en el storage en una variable llamada sesion
   * Se crea un objeto newRegisterResponsibleEvent el cual se enviara para guardar el registro de
   * responsable del evento, si es exitoso lo redirecciona a selectRegisterEvent
   */
  async selectEvent() {
    const documentUsuarioRegistrado = await this.storage.get('sesion');
    setTimeout(() => {
      sessionStorage.nombreEvento = this.formConsultEvent.value.event.Evento;
      if (this.formConsultEvent.valid) {
        const newRegisterResponsibleEvent: responsableEvento = {
          FK_ID_Evento: this.formConsultEvent.controls.event.value.Fk_Id_Evento,
          strDocumentoUsuario: documentUsuarioRegistrado.idPersona,
          dtmFechaRegistro: this.formConsultEvent.controls.dateEvent.value,
          strGeoposicionamiento: this.formConsultEvent.controls.geoText.value
        };
        this.cacheService.saveRegisterEvent(newRegisterResponsibleEvent);
        this.eventService.createEventResponsible(newRegisterResponsibleEvent)
          .subscribe((response) => {
            this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent');
          }, err => {
            this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent');
          });
        this.formConsultEvent.reset();
      } else {
        this.Alert();
      }
    }, 1000);
  }


  /**
   * Al seleccionar el posicionamiento de geolocalización
   */
  async changeGeo(event): Promise<void> {
    if (event.detail.checked) {
      await this.presentLoading();

      this.geolocation.getCurrentPosition()
        .then((response) => {
          const coords = response.coords.latitude + ',' + response.coords.longitude;
          this.formConsultEvent.controls.geoText.setValue(coords);
          this.loading.dismiss();
        })
        .catch((error) => {
          this.loading.dismiss();
        });
    } else {
      this.formConsultEvent.controls.geoText.setValue('');
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtlr.create({
      mode: 'ios',
      message: 'Cargando',
    });
    return this.loading.present();
  }



  async Alert() {
    const alert = await this.alertController.create({
      header: 'Atención',
      mode: 'ios',
      message: 'Todos los campos son obligatorios.',
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

}
