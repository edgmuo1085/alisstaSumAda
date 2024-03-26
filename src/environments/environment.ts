// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.

//const ambiente = 'http://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/';
//const ambiente = 'http://sproveedor-test.adacsc.co/sg-sst/';
//http://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/; 

// const ambiente = 'https://sproveedor.adacsc.co/sg-sst/';                               // Produccion
const ambiente = 'http://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/'; // Test Original 
// const ambiente = 'http://test-dos-positiva.adacsc.co/';
// const ambiente = 'http://splaneacion-test-dos.adacsc.co/';
// const ambiente = 'http://saplicacion-test-dos.adacsc.co/';
// const ambiente = 'http://sempresa-test-dos.adacsc.co/';
// const ambiente = 'http://splananual-test-dos.adacsc.co/';
// const ambiente = 'http://sincidenteinvestigacion-test-dos.adacsc.co/';
// const ambiente = 'http://sparticipacion-test-dos.adacsc.co/';
// const ambiente = 'http://smedicionevaluacion-test-dos.adacsc.co/';
// const ambiente = 'http://sproveedor-test-dos.adacsc.co/';
// const ambiente = 'http://senfermedadlaboral-test-dos.adacsc.co/';
// const ambiente = 'http://srevision-test-dos.adacsc.co/';


export const environment = {
  production: false,

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
  API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP: ambiente + 'Actividad/Enviar-CorreoNotificacionActaApp',

  API_LIST_TEMAS_COMUNICACION: ambiente + 'Comunicaciones/Datos-Comunicaciones',
  API_BUSCAR_CUMUNICACIONES: ambiente + 'Comunicaciones/Comunicaciones-Filtro',
  API_LIST_MENSAJES_CONVERSACION: ambiente + 'Comunicaciones/Comunicaciones-Mensajes',
  API_GUARDAR_MENSAJE: ambiente + 'Comunicaciones/Comunicaciones-Guardar-Mensaje',
  API_EDITAR_ELIMINAR_MENSAJE: ambiente + 'Comunicaciones/Comunicaciones-Editar-Mensaje',
  API_CAMBIAR_ESTADO_USUARIO: ambiente + 'Comunicaciones/Comunicaciones-Cambiar-Estado-Usuario',

  API_LISTAR_EMPRESAS_MIGRADAS: ambiente + 'MigrarEmpresa/Obtener_Empresas_Migrar',
  API_GUARDAR_EMPRESA_MIGRADA: ambiente + 'MigrarEmpresa/Guardar-ActaActualizacionEmpresa',

  RECUPERAR_PASSWORD: 'http://positiva.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM',

  ONE_SIGNAL_SENDER_ID: '1023388241846',
  ONE_SIGNAL_APP_ID: 'af2757e0-1095-4476-84d2-298ee2b5bb5c',
};
