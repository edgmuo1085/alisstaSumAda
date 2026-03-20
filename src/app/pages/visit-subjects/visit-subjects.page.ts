import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CacheService } from '../../services/cache/cache.service';
import { VisitSubject } from './visit-subjects.typings';

/**
 * Componente para la vista de temas de visita.
 */
@Component({
  selector: 'app-visit-subjects',
  templateUrl: './visit-subjects.page.html',
  styleUrls: ['./visit-subjects.page.scss'],
})
export class VisitSubjectsPage implements OnInit {
  subjectForm: UntypedFormGroup;

  /**
   * Temas de la asesoria.
   */
  subjects: VisitSubject[];

  /**
   * Nombre del ícono para el alternador del tema cuando este está cerrado.
   */
  readonly OPEN_TOGGLER = 'chevron-down-outline';

  /**
   * Nombre del ícono para el alternador del tema cuando este está abierto.
   */
  readonly CLOSE_TOGGLER = 'chevron-up-outline';

  /**
   * Número máximo de temas seleccionados por operación.
   */
  private readonly MAX_SUBJECTS = 4;

  private readonly MAX_HOURS_PER_DAY = 10;

  /**
   * Textos para las alertas utilizadas en la validación.
   */
  private readonly ALERT_TEXTS = {
    MAX_SUBJECTS: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'Puede seleccionar un máximo de cuatro (4) actividades por formulario.',
      okButtonText: 'Aceptar',
    },
    MIN_ACTIVITY: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'Se debe seleccionar por lo menos (1) actividad para continuar.',
      okButtonText: 'Aceptar',
    },
    MAX_HOURS: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'No puede seleccionar las actividades, debido a que excede las horas permitidas a ejecutar. Las cuales son 10 horas por día.',
      okButtonText: 'Aceptar',
    },
    INVALID_COVERAGE_OR_HOURS: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'Debe ingresar el valor de la cobertura o el de las horas ejecutadas para la actividad seleccionada.',
      okButtonText: 'Aceptar',
    },
    HOURS_EXCEED: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'La cantidad de horas a ejecutar es mayor a la de horas migradas para realizar la actividad.',
      okButtonText: 'Aceptar',
    },
    HOURS_LESS_THAN_ONE: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'La hora estimada debe ser mayor a cero.',
      okButtonText: 'Aceptar',
    },
    COVERAGE_LESS_THAN_ONE: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'La cobertura no puede ser menor que uno.',
      okButtonText: 'Aceptar',
    },
    EDUCA_ACTIVITY_REQUIRED: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'Debe adjuntar archivos para las actividades EVENTOS POSITIVA o indicar código de evento.',
      okButtonText: 'Aceptar',
    },
    INVESTIGATION_HOURS_MISMATCH: {
      title: 'Atención',
      mode: 'ios' as 'ios' | 'md',
      message: 'Compruebe que la cantidad de horas ejecutadas coincida con la cantidad de horas migradas.',
      okButtonText: 'Aceptar',
    }
  };

  /**
   * Esta variable permitira insertar la actividad seleccionada,
   * Organizar la interfaz por ahora la pondre any
   */
  subjectsSelected: any[] = [];

  /**
   * redirectTo para cuando se le de continuar
   */
  redirectTo: string;

  redirect = true;

  textSoporte = 'NO';

  validarCoberturaHorasEjecutadas = true;

  constructor(
    private alertController: AlertController,
    private router: Router,
    public cacheService: CacheService
  ) { }

  ionViewWillEnter() {
    for (const doc of this.cacheService.infoDocumentosPorActividad) {
      const idActividadDocumentos = doc.idActividad;

      for (const element of this.subjects) {
        if (element.id === idActividadDocumentos) {
          element.cantidadDocumentos = doc.cantidadDocumentosAdjuntos;
        }
      }
    }
  }


  ngOnInit() {
    this.cacheService.limpiarVariablesAsesoria();
    this.updateListAdvisoryTopic();
  }

  /**
   * Muestra u oculta los detalles del tema proporcionado.
   * Si se está mostrando los detalles de un tema y existe otro abierto, lo cierra.
   *
   */
  toggleCard(subject: VisitSubject): void {
    subject.isOpen = !subject.isOpen;
    if (subject.isOpen) {
      const openedSubjects = this.subjects.filter(s => s !== subject && s.isOpen);
      openedSubjects.forEach(s => (s.isOpen = false));
    }
  }

  /**
   * Alterna el botón que permite subir archivos o no a un tema.
   *
   * @param event Evento que dispara el componente _ion-toggle_.
   * @param subject Tema actual.
   */
  toggleAttachDocs(event: CustomEvent, subject: VisitSubject) {
    subject.attachDocs = event.detail.checked;
    const activo = event.detail.checked;
    if (activo) {
      this.textSoporte = 'SI';
    } else {
      this.textSoporte = 'NO';
    }
  }

  /**
   *
   */
  attachDocs(subject: VisitSubject) {
    this.cacheService.InfoActivityAttachDocs(subject);
    this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects/upload');
  }

  emitIncludedOnReactive(subject: VisitSubject, name: string): void {
    this.subjectForm.controls[name].setValue(subject.include, { emitEvent: false });
    this.toggleIncludeSubject(subject);
  }

  /**
   * Marca para inclusión el tema proporcionado.
   *
   * Comprueba también el número máximo de temas seleccionados en la operación actual. Por defecto
   * es cuatro (4).
   *
   * @param subject Tema seleccionado.
   * @param name Nombre del campo en el formulario reactivo.
   */

  async toggleIncludeSubject(subject: VisitSubject): Promise<void> {
    const existe = this.searchSubject(subject);
    const validate = this.searchSubject2(subject);

    if (existe) {
      this.removeSubject(subject);
      return;
    }

    subject.estadoInterno = 'Proceso';

    if (this.subjectsSelected.length > 0 && validate) {
      if (this.isSameContract(subject)) {
        this.addSubject(subject);
      } else {
        this.redirectTo = '';
        this.notification('Atención', 'No se puede seleccionar las actividades con contratos diferentes');
        return;
      }
    } else if (validate) {
      this.addSubject(subject);
    } else {
      this.removeSubject(subject);
      this.checkFollowUpActivity(subject);
    }

    await this.validateSubjectLimits();
  }

  /**
   * Agrega un sujeto a la lista de seleccionados y valida si debe cargar documentos.
   */
  private addSubject(subject: VisitSubject): void {
    this.subjectsSelected.push(subject);
    this.redirectTo = 'type';

    for (const selectedSubject of this.subjectsSelected) {
      this.cacheService.saveActionLine(selectedSubject.lineaAccion);

      if (selectedSubject.lineaAccion === 'ED') {
        const attachments = selectedSubject.cantidadDocumentos || 0;
        const showInputCode = selectedSubject.showInputCode;

        if (attachments < 1 && !showInputCode) {
          this.notification('Atención', 'Como la linea de acción es EDUCA, es obligatorio cargar los soportes Asistencia a eventos de PyP y Evaluación de eventos');
          this.attachDocs(subject);
          return;
        }
      }
    }
  }

  /**
   * Elimina un sujeto de la lista de seleccionados.
   */
  private removeSubject(subject: VisitSubject): void {
    this.subjectsSelected = this.subjectsSelected.filter(item => item !== subject);
    this.redirectTo = this.subjectsSelected.length > 0 ? 'type' : '';
  }

  /**
   * Verifica si todas las actividades seleccionadas tienen el mismo contrato.
   */
  private isSameContract(subject: any): boolean {
    return this.subjectsSelected.every(item => item.numeroContrato === subject.numeroContrato);
  }

  /**
   * Muestra una notificación si se intenta hacer seguimiento a observaciones en la misma acta.
   */
  private checkFollowUpActivity(subject: VisitSubject): void {
    if (subject.include) {
      this.notification('Atención', 'Dos actividades de seguimiento a observaciones no se pueden realizar en la misma acta');
    }
    setTimeout(() => {
      subject.include = false;
    }, 1000);
  }

  /**
   * Valida que la cantidad de sujetos seleccionados esté dentro de los límites permitidos.
   */
  private async validateSubjectLimits(): Promise<void> {
    if (this.subjectsSelected.length === 0) {
      await this.mostrarAlerta(this.ALERT_TEXTS.MIN_ACTIVITY);
      return;
    }

    if (this.subjectsSelected.length > this.MAX_SUBJECTS) {
      this.redirectTo = '';
      await this.mostrarAlerta(this.ALERT_TEXTS.MAX_SUBJECTS);
      return;
    }
  }

  /**
   * Busca la actividad seleccionada para validar si se checkea o se descheckea para lograr hacer
   * la gestión del acta de asesoría
   */
  searchSubject(subject): boolean {
    const idActividad = subject.id;
    const searchSubject = this.subjectsSelected.find(subj => subj.id === idActividad);
    if (searchSubject) {
      return true;
    } else {
      return false;
    }
  }
  searchSubject2(subject): boolean {
    if (subject.SiniestroOpsActividad === 5) {
      const searchSubject = this.subjectsSelected.filter(subj => subj.SiniestroOpsActividad === 5);
      if (searchSubject.length < 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  /**
   * Método que agrega los valores de cada actividad migrada a cada una de las tarjetas
   */
  updateListAdvisoryTopic() {
    const listActivMigradas = JSON.parse(sessionStorage.companySelected).listaActividadesMigradas;
    this.subjects = listActivMigradas;
    console.log("Lista Act Migradas", listActivMigradas)
    this.subjectForm = new UntypedFormGroup({});
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.subjects.length; i++) {
      const controlId = new UntypedFormControl(this.subjects[i].id);
      const controlIdActividad = new UntypedFormControl(this.subjects[i].idActividad);
      const descripcionActividad = new UntypedFormControl(this.subjects[i].descripcionActividad);
      const controlObservaciones = new UntypedFormControl(this.subjects[i].observaciones);
      const controlHorasAEjecutar = new UntypedFormControl(this.subjects[i].cantidadHorasEjecutar);
      const controlUnidadMedida = new UntypedFormControl(this.subjects[i].uniadMedidaDescripcion);
      const controlHorasEjecutadas = new UntypedFormControl();
      const controlCobertura = new UntypedFormControl(undefined, [Validators.required, Validators.min(1)]);
      const controlRegistroCodigoEventosEduca = new UntypedFormControl(this.subjects[i].registroCodigoEventosEduca);
      const controlCodeEduca = new UntypedFormControl(undefined, [Validators.required]);
      const controlFechaFinContrato = new UntypedFormControl(this.subjects[i].fechaFinContrato);
      const constFirmaConQR = new UntypedFormControl(this.subjects[i].firmamaQR);
      const constEstadoInterno = new UntypedFormControl(this.subjects[i].estadoInterno);
      const includedControl = new UntypedFormControl(this.subjects[i].include);
      const fkIdSiniestro = new UntypedFormControl(this.subjects[i].Fk_Id_Siniestro);
      const siniestro = new UntypedFormControl(this.subjects[i].Siniestro);
      const siniestroOpActividad = new UntypedFormControl(this.subjects[i].SiniestroOpsActividad);

      this.subjectForm.addControl(i + 'id', controlId);
      this.subjectForm.addControl(i + 'idActividad', controlIdActividad);
      this.subjectForm.addControl(i + 'descripcionActividad', descripcionActividad);
      this.subjectForm.addControl(i + 'Observaciones', controlObservaciones);
      this.subjectForm.addControl(i + 'horasAEjecutar', controlHorasAEjecutar);
      this.subjectForm.addControl(i + 'unidadMedida', controlUnidadMedida);
      this.subjectForm.addControl(i + 'horasEjecutadas', controlHorasEjecutadas);
      this.subjectForm.addControl(i + 'coverage', controlCobertura);
      this.subjectForm.addControl(i + 'registroCodigoEventosEduca', controlRegistroCodigoEventosEduca);
      this.subjectForm.addControl(i + 'codeEduca', controlCodeEduca);
      this.subjectForm.addControl(i + 'fechaFinContrato', controlFechaFinContrato);
      this.subjectForm.addControl(i + 'firmaQR', constFirmaConQR);
      this.subjectForm.addControl(i + 'estadoInterno', constEstadoInterno);
      this.subjectForm.addControl(i + 'included', includedControl);
      this.subjectForm.addControl(i + 'fkIdSiniestro', fkIdSiniestro);
      this.subjectForm.addControl(i + 'siniestro', siniestro);
      this.subjectForm.addControl(i + 'siniestroOpActividad', siniestroOpActividad);

      this.subjectForm.controls[i + 'included'].valueChanges.subscribe(v => {
        this.subjects[i].include = v;
        this.toggleIncludeSubject(this.subjects[i]);
      });
    }
  }

  /**
   * Este metodo permite validar si se muestra el input para el código de educa
   */
  showInputCodeEdu(event, subject) {
    const valor = event.detail.checked;
    if (valor === true) {
      subject.showInputCode = true;
    } else {
      subject.showInputCode = false;
    }
  }

  async notification(titulo, notificacion) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR'],
    });

    alert.onDidDismiss();

    await alert.present();
  }

  validateTarjetas(actividesSeleccionadas, tarjetas): Array<any> {
    const tarjetasSeleccionadas = [];

    for (const element of actividesSeleccionadas) {
      const encontro = tarjetas.find(item => item.id === element.id);
      if (encontro) {
        encontro.include = true;
        encontro.AdjuntarDocumentosTecnicos = element.attachDocs ? 'SI' : 'NO';
        encontro.CodigoeventoPositiva = encontro.codeEduca;
        tarjetasSeleccionadas.push(encontro);
      }
    }

    return tarjetasSeleccionadas;
  }


  /**
   * Este metodo valida varias cosas:
   * 1. Captura el valor de la actividad seleccionada, luego hace un arreglo con los diferentes campos de cada tarjeta.
   * 2. Recorre los formularios y cada campo para unificarlo en uno solo llamado tarjeta.
   * 3. Valida entre las actividades seleccionadas cual tiene unidad de medida HORA u Horas para almacenar el total de horas a ejecutar
   * para las actividades seleccionadas
   * 4. Valida que exista minimo una seleccionada y no mas de 4 actividades, ademas de validar que dichas actividades seleccionadas
   * no excedan a las 10 horas por dia
   * 5. Por ultimo se guarda la información de la tarjeta en el archivo cacheService, esto se utiliza de manera temporal para ir almacenando
   * cada información ingresada por parte de la gestión del acta de asesoria.
   */

  /**
   * Función principal que se ejecuta al continuar.
   */
  public async next(): Promise<void> {
    console.log("Numero CERO");
    let tarjetas = await this.obtenerTarjetas();

    if (!this.validarTarjetas(tarjetas)) {
      console.log("Numero UNO");
      return;
    }

    this.cacheService.saveMigratedHours(tarjetas.reduce((sum, t) => sum + parseInt(t.horasEjecutadas, 10), 0));

    if (this.subjectsSelected.length === 0) {
      console.log("Numero DOS");
      return this.mostrarAlerta(this.ALERT_TEXTS.MIN_ACTIVITY);
    }

    if (this.subjectsSelected.length > this.MAX_SUBJECTS) {
      console.log("Numero TRES");
      return this.mostrarAlerta(this.ALERT_TEXTS.MAX_SUBJECTS);
    }

    if (this.redirect) {
      console.log("Numero CUATRO");
      this.cacheService.saveActivities(tarjetas);
      this.router.navigateByUrl('u/execLog/pending-visits/visit-id/subjects/type');
    }
  }

  /**
   * Obtiene las tarjetas del formulario y las valida.
   */
  private async obtenerTarjetas(): Promise<any[]> {
    console.log("Obtener tarjeta UNO");
    const formSubject = this.subjectForm.value;
    const fields = [
      'include', 'id', 'idActividad', 'descripcionActividad', 'Observaciones',
      'horasAEjecutar', 'unidadMedida', 'horasEjecutadas', 'coverage',
      'registroCodigoEventosEduca', 'codeEduca', 'fechaFinContrato', 'firmaQR',
      'estadoInterno', 'fkIdSiniestro', 'siniestro', 'siniestroOpActividad'
    ];

    let tarjetas = [];
    for (let i = 0; i < Object.keys(formSubject).length / fields.length; i++) {
      const tarjeta: any = {};
      fields.forEach(f => tarjeta[f] = formSubject[i + f]);
      tarjetas.push(tarjeta);
    }

    console.log("Obtener tarjeta DOS");
    return await this.validateTarjetas(this.subjectsSelected, tarjetas);
  }

  /**
   * Valida las tarjetas antes de continuar.
   */
  private validarTarjetas(tarjetas: any[]): boolean {
    let cantidadHorasAEjecutar = 0;

    for (const tarjeta of tarjetas) {
      if (!tarjeta.coverage || !tarjeta.horasEjecutadas) {
        this.mostrarAlerta(this.ALERT_TEXTS.INVALID_COVERAGE_OR_HOURS);
        return false;
      }

      if (parseInt(tarjeta.horasEjecutadas, 10) > tarjeta.horasAEjecutar) {
        this.mostrarAlerta(this.ALERT_TEXTS.HOURS_EXCEED);
        return false;
      }

      if (parseInt(tarjeta.horasEjecutadas, 10) < 1) {
        this.mostrarAlerta(this.ALERT_TEXTS.HOURS_LESS_THAN_ONE);
        return false;
      }

      if (tarjeta.coverage < 1) {
        this.mostrarAlerta(this.ALERT_TEXTS.COVERAGE_LESS_THAN_ONE);
        return false;
      }

      if (!this.validarActividadesED(tarjetas)) {
        this.mostrarAlerta(this.ALERT_TEXTS.EDUCA_ACTIVITY_REQUIRED);
        return false;
      }

      if (tarjeta.siniestro && parseInt(tarjeta.horasEjecutadas, 10) < tarjeta.horasAEjecutar) {
        this.mostrarAlerta(this.ALERT_TEXTS.INVESTIGATION_HOURS_MISMATCH);
        return false;
      }

      if (['HORA', 'Horas'].includes(tarjeta.unidadMedida)) {
        cantidadHorasAEjecutar += parseInt(tarjeta.horasEjecutadas, 10);
      }
    }

    if (cantidadHorasAEjecutar > this.MAX_HOURS_PER_DAY) {
      this.mostrarAlerta(this.ALERT_TEXTS.MAX_HOURS);
      return false;
    }

    return true;
  }

  /**
   * Muestra una alerta utilizando los textos especificados en el objeto de configuración.
   */
  private async mostrarAlerta(alertText: { title: string; message: string; okButtonText: string; mode: 'ios' | 'md' }): Promise<void> {
    const alert = await this.alertController.create({
      mode: alertText.mode,
      header: alertText.title,
      message: alertText.message,
      buttons: [
        {
          text: alertText.okButtonText,
          role: 'OK'
        }
      ]
    });
    await alert.present();
  }

  private validarActividadesED(tarjetas: any[]): boolean {
    const actividadesED = this.subjectsSelected.filter(s => s.lineaAccion === 'ED');

    if (!actividadesED.length) {
      return true;
    }

    const allValid = actividadesED.every(a => {
      const tarjeta = tarjetas.find(t => t.id === a.id);

      if (!tarjeta) {
        return true;
      }

      const hasCode = !!tarjeta.codeEduca;

      // Usar los métodos getter que devuelven arrays planos
      const archivos = this.cacheService.obtenerAdjuntosPDF();
      const fotos = this.cacheService.obtenerAdjuntosFoto();

      const archivosActividad = archivos.filter(f => f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0);

      const fotosActividad = fotos.filter(f => f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0);

      const archivosAEP =
        archivosActividad.filter(f => f.idTipoArchivo === 'AEP').length + fotosActividad.filter(f => f.idTipoArchivo === 'AEP').length;

      const archivosEE =
        archivosActividad.filter(f => f.idTipoArchivo === 'EE').length + fotosActividad.filter(f => f.idTipoArchivo === 'EE').length;

      const hasFiles = archivosAEP >= 1 && archivosEE >= 1;

      return hasCode || hasFiles;
    });

    return allValid;
  }
}
