(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AT-follow-up-follow-up-module"],{

/***/ "./src/app/pages/AT/follow-up/follow-up-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/AT/follow-up/follow-up-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: FollowUpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpPageRoutingModule", function() { return FollowUpPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _follow_up_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./follow-up.page */ "./src/app/pages/AT/follow-up/follow-up.page.ts");





const routes = [
    {
        path: '',
        component: _follow_up_page__WEBPACK_IMPORTED_MODULE_2__["FollowUpPage"],
    },
];
class FollowUpPageRoutingModule {
}
FollowUpPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FollowUpPageRoutingModule });
FollowUpPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FollowUpPageRoutingModule_Factory(t) { return new (t || FollowUpPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FollowUpPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowUpPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/AT/follow-up/follow-up.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/AT/follow-up/follow-up.module.ts ***!
  \********************************************************/
/*! exports provided: FollowUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpPageModule", function() { return FollowUpPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./follow-up-routing.module */ "./src/app/pages/AT/follow-up/follow-up-routing.module.ts");
/* harmony import */ var _follow_up_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./follow-up.page */ "./src/app/pages/AT/follow-up/follow-up.page.ts");







class FollowUpPageModule {
}
FollowUpPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FollowUpPageModule });
FollowUpPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FollowUpPageModule_Factory(t) { return new (t || FollowUpPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__["FollowUpPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FollowUpPageModule, { declarations: [_follow_up_page__WEBPACK_IMPORTED_MODULE_5__["FollowUpPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__["FollowUpPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FollowUpPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__["FollowUpPageRoutingModule"]],
                declarations: [_follow_up_page__WEBPACK_IMPORTED_MODULE_5__["FollowUpPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/AT/follow-up/follow-up.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/AT/follow-up/follow-up.page.ts ***!
  \******************************************************/
/*! exports provided: FollowUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowUpPage", function() { return FollowUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");














const _c0 = function (a0) { return { "item-interactive-disabled": a0 }; };
function FollowUpPage_form_11_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function FollowUpPage_form_11_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Verificaci\u00F3n del seguimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "\u00BFLa recomendaci\u00F3n fue implementada?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ion-radio-group", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "S\u00CD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "ion-radio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "ion-radio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Fecha de implementaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "ion-datetime", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "ion-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "\u00BFFueron eficaces?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "ion-radio-group", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "S\u00CD");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "ion-radio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "ion-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "ion-radio", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "ion-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Causa de la NO implementaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "ion-textarea", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "ion-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "ion-label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Nombre de soporte");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](47, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.recomendacion.Recomendacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r0.dateNow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](10, _c0, ctx_r0.formGroup.controls.eficacia.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r0.formGroup.controls.eficacia.disabled ? true : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("disabled", ctx_r0.formGroup.controls.eficacia.disabled ? true : null);
} }
class FollowUpPage {
    constructor(cacheService, route, alertController, location) {
        this.cacheService = cacheService;
        this.route = route;
        this.alertController = alertController;
        this.location = location;
        /**
         * Indica la fecha actual para controlar el maximo
         * de fecha de implementacion
         */
        this.dateNow = moment__WEBPACK_IMPORTED_MODULE_6__(new Date()).format('YYYY-MM-DD');
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.establecerRecomendacion();
        this.initForm();
    }
    /**
     * Guarda el formulario de la recomendación actual.
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.formGroup.invalid) {
                const alert = yield this.alertController.create({
                    header: 'Datos incompletos',
                    mode: 'ios',
                    message: 'Todos los campos son obligatorios.',
                    buttons: ['OK'],
                });
                alert.present();
                return;
            }
            const body = this.formGroup.value;
            this.recomendacion.implementada = body.implementada;
            this.recomendacion.Fecha_Implementacion = body.fechaImplementacion;
            this.recomendacion.fueronEficaces = body.eficacia;
            this.recomendacion.causaNoImplementancion = body.causa;
            this.recomendacion.InformacionEnvidencia = body.nombreSoporte;
            this.recomendacion.diligenciado = true;
            this.location.back();
        });
    }
    /**
     * Establece la recomendación actual.
     */
    establecerRecomendacion() {
        const actividades = this.cacheService.activitiesSelectedForExec;
        const idActividad = +this.route.snapshot.params.activityId;
        const actividad = actividades.find(a => a.id === idActividad);
        const recomendaciones = actividad.siniestro.Recomendaciones;
        const idRecomendacion = +this.route.snapshot.params.recomendationId;
        const recomendacion = recomendaciones.find((r) => r.Pk_Id_SiniestroRecomendaciones === idRecomendacion);
        this.recomendacion = recomendacion;
        if (!recomendacion.diligenciado) {
            // Como el formulario viene con valores por defecto desde el servicio, debe establecerse una bandera
            // que nos indique si el usuario es el que ha establecido estos valores de la recomendación o corresponden
            // a los por defecto que establece el servicio. Usamos una clave adicional dentro de la recomendación
            // a la que llamamos _diligenciado_ para estos efectos.
            this.clearValues();
        }
    }
    /**
     * Limpia los valores por defecto que vienen desde el servicio para una recomendación vacía.
     */
    clearValues() {
        this.recomendacion.implementada = null;
        this.recomendacion.Fecha_Implementacion = null;
        this.recomendacion.fueronEficaces = null;
        this.recomendacion.causaNoImplementancion = null;
        this.recomendacion.InformacionEnvidencia = null;
    }
    /**
     * Inicializa el formulario de la recomendación.
     */
    initForm() {
        const implementadaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.implementada, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        const fechaImplementacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.Fecha_Implementacion, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        const eficaciaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.fueronEficaces, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        const causaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.causaNoImplementancion, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        const nombreSoporteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.recomendacion.InformacionEnvidencia, []);
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            implementada: implementadaControl,
            fechaImplementacion: fechaImplementacionControl,
            eficacia: eficaciaControl,
            causa: causaControl,
            nombreSoporte: nombreSoporteControl,
        });
        this.setupForm();
    }
    /**
     * Establece comportamiento para los campos del formulario en base a sus valores.
     */
    setupForm() {
        const controls = this.formGroup.controls;
        controls.implementada.valueChanges.subscribe(v => {
            if (v === false) {
                controls.fechaImplementacion.setValue(null);
                controls.fechaImplementacion.disable();
                controls.nombreSoporte.setValidators([]);
                controls.nombreSoporte.updateValueAndValidity();
                controls.eficacia.setValue(null);
                controls.eficacia.disable();
                controls.causa.enable();
                return;
            }
            controls.fechaImplementacion.enable();
            controls.nombreSoporte.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
            controls.nombreSoporte.updateValueAndValidity();
            controls.eficacia.enable();
            controls.causa.setValue(null);
            controls.causa.disable();
        });
        // Para forzar la validación de estado previamente establecida
        controls.implementada.setValue(controls.implementada.value);
    }
}
FollowUpPage.ɵfac = function FollowUpPage_Factory(t) { return new (t || FollowUpPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
FollowUpPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FollowUpPage, selectors: [["app-follow-up"]], decls: 12, vars: 1, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "follow-up-text"], [1, "text-center", "ion-padding"], ["formControlName", "implementada", 1, "implementation-options"], ["lines", "none"], ["slot", "start", 3, "value"], ["lines", "none", 1, "implementation-date"], ["position", "fixed"], ["mode", "ios", "displayFormat", "DD/MM/YYYY", "doneText", "ACEPTAR", "cancelText", "Cancelar", "formControlName", "fechaImplementacion", 3, "max"], ["name", "calendar-outline", "slot", "end"], ["lines", "none", 1, "implemetation-efficiency", 3, "ngClass"], ["formControlName", "eficacia"], ["lines", "none", 1, "implementation-causes"], ["position", "stacked"], ["formControlName", "causa"], ["lines", "none", 1, "attachment-name"], ["formControlName", "nombreSoporte"], [1, "save-button"], ["type", "submit"], ["slot", "icon-only", "name", "arrow-forward-circle-outline"]], template: function FollowUpPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Seguimiento a Recomendaciones AT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, FollowUpPage_form_11_Template, 48, 12, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formGroup);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0px;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n  text-transform: uppercase;\n  color: inherit;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .follow-up-text[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: scroll;\n  border-radius: 0.5rem;\n  border: 1px solid var(--ion-color-tertiary-shade);\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implementation-options[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implementation-date[_ngcontent-%COMP%]   ion-label[position=fixed][_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  width: auto;\n  flex: 0 0 auto;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency.item-interactive-disabled[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.3;\n  pointer-events: none;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implemetation-efficiency[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-radio[_ngcontent-%COMP%] {\n  margin-right: 0.7rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .implementation-causes[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  border: 1px solid var(--ion-color-tertiary-shade);\n  border-radius: 0.5rem;\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n  --padding-top: 0.5rem;\n  --padding-bottom: 0.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .attachment-name[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .attachment-name[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  border: 1px solid var(--ion-color-tertiary-shade);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .save-button[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL0FUL2ZvbGxvdy11cC9mb2xsb3ctdXAucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9BVC9mb2xsb3ctdXAvZm9sbG93LXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRFI7QURHUTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNEVjtBREtNO0VBQ0UsWUFBQTtBQ0hSO0FEWU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNUUjtBRGNNO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7QUNaUjtBRGVNO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDYlI7QURrQlU7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDaEJaO0FEdUJVO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ3JCWjtBRHlCUTtFQUNFLDJCQUFBO0VBQUEsc0JBQUE7QUN2QlY7QUQwQlE7RUFDRSxhQUFBO0FDeEJWO0FEMEJVO0VBQ0UsdUJBQUE7QUN4Qlo7QUQwQlk7RUFDRSxvQkFBQTtBQ3hCZDtBRCtCUTtFQUNFLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0FDN0JWO0FEa0NRO0VBQ0UsbUJBQUE7QUNoQ1Y7QURtQ1E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaURBQUE7QUNqQ1Y7QURxQ007RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDbkNSO0FEcUNRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FDbkNWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvQVQvZm9sbG93LXVwL2ZvbGxvdy11cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgJiBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJiBpb24tcm93IHtcbiAgICAgICYgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcblxuICAgICAgICAmIC50aXR1bG8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICYgaW9uLWNhcmQge1xuICAgICYgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICYgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBpb24tY2FyZC1jb250ZW50IHtcbiAgICAgICYgLmZvbGxvdy11cC10ZXh0IHtcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmIC5pbXBsZW1lbnRhdGlvbi1vcHRpb25zIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICB9XG5cbiAgICAgICYgLmltcGxlbWVudGF0aW9uLWRhdGUge1xuICAgICAgICAmIGlvbi1sYWJlbCB7XG4gICAgICAgICAgJltwb3NpdGlvbj0nZml4ZWQnXSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgLmltcGxlbWV0YXRpb24tZWZmaWNpZW5jeSB7XG4gICAgICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICAgICAgJiBpb24tbGFiZWwge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgb3BhY2l0eTogMC4zO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24tbGFiZWwge1xuICAgICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1yYWRpby1ncm91cCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG5cbiAgICAgICAgICAgICYgaW9uLXJhZGlvIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjdyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgLmltcGxlbWVudGF0aW9uLWNhdXNlcyB7XG4gICAgICAgICYgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMC41cmVtO1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDAuNXJlbTtcbiAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwLjVyZW07XG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgLmF0dGFjaG1lbnQtbmFtZSB7XG4gICAgICAgICYgaW9uLWxhYmVsIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24taW5wdXQge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgICAtLXBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgLnNhdmUtYnV0dG9uIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG5cbiAgICAgICAgJiBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdHVsbyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgcGFkZGluZzogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogaW5oZXJpdDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmZvbGxvdy11cC10ZXh0IHtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW1wbGVtZW50YXRpb24tb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW1wbGVtZW50YXRpb24tZGF0ZSBpb24tbGFiZWxbcG9zaXRpb249Zml4ZWRdIHtcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIHdpZHRoOiBhdXRvO1xuICBmbGV4OiAwIDAgYXV0bztcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmltcGxlbWV0YXRpb24tZWZmaWNpZW5jeS5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIGlvbi1sYWJlbCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbiAgb3BhY2l0eTogMC4zO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmltcGxlbWV0YXRpb24tZWZmaWNpZW5jeSBpb24tbGFiZWwge1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW1wbGVtZXRhdGlvbi1lZmZpY2llbmN5IGlvbi1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pbXBsZW1ldGF0aW9uLWVmZmljaWVuY3kgaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5pbXBsZW1ldGF0aW9uLWVmZmljaWVuY3kgaW9uLXJhZGlvLWdyb3VwIGlvbi1pdGVtIGlvbi1yYWRpbyB7XG4gIG1hcmdpbi1yaWdodDogMC43cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuaW1wbGVtZW50YXRpb24tY2F1c2VzIGlvbi10ZXh0YXJlYSB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDAuNXJlbTtcbiAgLS1wYWRkaW5nLXRvcDogMC41cmVtO1xuICAtLXBhZGRpbmctYm90dG9tOiAwLjVyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5hdHRhY2htZW50LW5hbWUgaW9uLWxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLmF0dGFjaG1lbnQtbmFtZSBpb24taW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIC0tcGFkZGluZy10b3A6IDhweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAuc2F2ZS1idXR0b24ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLnNhdmUtYnV0dG9uIGlvbi1idXR0b24ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FollowUpPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-follow-up',
                templateUrl: './follow-up.page.html',
                styleUrls: ['./follow-up.page.scss'],
            }]
    }], function () { return [{ type: src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=AT-follow-up-follow-up-module-es2015.js.map