import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { DetailsPage } from 'src/app/pages/companies/details/details.page';

/**
 * Comprueba si hay cambios pendientes por guardar en la empresa en edición actual.
 */
@Injectable({
  providedIn: 'root'
})
export class CheckChangesGuard implements CanDeactivate<DetailsPage> {

  async canDeactivate(component: DetailsPage): Promise<boolean> {
    return await component.canNavigate();
  }

}
