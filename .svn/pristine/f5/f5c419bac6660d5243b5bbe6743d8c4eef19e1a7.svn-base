import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  subjectForm: FormGroup;

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

  /**
   * Textos para la ventana de diálogo que notifica al usuario que ha seleccionado más temas de los
   * permitidos.
   */
  private readonly ALERT_TEXTS = {
    title: 'Atención',
    mode: 'ios',
    message: 'Puede seleccionar un máximo de cuatro (4) actividades por formulario.',
    okButtonText: 'Aceptar'
  };

  /**
   * Textos para la ventana de diálogo que notifica al usuario que hay que seleccionar por lo menos una
   * actividad.
   *
   */
  private readonly ALERT_TEXTS_MINACTIVITY = {
    title: 'Atención',
    mode: 'ios',
    message: 'Se debe seleccionar por lo menos (1) actividad para continuar.',
    okButtonText: 'Aceptar'
  };

  private readonly ALERT_TEXTS_MAXHOREJECUTAR = {
    title: 'Atención',
    mode: 'ios',
    message: 'No puede seleccionar las actividades, debido a que excede las horas permitidas a ejecutar. Las cuales son 10 horas por día',
    okButtonText: 'Aceptar'
  };

  private readonly ALERT_TEXTS_FIELDSEMPTY = {
    title: 'Atención',
    mode: 'ios',
    message: 'Todos los campos son obligatorios',
    okButtonText: 'Aceptar'
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

  constructor(private alertController: AlertController,
    private router: Router,
    public cacheService: CacheService
  ) { }

  ionViewWillEnter() {
    // tslint:disable-next-line: prefer-for-of
    if (this.cacheService.infoDocumentosPorActividad.length > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.cacheService.infoDocumentosPorActividad.length; i++) {
        const idActividadDocumentos = this.cacheService.infoDocumentosPorActividad[i].idActividad;
        this.subjects.forEach(element => {
          if (element.id === idActividadDocumentos) {
            element.cantidadDocumentos = this.cacheService.infoDocumentosPorActividad[i].cantidadDocumentosAdjuntos;
          }
        });
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
      openedSubjects.forEach(s => s.isOpen = false);
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
    // subject.include = !subject.include;
    const existe = this.searchSubject(subject);
    const validate = this.searchSubject2(subject);

    if (!existe) {
      subject.estadoInterno = 'Proceso';

      if (this.subjectsSelected.length !== 0 && validate) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.subjectsSelected.length; i++) {
          const contrato = this.subjectsSelected[i].numeroContrato;
          if (contrato === this.subjectsSelected[i].numeroContrato) {
            this.subjectsSelected.push(subject);
            if (this.subjectsSelected.length > 0) {
              this.redirectTo = 'type';
              // Guardar la linea de acción
              this.cacheService.saveActionLine(this.subjectsSelected[i].lineaAccion);

              if (this.subjectsSelected[i].lineaAccion === 'ED') {
                const attachments = this.subjectsSelected[i].cantidadDocumentos || 0;
                const showInputCode = this.subjectsSelected[i].showInputCode;

                if (attachments < 1 && !showInputCode) {
                  this.notification('Atención', 'Como la linea de acción es EDUCA, es obligatorio cargar los soportes');
                  this.attachDocs(subject);

                  return;
                }
              }

              break;
            }
          } else {
            this.redirectTo = '';
            this.notification('Atención', 'No se puede seleccionar las actividades con contratos diferentes');
          }
        }
      } else if (validate) {
        this.subjectsSelected.push(subject);
        this.redirectTo = 'type';
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.subjectsSelected.length; i++) {
          this.cacheService.saveActionLine(this.subjectsSelected[i].lineaAccion);

          if (this.subjectsSelected[i].lineaAccion === 'ED') {
            const attachments = this.subjectsSelected[i].cantidadDocumentos || 0;
            const showInputCode = this.subjectsSelected[i].showInputCode;

            if (attachments < 1 && !showInputCode) {
              this.notification('Atención', 'Como la linea de acción es EDUCA, es obligatorio cargar los soportes Asistencia a eventos de PyP y Evaluación de eventos');
              this.attachDocs(subject);

              return;
            }
          }

          break;
        }

        if (this.subjectsSelected.length > 0) {
          this.redirectTo = 'type';
        }
      } else {

        const elementRemove = subject;
        const filteredItems = (this.subjectsSelected.filter(item => item !== elementRemove));
        this.subjectsSelected = filteredItems;

        if (this.subjectsSelected.length === 0) {
          this.redirectTo = '';
        } else {
          this.redirectTo = 'type';
        }

        if (subject.include) {
          this.notification('Atención', 'Dos actividades de seguimiento a observaciones no se pueden realizar en la misma acta');
        }
        setTimeout(() => {
          subject.include = false;
        }, 1000);
      }
    } else {
      // subject.include = false;
      const elementRemove = subject;
      const filteredItems = (this.subjectsSelected.filter(item => item !== elementRemove));
      this.subjectsSelected = filteredItems;

      if (this.subjectsSelected.length === 0) {
        this.redirectTo = '';
      } else {
        this.redirectTo = 'type';
      }
    }

    /**
     * Valida que el array de las actividades seleccionadas, al descheck no sea igual a 0
     * de esta manera mostrar una alerta indicando que se debe seleccionar por lo menos 1
     * actividad.
     */
    if (this.subjectsSelected.length === 0) {
      // subject.include = false;
      const okButton = {
        text: this.ALERT_TEXTS_MINACTIVITY.okButtonText,
        role: 'OK'
      };
      const alert = this.alertController.create({
        header: this.ALERT_TEXTS_MINACTIVITY.title,
        mode: 'ios',
        message: this.ALERT_TEXTS_MINACTIVITY.message,
        buttons: [okButton]
      });

      (await alert).present();

      return;
    }

    /**
     * Valida que el array de las actividades seleccionadas no sean mayores a 4 items
     */
    if (this.subjectsSelected.length > this.MAX_SUBJECTS) {
      // Se desmarca el tema indicado porque se ha alcanzado el máximo permitido
      // subject.include = false;
      this.redirectTo = '';
      const okButton = {
        text: this.ALERT_TEXTS.okButtonText,
        role: 'OK'
      };

      const alert = this.alertController.create({
        header: this.ALERT_TEXTS.title,
        mode: 'ios',
        message: this.ALERT_TEXTS.message,
        buttons: [okButton]
      });

      (await alert).present();

      return;
    }
    // subject.include = !subject.include;
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
    this.subjectForm = new FormGroup({});
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.subjects.length; i++) {

      const controlId = new FormControl(this.subjects[i].id);
      const controlIdActividad = new FormControl(this.subjects[i].idActividad);
      const descripcionActividad = new FormControl(this.subjects[i].descripcionActividad);
      const controlObservaciones = new FormControl(this.subjects[i].observaciones);
      const controlHorasAEjecutar = new FormControl(this.subjects[i].cantidadHorasEjecutar);
      const controlUnidadMedida = new FormControl(this.subjects[i].uniadMedidaDescripcion);
      const controlHorasEjecutadas = new FormControl();
      const controlCobertura = new FormControl(undefined, [Validators.required, Validators.min(1)]);
      const controlRegistroCodigoEventosEduca = new FormControl(this.subjects[i].registroCodigoEventosEduca);
      const controlCodeEduca = new FormControl(undefined, [Validators.required]);
      const controlFechaFinContrato = new FormControl(this.subjects[i].fechaFinContrato);
      const constFirmaConQR = new FormControl(this.subjects[i].firmamaQR);
      const constEstadoInterno = new FormControl(this.subjects[i].estadoInterno);
      const includedControl = new FormControl(this.subjects[i].include);
      const fkIdSiniestro = new FormControl(this.subjects[i].Fk_Id_Siniestro);
      const siniestro = new FormControl(this.subjects[i].Siniestro);
      const siniestroOpActividad = new FormControl(this.subjects[i].SiniestroOpsActividad);

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
      buttons: ['ACEPTAR']
    });

    alert.onDidDismiss();

    await alert.present();
  }

  validateTarjetas(actividesSeleccionadas, tarjetas): Array<any> {
    const tarjetasSeleccionadas = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < actividesSeleccionadas.length; i++) {
      const element = actividesSeleccionadas[i];
      const encontro = tarjetas.find(item => item.id === element.id);
      if (encontro) {
        encontro.include = true;
        encontro.AdjuntarDocumentosTecnicos = element.attachDocs ? 'SI' : 'NO';
        // encontro.CodigoeventoPositiva = element.registroCodigoEventosEduca;
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

  async next() {
    const formSubject = this.subjectForm.value;
    const fields = ['include', 'id', 'idActividad', 'descripcionActividad', 'Observaciones',
      'horasAEjecutar', 'unidadMedida', 'horasEjecutadas', 'coverage', 'registroCodigoEventosEduca',
      'codeEduca', 'fechaFinContrato', 'firmaQR', 'estadoInterno', 'fkIdSiniestro', 'siniestro', 'siniestroOpActividad'];
    let tarjetas = [];
    for (let i = 0; i < Object.keys(formSubject).length / fields.length; i++) {
      const tarjeta: any = {};
      const validateCoverage: any = [];
      fields.forEach(async f => {
        tarjeta[f] = formSubject[i + f];
      });
      tarjetas.push(tarjeta);
    }
    const resultadoTarjetas = await this.validateTarjetas(this.subjectsSelected, tarjetas);
    tarjetas = resultadoTarjetas;
    let cantidadHorasAEjecutar = 0;

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < tarjetas.length; i++) {
      const element = tarjetas[i];
      // tslint:disable-next-line: max-line-length
      if ((element.coverage === null || element.coverage === '') ||
        (element.horasEjecutadas === null || element.horasEjecutadas === '')) {
        this.validarCoberturaHorasEjecutadas = false;
        this.notification('Atención', 'Debe ingresar el valor de la cobertura o el de las horas ejecutadas para la actividad seleccionada');
        break;
      } else {
        this.validarCoberturaHorasEjecutadas = true;
      }
      if (parseInt(element.horasEjecutadas, 10) > element.horasAEjecutar) {
        this.validarCoberturaHorasEjecutadas = false;
        this.notification('Atención', 'La cantidad de horas a ejecutar es mayor a la de horas migradas para realizar la actividad');
        break;
      }

      if (element.coverage < 1) {
        this.validarCoberturaHorasEjecutadas = false;
        this.notification('Atención', 'La cobertura no puede ser menor que uno');
        break;
      }

      const actividadesEDValidas = this.validarActividadesED(resultadoTarjetas);

      if (!actividadesEDValidas) {
        this.validarCoberturaHorasEjecutadas = false;
        this.notification('Atención', 'Debe adjuntar archivos para las actividades EDUCA o indicar código de evento.');
        break;
      }

      if (element.siniestro) {
        // Es una actividad de investigación

        if (parseInt(element.horasEjecutadas, 10) < element.horasAEjecutar) {
          // En actividades de investigación solo se permiten registro de actas con el número de horas
          // de ejecución igual al número de horas migradas

          this.validarCoberturaHorasEjecutadas = false;
          this.notification('Atención', 'Compruebe que la cantidad de horas ejecutadas coincida con la cantidad de horas migradas.');
          break;
        }
      }

      if (element.unidadMedida === 'HORA' || element.unidadMedida === 'Horas') {
        // tslint:disable-next-line: radix
        cantidadHorasAEjecutar = cantidadHorasAEjecutar + parseInt(tarjetas[i].horasEjecutadas);
      }
    }

    if (this.validarCoberturaHorasEjecutadas) {
      if (cantidadHorasAEjecutar <= 10) {
        this.cacheService.saveMigratedHours(cantidadHorasAEjecutar);
        if (this.subjectsSelected.length === 0) {
          const okButton = {
            text: this.ALERT_TEXTS_MINACTIVITY.okButtonText,
            role: 'OK'
          };
          const alert = this.alertController.create({
            header: this.ALERT_TEXTS_MINACTIVITY.title,
            mode: 'ios',
            message: this.ALERT_TEXTS_MINACTIVITY.message,
            buttons: [okButton]
          });

          (await alert).present();
          return;
        }

        if (this.subjectsSelected.length > this.MAX_SUBJECTS) {
          const okButton = {
            text: this.ALERT_TEXTS.okButtonText,
            role: 'OK'
          };
          const alert = this.alertController.create({
            mode: 'ios',
            header: this.ALERT_TEXTS.title,
            message: this.ALERT_TEXTS.message,
            buttons: [okButton]
          });
          (await alert).present();
          return;
        } else {
          // this.cacheService.saveActivities(this.subjectsSelected);
          if (this.redirect) {
            this.cacheService.saveActivities(tarjetas);
            this.router.navigateByUrl('u/execLog/pending-visits/visit-id/subjects/type');
          }
        }
      } else {
        const okButton = {
          text: this.ALERT_TEXTS.okButtonText,
          role: 'OK'
        };

        const alert = this.alertController.create({
          mode: 'ios',
          header: this.ALERT_TEXTS_MAXHOREJECUTAR.title,
          message: this.ALERT_TEXTS_MAXHOREJECUTAR.message,
          buttons: [okButton]
        });

        (await alert).present();
      }
    }
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

      const archivos = [];
      this.cacheService.pdfAdjuntos.forEach(arr => archivos.push(...arr));

      const fotos = [];
      this.cacheService.fotosAdjuntas.forEach(arr => fotos.push(...arr));

      const archivosActividad = archivos
        .filter(f => f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0);

      const fotosActividad = fotos
        .filter(f => f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0);

      const archivosAEP = archivosActividad.filter(f => f.idTipoArchivo === 'AEP').length +
        fotosActividad.filter(f => f.idTipoArchivo === 'AEP').length;

      const archivosEE = archivosActividad.filter(f => f.idTipoArchivo === 'EE').length +
        fotosActividad.filter(f => f.idTipoArchivo === 'EE').length;

      const hasFiles = archivosAEP >= 1 && archivosEE >= 1;

      return hasCode || hasFiles;
    });

    return allValid;
  }

}
