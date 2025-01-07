(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exec-log-exec-log-module"],{

/***/ "./src/app/pages/exec-log/exec-log-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/exec-log/exec-log-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ExecLogPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecLogPageRoutingModule", function() { return ExecLogPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _exec_log_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exec-log.page */ "./src/app/pages/exec-log/exec-log.page.ts");





const routes = [
    {
        path: '',
        component: _exec_log_page__WEBPACK_IMPORTED_MODULE_2__["ExecLogPage"],
    },
    {
        path: 'pending-visits',
        loadChildren: () => __webpack_require__.e(/*! import() | pending-visits-pending-visits-module */ "pending-visits-pending-visits-module").then(__webpack_require__.bind(null, /*! ../pending-visits/pending-visits.module */ "./src/app/pages/pending-visits/pending-visits.module.ts")).then(m => m.PendingVisitsPageModule),
    },
    {
        path: 'tasks-to-send',
        loadChildren: () => Promise.all(/*! import() | tasks-to-send-tasks-to-send-module */[__webpack_require__.e("common"), __webpack_require__.e("tasks-to-send-tasks-to-send-module")]).then(__webpack_require__.bind(null, /*! ../tasks-to-send/tasks-to-send.module */ "./src/app/pages/tasks-to-send/tasks-to-send.module.ts")).then(m => m.TasksToSendPageModule),
    },
    {
        path: 'releaseActivities',
        loadChildren: () => __webpack_require__.e(/*! import() | release-activities-release-activities-module */ "release-activities-release-activities-module").then(__webpack_require__.bind(null, /*! ../release-activities/release-activities.module */ "./src/app/pages/release-activities/release-activities.module.ts")).then(m => m.ReleaseActivitiesPageModule),
    },
];
class ExecLogPageRoutingModule {
}
ExecLogPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExecLogPageRoutingModule });
ExecLogPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExecLogPageRoutingModule_Factory(t) { return new (t || ExecLogPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExecLogPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExecLogPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/exec-log/exec-log.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/exec-log/exec-log.module.ts ***!
  \***************************************************/
/*! exports provided: ExecLogPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecLogPageModule", function() { return ExecLogPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exec-log-routing.module */ "./src/app/pages/exec-log/exec-log-routing.module.ts");
/* harmony import */ var _exec_log_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exec-log.page */ "./src/app/pages/exec-log/exec-log.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








class ExecLogPageModule {
}
ExecLogPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ExecLogPageModule });
ExecLogPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ExecLogPageModule_Factory(t) { return new (t || ExecLogPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExecLogPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExecLogPageModule, { declarations: [_exec_log_page__WEBPACK_IMPORTED_MODULE_5__["ExecLogPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExecLogPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExecLogPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExecLogPageRoutingModule"]],
                declarations: [_exec_log_page__WEBPACK_IMPORTED_MODULE_5__["ExecLogPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/exec-log/exec-log.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/exec-log/exec-log.page.ts ***!
  \*************************************************/
/*! exports provided: ExecLogPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExecLogPage", function() { return ExecLogPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu-configuracion.service */ "./src/app/services/menu-configuracion.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _components_resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/resend-verification-code/resend-verification-code.component */ "./src/app/components/resend-verification-code/resend-verification-code.component.ts");
/* harmony import */ var src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/activities/activityListCompany/activity-list-company.service */ "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");















function ExecLogPage_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-progress-bar", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 15);
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
function ExecLogPage_ion_col_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_ion_col_5_Template_ion_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const menuOpt_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.optionSelectedMenu(menuOpt_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuOpt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuOpt_r3.redirecTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOpt_r3.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuOpt_r3.title);
} }
function ExecLogPage_ion_col_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_ion_col_9_Template_ion_col_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const menuOptHelp_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.optionSelectedMenu(menuOptHelp_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuOptHelp_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOptHelp_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuOptHelp_r7.title);
} }
/**
 * Componente para la vista de registro de ejecución.
 */
class ExecLogPage {
    constructor(listActivitiesCompany, loadingCtlr, menuConfOptions, modalCtrl, storage) {
        this.listActivitiesCompany = listActivitiesCompany;
        this.loadingCtlr = loadingCtlr;
        this.menuConfOptions = menuConfOptions;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.listActivity = [];
        this.listActivityTotal = 0;
        this.showListPendingVisit = true;
        this.progressBar = {
            visible: false,
            progress: 0,
            records: 0,
            refreshBtnEnable: false,
        };
    }
    ngOnInit() {
        this.optMenuOptions = this.menuConfOptions.getMenuExceActivities();
        this.optMenuHelpOptions = this.menuConfOptions.getMenuHelpExceActivities();
        this.uploadInfoUser();
    }
    optionSelectedMenu(itemSelected) {
        switch (itemSelected.title) {
            case 'Visitas pendientes':
                break;
            case 'Tareas por enviar':
                break;
            case 'Liberar actividades':
                break;
            case 'Recordar código':
                this.showResendVerificationCode();
                break;
            case 'Ayuda PDF':
                break;
            case 'Instructivo':
                break;
            default:
                break;
        }
    }
    uploadInfoUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const nameUser = yield this.storage.get('sesion');
            const nombreCompleto = nameUser.nombre1 + ' ' + nameUser.apellido1;
            this.nameUserRegister = nombreCompleto;
        });
    }
    showResendVerificationCode() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _components_resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_5__["ResendVerificationCodeComponent"],
            });
            return yield modal.present();
        });
    }
    listActivities() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.presentLoading();
            const documentoUsuario = yield this.storage.get('sesion');
            setTimeout(() => {
                //TODO: evaluar purgar memoria de array de la lista
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
ExecLogPage.ɵfac = function ExecLogPage_Factory(t) { return new (t || ExecLogPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"])); };
ExecLogPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExecLogPage, selectors: [["app-exec-log"]], decls: 23, vars: 8, consts: [["class", "ion-align-items-center ion-padding", 4, "ngIf"], [1, "backgroundContent"], ["size", "4", 4, "ngFor", "ngForOf"], ["size", "4", 3, "click", 4, "ngFor", "ngForOf"], ["size", "12"], [1, "ion-text-center"], ["src", "../../../assets/icon/icono_observaciones.svg", "alt", "", 1, "imgIcono"], ["size", "12", 1, "ion-text-center"], [1, "titulo"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed"], [3, "disabled", "click"], ["name", "cloud-download-outline"], [1, "ion-align-items-center", "ion-padding"], ["size", "9"], [3, "value", "buffer"], ["size", "3", 1, "ion-text-right"], ["size", "4"], ["mode", "ios", 3, "routerLink", "click"], [1, "vertical-center"], [1, "center"], ["alt", "", 3, "src"], [1, "tituloOpcion"], ["size", "4", 3, "click"]], template: function ExecLogPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExecLogPage_ion_row_1_Template, 6, 4, "ion-row", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-content", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExecLogPage_ion_col_5_Template, 8, 3, "ion-col", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExecLogPage_ion_col_9_Template, 7, 2, "ion-col", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h6", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Recuerde sincronizar las actividades que va a ejecutar aqu\u00ED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-fab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-fab-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_Template_ion_fab_button_click_21_listener() { return ctx.listActivities(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBar.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx.optMenuOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, ctx.optMenuHelpOptions));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.progressBar.refreshBtnEnable);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  border: 1px solid #95a6b1;\n  margin: 0px;\n  outline: none !important;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 70%;\n  margin-top: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 90%;\n  border: 1px solid #344b56;\n  border-radius: 50px;\n  margin-top: -15px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  font-weight: bold;\n  color: #344b56;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin-bottom: 30px;\n}\n.imgIcono[_ngcontent-%COMP%] {\n  width: auto !important;\n  max-width: 20% !important;\n  height: auto !important;\n  max-height: 45% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2V4ZWMtbG9nL2V4ZWMtbG9nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhlYy1sb2cvZXhlYy1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQU07RUFDRSx1QkFBQTtBQ0VSO0FERFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNHVjtBRERRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHVjtBRERRO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNHVjtBRERRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dWO0FERUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURLWTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSGQ7QURLWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNIZDtBRFlBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNURiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2V4ZWMtbG9nL2V4ZWMtbG9nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLWdyaWQge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgaW9uLXJvdyB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNmIxO1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAmIC52ZXJ0aWNhbC1jZW50ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAmIC5jZW50ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgJiAudGl0dWxvT3BjaW9uIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBpb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0YjU2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAmIC50aXR1bG8ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzQ0YjU2O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbn1cblxuLmltZ0ljb25vIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDQ1JSAhaW1wb3J0YW50O1xufSIsImlvbi1jb250ZW50IGlvbi1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NWE2YjE7XG4gIG1hcmdpbjogMHB4O1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnZlcnRpY2FsLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC50aXR1bG9PcGNpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA5MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDRiNTY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIG1hcmdpbi10b3A6IC0xNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC50aXR1bG8ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzQ0YjU2O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pY29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmltZ0ljb25vIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LXdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC1oZWlnaHQ6IDQ1JSAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExecLogPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-exec-log',
                templateUrl: './exec-log.page.html',
                styleUrls: ['./exec-log.page.scss'],
            }]
    }], function () { return [{ type: src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }, { type: _services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }, { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/menu-configuracion.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/menu-configuracion.service.ts ***!
  \********************************************************/
/*! exports provided: MenuConfiguracionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfiguracionService", function() { return MenuConfiguracionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MenuConfiguracionService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Este metodo permite hacer la petición al archivo donde estan las opciones para el menú de
     * la vista de configuración
     */
    getMenuOpts() {
        return this.http.get('/assets/data/menuConfiguracion.json');
    }
    /**
     * Este método permite consultar las opciones que existen en el menú principal home.page.html
     */
    getMenuMain() {
        return this.http.get('/assets/data/menuPrincipal-prod.json');
    }
    /**
     * Este método permite consultar las opciones que existen en el menú de ejecución de
     * actividades
     */
    getMenuExceActivities() {
        return this.http.get('/assets/data/menuExecuteActi.json');
    }
    /**
     * Este método permitre consultar las opciones de ayuda en el menú de ejecución de
     * actividades
     */
    getMenuHelpExceActivities() {
        return this.http.get('/assets/data/menuHelpExecuteActi.json');
    }
    /**
     * Este método permite consultar las opciones cuando se selecciona una visita
     */
    getMenuActivitySelected() {
        return this.http.get('/assets/data/menuVisitActivity.json');
    }
}
MenuConfiguracionService.ɵfac = function MenuConfiguracionService_Factory(t) { return new (t || MenuConfiguracionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MenuConfiguracionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuConfiguracionService, factory: MenuConfiguracionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuConfiguracionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=exec-log-exec-log-module-es2015.js.map