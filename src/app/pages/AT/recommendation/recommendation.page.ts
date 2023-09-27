import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { CacheService } from 'src/app/services/cache/cache.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.page.html',
  styleUrls: ['./recommendation.page.scss'],
})
export class RecommendationPage implements OnInit {
  /**
   * Formulario.
   */
  formGroup: FormGroup;

  /**
   * Actividad con recomendaciones pendientes para la visita actual.
   */
  actividad: any;

  /**
   * Ruta de la vista de comentarios.
   */
  private readonly COMMENTS_PATH = '/u/execLog/pending-visits/visit-id/company-info/comments';

  /**
   * Ruta de la vista de recomendaciones.
   */
  private readonly RECOMMENDATION_PATH = '/u/execLog/pending-visits/visit-id/recommendation';

  constructor(
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  ionViewWillEnter(): void {
    this.establecerActividad();
    this.initForm();
  }

  /**
   * Guarda la información de la actividad y las recomendaciones asociadas.
   */
  async save(): Promise<void> {
    const recomendacionesCompletadas = this.actividad.siniestro.Recomendaciones.every((r: any) => r.diligenciado);

    if (!recomendacionesCompletadas || this.formGroup.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        mode: 'ios',
        message: 'Debe completar todas las recomendaciones y añadir observaciones.',
        buttons: ['OK'],
      });

      alert.present();

      return;
    }

    const body = this.formGroup.value;
    this.actividad.siniestro.Observaciones = body.observaciones;
    this.next();
  }

  /**
   * Redirige a la siguiente vista. Si en el arreglo de actividades seleccionadas para la visita
   * existen más actividades con recomendaciones con un índice en el arreglo superior del actual,
   * se recargará esta vista con los datos de esa recomendación. En caso de no quedar recomendaciones
   * pendientes, se redirige a la vista de comentarios de la visita.
   */
  private next(): void {
    const actividades = this.cacheService.activitiesSelectedForExec;
    const idActividad = +this.route.snapshot.params.activityId;
    const indice = actividades.findIndex(a => a.id === idActividad);
    const actividad = actividades.find((a, index) => index > indice && a.siniestro);
    const path = actividad ? `${this.RECOMMENDATION_PATH}/${actividad.id}` : this.COMMENTS_PATH;
    this.router.navigateByUrl(path);
  }

  /**
   * Establece la actividad a la cuál hacer la recomendaciones.
   */
  private establecerActividad(): void {
    const actividades = this.cacheService.activitiesSelectedForExec;
    const idActividad = +this.route.snapshot.params.activityId;
    const actividad = actividades.find(a => a.id === idActividad);
    this.actividad = actividad;
  }

  /**
   * Inicializa el formulario de la recomendación.
   */
  private initForm(): void {
    const numeroSiniestroControl = new FormControl({
      value: this.actividad.siniestro.Id_Siniestro,
      disabled: true,
    });

    const numeroIdentificacionControl = new FormControl({
      value: this.actividad.siniestro.Doc_Empleado,
      disabled: true,
    });

    const nombreTrabajadorControl = new FormControl({
      value: `${this.actividad.siniestro.Primer_Nombre} ${this.actividad.siniestro.Primer_Apellido}`,
      disabled: true,
    });

    const fechaOcurrencia = moment(this.actividad.siniestro.Fecha_AT);
    let isInvalid = fechaOcurrencia.isBefore(moment().subtract(100, 'years'));

    const fechaOcurrenciaControl = new FormControl({
      value: isInvalid ? 'Sin información' : fechaOcurrencia.format('DD/MM/YYYY'),
      disabled: true,
    });

    const fechaRadicacion = moment(this.actividad.siniestro.FechaRadicacionInvestigacionEmpresa);
    isInvalid = fechaRadicacion.isBefore(moment().subtract(100, 'years'));

    const fechaRadicacionControl = new FormControl({
      value: isInvalid ? 'Sin información' : fechaRadicacion.format('DD/MM/YYYY'),
      disabled: true,
    });

    const fechaRemision = moment(this.actividad.siniestro.FechaRemisionRecomendacionEmpresa);
    isInvalid = fechaRemision.isBefore(moment().subtract(100, 'years'));

    const fechaRemisionControl = new FormControl({
      value: isInvalid ? 'Sin información' : fechaRemision.format('DD/MM/YYYY'),
      disabled: true,
    });

    const fechaProyectada = moment(this.actividad.siniestro.fechaProyectadaSeguimientoEmpresa);
    isInvalid = fechaProyectada.isBefore(moment().subtract(100, 'years'));

    const fechaProyectadaControl = new FormControl({
      value: isInvalid ? 'Sin información' : fechaProyectada.format('DD/MM/YYYY'),
      disabled: true,
    });

    const observacionesControl = new FormControl(this.actividad.siniestro.Observaciones, [Validators.required]);

    this.formGroup = new FormGroup({
      numeroSiniestro: numeroSiniestroControl,
      numeroIdentificacion: numeroIdentificacionControl,
      nombreTrabajador: nombreTrabajadorControl,
      fechaOcurrencia: fechaOcurrenciaControl,
      fechaRadicacion: fechaRadicacionControl,
      fechaRemision: fechaRemisionControl,
      fechaProyectada: fechaProyectadaControl,
      observaciones: observacionesControl,
    });
  }
}
