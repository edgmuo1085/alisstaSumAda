(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-and-conditions-terms-and-conditions-module"],{

/***/ "./src/app/pages/terms-and-conditions/terms-and-conditions-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/terms-and-conditions/terms-and-conditions-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: TermsAndConditionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPageRoutingModule", function() { return TermsAndConditionsPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-and-conditions.page */ "./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts");





const routes = [
    {
        path: '',
        component: _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_2__["TermsAndConditionsPage"],
    },
];
class TermsAndConditionsPageRoutingModule {
}
TermsAndConditionsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermsAndConditionsPageRoutingModule });
TermsAndConditionsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermsAndConditionsPageRoutingModule_Factory(t) { return new (t || TermsAndConditionsPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermsAndConditionsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/terms-and-conditions/terms-and-conditions.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/terms-and-conditions/terms-and-conditions.module.ts ***!
  \***************************************************************************/
/*! exports provided: TermsAndConditionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPageModule", function() { return TermsAndConditionsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./terms-and-conditions-routing.module */ "./src/app/pages/terms-and-conditions/terms-and-conditions-routing.module.ts");
/* harmony import */ var _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./terms-and-conditions.page */ "./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts");







class TermsAndConditionsPageModule {
}
TermsAndConditionsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TermsAndConditionsPageModule });
TermsAndConditionsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TermsAndConditionsPageModule_Factory(t) { return new (t || TermsAndConditionsPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermsAndConditionsPageModule, { declarations: [_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_5__["TermsAndConditionsPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsPageRoutingModule"]],
                declarations: [_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_5__["TermsAndConditionsPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts ***!
  \*************************************************************************/
/*! exports provided: TermsAndConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPage", function() { return TermsAndConditionsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



class TermsAndConditionsPage {
    constructor() { }
    ngOnInit() { }
}
TermsAndConditionsPage.ɵfac = function TermsAndConditionsPage_Factory(t) { return new (t || TermsAndConditionsPage)(); };
TermsAndConditionsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermsAndConditionsPage, selectors: [["app-terms-and-conditions"]], decls: 386, vars: 0, consts: [[1, "ion-no-border"], ["size", "2"], ["color", "tertiary"], ["slot", "start"], ["mode", "md", "color", "primary", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-text-center"], [1, "ion-text-justify"], [1, "text-aling-justify"]], template: function TermsAndConditionsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-back-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "T\u00E9rminos y condiciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "T\u00E9rminos y Condiciones aplicables al Software web y m\u00F3vil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Alissta\u00AE SUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1. Descripci\u00F3n general");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Bienvenido a Alissta\u00AE Sistema Unificado de Mando \u201CSUM\u201D, un Sistema de Informaci\u00F3n propiedad de Positiva para ser usado por los empleados y proveedores de Positiva (\u201CUsuarios\u201D) encargados para la gesti\u00F3n de promoci\u00F3n y prevenci\u00F3n de la compa\u00F1\u00EDa en las empresas afiliadas a Positiva, incluyendo las actividades relacionadas con el Sistema de Gesti\u00F3n en Seguridad y Salud en el Trabajo \u201CSG-SST\u201D, previa autenticaci\u00F3n del usuario. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1.2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " El Sistema de Informaci\u00F3n permite a los Usuarios identificar y gestionar las actividades de asesor\u00EDa y asistencia t\u00E9cnica en promoci\u00F3n y prevenci\u00F3n que deben realizar para las empresas afiliadas a Positiva, relacionadas con el Sistema de Gesti\u00F3n en Seguridad y Salud en el Trabajo \u201CSG-SST\u201D. Alissta\u00AE SUM permite, entre otras, mayor eficiencia en el cumplimiento de las actividades para la administraci\u00F3n y manejo del \u201CSG-SST\u201D y optimizar los procesos y reducir tiempos de respuesta en beneficio de los usuarios de Positiva y de las empresas afiliadas a Positiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1.3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Alissta\u00AE SUM no es una plataforma de uso comercial; \u00FAnicamente es para uso de la compa\u00F1\u00EDa, sus empleados, proveedores y colaboradores. Los usuarios y las autenticaciones ser\u00E1n entregadas a los titulares de conformidad con lo establecido en el numeral 3.2 de este documento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "2. Aviso Previo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "2.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Alissta\u00AE SUM es el aplicativo para el registro de la gesti\u00F3n en promoci\u00F3n y prevenci\u00F3n de las empresas afiliadas a POSITIVA en el marco de las asesor\u00EDas y asistencia t\u00E9cnicas del Sistema de Gesti\u00F3n en Seguridad y Salud en el Trabajo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2.2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Estos t\u00E9rminos y condiciones definen el uso, permisos, alcance, responsabilidad y forma de interactuar en Alissta\u00AE SUM. Al interactuar en este aplicativo usted acepta expresamente cumplir las disposiciones aqu\u00ED contenidas. Por tal raz\u00F3n antes de usar, descargar, ingresar o registrarse en el aplicativo web o en la aplicaci\u00F3n m\u00F3vil lea atentamente los siguientes t\u00E9rminos y condiciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2.3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " En caso de no comprender, no estar de acuerdo o no aceptar los t\u00E9rminos y condiciones de esta licencia, por favor abst\u00E9ngase de descargar, acceder, registrarse y en general usar esta aplicaci\u00F3n e informe la inquietud o desacuerdo a Positiva a trav\u00E9s del servicioalcliente@positiva.gov.co ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "3. Titular y administrador del Aplicativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "3.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Positiva Compa\u00F1\u00EDa de Seguros S.A. es due\u00F1o y titular de la aplicaci\u00F3n web y aplicaci\u00F3n m\u00F3vil Alissta\u00AE SUM disponible en las tiendas m\u00F3viles App Store y Google Play de aplicaciones.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "3.2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Positiva act\u00FAa como administrador del Sistema de Informaci\u00F3n y es el encargado de ponerlo a su disposici\u00F3n, de su funcionalidad, activaci\u00F3n de los usuarios y actualizaci\u00F3n peri\u00F3dica de la aplicaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "3.3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Positiva tambi\u00E9n act\u00FAa como titular o responsable de la informaci\u00F3n que a trav\u00E9s del aplicativo se puede acceder, la cual pone a su disposici\u00F3n \u00FAnica y exclusivamente para el desarrollo de las actividades asignadas por la compa\u00F1\u00EDa, por lo que usted como usuario entiende y se compromete a no darle ning\u00FAn otro uso.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "3.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " En caso de inquietudes relacionados con la funcionalidad, disposici\u00F3n y uso de Alissta Sum, Positiva ha dispuesto un canal de contacto a trav\u00E9s del cual usted podr\u00E1 presentar sus requerimientos. Este canal no est\u00E1 dispuesto para la soluci\u00F3n de inquietudes relacionadas con las actividades asignadas por Positiva, en este caso usted deber\u00E1 contactar al coordinador, jefe inmediato, interventor o la persona encargada de la actividad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Los datos de contacto del administrador del aplicativo son:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Nombre: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Positiva Compa\u00F1\u00EDa de Seguros S.A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Correo electr\u00F3nico:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " servicioalcliente@positiva.gov.co ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Tel\u00E9fono:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 65022000 extensi\u00F3n 10801 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "4. Objeto, acceso y funcionalidades de Alissta\u00AE SUM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "4.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Alissta\u00AE SUM tiene por objeto (i) permitir la interacci\u00F3n entre Positiva y los usuarios (empleados y proveedores de la compa\u00F1\u00EDa) que tienen a cargo la realizaci\u00F3n de actividades de asesor\u00EDa y asistencia t\u00E9cnica para las empresas afiliadas a Positiva, relacionadas con el Sistema de Gesti\u00F3n en Seguridad y Salud en el Trabajo \u201CSG-SST\u201D y (ii) el desarrollo de las actividades previstas en los contratos laborales, de proveedur\u00EDa y colaboraci\u00F3n determinadas por Positiva, para satisfacer las necesidades de sus afiliadas y clientes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "4.2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Alissta\u00AE SUM permite acceder a informaci\u00F3n y soportes creados o subidos en el registro de ejecuci\u00F3n de actividades en las empresas afiliadas a Positiva; conocer las actividades o tareas asignadas por Positiva a los usuarios; acceder a la informaci\u00F3n administrativa y datos generales de las empresas afiliadas, las cuales otorgan su autorizaci\u00F3n expresamente al momento de la afiliaci\u00F3n; generar reportes, registrar y cargar soportes de la ejecuci\u00F3n y cierre de la actividad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "4.3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Se puede acceder a Alissta\u00AE SUM como aplicativo web o a trav\u00E9s de aplicaci\u00F3n m\u00F3vil accesible a trav\u00E9s de cualquier navegador en internet o descargable en dispositivos celulares o tabletas inteligentes desde las tiendas de aplicaciones. La aplicaci\u00F3n m\u00F3vil est\u00E1 desarrollada para ser compatible con sistemas operativos Android o iOS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "4.4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Para la descarga y uso de la aplicaci\u00F3n m\u00F3vil el usuario deber\u00E1 cumplir varios requerimientos t\u00E9cnicos y tecnol\u00F3gicos como contar con la cuenta de acceso que debe ser aprobada y suministrada Positiva, con servicio de internet o datos celulares, equipo celular, smartphone, tableta inteligente o cualquier dispositivo compatible que permita acceder a la aplicaci\u00F3n, interactuar con el aplicativo y realizar las actualizaciones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "5. Creaci\u00F3n de usuario para usar el aplicativo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Para el uso del aplicativo Positiva permitir\u00E1 el registro del usuario en el aplicativo a trav\u00E9s de la creaci\u00F3n de un usuario y contrase\u00F1a suministrada por Positiva que le permitir\u00E1 el acceso. Adicionalmente se crear\u00E1 un rol del usuario el cual identificar\u00E1 las actividades que va a desarrollar, las caracter\u00EDsticas y dem\u00E1s requerimientos necesarios para su ejecuci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Usted es el \u00FAnico responsable del ingreso al aplicativo, por lo que se obliga a custodiar y proteger la informaci\u00F3n de acceso al aplicativo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "6. Permisos y autorizaciones de uso ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "6.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " El registro le otorga permiso limitado, controlado, no exclusivo y revocable de uso sobre el aplicativo que le permite descargar, instalar, acceder a Alissta\u00AE SUM, y realizar, entre otras, las siguientes actividades las que podr\u00E1n actualizarse de tiempo en tiempo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "6.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Usar el aplicativo, sus actualizaciones, marcas, documentos y en general la informaci\u00F3n del aplicativo \u00FAnica y exclusivamente para el desarrollo y registro de ejecuci\u00F3n de las actividades asignadas por Positiva y en desarrollo de su v\u00EDnculo contractual con la compa\u00F1\u00EDa. En tal sentido, est\u00E1 prohibido el uso indebido, no autorizado para fines distintos o que no se encuentren relacionados con la labor encomendada por Positiva, so pena de la imposici\u00F3n de las sanciones previstas en el contrato celebrado entre el proveedor y Positiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "6.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Acceder y consultar la informaci\u00F3n relacionada con el contrato, proceso de contrataci\u00F3n, orden de prestaci\u00F3n de servicios, ejecuci\u00F3n del contrato, factura y aval de la factura con los usuarios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "6.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Conocer las actividades o tareas asignadas por Positiva a los usuarios.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "6.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Acceder a informaci\u00F3n y documentos de Positiva tales como y sin limitarse a matrices, conceptos y documentos t\u00E9cnicos, recomendaciones, estad\u00EDsticas e indicadores, planes de emergencia, y dem\u00E1s informaci\u00F3n requerida que permiten el desarrollo de cada una de las actividades y servicios prestados por Positiva a sus compa\u00F1\u00EDas afiliadas con relaci\u00F3n al Sistema de Gesti\u00F3n de Seguridad y Salud en el Trabajo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "6.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Visualizar en las pantallas del sistema, informaci\u00F3n administrativa de la empresa en la que se desarrolla la actividad.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "6.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Acceder a la informaci\u00F3n relacionada con el plan de trabajo anual, las actividades a realizar en cada una de las empresas afiliadas a Positiva, la informaci\u00F3n administrativa de la empresa como estad\u00EDsticas e indicadores de accidentalidad, enfermedad laboral y ausentismo, as\u00ED como aquellos reportes relacionados con el Sistema de Gesti\u00F3n de Seguridad y Salud en el Trabajo, entre otros.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "6.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Registrar informaci\u00F3n relacionada con la gesti\u00F3n, desarrollo, avance, ejecuci\u00F3n y cierre de las actividades asignadas por Positiva con relaci\u00F3n al Sistema de Gesti\u00F3n de Seguridad y Salud en el Trabajo de las empresas afiliadas a Positiva, cargar y generar reportes.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "6.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Generar reportes, alertas y hallazgos presentados en la ejecuci\u00F3n de la actividad para uso exclusivo de Positiva o en desarrollo de la relaci\u00F3n del usuario con Positiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "6.10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Recibir y enviar mensajes y comunicaciones relacionadas con la actividad encomendada por Positiva, enviar reportes de la gesti\u00F3n y el soporte de cierre de la actividad, el cual podr\u00E1 consistir en una certificaci\u00F3n de la actividad o cualquier documento que la soporte o la firma por parte del encargado de la compa\u00F1\u00EDa afiliada que confirme su ejecuci\u00F3n y cierre. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "7. Responsabilidad del Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "7.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Contar con acceso a internet para la interacci\u00F3n en l\u00EDnea. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "7.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Pagar los cobros que realice el operador del servicio de telefon\u00EDa, datos m\u00F3viles o internet que se causen por la descarga y uso del aplicativo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "7.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Responder por el correcto uso del aplicativo Alissta\u00AE SUM y del cumplimiento de los t\u00E9rminos y condiciones de la presente licencia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "7.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Contar con un equipo de c\u00F3mputo, celular, smartphone, tableta inteligente o cualquier dispositivo similar que sea compatible y permita acceder e interactuar con el aplicativo y sus actualizaciones y que permita la toma de firmas digitales para la acreditaci\u00F3n de cumplimientos de actividades, previa autenticaci\u00F3n del usuario. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "7.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Registrar la ejecuci\u00F3n de las actividades encargadas por Positiva y cargar los documentos de la ejecuci\u00F3n a trav\u00E9s del aplicativo Alissta\u00AE Sum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "7.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Conservar y proteger la informaci\u00F3n de ingreso al aplicativo, entre la que se encuentra usuario y contrase\u00F1a. No compartir dicha informaci\u00F3n con otros usuarios o terceros. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "7.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " No acceder desde sitios p\u00FAblicos, equipos de terceros o que puedan poner en riesgo la seguridad del aplicativo y la informaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "7.8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " No compartir con ninguna persona informaci\u00F3n relacionada con la actividad desempe\u00F1ada por tratarse de actividades e informaci\u00F3n que solo incumben a Positiva, y a las afiliadas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "7.9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Conservar, proteger y mantener la confidencialidad y reserva de la informaci\u00F3n de Positiva, las empresas afiliadas a Positiva y dem\u00E1s proveedores y colaboradores de Positiva que se ponga a disposici\u00F3n a trav\u00E9s de Alissta Sum o la que pueda llegar a conocer por cualquier medio. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "7.10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Suministrar la informaci\u00F3n real, cierta, veraz y comprobable sobre el desarrollo de las actividades encargadas por Positiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "7.11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Suministrar informaci\u00F3n o comentarios respetuosos que permitan la funcionalidad del aplicativo y contribuyan a su finalidad. Se proh\u00EDbe al usuario el env\u00EDo de comunicaciones, comentarios o informaci\u00F3n sobre Positiva, sus empleados y dem\u00E1s proveedores o colaboradores, as\u00ED como de las empresas afiliadas a Positiva o sus empleados, representantes o colaboradores que pueda considerarse como ofensiva, indecente o censurable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "7.12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Abstenerse de ceder, alquilar, arrendar, prestar, vender, distribuir, comercializar, hacer ingenier\u00EDa inversa, modificar, alterar o sublicenciar total o parcialmente el aplicativo Alissta Sum. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](216, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](219, "8. Derechos y Responsabilidades de Positiva");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "8.1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Habilitar y mantener a disposici\u00F3n el aplicativo Alissta\u00AE SUM en sus versiones web y m\u00F3vil, as\u00ED como sus actualizaciones. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "8.2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Procurar el correcto y normal funcionamiento del aplicativo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "8.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Proteger la informaci\u00F3n suministrada a trav\u00E9s de Alissta\u00AE SUM. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "8.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Brindar soporte t\u00E9cnico, tecnol\u00F3gico y operativo del aplicativo Alissta\u00AE SUM. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "8.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " Eliminar la informaci\u00F3n que considere que puede afectar o vulnerar los derechos de la compa\u00F1\u00EDa o de terceros e iniciar las acciones pertinentes contra quienes incumplan las reglas de uso del aplicativo, cuando a ello hubiera lugar. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "8.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Positiva se reserva el derecho de bloquear, inhabilitar o restringir, de forma unilateral, aut\u00F3noma y sin previo aviso, el acceso al aplicativo cuando evidencie el incumplimiento de los t\u00E9rminos de uso descritos en esta licencia o cuando evidencie conductas fraudulentas e ilegales que pongan en riesgo a Positiva, la funcionalidad del aplicativo o la seguridad de la informaci\u00F3n de la compa\u00F1\u00EDa, de otros usuarios o de las empresas afiliadas a Positiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "8.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " Positiva se reserva el derecho de iniciar las acciones legales correspondientes por las infracciones o incumplimiento a los t\u00E9rminos y condiciones de la licencia, sin perjuicio que se d\u00E9 por terminada la relaci\u00F3n con el usuario en forma inmediata. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "9. Limitaci\u00F3n de responsabilidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "9.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Positiva no es responsable por los da\u00F1os, afectaciones, imposibilidad de uso o falta de disponibilidad del aplicativo Alissta\u00AE Sum, bien por fallas en internet o problemas de acceso del usuario o por los da\u00F1os, p\u00E9rdida o lesi\u00F3n resultante de hacking, manipulaci\u00F3n u otro acceso no autorizado. No obstante lo anterior, se aclara que Positiva tiene el deber de velar porque el sistema no sea vulnerable, establecer controles y barreras para que terceros no puedan manipular el aplicativo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "9.4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Positiva no asume ninguna responsabilidad i) por el acceso, consulta y env\u00EDo de informaci\u00F3n a trav\u00E9s de servidores o dispositivos inseguros; ii) por cualquier interrupci\u00F3n o cese de transmisi\u00F3n desde o hacia el servicio ofrecido en el sitio web; iii) cualquier bugs, virus, troyanos o similares que puedan transmitirse en o a trav\u00E9s de la Aplicaci\u00F3n por cualquier tercero; y/o iv) por contenidos de usuarios considerados como difamatorios, ofensivos o ilegales. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "9.5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " Positiva no es responsable por el bloqueo, suspensi\u00F3n, interrupci\u00F3n o cualquier afectaci\u00F3n en la comunicaci\u00F3n derivada de fallas del operador del servicio de internet o datos m\u00F3viles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "9.6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Positiva tampoco garantiza ni es responsable por la incompatibilidad del aplicativo Alissta Sum con el equipo o dispositivo destinado por el usuario para su uso, ni por la incompatibilidad con el software o sistema operativo de dichos equipos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "9.7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Positiva no garantiza ni es responsable por la falta de acceso a internet que impida la funcionalidad de la aplicaci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "10. Expiraci\u00F3n de la licencia de uso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Esta licencia termina por: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "10.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Terminaci\u00F3n del v\u00EDnculo de Positiva con las empresas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "10.2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Terminaci\u00F3n del v\u00EDnculo de Positiva con el usuario por cualquier causa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "10.3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Inexistencia de actividades relacionadas con el Sistema de Gesti\u00F3n de Seguridad y Salud en el Trabajo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "10.4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Sustituci\u00F3n del aplicativo por otro autorizado por Positiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "10.5.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " Terminaci\u00F3n del v\u00EDnculo contractual entre Positiva y el proveedor de servicios. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "11. Propiedad de la Informaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "11.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " El Usuario reconoce y acepta que toda la informaci\u00F3n conocida, recaudada o suministrada a trav\u00E9s de Alissta\u00AE SUM es de propiedad o de responsabilidad, seg\u00FAn corresponda, de Positiva Compa\u00F1\u00EDa de Seguros S.A. y que la informaci\u00F3n se pone a disposici\u00F3n de los usuarios del aplicativo \u00FAnicamente para el desarrollo y cumplimiento de las actividades encargadas por Positiva.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "11.2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " Es responsabilidad de los usuarios del aplicativo conservar, proteger y mantener la confidencialidad y reserva de la informaci\u00F3n de Positiva, las empresas afiliadas a Positiva y dem\u00E1s proveedores y colaboradores de la compa\u00F1\u00EDa, que se ponga a disposici\u00F3n a trav\u00E9s de Alissta Sum o que pueda llegar a conocer por cualquier medio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "11.3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " Se proh\u00EDbe el uso de la informaci\u00F3n para una finalidad diferente al desarrollo de la actividad asignada por Positiva y la atenci\u00F3n de los requerimientos de las empresas afiliadas a la compa\u00F1\u00EDa.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "11.4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " Est\u00E1 prohibida la divulgaci\u00F3n, copia, suministro y en general la publicaci\u00F3n de la informaci\u00F3n contenida en Alissta Sum. En caso de evidenciar conductas o actos que ponga en riesgo la informaci\u00F3n suministrada en el aplicativo, Positiva tiene la facultad de iniciar las acciones pertinentes y bloquear el acceso. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "12. Acceso y confidencialidad de la informaci\u00F3n.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "12.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " En Alissta\u00AE SUM usted encontrar\u00E1 informaci\u00F3n relacionada en general pero sin limitaci\u00F3n, con la Gesti\u00F3n de proveedores Promoci\u00F3n y Prevenci\u00F3n, Autorizaci\u00F3n de Servicios, costos de inversi\u00F3n, recaudo de primas, informaci\u00F3n de las compa\u00F1\u00EDas afiliadas a Positiva, reportes e indicadores de accidentalidad, enfermedad laboral y ausentismo de los empleados de las empresas afiliadas, en forma agregada y sin ser atribuible a un sujeto determinado; documentos, conceptos t\u00E9cnicos, recomendaciones, matrices y cualquier otra informaci\u00F3n administrativa suministrada por las empresas afiliadas a Positiva relacionada con el Sistema de Gesti\u00F3n de Seguridad y Salud en el trabajo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " Esta informaci\u00F3n es puesta a su disposici\u00F3n exclusivamente para el desarrollo de las actividades encargadas por Positiva. En tal sentido, usted como usuario de Alissta\u00AE SUM se compromete a: (i) Mantener bajo confidencialidad y reserva toda la informaci\u00F3n de Positiva o de las empresas afiliadas, a la cual pueda acceder. (ii) No utilizar la informaci\u00F3n publicada a trav\u00E9s de Alissta Sum para fines o prop\u00F3sitos distintos a las actividades asignadas por Positiva o lo dispuesto en estos t\u00E9rminos y condiciones. (iii) No usar la informaci\u00F3n de modo que pueda de alguna manera, directa o indirectamente, ser perjudicial para Positiva o para las empresas afiliadas, o para sus empleados. (iv) No realizar copias o backups de la informaci\u00F3n suministrada a trav\u00E9s de Alissta Sum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " El deber de confidencialidad y protecci\u00F3n de la informaci\u00F3n se extiende a todos los empleados, colaboradores, asesores y contratistas del proveedor que tengan acceso a Alissta SUM, es tal sentido es responsabilidad de los proveedores su estricto cumplimiento. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](335, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](336, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, "13. Derechos de Propiedad intelectual.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "13.1.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Positiva Compa\u00F1\u00EDa de Seguros S.A. es titular y due\u00F1o del dominio Alissta\u00AE SUM, previa realizaci\u00F3n del compliance necesario, de sus marcas, de la Aplicaci\u00F3n Alissta\u00AE SUM, sus copias, actualizaciones y modificaciones, as\u00ED como incluyendo sin limitaci\u00F3n, marcas, el texto, software, scripts, gr\u00E1ficos, fotos, sonidos, m\u00FAsica, videos, funciones interactivas y elementos similares (productos y las marcas registradas, marcas del servicio y logotipos contenidos en el mismo (\u201CMarcas\u201D), folletos, manuales y dem\u00E1s informaci\u00F3n relacionada con Alissta\u00AE Sum.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "13.2.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " Usted acepta y reconoce que el contenido de la p\u00E1gina web y del aplicativo Alissta Sum es de propiedad de Positiva y que se encuentra protegido por el derecho de autor, marcas registradas, patentes y dem\u00E1s derechos y leyes de propiedad intelectual. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "13.3.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " Usted acepta y reconoce que el material contenido en la p\u00E1gina web y en la App Alissta\u00AE SUM es suministrado para su interacci\u00F3n como empleado, proveedor y colaborador de Positiva. Por esta raz\u00F3n no puede ser utilizado, copiado, reproducido, distribuido, transmitido, exhibido, vendido, licenciado, o utilizado de ninguna otra forma y para otra finalidad distinta a la establecida en esta licencia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "13.4.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " Sin perjuicio de las acciones legales que pueda adelantar, Positiva se reserva la facultad de suspender, bloquear, restringir o inhabilitar el acceso, cuando evidencie algunas de las conductas descritas en este numeral o cualquier otra que se considere una infracci\u00F3n a los derechos de propiedad intelectual de Positiva. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "14. Modificaci\u00F3n de la licencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " Positiva se reserva el derecho de modificar en cualquier momento, por cualquier raz\u00F3n y sin previo aviso estos t\u00E9rminos y condiciones. La actualizaci\u00F3n o modificaci\u00F3n se comunicar\u00E1 a los usuarios por cualquier medio, principalmente a trav\u00E9s de la p\u00E1gina web de Alissta\u00AE SUM y la aplicaci\u00F3n de Alissta\u00AE SUM. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "15. Indemnidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " A partir del ingreso, uso, interacci\u00F3n, descarga o registro en Alissta Sum el usuario acepta defender, indemnizar y eximir a Positiva Compa\u00F1\u00EDa de Seguros S.A. de toda responsabilidad, reclamaciones y gastos, incluidos honorarios de abogado, que surjan del mal uso del sitio web y/o del aplicativo, del incumplimiento de estos t\u00E9rminos y condiciones, o de cualquier infracci\u00F3n de derechos de terceros. Positiva se reserva el derecho de contratar y controlar su defensa por cuenta del usuario de cualquier asunto sujeto a indemnizaci\u00F3n, en cuyo caso el usuario cooperara con Positiva en el desarrollo de cualquier defensa posible. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "16. Ley aplicable y soluci\u00F3n de conflictos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " La concesi\u00F3n de la presente licencia y las disposiciones en este documento se regir\u00E1n por las leyes de la Rep\u00FAblica Colombia que le sean aplicables. Cualquier disputa o controversia relacionada con la interpretaci\u00F3n, ejecuci\u00F3n, cumplimiento o terminaci\u00F3n de esta licencia, se resolver\u00E1 ante la jurisdicci\u00F3n ordinaria colombiana. Ambas Partes renuncian a cualquier otra jurisdicci\u00F3n que pudiere corresponderles. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "17. Comunicaciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " Las comunicaciones relacionadas con la App Alissta\u00AE SUM deber\u00E1n ser enviadas por escrito a al correo electr\u00F3nico soportealissta@positiva.gov.co a trav\u00E9s de la l\u00EDnea nacional 6502200 en Bogot\u00E1 D.C. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybXMtYW5kLWNvbmRpdGlvbnMvQzpcXFVzZXJzXFxjYWx2YXJhZG9cXERvY3VtZW50c1xccHJveWVjdG9cXEFjdHVhbFxcYWxpc3N0YV9zdW1cXEJyYW5jaGVzXFxSZXZpc2lvbl9WZXJzaW9uX0FjdHVhbGl6YWRhXzIwMjQwOTIwL3NyY1xcYXBwXFxwYWdlc1xcdGVybXMtYW5kLWNvbmRpdGlvbnNcXHRlcm1zLWFuZC1jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FETUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgIH1cbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-terms-and-conditions',
                templateUrl: './terms-and-conditions.page.html',
                styleUrls: ['./terms-and-conditions.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=terms-and-conditions-terms-and-conditions-module-es2015.js.map