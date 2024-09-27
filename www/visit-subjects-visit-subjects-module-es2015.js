(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visit-subjects-visit-subjects-module"],{

/***/ "./src/app/pages/visit-subjects/visit-subjects-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/visit-subjects/visit-subjects-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: VisitSubjectsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitSubjectsPageRoutingModule", function() { return VisitSubjectsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _visit_subjects_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-subjects.page */ "./src/app/pages/visit-subjects/visit-subjects.page.ts");





const routes = [
    {
        path: '',
        component: _visit_subjects_page__WEBPACK_IMPORTED_MODULE_2__["VisitSubjectsPage"],
    },
    {
        path: 'upload',
        loadChildren: () => Promise.all(/*! import() | uploader-uploader-module */[__webpack_require__.e("default~responsible-signature-arl-responsible-signature-arl-module~uploader-uploader-module"), __webpack_require__.e("common"), __webpack_require__.e("uploader-uploader-module")]).then(__webpack_require__.bind(null, /*! ../uploader/uploader.module */ "./src/app/pages/uploader/uploader.module.ts")).then(m => m.UploaderPageModule),
    },
    {
        path: 'type',
        loadChildren: () => __webpack_require__.e(/*! import() | visit-type-visit-type-module */ "visit-type-visit-type-module").then(__webpack_require__.bind(null, /*! ../visit-type/visit-type.module */ "./src/app/pages/visit-type/visit-type.module.ts")).then(m => m.VisitTypePageModule),
    },
];
class VisitSubjectsPageRoutingModule {
}
VisitSubjectsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VisitSubjectsPageRoutingModule });
VisitSubjectsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VisitSubjectsPageRoutingModule_Factory(t) { return new (t || VisitSubjectsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisitSubjectsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitSubjectsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/visit-subjects/visit-subjects.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/visit-subjects/visit-subjects.module.ts ***!
  \***************************************************************/
/*! exports provided: VisitSubjectsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitSubjectsPageModule", function() { return VisitSubjectsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visit-subjects-routing.module */ "./src/app/pages/visit-subjects/visit-subjects-routing.module.ts");
/* harmony import */ var _visit_subjects_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visit-subjects.page */ "./src/app/pages/visit-subjects/visit-subjects.page.ts");







class VisitSubjectsPageModule {
}
VisitSubjectsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VisitSubjectsPageModule });
VisitSubjectsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VisitSubjectsPageModule_Factory(t) { return new (t || VisitSubjectsPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitSubjectsPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisitSubjectsPageModule, { declarations: [_visit_subjects_page__WEBPACK_IMPORTED_MODULE_5__["VisitSubjectsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitSubjectsPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitSubjectsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitSubjectsPageRoutingModule"]],
                declarations: [_visit_subjects_page__WEBPACK_IMPORTED_MODULE_5__["VisitSubjectsPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/visit-subjects/visit-subjects.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/visit-subjects/visit-subjects.page.ts ***!
  \*************************************************************/
/*! exports provided: VisitSubjectsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitSubjectsPage", function() { return VisitSubjectsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function VisitSubjectsPage_ion_card_11_ion_badge_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", subject_r2.cantidadDocumentos, " ");
} }
function VisitSubjectsPage_ion_card_11_ion_item_43_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Registrar c\u00F3digo de evento Educa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function VisitSubjectsPage_ion_card_11_ion_item_43_Template_ion_toggle_ionChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const subject_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.showInputCodeEdu($event, subject_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitSubjectsPage_ion_card_11_ion_item_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "C\u00F3digo de evento Educa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "codeEduca");
} }
function VisitSubjectsPage_ion_card_11_ion_badge_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subject_r2.cantidadDocumentos);
} }
function VisitSubjectsPage_ion_card_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_card_11_Template_ion_icon_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const subject_r2 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.toggleCard(subject_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-title", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Observaciones");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cobertura");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-row", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_card_11_Template_ion_row_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const subject_r2 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.attachDocs(subject_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, VisitSubjectsPage_ion_card_11_ion_badge_32_Template, 2, 1, "ion-badge", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Soportes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-col");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Adjuntar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-toggle", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function VisitSubjectsPage_ion_card_11_Template_ion_toggle_ionChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const subject_r2 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.toggleAttachDocs($event, subject_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, VisitSubjectsPage_ion_card_11_ion_item_43_Template, 4, 0, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, VisitSubjectsPage_ion_card_11_ion_item_44_Template, 4, 1, "ion-item", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Incluir esta actividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-card-content", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-list", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-item", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_card_11_Template_ion_item_click_53_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const subject_r2 = ctx.$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.attachDocs(subject_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, VisitSubjectsPage_ion_card_11_ion_badge_54_Template, 2, 1, "ion-badge", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Adjuntar documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-item", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Incluir esta actividad");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-checkbox", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VisitSubjectsPage_ion_card_11_Template_ion_checkbox_ngModelChange_61_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const subject_r2 = ctx.$implicit; return subject_r2.include = $event; })("ngModelChange", function VisitSubjectsPage_ion_card_11_Template_ion_checkbox_ngModelChange_61_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const subject_r2 = ctx.$implicit; const i_r3 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.emitIncludedOnReactive(subject_r2, i_r3 + "included"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subject_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", subject_r2.isOpen ? ctx_r0.CLOSE_TOGGLER : ctx_r0.OPEN_TOGGLER);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", subject_r2.idActividad, " contrato ", subject_r2.firmamaQR === 1 ? "(Firma con QR)" : "(Firma sin QR)", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ion-hide", !subject_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.subjectForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subject_r2.descripcionActividad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subject_r2.observaciones, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Total de ", subject_r2.uniadMedidaDescripcion, "/ Actividad (Estimada ", subject_r2.cantidadHorasEjecutar, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "horasEjecutadas");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.cantidadDocumentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.textSoporte, " se van a adjuntar documentos t\u00E9cnicos por Alissta Web");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.lineaAccion === "ED");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.showInputCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "included");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ion-hide", subject_r2.isOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subject_r2.descripcionActividad, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.cantidadDocumentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", subject_r2.include);
} }
function VisitSubjectsPage_ion_fab_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_fab_12_Template_ion_fab_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
/**
 * Componente para la vista de temas de visita.
 */
class VisitSubjectsPage {
    constructor(alertController, router, cacheService) {
        this.alertController = alertController;
        this.router = router;
        this.cacheService = cacheService;
        /**
         * Nombre del ícono para el alternador del tema cuando este está cerrado.
         */
        this.OPEN_TOGGLER = 'chevron-down-outline';
        /**
         * Nombre del ícono para el alternador del tema cuando este está abierto.
         */
        this.CLOSE_TOGGLER = 'chevron-up-outline';
        /**
         * Número máximo de temas seleccionados por operación.
         */
        this.MAX_SUBJECTS = 4;
        /**
         * Textos para la ventana de diálogo que notifica al usuario que ha seleccionado más temas de los
         * permitidos.
         */
        this.ALERT_TEXTS = {
            title: 'Atención',
            mode: 'ios',
            message: 'Puede seleccionar un máximo de cuatro (4) actividades por formulario.',
            okButtonText: 'Aceptar',
        };
        /**
         * Textos para la ventana de diálogo que notifica al usuario que hay que seleccionar por lo menos una
         * actividad.
         *
         */
        this.ALERT_TEXTS_MINACTIVITY = {
            title: 'Atención',
            mode: 'ios',
            message: 'Se debe seleccionar por lo menos (1) actividad para continuar.',
            okButtonText: 'Aceptar',
        };
        this.ALERT_TEXTS_MAXHOREJECUTAR = {
            title: 'Atención',
            mode: 'ios',
            message: 'No puede seleccionar las actividades, debido a que excede las horas permitidas a ejecutar. Las cuales son 10 horas por día',
            okButtonText: 'Aceptar',
        };
        this.ALERT_TEXTS_FIELDSEMPTY = {
            title: 'Atención',
            mode: 'ios',
            message: 'Todos los campos son obligatorios',
            okButtonText: 'Aceptar',
        };
        /**
         * Esta variable permitira insertar la actividad seleccionada,
         * Organizar la interfaz por ahora la pondre any
         */
        this.subjectsSelected = [];
        this.redirect = true;
        this.textSoporte = 'NO';
        this.validarCoberturaHorasEjecutadas = true;
    }
    ionViewWillEnter() {
        // tslint:disable-next-line: prefer-for-of
        if (this.cacheService.infoDocumentosPorActividad.length > 0) {
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < this.cacheService.infoDocumentosPorActividad.length; i++) {
                const idActividadDocumentos = this.cacheService.infoDocumentosPorActividad[i].idActividad;
                this.subjects.forEach(element => {
                    if (element.id === idActividadDocumentos) {
                        element.cantidadDocumentos = this.cacheService.infoDocumentosPorActividad[i].cantidadDocumentosAdjuntos;
                    }
                });
            }
        }
    }
    ngOnInit() {
        this.cacheService.limpiarVariablesAsesoria();
        this.updateListAdvisoryTopic();
    }
    /**
     * Muestra u oculta los detalles del tema proporcionado.
     * Si se está mostrando los detalles de un tema y existe otro abierto, lo cierra.
     *
     */
    toggleCard(subject) {
        subject.isOpen = !subject.isOpen;
        if (subject.isOpen) {
            const openedSubjects = this.subjects.filter(s => s !== subject && s.isOpen);
            openedSubjects.forEach(s => (s.isOpen = false));
        }
    }
    /**
     * Alterna el botón que permite subir archivos o no a un tema.
     *
     * @param event Evento que dispara el componente _ion-toggle_.
     * @param subject Tema actual.
     */
    toggleAttachDocs(event, subject) {
        subject.attachDocs = event.detail.checked;
        const activo = event.detail.checked;
        if (activo) {
            this.textSoporte = 'SI';
        }
        else {
            this.textSoporte = 'NO';
        }
    }
    /**
     *
     */
    attachDocs(subject) {
        this.cacheService.InfoActivityAttachDocs(subject);
        this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects/upload');
    }
    emitIncludedOnReactive(subject, name) {
        this.subjectForm.controls[name].setValue(subject.include, { emitEvent: false });
        this.toggleIncludeSubject(subject);
    }
    /**
     * Marca para inclusión el tema proporcionado.
     *
     * Comprueba también el número máximo de temas seleccionados en la operación actual. Por defecto
     * es cuatro (4).
     *
     * @param subject Tema seleccionado.
     * @param name Nombre del campo en el formulario reactivo.
     */
    toggleIncludeSubject(subject) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // subject.include = !subject.include;
            const existe = this.searchSubject(subject);
            const validate = this.searchSubject2(subject);
            if (!existe) {
                subject.estadoInterno = 'Proceso';
                if (this.subjectsSelected.length !== 0 && validate) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < this.subjectsSelected.length; i++) {
                        const contrato = this.subjectsSelected[i].numeroContrato;
                        if (contrato === this.subjectsSelected[i].numeroContrato) {
                            this.subjectsSelected.push(subject);
                            if (this.subjectsSelected.length > 0) {
                                this.redirectTo = 'type';
                                // Guardar la linea de acción
                                this.cacheService.saveActionLine(this.subjectsSelected[i].lineaAccion);
                                if (this.subjectsSelected[i].lineaAccion === 'ED') {
                                    const attachments = this.subjectsSelected[i].cantidadDocumentos || 0;
                                    const showInputCode = this.subjectsSelected[i].showInputCode;
                                    if (attachments < 1 && !showInputCode) {
                                        this.notification('Atención', 'Como la linea de acción es EDUCA, es obligatorio cargar los soportes');
                                        this.attachDocs(subject);
                                        return;
                                    }
                                }
                                break;
                            }
                        }
                        else {
                            this.redirectTo = '';
                            this.notification('Atención', 'No se puede seleccionar las actividades con contratos diferentes');
                        }
                    }
                }
                else if (validate) {
                    this.subjectsSelected.push(subject);
                    this.redirectTo = 'type';
                    // tslint:disable-next-line: prefer-for-of
                    for (let i = 0; i < this.subjectsSelected.length; i++) {
                        this.cacheService.saveActionLine(this.subjectsSelected[i].lineaAccion);
                        if (this.subjectsSelected[i].lineaAccion === 'ED') {
                            const attachments = this.subjectsSelected[i].cantidadDocumentos || 0;
                            const showInputCode = this.subjectsSelected[i].showInputCode;
                            if (attachments < 1 && !showInputCode) {
                                this.notification('Atención', 'Como la linea de acción es EDUCA, es obligatorio cargar los soportes Asistencia a eventos de PyP y Evaluación de eventos');
                                this.attachDocs(subject);
                                return;
                            }
                        }
                        break;
                    }
                    if (this.subjectsSelected.length > 0) {
                        this.redirectTo = 'type';
                    }
                }
                else {
                    const elementRemove = subject;
                    const filteredItems = this.subjectsSelected.filter(item => item !== elementRemove);
                    this.subjectsSelected = filteredItems;
                    if (this.subjectsSelected.length === 0) {
                        this.redirectTo = '';
                    }
                    else {
                        this.redirectTo = 'type';
                    }
                    if (subject.include) {
                        this.notification('Atención', 'Dos actividades de seguimiento a observaciones no se pueden realizar en la misma acta');
                    }
                    setTimeout(() => {
                        subject.include = false;
                    }, 1000);
                }
            }
            else {
                // subject.include = false;
                const elementRemove = subject;
                const filteredItems = this.subjectsSelected.filter(item => item !== elementRemove);
                this.subjectsSelected = filteredItems;
                if (this.subjectsSelected.length === 0) {
                    this.redirectTo = '';
                }
                else {
                    this.redirectTo = 'type';
                }
            }
            /**
             * Valida que el array de las actividades seleccionadas, al descheck no sea igual a 0
             * de esta manera mostrar una alerta indicando que se debe seleccionar por lo menos 1
             * actividad.
             */
            if (this.subjectsSelected.length === 0) {
                // subject.include = false;
                const okButton = {
                    text: this.ALERT_TEXTS_MINACTIVITY.okButtonText,
                    role: 'OK',
                };
                const alert = this.alertController.create({
                    header: this.ALERT_TEXTS_MINACTIVITY.title,
                    mode: 'ios',
                    message: this.ALERT_TEXTS_MINACTIVITY.message,
                    buttons: [okButton],
                });
                (yield alert).present();
                return;
            }
            /**
             * Valida que el array de las actividades seleccionadas no sean mayores a 4 items
             */
            if (this.subjectsSelected.length > this.MAX_SUBJECTS) {
                // Se desmarca el tema indicado porque se ha alcanzado el máximo permitido
                // subject.include = false;
                this.redirectTo = '';
                const okButton = {
                    text: this.ALERT_TEXTS.okButtonText,
                    role: 'OK',
                };
                const alert = this.alertController.create({
                    header: this.ALERT_TEXTS.title,
                    mode: 'ios',
                    message: this.ALERT_TEXTS.message,
                    buttons: [okButton],
                });
                (yield alert).present();
                return;
            }
            // subject.include = !subject.include;
        });
    }
    /**
     * Busca la actividad seleccionada para validar si se checkea o se descheckea para lograr hacer
     * la gestión del acta de asesoría
     */
    searchSubject(subject) {
        const idActividad = subject.id;
        const searchSubject = this.subjectsSelected.find(subj => subj.id === idActividad);
        if (searchSubject) {
            return true;
        }
        else {
            return false;
        }
    }
    searchSubject2(subject) {
        if (subject.SiniestroOpsActividad === 5) {
            const searchSubject = this.subjectsSelected.filter(subj => subj.SiniestroOpsActividad === 5);
            if (searchSubject.length < 1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    /**
     * Método que agrega los valores de cada actividad migrada a cada una de las tarjetas
     */
    updateListAdvisoryTopic() {
        const listActivMigradas = JSON.parse(sessionStorage.companySelected).listaActividadesMigradas;
        this.subjects = listActivMigradas;
        console.log("Lista Act Migradas", listActivMigradas);
        this.subjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.subjects.length; i++) {
            const controlId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].id);
            const controlIdActividad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].idActividad);
            const descripcionActividad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].descripcionActividad);
            const controlObservaciones = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].observaciones);
            const controlHorasAEjecutar = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].cantidadHorasEjecutar);
            const controlUnidadMedida = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].uniadMedidaDescripcion);
            const controlHorasEjecutadas = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
            const controlCobertura = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]);
            const controlRegistroCodigoEventosEduca = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].registroCodigoEventosEduca);
            const controlCodeEduca = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            const controlFechaFinContrato = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].fechaFinContrato);
            const constFirmaConQR = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].firmamaQR);
            const constEstadoInterno = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].estadoInterno);
            const includedControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].include);
            const fkIdSiniestro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].Fk_Id_Siniestro);
            const siniestro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].Siniestro);
            const siniestroOpActividad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.subjects[i].SiniestroOpsActividad);
            this.subjectForm.addControl(i + 'id', controlId);
            this.subjectForm.addControl(i + 'idActividad', controlIdActividad);
            this.subjectForm.addControl(i + 'descripcionActividad', descripcionActividad);
            this.subjectForm.addControl(i + 'Observaciones', controlObservaciones);
            this.subjectForm.addControl(i + 'horasAEjecutar', controlHorasAEjecutar);
            this.subjectForm.addControl(i + 'unidadMedida', controlUnidadMedida);
            this.subjectForm.addControl(i + 'horasEjecutadas', controlHorasEjecutadas);
            this.subjectForm.addControl(i + 'coverage', controlCobertura);
            this.subjectForm.addControl(i + 'registroCodigoEventosEduca', controlRegistroCodigoEventosEduca);
            this.subjectForm.addControl(i + 'codeEduca', controlCodeEduca);
            this.subjectForm.addControl(i + 'fechaFinContrato', controlFechaFinContrato);
            this.subjectForm.addControl(i + 'firmaQR', constFirmaConQR);
            this.subjectForm.addControl(i + 'estadoInterno', constEstadoInterno);
            this.subjectForm.addControl(i + 'included', includedControl);
            this.subjectForm.addControl(i + 'fkIdSiniestro', fkIdSiniestro);
            this.subjectForm.addControl(i + 'siniestro', siniestro);
            this.subjectForm.addControl(i + 'siniestroOpActividad', siniestroOpActividad);
            this.subjectForm.controls[i + 'included'].valueChanges.subscribe(v => {
                this.subjects[i].include = v;
                this.toggleIncludeSubject(this.subjects[i]);
            });
        }
    }
    /**
     * Este metodo permite validar si se muestra el input para el código de educa
     */
    showInputCodeEdu(event, subject) {
        const valor = event.detail.checked;
        if (valor === true) {
            subject.showInputCode = true;
        }
        else {
            subject.showInputCode = false;
        }
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
    validateTarjetas(actividesSeleccionadas, tarjetas) {
        const tarjetasSeleccionadas = [];
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < actividesSeleccionadas.length; i++) {
            const element = actividesSeleccionadas[i];
            const encontro = tarjetas.find(item => item.id === element.id);
            if (encontro) {
                encontro.include = true;
                encontro.AdjuntarDocumentosTecnicos = element.attachDocs ? 'SI' : 'NO';
                // encontro.CodigoeventoPositiva = element.registroCodigoEventosEduca;
                encontro.CodigoeventoPositiva = encontro.codeEduca;
                tarjetasSeleccionadas.push(encontro);
            }
        }
        return tarjetasSeleccionadas;
    }
    /**
     * Este metodo valida varias cosas:
     * 1. Captura el valor de la actividad seleccionada, luego hace un arreglo con los diferentes campos de cada tarjeta.
     * 2. Recorre los formularios y cada campo para unificarlo en uno solo llamado tarjeta.
     * 3. Valida entre las actividades seleccionadas cual tiene unidad de medida HORA u Horas para almacenar el total de horas a ejecutar
     * para las actividades seleccionadas
     * 4. Valida que exista minimo una seleccionada y no mas de 4 actividades, ademas de validar que dichas actividades seleccionadas
     * no excedan a las 10 horas por dia
     * 5. Por ultimo se guarda la información de la tarjeta en el archivo cacheService, esto se utiliza de manera temporal para ir almacenando
     * cada información ingresada por parte de la gestión del acta de asesoria.
     */
    next() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const formSubject = this.subjectForm.value;
            const fields = [
                'include',
                'id',
                'idActividad',
                'descripcionActividad',
                'Observaciones',
                'horasAEjecutar',
                'unidadMedida',
                'horasEjecutadas',
                'coverage',
                'registroCodigoEventosEduca',
                'codeEduca',
                'fechaFinContrato',
                'firmaQR',
                'estadoInterno',
                'fkIdSiniestro',
                'siniestro',
                'siniestroOpActividad',
            ];
            let tarjetas = [];
            for (let i = 0; i < Object.keys(formSubject).length / fields.length; i++) {
                const tarjeta = {};
                const validateCoverage = [];
                fields.forEach((f) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    tarjeta[f] = formSubject[i + f];
                }));
                tarjetas.push(tarjeta);
            }
            const resultadoTarjetas = yield this.validateTarjetas(this.subjectsSelected, tarjetas);
            tarjetas = resultadoTarjetas;
            let cantidadHorasAEjecutar = 0;
            // tslint:disable-next-line: prefer-for-of
            for (let i = 0; i < tarjetas.length; i++) {
                const element = tarjetas[i];
                // tslint:disable-next-line: max-line-length
                if (element.coverage === null || element.coverage === '' || element.horasEjecutadas === null || element.horasEjecutadas === '') {
                    this.validarCoberturaHorasEjecutadas = false;
                    this.notification('Atención', 'Debe ingresar el valor de la cobertura o el de las horas ejecutadas para la actividad seleccionada');
                    break;
                }
                else {
                    this.validarCoberturaHorasEjecutadas = true;
                }
                if (parseInt(element.horasEjecutadas, 10) > element.horasAEjecutar) {
                    this.validarCoberturaHorasEjecutadas = false;
                    this.notification('Atención', 'La cantidad de horas a ejecutar es mayor a la de horas migradas para realizar la actividad');
                    break;
                }
                if (parseInt(element.horasEjecutadas, 10) < 1) {
                    this.validarCoberturaHorasEjecutadas = false;
                    this.notification('Atención', 'La hora estimada debe ser mayor a cero');
                    break;
                }
                if (element.coverage < 1) {
                    this.validarCoberturaHorasEjecutadas = false;
                    this.notification('Atención', 'La cobertura no puede ser menor que uno');
                    break;
                }
                const actividadesEDValidas = this.validarActividadesED(resultadoTarjetas);
                if (!actividadesEDValidas) {
                    this.validarCoberturaHorasEjecutadas = false;
                    this.notification('Atención', 'Debe adjuntar archivos para las actividades EDUCA o indicar código de evento.');
                    break;
                }
                if (element.siniestro) {
                    // Es una actividad de investigación
                    if (parseInt(element.horasEjecutadas, 10) < element.horasAEjecutar) {
                        // En actividades de investigación solo se permiten registro de actas con el número de horas
                        // de ejecución igual al número de horas migradas
                        this.validarCoberturaHorasEjecutadas = false;
                        this.notification('Atención', 'Compruebe que la cantidad de horas ejecutadas coincida con la cantidad de horas migradas.');
                        break;
                    }
                }
                if (element.unidadMedida === 'HORA' || element.unidadMedida === 'Horas') {
                    // tslint:disable-next-line: radix
                    cantidadHorasAEjecutar = cantidadHorasAEjecutar + parseInt(tarjetas[i].horasEjecutadas);
                }
            }
            if (this.validarCoberturaHorasEjecutadas) {
                if (cantidadHorasAEjecutar <= 10) {
                    this.cacheService.saveMigratedHours(cantidadHorasAEjecutar);
                    if (this.subjectsSelected.length === 0) {
                        const okButton = {
                            text: this.ALERT_TEXTS_MINACTIVITY.okButtonText,
                            role: 'OK',
                        };
                        const alert = this.alertController.create({
                            header: this.ALERT_TEXTS_MINACTIVITY.title,
                            mode: 'ios',
                            message: this.ALERT_TEXTS_MINACTIVITY.message,
                            buttons: [okButton],
                        });
                        (yield alert).present();
                        return;
                    }
                    if (this.subjectsSelected.length > this.MAX_SUBJECTS) {
                        const okButton = {
                            text: this.ALERT_TEXTS.okButtonText,
                            role: 'OK',
                        };
                        const alert = this.alertController.create({
                            mode: 'ios',
                            header: this.ALERT_TEXTS.title,
                            message: this.ALERT_TEXTS.message,
                            buttons: [okButton],
                        });
                        (yield alert).present();
                        return;
                    }
                    else {
                        // this.cacheService.saveActivities(this.subjectsSelected);
                        if (this.redirect) {
                            this.cacheService.saveActivities(tarjetas);
                            this.router.navigateByUrl('u/execLog/pending-visits/visit-id/subjects/type');
                        }
                    }
                }
                else {
                    const okButton = {
                        text: this.ALERT_TEXTS.okButtonText,
                        role: 'OK',
                    };
                    const alert = this.alertController.create({
                        mode: 'ios',
                        header: this.ALERT_TEXTS_MAXHOREJECUTAR.title,
                        message: this.ALERT_TEXTS_MAXHOREJECUTAR.message,
                        buttons: [okButton],
                    });
                    (yield alert).present();
                }
            }
        });
    }
    validarActividadesED(tarjetas) {
        const actividadesED = this.subjectsSelected.filter(s => s.lineaAccion === 'ED');
        if (!actividadesED.length) {
            return true;
        }
        const allValid = actividadesED.every(a => {
            const tarjeta = tarjetas.find(t => t.id === a.id);
            if (!tarjeta) {
                return true;
            }
            const hasCode = !!tarjeta.codeEduca;
            const archivos = [];
            this.cacheService.pdfAdjuntos.forEach(arr => archivos.push(...arr));
            const fotos = [];
            this.cacheService.fotosAdjuntas.forEach(arr => fotos.push(...arr));
            const archivosActividad = archivos.filter(f => f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0);
            const fotosActividad = fotos.filter(f => f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0);
            const archivosAEP = archivosActividad.filter(f => f.idTipoArchivo === 'AEP').length + fotosActividad.filter(f => f.idTipoArchivo === 'AEP').length;
            const archivosEE = archivosActividad.filter(f => f.idTipoArchivo === 'EE').length + fotosActividad.filter(f => f.idTipoArchivo === 'EE').length;
            const hasFiles = archivosAEP >= 1 && archivosEE >= 1;
            return hasCode || hasFiles;
        });
        return allValid;
    }
}
VisitSubjectsPage.ɵfac = function VisitSubjectsPage_Factory(t) { return new (t || VisitSubjectsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"])); };
VisitSubjectsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisitSubjectsPage, selectors: [["app-visit-subjects"]], decls: 13, vars: 2, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "backgroundContent"], ["mode", "ios", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed", 3, "click", 4, "ngIf"], ["mode", "ios"], ["lines", "none", 1, "p-0"], ["slot", "end", 3, "name", "click"], [1, "cardTitle"], [3, "formGroup"], [1, "p-0"], [1, "p-0", "mt-5"], ["position", "stacked"], ["readonly", "", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [1, "p-0", "mt-3"], ["size", "6", 2, "padding", "5px"], ["position", "stacked", 2, "font-size", "12px"], ["type", "tel", "id", "horasEjecutadas", 1, "bg-light", "rounded", "pl-1", "pr-1", 3, "formControlName"], ["type", "number", "id", "cobertura", 1, "bg-light", "rounded", "pl-1", "pr-1", 2, "margin-top", "15px", 3, "formControlName"], ["color", "light", 1, "p-0", "mt-3", "rounded"], [3, "click"], ["color", "light", 1, "ion-float-start"], ["slot", "start", 4, "ngIf"], ["color", "danger"], ["color", "light", 1, "ion-float-end"], ["color", "light", 1, "mt-3", "rounded"], [1, "no-wrap"], ["color", "primary", 3, "ionChange"], ["class", "mt-3 rounded", "color", "light", 4, "ngIf"], ["lines", "none", 1, "ion-float-end", "no-effects", "mt-5"], [1, "ion-text-right"], ["slot", "end", "color", "primary", 3, "formControlName"], [1, "pt-0"], [1, "p-0", "no-effects"], ["lines", "none", 3, "click"], ["slot", "start", "name", "attach-outline"], ["lines", "none", 1, "ion-float-end", "no-effects"], ["slot", "end", "color", "primary", 3, "ngModel", "ngModelChange"], ["placeholder", "Ingrese c\u00F3digo de evento Educa", 1, "bg-light", "mt-3", "rounded", 3, "formControlName"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed", 3, "click"], ["color", "primary", "mode", "ios", "expand", "block", 1, "btn"]], template: function VisitSubjectsPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Temas de asesor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VisitSubjectsPage_ion_card_11_Template, 62, 22, "ion-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VisitSubjectsPage_ion_fab_12_Template, 3, 0, "ion-fab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.subjects);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.redirectTo);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\nion-card-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 0px;\n}\nion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  transform: none;\n}\n.no-effects[_ngcontent-%COMP%] {\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\nion-fab[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  padding-top: 10px;\n  padding: 0px;\n  text-align: left;\n  margin-top: 10px;\n}\n.cardTitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: justify;\n  font-size: 17px;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQtc3ViamVjdHMvQzpcXFVzZXJzXFxjYWx2YXJhZG9cXERvY3VtZW50c1xccHJveWVjdG9cXEFjdHVhbFxcYWxpc3N0YV9zdW1cXFRydW5rXFwyMDI0MDYwNzEvc3JjXFxhcHBcXHBhZ2VzXFx2aXNpdC1zdWJqZWN0c1xcdmlzaXQtc3ViamVjdHMucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aXNpdC1zdWJqZWN0cy92aXNpdC1zdWJqZWN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FSO0FEQ1E7RUFDRSxXQUFBO0FDQ1Y7QURFTTtFQUNFLFlBQUE7QUNBUjtBRFNNO0VBQ0UsWUFBQTtBQ05SO0FET1E7RUFDRSxXQUFBO0FDTFY7QURPUTtFQUNFLHFCQUFBO0FDTFY7QURXRTtFQUNFLFdBQUE7QUNUSjtBRFdFO0VBQ0UsZUFBQTtBQ1RKO0FEY0U7RUFDRSxlQUFBO0FDWEo7QURlQTtFQUNFLCtCQUFBO0VBQ0EsMkJBQUE7QUNaRjtBRGdCRTtFQUNFLGtCQUFBO0FDYko7QURpQkE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2RGO0FEaUJBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDZEY7QURtQkk7RUFDRSxvQkFBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Zpc2l0LXN1YmplY3RzL3Zpc2l0LXN1YmplY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWNhcmQtY29udGVudCB7XG4gIGlvbi1ncmlkIHtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpb24taWNvbiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5sYWJlbC1zdGFja2VkIHtcbiAgJi5zYy1pb24tbGFiZWwtbWQtaCB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5uby1lZmZlY3RzIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB0cmFuc3BhcmVudDtcbiAgLS1yaXBwbGUtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tZmFiIHtcbiAgJiBpb24tYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIH1cbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FyZFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgJiBpb24tY2FyZCB7XG4gICAgJjpsYXN0LW9mLXR5cGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgfVxuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi1pY29uIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5pb24tY2FyZC1jb250ZW50IHAge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG4ubm8tZWZmZWN0cyB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZhYiBpb24tYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jYXJkVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWNhcmQ6bGFzdC1vZi10eXBlIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitSubjectsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-visit-subjects',
                templateUrl: './visit-subjects.page.html',
                styleUrls: ['./visit-subjects.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=visit-subjects-visit-subjects-module-es2015.js.map