function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~educa-manual-event-register-manual-event-register-module~manual-event-register-manual-event-~10a14e10"], {
  /***/
  "./src/app/pages/educa/manual-event-register/manual-event-register-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/educa/manual-event-register/manual-event-register-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ManualEventRegisterPageRoutingModule */

  /***/
  function srcAppPagesEducaManualEventRegisterManualEventRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManualEventRegisterPageRoutingModule", function () {
      return ManualEventRegisterPageRoutingModule;
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


    var _manual_event_register_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./manual-event-register.page */
    "./src/app/pages/educa/manual-event-register/manual-event-register.page.ts");

    var routes = [{
      path: '',
      component: _manual_event_register_page__WEBPACK_IMPORTED_MODULE_2__["ManualEventRegisterPage"]
    }, {
      path: 'infoRegisterUserManual',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | info-register-event-manual-info-register-event-manual-module */
        "default~educa-info-register-event-manual-info-register-event-manual-module~info-register-event-manua~14912bf9").then(__webpack_require__.bind(null,
        /*! ../info-register-event-manual/info-register-event-manual.module */
        "./src/app/pages/educa/info-register-event-manual/info-register-event-manual.module.ts")).then(function (m) {
          return m.InfoRegisterEventManualPageModule;
        });
      }
    }];

    var ManualEventRegisterPageRoutingModule = /*#__PURE__*/_createClass(function ManualEventRegisterPageRoutingModule() {
      _classCallCheck(this, ManualEventRegisterPageRoutingModule);
    });

    ManualEventRegisterPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ManualEventRegisterPageRoutingModule
    });
    ManualEventRegisterPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ManualEventRegisterPageRoutingModule_Factory(t) {
        return new (t || ManualEventRegisterPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManualEventRegisterPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualEventRegisterPageRoutingModule, [{
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
  "./src/app/pages/educa/manual-event-register/manual-event-register.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/educa/manual-event-register/manual-event-register.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ManualEventRegisterPageModule */

  /***/
  function srcAppPagesEducaManualEventRegisterManualEventRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManualEventRegisterPageModule", function () {
      return ManualEventRegisterPageModule;
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


    var _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./manual-event-register-routing.module */
    "./src/app/pages/educa/manual-event-register/manual-event-register-routing.module.ts");
    /* harmony import */


    var _manual_event_register_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./manual-event-register.page */
    "./src/app/pages/educa/manual-event-register/manual-event-register.page.ts");

    var ManualEventRegisterPageModule = /*#__PURE__*/_createClass(function ManualEventRegisterPageModule() {
      _classCallCheck(this, ManualEventRegisterPageModule);
    });

    ManualEventRegisterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ManualEventRegisterPageModule
    });
    ManualEventRegisterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ManualEventRegisterPageModule_Factory(t) {
        return new (t || ManualEventRegisterPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualEventRegisterPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ManualEventRegisterPageModule, {
        declarations: [_manual_event_register_page__WEBPACK_IMPORTED_MODULE_5__["ManualEventRegisterPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualEventRegisterPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManualEventRegisterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _manual_event_register_routing_module__WEBPACK_IMPORTED_MODULE_4__["ManualEventRegisterPageRoutingModule"]],
          declarations: [_manual_event_register_page__WEBPACK_IMPORTED_MODULE_5__["ManualEventRegisterPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/educa/manual-event-register/manual-event-register.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/educa/manual-event-register/manual-event-register.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: ManualEventRegisterPage */

  /***/
  function srcAppPagesEducaManualEventRegisterManualEventRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManualEventRegisterPage", function () {
      return ManualEventRegisterPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/event/event.service */
    "./src/app/services/event/event.service.ts");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_components_scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/scanner-qr/scanner-qr.component */
    "./src/app/components/scanner-qr/scanner-qr.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ManualEventRegisterPage_ion_label_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nombreEvento);
      }
    }

    function ManualEventRegisterPage_ion_select_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r3.SiglaDocumento);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r3.strTipoDocumento);
      }
    }

    function ManualEventRegisterPage_ion_select_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r4.SiglaDocumento);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r4.strTipoDocumento);
      }
    }

    var ManualEventRegisterPage = /*#__PURE__*/function () {
      function ManualEventRegisterPage(formbuilder, alertController, eventService, cacheService, router, modalCtrl) {
        _classCallCheck(this, ManualEventRegisterPage);

        this.formbuilder = formbuilder;
        this.alertController = alertController;
        this.eventService = eventService;
        this.cacheService = cacheService;
        this.router = router;
        this.modalCtrl = modalCtrl; // Es un array con los diferentes tipos de documento que se permiten seleccionar

        this.documentsType = [];
        this.hiddenForm = false;
      }

      _createClass(ManualEventRegisterPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nombreEvento = sessionStorage.nombreEvento;
          this.createFormConsultUser();
          this.getDocumentsTypeUser();
        }
        /**
         * Método que permite crear el formulario para la consulta del invitado
         */

      }, {
        key: "createFormConsultUser",
        value: function createFormConsultUser() {
          this.formConsultUser = this.formbuilder.group({
            identificationTypeCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            identificationNumberCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            identificationTypeUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            identificationNumberUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
        /**
         * Este método permite ir a consultar el servicio cuales son los tipos de documentos
         * existentes en la BD
         */

      }, {
        key: "getDocumentsTypeUser",
        value: function getDocumentsTypeUser() {
          var _this = this;

          this.eventService.getDocumentType().subscribe(function (response) {
            _this.documentsType = response.Documentos;
          });
        }
        /**
         * El método search como su nombre lo dice es buscar de acuerdo a la información ingresada.
         * Aqui se deben tener en cuenta dos cosas:
         * 1. si efectivamente el servicio responde exitoso (true) es por que trajo información del invitado
         * esto quiere decir que se guarda dicha información en el sessionStorage cuyo nombre es infoResponsibleManualEvent.
         * Esa información servirá para armar el formulario de registro manual cuandro trae datos
         * 2. Si el servicio responde un error (417), esto quiere indicar que no esta invitado y que se debe escribir
         * todos los datos en en registro manual y asi lanzar la peticion.
         * Por eso en la variable infoResponsibleManualEvent se guarda el err.error equivalente a 'null'.
         */

      }, {
        key: "search",
        value: function search() {
          var _this2 = this;

          if (this.formConsultUser.valid) {
            var eventIdSelected = this.cacheService.newRegisterEvent.FK_ID_Evento;
            var documentoAsistente = this.formConsultUser.value.identificationNumberUser;
            this.eventService.getSearchResponsibleEventManual(documentoAsistente, eventIdSelected).subscribe(function (response) {
              var infoResponsibleManualEvent = JSON.stringify(response);
              sessionStorage.infoResponsibleManualEvent = infoResponsibleManualEvent;

              _this2.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual/infoRegisterUserManual');
            }, function (err) {
              sessionStorage.infoResponsibleManualEvent = err.error;

              _this2.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual/infoRegisterUserManual');
            });
          } else {
            this.Alert();
          }
        }
        /**
         * Desde esta vista tambien se pueden registrar por medio del QR, por ende este metodo,
         * abre la camara, lee el QR, arma el objeto y lanza la petición para realizar el registro del invitado
         */

      }, {
        key: "openScanQr",
        value: function openScanQr() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var eventIdSelected, modal, result, info, dataUsuarioQR, registroUsuarioAsistente;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.hiddenForm = true;
                  _context.next = 3;
                  return this.cacheService.newRegisterEvent.FK_ID_Evento.toString();

                case 3:
                  eventIdSelected = _context.sent;
                  _context.next = 6;
                  return this.modalCtrl.create({
                    component: src_app_components_scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_7__["ScannerQrComponent"]
                  });

                case 6:
                  modal = _context.sent;
                  modal.present();
                  _context.next = 10;
                  return modal.onWillDismiss();

                case 10:
                  result = _context.sent;
                  this.hiddenForm = false;
                  info = result.data.response;

                  if (info) {
                    _context.next = 16;
                    break;
                  }

                  this.confirmationRegister('Error.', 'Falló la inscripción del asistente al evento.');
                  return _context.abrupt("return");

                case 16:
                  dataUsuarioQR = JSON.parse(info);
                  registroUsuarioAsistente = {
                    strTipoIdentificacionEmpresa: dataUsuarioQR.tiEmpr,
                    strNumeroDocumentoEmpresa: dataUsuarioQR.numEmpr,
                    strRazonSocial: dataUsuarioQR.razonEmpr,
                    strTipoDocumentoEmpleado: dataUsuarioQR.tiAsistente,
                    strNumeroDocumentoEmpleado: dataUsuarioQR.tiAsistente,
                    strNombreEmpleado: dataUsuarioQR.numAsistente,
                    FK_ID_Cargo: dataUsuarioQR.cargo,
                    FK_ID_Sexo: dataUsuarioQR.sexo,
                    dtmFechaNacimiento: dataUsuarioQR.fchnac,
                    strTelefono: dataUsuarioQR.tele,
                    strEmail: dataUsuarioQR.email,
                    FK_ID_Evento: eventIdSelected
                  };
                  this.registerUserQR(registroUsuarioAsistente);

                case 19:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         *
         * Este metodo es el encargado de lanzar la petición para realizar el registro como tal
         */

      }, {
        key: "registerUserQR",
        value: function registerUserQR(registroNuevoUsuarioAsistente) {
          var _this3 = this;

          this.eventService.registerResponsibleQR(registroNuevoUsuarioAsistente).subscribe(function (response) {
            _this3.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
          }, function (err) {
            _this3.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
          });
        }
        /**
         * Este metodo basicamente muestra la alerta de exito o fallido segun sea el caso al momento de
         * ejecutar el servicio
         */

      }, {
        key: "confirmationRegister",
        value: function confirmationRegister(resultadoAlerta, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.alertController.create({
                    header: resultadoAlerta,
                    mode: 'ios',
                    message: mensaje,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context2.sent;
                  _context2.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
        /**
         * Este muestra la alerta cuando se lanza la petición y hay algun campo en el formulario vacio.
         */

      }, {
        key: "Alert",
        value: function Alert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.alertController.create({
                    header: 'Atención',
                    message: 'Todos los campos son obligatorios.',
                    buttons: ['ACEPTAR']
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
      }]);

      return ManualEventRegisterPage;
    }();

    ManualEventRegisterPage.ɵfac = function ManualEventRegisterPage_Factory(t) {
      return new (t || ManualEventRegisterPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]));
    };

    ManualEventRegisterPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ManualEventRegisterPage,
      selectors: [["app-manual-event-register"]],
      decls: 52,
      vars: 5,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding", "backgroundContent", 3, "hidden"], [1, "ion-text-center"], ["class", "tituloEvento", 4, "ngIf"], [1, "formulario", 3, "formGroup"], [1, "ion-text-center", "divTitulo"], ["lines", "none", "mode", "ios"], ["name", "business", "color", "primary", "slot", "start"], ["lines", "none"], ["position", "stacked"], ["formControlName", "identificationTypeCompany", "placeholder", "Tipo de identificaci\xF3n", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "placeholder", "Tipo identificaci\xF3n", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "identificationNumberCompany", "placeholder", "N\xFAmero de identificaci\xF3n", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["name", "person", "color", "primary", "slot", "start"], ["formControlName", "identificationTypeUser", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "placeholder", "Tipo identificaci\xF3n", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "identificationNumberUser", "placeholder", "N\xFAmero de identificaci\xF3n", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["size", "3"], ["size", "6"], ["mode", "ios", "expand", "block", 1, "btn", 3, "click"], ["vertical", "bottom", "horizontal", "end", "color", "secondary", "slot", "fixed"], ["color", "secondary"], ["name", "qr-code-outline", 3, "click"], [1, "tituloEvento"], [3, "value"]],
      template: function ManualEventRegisterPage_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Registro Manual");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ManualEventRegisterPage_ion_label_12_Template, 2, 1, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Datos Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Tipo de identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, ManualEventRegisterPage_ion_select_option_23_Template, 2, 2, "ion-select-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "N\xFAmero identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "ion-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "ion-icon", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Datos Asistente");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tipo de identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ManualEventRegisterPage_ion_select_option_37_Template, 2, 2, "ion-select-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-item", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "N\xFAmero identificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "ion-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-col", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualEventRegisterPage_Template_ion_button_click_46_listener() {
            return ctx.search();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " Consultar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-col", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-fab", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-fab-button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-icon", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManualEventRegisterPage_Template_ion_icon_click_51_listener() {
            return ctx.openScanQr();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hiddenForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombreEvento);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formConsultUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.documentsType);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.documentsType);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelectOption"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\n.tituloEvento[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: bolder;\n}\n.formulario[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  border: 1px solid #95a6b1;\n  padding: 5px;\n  margin-top: 30px;\n  background: white;\n  padding-bottom: 25px;\n}\nion-label[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2VkdWNhL21hbnVhbC1ldmVudC1yZWdpc3Rlci9tYW51YWwtZXZlbnQtcmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZHVjYS9tYW51YWwtZXZlbnQtcmVnaXN0ZXIvbWFudWFsLWV2ZW50LXJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBREVNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQVI7QURFTTtFQUNFLFlBQUE7QUNBUjtBRE1BO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSEY7QURNQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ0hGO0FETUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0hGO0FETUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZHVjYS9tYW51YWwtZXZlbnQtcmVnaXN0ZXIvbWFudWFsLWV2ZW50LXJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgIH1cbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi50aXR1bG9FdmVudG8ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk1YTZiMTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi50aXR1bG9FdmVudG8ge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5mb3JtdWxhcmlvIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk1YTZiMTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManualEventRegisterPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-manual-event-register',
          templateUrl: './manual-event-register.page.html',
          styleUrls: ['./manual-event-register.page.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _services_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~educa-manual-event-register-manual-event-register-module~manual-event-register-manual-event-~10a14e10-es5.js.map