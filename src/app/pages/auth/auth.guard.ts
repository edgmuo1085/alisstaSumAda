import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConfigService } from '../../config.service';

/**
 * Comprueba que el usuario esté autenticado.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   * Dirección URL para la página de inicio de sesión dentro del módulo de autenticación.
   */
  private readonly LOGIN_URL = 'auth/login';

  constructor(
    private router: Router,
    private config: ConfigService
  ) {}

  canActivate(): boolean {
    const existe = this.config.isLogged;
    if (existe) {
      return true;
    } else {
      return false;
    }
  }
}
