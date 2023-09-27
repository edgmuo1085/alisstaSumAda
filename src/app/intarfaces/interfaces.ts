export interface Sesion {
  sesion: string;
  trabajador: Trabajador;
  empresa: Empresa;
}

export interface Trabajador {
  name: string;
  documentType: string;
  documentNumber: string;
  position: string;
  email: string;
  phoneContact: string;
  address: string;
}

export interface Empresa {
  nameCompany: string;
  documentTypeCompany: string;
  documentNumber: string;
  phoneContact: string;
  companyAddress: string;
}

// tslint:disable-next-line: class-name
export interface userAuth {
  documentoEmpleador: number;
  documentoUsuario: string;
  password: string;
}

export interface RegistroAsistenteEvento {
  strTipoIdentificacionEmpresa: string;
  strNumeroDocumentoEmpresa: string;
  strTipoDocumentoEmpleado: string;
  strNumeroDocumentoEmpleado: string;
  strNombreEmpleado: string;
  dtmFechaNacimiento: string;
  FK_ID_Sexo: string;
  strTelefono: string;
  FK_ID_Cargo: string;
  FK_ID_Evento: string;
  strRazonSocial: string;
  strEmail: string;
}

// tslint:disable-next-line: class-name
export interface responsableEvento {
  FK_ID_Evento: number;
  strDocumentoUsuario: string;
  dtmFechaRegistro: string;
  strGeoposicionamiento: string;
}

// tslint:disable-next-line: class-name
export interface recommendationDetail {
  PK_ID_Recomendacion: string;
  fueImplementada: boolean;
  fechaImplementacion?: string;
  fueEficaz?: boolean;
  causaDeLaNoImplementacion?: string;
  nombreSoporte?: string;
}

// tslint:disable-next-line: class-name
export interface recommendationAT {
  Pk_ID_Siniestro: string;
  Observaciones: string;
  nombreResponsableARL: string;
  cargoResponsableARL: string;
  firmaResponsableARL: string;
  idUsuarioARL: string;
  idProveedor: string;
  nombreResponsableEmpresa: string;
  cargoResponsableEmpresa: string;
  firmaResponsableEmpresa: string;
}

// tslint:disable-next-line: class-name
export interface actaAsesoria {
  FirmaQR?: boolean;
  AE?: boolean;
  AE_Fecha?: string;
  AE_HoraInicio?: string;
  AE_HoraFin?: string;
  AE_HorasTotales?: string;
  AP?: boolean;
  AP_Mes?: string;
  AP_Anio?: string;
  IGE_RazonSocial?: string;
  IGE_TipoDocumento?: string;
  IGE_NumeroDocumento?: string;
  IGE_Direccion?: string;
  IGE_MinicipioId?: string;
  IGE_MinicipioNombre?: string;
  IGE_DepartamentoId?: string;
  IGE_DepartamentoNombre?: string;
  IGE_Telefono?: string;
  IGE_Correo?: string;
  IGE_Latitud?: string;
  IGE_Longitud?: string;
  TTA_lista?: any;
  Observaciones?: string;
  RV_Exitosa?: boolean;
  RV_Motivo?: string;
  RV_FechaServicio?: string;
  RV_JustificacionMotivo?: string;
  RV_Calificacion?: string;
  RE_ResposableId?: any;
  RE_ResposableNombre?: string;
  RE_ResposableDocumento?: string;
  RE_ResponsableCargo?: string;
  RE_ResponsableFirma?: string;
  RA_ResposableId?: string;
  RA_ResposableDocumento?: string;
  RA_ResposableNombre?: string;
  RA_ResposableNumeroLicenciaSST?: string;
  RA_ResponsableCargo?: string;
  RA_ResponsableRazonSocial?: string;
  RA_ResponsableFirma?: string;
  DocumentoUsuario?: string;
  strIp?: string;
  strNitEmpresaActividades?: string;
}

// tslint:disable-next-line: class-name
interface detalleActividad {
  id: string;
  Codigo: string;
  Cantidad: string;
  UnidadMedida: string;
  Cobertura: string;
  NumeroAutorizacion?: string;
  NumeroActividad?: string;
  Descripcion: string;
}

// tslint:disable-next-line: class-name
export interface Photo {
  filepath?: string;
  webviewPath?: string;
  idFoto?: string;
}

// tslint:disable-next-line: class-name
export interface uploadFile {
  UidActaAsesoria: number;
  UidActividadMigradaXUSuario: number;
  TipoSoporte: string;
  Base64?: any;
}

// tslint:disable-next-line: class-name
export interface responsibleCode {
  id?: number;
  nombre?: string;
  cargo?: string;
  codigoVerificacion?: string;
  correoElecctronico?: string;
}
// tslint:disable-next-line: class-name
export interface liberarActividades {
  ListaIdsActividades: number[];
  direccionIP: string;
  CedulaUsuarioModifica: string;
}
