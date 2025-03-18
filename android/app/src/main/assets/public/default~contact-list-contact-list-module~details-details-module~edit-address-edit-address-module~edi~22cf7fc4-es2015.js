(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"],{

/***/ "./src/app/services/companies/companies.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/companies/companies.service.ts ***!
  \*********************************************************/
/*! exports provided: CompaniesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesService", function() { return CompaniesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");










/**
 * Manejo de empresas migradas.
 */
class CompaniesService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    /**
     * Listado de empresas migradas.
     */
    get companies() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this._companies) {
                yield this.retrieveCompanies();
            }
            return this._companies;
        }))();
    }
    /**
     * Listado de departamentos.
     */
    get departamentos() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_departamentos'); }))();
    }
    /**
     * Listado de municipios.
     */
    get municipios() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_municipios'); }))();
    }
    /**
     * Listado de tipos de vía.
     */
    get vias() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_vias'); }))();
    }
    /**
     * Listado de tipos de cuadrante.
     */
    get cuadrantes() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_cuadrantes'); }))();
    }
    /**
     * Listado de tipos de complemento.
     */
    get complementos() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_complementos'); }))();
    }
    /**
     * Listado de tipos de barrio.
     */
    get barrios() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_barrios'); }))();
    }
    /**
     * Listado de tipos de urbanización.
     */
    get urbanizaciones() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_urbanizaciones'); }))();
    }
    /**
     * Listado de tipos de manzana.
     */
    get manzanas() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_manzanas'); }))();
    }
    /**
     * Listado de tipos de predio.
     */
    get predios() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { return yield this.storageService.get('migrated_predios'); }))();
    }
    /**
     * Listado de empresas actualizadas.
     */
    get updatedCompanies() {
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this._udpatedCompanies) {
                yield this.retrieveUpdatedCompanies();
            }
            return this._udpatedCompanies;
        }))();
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
        return (() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.storageService.get('sesion');
        }))();
    }
    /**
     * Obtiene el listado de empresas migradas desde el servidor.
     *
     * Actualiza la lista del almacén de datos y regresa este valor.
     *
     * @param idUsuario Identificación del usuario por el cual filtrar las empresas.
     */
    fetchCompanies(idUsuario) {
        const url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_LISTAR_EMPRESAS_MIGRADAS}?id_Usuario=${idUsuario}`;
        return this.http.post(url, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])((r) => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.setCompanies(r)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(r => {
            if (r) {
                return this._companies;
            }
            throw new Error('Full memory.');
        }));
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
    prepareCompany(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.company) {
                throw new Error('Company already in place.');
            }
            let result = yield this.updatedCompanies;
            let company = result.find(r => r.Pk_Id_AS_004_Empresas_AMigrar === id);
            if (!company) {
                result = yield this.companies;
                company = result.find(r => r.Pk_Id_AS_004_Empresas_AMigrar === id);
            }
            this._company = JSON.parse(JSON.stringify(company));
            return this.company;
        });
    }
    /**
     * Guarda en el almacén de datos los cambios hechos a la empresa actualmente en edición.
     *
     * Regresa verdadero si el proceso se realizó satisfactoriamente, y falso en caso de que
     * no haya memoria en el dispositivo.
     */
    saveChanges() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.company) {
                throw new Error('No company set.');
            }
            const updatedCompanies = yield this.updatedCompanies;
            const index = updatedCompanies.findIndex(c => c.Pk_Id_AS_004_Empresas_AMigrar === this.company.Pk_Id_AS_004_Empresas_AMigrar);
            if (index < 0) {
                updatedCompanies.push(this.company);
            }
            else {
                updatedCompanies[index] = this.company;
            }
            const result = this.setUpdatedCompanies(updatedCompanies);
            if (result) {
                this.discardChanges();
            }
            return result;
        });
    }
    /**
     * Descarta los cambios que hayan actualmente en memoria.
     *
     * Este método no elimina los cambios que hayan sido previamente guardados en el almacén de
     * datos.
     */
    discardChanges() {
        this._company = undefined;
    }
    /**
     * Envía los cambios de la empresa actualmente en edición al servidor para ser procesados.
     */
    save() {
        if (!this.company) {
            throw new Error('No company set.');
        }
        const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_GUARDAR_EMPRESA_MIGRADA;
        console.log("LogDev save: ", JSON.stringify(url));
        console.log("LogDev save: ", JSON.stringify(this.company).substr(0, 4000));
        console.log("LogDev save: ", JSON.stringify(this.company).substr(3999, 4000));
        console.log("LogDev save: ", JSON.stringify(this.company).substr(7998, 4000));
        console.log("LogDev save: ", JSON.stringify(this.company).substr(11997, 4000));
        console.log("LogDev save: ", JSON.stringify(this.company).substr(15996, 4000));
        console.log("LogDev save: ", JSON.stringify(this.company).substr(19995, 4000));
        console.log("LogDev save: ", JSON.stringify(this.company).substr(23994));
        return this.http.post(url, this.company).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((r) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = r.split(';')[0];
            if (result !== 'true') {
                return;
            }
            const indexC = (yield this.companies).findIndex(c => c.Pk_Id_AS_004_Empresas_AMigrar === this.company.Pk_Id_AS_004_Empresas_AMigrar);
            this._companies.splice(indexC, 1);
            yield this.setCompanies(this._companies);
            const indexM = (yield this.updatedCompanies).find(m => m.Pk_Id_AS_004_Empresas_AMigrar === this.company.Pk_Id_AS_004_Empresas_AMigrar);
            this._udpatedCompanies.splice(indexM, 1);
            yield this.setUpdatedCompanies(this._udpatedCompanies);
            this.discardChanges();
        })));
    }
    /**
     * Obtiene el listado de empresas migradas desde el almacén de datos.
     */
    retrieveCompanies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.storageService.get('migrated_companies');
            this._companies = result ? result : [];
        });
    }
    /**
     * Establece el listado de empresas migradas indicado en el almacén de datos.
     *
     * @param companies Listado de empresas migradas.
     */
    setCompanies(companies) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const departamentos = (_b = (_a = companies[0]) === null || _a === void 0 ? void 0 : _a.listDertamentos) !== null && _b !== void 0 ? _b : [];
            const municipios = (_d = (_c = companies[0]) === null || _c === void 0 ? void 0 : _c.listMunicipios) !== null && _d !== void 0 ? _d : [];
            const vias = (_g = (_f = (_e = companies[0]) === null || _e === void 0 ? void 0 : _e.eDListaMaestrosDirecciones) === null || _f === void 0 ? void 0 : _f.listaMaestrosAvenida) !== null && _g !== void 0 ? _g : [];
            const cuadrantes = (_k = (_j = (_h = companies[0]) === null || _h === void 0 ? void 0 : _h.eDListaMaestrosDirecciones) === null || _j === void 0 ? void 0 : _j.listaMaestrosCuadrante) !== null && _k !== void 0 ? _k : [];
            const complementos = (_o = (_m = (_l = companies[0]) === null || _l === void 0 ? void 0 : _l.eDListaMaestrosDirecciones) === null || _m === void 0 ? void 0 : _m.listaMaestrosSufijos) !== null && _o !== void 0 ? _o : [];
            const barrios = (_r = (_q = (_p = companies[0]) === null || _p === void 0 ? void 0 : _p.eDListaMaestrosDirecciones) === null || _q === void 0 ? void 0 : _q.listaMaestrosBarrios) !== null && _r !== void 0 ? _r : [];
            const urbanizaciones = (_u = (_t = (_s = companies[0]) === null || _s === void 0 ? void 0 : _s.eDListaMaestrosDirecciones) === null || _t === void 0 ? void 0 : _t.listaMaestrosUrbanizacion) !== null && _u !== void 0 ? _u : [];
            const manzanas = (_x = (_w = (_v = companies[0]) === null || _v === void 0 ? void 0 : _v.eDListaMaestrosDirecciones) === null || _w === void 0 ? void 0 : _w.listaMaestrosManzana) !== null && _x !== void 0 ? _x : [];
            const predios = (_0 = (_z = (_y = companies[0]) === null || _y === void 0 ? void 0 : _y.eDListaMaestrosDirecciones) === null || _z === void 0 ? void 0 : _z.listaMaestrosTipoDePredio) !== null && _0 !== void 0 ? _0 : [];
            (_1 = companies[0]) === null || _1 === void 0 ? true : delete _1.listDertamentos;
            (_2 = companies[0]) === null || _2 === void 0 ? true : delete _2.listMunicipios;
            (_3 = companies[0]) === null || _3 === void 0 ? true : delete _3.eDListaMaestrosDirecciones;
            const result = yield this.storageService.set('migrated_companies', companies);
            if (departamentos.length) {
                yield this.storageService.set('migrated_departamentos', departamentos);
            }
            if (municipios.length) {
                yield this.storageService.set('migrated_municipios', municipios);
            }
            if (vias.length) {
                yield this.storageService.set('migrated_vias', vias);
            }
            if (cuadrantes.length) {
                yield this.storageService.set('migrated_cuadrantes', cuadrantes);
            }
            if (complementos.length) {
                yield this.storageService.set('migrated_complementos', complementos);
            }
            if (barrios.length) {
                yield this.storageService.set('migrated_barrios', barrios);
            }
            if (urbanizaciones.length) {
                yield this.storageService.set('migrated_urbanizaciones', urbanizaciones);
            }
            if (manzanas.length) {
                yield this.storageService.set('migrated_manzanas', manzanas);
            }
            if (predios.length) {
                yield this.storageService.set('migrated_predios', predios);
            }
            if (result) {
                this._companies = companies;
            }
            return result;
        });
    }
    /**
     * Obtiene el listado de empresas actualizadas desde el almacén de datos.
     */
    retrieveUpdatedCompanies() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.storageService.get('updated_companies');
            this._udpatedCompanies = result ? result : [];
        });
    }
    /**
     * Establece el listado de empresas actualizadas indicado en el almacén de datos.
     *
     * @param companies Listado de empresas actualizadas.
     */
    setUpdatedCompanies(companies) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = yield this.storageService.set('updated_companies', companies);
            if (result) {
                this._udpatedCompanies = companies;
            }
            return result;
        });
    }
}
CompaniesService.ɵfac = function CompaniesService_Factory(t) { return new (t || CompaniesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"])); };
CompaniesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CompaniesService, factory: CompaniesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompaniesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: src_app_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    set(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield this.storage.set(key, value);
            }
            catch (_a) {
                result = false;
            }
            return result !== false;
        });
    }
    get(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield this.storage.get(key);
            }
            catch (_a) { }
            return result;
        });
    }
    remove(key) {
        this.storage.remove(key);
    }
    clear() {
        this.storage.clear();
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"])); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4-es2015.js.map