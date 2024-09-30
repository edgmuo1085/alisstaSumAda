function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
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


    var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"]
    }];

    var HomePageRoutingModule = /*#__PURE__*/_createClass(function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    });

    HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HomePageRoutingModule
    });
    HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HomePageRoutingModule_Factory(t) {
        return new (t || HomePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRoutingModule, [{
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
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
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


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var HomePageModule = /*#__PURE__*/_createClass(function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    });

    HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomePageModule
    });
    HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HomePageModule_Factory(t) {
        return new (t || HomePageModule)();
      },
      providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageModule, {
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
          declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
          providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
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


    var _services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/menu-configuracion.service */
    "./src/app/services/menu-configuracion.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/storage.service */
    "./src/app/storage.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomePage_ion_col_4_ion_card_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_col_4_ion_card_1_Template_ion_card_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var menuOpt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.optionSelectedMenu(menuOpt_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuOpt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("padding-8", menuOpt_r1.title === "Actualizar Datos Empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOpt_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuOpt_r1.title);
      }
    }

    function HomePage_ion_col_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePage_ion_col_4_ion_card_1_Template, 7, 4, "ion-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuOpt_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuOpt_r1.show);
      }
    }
    /**
     * Componente de la vista de inicio.
     */


    var HomePage = /*#__PURE__*/function () {
      function HomePage(router, toastController, alertController, menuService, faio, platform, storageService) {
        _classCallCheck(this, HomePage);

        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.menuService = menuService;
        this.faio = faio;
        this.platform = platform;
        this.storageService = storageService;
        this.isShowLoginWithFinger = false;
        this.isLoginWithFinger = false;
        this.isAutologin = false;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.optMenuMain = this.menuService.getMenuMain();
          this.platform.ready().then(function () {
            _this.faio.isAvailable().then(function (ava) {
              _this.storageService.get('isLoginWithFinger').then(function (result) {
                if (result != null) {
                  _this.isLoginWithFinger = result;
                }
              })["catch"](function (e) {
                console.log('error: ' + e);
              });

              _this.storageService.get('showLoginWithFinger').then(function (result) {
                if (result != null) {
                  _this.isLoginWithFinger = result;
                }
              })["catch"](function (e) {
                console.log('error: ' + e);
              });

              _this.storageService.get('autologin').then(function (result) {
                if (result != null) {
                  _this.isAutologin = result;
                } else {
                  _this.storageService.set('autologin', true);
                }

                if (!_this.isShowLoginWithFinger && !_this.isLoginWithFinger && !_this.isAutologin) {
                  _this.presentAlertConfirm();
                }
              })["catch"](function (e) {
                console.log('error: ' + e);
              });
            })["catch"](function (error) {
              console.log(error);
            });
          });
        }
      }, {
        key: "presentAlertConfirm",
        value: function presentAlertConfirm() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.alertController.create({
                    header: '¡Bienvenido!',
                    mode: 'ios',
                    message: '<strong>Hola! </strong>Detectamos ' + 'que tu dispositivo cuenta con TouchID/FaceID ' + '¿Te gustaría iniciar sesión la próxima vez con esta tecnología?',
                    buttons: [{
                      text: 'Si',
                      handler: function handler() {
                        _this2.storageService.set('showLoginWithFinger', true);

                        _this2.storageService.set('activateFinger', true);

                        _this2.toastConfirmBiometric();
                      }
                    }, {
                      text: 'Cancelar',
                      role: 'cancel',
                      handler: function handler() {
                        _this2.storageService.set('showLoginWithFinger', false);

                        _this2.storageService.set('activateFinger', false);

                        _this2.storageService.remove('valueOne');

                        _this2.storageService.remove('valueTwo');

                        _this2.storageService.remove('valueThree');

                        _this2.alertCancelBiometric();
                      }
                    }]
                  });

                case 2:
                  alert = _context.sent;
                  _context.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "toastConfirmBiometric",
        value: function toastConfirmBiometric() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.toastController.create({
                    message: 'TouchID/FaceID Activado',
                    duration: 2000
                  });

                case 2:
                  toast = _context2.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "alertCancelBiometric",
        value: function alertCancelBiometric() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.alertController.create({
                    header: '¡Recuerda!',
                    message: 'Puedes cambiar tus ajustes desde el menú configuración.',
                    buttons: [{
                      text: 'Aceptar'
                    }]
                  });

                case 2:
                  alert = _context3.sent;
                  _context3.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "optionSelectedMenu",
        value: function optionSelectedMenu(menuSelected) {
          switch (menuSelected.title) {
            case 'Comunicaciones':
              this.router.navigateByUrl('u/list-communications');
              break;

            case 'Registro ejecución de actividades':
              this.router.navigateByUrl('u/execLog');
              break;

            case 'Eventos Positiva':
              this.router.navigateByUrl('u/consultEvent');
              break;

            case 'Actualizar Datos Empresa':
              this.router.navigateByUrl('u/companies');
              break;
          }
        }
      }]);

      return HomePage;
    }();

    HomePage.ɵfac = function HomePage_Factory(t) {
      return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]));
    };

    HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HomePage,
      selectors: [["app-home"]],
      decls: 6,
      vars: 3,
      consts: [[1, "backgroundContent"], ["size", "6", 4, "ngFor", "ngForOf"], ["size", "6"], ["mode", "ios", 3, "click", 4, "ngIf"], ["mode", "ios", 3, "click"], [1, "vertical-center"], [1, "center"], ["alt", "", 3, "src"], [1, "tituloOpcion"]],
      template: function HomePage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePage_ion_col_4_Template, 2, 1, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.optMenuMain));
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: ["ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  border-radius: 10px;\n  border: 1px solid #95a6b1;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 70%;\n  margin-top: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\nion-content[_ngcontent-%COMP%]   .padding-8[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0FDRE47QURFTTtFQUNFLGFBQUE7QUNBUjtBRENRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NWO0FEQ1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NWO0FEQ1E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NWO0FEQ1E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1Y7QURLRTtFQUNFLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1ncmlkIHtcbiAgICBpb24tcm93IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NWE2YjE7XG4gICAgICAgIH1cbiAgICAgICAgJiAudmVydGljYWwtY2VudGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJiAuY2VudGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICYgLnRpdHVsb09wY2lvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmIC5wYWRkaW5nLTgge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NWE2YjE7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnZlcnRpY2FsLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC50aXR1bG9PcGNpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAucGFkZGluZy04IHtcbiAgcGFkZGluZzogOHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.page.html',
          styleUrls: ['./home.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"]
        }, {
          type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/menu-configuracion.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/menu-configuracion.service.ts ***!
    \********************************************************/

  /*! exports provided: MenuConfiguracionService */

  /***/
  function srcAppServicesMenuConfiguracionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuConfiguracionService", function () {
      return MenuConfiguracionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var MenuConfiguracionService = /*#__PURE__*/function () {
      function MenuConfiguracionService(http) {
        _classCallCheck(this, MenuConfiguracionService);

        this.http = http;
      }
      /**
       * Este metodo permite hacer la petición al archivo donde estan las opciones para el menú de
       * la vista de configuración
       */


      _createClass(MenuConfiguracionService, [{
        key: "getMenuOpts",
        value: function getMenuOpts() {
          return this.http.get('/assets/data/menuConfiguracion.json');
        }
        /**
         * Este método permite consultar las opciones que existen en el menú principal home.page.html
         */

      }, {
        key: "getMenuMain",
        value: function getMenuMain() {
          return this.http.get('/assets/data/menuPrincipal-prod.json');
        }
        /**
         * Este método permite consultar las opciones que existen en el menú de ejecución de
         * actividades
         */

      }, {
        key: "getMenuExceActivities",
        value: function getMenuExceActivities() {
          return this.http.get('/assets/data/menuExecuteActi.json');
        }
        /**
         * Este método permitre consultar las opciones de ayuda en el menú de ejecución de
         * actividades
         */

      }, {
        key: "getMenuHelpExceActivities",
        value: function getMenuHelpExceActivities() {
          return this.http.get('/assets/data/menuHelpExecuteActi.json');
        }
        /**
         * Este método permite consultar las opciones cuando se selecciona una visita
         */

      }, {
        key: "getMenuActivitySelected",
        value: function getMenuActivitySelected() {
          return this.http.get('/assets/data/menuVisitActivity.json');
        }
      }]);

      return MenuConfiguracionService;
    }();

    MenuConfiguracionService.ɵfac = function MenuConfiguracionService_Factory(t) {
      return new (t || MenuConfiguracionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    MenuConfiguracionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MenuConfiguracionService,
      factory: MenuConfiguracionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuConfiguracionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/storage.service.ts":
  /*!************************************!*\
    !*** ./src/app/storage.service.ts ***!
    \************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var StorageService = /*#__PURE__*/function () {
      function StorageService(storage) {
        _classCallCheck(this, StorageService);

        this.storage = storage;
      }

      _createClass(StorageService, [{
        key: "set",
        value: function set(key, value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var result;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.prev = 0;
                  _context4.next = 3;
                  return this.storage.set(key, value);

                case 3:
                  result = _context4.sent;
                  _context4.next = 9;
                  break;

                case 6:
                  _context4.prev = 6;
                  _context4.t0 = _context4["catch"](0);
                  result = false;

                case 9:
                  return _context4.abrupt("return", result !== false);

                case 10:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this, [[0, 6]]);
          }));
        }
      }, {
        key: "get",
        value: function get(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var result;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.prev = 0;
                  _context5.next = 3;
                  return this.storage.get(key);

                case 3:
                  result = _context5.sent;
                  _context5.next = 8;
                  break;

                case 6:
                  _context5.prev = 6;
                  _context5.t0 = _context5["catch"](0);

                case 8:
                  return _context5.abrupt("return", result);

                case 9:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this, [[0, 6]]);
          }));
        }
      }, {
        key: "remove",
        value: function remove(key) {
          this.storage.remove(key);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.storage.clear();
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]));
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map