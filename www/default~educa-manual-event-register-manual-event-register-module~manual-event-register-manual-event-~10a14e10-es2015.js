(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~educa-manual-event-register-manual-event-register-module~manual-event-register-manual-event-~10a14e10"],{

/***/ "./src/app/pages/educa/manual-event-register/manual-event-register-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/educa/manual-event-register/manual-event-register-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: ManualEventRegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEventRegisterPageRoutingModule", function() { return ManualEventRegisterPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manual_event_register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manual-event-register.page */ "./src/app/pages/educa/manual-event-register/manual-event-register.page.ts");





const routes = [
    {
        path: '',
        component: _manual_event_register_page__WEBPACK_IMPORTED_MODULE_2__["ManualEventRegisterPage"],
    },
    {
        path: 'infoRegisterUserManual',
        loadChildren: () => __webpack_require__.e(/*! import() | info-register-event-manual-info-register-event-manual-module */ "default~educa-info-register-event-manual-info-register-event-manual-module~info-register-event-manua~14912bf9").then(__webpack_require__.bind(null, /*! ../info-register-event-manual/info-register-event-manual.module */ "./src/app/pages/educa/info-register-event-manual/info-register-event-manual.module.ts")).then(m => m.InfoRegisterEventManualPageModule),
    },
];
class ManualEventRegisterPageRoutingModule {
}
ManualEventRegisterPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManualEventRegisterPageRoutingModule });
ManualEventRegisterPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManualEventRegisterPageRoutingModule_Factory(t) { return new (t || ManualEventRegisterPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManualEventRegisterPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualEventRegisterPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/educa/manual-event-register/manual-event-register.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/educa/manual-event-register/manual-event-register.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ManualEventRegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEventRegisterPageModule", function() { return ManualEventRegisterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manual-event-register-routing.module */ "./src/app/pages/educa/manual-event-register/manual-event-register-routing.module.ts");
/* harmony import */ var _manual_event_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manual-event-register.page */ "./src/app/pages/educa/manual-event-register/manual-event-register.page.ts");







class ManualEventRegisterPageModule {
}
ManualEventRegisterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ManualEventRegisterPageModule });
ManualEventRegisterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ManualEventRegisterPageModule_Factory(t) { return new (t || ManualEventRegisterPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualEventRegisterPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManualEventRegisterPageModule, { declarations: [_manual_event_register_page__WEBPACK_IMPORTED_MODULE_5__["ManualEventRegisterPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualEventRegisterPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualEventRegisterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualEventRegisterPageRoutingModule"]],
                declarations: [_manual_event_register_page__WEBPACK_IMPORTED_MODULE_5__["ManualEventRegisterPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/educa/manual-event-register/manual-event-register.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/educa/manual-event-register/manual-event-register.page.ts ***!
  \*********************************************************************************/
/*! exports provided: ManualEventRegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualEventRegisterPage", function() { return ManualEventRegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/event/event.service */ "./src/app/services/event/event.service.ts");
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/scanner-qr/scanner-qr.component */ "./src/app/components/scanner-qr/scanner-qr.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function ManualEventRegisterPage_ion_label_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nombreEvento);
} }
function ManualEventRegisterPage_ion_select_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r3.SiglaDocumento);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r3.strTipoDocumento);
} }
function ManualEventRegisterPage_ion_select_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r4.SiglaDocumento);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r4.strTipoDocumento);
} }
class ManualEventRegisterPage {
    constructor(formbuilder, alertController, eventService, cacheService, router, modalCtrl) {
        this.formbuilder = formbuilder;
        this.alertController = alertController;
        this.eventService = eventService;
        this.cacheService = cacheService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        // Es un array con los diferentes tipos de documento que se permiten seleccionar
        this.documentsType = [];
        this.hiddenForm = false;
    }
    ngOnInit() {
        this.nombreEvento = sessionStorage.nombreEvento;
        this.createFormConsultUser();
        this.getDocumentsTypeUser();
    }
    /**
     * Método que permite crear el formulario para la consulta del invitado
     */
    createFormConsultUser() {
        this.formConsultUser = this.formbuilder.group({
            identificationTypeCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            identificationNumberCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            identificationTypeUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            identificationNumberUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    /**
     * Este método permite ir a consultar el servicio cuales son los tipos de documentos
     * existentes en la BD
     */
    getDocumentsTypeUser() {
        this.eventService.getDocumentType().subscribe(response => {
            this.documentsType = response.Documentos;
        });
    }
    /**
     * El método search como su nombre lo dice es buscar de acuerdo a la información ingresada.
     * Aqui se deben tener en cuenta dos cosas:
     * 1. si efectivamente el servicio responde exitoso (true) es por que trajo información del invitado
     * esto quiere decir que se guarda dicha información en el sessionStorage cuyo nombre es infoResponsibleManualEvent.
     * Esa información servirá para armar el formulario de registro manual cuandro trae datos
     * 2. Si el servicio responde un error (417), esto quiere indicar que no esta invitado y que se debe escribir
     * todos los datos en en registro manual y asi lanzar la peticion.
     * Por eso en la variable infoResponsibleManualEvent se guarda el err.error equivalente a 'null'.
     */
    search() {
        if (this.formConsultUser.valid) {
            const eventIdSelected = this.cacheService.newRegisterEvent.FK_ID_Evento;
            const documentoAsistente = this.formConsultUser.value.identificationNumberUser;
            this.eventService.getSearchResponsibleEventManual(documentoAsistente, eventIdSelected).subscribe(response => {
                const infoResponsibleManualEvent = JSON.stringify(response);
                sessionStorage.infoResponsibleManualEvent = infoResponsibleManualEvent;
                this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual/infoRegisterUserManual');
            }, err => {
                sessionStorage.infoResponsibleManualEvent = err.error;
                this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual/infoRegisterUserManual');
            });
        }
        else {
            this.Alert();
        }
    }
    /**
     * Desde esta vista tambien se pueden registrar por medio del QR, por ende este metodo,
     * abre la camara, lee el QR, arma el objeto y lanza la petición para realizar el registro del invitado
     */
    openScanQr() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.hiddenForm = true;
            const eventIdSelected = yield this.cacheService.newRegisterEvent.FK_ID_Evento.toString();
            const modal = yield this.modalCtrl.create({
                component: src_app_components_scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_7__["ScannerQrComponent"],
            });
            modal.present();
            const result = yield modal.onWillDismiss();
            this.hiddenForm = false;
            const info = result.data.response;
            if (!info) {
                this.confirmationRegister('Error.', 'Falló la inscripción del asistente al evento.');
                return;
            }
            const dataUsuarioQR = JSON.parse(info);
            const registroUsuarioAsistente = {
                strTipoIdentificacionEmpresa: dataUsuarioQR.tiEmpr,
                strNumeroDocumentoEmpresa: dataUsuarioQR.numEmpr,
                strRazonSocial: dataUsuarioQR.razonEmpr,
                strTipoDocumentoEmpleado: dataUsuarioQR.tiAsistente,
                strNumeroDocumentoEmpleado: dataUsuarioQR.tiAsistente,
                strNombreEmpleado: dataUsuarioQR.numAsistente,
                FK_ID_Cargo: dataUsuarioQR.cargo,
                FK_ID_Sexo: dataUsuarioQR.sexo,
                dtmFechaNacimiento: dataUsuarioQR.fchnac,
                strTelefono: dataUsuarioQR.tele,
                strEmail: dataUsuarioQR.email,
                FK_ID_Evento: eventIdSelected,
            };
            this.registerUserQR(registroUsuarioAsistente);
        });
    }
    /**
     *
     * Este metodo es el encargado de lanzar la petición para realizar el registro como tal
     */
    registerUserQR(registroNuevoUsuarioAsistente) {
        this.eventService.registerResponsibleQR(registroNuevoUsuarioAsistente).subscribe(response => {
            this.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
        }, err => {
            this.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
        });
    }
    /**
     * Este metodo basicamente muestra la alerta de exito o fallido segun sea el caso al momento de
     * ejecutar el servicio
     */
    confirmationRegister(resultadoAlerta, mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: resultadoAlerta,
                mode: 'ios',
                message: mensaje,
                buttons: ['ACEPTAR'],
            });
            yield alert.present();
        });
    }
    /**
     * Este muestra la alerta cuando se lanza la petición y hay algun campo en el formulario vacio.
     */
    Alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención',
                message: 'Todos los campos son obligatorios.',
                buttons: ['ACEPTAR'],
            });
            yield alert.present();
        });
    }
}
ManualEventRegisterPage.ɵfac = function ManualEventRegisterPage_Factory(t) { return new (t || ManualEventRegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"])); };
ManualEventRegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManualEventRegisterPage, selectors: [["app-manual-event-register"]], decls: 52, vars: 5, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding", "backgroundContent", 3, "hidden"], [1, "ion-text-center"], ["class", "tituloEvento", 4, "ngIf"], [1, "formulario", 3, "formGroup"], [1, "ion-text-center", "divTitulo"], ["lines", "none", "mode", "ios"], ["name", "business", "color", "primary", "slot", "start"], ["lines", "none"], ["position", "stacked"], ["formControlName", "identificationTypeCompany", "placeholder", "Tipo de identificaci\u00F3n", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "placeholder", "Tipo identificaci\u00F3n", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "identificationNumberCompany", "placeholder", "N\u00FAmero de identificaci\u00F3n", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["name", "person", "color", "primary", "slot", "start"], ["formControlName", "identificationTypeUser", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "placeholder", "Tipo identificaci\u00F3n", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "identificationNumberUser", "placeholder", "N\u00FAmero de identificaci\u00F3n", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["size", "3"], ["size", "6"], ["mode", "ios", "expand", "block", 1, "btn", 3, "click"], ["vertical", "bottom", "horizontal", "end", "color", "secondary", "slot", "fixed"], ["color", "secondary"], ["name", "qr-code-outline", 3, "click"], [1, "tituloEvento"], [3, "value"]], template: function ManualEventRegisterPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Registro Manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManualEventRegisterPage_ion_label_12_Template, 2, 1, "ion-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Datos Empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Tipo de identificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ManualEventRegisterPage_ion_select_option_23_Template, 2, 2, "ion-select-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "N\u00FAmero identificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Datos Asistente");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tipo de identificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ManualEventRegisterPage_ion_select_option_37_Template, 2, 2, "ion-select-option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "N\u00FAmero identificaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ion-input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-col", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-col", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualEventRegisterPage_Template_ion_button_click_46_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Consultar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-col", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-fab", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-fab-button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-icon", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualEventRegisterPage_Template_ion_icon_click_51_listener() { return ctx.openScanQr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hiddenForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombreEvento);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formConsultUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.documentsType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.documentsType);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelectOption"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\n.tituloEvento[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bolder;\n}\n.formulario[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid #95a6b1;\n  padding: 5px;\n  margin-top: 30px;\n  background: white;\n  padding-bottom: 25px;\n}\nion-label[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2VkdWNhL21hbnVhbC1ldmVudC1yZWdpc3Rlci9tYW51YWwtZXZlbnQtcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZHVjYS9tYW51YWwtZXZlbnQtcmVnaXN0ZXIvbWFudWFsLWV2ZW50LXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBREVNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQVI7QURFTTtFQUNFLFlBQUE7QUNBUjtBRE1BO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0hGO0FETUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZHVjYS9tYW51YWwtZXZlbnQtcmVnaXN0ZXIvbWFudWFsLWV2ZW50LXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgIH1cbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi50aXR1bG9FdmVudG8ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk1YTZiMTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi50aXR1bG9FdmVudG8ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk1YTZiMTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManualEventRegisterPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-manual-event-register',
                templateUrl: './manual-event-register.page.html',
                styleUrls: ['./manual-event-register.page.scss'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }, { type: _services_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"] }, { type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~educa-manual-event-register-manual-event-register-module~manual-event-register-manual-event-~10a14e10-es2015.js.map