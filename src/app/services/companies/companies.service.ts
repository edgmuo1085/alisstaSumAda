import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defer, from, Observable, throwError } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { StorageService } from 'src/app/storage.service';
import { environment } from 'src/environments/environment';

/**
 * Manejo de empresas migradas.
 */
@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  /**
   * Listado de empresas migradas.
   */
  get companies() {
    return (async () => {
      if (!this._companies) {
        await this.retrieveCompanies();
      }

      return this._companies;
    })();
  }

  /**
   * Listado de departamentos.
   */
  get departamentos() {
    return (async () => await this.storageService.get('migrated_departamentos'))();
  }

  /**
   * Listado de municipios.
   */
  get municipios() {
    return (async () => await this.storageService.get('migrated_municipios'))();
  }

  /**
   * Listado de tipos de vía.
   */
  get vias() {
    return (async () => await this.storageService.get('migrated_vias'))();
  }

  /**
   * Listado de tipos de cuadrante.
   */
  get cuadrantes() {
    return (async () => await this.storageService.get('migrated_cuadrantes'))();
  }

  /**
   * Listado de tipos de complemento.
   */
  get complementos() {
    return (async () => await this.storageService.get('migrated_complementos'))();
  }

  /**
   * Listado de tipos de barrio.
   */
  get barrios() {
    return (async () => await this.storageService.get('migrated_barrios'))();
  }

  /**
   * Listado de tipos de urbanización.
   */
  get urbanizaciones() {
    return (async () => await this.storageService.get('migrated_urbanizaciones'))();
  }

  /**
   * Listado de tipos de manzana.
   */
  get manzanas() {
    return (async () => await this.storageService.get('migrated_manzanas'))();
  }

  /**
   * Listado de tipos de predio.
   */
  get predios() {
    return (async () => await this.storageService.get('migrated_predios'))();
  }

  /**
   * Listado de empresas actualizadas.
   */
  get updatedCompanies() {
    return (async () => {
      if (!this._udpatedCompanies) {
        await this.retrieveUpdatedCompanies();
      }

      return this._udpatedCompanies;
    })();
  }

  /**
  * Empresa que está siendo actualmente manipulada.
  */
  get company() {
    return this._company;
  }

  /**
   * Obtiene el responsable de la ARL (usuario actual).
   */
  get responsableARL() {
    return (async () => {
      return await this.storageService.get('sesion');
    })();
  }

  /**
   * Listado de empresas migradas.
   */
  private _companies: any[];

  /**
   * Listado de empresas actualizadas.
   */
  private _udpatedCompanies: any[];

  /**
   * Empresa que está siendo actualmente manipulada.
   */
  private _company: any;

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }

  /**
   * Obtiene el listado de empresas migradas desde el servidor.
   *
   * Actualiza la lista del almacén de datos y regresa este valor.
   *
   * @param idUsuario Identificación del usuario por el cual filtrar las empresas.
   */
  fetchCompanies(idUsuario: number): Observable<any> {
    const url = `${environment.API_LISTAR_EMPRESAS_MIGRADAS}?id_Usuario=${idUsuario}`;

    return this.http.post(url, null)
      .pipe(
        concatMap((r: any) => defer(() => from(this.setCompanies(r)))),
        map(r => {
          if (r) {
            return this._companies;
          }

          throw new Error('Full memory.');
        })
      );
  }

  /**
   * Establece la empresa que se va a modificar. Se realiza una búsqueda de la empresa
   * por el identificador proporcionado. Primero se realiza una búsqueda dentro
   * del arreglo de empresas modificadas y, si no está presente, se busca en el arreglo
   * de empresas migradas.
   *
   * _IMPORTANTE: Solo puede haber una empresa siendo modificada a la vez._
   *
   * @param id Identificador de la empresa.
   */
  async prepareCompany(id: number): Promise<any> {
    if (this.company) {
      throw new Error('Company already in place.');
    }

    let result = await this.updatedCompanies;
    let company = result.find(r => r.Pk_Id_AS_004_Empresas_AMigrar === id);

    if (!company) {
      result = await this.companies;
      company = result.find(r => r.Pk_Id_AS_004_Empresas_AMigrar === id);
    }

    this._company = JSON.parse(JSON.stringify(company));

    return this.company;
  }

  /**
   * Guarda en el almacén de datos los cambios hechos a la empresa actualmente en edición.
   *
   * Regresa verdadero si el proceso se realizó satisfactoriamente, y falso en caso de que
   * no haya memoria en el dispositivo.
   */
  async saveChanges(): Promise<boolean> {
    if (!this.company) {
      throw new Error('No company set.');
    }

    const updatedCompanies = await this.updatedCompanies;
    const index = updatedCompanies.findIndex(c => c.Pk_Id_AS_004_Empresas_AMigrar === this.company.Pk_Id_AS_004_Empresas_AMigrar);

    if (index < 0) {
      updatedCompanies.push(this.company);
    } else {
      updatedCompanies[index] = this.company;
    }

    const result = this.setUpdatedCompanies(updatedCompanies);

    if (result) {
      this.discardChanges();
    }

    return result;
  }

  /**
   * Descarta los cambios que hayan actualmente en memoria.
   *
   * Este método no elimina los cambios que hayan sido previamente guardados en el almacén de
   * datos.
   */
  discardChanges(): void {
    this._company = undefined;
  }

  /**
   * Envía los cambios de la empresa actualmente en edición al servidor para ser procesados.
   */
  save(): Observable<any> {
    if (!this.company) {
      throw new Error('No company set.');
    }

    const url = environment.API_GUARDAR_EMPRESA_MIGRADA;
     console.log('uel de update', url);
     
    return this.http.post(url, this.company)
      .pipe(
        tap(async (r: any) => {
          const result = r.split(';')[0];

          if (result !== 'true') {
            return;
          }

          const indexC = (await this.companies).findIndex(c => c.Pk_Id_AS_004_Empresas_AMigrar === this.company.Pk_Id_AS_004_Empresas_AMigrar);
          this._companies.splice(indexC, 1);
          await this.setCompanies(this._companies);

          const indexM = (await this.updatedCompanies).find(m => m.Pk_Id_AS_004_Empresas_AMigrar === this.company.Pk_Id_AS_004_Empresas_AMigrar);
          this._udpatedCompanies.splice(indexM, 1);
          await this.setUpdatedCompanies(this._udpatedCompanies);

          this.discardChanges();
        })
      );
  }

  /**
   * Obtiene el listado de empresas migradas desde el almacén de datos.
   */
  private async retrieveCompanies(): Promise<void> {
    const result = await this.storageService.get('migrated_companies');
    this._companies = result ? result : [];
  }

  /**
   * Establece el listado de empresas migradas indicado en el almacén de datos.
   *
   * @param companies Listado de empresas migradas.
   */
  private async setCompanies(companies: any[]): Promise<boolean> {
    const departamentos = companies[0]?.listDertamentos ?? [];
    const municipios = companies[0]?.listMunicipios ?? [];
    const vias = companies[0]?.eDListaMaestrosDirecciones?.listaMaestrosAvenida ?? [];
    const cuadrantes = companies[0]?.eDListaMaestrosDirecciones?.listaMaestrosCuadrante ?? [];
    const complementos = companies[0]?.eDListaMaestrosDirecciones?.listaMaestrosSufijos ?? [];
    const barrios = companies[0]?.eDListaMaestrosDirecciones?.listaMaestrosBarrios ?? [];
    const urbanizaciones = companies[0]?.eDListaMaestrosDirecciones?.listaMaestrosUrbanizacion ?? [];
    const manzanas = companies[0]?.eDListaMaestrosDirecciones?.listaMaestrosManzana ?? [];
    const predios = companies[0]?.eDListaMaestrosDirecciones?.listaMaestrosTipoDePredio ?? [];
    delete companies[0]?.listDertamentos;
    delete companies[0]?.listMunicipios;
    delete companies[0]?.eDListaMaestrosDirecciones;
    const result = await this.storageService.set('migrated_companies', companies);

    if (departamentos.length) {
      await this.storageService.set('migrated_departamentos', departamentos);
    }

    if (municipios.length) {
      await this.storageService.set('migrated_municipios', municipios);
    }

    if (vias.length) {
      await this.storageService.set('migrated_vias', vias);
    }

    if (cuadrantes.length) {
      await this.storageService.set('migrated_cuadrantes', cuadrantes);
    }

    if (complementos.length) {
      await this.storageService.set('migrated_complementos', complementos);
    }

    if (barrios.length) {
      await this.storageService.set('migrated_barrios', barrios);
    }

    if (urbanizaciones.length) {
      await this.storageService.set('migrated_urbanizaciones', urbanizaciones);
    }

    if (manzanas.length) {
      await this.storageService.set('migrated_manzanas', manzanas);
    }

    if (predios.length) {
      await this.storageService.set('migrated_predios', predios);
    }

    if (result) {
      this._companies = companies;
    }

    return result;
  }

  /**
   * Obtiene el listado de empresas actualizadas desde el almacén de datos.
   */
  private async retrieveUpdatedCompanies(): Promise<void> {
    const result = await this.storageService.get('updated_companies');
    this._udpatedCompanies = result ? result : [];
  }

  /**
   * Establece el listado de empresas actualizadas indicado en el almacén de datos.
   *
   * @param companies Listado de empresas actualizadas.
   */
  private async setUpdatedCompanies(companies: any[]): Promise<boolean> {
    const result = await this.storageService.set('updated_companies', companies);

    if (result) {
      this._udpatedCompanies = companies;
    }

    return result;
  }

}
