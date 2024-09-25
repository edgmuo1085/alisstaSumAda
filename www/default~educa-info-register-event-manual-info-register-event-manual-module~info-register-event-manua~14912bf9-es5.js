function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~educa-info-register-event-manual-info-register-event-manual-module~info-register-event-manua~14912bf9"], {
  /***/
  "./src/app/pages/educa/info-register-event-manual/info-register-event-manual-routing.module.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/pages/educa/info-register-event-manual/info-register-event-manual-routing.module.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: InfoRegisterEventManualPageRoutingModule */

  /***/
  function srcAppPagesEducaInfoRegisterEventManualInfoRegisterEventManualRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoRegisterEventManualPageRoutingModule", function () {
      return InfoRegisterEventManualPageRoutingModule;
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


    var _info_register_event_manual_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./info-register-event-manual.page */
    "./src/app/pages/educa/info-register-event-manual/info-register-event-manual.page.ts");

    var routes = [{
      path: '',
      component: _info_register_event_manual_page__WEBPACK_IMPORTED_MODULE_2__["InfoRegisterEventManualPage"]
    }];

    var InfoRegisterEventManualPageRoutingModule = /*#__PURE__*/_createClass(function InfoRegisterEventManualPageRoutingModule() {
      _classCallCheck(this, InfoRegisterEventManualPageRoutingModule);
    });

    InfoRegisterEventManualPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InfoRegisterEventManualPageRoutingModule
    });
    InfoRegisterEventManualPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InfoRegisterEventManualPageRoutingModule_Factory(t) {
        return new (t || InfoRegisterEventManualPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfoRegisterEventManualPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoRegisterEventManualPageRoutingModule, [{
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
  "./src/app/pages/educa/info-register-event-manual/info-register-event-manual.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/educa/info-register-event-manual/info-register-event-manual.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: MY_FORMATS, InfoRegisterEventManualPageModule */

  /***/
  function srcAppPagesEducaInfoRegisterEventManualInfoRegisterEventManualModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () {
      return MY_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoRegisterEventManualPageModule", function () {
      return InfoRegisterEventManualPageModule;
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


    var _info_register_event_manual_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./info-register-event-manual-routing.module */
    "./src/app/pages/educa/info-register-event-manual/info-register-event-manual-routing.module.ts");
    /* harmony import */


    var _info_register_event_manual_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./info-register-event-manual.page */
    "./src/app/pages/educa/info-register-event-manual/info-register-event-manual.page.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/fesm2015/material-moment-adapter.js");

    var MY_FORMATS = {
      parse: {
        dateInput: 'LL'
      },
      display: {
        dateInput: 'LL',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    };

    var InfoRegisterEventManualPageModule = /*#__PURE__*/_createClass(function InfoRegisterEventManualPageModule() {
      _classCallCheck(this, InfoRegisterEventManualPageModule);
    });

    InfoRegisterEventManualPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: InfoRegisterEventManualPageModule
    });
    InfoRegisterEventManualPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function InfoRegisterEventManualPageModule_Factory(t) {
        return new (t || InfoRegisterEventManualPageModule)();
      },
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"],
        useValue: 'es-ES'
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"],
        deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"],
        useValue: MY_FORMATS
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _info_register_event_manual_routing_module__WEBPACK_IMPORTED_MODULE_4__["InfoRegisterEventManualPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InfoRegisterEventManualPageModule, {
        declarations: [_info_register_event_manual_page__WEBPACK_IMPORTED_MODULE_5__["InfoRegisterEventManualPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _info_register_event_manual_routing_module__WEBPACK_IMPORTED_MODULE_4__["InfoRegisterEventManualPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoRegisterEventManualPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _info_register_event_manual_routing_module__WEBPACK_IMPORTED_MODULE_4__["InfoRegisterEventManualPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]],
          declarations: [_info_register_event_manual_page__WEBPACK_IMPORTED_MODULE_5__["InfoRegisterEventManualPage"]],
          providers: [{
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"],
            useValue: 'es-ES'
          }, {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["DateAdapter"],
            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MomentDateAdapter"],
            deps: [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_7__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
          }, {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DATE_FORMATS"],
            useValue: MY_FORMATS
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/educa/info-register-event-manual/info-register-event-manual.page.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/educa/info-register-event-manual/info-register-event-manual.page.ts ***!
    \*******************************************************************************************/

  /*! exports provided: InfoRegisterEventManualPage */

  /***/
  function srcAppPagesEducaInfoRegisterEventManualInfoRegisterEventManualPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InfoRegisterEventManualPage", function () {
      return InfoRegisterEventManualPage;
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


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_event_event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/event/event.service */
    "./src/app/services/event/event.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    function InfoRegisterEventManualPage_h3_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nombreEvento);
      }
    }

    function InfoRegisterEventManualPage_form_13_ion_select_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r5.infoUser.strTipoIdentificacionEmpresa);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r5.infoUser.strTipoIdentificacionEmpresa);
      }
    }

    function InfoRegisterEventManualPage_form_13_ion_select_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r6.infoUser.strTipoDocumentoEmpleado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.infoUser.strTipoDocumentoEmpleado);
      }
    }

    function InfoRegisterEventManualPage_form_13_ion_select_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sex_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", sex_r10.FK_ID_Sexo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sex_r10.strSexo);
      }
    }

    function InfoRegisterEventManualPage_form_13_ion_select_55_ion_select_option_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var charge_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", charge_r12.FK_ID_Cargo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](charge_r12.strCargo);
      }
    }

    function InfoRegisterEventManualPage_form_13_ion_select_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, InfoRegisterEventManualPage_form_13_ion_select_55_ion_select_option_1_Template, 2, 2, "ion-select-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r9.typeCharges);
      }
    }

    function InfoRegisterEventManualPage_form_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Informaci\xF3n Empleador");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Tipo Identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InfoRegisterEventManualPage_form_13_ion_select_option_11_Template, 2, 2, "ion-select-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "N\xFAmero identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Raz\xF3n Social");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Informaci\xF3n Empleado");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Tipo Identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, InfoRegisterEventManualPage_form_13_ion_select_option_30_Template, 2, 2, "ion-select-option", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "N\xFAmero identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Nombre Completo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ion-input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Sexo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, InfoRegisterEventManualPage_form_13_ion_select_option_43_Template, 2, 2, "ion-select-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Edad");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-datepicker-toggle", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-datepicker", null, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Cargo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, InfoRegisterEventManualPage_form_13_ion_select_55_Template, 2, 1, "ion-select", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Tel\xE9fono");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "ion-input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Correo Electr\xF3nico");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "ion-input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.formInfoUserRegisterEvent);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.infoUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.infoUser);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.typeSex);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.infoUser);
      }
    }

    function InfoRegisterEventManualPage_form_14_ion_select_option_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r18 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r18.SiglaDocumento);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r18.strTipoDocumento);
      }
    }

    function InfoRegisterEventManualPage_form_14_ion_select_option_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r19 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", type_r19.SiglaDocumento);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](type_r19.strTipoDocumento);
      }
    }

    function InfoRegisterEventManualPage_form_14_ion_select_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var sex_r20 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", sex_r20.FK_ID_Sexo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](sex_r20.strSexo);
      }
    }

    function InfoRegisterEventManualPage_form_14_ion_select_option_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var charge_r21 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", charge_r21.FK_ID_Cargo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](charge_r21.strCargo);
      }
    }

    function InfoRegisterEventManualPage_form_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Informaci\xF3n Empleador");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Tipo Identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-select", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, InfoRegisterEventManualPage_form_14_ion_select_option_11_Template, 2, 2, "ion-select-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "N\xFAmero identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Raz\xF3n Social");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Informaci\xF3n Empleado");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Tipo Identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-select", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, InfoRegisterEventManualPage_form_14_ion_select_option_30_Template, 2, 2, "ion-select-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "N\xFAmero identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "ion-input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Nombre Completo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ion-input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Sexo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, InfoRegisterEventManualPage_form_14_ion_select_option_43_Template, 2, 2, "ion-select-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Fecha de nacimiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-form-field", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "mat-datepicker-toggle", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-datepicker", null, 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Cargo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-select", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](56, InfoRegisterEventManualPage_form_14_ion_select_option_56_Template, 2, 2, "ion-select-option", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Tel\xE9fono");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "ion-input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-item", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Correo Electr\xF3nico");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "ion-input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](51);

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.formInfoUserRegisterEventEmpty);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.documentsType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.documentsType);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.typeSex);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.typeCharges);
      }
    }

    function InfoRegisterEventManualPage_ion_grid_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-col", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InfoRegisterEventManualPage_ion_grid_15_Template_ion_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23);

          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r22.registerResponsible(ctx_r22.formInfoUserRegisterEvent);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Registrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-col", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function InfoRegisterEventManualPage_ion_grid_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-col", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function InfoRegisterEventManualPage_ion_grid_16_Template_ion_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r24.registerResponsible(ctx_r24.formInfoUserRegisterEventEmpty);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Registrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-col", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var InfoRegisterEventManualPage = /*#__PURE__*/function () {
      function InfoRegisterEventManualPage(cacheService, eventService, router, alertController, formBuilder) {
        _classCallCheck(this, InfoRegisterEventManualPage);

        this.cacheService = cacheService;
        this.eventService = eventService;
        this.router = router;
        this.alertController = alertController;
        this.formBuilder = formBuilder;
        /**
         * Almacena todos los documentos que son permitidos al momento de registrar un asistente
         * (CC, NIT, CE) etc.
         */

        this.documentsType = [];
        /**
         * Almacena los diferentes tipos de cargos que posee la herramienta, por el momento son 3
         * Directivo, RESPONSABLE SGSST, TRABAJADOR
         */

        this.typeCharges = [];
        /**
         * Array de generos, Masculino y femenino
         */

        this.typeSex = [];
      }
      /**
       * Este metodo tiene varias cosas a tener en cuenta, las cuales son:
       * 1. Carga los documentos, los tipos de cargo y los sexos al momento de cargar la pagina.
       * 2. valida que valor viene en la variable sessionStorage.infoResponsibleManualEvent para posteriormente
       *    armar el formulario. Si viene null lo arma vacio si viene con datos crea el formulario con datos y
       *    bloquea unos campos que no son editables.
       *
       */


      _createClass(InfoRegisterEventManualPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getDocumentsTypeUser();
          this.getTypesCharge();
          this.getTypesSex();

          if (sessionStorage.infoResponsibleManualEvent === 'null') {
            this.createFormInfoUserRegister();
            this.isResponsibleEmpty = true;
          } else {
            this.isResponsibleEmpty = false;
            this.infoUser = JSON.parse(sessionStorage.infoResponsibleManualEvent);
            this.createFormInfoUserRegisterWithInformation();
            setTimeout(function () {
              _this.formInfoUserRegisterEvent.patchValue({
                tipoDocEmp: _this.infoUser.strTipoIdentificacionEmpresa,
                documentoEmp: _this.infoUser.strNumeroDocumentoEmpresa,
                razonSocial: _this.infoUser.strRazonSocial,
                tipoDoc: _this.infoUser.strTipoDocumentoEmpleado,
                idPersona: _this.infoUser.strNumeroDocumentoEmpleado,
                nombre: _this.infoUser.strNombreEmpleado,
                cargo: _this.infoUser.FK_ID_Cargo,
                // edad: this.infoUser.dtmFechaNacimiento.toString().split('T')[0],
                edad: _this.infoUser.dtmFechaNacimiento,
                sexo: _this.infoUser.FK_ID_Sexo,
                telefono: _this.infoUser.strTelefono,
                email: _this.infoUser.strEmail
              });
            }, 1000);
          }

          this.nombreEvento = sessionStorage.nombreEvento;
        }
      }, {
        key: "createFormInfoUserRegister",
        value: function createFormInfoUserRegister() {
          this.formInfoUserRegisterEventEmpty = this.formBuilder.group({
            tipoDocEmp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            documentoEmp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            razonSocial: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            tipoDoc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            idPersona: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            sexo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            edad: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            cargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            telefono: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{6,}$')]
          });
        }
      }, {
        key: "createFormInfoUserRegisterWithInformation",
        value: function createFormInfoUserRegisterWithInformation() {
          this.formInfoUserRegisterEvent = this.formBuilder.group({
            tipoDocEmp: [{
              value: '',
              disabled: true
            }],
            documentoEmp: [{
              value: '',
              disabled: true
            }],
            razonSocial: [{
              value: '',
              disabled: true
            }],
            tipoDoc: [{
              value: '',
              disabled: true
            }],
            idPersona: [{
              value: '',
              disabled: true
            }],
            nombre: [{
              value: '',
              disabled: true
            }],
            sexo: [''],
            edad: [''],
            cargo: [''],
            telefono: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*.-]).{6,}$')]
          });
        }
        /**
         * Metodo para obtener los documentos permitidos para la selección de tipo de documentos
         */

      }, {
        key: "getDocumentsTypeUser",
        value: function getDocumentsTypeUser() {
          var _this2 = this;

          this.eventService.getDocumentType().subscribe(function (response) {
            _this2.documentsType = response.Documentos;
          });
        }
        /**
         * Metodo para obtener los cargos permitidos para la selección de cargo
         */

      }, {
        key: "getTypesCharge",
        value: function getTypesCharge() {
          var _this3 = this;

          this.eventService.getDocumentType().subscribe(function (response) {
            _this3.typeCharges = response.Cargos;
          });
        }
        /**
         * Metodo para obtener el tipo de sexo permitidos
         */

      }, {
        key: "getTypesSex",
        value: function getTypesSex() {
          var _this4 = this;

          this.eventService.getDocumentType().subscribe(function (response) {
            _this4.typeSex = response.Sexos;
          });
        }
        /**
         *
         * Este metodo recibe el formulario con el fin de armar el objeto que se necesita para realizar el registro
         * valida si la variable isResponsibleEmpty llega con algun dato o no y luego lanza el metodo para
         * el registro como tal.
         */

      }, {
        key: "registerResponsible",
        value: function registerResponsible(newResponsible) {
          var eventoId = this.cacheService.newRegisterEvent.FK_ID_Evento.toString();

          if (this.isResponsibleEmpty) {
            var fechaNacimiento = newResponsible.controls.edad.value.toISOString().split('T')[0];
            var newRegister = {
              strTipoIdentificacionEmpresa: newResponsible.value.tipoDocEmp,
              strNumeroDocumentoEmpresa: newResponsible.value.documentoEmp,
              strTipoDocumentoEmpleado: newResponsible.value.tipoDoc,
              strNumeroDocumentoEmpleado: newResponsible.value.idPersona,
              strNombreEmpleado: newResponsible.value.nombre,
              dtmFechaNacimiento: fechaNacimiento,
              FK_ID_Sexo: newResponsible.value.sexo,
              strTelefono: newResponsible.value.telefono,
              FK_ID_Cargo: newResponsible.value.cargo,
              FK_ID_Evento: eventoId,
              strRazonSocial: newResponsible.value.razonSocial,
              strEmail: newResponsible.value.email
            };
            this.registerNewResponsibleWhenIsEmpty(newRegister);
          } else {
            var documentTypeCompany = this.validateDocumentType(newResponsible.controls.tipoDocEmp.value);
            var _newRegister = {
              strTipoIdentificacionEmpresa: documentTypeCompany,
              strNumeroDocumentoEmpresa: newResponsible.controls.documentoEmp.value,
              strTipoDocumentoEmpleado: newResponsible.controls.tipoDoc.value,
              strNumeroDocumentoEmpleado: newResponsible.controls.idPersona.value,
              strNombreEmpleado: newResponsible.controls.nombre.value,
              dtmFechaNacimiento: newResponsible.value.edad,
              FK_ID_Sexo: newResponsible.value.sexo,
              strTelefono: newResponsible.value.telefono,
              FK_ID_Cargo: newResponsible.value.cargo,
              FK_ID_Evento: eventoId,
              strRazonSocial: newResponsible.controls.razonSocial.value,
              strEmail: newResponsible.value.email
            };
            this.registerNewResponsibleWhenIsEmpty(_newRegister);
          }
        }
        /**
         * Este metodo lanza el registro como tal del invitado al evento.
         */

      }, {
        key: "registerNewResponsibleWhenIsEmpty",
        value: function registerNewResponsibleWhenIsEmpty(newResponsibleEvent) {
          var _this5 = this;

          this.eventService.registerResponsibleManual(newResponsibleEvent).subscribe(function (response) {
            _this5.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');

            _this5.router.navigateByUrl('u/consultEvent/selectRegisterEvent');
          }, function (err) {
            _this5.confirmationRegister('Fallido.', 'No se pudo realizar el registro del asistente al evento');
          });
        }
        /**
         *
         * Este metodo se encarga de validar el tipo del documento para que no exista un error cuando
         * consultan la información que viene del asistente, puede que no venga con el dato como tal, ejemplo
         * NIT y no NI, como se reconoce en la BD
         */

      }, {
        key: "validateDocumentType",
        value: function validateDocumentType(value) {
          switch (value) {
            case 'NIT':
              return 'NI';
              break;

            case 'CÉDULA DE CIUDADANIA':
              return 'CC';
              break;

            case 'CÉDULA DE EXTRANJERÍA':
              return 'CE';
              break;

            case 'NUIP':
              return 'NU';
              break;

            case 'PASAPORTE':
              return 'PA';
              break;

            case 'TARJETA DE IDENTIDAD':
              return 'ti';
              break;

            case 'PERMISO ESPECIAL DE PERMANENCIA':
              return 'PE';
              break;

            default:
              break;
          }
        }
        /**
         * Alerta que confirma el exito o fallido del registro manual
         */

      }, {
        key: "confirmationRegister",
        value: function confirmationRegister(resultadoAlerta, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.alertController.create({
                    header: resultadoAlerta,
                    mode: 'ios',
                    message: mensaje,
                    buttons: ['ACEPTAR']
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
      }]);

      return InfoRegisterEventManualPage;
    }();

    InfoRegisterEventManualPage.ɵfac = function InfoRegisterEventManualPage_Factory(t) {
      return new (t || InfoRegisterEventManualPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    InfoRegisterEventManualPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: InfoRegisterEventManualPage,
      selectors: [["app-info-register-event-manual"]],
      decls: 17,
      vars: 5,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding", "backgroundContent"], [1, "ion-text-center"], [4, "ngIf"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["mode", "ios"], ["lines", "none"], ["position", "stacked"], ["formControlName", "tipoDocEmp", "interface", "action-sheet", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [3, "value", 4, "ngIf"], ["formControlName", "documentoEmp", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "razonSocial", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "tipoDoc", "interface", "action-sheet", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "idPersona", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "nombre", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "sexo", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "placeholder", "Sexo", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [3, "value", 4, "ngFor", "ngForOf"], [1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1", 2, "width", "100%"], ["matInput", "", "formControlName", "edad", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["formControlName", "cargo", "class", "bg-light mt-3 rounded pl-1 pr-1", "placeholder", "Cargo", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", 4, "ngIf"], ["formControlName", "telefono", "placeholder", "Tel\xE9fono", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["formControlName", "email", "placeholder", "Correo electr\xF3nico", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [3, "value"], ["formControlName", "cargo", "placeholder", "Cargo", "mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], ["size", "3"], ["size", "6"], ["color", "primary", "expand", "block", 1, "btn", 3, "click"]],
      template: function InfoRegisterEventManualPage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, InfoRegisterEventManualPage_h3_12_Template, 2, 1, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, InfoRegisterEventManualPage_form_13_Template, 64, 7, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, InfoRegisterEventManualPage_form_14_Template, 65, 7, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, InfoRegisterEventManualPage_ion_grid_15_Template, 7, 0, "ion-grid", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, InfoRegisterEventManualPage_ion_grid_16_Template, 7, 0, "ion-grid", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nombreEvento);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUser);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.infoUser);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\nion-card[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\nion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  padding: 5px;\n}\nion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%] {\n  padding: 5px;\n  margin-top: 10pxs;\n}\nion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0px;\n  padding-bottom: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2VkdWNhL2luZm8tcmVnaXN0ZXItZXZlbnQtbWFudWFsL2luZm8tcmVnaXN0ZXItZXZlbnQtbWFudWFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWR1Y2EvaW5mby1yZWdpc3Rlci1ldmVudC1tYW51YWwvaW5mby1yZWdpc3Rlci1ldmVudC1tYW51YWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FETUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIRjtBRE1BO0VBQ0UsbUJBQUE7QUNIRjtBRElFO0VBQ0UsWUFBQTtBQ0ZKO0FESUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNGSjtBRElFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZHVjYS9pbmZvLXJlZ2lzdGVyLWV2ZW50LW1hbnVhbC9pbmZvLXJlZ2lzdGVyLWV2ZW50LW1hbnVhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgICB9XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIGlvbi1jYXJkLXRpdGxlIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gIH1cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweHM7XG4gIH1cbiAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY2FyZCBpb24tY2FyZC10aXRsZSB7XG4gIHBhZGRpbmc6IDVweDtcbn1cbmlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweHM7XG59XG5pb24tY2FyZCBpb24tY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfoRegisterEventManualPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-info-register-event-manual',
          templateUrl: './info-register-event-manual.page.html',
          styleUrls: ['./info-register-event-manual.page.scss']
        }]
      }], function () {
        return [{
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]
        }, {
          type: _services_event_event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=default~educa-info-register-event-manual-info-register-event-manual-module~info-register-event-manua~14912bf9-es5.js.map