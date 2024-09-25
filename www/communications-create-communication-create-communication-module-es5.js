function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communications-create-communication-create-communication-module"], {
  /***/
  "./src/app/pages/communications/create-communication/create-communication-routing.module.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/pages/communications/create-communication/create-communication-routing.module.ts ***!
    \**************************************************************************************************/

  /*! exports provided: CreateCommunicationPageRoutingModule */

  /***/
  function srcAppPagesCommunicationsCreateCommunicationCreateCommunicationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCommunicationPageRoutingModule", function () {
      return CreateCommunicationPageRoutingModule;
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


    var _create_communication_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./create-communication.page */
    "./src/app/pages/communications/create-communication/create-communication.page.ts");

    var routes = [{
      path: '',
      component: _create_communication_page__WEBPACK_IMPORTED_MODULE_2__["CreateCommunicationPage"]
    }];

    var CreateCommunicationPageRoutingModule = /*#__PURE__*/_createClass(function CreateCommunicationPageRoutingModule() {
      _classCallCheck(this, CreateCommunicationPageRoutingModule);
    });

    CreateCommunicationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CreateCommunicationPageRoutingModule
    });
    CreateCommunicationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CreateCommunicationPageRoutingModule_Factory(t) {
        return new (t || CreateCommunicationPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateCommunicationPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCommunicationPageRoutingModule, [{
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
  "./src/app/pages/communications/create-communication/create-communication.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/pages/communications/create-communication/create-communication.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: CreateCommunicationPageModule */

  /***/
  function srcAppPagesCommunicationsCreateCommunicationCreateCommunicationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCommunicationPageModule", function () {
      return CreateCommunicationPageModule;
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


    var _create_communication_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-communication-routing.module */
    "./src/app/pages/communications/create-communication/create-communication-routing.module.ts");
    /* harmony import */


    var _create_communication_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-communication.page */
    "./src/app/pages/communications/create-communication/create-communication.page.ts");

    var CreateCommunicationPageModule = /*#__PURE__*/_createClass(function CreateCommunicationPageModule() {
      _classCallCheck(this, CreateCommunicationPageModule);
    });

    CreateCommunicationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CreateCommunicationPageModule
    });
    CreateCommunicationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CreateCommunicationPageModule_Factory(t) {
        return new (t || CreateCommunicationPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _create_communication_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateCommunicationPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CreateCommunicationPageModule, {
        declarations: [_create_communication_page__WEBPACK_IMPORTED_MODULE_5__["CreateCommunicationPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _create_communication_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateCommunicationPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCommunicationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _create_communication_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateCommunicationPageRoutingModule"]],
          declarations: [_create_communication_page__WEBPACK_IMPORTED_MODULE_5__["CreateCommunicationPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/communications/create-communication/create-communication.page.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/pages/communications/create-communication/create-communication.page.ts ***!
    \****************************************************************************************/

  /*! exports provided: CreateCommunicationPage */

  /***/
  function srcAppPagesCommunicationsCreateCommunicationCreateCommunicationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCommunicationPage", function () {
      return CreateCommunicationPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var CreateCommunicationPage = /*#__PURE__*/function () {
      function CreateCommunicationPage() {
        _classCallCheck(this, CreateCommunicationPage);
      }

      _createClass(CreateCommunicationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CreateCommunicationPage;
    }();

    CreateCommunicationPage.ɵfac = function CreateCommunicationPage_Factory(t) {
      return new (t || CreateCommunicationPage)();
    };

    CreateCommunicationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateCommunicationPage,
      selectors: [["app-create-communication"]],
      decls: 11,
      vars: 0,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "u/list-communications"], ["size", "10"], [1, "titulo"]],
      template: function CreateCommunicationPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-title", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Crear nueva conversaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "ion-content");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 24px !important;\n  padding-top: 10px;\n  padding: 0px;\n  text-align: left;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbW11bmljYXRpb25zL2NyZWF0ZS1jb21tdW5pY2F0aW9uL2NyZWF0ZS1jb21tdW5pY2F0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbXVuaWNhdGlvbnMvY3JlYXRlLWNvbW11bmljYXRpb24vY3JlYXRlLWNvbW11bmljYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0UsV0FBQTtBQ0NWO0FERU07RUFDRSxZQUFBO0FDQVI7QURNQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tdW5pY2F0aW9ucy9jcmVhdGUtY29tbXVuaWNhdGlvbi9jcmVhdGUtY29tbXVuaWNhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCommunicationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-communication',
          templateUrl: './create-communication.page.html',
          styleUrls: ['./create-communication.page.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=communications-create-communication-create-communication-module-es5.js.map