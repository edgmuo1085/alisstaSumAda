function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~educa-select-register-event-select-register-event-module~select-register-event-select-regist~0dc7d568"], {
  /***/
  "./src/app/pages/educa/select-register-event/select-register-event-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/educa/select-register-event/select-register-event-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: SelectRegisterEventPageRoutingModule */

  /***/
  function srcAppPagesEducaSelectRegisterEventSelectRegisterEventRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectRegisterEventPageRoutingModule", function () {
      return SelectRegisterEventPageRoutingModule;
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


    var _select_register_event_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./select-register-event.page */
    "./src/app/pages/educa/select-register-event/select-register-event.page.ts");

    var routes = [{
      path: '',
      component: _select_register_event_page__WEBPACK_IMPORTED_MODULE_2__["SelectRegisterEventPage"]
    }, {
      path: 'registerEventManual',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | manual-event-register-manual-event-register-module */
        "default~educa-manual-event-register-manual-event-register-module~manual-event-register-manual-event-~10a14e10").then(__webpack_require__.bind(null,
        /*! ../manual-event-register/manual-event-register.module */
        "./src/app/pages/educa/manual-event-register/manual-event-register.module.ts")).then(function (m) {
          return m.ManualEventRegisterPageModule;
        });
      }
    }];

    var SelectRegisterEventPageRoutingModule = /*#__PURE__*/_createClass(function SelectRegisterEventPageRoutingModule() {
      _classCallCheck(this, SelectRegisterEventPageRoutingModule);
    });

    SelectRegisterEventPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectRegisterEventPageRoutingModule
    });
    SelectRegisterEventPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SelectRegisterEventPageRoutingModule_Factory(t) {
        return new (t || SelectRegisterEventPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectRegisterEventPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectRegisterEventPageRoutingModule, [{
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
  "./src/app/pages/educa/select-register-event/select-register-event.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/educa/select-register-event/select-register-event.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: SelectRegisterEventPageModule */

  /***/
  function srcAppPagesEducaSelectRegisterEventSelectRegisterEventModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectRegisterEventPageModule", function () {
      return SelectRegisterEventPageModule;
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


    var _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./select-register-event-routing.module */
    "./src/app/pages/educa/select-register-event/select-register-event-routing.module.ts");
    /* harmony import */


    var _select_register_event_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./select-register-event.page */
    "./src/app/pages/educa/select-register-event/select-register-event.page.ts");

    var SelectRegisterEventPageModule = /*#__PURE__*/_createClass(function SelectRegisterEventPageModule() {
      _classCallCheck(this, SelectRegisterEventPageModule);
    });

    SelectRegisterEventPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SelectRegisterEventPageModule
    });
    SelectRegisterEventPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SelectRegisterEventPageModule_Factory(t) {
        return new (t || SelectRegisterEventPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectRegisterEventPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SelectRegisterEventPageModule, {
        declarations: [_select_register_event_page__WEBPACK_IMPORTED_MODULE_5__["SelectRegisterEventPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectRegisterEventPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectRegisterEventPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _select_register_event_routing_module__WEBPACK_IMPORTED_MODULE_4__["SelectRegisterEventPageRoutingModule"]],
          declarations: [_select_register_event_page__WEBPACK_IMPORTED_MODULE_5__["SelectRegisterEventPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/educa/select-register-event/select-register-event.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/educa/select-register-event/select-register-event.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: SelectRegisterEventPage */

  /***/
  function srcAppPagesEducaSelectRegisterEventSelectRegisterEventPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectRegisterEventPage", function () {
      return SelectRegisterEventPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _services_event_event_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/event/event.service */
    "./src/app/services/event/event.service.ts");
    /* harmony import */


    var src_app_components_scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/scanner-qr/scanner-qr.component */
    "./src/app/components/scanner-qr/scanner-qr.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SelectRegisterEventPage_ion_card_title_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nombreEvento);
      }
    }
    /**
     * Este componente es el encargado de seleccionar la opción del registro
     */


    var SelectRegisterEventPage = /*#__PURE__*/function () {
      function SelectRegisterEventPage(cacheService, alertController, eventService, router, modalCtrl) {
        _classCallCheck(this, SelectRegisterEventPage);

        this.cacheService = cacheService;
        this.alertController = alertController;
        this.eventService = eventService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.swiperOpts = {
          allowSlidePrev: false,
          allowSlideNext: false
        };
        this.hiddenForm = false;
      }

      _createClass(SelectRegisterEventPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.nombreEvento = sessionStorage.nombreEvento;
        }
        /**
         * Cuando se selecciona QR, este abre la camara, valida que sea QR_CODE y manda la información del
         * código QR para posteriormente enviar el registro del código
         */

      }, {
        key: "codeQRRegister",
        value: function codeQRRegister() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var eventIdSelected, modal, result, info, dataUsuarioQR, fechaNacimiento, registroUsuarioAsistente;
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

                  this.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
                  return _context.abrupt("return");

                case 16:
                  dataUsuarioQR = JSON.parse(info);
                  fechaNacimiento = moment__WEBPACK_IMPORTED_MODULE_4__(dataUsuarioQR.fchnac || dataUsuarioQR.fchNac, 'DD/MM/YYYY');
                  registroUsuarioAsistente = {
                    strTipoIdentificacionEmpresa: dataUsuarioQR.tiEmpr,
                    strNumeroDocumentoEmpresa: dataUsuarioQR.numEmpr,
                    strRazonSocial: dataUsuarioQR.razonEmpr,
                    strTipoDocumentoEmpleado: dataUsuarioQR.tiAsistente,
                    strNumeroDocumentoEmpleado: dataUsuarioQR.numAsistente,
                    strNombreEmpleado: dataUsuarioQR.nomAsist,
                    FK_ID_Cargo: dataUsuarioQR.cargo,
                    FK_ID_Sexo: dataUsuarioQR.sexo,
                    dtmFechaNacimiento: fechaNacimiento.format('MM/DD/YYYY'),
                    strTelefono: dataUsuarioQR.tele,
                    strEmail: dataUsuarioQR.email,
                    FK_ID_Evento: eventIdSelected
                  };
                  this.registerUserQR(registroUsuarioAsistente);

                case 20:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         * La funcionalidad de este método es simplemente redireccionar a registerEventManual, dicha pagina estará el formulario
         * para su posterior consulta.
         */

      }, {
        key: "registerManual",
        value: function registerManual() {
          this.router.navigateByUrl('/u/consultEvent/selectRegisterEvent/registerEventManual');
        }
        /**
         * Método que permite enviar la petición al servicio para posteriormente realizar el registro.
         */

      }, {
        key: "registerUserQR",
        value: function registerUserQR(registroNuevoUsuarioAsistente) {
          var _this = this;

          this.eventService.registerResponsibleQR(registroNuevoUsuarioAsistente).subscribe(function (response) {
            _this.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
          }, function (err) {
            _this.confirmationRegister('Error.', 'Falló la inscripción del asistente al evento.');
          });
        }
        /**
         * Este es el método simplemente muestra la alerta para el registro.
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
      }]);

      return SelectRegisterEventPage;
    }();

    SelectRegisterEventPage.ɵfac = function SelectRegisterEventPage_Factory(t) {
      return new (t || SelectRegisterEventPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]));
    };

    SelectRegisterEventPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SelectRegisterEventPage,
      selectors: [["app-select-register-event"]],
      decls: 23,
      vars: 3,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding", "backgroundContent", 3, "hidden"], ["mode", "ios", 3, "options"], [4, "ngIf"], ["mode", "ios", "color", "primary", "expand", "block", 1, "btn", 3, "click"], ["mode", "ios", "color", "secondary", "expand", "block", 1, "btn", 3, "click"]],
      template: function SelectRegisterEventPage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Inscripci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-slides", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-slide");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Inscripci\xF3n de invitados");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SelectRegisterEventPage_ion_card_title_17_Template, 2, 1, "ion-card-title", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-card-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectRegisterEventPage_Template_ion_button_click_19_listener() {
            return ctx.codeQRRegister();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " C\xF3digo QR ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SelectRegisterEventPage_Template_ion_button_click_21_listener() {
            return ctx.registerManual();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Manual ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.hiddenForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.swiperOpts);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombreEvento);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardSubtitle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardTitle"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\nion-slides[_ngcontent-%COMP%], ion-slide[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2VkdWNhL3NlbGVjdC1yZWdpc3Rlci1ldmVudC9zZWxlY3QtcmVnaXN0ZXItZXZlbnQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9lZHVjYS9zZWxlY3QtcmVnaXN0ZXItZXZlbnQvc2VsZWN0LXJlZ2lzdGVyLWV2ZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBREVNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQVI7QURFTTtFQUNFLFlBQUE7QUNBUjtBRE1BO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDSEY7QURNQTs7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWR1Y2Evc2VsZWN0LXJlZ2lzdGVyLWV2ZW50L3NlbGVjdC1yZWdpc3Rlci1ldmVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgICB9XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pb24tc2xpZGVzLFxuaW9uLXNsaWRlIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbmlvbi1zbGlkZXMsXG5pb24tc2xpZGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectRegisterEventPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-select-register-event',
          templateUrl: './select-register-event.page.html',
          styleUrls: ['./select-register-event.page.scss']
        }]
      }], function () {
        return [{
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _services_event_event_service__WEBPACK_IMPORTED_MODULE_6__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~educa-select-register-event-select-register-event-module~select-register-event-select-regist~0dc7d568-es5.js.map