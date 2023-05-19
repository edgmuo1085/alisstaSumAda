import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

/**
 * Servicio de configuración de la barra de navegación.
 */
@Injectable()
export class NavbarService {

  /**
   * Indica si la barra de navegación debe mostrarse u ocultarse.
   */
  get show(): Observable<boolean> {
    return this._show.asObservable();
  }

  private _show: Subject<boolean>;

  constructor() {
    this._show = new Subject();
  }

  /**
   * Establece si la barra de navegación debe mostrarse u ocultarse.
   *
   * @param isVisible Si es verdadero, la barra se muestra. En caso contrario, se oculta.
   */
  setVisibility(isVisible: boolean): void {
    this._show.next(isVisible);
  }

}
