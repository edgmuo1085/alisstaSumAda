(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pending-visits-pending-visits-module"],{

/***/ "./src/app/pages/pending-visits/pending-visits-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/pending-visits/pending-visits-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: PendingVisitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingVisitsPageRoutingModule", function() { return PendingVisitsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pending_visits_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pending-visits.page */ "./src/app/pages/pending-visits/pending-visits.page.ts");





const routes = [
    {
        path: '',
        component: _pending_visits_page__WEBPACK_IMPORTED_MODULE_2__["PendingVisitsPage"],
    },
    {
        path: ':id',
        loadChildren: () => __webpack_require__.e(/*! import() | visit-visit-module */ "visit-visit-module").then(__webpack_require__.bind(null, /*! ../visit/visit.module */ "./src/app/pages/visit/visit.module.ts")).then(m => m.VisitPageModule),
    },
];
class PendingVisitsPageRoutingModule {
}
PendingVisitsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PendingVisitsPageRoutingModule });
PendingVisitsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PendingVisitsPageRoutingModule_Factory(t) { return new (t || PendingVisitsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PendingVisitsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingVisitsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pending-visits/pending-visits.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/pending-visits/pending-visits.module.ts ***!
  \***************************************************************/
/*! exports provided: PendingVisitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingVisitsPageModule", function() { return PendingVisitsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pending-visits-routing.module */ "./src/app/pages/pending-visits/pending-visits-routing.module.ts");
/* harmony import */ var _pending_visits_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-visits.page */ "./src/app/pages/pending-visits/pending-visits.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");









class PendingVisitsPageModule {
}
PendingVisitsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PendingVisitsPageModule });
PendingVisitsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function PendingVisitsPageModule_Factory(t) { return new (t || PendingVisitsPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__["PendingVisitsPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PendingVisitsPageModule, { declarations: [_pending_visits_page__WEBPACK_IMPORTED_MODULE_5__["PendingVisitsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__["PendingVisitsPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PendingVisitsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__["PendingVisitsPageRoutingModule"]],
                declarations: [_pending_visits_page__WEBPACK_IMPORTED_MODULE_5__["PendingVisitsPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pending-visits/pending-visits.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/pending-visits/pending-visits.page.ts ***!
  \*************************************************************/
/*! exports provided: PendingVisitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingVisitsPage", function() { return PendingVisitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/network/ngx */ "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/activities/activityListCompany/activity-list-company.service */ "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
/* harmony import */ var _services_network_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/network/network.service */ "./src/app/services/network/network.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
/* harmony import */ var _pipes_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/search-company-list.pipe */ "./src/app/pipes/search-company-list.pipe.ts");


















function PendingVisitsPage_ion_row_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-progress-bar", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.progressBar.progress)("buffer", ctx_r0.progressBar.progress + 0.1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.listActivity.length, "/", ctx_r0.listActivityTotal, "");
} }
function PendingVisitsPage_ion_slides_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Recuerde sincronizar las actividades que va a ejecutar aqu\u00ED.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PendingVisitsPage_ion_list_33_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PendingVisitsPage_ion_list_33_ion_item_1_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const activity_r4 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.companySelected(activity_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "M\u00F3dulo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("En proceso 0 de ", activity_r4.listaActividadesMigradas.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", activity_r4.tipoDocumentoDescripcion, " ", activity_r4.numeroDocumento, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r4.ModuloNombre);
} }
const _c0 = function () { return ["numeroDocumento", "name"]; };
function PendingVisitsPage_ion_list_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PendingVisitsPage_ion_list_33_ion_item_1_Template, 19, 5, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "searchCompanyList");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](2, 1, ctx_r2.listActivity, ctx_r2.textoBuscar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0), ctx_r2.moduloBuscar));
} }
/**
 * Componente de la vista de visitas pendientes.
 */
class PendingVisitsPage {
    constructor(listActivitiesCompany, network, storage, net, loadingCtlr, router) {
        this.listActivitiesCompany = listActivitiesCompany;
        this.network = network;
        this.storage = storage;
        this.net = net;
        this.loadingCtlr = loadingCtlr;
        this.router = router;
        this.listActivity = [];
        this.listActivityTotal = 0;
        this.progressBar = {
            visible: false,
            progress: 0,
            records: 0,
            refreshBtnEnable: false
        };
        this.textoBuscar = '';
        this.moduloBuscar = '';
        // Para la prueba
        this.showListPendingVisit = true;
        this.isConnected = false;
    }
    ngOnInit() {
        this.validateDataListActivities();
        this.net.showIPAddress();
    }
    /**
     * Establece el texto a buscar en la lista
     *
     * @param event texto a buscar
     */
    search(event) {
        this.textoBuscar = event.detail.value;
    }
    /**
     * Establece el filtrado por modulo
     *
     * @param event modulo a buscar
     */
    searchModulo(event) {
        this.moduloBuscar = event.detail.value;
    }
    companySelected(activity) {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < activity.listaActividadesMigradas.length; i++) {
            activity.listaActividadesMigradas[i].estadoInterno = 'Migradas';
        }
        sessionStorage.companySelected = JSON.stringify(activity);
    }
    listActivities() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const documentoUsuario = yield this.storage.get('sesion');
            setTimeout(() => {
                this.listActivitiesCompany.listActivityForCompanyPerPage(documentoUsuario).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    console.log('Respuesta de actividade', response);
                    const listActivityTotal = response.listActivitiesCompany[0].intTotalRegistros;
                    this.listActivityTotal = listActivityTotal;
                    const listActivity = response.listActivitiesCompany || [];
                    const actasGuardadas = (yield this.storage.get('actasAsesoriaSinInternet')) || [];
                    console.log('Actas Guardadas Metodo: ', actasGuardadas);
                    this.listActivitiesCompany.actasGuardadas = actasGuardadas;
                    this.listActivitiesCompany.listActivitiesFilter(listActivity);
                    this.storage.set('departamentos', response.listDepartamentos);
                    this.storage.set('municipios', response.listMunicipios);
                    this.storage.set('listArchivosSoporte', response.listArchivosSoporte);
                    // Guardar las actividades en un BD local.
                    this.storage.set('listaActividades', listActivity);
                    this.listActivitiesCompany.setActivities(listActivity);
                    this.validateDataListActivities();
                    this.showListPendingVisit = false;
                    this.loading.dismiss();
                    if (listActivity.length < listActivityTotal) {
                        this.listActivitiesCompany.progressBarValues$.subscribe(progressBarValues => {
                            (this.progressBar = progressBarValues), console.log('Progressss...!!: ', progressBarValues);
                        });
                        this.listActivitiesCompany.listActivityForCompanyForPage(listActivityTotal);
                        this.listActivitiesCompany.activities$.subscribe((listActivitiesForPage) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.storage.set('listaActividades', listActivitiesForPage);
                            yield this.storage.get('listaActividades');
                            this.validateDataListActivities();
                        }));
                    }
                }), err => {
                    this.loading.dismiss();
                    this.showListPendingVisit = false;
                });
            }, 2000);
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtlr.create({
                mode: 'ios',
                message: 'Cargando',
            });
            return this.loading.present();
        });
    }
    validateDataListActivities() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dataListActivities = yield this.storage.get('listaActividades');
            if (dataListActivities) {
                this.listActivity = dataListActivities.filter((a) => a.listaActividadesMigradas.length > 0);
            }
            else {
                this.listActivity = [];
            }
        });
    }
}
PendingVisitsPage.ɵfac = function PendingVisitsPage_Factory(t) { return new (t || PendingVisitsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
PendingVisitsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PendingVisitsPage, selectors: [["app-pending-visits"]], decls: 34, vars: 3, consts: [[1, "ion-no-border"], ["size", "2"], ["slot", "start"], ["mode", "md", "color", "primary", "defaultHref", "/"], ["size", "10"], ["animated", "", "color", "primary", "placeholder", "Buscar", 3, "ionChange"], ["size", "12"], ["placeholder", "Seleccionar m\u00F3dulo", 3, "ionChange"], ["value", "GEM"], ["value", "GMP"], ["value", "GCT"], ["value", "ASE"], ["value", "INV"], ["value", "REC"], ["value", ""], ["class", "ion-align-items-center", 4, "ngIf"], [1, "ion-padding"], ["mode", "ios", 4, "ngIf"], ["itemSize", "150", "minBufferPx", "750", "maxBufferPx", "1500"], [4, "ngIf"], [1, "ion-align-items-center"], ["size", "9"], [3, "value", "buffer"], ["size", "3", 1, "ion-text-right"], ["mode", "ios"], [1, "ion-text-center"], ["src", "../../../assets/icon/icono_observaciones.svg", "alt", "", 1, "imgIcono"], [1, "titulo"], ["name", "arrow-down-outline"], ["color", "secondary", "routerLink", "./visit-id", "detail", "", 3, "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["color", "secondary", "routerLink", "./visit-id", "detail", "", 3, "click"], [2, "width", "100%"], [1, "labelEnProceso"], [1, "nombre-modulo"]], template: function PendingVisitsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-searchbar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PendingVisitsPage_Template_ion_searchbar_ionChange_8_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "M\u00F3dulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PendingVisitsPage_Template_ion_select_ionChange_14_listener($event) { return ctx.searchModulo($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-select-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Gran Empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-select-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Gran MiPyme");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-select-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Grandes Cuentas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-select-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Asistencia/Asesor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-select-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Investigaci\u00F3n AT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-select-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Reclasificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-select-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PendingVisitsPage_ion_row_29_Template, 6, 4, "ion-row", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-content", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PendingVisitsPage_ion_slides_31_Template, 15, 0, "ion-slides", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "cdk-virtual-scroll-viewport", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, PendingVisitsPage_ion_list_33_Template, 3, 7, "ion-list", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBar.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActivity.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActivity.length >= 1);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkFixedSizeVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkVirtualForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_pipes_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchCompanyListPipe"]], styles: ["ion-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 30px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 15px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 90%;\n  border: 1px solid #344b56;\n  border-radius: 50px;\n  margin-top: -15px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  font-weight: bold;\n  color: #344b56;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .imgIcono[_ngcontent-%COMP%] {\n  width: auto !important;\n  max-width: 65% !important;\n  height: auto !important;\n  max-height: 65% !important;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin-bottom: 30px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  background-color: transparent;\n}\n\n.labelEnProceso[_ngcontent-%COMP%] {\n  text-align: end !important;\n  font-size: 13px !important;\n  margin-top: 5px !important;\n}\n\n.nombre-modulo[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%]  .cdk-virtual-scroll-content-wrapper {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL3BlbmRpbmctdmlzaXRzL3BlbmRpbmctdmlzaXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGVuZGluZy12aXNpdHMvcGVuZGluZy12aXNpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURNUTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0hWOztBRFNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFVFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFlZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNWZDs7QURZWTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDVmQ7O0FEWVk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVmQ7O0FEa0JFO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQ2hCSjs7QURvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsK0JBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNqQkY7O0FEb0JJO0VBQ0UsV0FBQTtBQ2xCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctdmlzaXRzL3BlbmRpbmctdmlzaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICBpb24tZ3JpZCB7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgJiAudGl0dWxvIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBjb2xvcjogIzM0NGI1NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYgLmltZ0ljb25vIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDY1JSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgaW9uLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5sYWJlbEVuUHJvY2VzbyB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub21icmUtbW9kdWxvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOjpuZy1kZWVwIHtcbiAgICAmIC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0YjU2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0dWxvIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM0NGI1Njtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuaW1nSWNvbm8ge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNjUlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sYWJlbEVuUHJvY2VzbyB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub21icmUtbW9kdWxvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydDo6bmctZGVlcCAuY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PendingVisitsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-pending-visits',
                templateUrl: './pending-visits.page.html',
                styleUrls: ['./pending-visits.page.scss'],
            }]
    }], function () { return [{ type: _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"] }, { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"] }, { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }, { type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pending-visits-pending-visits-module-es2015.js.map