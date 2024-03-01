const ambiente = 'https://sproveedor.adacsc.co/sg-sst/';

export const environment = {
  production: true,

  API_AUTH: ambiente + 'UsuarioSumServicio/login_app_sum',

  API_GET_BRANCH_OFFICE_EVENT: ambiente + 'Evento/Buscar-Sucursales',
  API_GET_MUNICIPY_BRANCH_OFFICE_EVENT: ambiente + 'Evento/Buscar-Municipio',
  API_GET_EVENT_FOR_MUNICIPY: ambiente + 'Evento/Buscar-Eventos',
  API_GET_DOCUMENTS_TYPE: ambiente + 'Evento/Buscar-DatosApp',
  API_POST_CREATE_RESPONSIBLE_EVENT: ambiente + 'Evento/Registrar-Responsable-Evento',
  API_POST_REGISTER_RESPONSIBLE_EVENT_QR: ambiente + 'Evento/Inscribir-Invitado-Qr',
  API_POST_REGISTER_RESPONSIBLE_EVENT_MANUAL: ambiente + 'Evento/Inscribir-Invitado-Manual',
  API_GET_SEARCH_RESPONSIBLE_MANUAL_EVENT: ambiente + 'Evento/Buscar-Invitados',

  API_LIST_RECOMMENDATION_AT: ambiente + 'Incidente/listar-siniestros-proveedor-app',
  API_INFO_RECOMMENDATION_AT: ambiente + 'Incidente/listar-recomendaciones-siniestro-app',
  API_SAVE_RECOMMENDATION_DETAIL_AT: ambiente + 'Incidente/guardar-recomendacionesDetallado-siniestro-app',
  API_SAVE_RECOMMENDATION_AT: ambiente + 'Incidente/guardar-recomendacionesGenerales-siniestro-app',

  API_GET_Avtividades_Empresa: ambiente + 'Actividad/Actividades-Empresa',
  API_LIBERAR_ACTIVIDADES: ambiente + 'Actividad/Actividades-Liberar',
  API_RECOVERY_VERIFICATION_CODE: ambiente + 'Actividad/Actividades-ReenviarCodigoVerificacion',
  API_SAVE_ACTA_ASESORIA: ambiente + 'Actividad/Actividades-GuardarActaAsesoria',
  API_UPLOAD_FILE_ACTA_ASESORIA: ambiente + 'Actividad/Actividades-SubirSoporteActividad',

  API_LIST_TEMAS_COMUNICACION: ambiente + 'Comunicaciones/Datos-Comunicaciones',
  API_BUSCAR_CUMUNICACIONES: ambiente + 'Comunicaciones/Comunicaciones-Filtro',
  API_LIST_MENSAJES_CONVERSACION: ambiente + 'Comunicaciones/Comunicaciones-Mensajes',
  API_GUARDAR_MENSAJE: ambiente + 'Comunicaciones/Comunicaciones-Guardar-Mensaje',
  API_EDITAR_ELIMINAR_MENSAJE: ambiente + 'Comunicaciones/Comunicaciones-Editar-Mensaje',
  API_CAMBIAR_ESTADO_USUARIO: ambiente + 'Comunicaciones/Comunicaciones-Cambiar-Estado-Usuario',

  API_LISTAR_EMPRESAS_MIGRADAS: ambiente + 'MigrarEmpresa/Obtener_Empresas_Migrar',
  API_GUARDAR_EMPRESA_MIGRADA: ambiente + 'MigrarEmpresa/Guardar-ActaActualizacionEmpresa',

  RECUPERAR_PASSWORD: 'https://alissta.gov.co/SUM/AdminUsuariosSum/RecuperarClaveSUM',

  ONE_SIGNAL_SENDER_ID: '1023388241846',
  ONE_SIGNAL_APP_ID: '6109fadd-da30-4364-8a6c-950ad936c01e',
};
