import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { SignaturePage } from 'src/app/pages/companies/signature/signature.page';
import { CompaniesService } from './companies.service';

/**
 * Descarta los cambios de la empresa actualmente en edición.
 */
@Injectable({
  providedIn: 'root'
})
export class ClearCompanyGuard implements CanDeactivate<SignaturePage> {

  constructor(private companiesService: CompaniesService) { }

  canDeactivate(): boolean {
    this.companiesService.discardChanges();

    return true;
  }

}