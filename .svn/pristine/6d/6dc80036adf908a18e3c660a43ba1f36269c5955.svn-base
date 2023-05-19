import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import { RegistroAsistenteEvento, responsableEvento } from 'src/app/intarfaces/interfaces';
import { actaAsesoria } from '../../intarfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CacheService {

  // Variablel para almacenar la información de las actividades a 
  // las cuales se les adjuntara los documentos
  infoActivityAtachSelected: any = {};

  // Variable que almacenará los archivos por actividad
  filesAtachDocs: any[] = [];

  // Variable que guardará la actividad y los documentos adjuntos
  saveAttach: any[] = [];

  // Información de la actividad con su respectivo
  infoDocumentosPorActividad: any[] = [];

  // Guardar los documentos cuando son fotos
  fotosAdjuntas: any[] = [];

  // Guardar los documentos cuando son PDF
  pdfAdjuntos: any[] = [];

  // Guardar la linea de acción de la actividad
  actionLine: string;

  // Variables para ejecución de actividades \\
  activitiesSelectedForExec: any[] = [];

  // Actividades con la validacion del campo coverage
  activitiesSelected: any[];

  // Variable que contendra las horas migradas para las actividades seleccionadas
  migratedHours;

  // Variable que guardara la información de los tipos de asesoria para el acta de asesoria
  typeAdvice: any = {};

  // Validar cual es la asesoria seleccionada (Especifica)
  typeAdviceSelectedEspec: any;

  // Validar asesoria por proyecto
  typeAdviceSelectedProject;

  // Variable para guarda la información de la empresa
  infoCompany: any = {};

  // Variable para guardar los comentarios de la visita
  commentAdvice: any = {};

  // Variable para cuando sea una visita fallida
  commentFailed: any = {};

  // Variable para cuando sea una visita exitosa
  commentSucces: any = {};

  // Variable para guardar la informacion cuando firma el acta de asesoria del responsable de la empresa
  infoSurveyQR: any = {};

  // Variable para guardar la informacion cuando la firma el acta el responsable de la arl
  infoSurveyARL: any = {};

  // Array para almacenar las actas de asesoria
  actasAsesoria = [];

  // Objeto para crear el acta de asesoria
  informacionActaAsesoria: actaAsesoria;

  // Variables para eventos positiva \\
  newRegisterEvent: responsableEvento;
  newRegisterEventManual: RegistroAsistenteEvento[] = [];

  // Variable para guardar la ip adress
  ipAddress: any;

  constructor(private storage: Storage) { }


  // --------------------------- MÓDULO EJECUCIÓN ACTIVIDADES --------------------\\


  saveActivities(listActivitiesSelectedForExec: any) {
    this.activitiesSelectedForExec = [];
    this.activitiesSelectedForExec = listActivitiesSelectedForExec;

  }

  getSaveActivitiesSelected() {
    return this.activitiesSelectedForExec;
  }


  saveMigratedHours(migratedHourSelected) {
    this.migratedHours = 0;
    this.migratedHours = parseInt(migratedHourSelected, 10);
  }

  // save Info temas de asesoria


  // save info tipos de asesoria
  saveTypeAdvice(typeAdvice) {
    // this.typeAdvice = {};
    this.typeAdvice = typeAdvice;
  }

  getSaveTypeAdvice() {
    return this.typeAdvice;
  }

  // save info de la compañia
  saveInfoCompany(infoCompany) {
    this.infoCompany = {};
    this.infoCompany = infoCompany;
  }

  getSaveInfoCompany() {
    return this.infoCompany;
  }

  // Save comentarios de la visita
  saveCommentsAdvice(commnetAdvice) {
    this.commentAdvice = {};
    this.commentAdvice = commnetAdvice;
  }

  getSaveCommentsAdvice() {
    return this.commentAdvice;
  }

  // save info when survey without QR
  saveSurveyQR(infoSurveyQR) {
    this.infoSurveyQR = {};
    this.infoSurveyQR = infoSurveyQR;
  }

  saveSurveyARL(infoSurveyARL) {
    this.infoSurveyARL = {};
    this.infoSurveyARL = infoSurveyARL;
  }

  // Para guardar la ipv4
  saveIpAddress(ip) {
    this.ipAddress = '';
    this.ipAddress = ip;
  }

  getIpAddress() {
    return this.ipAddress;
  }

  getAllInfoToAdvisory() {
    this.activitiesSelected = [];
    this.activitiesSelectedForExec.forEach(element => {
      if (element.coverage !== 0) {
        this.activitiesSelected.push(element);
      }
    });
    const verificationAdvisory = {
      activities: this.activitiesSelected,
      migrateHour: this.migratedHours,
      typeAdvisory: this.typeAdvice,
      infoCompany: this.infoCompany,
      commentsAdvice: this.commentAdvice,
      infoSurveyQR: this.infoSurveyQR,
      infoSurveyARL: this.infoSurveyARL,
      ip: this.ipAddress
    };
    return verificationAdvisory;
  }


  // Metodo que permite almacenar la información de la actividad al momento de redireccionarla a los documentos
  InfoActivityAttachDocs(attachDocs) {
    this.infoActivityAtachSelected = {};
    this.infoActivityAtachSelected = attachDocs;
  }

  obtenerInfoActividadAttachDocs() {
    return this.infoActivityAtachSelected;
  }

  // Guarda la linea de acción
  saveActionLine(line) {
    this.actionLine = '';
    this.actionLine = line;
  }

  // Guardar los documentos almacenados
  saveAttachDocs(attachsDocs) {
    this.saveAttach.push(attachsDocs);
  }

  // Metodo que permite guardar la información del a actividad con la cantidad de documentos adjuntos
  infoActividadPorDocumento(documentosPorActividad) {
    const found = this.infoDocumentosPorActividad.find(d => d.idActividad === documentosPorActividad.idActividad);

    if (found) {
      found.cantidadDocumentosAdjuntos = documentosPorActividad.cantidadDocumentosAdjuntos;

      return;
    }

    this.infoDocumentosPorActividad.push(documentosPorActividad);
  }

  // Metodo que permite guardar la información del a actividad con la cantidad de documentos adjuntos
  infoFotosAdjuntas(fotosAdjuntas) {
    this.fotosAdjuntas.push(fotosAdjuntas);
  }

  removeFotoAdjunta(id: string) {
    this.fotosAdjuntas.forEach(f => {
      const index = f.findIndex((ff: any) => ff.foto.idFoto === id);

      if (index < 0) {
        return;
      }

      const deleted = f.splice(index, 1);
      const registry = this.infoDocumentosPorActividad.find(r => r.idActividad === deleted[0].idActividad);

      if (!registry) {
        return;
      }

      registry.cantidadDocumentosAdjuntos = registry.cantidadDocumentosAdjuntos > 0 ?
        registry.cantidadDocumentosAdjuntos - 1 :
        0;
    });
  }

  obtenerAdjuntosFoto() {
    return this.fotosAdjuntas;
  }

  // Metodo que permite guardar la información del a actividad con la cantidad de documentos adjuntos
  infoPDFAdjuntos(pdfAdjuntos) {
    this.pdfAdjuntos.push(pdfAdjuntos);
  }

  removePDFAdjunto(id: string) {
    this.pdfAdjuntos.forEach(a => {
      const index = a.findIndex((aa: any) => aa.documento.id === id);

      if (index < 0) {
        return;
      }

      const deleted = a.splice(index, 1);
      const registry = this.infoDocumentosPorActividad.find(r => r.idActividad === deleted[0].idActividad);

      if (!registry) {
        return;
      }

      registry.cantidadDocumentosAdjuntos = registry.cantidadDocumentosAdjuntos > 0 ?
        registry.cantidadDocumentosAdjuntos - 1 :
        0;
    });
  }

  obtenerAdjuntosPDF() {
    return this.pdfAdjuntos;
  }

  createActaAsesoria(idProveedor) {

    const TTA_LISTA = [];

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.getAllInfoToAdvisory().activities.length; i++) {
      let element: any = this.getAllInfoToAdvisory().activities[i];

      let recomendaciones = element.siniestro?.Recomendaciones ?? null;

      if (recomendaciones) {
        recomendaciones = recomendaciones.map((r: any) => ({
          Pk_Id_SiniestroRecomendaciones: r.Pk_Id_SiniestroRecomendaciones,
          Recomendacion: r.Recomendacion,
          implementada: r.implementada,
          fueronEficaces: r.fueronEficaces ?? false,
          Fecha_Implementacion: r.Fecha_Implementacion ?? null,
          informacionEvidencia: r.InformacionEnvidencia ?? null,
          causaNoImplementancion: r.causaNoImplementancion ?? null,
          fueGestionadaAPP: true,
          tipoFuente: r.tipoFuente,
          tipoMedio: r.tipoMedio,
          tipoTrabajo: r.tipoTrabajo,
          InformacionEnvidencia: r.InformacionEnvidencia ?? null
        }));
      }

      element = {
        id: element.id,
        codigo: element.idActividad,
        Cantidad: element.horasAEjecutar,
        UnidadMedida: element.unidadMedida,
        Cobertura: element.coverage,
        EjecucionReal: parseInt(element.horasEjecutadas, 10),
        NumeroAutorizacion: '',
        NumeroActividad: '',
        Descripcion: element.descripcionActividad,
        ObservacionesSeguimiento: element.siniestro?.Observaciones ?? null,
        Recomendaciones: recomendaciones,
        AdjuntarDocumentosTecnicos: element.AdjuntarDocumentosTecnicos,
        CodigoeventoPositiva: element.CodigoeventoPositiva
      };

      TTA_LISTA.push(element);
    }

    if (this.typeAdvice.type === 'Especifica') {

      let fechaInicioAsesoria = this.typeAdvice.fechaInicialAsesoria;
      fechaInicioAsesoria = fechaInicioAsesoria.split('-');
      fechaInicioAsesoria = fechaInicioAsesoria[2].concat('/').concat(fechaInicioAsesoria[1]).concat('/').concat(fechaInicioAsesoria[0]);

      let horaInicial = this.typeAdvice.startHour;
      horaInicial = horaInicial.split('.')[0].split(':');
      horaInicial = horaInicial[0].concat(':').concat(horaInicial[1]);

      let horaFinal = this.typeAdvice.endHour;
      horaFinal = horaFinal.split('.')[0].split(':');
      horaFinal = horaFinal[0].concat(':').concat(horaFinal[1]);

      const infoEspecifica = {
        AE: this.typeAdvice.typeSelected,
        AE_Fecha: fechaInicioAsesoria,
        AE_HoraInicio: horaInicial,
        AE_HoraFin: horaFinal,
        AE_HorasTotales: this.typeAdvice.totalHours
      };
      const infoProyecto = {
        AP: false,
        AP_Mes: '',
        AP_Anio: ''
      };
      this.typeAdviceSelectedEspec = infoEspecifica;
      this.typeAdviceSelectedProject = infoProyecto;


    } else {

      const infoProyecto = {
        AP: this.typeAdvice.typeSelected,
        AP_Mes: this.typeAdvice.month,
        AP_Anio: this.typeAdvice.year
      };

      const infoEspecifica = {
        AE: false,
        AE_Fecha: '',
        AE_HoraInicio: '',
        AE_HoraFin: '',
        AE_HorasTotales: ''
      };

      this.typeAdviceSelectedEspec = infoEspecifica;
      this.typeAdviceSelectedProject = infoProyecto;
    }

    if (this.commentAdvice.type === 'Fallo') {
      let fecha = '';
      if (this.commentAdvice.motive === 'R') {
        const fechaReprogramacion = this.commentAdvice.newDateActivity.split('T')[0];
        const fechaReprogra = fechaReprogramacion.split('-');
        fecha = fechaReprogra[2].concat('/').concat(fechaReprogra[1]).concat('/').concat(fechaReprogra[0]);
      }

      const commentFail = {
        RV_Exitosa: this.commentAdvice.typeSelected,
        Observaciones: this.commentAdvice.description,
        RV_Motivo: this.commentAdvice.motive,
        RV_FechaServicio: fecha,
        RV_JustificacionMotivo: this.commentAdvice.justify
      };

      const commentSuccess = {
        RV_Exitosa: '',
        Observaciones: ''
      };

      this.commentSucces = commentSuccess;
      this.commentFailed = commentFail;

    } else {

      const commentSuccess = {
        RV_Exitosa: this.commentAdvice.type,
        Observaciones: this.commentAdvice.comment
      };

      const commentFail = {
        RV_Exitosa: '',
        RV_Motivo: '',
        RV_FechaServicio: '',
        RV_JustificacionMotivo: ''
      };

      this.commentFailed = commentFail;
      this.commentSucces = commentSuccess;

    }

    if (this.infoSurveyQR.firmaQR === false) {
      this.informacionActaAsesoria = {
        FirmaQR: this.infoSurveyQR.firmaQR,
        AE: this.typeAdviceSelectedEspec.AE,
        AE_Fecha: this.typeAdviceSelectedEspec.AE_Fecha,
        AE_HoraInicio: this.typeAdviceSelectedEspec.AE_HoraInicio,
        AE_HoraFin: this.typeAdviceSelectedEspec.AE_HoraFin,
        AE_HorasTotales: this.typeAdviceSelectedEspec.AE_HorasTotales,
        // AE_HorasTotales: '1',
        AP: this.typeAdviceSelectedProject.AP,
        AP_Mes: this.typeAdviceSelectedProject.AP_Mes,
        AP_Anio: this.typeAdviceSelectedProject.AP_Anio,

        IGE_RazonSocial: this.infoCompany.nombre,
        IGE_TipoDocumento: this.infoCompany.tipoDocumento,
        IGE_NumeroDocumento: this.infoCompany.numeroDocumento,
        IGE_Direccion: this.infoCompany.direccion,
        IGE_MinicipioId: this.infoCompany.municipioId.toString(),
        IGE_MinicipioNombre: this.infoCompany.municipio,
        IGE_DepartamentoId: this.infoCompany.departamentoId.toString(),
        IGE_DepartamentoNombre: this.infoCompany.departamento,
        IGE_Telefono: this.infoCompany.telefono,
        // IGE_Correo: this.infoCompany.emailContacto,
        IGE_Correo: '',
        IGE_Latitud: this.infoCompany.latitud,
        // IGE_Latitud: '6.1773265',
        IGE_Longitud: this.infoCompany.longitud,
        // IGE_Longitud: '-75.6091582',

        TTA_lista: TTA_LISTA,

        Observaciones: this.commentSucces.Observaciones,
        RV_Exitosa: this.commentAdvice.typeSelected,
        RV_Motivo: this.commentFailed.RV_Motivo,
        RV_FechaServicio: this.commentFailed.RV_FechaServicio,
        RV_JustificacionMotivo: this.commentFailed.RV_JustificacionMotivo,

        RV_Calificacion: this.infoSurveyQR.answerPool,
        // tslint:disable-next-line: radix
        RE_ResposableId: parseInt(this.infoSurveyQR.responsableId),
        RE_ResposableNombre: this.infoSurveyQR.nombreResponsable,
        RE_ResposableDocumento: this.infoSurveyQR.numeroDocumentoResponsable,
        RE_ResponsableCargo: this.infoSurveyQR.cargo,
        RE_ResponsableFirma: this.infoSurveyQR.signature,

        RA_ResposableId: this.infoSurveyARL.responsableId,
        RA_ResposableDocumento: this.infoSurveyARL.responsableDocumento,
        RA_ResposableNombre: this.infoSurveyARL.responsableNombre,
        RA_ResposableNumeroLicenciaSST: this.infoSurveyARL.responsableNumeroLicenciaSST,
        RA_ResponsableRazonSocial: this.infoSurveyARL.responsableRazonSocial,
        RA_ResponsableCargo: this.infoSurveyARL.responsableCargo,
        RA_ResponsableFirma: this.infoSurveyARL.responsableFirma,

        DocumentoUsuario: this.infoSurveyARL.responsableDocumento,
        strIp: this.ipAddress,
        strNitEmpresaActividades: idProveedor

      };
    } else {
      this.informacionActaAsesoria = {
        FirmaQR: this.infoSurveyQR.firmaQR,
        AE: this.typeAdviceSelectedEspec.AE,
        AE_Fecha: this.typeAdviceSelectedEspec.AE_Fecha,
        AE_HoraInicio: this.typeAdviceSelectedEspec.AE_HoraInicio,
        AE_HoraFin: this.typeAdviceSelectedEspec.AE_HoraFin,
        AE_HorasTotales: this.typeAdviceSelectedEspec.AE_HorasTotales,
        // AE_HorasTotales: '1',
        AP: this.typeAdviceSelectedProject.AP,
        AP_Mes: this.typeAdviceSelectedProject.AP_Mes,
        AP_Anio: this.typeAdviceSelectedProject.AP_Anio,

        IGE_RazonSocial: this.infoCompany.nombre,
        IGE_TipoDocumento: this.infoCompany.tipoDocumento,
        IGE_NumeroDocumento: this.infoCompany.numeroDocumento,
        IGE_Direccion: this.infoCompany.direccion,
        IGE_MinicipioId: this.infoCompany.municipioId.toString(),
        IGE_MinicipioNombre: this.infoCompany.municipio,
        IGE_DepartamentoId: this.infoCompany.departamentoId.toString(),
        IGE_DepartamentoNombre: this.infoCompany.departamento,
        IGE_Telefono: this.infoCompany.telefono,
        // IGE_Correo: this.infoCompany.emailContacto,
        IGE_Correo: '',
        IGE_Latitud: this.infoCompany.latitud,
        // IGE_Latitud: '6.1773265',
        IGE_Longitud: this.infoCompany.longitud,
        // IGE_Longitud: '-75.6091582',

        TTA_lista: TTA_LISTA,

        Observaciones: this.commentSucces.Observaciones,
        RV_Exitosa: this.commentAdvice.typeSelected,
        RV_Motivo: this.commentFailed.RV_Motivo,
        RV_FechaServicio: this.commentFailed.RV_FechaServicio,
        RV_JustificacionMotivo: this.commentFailed.RV_JustificacionMotivo,

        RV_Calificacion: '',
        RE_ResposableId: parseInt(this.infoSurveyQR.responsableId),
        RE_ResposableNombre: this.infoSurveyQR.nombreResponsable,
        RE_ResposableDocumento: this.infoSurveyQR.numeroDocumentoResponsable,
        RE_ResponsableCargo: this.infoSurveyQR.cargo,
        RE_ResponsableFirma: '',

        RA_ResposableId: this.infoSurveyQR.documentoResponsableARL,
        RA_ResposableDocumento: this.infoSurveyQR.documentoResponsableARL,
        RA_ResposableNombre: this.infoSurveyQR.nombreResponsableARL + ' ' + this.infoSurveyQR.apellidoResponsableARL,
        RA_ResposableNumeroLicenciaSST: this.infoSurveyQR.licenciaSSTARL,
        RA_ResponsableRazonSocial: this.infoSurveyQR.nombreProveedor,
        RA_ResponsableCargo: this.infoSurveyQR.cargoARL,
        RA_ResponsableFirma: this.infoSurveyQR.signature,

        DocumentoUsuario: this.infoSurveyQR.documentoResponsableARL,
        strIp: this.ipAddress,
        strNitEmpresaActividades: idProveedor

      };
    }

    return this.informacionActaAsesoria;

  }

  async saveActasAsesoria(files: any[] = []) {
    // const nuevasActividades = [];
    const createdAdvisory = this.getAllInfoToAdvisory();
    // const companySelected = JSON.parse(sessionStorage.companySelected);
    // const actividadesMigradasStorage = await this.storage.get('listaActividades');

    // for (let i = 0; i < actividadesMigradasStorage.length; i++) {
    //   createdAdvisory.activities.forEach(element => {
    //     const codigoBuscar = element.id;
    //     const encontro = actividadesMigradasStorage[i].listaActividadesMigradas.find(x => x.id === codigoBuscar);

    //     if (encontro) {
    //       const nuevasActividadesMigradas = actividadesMigradasStorage[i].listaActividadesMigradas.splice(encontro, 1);
    //       companySelected.listaActividadesMigradas = nuevasActividadesMigradas;
    //       const modificacionCompanySelected = companySelected;
    //       actividadesMigradasStorage[i] = modificacionCompanySelected;
    //     }
    //   });

    //   nuevasActividades.push(actividadesMigradasStorage[i]);
    // }

    const listaActividades = await this.storage.get('listaActividades');

    for (let i = 0; i < listaActividades.length; i++) {
      const actividadesMigradas = listaActividades[i].listaActividadesMigradas;

      actividadesMigradas.forEach(element => {
        const idActividad = element.id;
        const TTA_LISTA = createdAdvisory.activities;
        const encontro = TTA_LISTA.find(x => x.id === idActividad);

        if (encontro) {
          actividadesMigradas.splice(encontro, 1);
          listaActividades[i].listaActividadesMigradas = actividadesMigradas;
        }
      });
    }

    this.storage.set('listaActividades', listaActividades);
    // this.storage.set('listaActividades', nuevasActividades);
    const actasGuardadas = await this.storage.get('actasAsesoriaSinInternet') || [];
    actasGuardadas.push({ ...createdAdvisory, files });
    await this.storage.set('actasAsesoriaSinInternet', actasGuardadas);

    return true;
  }

  limpiarVariablesAsesoria() {
    this.activitiesSelectedForExec = [];
    this.migratedHours = 0;
    this.typeAdvice = {};
    this.infoCompany = {};
    this.commentAdvice = {};
    this.infoSurveyQR = {};
    this.infoSurveyARL = {};
    this.infoActivityAtachSelected = {};
    this.actionLine = '';
    this.saveAttach = [];
    this.infoDocumentosPorActividad = [];
    this.fotosAdjuntas = [];
    this.pdfAdjuntos = [];
    this.filesAtachDocs = [];
    this.infoActivityAtachSelected = {};
    this.activitiesSelected = [];
    this.typeAdviceSelectedEspec = '';
    this.typeAdviceSelectedProject = '';
    this.commentFailed = {};
    this.commentSucces = {};
    // this.actasAsesoria = [];
    this.informacionActaAsesoria = {};
  }


  // ---------------------------- MÓDULO EVENTOS POSITIVA ------------------------ \\
  /**
   * Este metodo permite guardar en una variable la información del evento al cual se va a seleccionar
   * en el módulo de eventos positiva, guarda la siguiente información
   */
  saveRegisterEvent(registerNewEvent) {
    this.newRegisterEvent = {
      FK_ID_Evento: null,
      dtmFechaRegistro: '',
      strDocumentoUsuario: '',
      strGeoposicionamiento: ''
    };
    this.newRegisterEvent = registerNewEvent;
  }

  /**
   * Se crea este método para tener los datos unificados al momento de realizar una incripción
   * del asistente de forma manual.
   */
  saveRegisterManual(registro) {
    this.newRegisterEventManual = [];
    this.newRegisterEventManual.push(registro);
    this.saveRegisterNew();
  }


  saveRegisterNew() {
    const registroEvento = {
      eventInfo: this.newRegisterEvent,
      userInfo: this.newRegisterEventManual[0]
    };
    return registroEvento;
  }

  /**
   * Obtiene la sumatoria del tiempo, en minutos, de todas las actividades registradas para el día actual.
   */
  async getRegisteredTime(): Promise<number> {
    const getItem = (): any => {
      return { date: moment().startOf('day').toISOString(), minutes: 0 };
    };

    let registeredTime = await this.storage.get('registeredTime');

    if (!registeredTime) {
      // Si no hay registros de tiempos, se crea para el día actual
      registeredTime = getItem();
    }

    const registeredDate = moment(registeredTime.date);

    if (!registeredDate.isSame(moment().startOf('day'), 'day')) {
      // Si el registro del tiempo de actividades es para un día diferente del actual, se
      // reinicia el conteo
      registeredTime = getItem();
    }

    return registeredTime.minutes;
  }

  /**
   * Añade los minutos indicados al contador de tiempo de todas las actividades para el día actual.
   *
   * @param minutes Minutos de la actividad a registrar.
   */
  async setRegisteredTime(minutes: number): Promise<void> {
    let registeredMinutes = await this.getRegisteredTime();
    registeredMinutes = registeredMinutes + minutes;
    const registeredTime = { date: moment().startOf('day').toISOString(), minutes: registeredMinutes };
    await this.storage.set('registeredTime', registeredTime);
  }

}
