import { Component, NgZone } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CompaniesService } from 'src/app/services/companies/companies.service';

/**
 * Componente para la vista de listado de empresas confirmadas.
 */
@Component({
  selector: 'app-list-confirmed',
  templateUrl: './list-confirmed.page.html',
  styleUrls: ['./list-confirmed.page.scss'],
})
export class ListConfirmedPage {

  /**
   * Listado de empresas confirmadas.
   */
  companies: any[];

  /**
   * Término de búsqueda para la casilla de filtrado de empresas.
   */
  term: string;

  constructor(
    private companiesService: CompaniesService,
    private alertService: AlertService,
    private ngZone: NgZone
  ) { }

  ionViewWillEnter(): void {
    this.retrieveCompanies();
  }

  /**
   * Permite la edición de la empresa indicada.
   *
   * @param id Identificador de empresa.
   */
  async edit(id: number): Promise<void> {
    const company = await this.companiesService.prepareCompany(id);
    delete company.__confirmed;
    await this.companiesService.saveChanges();
    this.retrieveCompanies();
  }

  /**
   * Envía los datos al servidor para su procesamiento.
   *
   * @param id Identificador de empresa.
   */
  async send(id: number): Promise<void> {
    const onError = (): void => {
      this.ngZone.run(async () => {
        const alert = await this.alertService.showAlert(
          'Error',
          'Ha ocurrido un error en el servidor y no se pudieron guardar los datos. Intente más tarde.'
        );

        await alert.present();
        this.companiesService.discardChanges();
      });
    };

    const loading = await this.alertService.showLoading();
    await this.companiesService.prepareCompany(id);

    this.companiesService.save()
      .pipe(finalize(() => this.alertService.hideLoading(loading)))
      .subscribe({
        next: (r) => {
          this.ngZone.run(async () => {
            const result = r.split(';')[0];

            if (result !== 'true') {
              onError();

              return;
            }

            const alert = await this.alertService.showAlert(
              'Empresa actualizada',
              'Los datos se han registrado exitosamente.'
            );

            await alert.present();
            await this.retrieveCompanies();
          });
        },
        error: onError
      });
  }

  /**
   * Establece las empresas confirmadas que se encuentren en el almacén de datos.
   */
  private async retrieveCompanies(): Promise<void> {
    const companies = await this.companiesService.updatedCompanies;

    this.companies = companies.filter(c => c.__confirmed);
  }

}
