(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./src/app/pages/companies/details/details-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/companies/details/details-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_companies_checkChanges_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/companies/checkChanges.guard */ "./src/app/services/companies/checkChanges.guard.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/companies/details/details.page.ts");






const routes = [
    {
        path: '',
        canDeactivate: [src_app_services_companies_checkChanges_guard__WEBPACK_IMPORTED_MODULE_2__["CheckChangesGuard"]],
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"],
    },
];
class DetailsPageRoutingModule {
}
DetailsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DetailsPageRoutingModule });
DetailsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DetailsPageRoutingModule_Factory(t) { return new (t || DetailsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DetailsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DetailsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/details/details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/companies/details/details.module.ts ***!
  \***********************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/pages/companies/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/companies/details/details.page.ts");








class DetailsPageModule {
}
DetailsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DetailsPageModule });
DetailsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function DetailsPageModule_Factory(t) { return new (t || DetailsPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DetailsPageModule, { declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"]],
                declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/details/details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/companies/details/details.page.ts ***!
  \*********************************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/popover/popover.component */ "./src/app/components/popover/popover.component.ts");
/* harmony import */ var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function DetailsPage_form_12_ion_card_1_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Departamento Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Municipio Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " C\u00F3digo/A.E. Principal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsPage_form_12_ion_card_1_ng_container_23_Template_ion_button_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r6.showPopover($event, "actividad"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Sector Econ\u00F3mico ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsPage_form_12_ion_card_1_ng_container_23_Template_ion_button_click_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3); return ctx_r8.showPopover($event, "sector"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Celular Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tel\u00E9fono Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Correo Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "C\u00F3digo Postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "TD/No. Identificaci\u00F3n Representante Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Nombre Representante Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "ion-textarea", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.company.eDSedesActualizadas.Nombre_Departamento_Sede, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.company.eDSedesActualizadas.Nombre_Municipio_Sede, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.company.strCodigoActividadEconomica);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" - ", ctx_r3.company.strActividadEconomicaNombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.company.strDescripcionSectorEconomico, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.company.strCelular, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.company.strTelefono, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.company.strCorreoElectronico);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.company.eDSedesActualizadas.strCodigoPostal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r3.company.strSiglaRepresentanteLegal, " - ", ctx_r3.company.strNumeroDcto_Representant_Legal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.company.strNombre_Representant_Legal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r3.company.stringObservaciones);
} }
function DetailsPage_form_12_ion_card_1_ion_icon_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 32);
} }
function DetailsPage_form_12_ion_card_1_ion_icon_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 33);
} }
function DetailsPage_form_12_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsPage_form_12_ion_card_1_Template_ion_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.showDetails = !ctx_r9.showDetails; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Direcci\u00F3n Empresa Sede Principal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsPage_form_12_ion_card_1_Template_ion_button_click_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.showPopover($event, "direccion"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Indicador de zona");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DetailsPage_form_12_ion_card_1_ng_container_23_Template, 63, 13, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-radio-group", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, DetailsPage_form_12_ion_card_1_ion_icon_27_Template, 1, 0, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Actualizar Datos Empresas ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "ion-radio", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, DetailsPage_form_12_ion_card_1_ion_icon_32_Template, 1, 0, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Actualizar Personas Contacto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-radio", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.company.strRazonSocial);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r1.company.str_Sigla_Documento, ": ", ctx_r1.company.strNumeroDcto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx_r1.showDetails ? "chevron-up-outline" : "chevron-down-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.company.eDSedesActualizadas.strDireccion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.company.eDSedesActualizadas.srtIndicadorZona === "R" ? "Rural" : "Urbana", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.showDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.hasChangedModule("company-data"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.hasChangedModule("contact-data"));
} }
function DetailsPage_form_12_ion_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsPage_form_12_ion_button_4_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Continuar Proceso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DetailsPage_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DetailsPage_form_12_ion_card_1_Template, 35, 9, "ion-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DetailsPage_form_12_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.confirm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Confirmar Datos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DetailsPage_form_12_ion_button_4_Template, 2, 0, "ion-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !!ctx_r0.formGroup.controls.nextPage.value);
} }
/**
 * Componente para la vista de detalles de empresa.
 */
class DetailsPage {
    constructor(companiesService, route, router, alertCtrl, ngZone, popoverCtrl) {
        this.companiesService = companiesService;
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.ngZone = ngZone;
        this.popoverCtrl = popoverCtrl;
        /**
         * Textos de ayuda.
         */
        this.HINTS = {
            direccion: {
                text: 'al dar clic tendrá la posibilidad de actualizar la dirección de la sede principal.',
                highlightedText: 'Estimado usuario: ',
            },
            actividad: {
                text: 'Para la modificación de la actividad económica de la empresa, se debe realizar a través de un proceso de reclasificación de empresa ante POSITIVA.',
                highlightedText: 'Recuerde: ',
            },
            sector: {
                text: 'Para la modificación del sector económico de la empresa, se debe realizar a través de un proceso de reclasificación de empresa ante POSITIVA.',
                highlightedText: 'Recuerde: ',
            },
        };
    }
    ionViewWillEnter() {
        this.bypass = false;
        this.formGroup = undefined;
        this.getCompany();
    }
    /**
     * Navega a la siguiente vista de acuerdo a la selección del usuario.
     */
    nextPage() {
        const selection = this.formGroup.controls.nextPage.value;
        let path;
        switch (selection) {
            case 'companyData':
                path = './edit-company';
                break;
            case 'contactData':
                path = './contact-list';
                break;
        }
        this.bypass = true;
        this.router.navigate([path], { relativeTo: this.route });
    }
    /**
     * Comprueba que no hayan cambios pendientes por guardar. En caso de que los haya, consulta al
     * usuario si desea guardarlos para después o descartarlos.
     *
     * Regresa un valor booleano que indica si puede o no realizarse la navegación.
     */
    canNavigate() {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.bypass) {
                return true;
            }
            const updated = (_b = (_a = this.company) === null || _a === void 0 ? void 0 : _a.__updated) !== null && _b !== void 0 ? _b : [];
            if (!updated.length) {
                this.companiesService.discardChanges();
                return true;
            }
            const guardar = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                result = yield this.companiesService.saveChanges();
                if (!result) {
                    const _alert = yield this.alertCtrl.create({
                        backdropDismiss: false,
                        header: 'Atención',
                        mode: 'ios',
                        message: 'No tiene espacio suficiente en el dispositivo. Intente liberar memoria.',
                        buttons: ['ACEPTAR'],
                    });
                    yield _alert.present();
                }
            });
            const descartar = () => {
                this.companiesService.discardChanges();
                result = true;
            };
            let result;
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const alert = yield this.alertCtrl.create({
                    header: 'Atención',
                    mode: 'ios',
                    backdropDismiss: false,
                    message: 'Tiene cambios pendientes por guardar. ¿Desea guardarlos para después o descartarlos?',
                    buttons: [
                        {
                            text: 'Guardar',
                            handler: () => {
                                alert.dismiss().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    yield guardar();
                                    resolve(result);
                                }));
                                return false;
                            },
                            role: 'save',
                        },
                        {
                            text: 'Descartar',
                            handler: () => {
                                alert.dismiss().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    descartar();
                                    resolve(result);
                                }));
                                return false;
                            },
                            role: 'cancel',
                        },
                    ],
                });
                yield alert.present();
            }));
        });
    }
    /**
     * Indica si se han hecho cambios en el módulo indicado.
     *
     * @param key Nombre del módulo.
     */
    hasChangedModule(key) {
        var _a;
        const updated = (_a = this.company.__updated) !== null && _a !== void 0 ? _a : [];
        return updated.find((m) => m === key) !== undefined;
    }
    /**
     * Realiza la confirmación de los datos y presenta el resumen de carga.
     */
    confirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const _confirm = () => {
                this.ngZone.run(() => {
                    this.bypass = true;
                    this.router.navigate(['./signature'], { relativeTo: this.route });
                });
            };
            const alert = yield this.alertCtrl.create({
                header: 'Estimado Usuario',
                mode: 'ios',
                backdropDismiss: false,
                message: '¿Está seguro de la confirmación de sus datos?',
                buttons: [
                    { text: 'Aceptar', role: 'accept', handler: _confirm },
                    { text: 'Cancelar', role: 'cancel' },
                ],
            });
            yield alert.present();
        });
    }
    showPopover(event, field) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                event,
                component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                componentProps: { text: this.HINTS[field].text, highlightedText: this.HINTS[field].highlightedText },
            });
            yield popover.present();
        });
    }
    /**
     * Establece la empresa de la vista de detalles.
     */
    getCompany() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = +this.route.snapshot.params.id;
            try {
                this.company = yield this.companiesService.prepareCompany(id);
            }
            catch (_a) {
                this.company = this.companiesService.company;
            }
            if (!this.company) {
                this.router.navigate(['../']);
                return;
            }
            this.initForm();
        });
    }
    /**
     * Inicializa el formulario.
     */
    initForm() {
        const nextPageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({ nextPage: nextPageControl });
    }
}
DetailsPage.ɵfac = function DetailsPage_Factory(t) { return new (t || DetailsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"])); };
DetailsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DetailsPage, selectors: [["app-details"]], decls: 13, vars: 1, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "title"], [1, "title-wrapper"], [1, "backgroundContent", "ion-padding"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["class", "ion-no-margin", 4, "ngIf"], ["expand", "block", 1, "ion-margin-bottom", 3, "click"], ["class", "ion-margin-bottom", "expand", "block", 3, "click", 4, "ngIf"], [1, "ion-no-margin"], [1, "header-wrapper"], ["lines", "none"], [1, "razon-social"], [3, "click"], [1, "field", "with-help"], [1, "tooltip", 3, "click"], ["name", "help-outline", "slot", "icon-only"], [1, "field"], [4, "ngIf"], ["formControlName", "nextPage"], [1, "radio-label"], ["class", "icon-updated", "name", "checkmark-circle-outline", "slot", "start", 4, "ngIf"], ["slot", "end", "value", "companyData"], ["name", "checkmark-circle-outline", "slot", "start", 4, "ngIf"], ["slot", "end", "value", "contactData"], [1, "codigo-actividad"], [1, "correo-notificacion"], ["autoGrow", "true", "readonly", "true", 3, "value"], ["name", "checkmark-circle-outline", "slot", "start", 1, "icon-updated"], ["name", "checkmark-circle-outline", "slot", "start"]], template: function DetailsPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Solicitud Actualizaci\u00F3n Empresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, DetailsPage_form_12_Template, 5, 3, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  padding: 0px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%] {\n  white-space: break-spaces;\n  text-align: center;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n  --border-width: 0;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  font-size: 0.9rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n  white-space: normal;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .razon-social[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-size: 1.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-top: 0;\n  --background: inherit;\n  --color: inherit;\n  --min-height: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  font-size: inherit;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  --border-radius: 50%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n  white-space: normal;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field.with-help[_ngcontent-%COMP%] {\n  padding: 5px 0;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: inherit;\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-secondary-contrast);\n  --padding-start: 1px;\n  --padding-end: 1px;\n  --padding-top: 1px;\n  --padding-bottom: 1px;\n  --border-radius: 1rem;\n  font-size: 0.6rem;\n  margin-top: -0.6rem;\n  pointer-events: initial;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  border-radius: 1rem;\n  --background: var(--ion-color-light-shade);\n  --color: var(--ion-color-light-contrast);\n  --padding-start: 0.7rem;\n  --padding-end: 0.7rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .codigo-actividad[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .correo-notificacion[_ngcontent-%COMP%] {\n  color: #0000ff;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%] {\n  white-space: break-spaces;\n  font-size: inherit;\n  color: #334fff;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-left: 5px;\n  vertical-align: middle;\n  color: var(--ion-color-success);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBREdNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDRFI7QURHUTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRFY7QURHVTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7QUNEWjtBRE1NO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDSlI7QURXRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFdNO0VBQ0UsYUFBQTtBQ1RSO0FEV1E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNUVjtBRFdVO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ1RaO0FEV1k7RUFDRSwrQkFBQTtBQ1RkO0FEY1E7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNaVjtBRGlCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNmTjtBRGlCTTtFQUNFLHFCQUFBO0FDZlI7QURrQk07RUFDRSxvQkFBQTtBQ2hCUjtBRG1CTTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtBQ2pCUjtBRG1CUTtFQUNFLGNBQUE7QUNqQlY7QURvQlE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FDbEJWO0FEb0JVO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNsQlo7QURzQlE7RUFDRSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FDcEJWO0FEdUJRO0VBRUUsY0FBQTtBQ3RCVjtBRDRCTTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDMUJSO0FENEJRO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUMxQlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvZGV0YWlscy9kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAmIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmIGlvbi1yb3cge1xuICAgICAgJiBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuXG4gICAgICAgICYgLnRpdGxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgJiAudGl0bGUtd3JhcHBlciB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAmIGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuXG4gICAgJiBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgJiAuaGVhZGVyLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICYgLnRpdGxlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICAmIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cbiAgICAgICAgICAgICYgLnJhem9uLXNvY2lhbCB7XG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24taWNvbiB7XG4gICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBpb24taXRlbSB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1wYWRkaW5nLXRvcDogMDtcbiAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gICAgICAtLWJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAtLWNvbG9yOiBpbmhlcml0O1xuICAgICAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuXG4gICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICB9XG5cbiAgICAgICYgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG5cbiAgICAgICYgLmZpZWxkIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgJi53aXRoLWhlbHAge1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgICAgJiAudG9vbHRpcCB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDFweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDFweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDFweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDFweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTAuNnJlbTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYgaW9uLXRleHRhcmVhIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMC43cmVtO1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDAuN3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICYgLmNvZGlnby1hY3RpdmlkYWQsXG4gICAgICAgICYgLmNvcnJlby1ub3RpZmljYWNpb24ge1xuICAgICAgICAgIGNvbG9yOiAjMDAwMGZmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBpb24tcmFkaW8tZ3JvdXAge1xuICAgICAgJiAucmFkaW8tbGFiZWwge1xuICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiAjMzM0ZmZmO1xuXG4gICAgICAgICYgaW9uLWljb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC50aXRsZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0bGUgLnRpdGxlLXdyYXBwZXIge1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIC5oZWFkZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLmhlYWRlci13cmFwcGVyIC50aXRsZSB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLmhlYWRlci13cmFwcGVyIC50aXRsZSBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaGVhZGVyLXdyYXBwZXIgLnRpdGxlIGlvbi1pdGVtIC5yYXpvbi1zb2NpYWwge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIC5oZWFkZXItd3JhcHBlciBpb24taWNvbiB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAtLWJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIC0tY29sb3I6IGluaGVyaXQ7XG4gIC0tbWluLWhlaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSBpb24tY2hlY2tib3gge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5maWVsZCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmZpZWxkLndpdGgtaGVscCB7XG4gIHBhZGRpbmc6IDVweCAwO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmZpZWxkIGg0IHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIC5maWVsZCBoNCAudG9vbHRpcCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDFweDtcbiAgLS1wYWRkaW5nLWVuZDogMXB4O1xuICAtLXBhZGRpbmctdG9wOiAxcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDFweDtcbiAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xuICBmb250LXNpemU6IDAuNnJlbTtcbiAgbWFyZ2luLXRvcDogLTAuNnJlbTtcbiAgcG9pbnRlci1ldmVudHM6IGluaXRpYWw7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSAuZmllbGQgaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICAtLXBhZGRpbmctc3RhcnQ6IDAuN3JlbTtcbiAgLS1wYWRkaW5nLWVuZDogMC43cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWl0ZW0gLmZpZWxkIC5jb2RpZ28tYWN0aXZpZGFkLCBpb24tY29udGVudCBpb24tY2FyZCBpb24taXRlbSAuZmllbGQgLmNvcnJlby1ub3RpZmljYWNpb24ge1xuICBjb2xvcjogIzAwMDBmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1yYWRpby1ncm91cCAucmFkaW8tbGFiZWwge1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGNvbG9yOiAjMzM0ZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLXJhZGlvLWdyb3VwIC5yYWRpby1sYWJlbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DetailsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-details',
                templateUrl: './details.page.html',
                styleUrls: ['./details.page.scss'],
            }]
    }], function () { return [{ type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/companies/checkChanges.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/companies/checkChanges.guard.ts ***!
  \**********************************************************/
/*! exports provided: CheckChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckChangesGuard", function() { return CheckChangesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * Comprueba si hay cambios pendientes por guardar en la empresa en edición actual.
 */
class CheckChangesGuard {
    canDeactivate(component) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield component.canNavigate();
        });
    }
}
CheckChangesGuard.ɵfac = function CheckChangesGuard_Factory(t) { return new (t || CheckChangesGuard)(); };
CheckChangesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CheckChangesGuard, factory: CheckChangesGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CheckChangesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=details-details-module-es2015.js.map