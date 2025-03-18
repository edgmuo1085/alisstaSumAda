function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"], {
  /***/
  "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js ***!
    \**************************************************************************/

  /*! exports provided: AppVersion */

  /***/
  function _node_modules_IonicNative_appVersion___ivy_ngcc___ngx_indexJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppVersion", function () {
      return AppVersion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/core */
    "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");

    var AppVersion =
    /** @class */
    function (_super) {
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AppVersion, _super);

      function AppVersion() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      AppVersion.prototype.getAppName = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAppName", {}, arguments);
      };

      AppVersion.prototype.getPackageName = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPackageName", {}, arguments);
      };

      AppVersion.prototype.getVersionCode = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getVersionCode", {}, arguments);
      };

      AppVersion.prototype.getVersionNumber = function () {
        return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getVersionNumber", {}, arguments);
      };

      AppVersion.pluginName = "AppVersion";
      AppVersion.plugin = "cordova-plugin-app-version";
      AppVersion.pluginRef = "cordova.getAppVersion";
      AppVersion.repo = "https://github.com/whiteoctober/cordova-plugin-app-version";
      AppVersion.platforms = ["Android", "iOS", "Windows"];

      AppVersion.ɵfac = function AppVersion_Factory(t) {
        return ɵAppVersion_BaseFactory(t || AppVersion);
      };

      AppVersion.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: AppVersion,
        factory: function factory(t) {
          return AppVersion.ɵfac(t);
        }
      });

      var ɵAppVersion_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AppVersion);
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppVersion, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();

      return AppVersion;
    }(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvYXBwLXZlcnNpb24vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBSUUsSUE2QjhCLDhCQUFpQjtBQUFDO0FBRTlCO0FBRWhCO0FBQ0EsSUFDRiwrQkFBVTtBQUtjLElBSXhCLG1DQUFjO0FBS2MsSUFNNUIsbUNBQWM7QUFLSyxJQUluQixxQ0FBZ0I7QUFJbUI7QUFBMEM7QUFBc0Q7QUFBb0Q7QUFBb0Y7OENBeEM1USxVQUFVOzs7OzswQkFDTDtBQUFDLHFCQW5DUDtBQUFFLEVBbUM4QixpQkFBaUI7QUFDaEQsU0FEWSxVQUFVO0FBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuLyoqXG4gKiBAbmFtZSBBcHAgVmVyc2lvblxuICogQHByZW1pZXIgYXBwLXZlcnNpb25cbiAqIEBkZXNjcmlwdGlvblxuICogUmVhZHMgdGhlIHZlcnNpb24gb2YgeW91ciBhcHAgZnJvbSB0aGUgdGFyZ2V0IGJ1aWxkIHNldHRpbmdzLlxuICpcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYXBwLXZlcnNpb25gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQ29yZG92YSBBcHAgVmVyc2lvbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vd2hpdGVvY3RvYmVyL2NvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEFwcFZlcnNpb24gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2FwcC12ZXJzaW9uL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBWZXJzaW9uOiBBcHBWZXJzaW9uKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5hcHBWZXJzaW9uLmdldEFwcE5hbWUoKTtcbiAqIHRoaXMuYXBwVmVyc2lvbi5nZXRQYWNrYWdlTmFtZSgpO1xuICogdGhpcy5hcHBWZXJzaW9uLmdldFZlcnNpb25Db2RlKCk7XG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0VmVyc2lvbk51bWJlcigpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FwcFZlcnNpb24nLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbicsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuZ2V0QXBwVmVyc2lvbicsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vd2hpdGVvY3RvYmVyL2NvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBwVmVyc2lvbiBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGFwcCwgZS5nLjogXCJNeSBBd2Vzb21lIEFwcFwiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldEFwcE5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGFja2FnZSBuYW1lIG9mIHRoZSBhcHAsIGUuZy46IFwiY29tLmV4YW1wbGUubXlhd2Vzb21lYXBwXCJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0UGFja2FnZU5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYnVpbGQgaWRlbnRpZmllciBvZiB0aGUgYXBwLlxuICAgKiBJbiBpT1MgYSBzdHJpbmcgd2l0aCB0aGUgYnVpbGQgdmVyc2lvbiBsaWtlIFwiMS42MDk1XCJcbiAgICogSW4gQW5kcm9pZCBhIG51bWJlciBnZW5lcmF0ZWQgZnJvbSB0aGUgdmVyc2lvbiBzdHJpbmcsIGxpa2UgMTAyMDMgZm9yIHZlcnNpb24gXCIxLjIuM1wiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZyB8IG51bWJlcj59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFZlcnNpb25Db2RlKCk6IFByb21pc2U8c3RyaW5nIHwgbnVtYmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZlcnNpb24gb2YgdGhlIGFwcCwgZS5nLjogXCIxLjIuM1wiXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFZlcnNpb25OdW1iZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

    /***/

  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function _src_app_pages_about_aboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
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


    var _about_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/pages/about/about.page.ts");

    var routes = [{
      path: '',
      component: _about_page__WEBPACK_IMPORTED_MODULE_2__["AboutPage"]
    }];

    var AboutPageRoutingModule = /*#__PURE__*/_createClass(function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    });

    AboutPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AboutPageRoutingModule
    });
    AboutPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AboutPageRoutingModule_Factory(t) {
        return new (t || AboutPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageRoutingModule, [{
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
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutPageModule */

  /***/
  function _src_app_pages_about_aboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
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


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");
    /* harmony import */


    var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/pages/about/about.page.ts");

    var AboutPageModule = /*#__PURE__*/_createClass(function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    });

    AboutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AboutPageModule
    });
    AboutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AboutPageModule_Factory(t) {
        return new (t || AboutPageModule)();
      },
      providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutPageModule, {
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"]],
          declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]],
          providers: [_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_3__["AppVersion"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/about/about.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/about/about.page.ts ***!
    \*******************************************/

  /*! exports provided: AboutPage */

  /***/
  function _src_app_pages_about_aboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../navbar/navbar.service */
    "./src/app/pages/navbar/navbar.service.ts");
    /* harmony import */


    var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/app-version/ngx */
    "./node_modules/@ionic-native/app-version/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
     * Componente de vista de Acerca de.
     */


    var AboutPage = /*#__PURE__*/function () {
      function AboutPage(appVersion, navbarService) {
        var _this = this;

        _classCallCheck(this, AboutPage);

        this.appVersion = appVersion;
        this.navbarService = navbarService;
        this.appVersion.getVersionNumber().then(function (v) {
          return _this.versionNumber = v;
        });
      }

      return _createClass(AboutPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.navbarService.setVisibility(false);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.navbarService.setVisibility(true);
        }
      }]);
    }();

    AboutPage.ɵfac = function AboutPage_Factory(t) {
      return new (t || AboutPage)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]));
    };

    AboutPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutPage,
      selectors: [["app-about"]],
      decls: 23,
      vars: 1,
      consts: [[1, "backgroundContent"], ["src", "../../../../assets/logos/logo_alissta.png", "alt", "logoAlista", 1, "imgTop"], ["size", "12", 1, "titulo"], ["vertical", "center", "horizontal", "center", "slot", "fixed", "routerLink", "/u/settings"], ["id", "btnBack", "src", "../../../assets/icon/icono_tareas_enviar.svg", "alt", "atras"], [1, "labelProducto"], ["size", "3"], ["size", "6"], ["color", "primary"], ["src", "../../../../assets/logos/logo_positiva.png", "alt", "", 1, "imgFooter"]],
      template: function AboutPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-slides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-fab", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-fab-button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-grid", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Un producto de ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Versi\xF3n ", ctx.versionNumber, "");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"]],
      styles: ["ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  margin-top: 110px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%] {\n  transform: translate(8px, -30px);\n  outline: none;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n  --background: none;\n  --box-shadow: none;\n}\n.imgTop[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.titulo[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: bold;\n}\n.labelProducto[_ngcontent-%COMP%] {\n  transform: translate(10px, 80px);\n  font-size: 11px;\n}\n.imgFooter[_ngcontent-%COMP%] {\n  width: 58%;\n  margin-top: 60px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7QUNBSjtBREdRO0VBQ0UsWUFBQTtBQ0RWO0FESU07RUFDRSxnQ0FBQTtFQUNBLGFBQUE7QUNGUjtBREdRO0VBQ0UseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDRFY7QURRQTtFQUNFLGdCQUFBO0FDTEY7QURRQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDTEY7QURRQTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtBQ0xGO0FEUUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUNMRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgaW9uLXNsaWRlcyB7XG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIGlvbi1jYXJkIHtcbiAgICAgICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlvbi1mYWIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIC0zMHB4KTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgaW9uLWZhYi1idXR0b24ge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaW1nVG9wIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxhYmVsUHJvZHVjdG8ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMHB4LCA4MHB4KTtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG4uaW1nRm9vdGVyIHtcbiAgd2lkdGg6IDU4JTtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbiIsImlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICBtYXJnaW4tdG9wOiAxMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1mYWIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg4cHgsIC0zMHB4KTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1mYWIgaW9uLWZhYi1idXR0b24ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmltZ1RvcCB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG59XG5cbi50aXR1bG8ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5sYWJlbFByb2R1Y3RvIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTBweCwgODBweCk7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLmltZ0Zvb3RlciB7XG4gIHdpZHRoOiA1OCU7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.page.html',
          styleUrls: ['./about.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_2__["AppVersion"]
        }, {
          type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_1__["NavbarService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=about-about-module-es5.js.map