import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CompaniesService } from 'src/app/services/companies/companies.service';
import { StorageService } from 'src/app/storage.service';

/**
 * Componente para la vista de listado de empresas migradas.
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {

  /**
   * Listado de empresas migradas.
   */
  companies: any[];

  /**
   * Término de búsqueda para la casilla de filtrado de empresas.
   */
  term: string;

  constructor(
    private companiesService: CompaniesService,
    private storageService: StorageService,
    private alertService: AlertService
  ) { }

  ionViewWillEnter(): void {
    this.retrieveCompanies();
  }

  /**
   * Obtiene el listado de empresas migradas.
   */
  async fetchCompanies(): Promise<void> {
    const onSuccess = async (response: any): Promise<void> => {
      this.companies = await this.excludeConfirmed(response);
    };

    const onError = (error: any): void => {
      let header: string;
      let message: string;

      if (error instanceof HttpErrorResponse) {
        if (error.status === 417) {
          header = 'Sin datos';
          message = 'Estimado usuario, no tiene empresas agendadas para actualizar.';
        } else {
          header = 'Error de conexión';
          message = 'Ha ocurrido un error de conexión con el servidor.';
        }
      } else {
        header = 'Memoria llena';
        message = 'Compruebe que tiene suficiente espacio disponible en el dispositivo.';
      }

      this.alertService.showAlert(header, message);
    };

    const loading = await this.alertService.showLoading();
    const session = await this.storageService.get('sesion');

    this.companiesService.fetchCompanies(session.idRegistro)
      .pipe(finalize(() => this.alertService.hideLoading(loading)))
      .subscribe(r => onSuccess(r), e => onError(e));
  }

  /**
   * Establece las empresas migradas que se encuentren en el almacén de datos.
   */
  private async retrieveCompanies(): Promise<void> {
    this.companies = await this.excludeConfirmed(await this.companiesService.companies);
  }

  /**
   * Excluye del listado las compañías que ya hayan sido editadas y confirmadas.
   * 
   * Estas compañías solo tienen pendiente el envío de datos, y pueden verse en el módulo
   * _Empresas por enviar_.
   */
  private async excludeConfirmed(companies: any[]): Promise<any[]> {
    const updatedCompanies = await this.companiesService.updatedCompanies;
    const confirmed = updatedCompanies.filter(u => u.__confirmed);
    const editables = companies.filter(c => !confirmed.find(u => u.Pk_Id_AS_004_Empresas_AMigrar === c.Pk_Id_AS_004_Empresas_AMigrar));

    return editables;
  }

}
