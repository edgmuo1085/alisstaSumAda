function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-navbar-navbar-module"], {
  /***/
  "./src/app/pages/navbar/navbar-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/navbar/navbar-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarPageRoutingModule */

  /***/
  function srcAppPagesNavbarNavbarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarPageRoutingModule", function () {
      return NavbarPageRoutingModule;
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


    var _navbar_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar.page */
    "./src/app/pages/navbar/navbar.page.ts");

    var routes = [{
      path: 'u',
      component: _navbar_page__WEBPACK_IMPORTED_MODULE_2__["NavbarPage"],
      children: [{
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-profile-module */
          "profile-profile-module").then(__webpack_require__.bind(null,
          /*! ../profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | home-home-module */
          "home-home-module").then(__webpack_require__.bind(null,
          /*! ../home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | settings-settings-module */
          [__webpack_require__.e("default~pages-auth-login-login-module~settings-settings-module~signature-signature-module"), __webpack_require__.e("default~pages-auth-login-login-module~settings-settings-module"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null,
          /*! ../settings/settings.module */
          "./src/app/pages/settings/settings.module.ts")).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'execLog',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | exec-log-exec-log-module */
          "exec-log-exec-log-module").then(__webpack_require__.bind(null,
          /*! ../exec-log/exec-log.module */
          "./src/app/pages/exec-log/exec-log.module.ts")).then(function (m) {
            return m.ExecLogPageModule;
          });
        }
      }, {
        path: 'consultEvent',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | educa-consult-event-consult-event-module */
          [__webpack_require__.e("common"), __webpack_require__.e("educa-consult-event-consult-event-module")]).then(__webpack_require__.bind(null,
          /*! ../educa/consult-event/consult-event.module */
          "./src/app/pages/educa/consult-event/consult-event.module.ts")).then(function (m) {
            return m.ConsultEventPageModule;
          });
        }
      }, {
        path: 'terms-and-conditions',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | terms-and-conditions-terms-and-conditions-module */
          "terms-and-conditions-terms-and-conditions-module").then(__webpack_require__.bind(null,
          /*! ../terms-and-conditions/terms-and-conditions.module */
          "./src/app/pages/terms-and-conditions/terms-and-conditions.module.ts")).then(function (m) {
            return m.TermsAndConditionsPageModule;
          });
        }
      }, {
        path: 'survey-and-signature',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | survey-and-signature-survey-and-signature-module */
          [__webpack_require__.e("common"), __webpack_require__.e("survey-and-signature-survey-and-signature-module")]).then(__webpack_require__.bind(null,
          /*! ../survey-and-signature/survey-and-signature.module */
          "./src/app/pages/survey-and-signature/survey-and-signature.module.ts")).then(function (m) {
            return m.SurveyAndSignaturePageModule;
          });
        }
      }, {
        path: 'select-register-event',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | educa-select-register-event-select-register-event-module */
          [__webpack_require__.e("default~educa-select-register-event-select-register-event-module~select-register-event-select-regist~0dc7d568"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
          /*! ../educa/select-register-event/select-register-event.module */
          "./src/app/pages/educa/select-register-event/select-register-event.module.ts")).then(function (m) {
            return m.SelectRegisterEventPageModule;
          });
        }
      }, {
        path: 'manual-event-register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | educa-manual-event-register-manual-event-register-module */
          [__webpack_require__.e("default~educa-manual-event-register-manual-event-register-module~manual-event-register-manual-event-~10a14e10"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
          /*! ../educa/manual-event-register/manual-event-register.module */
          "./src/app/pages/educa/manual-event-register/manual-event-register.module.ts")).then(function (m) {
            return m.ManualEventRegisterPageModule;
          });
        }
      }, {
        path: 'info-register-event-manual',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | educa-info-register-event-manual-info-register-event-manual-module */
          [__webpack_require__.e("default~educa-info-register-event-manual-info-register-event-manual-module~info-register-event-manua~14912bf9"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null,
          /*! ../educa/info-register-event-manual/info-register-event-manual.module */
          "./src/app/pages/educa/info-register-event-manual/info-register-event-manual.module.ts")).then(function (m) {
            return m.InfoRegisterEventManualPageModule;
          });
        }
      }, {
        path: 'list-communications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | communications-list-communications-list-communications-module */
          "communications-list-communications-list-communications-module").then(__webpack_require__.bind(null,
          /*! ../communications/list-communications/list-communications.module */
          "./src/app/pages/communications/list-communications/list-communications.module.ts")).then(function (m) {
            return m.ListCommunicationsPageModule;
          });
        }
      }, {
        path: 'list-communications/:communicationId',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | communications-list-communications-list-communications-module */
          "communications-list-communications-list-communications-module").then(__webpack_require__.bind(null,
          /*! ../communications/list-communications/list-communications.module */
          "./src/app/pages/communications/list-communications/list-communications.module.ts")).then(function (m) {
            return m.ListCommunicationsPageModule;
          });
        }
      }, {
        path: 'talk/:idTalk',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | communications-talk-talk-module */
          "communications-talk-talk-module").then(__webpack_require__.bind(null,
          /*! ../communications/talk/talk.module */
          "./src/app/pages/communications/talk/talk.module.ts")).then(function (m) {
            return m.TalkPageModule;
          });
        }
      }, {
        path: 'create-communications',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | communications-create-communication-create-communication-module */
          "communications-create-communication-create-communication-module").then(__webpack_require__.bind(null,
          /*! ../communications/create-communication/create-communication.module */
          "./src/app/pages/communications/create-communication/create-communication.module.ts")).then(function (m) {
            return m.CreateCommunicationPageModule;
          });
        }
      }, {
        path: 'companies',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | companies-companies-module */
          "companies-companies-module").then(__webpack_require__.bind(null,
          /*! ../companies/companies.module */
          "./src/app/pages/companies/companies.module.ts")).then(function (m) {
            return m.CompaniesPageModule;
          });
        }
      }]
    }, {
      path: '',
      redirectTo: 'u/home',
      pathMatch: 'full'
    }, {
      path: '**',
      redirectTo: 'u/home',
      pathMatch: 'full'
    }];

    var NavbarPageRoutingModule = /*#__PURE__*/_createClass(function NavbarPageRoutingModule() {
      _classCallCheck(this, NavbarPageRoutingModule);
    });

    NavbarPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NavbarPageRoutingModule
    });
    NavbarPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NavbarPageRoutingModule_Factory(t) {
        return new (t || NavbarPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavbarPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarPageRoutingModule, [{
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
  "./src/app/pages/navbar/navbar.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/navbar/navbar.module.ts ***!
    \***********************************************/

  /*! exports provided: NavbarPageModule */

  /***/
  function srcAppPagesNavbarNavbarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarPageModule", function () {
      return NavbarPageModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _navbar_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./navbar-routing.module */
    "./src/app/pages/navbar/navbar-routing.module.ts");
    /* harmony import */


    var _navbar_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./navbar.page */
    "./src/app/pages/navbar/navbar.page.ts");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./navbar.service */
    "./src/app/pages/navbar/navbar.service.ts");

    var NavbarPageModule = /*#__PURE__*/_createClass(function NavbarPageModule() {
      _classCallCheck(this, NavbarPageModule);
    });

    NavbarPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: NavbarPageModule
    });
    NavbarPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function NavbarPageModule_Factory(t) {
        return new (t || NavbarPageModule)();
      },
      providers: [_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _navbar_routing_module__WEBPACK_IMPORTED_MODULE_4__["NavbarPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NavbarPageModule, {
        declarations: [_navbar_page__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _navbar_routing_module__WEBPACK_IMPORTED_MODULE_4__["NavbarPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NavbarPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _navbar_routing_module__WEBPACK_IMPORTED_MODULE_4__["NavbarPageRoutingModule"]],
          declarations: [_navbar_page__WEBPACK_IMPORTED_MODULE_5__["NavbarPage"]],
          providers: [_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/navbar/navbar.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/navbar/navbar.page.ts ***!
    \*********************************************/

  /*! exports provided: NavbarPage */

  /***/
  function srcAppPagesNavbarNavbarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarPage", function () {
      return NavbarPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./navbar.service */
    "./src/app/pages/navbar/navbar.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /**
     * Componente de barra de navegación.
     */


    var NavbarPage = /*#__PURE__*/function () {
      function NavbarPage(navbarService) {
        _classCallCheck(this, NavbarPage);

        this.navbarService = navbarService;
        this.show = true;
      }

      _createClass(NavbarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.navbarServiceSub = this.navbarService.show.subscribe(function (v) {
            return _this.show = v;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.navbarServiceSub.unsubscribe();
        }
      }]);

      return NavbarPage;
    }();

    NavbarPage.ɵfac = function NavbarPage_Factory(t) {
      return new (t || NavbarPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]));
    };

    NavbarPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarPage,
      selectors: [["app-navbar"]],
      decls: 8,
      vars: 2,
      consts: [["slot", "top", 1, "color"], ["tab", "profile"], [1, "iconNavbarPerfil"], ["tab", "home"], [1, "iconNavbarHome"], ["tab", "settings"], [1, "iconNavbarSettings"]],
      template: function NavbarPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-tab-bar", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-tab-button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-tab-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-tab-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("ion-hide", !ctx.show);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabButton"]],
      styles: [".color[_ngcontent-%COMP%] {\n  --background: #4c4c4c;\n  --background: -webkit-gradient(\n    left top,\n    right top,\n    color-stop(0%, #4c4c4c),\n    color-stop(22%, #304b58),\n    color-stop(50%, #516f7a),\n    color-stop(79%, #304b58),\n    color-stop(100%, #304b58)\n  );\n  background: linear-gradient(to right, #4c4c4c 0%, #304b58 22%, #516f7a 50%, #304b58 79%, #304b58 100%);\n}\n\nion-tabs[_ngcontent-%COMP%] {\n  padding-top: env(safe-area-inset-top);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL25hdmJhci9uYXZiYXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9uYXZiYXIvbmF2YmFyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0E7Ozs7Ozs7O0dBQUE7RUFTQSxzR0FBQTtBQ0NGOztBREVBO0VBQ0UscUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdmJhci9uYXZiYXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNGM0YzRjO1xuICAtLWJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQoXG4gICAgbGVmdCB0b3AsXG4gICAgcmlnaHQgdG9wLFxuICAgIGNvbG9yLXN0b3AoMCUsICM0YzRjNGMpLFxuICAgIGNvbG9yLXN0b3AoMjIlLCAjMzA0YjU4KSxcbiAgICBjb2xvci1zdG9wKDUwJSwgIzUxNmY3YSksXG4gICAgY29sb3Itc3RvcCg3OSUsICMzMDRiNTgpLFxuICAgIGNvbG9yLXN0b3AoMTAwJSwgIzMwNGI1OClcbiAgKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNGM0YzRjIDAlLCAjMzA0YjU4IDIyJSwgIzUxNmY3YSA1MCUsICMzMDRiNTggNzklLCAjMzA0YjU4IDEwMCUpO1xufVxuXG5pb24tdGFicyB7XG4gIHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG59XG4iLCIuY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICM0YzRjNGM7XG4gIC0tYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChcbiAgICBsZWZ0IHRvcCxcbiAgICByaWdodCB0b3AsXG4gICAgY29sb3Itc3RvcCgwJSwgIzRjNGM0YyksXG4gICAgY29sb3Itc3RvcCgyMiUsICMzMDRiNTgpLFxuICAgIGNvbG9yLXN0b3AoNTAlLCAjNTE2ZjdhKSxcbiAgICBjb2xvci1zdG9wKDc5JSwgIzMwNGI1OCksXG4gICAgY29sb3Itc3RvcCgxMDAlLCAjMzA0YjU4KVxuICApO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM0YzRjNGMgMCUsICMzMDRiNTggMjIlLCAjNTE2ZjdhIDUwJSwgIzMwNGI1OCA3OSUsICMzMDRiNTggMTAwJSk7XG59XG5cbmlvbi10YWJzIHtcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.page.html',
          styleUrls: ['./navbar.page.scss']
        }]
      }], function () {
        return [{
          type: _navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/navbar/navbar.service.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/navbar/navbar.service.ts ***!
    \************************************************/

  /*! exports provided: NavbarService */

  /***/
  function srcAppPagesNavbarNavbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarService", function () {
      return NavbarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * Servicio de configuración de la barra de navegación.
     */


    var NavbarService = /*#__PURE__*/function () {
      function NavbarService() {
        _classCallCheck(this, NavbarService);

        this._show = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }
      /**
       * Indica si la barra de navegación debe mostrarse u ocultarse.
       */


      _createClass(NavbarService, [{
        key: "show",
        get: function get() {
          return this._show.asObservable();
        }
        /**
         * Establece si la barra de navegación debe mostrarse u ocultarse.
         *
         * @param isVisible Si es verdadero, la barra se muestra. En caso contrario, se oculta.
         */

      }, {
        key: "setVisibility",
        value: function setVisibility(isVisible) {
          this._show.next(isVisible);
        }
      }]);

      return NavbarService;
    }();

    NavbarService.ɵfac = function NavbarService_Factory(t) {
      return new (t || NavbarService)();
    };

    NavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavbarService,
      factory: NavbarService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-navbar-navbar-module-es5.js.map