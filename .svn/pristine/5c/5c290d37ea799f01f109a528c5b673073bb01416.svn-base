import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TalkService } from '../../../services/talk/talk.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-communications',
  templateUrl: './list-communications.page.html',
  styleUrls: ['./list-communications.page.scss'],
})
export class ListCommunicationsPage implements OnInit, OnDestroy {

  /**
   * formConsultEvent, es el formulario de consultar el evento.
   */
  formConsultComunicaciones: FormGroup;

  /**
   * Este componente carga la lista de las comunicaciones vigentes para el dia de hoy
   */

  minDate = new  Date();

  customActionSheetOptions: any = {
    header: 'Temas de conversaciín',
    subHeader: 'Seleccione el tema de conversación'
  };

  talks: any;

  temasComunicacion: any;
  temaSeleccionado: string ;
  infoUser: any;

  rolesVisualizarHistoricos: any[] = [];

  private paramsSubscription: Subscription;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private storage: Storage,
              private talkService: TalkService,
              private route: ActivatedRoute) { }

  async ngOnInit() {

    this.createFormConsultComunication();
    this.infoUser = await this.storage.get('sesion');
    this.getTemasComunicacion();
  }

  ionViewDidEnter() {
    this.getListTalks();
  }

  ionViewDidLeave() {
    this.paramsSubscription.unsubscribe();
  }

  ngOnDestroy(): void {

  }

  createFormConsultComunication() {
    this.formConsultComunicaciones = this.formBuilder.group({
      razonSocial: [''],
      temaComunicacion: [''],
      fechaInicial: [''],
      fechaFinal: ['']
    });
  }

  /**
   * Obtener los temas de comunicación
   */
  getTemasComunicacion() {
    this.talkService.getTemasComunicacion().subscribe(response => {
      this.temasComunicacion = response.temas;
      // Guardar los roles que solo sirven para visualizar las comunicaciones y no permiten participar en las comunicaciones
      this.talkService.saveRolesHistoricos(response.RolVisHis);
    });
  }

  /**
   * Metodo cuando cambia el select de los temas seleccionados
   */
  selectedTopic(event) {
    this.temaSeleccionado = '';
    this.temaSeleccionado = event.detail.value;
  }

  /**
   * Buscar comunicaciones cuidado con el usuario que esta quemado
   */
  buscarComunicacion() {
    const informacion = this.formConsultComunicaciones.value;
    let temaComunicacion;
    let fechaInicio;
    let fechaFinal;
    if (informacion.temaComunicacion === '') {
      temaComunicacion = '-1';
    } else {
      temaComunicacion = informacion.temaComunicacion;
    }
    if ( informacion.fechaInicial === '' ) {
      fechaInicio = '';
    } else {
      const fechaInicioIngresada = informacion.fechaInicial._d.toISOString().split('T')[0];
      const fechaInicialIng = fechaInicioIngresada.split('-');
      const fechaModificada = fechaInicialIng[2].concat('/').concat(fechaInicialIng[1]).concat('/').concat(fechaInicialIng[0]);
      fechaInicio = fechaModificada;
    }

    if ( informacion.fechaFinal === '' ) {
      fechaFinal = '';
    } else {
      const fechaFinalIngresada = informacion.fechaFinal._d.toISOString().split('T')[0];
      const fechaFinalIng = fechaFinalIngresada.split('-');
      const fechaModificada = fechaFinalIng[2].concat('/').concat(fechaFinalIng[1]).concat('/').concat(fechaFinalIng[0]);
      fechaFinal = fechaModificada;
    }

    this.talkService.searchComunicacion(informacion.razonSocial, temaComunicacion,
                                        // tslint:disable-next-line: max-line-length
                                        fechaInicio, fechaFinal, this.infoUser.idRegistro, this.infoUser.idRol).subscribe(response => {
        if (response.IsOk === true) {

          this.talks = response.Respuesta;

          // this.formConsultComunicaciones.get('fechaInicial').reset();
          // this.formConsultComunicaciones.get('fechaFinal').reset();

        }
    });
  }

  /**
   * Listar las comunicaciones activas para el día actual.
   */
  getListTalks() {
    const informacion = this.formConsultComunicaciones.value;
    let temaComunicacion;
    if (informacion.temaComunicacion === '') {
      temaComunicacion = '-1';
    } else {
      temaComunicacion = informacion.temaComunicacion;
    }
    let startDate: string = ''; //this.dateToString(informacion.fechaInicial); 
    let endDate: string = ''; //this.dateToString(informacion.fechaFinal);
    this.talkService.searchComunicacion(informacion.razonSocial, temaComunicacion,
                                        // tslint:disable-next-line: max-line-length
                                        startDate, endDate, this.infoUser.idRegistro, this.infoUser.idRol)
      .subscribe(response => {
        if (response.IsOk === true) {
          this.talks = response.Respuesta;

          this.paramsSubscription = this.route.params.subscribe(params => {
            let param = params['communicationId'];
            if (param) {
              let communicationId: number = +param;
              let talk = this.talks.find(talk => talk.PKConversacion == communicationId);
              this.selectTalk(talk);
            }
          });
        }
    });
  }

  private dateToString(date: Date): string {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }


  /**
   * @param selectedTalk este es el metodo que permite seleccionar una conversación para ver los diferentes
   * comentarios que esta tiene.
   */
  selectTalk(selectedTalk) {
    this.talkService.saveSelectedCoversation(selectedTalk);
    this.router.navigateByUrl(`u/talk/${selectedTalk.PKConversacion}`);
  }

  cleanFields(): void {
    this.formConsultComunicaciones.reset();
  }
}
