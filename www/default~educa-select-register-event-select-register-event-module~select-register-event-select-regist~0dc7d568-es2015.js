(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~educa-select-register-event-select-register-event-module~select-register-event-select-regist~0dc7d568"],{

/***/ "./src/app/pages/educa/select-register-event/select-register-event-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/educa/select-register-event/select-register-event-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: SelectRegisterEventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRegisterEventPageRoutingModule", function() { return SelectRegisterEventPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _select_register_event_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-register-event.page */ "./src/app/pages/educa/select-register-event/select-register-event.page.ts");





const routes = [
    {
        path: '',
        component: _select_register_event_page__WEBPACK_IMPORTED_MODULE_2__["SelectRegisterEventPage"],
    },
    {
        path: 'registerEventManual',
        loadChildren: () => __webpack_require__.e(/*! import() | manual-event-register-manual-event-register-module */ "default~educa-manual-event-register-manual-event-register-module~manual-event-register-manual-event-~10a14e10").then(__webpack_require__.bind(null, /*! ../manual-event-register/manual-event-register.module */ "./src/app/pages/educa/manual-event-register/manual-event-register.module.ts")).then(m => m.ManualEventRegisterPageModule),
    },
];
class SelectRegisterEventPageRoutingModule {
}
SelectRegisterEventPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SelectRegisterEventPageRoutingModule });
SelectRegisterEventPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SelectRegisterEventPageRoutingModule_Factory(t) { return new (t || SelectRegisterEventPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectRegisterEventPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectRegisterEventPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/educa/select-register-event/select-register-event.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/educa/select-register-event/select-register-event.module.ts ***!
  \***********************************************************************************/
/*! exports provided: SelectRegisterEventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRegisterEventPageModule", function() { return SelectRegisterEventPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./select-register-event-routing.module */ "./src/app/pages/educa/select-register-event/select-register-event-routing.module.ts");
/* harmony import */ var _select_register_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./select-register-event.page */ "./src/app/pages/educa/select-register-event/select-register-event.page.ts");







class SelectRegisterEventPageModule {
}
SelectRegisterEventPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SelectRegisterEventPageModule });
SelectRegisterEventPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SelectRegisterEventPageModule_Factory(t) { return new (t || SelectRegisterEventPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectRegisterEventPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectRegisterEventPageModule, { declarations: [_select_register_event_page__WEBPACK_IMPORTED_MODULE_5__["SelectRegisterEventPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectRegisterEventPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectRegisterEventPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectRegisterEventPageRoutingModule"]],
                declarations: [_select_register_event_page__WEBPACK_IMPORTED_MODULE_5__["SelectRegisterEventPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/educa/select-register-event/select-register-event.page.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/educa/select-register-event/select-register-event.page.ts ***!
  \*********************************************************************************/
/*! exports provided: SelectRegisterEventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectRegisterEventPage", function() { return SelectRegisterEventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _services_event_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/event/event.service */ "./src/app/services/event/event.service.ts");
/* harmony import */ var src_app_components_scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/scanner-qr/scanner-qr.component */ "./src/app/components/scanner-qr/scanner-qr.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");














function SelectRegisterEventPage_ion_card_title_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nombreEvento);
} }
/**
 * Este componente es el encargado de seleccionar la opción del registro
 */
class SelectRegisterEventPage {
    constructor(cacheService, alertController, eventService, router, modalCtrl) {
        this.cacheService = cacheService;
        this.alertController = alertController;
        this.eventService = eventService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.swiperOpts = {
            allowSlidePrev: false,
            allowSlideNext: false,
        };
        this.hiddenForm = false;
    }
    ngOnInit() {
        this.nombreEvento = sessionStorage.nombreEvento;
    }
    /**
     * Cuando se selecciona QR, este abre la camara, valida que sea QR_CODE y manda la información del
     * código QR para posteriormente enviar el registro del código
     */
    codeQRRegister() {
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
                this.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
                return;
            }
            const dataUsuarioQR = JSON.parse(info);
            const fechaNacimiento = moment__WEBPACK_IMPORTED_MODULE_4__(dataUsuarioQR.fchnac || dataUsuarioQR.fchNac, 'DD/MM/YYYY');
            const registroUsuarioAsistente = {
                strTipoIdentificacionEmpresa: dataUsuarioQR.tiEmpr,
                strNumeroDocumentoEmpresa: dataUsuarioQR.numEmpr,
                strRazonSocial: dataUsuarioQR.razonEmpr,
                strTipoDocumentoEmpleado: dataUsuarioQR.tiAsistente,
                strNumeroDocumentoEmpleado: dataUsuarioQR.numAsistente,
                strNombreEmpleado: dataUsuarioQR.nomAsist,
                FK_ID_Cargo: dataUsuarioQR.cargo,
                FK_ID_Sexo: dataUsuarioQR.sexo,
                dtmFechaNacimiento: fechaNacimiento.format('MM/DD/YYYY'),
                strTelefono: dataUsuarioQR.tele,
                strEmail: dataUsuarioQR.email,
                FK_ID_Evento: eventIdSelected,
            };
            this.registerUserQR(registroUsuarioAsistente);
        });
    }
    /**
     * La funcionalidad de este método es simplemente redireccionar a registerEventManual, dicha pagina estará el formulario
     * para su posterior consulta.
     */
    registerManual() {
        this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual');
    }
    /**
     * Método que permite enviar la petición al servicio para posteriormente realizar el registro.
     */
    registerUserQR(registroNuevoUsuarioAsistente) {
        this.eventService.registerResponsibleQR(registroNuevoUsuarioAsistente).subscribe(response => {
            this.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
        }, err => {
            this.confirmationRegister('Error.', 'Falló la inscripción del asistente al evento.');
        });
    }
    /**
     * Este es el método simplemente muestra la alerta para el registro.
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
}
SelectRegisterEventPage.ɵfac = function SelectRegisterEventPage_Factory(t) { return new (t || SelectRegisterEventPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"])); };
SelectRegisterEventPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SelectRegisterEventPage, selectors: [["app-select-register-event"]], decls: 23, vars: 3, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding", "backgroundContent", 3, "hidden"], ["mode", "ios", 3, "options"], [4, "ngIf"], ["mode", "ios", "color", "primary", "expand", "block", 1, "btn", 3, "click"], ["mode", "ios", "color", "secondary", "expand", "block", 1, "btn", 3, "click"]], template: function SelectRegisterEventPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Inscripci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-slides", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-slide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Inscripci\u00F3n de invitados");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SelectRegisterEventPage_ion_card_title_17_Template, 2, 1, "ion-card-title", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectRegisterEventPage_Template_ion_button_click_19_listener() { return ctx.codeQRRegister(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " C\u00F3digo QR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectRegisterEventPage_Template_ion_button_click_21_listener() { return ctx.registerManual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Manual ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hiddenForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.swiperOpts);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombreEvento);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\nion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWR1Y2Evc2VsZWN0LXJlZ2lzdGVyLWV2ZW50L0M6XFxVc2Vyc1xcY2FsdmFyYWRvXFxEb2N1bWVudHNcXHByb3llY3RvXFxBY3R1YWxcXGFsaXNzdGFfc3VtXFxUcnVua1xcMjAyNDA2MDcxL3NyY1xcYXBwXFxwYWdlc1xcZWR1Y2FcXHNlbGVjdC1yZWdpc3Rlci1ldmVudFxcc2VsZWN0LXJlZ2lzdGVyLWV2ZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWR1Y2Evc2VsZWN0LXJlZ2lzdGVyLWV2ZW50L3NlbGVjdC1yZWdpc3Rlci1ldmVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERU07RUFDRSxZQUFBO0FDQVI7QURNQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0hGO0FETUE7O0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkdWNhL3NlbGVjdC1yZWdpc3Rlci1ldmVudC9zZWxlY3QtcmVnaXN0ZXItZXZlbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgICAgfVxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuaW9uLXNsaWRlcyxcbmlvbi1zbGlkZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pb24tc2xpZGVzLFxuaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectRegisterEventPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-select-register-event',
                templateUrl: './select-register-event.page.html',
                styleUrls: ['./select-register-event.page.scss'],
            }]
    }], function () { return [{ type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }, { type: _services_event_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~educa-select-register-event-select-register-event-module~select-register-event-select-regist~0dc7d568-es2015.js.map