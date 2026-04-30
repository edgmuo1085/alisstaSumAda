export interface ActivityForSend {
    activities: Activity[];
    migrateHour: number;
    typeAdvisory: TypeAdvisory;
    infoCompany: InfoCompany;
    commentsAdvice: CommentsAdvice;
    infoSurveyQR: InfoSurveyQR;
    infoSurveyARL: InfoSurveyARL;
    ip: string;
    files: File[];
}

export interface Activity {
    include: boolean;
    id: number;
    idActividad: string;
    descripcionActividad: string;
    Observaciones: string;
    horasAEjecutar: number;
    unidadMedida: string;
    horasEjecutadas: string;
    coverage: number;
    registroCodigoEventosEduca: string;
    codeEduca: null;
    fechaFinContrato: Date;
    firmaQR: number;
    estadoInterno: string;
    fkIdSiniestro: number;
    siniestro: null;
    siniestroOpActividad: number;
    AdjuntarDocumentosTecnicos: string;
    CodigoeventoPositiva: null;
}

export interface CommentsAdvice {
    type: boolean;
    typeSelected: boolean;
    comment: string;
    redireccionar: boolean;
}

export interface File {
    UidActividadMigradaXUSuario: number;
    TipoSoporte: string;
    Base64: string;
    img?: string
}

export interface InfoCompany {
    nombre: string;
    tipoDocumento: string;
    numeroDocumento: string;
    direccion: string;
    latitud: string;
    longitud: string;
    telefono: string;
    emailContacto: null;
    departamento: string;
    departamentoId: number;
    municipio: string;
    municipioId: number;
}

export interface InfoSurveyARL {
    responsableId: string;
    responsableDocumento: string;
    responsableNombre: string;
    responsableNumeroLicenciaSST: string;
    responsableCargo: string;
    responsableRazonSocial: string;
    responsableFirma: string;
}

export interface InfoSurveyQR {
    nombreResponsable: string;
    responsableId: number;
    tipoDocumentoResponsable: string;
    numeroDocumentoResponsable: string;
    cargo: string;
    firmaQR: boolean;
    answerPool: string;
    signature: string;
    dateCreatedSurvey: Date;
}

export interface TypeAdvisory {
    type: string;
    typeSelected: boolean;
    fechaInicialAsesoria: Date;
    startHour: string;
    endHour: string;
    totalHours: string;
}