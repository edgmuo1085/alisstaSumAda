/**
 * Tema de una visita.
 */
export interface VisitSubject {

  /**
   * Identificador del registro
   */
  id: string;

  /**
   * Identificador del tema.
   */
  idActividad: string;

  /**
   * Indica si la tarjeta de la visita está abierta o no.
   */
  isOpen?: boolean;

  /**
   * Indica si el tema contiene documentos adjuntos.
   */
  attachDocs?: boolean;

  /**
   * Indica si se incluirá este tema en la visita.
   */
  include?: boolean;

  /**
   * 
   */
  cantidadHorasEjecutar?: number;

  /**
   * 
   */
  cobertura?: number;

  /**
   * 
   */
  descripcionActividad?: string;

  /**
   * 
   */
  estadoInterno?: string;

  /**
   * 
   */
  firmamaQR?: number;

  /**
   * 
   */
  observaciones?: string;

  /**
   * 
   */
  registroCodigoEventosEduca?: number;

  /**
   * 
   */
  uniadMedidaDescripcion?: string;

  /**
   * 
   */
  uniadMedidaId?: number;

  /**
   * 
   */
  fechaFinContrato: Date;

  /**
   * 
   */
  cantidadDocumentos: number;

  /**
   * Identificador del siniestro.
   */
  Fk_Id_Siniestro: number;

  /**
   * Información del siniestro.
   */
  Siniestro: any;

  /**
   * Identificador de la actividad asociada al siniestro.
   */
  SiniestroOpsActividad: number;

}
