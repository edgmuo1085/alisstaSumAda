import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { Ambiente } from 'src/environments/environment.interface';
import { AppStorageService } from 'src/app/app-storage.service';


@Injectable({
  providedIn: 'root',
})
export class ApiUrlService {
  private baseUrlSubject$: BehaviorSubject<string>;
  private loginUrlSubject$: BehaviorSubject<string>;
  private baseUrlRecoveryPassSubject$: BehaviorSubject<string>;
  private ambienteNombreSubject: BehaviorSubject<string>;
  private initializedSubject = new BehaviorSubject<boolean>(false);
  public initialized$ = this.initializedSubject.asObservable();

  public baseUrl$; 
  public loginUrl$;
  public ambienteNombre$;

 constructor(private appStorage: AppStorageService) {
    this.initializeService();
  }

private async initializeService() {
    try {
      const almacenado = await this.appStorage.get('ambienteSeleccionado');
      const index = almacenado !== null ? parseInt(almacenado, 10) : environment.ambienteSeleccionado;

      const ambiente: Ambiente = !environment.production
        ? environment.ambientes[index] || environment.ambientes[0]
        : { 
            nombre: 'Producción', 
            url: environment.ambienteFijo, 
            recoveryPass: 'https://alissta.gov.co/SUM/AdminUsuariosSum/RecuperarClaveSUM' 
          };

      this.baseUrlSubject$ = new BehaviorSubject<string>(ambiente.url);
      this.loginUrlSubject$ = new BehaviorSubject<string>(ambiente.url + 'UsuarioSumServicio/login_app_ssum');
      this.baseUrlRecoveryPassSubject$ = new BehaviorSubject<string>(ambiente.recoveryPass);
      this.ambienteNombreSubject = new BehaviorSubject<string>(ambiente.nombre);

      this.baseUrl$ = this.baseUrlSubject$.asObservable();
      this.loginUrl$ = this.loginUrlSubject$.asObservable();
      this.ambienteNombre$ = this.ambienteNombreSubject.asObservable();

      // Marcar como inicializado
      this.initializedSubject.next(true);
      
    } catch (error) {
      console.error('Error inicializando ApiUrlService:', error);
      this.initializedSubject.next(false);
    }
  }

    public async setAmbiente(index: number): Promise<void> {
    if (!environment.production) {
      const ambiente = environment.ambientes[index];
      if (ambiente) {
        // Guardar en AppStorageService en lugar de localStorage
        await this.appStorage.set('ambienteSeleccionado', index.toString());
        
        this.baseUrlSubject$.next(ambiente.url);
        this.loginUrlSubject$.next(ambiente.url + 'UsuarioSumServicio/login_app_ssum');
        this.baseUrlRecoveryPassSubject$.next(ambiente.recoveryPass);
        this.ambienteNombreSubject.next(ambiente.nombre);
        
        console.log('Cambiado a ambiente:', ambiente.nombre, "url: ", this.baseUrlSubject$.value, "login: ", this.loginUrlSubject$.value);
      }
    }
  }

  public get API_GET_BRANCH_OFFICE_EVENT() {
    return this.baseUrlSubject$.value + 'Evento/Buscar-Sucursales';
  }

  public get API_GET_MUNICIPY_BRANCH_OFFICE_EVENT() {
    return this.baseUrlSubject$.value + 'Evento/Buscar-Municipio';
  }

  public get API_GET_EVENT_FOR_MUNICIPY() {
    return this.baseUrlSubject$.value + 'Evento/Buscar-Eventos';
  }

  public get API_GET_DOCUMENTS_TYPE() {
    return this.baseUrlSubject$.value + 'Evento/Buscar-DatosApp';
  }

  public get API_POST_CREATE_RESPONSIBLE_EVENT() {
    return this.baseUrlSubject$.value + 'Evento/Registrar-Responsable-Evento';
  }

  public get API_POST_REGISTER_RESPONSIBLE_EVENT_QR() {
    return this.baseUrlSubject$.value + 'Evento/Inscribir-Invitado-Qr';
  }

  public get API_POST_REGISTER_RESPONSIBLE_EVENT_MANUAL() {
    return this.baseUrlSubject$.value + 'Evento/Inscribir-Invitado-Manual';
  }

  public get API_GET_SEARCH_RESPONSIBLE_MANUAL_EVENT() {
    return this.baseUrlSubject$.value + 'Evento/Buscar-Invitados';
  }

  public get API_LIST_RECOMMENDATION_AT() {
    return this.baseUrlSubject$.value + 'Incidente/listar-siniestros-proveedor-app';
  }

  public get API_INFO_RECOMMENDATION_AT() {
    return this.baseUrlSubject$.value + 'Incidente/listar-recomendaciones-siniestro-app';
  }

  public get API_SAVE_RECOMMENDATION_DETAIL_AT() {
    return this.baseUrlSubject$.value + 'Incidente/guardar-recomendacionesDetallado-siniestro-app';
  }

  public get API_SAVE_RECOMMENDATION_AT() {
    return this.baseUrlSubject$.value + 'Incidente/guardar-recomendacionesGenerales-siniestro-app';
  }

  public get API_GET_Avtividades_Empresa() {
    return this.baseUrlSubject$.value + 'Actividad/Actividades-Empresa';
  }

  public get API_GET_Cantidad_Registros_Por_Pagina() {
    return this.baseUrlSubject$.value + 'Actividad/Cantidad_RegistrosPorPaginaAPP';
  }

  public get API_LIBERAR_ACTIVIDADES() {
    return this.baseUrlSubject$.value + 'Actividad/Actividades-Liberar';
  }

  public get API_RECOVERY_VERIFICATION_CODE() {
    return this.baseUrlSubject$.value + 'Actividad/Actividades-ReenviarCodigoVerificacion';
  }

  public get API_SAVE_ACTA_ASESORIA() {
    return this.baseUrlSubject$.value + 'Actividad/Actividades-GuardarActaAsesoria';
  }

  public get API_UPLOAD_FILE_ACTA_ASESORIA() {
    return this.baseUrlSubject$.value + 'Actividad/Actividades-SubirSoporteActividad';
  }

  public get API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP() {
    return this.baseUrlSubject$.value + 'Actividad/Enviar-CorreoNotificacionActaApp';
  }

  public get API_LIST_TEMAS_COMUNICACION() {
    return this.baseUrlSubject$.value + 'Comunicaciones/Datos-Comunicaciones';
  }

  public get API_BUSCAR_CUMUNICACIONES() {
    return this.baseUrlSubject$.value + 'Comunicaciones/Comunicaciones-Filtro';
  }

  public get API_LIST_MENSAJES_CONVERSACION() {
    return this.baseUrlSubject$.value + 'Comunicaciones/Comunicaciones-Mensajes';
  }

  public get API_GUARDAR_MENSAJE() {
    return this.baseUrlSubject$.value + 'Comunicaciones/Comunicaciones-Guardar-Mensaje';
  }

  public get API_EDITAR_ELIMINAR_MENSAJE() {
    return this.baseUrlSubject$.value + 'Comunicaciones/Comunicaciones-Editar-Mensaje';
  }

  public get API_CAMBIAR_ESTADO_USUARIO() {
    return this.baseUrlSubject$.value + 'Comunicaciones/Comunicaciones-Cambiar-Estado-Usuario';
  }

  public get API_LISTAR_EMPRESAS_MIGRADAS() {
    return this.baseUrlSubject$.value + 'MigrarEmpresa/Obtener_Empresas_Migrar';
  }

  public get API_GUARDAR_EMPRESA_MIGRADA() {
    return this.baseUrlSubject$.value + 'MigrarEmpresa/Guardar-ActaActualizacionEmpresa';
  }

  public get APP_VERSION_ENVIRONMENT() {
    return this.baseUrlSubject$.value;
  }

  public get RECUPERAR_PASSWORD() {
    // if (environment.production) {
    //   return 'https://alissta.gov.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
    // }
    // return 'https://positiva.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
    return this.baseUrlRecoveryPassSubject$.value;
  }

  public get ONE_SIGNAL_APP_ID() {
    return environment.production ? '6109fadd-da30-4364-8a6c-950ad936c01e' : 'af2757e0-1095-4476-84d2-298ee2b5bb5c';
  }

  public readonly ONE_SIGNAL_SENDER_ID = '1023388241846';
}
