(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["release-activities-release-activities-module"],{

/***/ "./src/app/pages/release-activities/release-activities-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/release-activities/release-activities-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ReleaseActivitiesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseActivitiesPageRoutingModule", function() { return ReleaseActivitiesPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _release_activities_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./release-activities.page */ "./src/app/pages/release-activities/release-activities.page.ts");





const routes = [
    {
        path: '',
        component: _release_activities_page__WEBPACK_IMPORTED_MODULE_2__["ReleaseActivitiesPage"],
    },
];
class ReleaseActivitiesPageRoutingModule {
}
ReleaseActivitiesPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReleaseActivitiesPageRoutingModule });
ReleaseActivitiesPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReleaseActivitiesPageRoutingModule_Factory(t) { return new (t || ReleaseActivitiesPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReleaseActivitiesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReleaseActivitiesPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/release-activities/release-activities.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/release-activities/release-activities.module.ts ***!
  \***********************************************************************/
/*! exports provided: ReleaseActivitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseActivitiesPageModule", function() { return ReleaseActivitiesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _release_activities_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./release-activities-routing.module */ "./src/app/pages/release-activities/release-activities-routing.module.ts");
/* harmony import */ var _release_activities_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./release-activities.page */ "./src/app/pages/release-activities/release-activities.page.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");








class ReleaseActivitiesPageModule {
}
ReleaseActivitiesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReleaseActivitiesPageModule });
ReleaseActivitiesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReleaseActivitiesPageModule_Factory(t) { return new (t || ReleaseActivitiesPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _release_activities_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReleaseActivitiesPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReleaseActivitiesPageModule, { declarations: [_release_activities_page__WEBPACK_IMPORTED_MODULE_5__["ReleaseActivitiesPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _release_activities_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReleaseActivitiesPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReleaseActivitiesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _release_activities_routing_module__WEBPACK_IMPORTED_MODULE_4__["ReleaseActivitiesPageRoutingModule"]],
                declarations: [_release_activities_page__WEBPACK_IMPORTED_MODULE_5__["ReleaseActivitiesPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/release-activities/release-activities.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/release-activities/release-activities.page.ts ***!
  \*********************************************************************/
/*! exports provided: ReleaseActivitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleaseActivitiesPage", function() { return ReleaseActivitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/activities/activityListCompany/activity-list-company.service */ "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/network/network.service */ "./src/app/services/network/network.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pipes/search-company-list.pipe */ "./src/app/pipes/search-company-list.pipe.ts");















function ReleaseActivitiesPage_ion_slides_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " No tiene actividades para liberar, debes de migrar actividades desde la web o sincronizarlas para poderlas liberar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ReleaseActivitiesPage_ion_list_13_ion_row_1_ion_col_12_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-content", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "C\u00F3digo actividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Descripci\u00F3n actividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Seleccionar actividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReleaseActivitiesPage_ion_list_13_ion_row_1_ion_col_12_Template_ion_checkbox_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const activity_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r9.activitySelected(activity_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const activity_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r7.idActividad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r7.descripcionActividad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r6.isSelectecActivity);
} }
function ReleaseActivitiesPage_ion_list_13_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nombre Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Documento Identificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ReleaseActivitiesPage_ion_list_13_ion_row_1_ion_col_12_Template, 29, 3, "ion-col", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const company_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](company_r4.numeroDocumento);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", company_r4.listaActividadesMigradas);
} }
const _c0 = function () { return ["numeroDocumento", "name"]; };
function ReleaseActivitiesPage_ion_list_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ReleaseActivitiesPage_ion_list_13_ion_row_1_Template, 13, 3, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "searchCompanyList");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](2, 1, ctx_r1.listActivity, ctx_r1.textoBuscar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0)));
} }
function ReleaseActivitiesPage_ion_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ReleaseActivitiesPage_ion_button_14_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.liberarActividad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.actividadesSeleccionadas.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.actividadesSeleccionadas.length >= 2 ? "Liberar Actividades" : "Liberar Actividad", "\n");
} }
class ReleaseActivitiesPage {
    constructor(loadingCtlr, cacheService, alertController, listActivitiesCompany, net, storage) {
        this.loadingCtlr = loadingCtlr;
        this.cacheService = cacheService;
        this.alertController = alertController;
        this.listActivitiesCompany = listActivitiesCompany;
        this.net = net;
        this.storage = storage;
        this.response = [
            {
                numeroDocumento: '123456',
                name: 'Coca cola',
                listaActividades: [
                    {
                        id: 1,
                        codigo: 'Codigo 1',
                    },
                    {
                        id: 2,
                        codigo: 'Codigo 2',
                    },
                ],
            },
            {
                numeroDocumento: '789012',
                name: 'ADA',
                listaActividades: [
                    {
                        id: 3,
                        codigo: 'Codigo 3',
                    },
                ],
            },
        ];
        this.listActivity = [];
        this.actividadesSeleccionadas = [];
        this.isSelectecActivity = false;
        this.lines = 'none';
    }
    ionViewWillEnter() {
        this.listActivities();
        this.net.showIPAddress();
    }
    ngOnInit() { }
    listActivities() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.informacionUsuario = yield this.storage.get('sesion');
            this.listActivity = yield this.storage.get('listaActividades');
            console.log("UsuarioStorageado: ", this.informacionUsuario);
            // this.presentLoading();
            // const actividades = await this.listActivitiesCompany.listActivityForCompany(this.informacionUsuario.idPersona).toPromise();
            // this.listActivity = actividades.listActivitiesCompany;
            console.log("LIstado de Actividades 2.0: ", this.listActivity);
            // this.loading.dismiss();
        });
    }
    search(event) {
        this.textoBuscar = event.detail.value;
    }
    activitySelected(actividadSeleccionada) {
        const idSelected = actividadSeleccionada.id;
        const existe = this.actividadesSeleccionadas.find(item => item.id === idSelected);
        if (existe) {
            this.actividadesSeleccionadas.forEach(element => {
                const item = element;
                if (item === existe) {
                    this.actividadesSeleccionadas.splice(existe, 1);
                }
            });
        }
        else {
            this.actividadesSeleccionadas.push(actividadSeleccionada);
        }
    }
    liberarActividad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Mostrar el indicador de carga
            this.presentLoading();
            // Obtener los IDs de las actividades seleccionadas
            const idActividadesSeleccionadas = this.actividadesSeleccionadas.map(element => element.id);
            // Crear el objeto para enviar al servidor
            const objLiberar = {
                ListaIdsActividades: idActividadesSeleccionadas,
                direccionIP: this.cacheService.ipAddress,
                CedulaUsuarioModifica: this.informacionUsuario.idPersona,
            };
            // Llamada al servicio para liberar las actividades
            const siLiberoActividades = yield this.listActivitiesCompany.liberarActivities(objLiberar).toPromise();
            if (siLiberoActividades) {
                // Notificar éxito
                this.notification('Atención', 'Se logró liberar la(s) actividad(es) seleccionadas');
                // Obtener la lista de actividades del storage
                const listaActividades = (yield this.storage.get('listaActividades')) || [];
                // Recorrer cada elemento de la lista y filtrar las actividades migradas
                listaActividades.forEach(actividad => {
                    if (actividad.listaActividadesMigradas) {
                        actividad.listaActividadesMigradas = actividad.listaActividadesMigradas.filter(actMigrada => !idActividadesSeleccionadas.includes(actMigrada.id));
                    }
                });
                // Guardar nuevamente en el storage la lista actualizada
                yield this.storage.set('listaActividades', listaActividades);
                // Lógica adicional (si es necesario refrescar la lista visible)
                this.listActivities();
            }
            else {
                // Notificar error en la liberación
                this.notification('Error', 'Ocurrió un error al tratar de liberar la(s) actividad(es)');
            }
            // Cerrar el indicador de carga
            this.loading.dismiss();
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
    notification(titulo, notificacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: titulo,
                backdropDismiss: false,
                mode: 'ios',
                message: notificacion,
                buttons: ['ACEPTAR'],
            });
            alert.onDidDismiss();
            yield alert.present();
        });
    }
}
ReleaseActivitiesPage.ɵfac = function ReleaseActivitiesPage_Factory(t) { return new (t || ReleaseActivitiesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"])); };
ReleaseActivitiesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ReleaseActivitiesPage, selectors: [["app-release-activities"]], decls: 15, vars: 3, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding"], ["animated", "", "color", "primary", "placeholder", "Buscar", 3, "ionChange"], ["mode", "ios", 4, "ngIf"], ["class", "mb-4", 4, "ngIf"], ["class", "boton-flotante", "color", "primary", 3, "disabled", "click", 4, "ngIf"], ["mode", "ios"], ["size", "12"], [1, "ion-text-center"], ["src", "../../../assets/icon/icono_observaciones.svg", "alt", "", 1, "imgIcono"], [1, "tituloSlide"], [1, "mb-4"], ["class", "ion-margin-bottom", 4, "ngFor", "ngForOf"], [1, "ion-margin-bottom"], [1, "bold"], ["size", "12", 4, "ngFor", "ngForOf"], ["lines", "none"], ["slot", "end", "color", "primary", 3, "value", "click"], ["color", "primary", 1, "boton-flotante", 3, "disabled", "click"]], template: function ReleaseActivitiesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-title", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Liberar Actividades");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-searchbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function ReleaseActivitiesPage_Template_ion_searchbar_ionChange_11_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ReleaseActivitiesPage_ion_slides_12_Template, 12, 0, "ion-slides", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ReleaseActivitiesPage_ion_list_13_Template, 3, 6, "ion-list", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ReleaseActivitiesPage_ion_button_14_Template, 2, 2, "ion-button", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActivity.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActivity.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActivity.length > 0);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], pipes: [_pipes_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_8__["SearchCompanyListPipe"]], styles: ["@charset \"UTF-8\";\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 1px solid #344b56;\n  border-radius: 50px;\n  margin-top: 40px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloSlide[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  font-weight: bold;\n  color: #344b56;\n  font-size: 19px;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .imgIcono[_ngcontent-%COMP%] {\n  width: auto !important;\n  max-width: 70% !important;\n  height: auto !important;\n  max-height: 70% !important;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  padding-top: 10px;\n  padding: 0px;\n  text-align: left;\n  margin-top: 10px;\n}\n.boton-flotante[_ngcontent-%COMP%] {\n  position: fixed;\n  \n  bottom: 20px;\n  \n  left: 50%;\n  \n  transform: translateX(-50%);\n  \n  z-index: 100;\n  \n  \n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);\n  \n  border-radius: 50px;\n  \n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVsZWFzZS1hY3Rpdml0aWVzL3JlbGVhc2UtYWN0aXZpdGllcy5wYWdlLnNjc3MiLCIvVXNlcnMvYWRhL0RvY3VtZW50cy9hcHBzL2FsaXNzdGFTdW1BZGEvc3JjL2FwcC9wYWdlcy9yZWxlYXNlLWFjdGl2aXRpZXMvcmVsZWFzZS1hY3Rpdml0aWVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDZDtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QURDSjtBQ0NNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FEQ1I7QUNBUTtFQUNFLFdBQUE7QURFVjtBQ0NNO0VBQ0UsWUFBQTtBRENSO0FDTUU7RUFDRSxxQkFBQTtBREhKO0FDTUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FESko7QUNTWTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FEUGQ7QUNTWTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FEUGQ7QUNnQk07RUFDRSxXQUFBO0FEZFI7QUNlUTtFQUNFLFlBQUE7QURiVjtBQ2dCYztFQUNFLFlBQUE7QURkaEI7QUNvQk07RUFDRSxxQkFBQTtBRGxCUjtBQ3dCQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FEckJGO0FDd0JBO0VBQ0UsZUFBQTtFQUFpQix3QkFBQTtFQUNqQixZQUFBO0VBQWlCLHNDQUFBO0VBQ2pCLFNBQUE7RUFBaUIsaURBQUE7RUFDakIsMkJBQUE7RUFBNkIsOEJBQUE7RUFDN0IsWUFBQTtFQUFpQixtREFBQTtFQUVqQixtQ0FBQTtFQUNBLHdDQUFBO0VBRUEsaUNBQUE7RUFDQSxtQkFBQTtFQUVBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QURuQkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWxlYXNlLWFjdGl2aXRpZXMvcmVsZWFzZS1hY3Rpdml0aWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0dWxvU2xpZGUge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzQ0YjU2O1xuICBmb250LXNpemU6IDE5cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuaW1nSWNvbm8ge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNzAlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tcm93IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tcm93IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tcm93IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tcm93IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJvdG9uLWZsb3RhbnRlIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICAvKiBGaWpvIGVuIGxhIHBhbnRhbGxhICovXG4gIGJvdHRvbTogMjBweDtcbiAgLyogRGlzdGFuY2lhIGRlc2RlIGxhIHBhcnRlIGluZmVyaW9yICovXG4gIGxlZnQ6IDUwJTtcbiAgLyogTG8gcG9zaWNpb25hIGFsIDUwJSBkZXNkZSBlbCBib3JkZSBpenF1aWVyZG8gKi9cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAvKiBMbyBjZW50cmEgaG9yaXpvbnRhbG1lbnRlICovXG4gIHotaW5kZXg6IDEwMDtcbiAgLyogQXNlZ3VyYSBxdWUgZXN0w6kgcG9yIGVuY2ltYSBkZSBvdHJvcyBlbGVtZW50b3MgKi9cbiAgLyogT3BjaW9uYWw6IHNvbWJyYSBwYXJhIHJlc2FsdGFyICovXG4gIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIC8qIE9wY2lvbmFsOiBib3JkZXMgcmVkb25kZWFkb3MgKi9cbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgLyogT3BjaW9uYWw6IG1heW9yIHRhbWHDsW8gKi9cbiAgLS1wYWRkaW5nLXRvcDogMTJweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xufSIsImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cblxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0YjU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBpb24tc2xpZGUge1xuICAgICAgaW9uLWdyaWQge1xuICAgICAgICBpb24tcm93IHtcbiAgICAgICAgICBpb24tY29sIHtcbiAgICAgICAgICAgICYgLnRpdHVsb1NsaWRlIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBjb2xvcjogIzM0NGI1NjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmIC5pbWdJY29ubyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWxpc3Qge1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNhcmQge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm90b24tZmxvdGFudGUge1xuICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpam8gZW4gbGEgcGFudGFsbGEgKi9cbiAgYm90dG9tOiAyMHB4OyAgICAvKiBEaXN0YW5jaWEgZGVzZGUgbGEgcGFydGUgaW5mZXJpb3IgKi9cbiAgbGVmdDogNTAlOyAgICAgICAvKiBMbyBwb3NpY2lvbmEgYWwgNTAlIGRlc2RlIGVsIGJvcmRlIGl6cXVpZXJkbyAqL1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IC8qIExvIGNlbnRyYSBob3Jpem9udGFsbWVudGUgKi9cbiAgei1pbmRleDogMTAwOyAgICAvKiBBc2VndXJhIHF1ZSBlc3TDqSBwb3IgZW5jaW1hIGRlIG90cm9zIGVsZW1lbnRvcyAqL1xuXG4gIC8qIE9wY2lvbmFsOiBzb21icmEgcGFyYSByZXNhbHRhciAqL1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuXG4gIC8qIE9wY2lvbmFsOiBib3JkZXMgcmVkb25kZWFkb3MgKi9cbiAgYm9yZGVyLXJhZGl1czogNTBweDtcblxuICAvKiBPcGNpb25hbDogbWF5b3IgdGFtYcOxbyAqL1xuICAtLXBhZGRpbmctdG9wOiAxMnB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxMnB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ReleaseActivitiesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-release-activities',
                templateUrl: './release-activities.page.html',
                styleUrls: ['./release-activities.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }, { type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }, { type: _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__["ActivityListCompanyService"] }, { type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"] }, { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=release-activities-release-activities-module-es2015.js.map