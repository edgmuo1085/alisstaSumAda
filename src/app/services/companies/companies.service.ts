import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { defer, from, Observable } from 'rxjs';
import { concatMap, map, tap } from 'rxjs/operators';
import { ApiUrlService } from '../apiUrl/api-url.service';
import { AppStorageService } from 'src/app/app-storage.service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {

  private _companies: any[];
  private _udpatedCompanies: any[];
  private _company: any;

  constructor(
    private http: HttpClient,
    private storage: Storage,
    private appStorage: AppStorageService,
    private apiUrl: ApiUrlService
  ) {}

  // =============================
  // GETTERS
  // =============================

  get companies() {
    return (async () => {
      if (!this._companies) {
        await this.retrieveCompanies();
      }
      return this._companies;
    })();
  }

  get updatedCompanies() {
    return (async () => {
      if (!this._udpatedCompanies) {
        await this.retrieveUpdatedCompanies();
      }
      return this._udpatedCompanies;
    })();
  }

  get departamentos() {
    return this.storage.get('migrated_departamentos');
  }

  get municipios() {
    return this.storage.get('migrated_municipios');
  }

  get vias() {
    return this.storage.get('migrated_vias');
  }

  get cuadrantes() {
    return this.storage.get('migrated_cuadrantes');
  }

  get complementos() {
    return this.storage.get('migrated_complementos');
  }

  get barrios() {
    return this.storage.get('migrated_barrios');
  }

  get urbanizaciones() {
    return this.storage.get('migrated_urbanizaciones');
  }

  get manzanas() {
    return this.storage.get('migrated_manzanas');
  }

  get predios() {
    return this.storage.get('migrated_predios');
  }

  get company() {
    return this._company;
  }

  // *** solo es pequeño → se queda en AppStorageService ***
  get responsableARL() {
    return (async () => {
      return await this.appStorage.get('sesion');
    })();
  }

  // =============================
  // MÉTODOS PÚBLICOS
  // =============================

  fetchCompanies(idUsuario: number): Observable<any> {
    const url = `${this.apiUrl.API_LISTAR_EMPRESAS_MIGRADAS}?id_Usuario=${idUsuario}`;

    return this.http.post(url, null).pipe(
      concatMap((r: any) => defer(() => from(this.setCompanies(r)))),
      map(() => this._companies)
    );
  }

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

  async saveChanges(): Promise<boolean> {
    if (!this.company) {
      throw new Error('No company set.');
    }

    const updatedCompanies = await this.updatedCompanies;
    const index = updatedCompanies.findIndex(
      c => c.Pk_Id_AS_004_Empresas_AMigrar === this.company.Pk_Id_AS_004_Empresas_AMigrar
    );

    if (index < 0) {
      updatedCompanies.push(this.company);
    } else {
      updatedCompanies[index] = this.company;
    }

    await this.setUpdatedCompanies(updatedCompanies);
    this.discardChanges();
    return true;
  }

  discardChanges(): void {
    this._company = undefined;
  }

  save(): Observable<any> {
    if (!this.company) {
      throw new Error('No company set.');
    }

    const url = this.apiUrl.API_GUARDAR_EMPRESA_MIGRADA;

    return this.http.post(url, this.company).pipe(
      tap(async (r: any) => {
        if (!this.isSuccessfulResponse(r)) return;

        await this.removeCompanyFromLists(this.company.Pk_Id_AS_004_Empresas_AMigrar);
        this.discardChanges();
      })
    );
  }

  // =============================
  // PRIVADOS
  // =============================

  private isSuccessfulResponse(res: any): boolean {
    return res.split(';')[0] === 'true';
  }

  private async removeCompanyFromLists(companyId: number): Promise<void> {
    const indexC = (await this.companies).findIndex(
      c => c.Pk_Id_AS_004_Empresas_AMigrar === companyId
    );

    if (indexC !== -1) {
      this._companies.splice(indexC, 1);
      await this.setCompanies(this._companies);
    }

    const indexM = (await this.updatedCompanies).findIndex(
      m => m.Pk_Id_AS_004_Empresas_AMigrar === companyId
    );

    if (indexM !== -1) {
      this._udpatedCompanies.splice(indexM, 1);
      await this.setUpdatedCompanies(this._udpatedCompanies);
    }
  }

  private async retrieveCompanies(): Promise<void> {
    this._companies = (await this.storage.get('migrated_companies')) || [];
  }

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

    await this.storage.set('migrated_companies', companies);

    if (departamentos.length) await this.storage.set('migrated_departamentos', departamentos);
    if (municipios.length) await this.storage.set('migrated_municipios', municipios);
    if (vias.length) await this.storage.set('migrated_vias', vias);
    if (cuadrantes.length) await this.storage.set('migrated_cuadrantes', cuadrantes);
    if (complementos.length) await this.storage.set('migrated_complementos', complementos);
    if (barrios.length) await this.storage.set('migrated_barrios', barrios);
    if (urbanizaciones.length) await this.storage.set('migrated_urbanizaciones', urbanizaciones);
    if (manzanas.length) await this.storage.set('migrated_manzanas', manzanas);
    if (predios.length) await this.storage.set('migrated_predios', predios);

    this._companies = companies;
    return true;
  }

  private async retrieveUpdatedCompanies(): Promise<void> {
    this._udpatedCompanies = (await this.storage.get('updated_companies')) || [];
  }

  private async setUpdatedCompanies(companies: any[]): Promise<boolean> {
    await this.storage.set('updated_companies', companies);
    this._udpatedCompanies = companies;
    return true;
  }
}
