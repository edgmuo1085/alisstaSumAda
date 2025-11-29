import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TalkService } from '../../../services/talk/talk.service';
import { UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppStorageService } from 'src/app/app-storage.service';

@Component({
  selector: 'app-list-communications',
  templateUrl: './list-communications.page.html',
  styleUrls: ['./list-communications.page.scss'],
})
export class ListCommunicationsPage implements OnInit {
  formConsultComunicaciones: UntypedFormGroup;

  minDate = new Date();
  customActionSheetOptions: any = {
    header: 'Temas de conversaciín',
    subHeader: 'Seleccione el tema de conversación',
  };

  talks: any;
  temasComunicacion: any;
  temaSeleccionado: string;
  infoUser: any;

  rolesVisualizarHistoricos: any[] = [];
  private paramsSubscription: Subscription;

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    private appStorage: AppStorageService,
    private talkService: TalkService,
    private route: ActivatedRoute
  ) {}

  async ngOnInit() {
    this.createFormConsultComunication();
    this.infoUser = await this.appStorage.get(this.appStorage.KEY_SESSION);
    this.getTemasComunicacion();
  }

  ionViewDidEnter() {
    this.getListTalks();
  }

  ionViewDidLeave() {
    this.paramsSubscription?.unsubscribe();
  }

  createFormConsultComunication() {
    this.formConsultComunicaciones = this.formBuilder.group({
      razonSocial: [''],
      temaComunicacion: [''],
      fechaInicial: [''],
      fechaFinal: [''],
    });
  }

  getTemasComunicacion() {
    this.talkService.getTemasComunicacion().subscribe(response => {
      this.temasComunicacion = response.temas;
      this.talkService.saveRolesHistoricos(response.RolVisHis);
    });
  }

  selectedTopic(event) {
    this.temaSeleccionado = event.detail.value;
  }

  buscarComunicacion() {
    const informacion = this.formConsultComunicaciones.value;

    const temaComunicacion = informacion.temaComunicacion || '-1';
    let fechaInicio = '';
    let fechaFinal = '';

    if (informacion.fechaInicial !== '') {
      const fechaInicioIngresada = informacion.fechaInicial._d.toISOString().split('T')[0];
      const [y, m, d] = fechaInicioIngresada.split('-');
      fechaInicio = `${d}/${m}/${y}`;
    }

    if (informacion.fechaFinal !== '') {
      const fechaFinalIngresada = informacion.fechaFinal._d.toISOString().split('T')[0];
      const [y, m, d] = fechaFinalIngresada.split('-');
      fechaFinal = `${d}/${m}/${y}`;
    }

    this.talkService
      .searchComunicacion(
        informacion.razonSocial,
        temaComunicacion,
        fechaInicio,
        fechaFinal,
        this.infoUser.idRegistro,
        this.infoUser.idRol
      )
      .subscribe(response => {
        if (response.IsOk === true) {
          this.talks = response.Respuesta;
        }
      });
  }

  getListTalks() {
    const informacion = this.formConsultComunicaciones.value;
    const temaComunicacion = informacion.temaComunicacion || '-1';

    this.talkService
      .searchComunicacion(
        informacion.razonSocial,
        temaComunicacion,
        '',
        '',
        this.infoUser.idRegistro,
        this.infoUser.idRol
      )
      .subscribe(response => {
        if (response.IsOk === true) {
          this.talks = response.Respuesta;

          this.paramsSubscription = this.route.params.subscribe(params => {
            const param = params['communicationId'];
            if (param) {
              const communicationId: number = +param;
              const talk = this.talks.find(t => t.PKConversacion == communicationId);
              this.selectTalk(talk);
            }
          });
        }
      });
  }

  private dateToString(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  selectTalk(selectedTalk) {
    this.talkService.saveSelectedCoversation(selectedTalk);
    this.router.navigateByUrl(`u/talk/${selectedTalk.PKConversacion}`);
  }

  cleanFields(): void {
    this.formConsultComunicaciones.reset();
  }
}
