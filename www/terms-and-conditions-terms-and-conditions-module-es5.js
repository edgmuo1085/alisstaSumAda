function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-and-conditions-terms-and-conditions-module"], {
  /***/
  "./src/app/pages/terms-and-conditions/terms-and-conditions-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/terms-and-conditions/terms-and-conditions-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: TermsAndConditionsPageRoutingModule */

  /***/
  function srcAppPagesTermsAndConditionsTermsAndConditionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPageRoutingModule", function () {
      return TermsAndConditionsPageRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./terms-and-conditions.page */
    "./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts");

    var routes = [{
      path: '',
      component: _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_2__["TermsAndConditionsPage"]
    }];

    var TermsAndConditionsPageRoutingModule = /*#__PURE__*/_createClass(function TermsAndConditionsPageRoutingModule() {
      _classCallCheck(this, TermsAndConditionsPageRoutingModule);
    });

    TermsAndConditionsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TermsAndConditionsPageRoutingModule
    });
    TermsAndConditionsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TermsAndConditionsPageRoutingModule_Factory(t) {
        return new (t || TermsAndConditionsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermsAndConditionsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/terms-and-conditions/terms-and-conditions.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/terms-and-conditions/terms-and-conditions.module.ts ***!
    \***************************************************************************/

  /*! exports provided: TermsAndConditionsPageModule */

  /***/
  function srcAppPagesTermsAndConditionsTermsAndConditionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPageModule", function () {
      return TermsAndConditionsPageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./terms-and-conditions-routing.module */
    "./src/app/pages/terms-and-conditions/terms-and-conditions-routing.module.ts");
    /* harmony import */


    var _terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./terms-and-conditions.page */
    "./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts");

    var TermsAndConditionsPageModule = /*#__PURE__*/_createClass(function TermsAndConditionsPageModule() {
      _classCallCheck(this, TermsAndConditionsPageModule);
    });

    TermsAndConditionsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TermsAndConditionsPageModule
    });
    TermsAndConditionsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TermsAndConditionsPageModule_Factory(t) {
        return new (t || TermsAndConditionsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TermsAndConditionsPageModule, {
        declarations: [_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_5__["TermsAndConditionsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _terms_and_conditions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TermsAndConditionsPageRoutingModule"]],
          declarations: [_terms_and_conditions_page__WEBPACK_IMPORTED_MODULE_5__["TermsAndConditionsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/terms-and-conditions/terms-and-conditions.page.ts ***!
    \*************************************************************************/

  /*! exports provided: TermsAndConditionsPage */

  /***/
  function srcAppPagesTermsAndConditionsTermsAndConditionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsAndConditionsPage", function () {
      return TermsAndConditionsPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var TermsAndConditionsPage = /*#__PURE__*/function () {
      function TermsAndConditionsPage() {
        _classCallCheck(this, TermsAndConditionsPage);
      }

      _createClass(TermsAndConditionsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TermsAndConditionsPage;
    }();

    TermsAndConditionsPage.ɵfac = function TermsAndConditionsPage_Factory(t) {
      return new (t || TermsAndConditionsPage)();
    };

    TermsAndConditionsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TermsAndConditionsPage,
      selectors: [["app-terms-and-conditions"]],
      decls: 386,
      vars: 0,
      consts: [[1, "ion-no-border"], ["size", "2"], ["color", "tertiary"], ["slot", "start"], ["mode", "md", "color", "primary", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-text-center"], [1, "ion-text-justify"], [1, "text-aling-justify"]],
      template: function TermsAndConditionsPage_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "T\xE9rminos y condiciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "T\xE9rminos y Condiciones aplicables al Software web y m\xF3vil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Alissta\xAE SUM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "1. Descripci\xF3n general");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "1.1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Bienvenido a Alissta\xAE Sistema Unificado de Mando \u201CSUM\u201D, un Sistema de Informaci\xF3n propiedad de Positiva para ser usado por los empleados y proveedores de Positiva (\u201CUsuarios\u201D) encargados para la gesti\xF3n de promoci\xF3n y prevenci\xF3n de la compa\xF1\xEDa en las empresas afiliadas a Positiva, incluyendo las actividades relacionadas con el Sistema de Gesti\xF3n en Seguridad y Salud en el Trabajo \u201CSG-SST\u201D, previa autenticaci\xF3n del usuario. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "1.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " El Sistema de Informaci\xF3n permite a los Usuarios identificar y gestionar las actividades de asesor\xEDa y asistencia t\xE9cnica en promoci\xF3n y prevenci\xF3n que deben realizar para las empresas afiliadas a Positiva, relacionadas con el Sistema de Gesti\xF3n en Seguridad y Salud en el Trabajo \u201CSG-SST\u201D. Alissta\xAE SUM permite, entre otras, mayor eficiencia en el cumplimiento de las actividades para la administraci\xF3n y manejo del \u201CSG-SST\u201D y optimizar los procesos y reducir tiempos de respuesta en beneficio de los usuarios de Positiva y de las empresas afiliadas a Positiva. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "1.3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Alissta\xAE SUM no es una plataforma de uso comercial; \xFAnicamente es para uso de la compa\xF1\xEDa, sus empleados, proveedores y colaboradores. Los usuarios y las autenticaciones ser\xE1n entregadas a los titulares de conformidad con lo establecido en el numeral 3.2 de este documento. ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Alissta\xAE SUM es el aplicativo para el registro de la gesti\xF3n en promoci\xF3n y prevenci\xF3n de las empresas afiliadas a POSITIVA en el marco de las asesor\xEDas y asistencia t\xE9cnicas del Sistema de Gesti\xF3n en Seguridad y Salud en el Trabajo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "2.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Estos t\xE9rminos y condiciones definen el uso, permisos, alcance, responsabilidad y forma de interactuar en Alissta\xAE SUM. Al interactuar en este aplicativo usted acepta expresamente cumplir las disposiciones aqu\xED contenidas. Por tal raz\xF3n antes de usar, descargar, ingresar o registrarse en el aplicativo web o en la aplicaci\xF3n m\xF3vil lea atentamente los siguientes t\xE9rminos y condiciones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "2.3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " En caso de no comprender, no estar de acuerdo o no aceptar los t\xE9rminos y condiciones de esta licencia, por favor abst\xE9ngase de descargar, acceder, registrarse y en general usar esta aplicaci\xF3n e informe la inquietud o desacuerdo a Positiva a trav\xE9s del servicioalcliente@positiva.gov.co ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Positiva Compa\xF1\xEDa de Seguros S.A. es due\xF1o y titular de la aplicaci\xF3n web y aplicaci\xF3n m\xF3vil Alissta\xAE SUM disponible en las tiendas m\xF3viles App Store y Google Play de aplicaciones.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "3.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Positiva act\xFAa como administrador del Sistema de Informaci\xF3n y es el encargado de ponerlo a su disposici\xF3n, de su funcionalidad, activaci\xF3n de los usuarios y actualizaci\xF3n peri\xF3dica de la aplicaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "3.3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Positiva tambi\xE9n act\xFAa como titular o responsable de la informaci\xF3n que a trav\xE9s del aplicativo se puede acceder, la cual pone a su disposici\xF3n \xFAnica y exclusivamente para el desarrollo de las actividades asignadas por la compa\xF1\xEDa, por lo que usted como usuario entiende y se compromete a no darle ning\xFAn otro uso.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "3.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " En caso de inquietudes relacionados con la funcionalidad, disposici\xF3n y uso de Alissta Sum, Positiva ha dispuesto un canal de contacto a trav\xE9s del cual usted podr\xE1 presentar sus requerimientos. Este canal no est\xE1 dispuesto para la soluci\xF3n de inquietudes relacionadas con las actividades asignadas por Positiva, en este caso usted deber\xE1 contactar al coordinador, jefe inmediato, interventor o la persona encargada de la actividad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Los datos de contacto del administrador del aplicativo son:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Nombre: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Positiva Compa\xF1\xEDa de Seguros S.A. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Correo electr\xF3nico:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " servicioalcliente@positiva.gov.co ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Tel\xE9fono:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " 65022000 extensi\xF3n 10801 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "4. Objeto, acceso y funcionalidades de Alissta\xAE SUM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "4.1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Alissta\xAE SUM tiene por objeto (i) permitir la interacci\xF3n entre Positiva y los usuarios (empleados y proveedores de la compa\xF1\xEDa) que tienen a cargo la realizaci\xF3n de actividades de asesor\xEDa y asistencia t\xE9cnica para las empresas afiliadas a Positiva, relacionadas con el Sistema de Gesti\xF3n en Seguridad y Salud en el Trabajo \u201CSG-SST\u201D y (ii) el desarrollo de las actividades previstas en los contratos laborales, de proveedur\xEDa y colaboraci\xF3n determinadas por Positiva, para satisfacer las necesidades de sus afiliadas y clientes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "4.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Alissta\xAE SUM permite acceder a informaci\xF3n y soportes creados o subidos en el registro de ejecuci\xF3n de actividades en las empresas afiliadas a Positiva; conocer las actividades o tareas asignadas por Positiva a los usuarios; acceder a la informaci\xF3n administrativa y datos generales de las empresas afiliadas, las cuales otorgan su autorizaci\xF3n expresamente al momento de la afiliaci\xF3n; generar reportes, registrar y cargar soportes de la ejecuci\xF3n y cierre de la actividad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "4.3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " Se puede acceder a Alissta\xAE SUM como aplicativo web o a trav\xE9s de aplicaci\xF3n m\xF3vil accesible a trav\xE9s de cualquier navegador en internet o descargable en dispositivos celulares o tabletas inteligentes desde las tiendas de aplicaciones. La aplicaci\xF3n m\xF3vil est\xE1 desarrollada para ser compatible con sistemas operativos Android o iOS. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "4.4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Para la descarga y uso de la aplicaci\xF3n m\xF3vil el usuario deber\xE1 cumplir varios requerimientos t\xE9cnicos y tecnol\xF3gicos como contar con la cuenta de acceso que debe ser aprobada y suministrada Positiva, con servicio de internet o datos celulares, equipo celular, smartphone, tableta inteligente o cualquier dispositivo compatible que permita acceder a la aplicaci\xF3n, interactuar con el aplicativo y realizar las actualizaciones. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "5. Creaci\xF3n de usuario para usar el aplicativo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Para el uso del aplicativo Positiva permitir\xE1 el registro del usuario en el aplicativo a trav\xE9s de la creaci\xF3n de un usuario y contrase\xF1a suministrada por Positiva que le permitir\xE1 el acceso. Adicionalmente se crear\xE1 un rol del usuario el cual identificar\xE1 las actividades que va a desarrollar, las caracter\xEDsticas y dem\xE1s requerimientos necesarios para su ejecuci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " Usted es el \xFAnico responsable del ingreso al aplicativo, por lo que se obliga a custodiar y proteger la informaci\xF3n de acceso al aplicativo. ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, " El registro le otorga permiso limitado, controlado, no exclusivo y revocable de uso sobre el aplicativo que le permite descargar, instalar, acceder a Alissta\xAE SUM, y realizar, entre otras, las siguientes actividades las que podr\xE1n actualizarse de tiempo en tiempo:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "6.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Usar el aplicativo, sus actualizaciones, marcas, documentos y en general la informaci\xF3n del aplicativo \xFAnica y exclusivamente para el desarrollo y registro de ejecuci\xF3n de las actividades asignadas por Positiva y en desarrollo de su v\xEDnculo contractual con la compa\xF1\xEDa. En tal sentido, est\xE1 prohibido el uso indebido, no autorizado para fines distintos o que no se encuentren relacionados con la labor encomendada por Positiva, so pena de la imposici\xF3n de las sanciones previstas en el contrato celebrado entre el proveedor y Positiva.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "6.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Acceder y consultar la informaci\xF3n relacionada con el contrato, proceso de contrataci\xF3n, orden de prestaci\xF3n de servicios, ejecuci\xF3n del contrato, factura y aval de la factura con los usuarios.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "6.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Conocer las actividades o tareas asignadas por Positiva a los usuarios.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "6.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Acceder a informaci\xF3n y documentos de Positiva tales como y sin limitarse a matrices, conceptos y documentos t\xE9cnicos, recomendaciones, estad\xEDsticas e indicadores, planes de emergencia, y dem\xE1s informaci\xF3n requerida que permiten el desarrollo de cada una de las actividades y servicios prestados por Positiva a sus compa\xF1\xEDas afiliadas con relaci\xF3n al Sistema de Gesti\xF3n de Seguridad y Salud en el Trabajo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "6.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, " Visualizar en las pantallas del sistema, informaci\xF3n administrativa de la empresa en la que se desarrolla la actividad.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "6.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, " Acceder a la informaci\xF3n relacionada con el plan de trabajo anual, las actividades a realizar en cada una de las empresas afiliadas a Positiva, la informaci\xF3n administrativa de la empresa como estad\xEDsticas e indicadores de accidentalidad, enfermedad laboral y ausentismo, as\xED como aquellos reportes relacionados con el Sistema de Gesti\xF3n de Seguridad y Salud en el Trabajo, entre otros.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](150, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "6.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Registrar informaci\xF3n relacionada con la gesti\xF3n, desarrollo, avance, ejecuci\xF3n y cierre de las actividades asignadas por Positiva con relaci\xF3n al Sistema de Gesti\xF3n de Seguridad y Salud en el Trabajo de las empresas afiliadas a Positiva, cargar y generar reportes.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "6.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, " Generar reportes, alertas y hallazgos presentados en la ejecuci\xF3n de la actividad para uso exclusivo de Positiva o en desarrollo de la relaci\xF3n del usuario con Positiva. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "6.10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, " Recibir y enviar mensajes y comunicaciones relacionadas con la actividad encomendada por Positiva, enviar reportes de la gesti\xF3n y el soporte de cierre de la actividad, el cual podr\xE1 consistir en una certificaci\xF3n de la actividad o cualquier documento que la soporte o la firma por parte del encargado de la compa\xF1\xEDa afiliada que confirme su ejecuci\xF3n y cierre. ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Contar con acceso a internet para la interacci\xF3n en l\xEDnea. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "7.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " Pagar los cobros que realice el operador del servicio de telefon\xEDa, datos m\xF3viles o internet que se causen por la descarga y uso del aplicativo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "7.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " Responder por el correcto uso del aplicativo Alissta\xAE SUM y del cumplimiento de los t\xE9rminos y condiciones de la presente licencia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "7.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " Contar con un equipo de c\xF3mputo, celular, smartphone, tableta inteligente o cualquier dispositivo similar que sea compatible y permita acceder e interactuar con el aplicativo y sus actualizaciones y que permita la toma de firmas digitales para la acreditaci\xF3n de cumplimientos de actividades, previa autenticaci\xF3n del usuario. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "7.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, " Registrar la ejecuci\xF3n de las actividades encargadas por Positiva y cargar los documentos de la ejecuci\xF3n a trav\xE9s del aplicativo Alissta\xAE Sum. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "7.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Conservar y proteger la informaci\xF3n de ingreso al aplicativo, entre la que se encuentra usuario y contrase\xF1a. No compartir dicha informaci\xF3n con otros usuarios o terceros. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "7.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " No acceder desde sitios p\xFAblicos, equipos de terceros o que puedan poner en riesgo la seguridad del aplicativo y la informaci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "7.8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " No compartir con ninguna persona informaci\xF3n relacionada con la actividad desempe\xF1ada por tratarse de actividades e informaci\xF3n que solo incumben a Positiva, y a las afiliadas. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, "7.9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " Conservar, proteger y mantener la confidencialidad y reserva de la informaci\xF3n de Positiva, las empresas afiliadas a Positiva y dem\xE1s proveedores y colaboradores de Positiva que se ponga a disposici\xF3n a trav\xE9s de Alissta Sum o la que pueda llegar a conocer por cualquier medio. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](203, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "7.10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, " Suministrar la informaci\xF3n real, cierta, veraz y comprobable sobre el desarrollo de las actividades encargadas por Positiva. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](207, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "7.11");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Suministrar informaci\xF3n o comentarios respetuosos que permitan la funcionalidad del aplicativo y contribuyan a su finalidad. Se proh\xEDbe al usuario el env\xEDo de comunicaciones, comentarios o informaci\xF3n sobre Positiva, sus empleados y dem\xE1s proveedores o colaboradores, as\xED como de las empresas afiliadas a Positiva o sus empleados, representantes o colaboradores que pueda considerarse como ofensiva, indecente o censurable. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](211, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "7.12");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, " Abstenerse de ceder, alquilar, arrendar, prestar, vender, distribuir, comercializar, hacer ingenier\xEDa inversa, modificar, alterar o sublicenciar total o parcialmente el aplicativo Alissta Sum. ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, " Habilitar y mantener a disposici\xF3n el aplicativo Alissta\xAE SUM en sus versiones web y m\xF3vil, as\xED como sus actualizaciones. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "8.2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, " Procurar el correcto y normal funcionamiento del aplicativo. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "8.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](231, " Proteger la informaci\xF3n suministrada a trav\xE9s de Alissta\xAE SUM. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](234, "8.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, " Brindar soporte t\xE9cnico, tecnol\xF3gico y operativo del aplicativo Alissta\xAE SUM. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](236, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "8.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " Eliminar la informaci\xF3n que considere que puede afectar o vulnerar los derechos de la compa\xF1\xEDa o de terceros e iniciar las acciones pertinentes contra quienes incumplan las reglas de uso del aplicativo, cuando a ello hubiera lugar. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](240, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "8.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](243, " Positiva se reserva el derecho de bloquear, inhabilitar o restringir, de forma unilateral, aut\xF3noma y sin previo aviso, el acceso al aplicativo cuando evidencie el incumplimiento de los t\xE9rminos de uso descritos en esta licencia o cuando evidencie conductas fraudulentas e ilegales que pongan en riesgo a Positiva, la funcionalidad del aplicativo o la seguridad de la informaci\xF3n de la compa\xF1\xEDa, de otros usuarios o de las empresas afiliadas a Positiva. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](244, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "8.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, " Positiva se reserva el derecho de iniciar las acciones legales correspondientes por las infracciones o incumplimiento a los t\xE9rminos y condiciones de la licencia, sin perjuicio que se d\xE9 por terminada la relaci\xF3n con el usuario en forma inmediata. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](249, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "9. Limitaci\xF3n de responsabilidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "9.3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](257, " Positiva no es responsable por los da\xF1os, afectaciones, imposibilidad de uso o falta de disponibilidad del aplicativo Alissta\xAE Sum, bien por fallas en internet o problemas de acceso del usuario o por los da\xF1os, p\xE9rdida o lesi\xF3n resultante de hacking, manipulaci\xF3n u otro acceso no autorizado. No obstante lo anterior, se aclara que Positiva tiene el deber de velar porque el sistema no sea vulnerable, establecer controles y barreras para que terceros no puedan manipular el aplicativo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, "9.4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, " Positiva no asume ninguna responsabilidad i) por el acceso, consulta y env\xEDo de informaci\xF3n a trav\xE9s de servidores o dispositivos inseguros; ii) por cualquier interrupci\xF3n o cese de transmisi\xF3n desde o hacia el servicio ofrecido en el sitio web; iii) cualquier bugs, virus, troyanos o similares que puedan transmitirse en o a trav\xE9s de la Aplicaci\xF3n por cualquier tercero; y/o iv) por contenidos de usuarios considerados como difamatorios, ofensivos o ilegales. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](262, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "9.5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](265, " Positiva no es responsable por el bloqueo, suspensi\xF3n, interrupci\xF3n o cualquier afectaci\xF3n en la comunicaci\xF3n derivada de fallas del operador del servicio de internet o datos m\xF3viles. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](266, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "9.6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, " Positiva tampoco garantiza ni es responsable por la incompatibilidad del aplicativo Alissta Sum con el equipo o dispositivo destinado por el usuario para su uso, ni por la incompatibilidad con el software o sistema operativo de dichos equipos. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "9.7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, " Positiva no garantiza ni es responsable por la falta de acceso a internet que impida la funcionalidad de la aplicaci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](274, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "10. Expiraci\xF3n de la licencia de uso");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Esta licencia termina por: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](283, "10.1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Terminaci\xF3n del v\xEDnculo de Positiva con las empresas.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](285, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "10.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, " Terminaci\xF3n del v\xEDnculo de Positiva con el usuario por cualquier causa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "10.3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, " Inexistencia de actividades relacionadas con el Sistema de Gesti\xF3n de Seguridad y Salud en el Trabajo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "10.4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](296, " Sustituci\xF3n del aplicativo por otro autorizado por Positiva.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "10.5.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](300, " Terminaci\xF3n del v\xEDnculo contractual entre Positiva y el proveedor de servicios. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](301, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](305, "11. Propiedad de la Informaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "11.1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, " El Usuario reconoce y acepta que toda la informaci\xF3n conocida, recaudada o suministrada a trav\xE9s de Alissta\xAE SUM es de propiedad o de responsabilidad, seg\xFAn corresponda, de Positiva Compa\xF1\xEDa de Seguros S.A. y que la informaci\xF3n se pone a disposici\xF3n de los usuarios del aplicativo \xFAnicamente para el desarrollo y cumplimiento de las actividades encargadas por Positiva.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "11.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](313, " Es responsabilidad de los usuarios del aplicativo conservar, proteger y mantener la confidencialidad y reserva de la informaci\xF3n de Positiva, las empresas afiliadas a Positiva y dem\xE1s proveedores y colaboradores de la compa\xF1\xEDa, que se ponga a disposici\xF3n a trav\xE9s de Alissta Sum o que pueda llegar a conocer por cualquier medio.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](316, "11.3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, " Se proh\xEDbe el uso de la informaci\xF3n para una finalidad diferente al desarrollo de la actividad asignada por Positiva y la atenci\xF3n de los requerimientos de las empresas afiliadas a la compa\xF1\xEDa.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](318, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "11.4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](321, " Est\xE1 prohibida la divulgaci\xF3n, copia, suministro y en general la publicaci\xF3n de la informaci\xF3n contenida en Alissta Sum. En caso de evidenciar conductas o actos que ponga en riesgo la informaci\xF3n suministrada en el aplicativo, Positiva tiene la facultad de iniciar las acciones pertinentes y bloquear el acceso. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](322, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](323, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, "12. Acceso y confidencialidad de la informaci\xF3n.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](329, "12.1.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](330, " En Alissta\xAE SUM usted encontrar\xE1 informaci\xF3n relacionada en general pero sin limitaci\xF3n, con la Gesti\xF3n de proveedores Promoci\xF3n y Prevenci\xF3n, Autorizaci\xF3n de Servicios, costos de inversi\xF3n, recaudo de primas, informaci\xF3n de las compa\xF1\xEDas afiliadas a Positiva, reportes e indicadores de accidentalidad, enfermedad laboral y ausentismo de los empleados de las empresas afiliadas, en forma agregada y sin ser atribuible a un sujeto determinado; documentos, conceptos t\xE9cnicos, recomendaciones, matrices y cualquier otra informaci\xF3n administrativa suministrada por las empresas afiliadas a Positiva relacionada con el Sistema de Gesti\xF3n de Seguridad y Salud en el trabajo.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](331, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, " Esta informaci\xF3n es puesta a su disposici\xF3n exclusivamente para el desarrollo de las actividades encargadas por Positiva. En tal sentido, usted como usuario de Alissta\xAE SUM se compromete a: (i) Mantener bajo confidencialidad y reserva toda la informaci\xF3n de Positiva o de las empresas afiliadas, a la cual pueda acceder. (ii) No utilizar la informaci\xF3n publicada a trav\xE9s de Alissta Sum para fines o prop\xF3sitos distintos a las actividades asignadas por Positiva o lo dispuesto en estos t\xE9rminos y condiciones. (iii) No usar la informaci\xF3n de modo que pueda de alguna manera, directa o indirectamente, ser perjudicial para Positiva o para las empresas afiliadas, o para sus empleados. (iv) No realizar copias o backups de la informaci\xF3n suministrada a trav\xE9s de Alissta Sum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](333, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, " El deber de confidencialidad y protecci\xF3n de la informaci\xF3n se extiende a todos los empleados, colaboradores, asesores y contratistas del proveedor que tengan acceso a Alissta SUM, es tal sentido es responsabilidad de los proveedores su estricto cumplimiento. ");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, " Positiva Compa\xF1\xEDa de Seguros S.A. es titular y due\xF1o del dominio Alissta\xAE SUM, previa realizaci\xF3n del compliance necesario, de sus marcas, de la Aplicaci\xF3n Alissta\xAE SUM, sus copias, actualizaciones y modificaciones, as\xED como incluyendo sin limitaci\xF3n, marcas, el texto, software, scripts, gr\xE1ficos, fotos, sonidos, m\xFAsica, videos, funciones interactivas y elementos similares (productos y las marcas registradas, marcas del servicio y logotipos contenidos en el mismo (\u201CMarcas\u201D), folletos, manuales y dem\xE1s informaci\xF3n relacionada con Alissta\xAE Sum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](344, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "13.2.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](347, " Usted acepta y reconoce que el contenido de la p\xE1gina web y del aplicativo Alissta Sum es de propiedad de Positiva y que se encuentra protegido por el derecho de autor, marcas registradas, patentes y dem\xE1s derechos y leyes de propiedad intelectual. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](348, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, "13.3.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, " Usted acepta y reconoce que el material contenido en la p\xE1gina web y en la App Alissta\xAE SUM es suministrado para su interacci\xF3n como empleado, proveedor y colaborador de Positiva. Por esta raz\xF3n no puede ser utilizado, copiado, reproducido, distribuido, transmitido, exhibido, vendido, licenciado, o utilizado de ninguna otra forma y para otra finalidad distinta a la establecida en esta licencia. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](352, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](353, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](354, "13.4.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, " Sin perjuicio de las acciones legales que pueda adelantar, Positiva se reserva la facultad de suspender, bloquear, restringir o inhabilitar el acceso, cuando evidencie algunas de las conductas descritas en este numeral o cualquier otra que se considere una infracci\xF3n a los derechos de propiedad intelectual de Positiva. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](356, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](357, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](360, "14. Modificaci\xF3n de la licencia");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](361, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](362, " Positiva se reserva el derecho de modificar en cualquier momento, por cualquier raz\xF3n y sin previo aviso estos t\xE9rminos y condiciones. La actualizaci\xF3n o modificaci\xF3n se comunicar\xE1 a los usuarios por cualquier medio, principalmente a trav\xE9s de la p\xE1gina web de Alissta\xAE SUM y la aplicaci\xF3n de Alissta\xAE SUM. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](363, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](364, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](366, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "15. Indemnidad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](369, " A partir del ingreso, uso, interacci\xF3n, descarga o registro en Alissta Sum el usuario acepta defender, indemnizar y eximir a Positiva Compa\xF1\xEDa de Seguros S.A. de toda responsabilidad, reclamaciones y gastos, incluidos honorarios de abogado, que surjan del mal uso del sitio web y/o del aplicativo, del incumplimiento de estos t\xE9rminos y condiciones, o de cualquier infracci\xF3n de derechos de terceros. Positiva se reserva el derecho de contratar y controlar su defensa por cuenta del usuario de cualquier asunto sujeto a indemnizaci\xF3n, en cuyo caso el usuario cooperara con Positiva en el desarrollo de cualquier defensa posible. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](370, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "16. Ley aplicable y soluci\xF3n de conflictos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, " La concesi\xF3n de la presente licencia y las disposiciones en este documento se regir\xE1n por las leyes de la Rep\xFAblica Colombia que le sean aplicables. Cualquier disputa o controversia relacionada con la interpretaci\xF3n, ejecuci\xF3n, cumplimiento o terminaci\xF3n de esta licencia, se resolver\xE1 ante la jurisdicci\xF3n ordinaria colombiana. Ambas Partes renuncian a cualquier otra jurisdicci\xF3n que pudiere corresponderles. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](377, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](378, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](381, "17. Comunicaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](383, " Las comunicaciones relacionadas con la App Alissta\xAE SUM deber\xE1n ser enviadas por escrito a al correo electr\xF3nico soportealissta@positiva.gov.co a trav\xE9s de la l\xEDnea nacional 6502200 en Bogot\xE1 D.C. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](384, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](385, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybXMtYW5kLWNvbmRpdGlvbnMvQzpcXFVzZXJzXFxjYWx2YXJhZG9cXERvY3VtZW50c1xccHJveWVjdG9cXEFjdHVhbFxcYWxpc3N0YV9zdW1cXEJyYW5jaGVzXFxSZXZpc2lvbl9WZXJzaW9uX0FjdHVhbGl6YWRhXzIwMjQwOTIwL3NyY1xcYXBwXFxwYWdlc1xcdGVybXMtYW5kLWNvbmRpdGlvbnNcXHRlcm1zLWFuZC1jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVybXMtYW5kLWNvbmRpdGlvbnMvdGVybXMtYW5kLWNvbmRpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FETUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgIH1cbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsAndConditionsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-terms-and-conditions',
          templateUrl: './terms-and-conditions.page.html',
          styleUrls: ['./terms-and-conditions.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=terms-and-conditions-terms-and-conditions-module-es5.js.map