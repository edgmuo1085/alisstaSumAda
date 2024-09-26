(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["summary-summary-module"],{

/***/ "./src/app/pages/companies/summary/summary-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/companies/summary/summary-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/companies/summary/summary.page.ts");





const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_2__["SummaryPage"],
    },
];
class SummaryPageRoutingModule {
}
SummaryPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SummaryPageRoutingModule });
SummaryPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SummaryPageRoutingModule_Factory(t) { return new (t || SummaryPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SummaryPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SummaryPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/summary/summary.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/companies/summary/summary.module.ts ***!
  \***********************************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-routing.module */ "./src/app/pages/companies/summary/summary-routing.module.ts");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/companies/summary/summary.page.ts");








class SummaryPageModule {
}
SummaryPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SummaryPageModule });
SummaryPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SummaryPageModule_Factory(t) { return new (t || SummaryPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SummaryPageModule, { declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SummaryPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"]],
                declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/summary/summary.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/companies/summary/summary.page.ts ***!
  \*********************************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../navbar/navbar.service */ "./src/app/pages/navbar/navbar.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../pipes/municipiosFilter.pipe */ "./src/app/pipes/municipiosFilter.pipe.ts");














function SummaryPage_form_5_ion_item_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-radio", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tz_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tz_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tz_r5.value);
} }
function SummaryPage_form_5_ion_select_option_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", d_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", d_r6.Nombre_Departamento, " ");
} }
function SummaryPage_form_5_ion_select_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const m_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", m_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", m_r7.NombreMunicipio, " ");
} }
function SummaryPage_form_5_ng_container_72_ng_container_3_ion_select_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r15.label, " ");
} }
function SummaryPage_form_5_ng_container_72_ng_container_3_ion_select_option_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r16.label, " ");
} }
function SummaryPage_form_5_ng_container_72_ng_container_3_ion_select_option_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r17.label, " ");
} }
function SummaryPage_form_5_ng_container_72_ng_container_3_ion_item_divider_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-item-divider");
} }
function SummaryPage_form_5_ng_container_72_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Papel/Representaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SummaryPage_form_5_ng_container_72_ng_container_3_ion_select_option_5_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tipo Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SummaryPage_form_5_ng_container_72_ng_container_3_ion_select_option_10_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "N\u00FAmero Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Primer Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Segundo Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Primer Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Segundo Apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Sexo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-select", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SummaryPage_form_5_ng_container_72_ng_container_3_ion_select_option_35_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Email Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Celular");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Tel\u00E9fono Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "ion-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, SummaryPage_form_5_ng_container_72_ng_container_3_ion_item_divider_48_Template, 1, 0, "ion-item-divider", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r9 = ctx.$implicit;
    const isLast_r10 = ctx.last;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "representacion_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.TIPOS_REPRESENTACION);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "tipoDocumento_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.TIPOS_DOCUMENTO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "numeroDocumento_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "primerNombre_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "segundoNombre_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "primerApellido_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "segundoApellido_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "sexo_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.TIPOS_SEXO);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "correo_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "celular_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", "telefono_" + c_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !isLast_r10);
} }
function SummaryPage_form_5_ng_container_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Datos Personas Contacto Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SummaryPage_form_5_ng_container_72_ng_container_3_Template, 49, 15, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.contacts);
} }
function SummaryPage_form_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function SummaryPage_form_5_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "TD/N\u00FAmero Identificaci\u00F3n Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Raz\u00F3n Social Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "ID Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Direcci\u00F3n Empresa Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Indicador de Zona");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-radio-group", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SummaryPage_form_5_ion_item_24_Template, 4, 2, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Departamento Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, SummaryPage_form_5_ion_select_option_29_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Municipio Sede Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, SummaryPage_form_5_ion_select_option_34_Template, 2, 2, "ion-select-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](35, "municipiosFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Estado Sede");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "ion-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "C\u00F3digo/Nombre AE Principal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "ion-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Sector Econ\u00F3mico");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Celular Contacto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "ion-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Tel\u00E9fono Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ion-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Correo Notificaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "ion-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "C\u00F3digo Postal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "TD/No. Identificaci\u00F3n Rpte. Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](67, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ion-label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Nombre Rpte. Legal");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "ion-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](72, SummaryPage_form_5_ng_container_72_Template, 4, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryPage_form_5_Template_ion_button_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ion-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Aceptar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.TIPOS_ZONA);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareWith", ctx_r0.compareWith("departamento"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.departamentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareWith", ctx_r0.compareWith("municipio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](35, 7, ctx_r0.municipios, ctx_r0.formGroup.controls.departamentoSede.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.contacts.length);
} }
/**
 * Componente para la vista de resumen.
 */
class SummaryPage {
    constructor(navbarService, route, companiesService, router) {
        this.navbarService = navbarService;
        this.route = route;
        this.companiesService = companiesService;
        this.router = router;
        /**
         * Indicadores de zona.
         */
        this.TIPOS_ZONA = [
            { label: 'Urbana', value: 'U' },
            { label: 'Rural', value: 'R' },
        ];
        /**
         * Tipos de papel o representación.
         */
        this.TIPOS_REPRESENTACION = [
            { label: 'Representante Legal', value: 'Representante Legal' },
            { label: 'Reponsable SG-SST', value: 'Reponsable SG-SST' },
            { label: 'Talento Humano', value: 'Talento Humano' },
        ];
        /**
         * Tipos de documento.
         */
        this.TIPOS_DOCUMENTO = [
            { label: 'CC', value: '1' },
            { label: 'NI', value: '2' },
            { label: 'CE', value: '3' },
            { label: 'NU', value: '4' },
            { label: 'PA', value: '5' },
            { label: 'TI', value: '6' },
            { label: 'PE', value: '7' },
            { label: 'PT', value: '8' }
        ];
        /**
         * Tipos de sexo.
         */
        this.TIPOS_SEXO = [
            { label: 'Masculino', value: 'Masculino' },
            { label: 'Femenino', value: 'Femenino' },
        ];
    }
    ionViewWillEnter() {
        this.navbarService.setVisibility(false);
        this.getCompany();
    }
    ionViewWillLeave() {
        this.navbarService.setVisibility(true);
    }
    /**
     * Redirige a la vista de firma.
     */
    next() {
        this.router.navigate(['../../../signature'], { relativeTo: this.route });
    }
    /**
     * Redirige a la vista de detalles de esta empresa para permitir la edición de nuevo.
     */
    cancel() {
        const id = this.route.snapshot.params.id;
        this.router.navigate([`/u/companies/list/${id}`], { replaceUrl: true });
    }
    /**
     * Comparación de objetos para establecer valores en selectores de municipios y departamentos.
     *
     * @param mode Modo.
     */
    compareWith(mode) {
        const key = mode === 'departamento' ? 'Pk_Id_Departamento' : 'IdMunicipio';
        return (a, b) => {
            return a && b ? a[key] === b[key] : a === b;
        };
    }
    /**
     * Establece la empresa de la vista de edición de datos de empresa.
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
                this.cancel();
                return;
            }
            this.departamentos = yield this.companiesService.departamentos;
            this.municipios = yield this.companiesService.municipios;
            this.initForm();
        });
    }
    /**
     * Inicializa el formulario.
     */
    initForm() {
        var _a;
        const identificacionEmpresa = `${this.company.str_Sigla_Documento} ${this.company.strNumeroDcto}`;
        const identificacionEmpresaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: identificacionEmpresa, disabled: true });
        const razonSocialControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.strRazonSocial, disabled: true });
        const idSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.eDSedesActualizadas.strNombreSede, disabled: true });
        const direccionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.strDireccion, disabled: true });
        const indicadorZonaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.eDSedesActualizadas.srtIndicadorZona, disabled: true });
        const departamento = {
            Pk_Id_Departamento: this.company.eDSedesActualizadas.Fk_Id_Departamento,
            Nombre_Departamento: this.company.eDSedesActualizadas.Nombre_Departamento_Sede,
        };
        const departamentoSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: departamento, disabled: true });
        const municipio = {
            IdMunicipio: this.company.eDSedesActualizadas.Fk_Id_Municipio,
            NombreMunicipio: this.company.eDSedesActualizadas.Nombre_Municipio_Sede,
        };
        const municipioSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: municipio, disabled: true });
        const estadoSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.eDSedesActualizadas.strNombreSede, disabled: true });
        const actividadEconomica = `${this.company.strCodigoActividadEconomica} ${this.company.strActividadEconomicaNombre}`;
        const actividadEconomicaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: actividadEconomica, disabled: true });
        const sectorEconomicoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.strDescripcionSectorEconomico, disabled: true });
        const celularControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.strCelular, disabled: true });
        const telefonoNotificacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.strTelefono, disabled: true });
        const correoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.strCorreoElectronico, disabled: true });
        const codigoPostalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.eDSedesActualizadas.strCodigoPostal, disabled: true });
        const identificacionRepresentante = `${this.company.strSiglaRepresentanteLegal} ${this.company.strNumeroDcto_Representant_Legal}`;
        const identificacionRepresentanteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: identificacionRepresentante, disabled: true });
        const representanteLegalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: this.company.strNombre_Representant_Legal, disabled: true });
        const formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            identificacionEmpresa: identificacionEmpresaControl,
            razonSocial: razonSocialControl,
            idSede: idSedeControl,
            direccion: direccionControl,
            indicadorZona: indicadorZonaControl,
            departamentoSede: departamentoSedeControl,
            municipioSede: municipioSedeControl,
            estadoSede: estadoSedeControl,
            actividadEconomica: actividadEconomicaControl,
            sectorEconomico: sectorEconomicoControl,
            celular: celularControl,
            telefonoNotificacion: telefonoNotificacionControl,
            correo: correoControl,
            codigoPostal: codigoPostalControl,
            identificacionRepresentante: identificacionRepresentanteControl,
            representanteLegal: representanteLegalControl,
        });
        const contacts = (_a = this.company.listaPersonasContacto) !== null && _a !== void 0 ? _a : [];
        contacts.forEach((c, i) => {
            const representacion = this.TIPOS_REPRESENTACION.find(r => r.value === c.strPapelRespresentacion);
            const representacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: representacion, disabled: true });
            const tipoDocumento = this.TIPOS_DOCUMENTO.find(d => d.value === c.intTipoDocumento);
            const tipoDocumentoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: tipoDocumento, disabled: true });
            const numeroDocumentoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strNumeroDocumento, disabled: true });
            const primerNombreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strPrimerNombre, disabled: true });
            const segundoNombreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strSegundoNombre, disabled: true });
            const primerApellidoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strPrimerApellido, disabled: true });
            const segundoApellidoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strSegundoApellido, disabled: true });
            const sexo = this.TIPOS_SEXO.find(s => s.value === c.strSexo);
            const sexoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: sexo, disabled: true });
            const correoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strEmail, disabled: true });
            const celularControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strCelular, disabled: true });
            const telefonoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: c.strTelefono, disabled: true });
            formGroup.addControl(`representacion_${i}`, representacionControl);
            formGroup.addControl(`tipoDocumento_${i}`, tipoDocumentoControl);
            formGroup.addControl(`numeroDocumento_${i}`, numeroDocumentoControl);
            formGroup.addControl(`primerNombre_${i}`, primerNombreControl);
            formGroup.addControl(`segundoNombre_${i}`, segundoNombreControl);
            formGroup.addControl(`primerApellido_${i}`, primerApellidoControl);
            formGroup.addControl(`segundoApellido_${i}`, segundoApellidoControl);
            formGroup.addControl(`sexo_${i}`, sexoControl);
            formGroup.addControl(`correo_${i}`, correoControl);
            formGroup.addControl(`celular_${i}`, celularControl);
            formGroup.addControl(`telefono_${i}`, telefonoControl);
        });
        this.contacts = Array.from(Array(contacts.length).keys());
        this.formGroup = formGroup;
    }
}
SummaryPage.ɵfac = function SummaryPage_Factory(t) { return new (t || SummaryPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
SummaryPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SummaryPage, selectors: [["app-summary"]], decls: 6, vars: 1, consts: [[1, "title"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "ion-margin"], ["lines", "none"], [1, "ion-margin-bottom"], ["position", "stacked"], ["formControlName", "identificacionEmpresa"], ["formControlName", "razonSocial"], ["formControlName", "idSede"], ["formControlName", "direccion"], ["formControlName", "indicadorZona"], [4, "ngFor", "ngForOf"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "departamentoSede", 3, "compareWith"], [3, "value", 4, "ngFor", "ngForOf"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "municipioSede", 3, "compareWith"], ["formControlName", "actividadEconomica"], ["formControlName", "sectorEconomico"], ["formControlName", "celular"], ["formControlName", "telefonoNotificacion"], ["formControlName", "correo"], ["formControlName", "codigoPostal"], ["formControlName", "identificacionRepresentante"], ["formControlName", "representanteLegal"], [4, "ngIf"], [1, "actions-wrapper", "ion-margin-top"], ["color", "light", 3, "click"], ["type", "submit", "color", "primary"], ["slot", "start", "disabled", "", 3, "value"], [3, "value"], [1, "section-title"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", 3, "formControlName"], [3, "formControlName"]], template: function SummaryPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Solicitud Actualizaci\u00F3n Sede Principal y Personas Contacto Empresas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SummaryPage_form_5_Template, 78, 10, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItemDivider"]], pipes: [_pipes_municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_8__["MunicipiosFilterPipe"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 10px;\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-overflow: initial;\n  white-space: break-spaces;\n  text-align: center;\n  font-size: 1.3rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: inherit;\n  --highlight-height: 0;\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-medium);\n  color: var(--ion-color-medium-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  white-space: break-spaces;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]     .native-input {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select.select-disabled[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-dark);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   ion-radio.radio-disabled[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  text-align: center;\n  color: var(--ion-color-primary);\n  margin: 2rem 0;\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL3N1bW1hcnkvQzpcXFVzZXJzXFxjYWx2YXJhZG9cXERvY3VtZW50c1xccHJveWVjdG9cXEFjdHVhbFxcYWxpc3N0YV9zdW1cXEJyYW5jaGVzXFxSZXZpc2lvbl9WZXJzaW9uX0FjdHVhbGl6YWRhXzIwMjQwOTIwL3NyY1xcYXBwXFxwYWdlc1xcY29tcGFuaWVzXFxzdW1tYXJ5XFxzdW1tYXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL3N1bW1hcnkvc3VtbWFyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtBQ0FKO0FERUk7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0FOO0FET0k7RUFDRSxVQUFBO0VBQ0EsNkJBQUE7QUNKTjtBRE1NO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtBQ0pSO0FET1U7RUFDRSxxQ0FBQTtFQUNBLHlDQUFBO0FDTFo7QURRVTtFQUNFLHlDQUFBO0VBQ0EsdUNBQUE7QUNOWjtBRFVRO0VBQ0UsVUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7QUNSVjtBRGFZO0VBQ0UsVUFBQTtBQ1hkO0FEaUJVO0VBQ0UsVUFBQTtBQ2ZaO0FEbUJRO0VBRUUsa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNsQlY7QURxQlE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDbkJWO0FEc0JZO0VBQ0UsVUFBQTtBQ3BCZDtBRDBCTTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ3hCUjtBRDRCSTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQzFCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9zdW1tYXJ5L3N1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICYgaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcblxuICAgICYgLnRpdGxlIHtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgJiBpb24tY2FyZCB7XG4gICAgJiBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICAgICAgJiBpb24taW5wdXQge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1sYWJlbCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgICAgICAgfVxuXG4gICAgICAgICYgaW9uLWlucHV0IHtcbiAgICAgICAgICAmIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAmIC5uYXRpdmUtaW5wdXQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgJi5zZWxlY3QtZGlzYWJsZWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1pbnB1dCxcbiAgICAgICAgJiBpb24tc2VsZWN0IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMXJlbTtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24tcmFkaW8tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAgICAgICAmIGlvbi1yYWRpbyB7XG4gICAgICAgICAgICAmLnJhZGlvLWRpc2FibGVkIHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiAuc2VjdGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbjogMnJlbSAwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIC5hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudGl0bGUge1xuICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCBpb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtLml0ZW0taW50ZXJhY3RpdmUtZGlzYWJsZWQgaW9uLXNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSk7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQgOjpuZy1kZWVwIC5uYXRpdmUtaW5wdXQge1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXNlbGVjdC5zZWxlY3QtZGlzYWJsZWQge1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0LCBpb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSBpb24tc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIC0tcGFkZGluZy1zdGFydDogMXJlbTtcbiAgLS1wYWRkaW5nLWVuZDogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1yYWRpby1ncm91cCBpb24tcmFkaW8ucmFkaW8tZGlzYWJsZWQge1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgLnNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCAuYWN0aW9ucy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SummaryPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-summary',
                templateUrl: './summary.page.html',
                styleUrls: ['./summary.page.scss'],
            }]
    }], function () { return [{ type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_5__["NavbarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=summary-summary-module-es2015.js.map