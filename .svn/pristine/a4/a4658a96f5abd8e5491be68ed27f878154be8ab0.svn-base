import { Injectable } from '@angular/core';

/**
 * Servicio de configuración de la aplicación.
 *
 * Maneja parámetros de configuración que no cambian de acuerdo al entorno de ejecución.
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  /**
   * Dirección URL de la web de _Alissta_ para la recuperación de contraseña.
   */
  // private readonly ALISSTA_PASSWORD_RECOVERY_URL = 'https://www.alissta.gov.co/AdminUsuarios/RecuperarClave';

  // private readonly ALISSTA_PASSWORD_RECOVERY_URL = 'https://test-alissta-sum.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
  private readonly ALISSTA_PASSWORD_RECOVERY_URL = 'http://positiva.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
  /**
   * Dirección URL de la web de _Alissta_ para el cambio de contraseña.
   */
  // private readonly ALISSTA_CHANGE_PASSWORD_URL = 'https://test-alissta-sum.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
  private readonly ALISSTA_CHANGE_PASSWORD_URL = 'http://positiva.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
  
  /**
   * Dirección URL en el que se encuentra el módulo de autenticación.
   */
  private readonly LOGIN_NAMESPACE = '';

  /**
   * Identificador de la aplicación para _iOS_.
   */
  private readonly IOS_APP_ID = '';

  /**
   * Identificador de la aplicación para _Android_.
   */
  private readonly ANDROID_APP_ID = '';

  /**
   *  Variable para indicar si inicio sesion
   */
  isLogged = false;

  /**
   * Dirección URL de la web de _Alissta_ para la recuperación de contraseña.
   */
  get allistaPasswordRecoveryURL(): string {
    return this.ALISSTA_PASSWORD_RECOVERY_URL;
  }

  /**
   * Dirección URL de la web de _Alissta_ para el cambio de contraseña.
   */
  get alisstaChangePasswordURL(): string {
    return this.ALISSTA_CHANGE_PASSWORD_URL;
  }

  /**
   * Dirección URL en el que se encuentra el módulo de autenticación.
   */
  get loginNamespace(): string {
    return this.LOGIN_NAMESPACE;
  }

  /**
   * Identificador de la aplicación para _iOS_.
   */
  get iosAppID(): string {
    return this.IOS_APP_ID;
  }

  /**
   * Identificador de la aplicación para _Android_.
   */
  get androidAppID(): string {
    return this.ANDROID_APP_ID;
  }

}
