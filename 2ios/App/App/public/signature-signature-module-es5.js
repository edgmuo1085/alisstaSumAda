function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signature-signature-module"], {
  /***/
  "./src/app/pages/companies/signature/signature-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/companies/signature/signature-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SignaturePageRoutingModule */

  /***/
  function _src_app_pages_companies_signature_signatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignaturePageRoutingModule", function () {
      return SignaturePageRoutingModule;
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


    var _signature_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./signature.page */
    "./src/app/pages/companies/signature/signature.page.ts");

    var routes = [{
      path: '',
      component: _signature_page__WEBPACK_IMPORTED_MODULE_2__["SignaturePage"]
    }];

    var SignaturePageRoutingModule = /*#__PURE__*/_createClass(function SignaturePageRoutingModule() {
      _classCallCheck(this, SignaturePageRoutingModule);
    });

    SignaturePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SignaturePageRoutingModule
    });
    SignaturePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SignaturePageRoutingModule_Factory(t) {
        return new (t || SignaturePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignaturePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignaturePageRoutingModule, [{
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
  "./src/app/pages/companies/signature/signature.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/companies/signature/signature.module.ts ***!
    \***************************************************************/

  /*! exports provided: SignaturePageModule */

  /***/
  function _src_app_pages_companies_signature_signatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignaturePageModule", function () {
      return SignaturePageModule;
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


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var _signature_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signature-routing.module */
    "./src/app/pages/companies/signature/signature-routing.module.ts");
    /* harmony import */


    var _signature_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signature.page */
    "./src/app/pages/companies/signature/signature.page.ts");

    var SignaturePageModule = /*#__PURE__*/_createClass(function SignaturePageModule() {
      _classCallCheck(this, SignaturePageModule);
    });

    SignaturePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SignaturePageModule
    });
    SignaturePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SignaturePageModule_Factory(t) {
        return new (t || SignaturePageModule)();
      },
      providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePadModule"], _signature_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignaturePageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SignaturePageModule, {
        declarations: [_signature_page__WEBPACK_IMPORTED_MODULE_7__["SignaturePage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePadModule"], _signature_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignaturePageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignaturePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePadModule"], _signature_routing_module__WEBPACK_IMPORTED_MODULE_6__["SignaturePageRoutingModule"]],
          declarations: [_signature_page__WEBPACK_IMPORTED_MODULE_7__["SignaturePage"]],
          providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/companies/signature/signature.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/companies/signature/signature.page.ts ***!
    \*************************************************************/

  /*! exports provided: SignaturePage */

  /***/
  function _src_app_pages_companies_signature_signaturePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignaturePage", function () {
      return SignaturePage;
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


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/services/activities/activityListCompany/activity-list-company.service */
    "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
    /* harmony import */


    var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/services/alert/alert.service */
    "./src/app/services/alert/alert.service.ts");
    /* harmony import */


    var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/companies/companies.service */
    "./src/app/services/companies/companies.service.ts");
    /* harmony import */


    var src_app_services_network_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/services/network/network.service */
    "./src/app/services/network/network.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignaturePage_form_11_ion_select_option_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var r_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", r_r7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", r_r7.Nombre, " ");
      }
    }

    function SignaturePage_form_11_ng_container_7_ion_button_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignaturePage_form_11_ng_container_7_ion_button_25_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r11.solicitarCodigoVerificacion();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Firmar Actualizaci\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignaturePage_form_11_ng_container_7_ng_container_26_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    function SignaturePage_form_11_ng_container_7_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignaturePage_form_11_ng_container_7_ng_container_26_ng_container_1_Template, 1, 0, "ng-container", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1);
      }
    }

    function SignaturePage_form_11_ng_container_7_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignaturePage_form_11_ng_container_7_div_27_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          return ctx_r14.send();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignaturePage_form_11_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Tipo de documento ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Documento de Identificaci\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Correo Electr\xF3nico ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Cargo ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-toggle", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Firma responsable de la empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Previsualizaci\xF3n Datos Actualizados ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignaturePage_form_11_ng_container_7_ion_button_25_Template, 2, 0, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SignaturePage_form_11_ng_container_7_ng_container_26_Template, 2, 1, "ng-container", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, SignaturePage_form_11_ng_container_7_div_27_Template, 2, 0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r6.formGroup.controls.qr.value ? "S\xCD" : "NO", " se va firmar con c\xF3digo QR ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r6.formGroup.controls.qr.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.controls.qr.value)("ngIfElse", _r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.formGroup.valid);
      }
    }

    function SignaturePage_form_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Responsable de la empresa ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SignaturePage_form_11_ion_select_option_6_Template, 2, 2, "ion-select-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SignaturePage_form_11_ng_container_7_Template, 28, 5, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.company.eDResponsableActualizacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.responsable.value);
      }
    }

    function SignaturePage_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Responsable de ARL");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Responsable ARL:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Raz\xF3n social del proveedor");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Nombre proveedor: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Documento proveedor:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Firma responsable de ARL");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "signature-pad", 35, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onEndEvent", function SignaturePage_ng_template_12_Template_signature_pad_onEndEvent_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.drawComplete(_r16, "firmaARL");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignaturePage_ng_template_12_Template_ion_button_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.clear(_r16, "firmaARL");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Borrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Al enviar, est\xE1 autorizando el uso de la su firma \xDANICAMENTE para el registro de la ejecuci\xF3n de las actividades relacionadas en el acta de asesor\xEDa en promoci\xF3n y prevenci\xF3n de POSITIVA COMPA\xD1\xCDA DE SEGUROS S.A. La Pol\xEDtica de tratamiento de la informaci\xF3n la puede consultar en ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignaturePage_ng_template_12_Template_a_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.openLink("https://www.positiva.gov.co");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "https://www.positiva.gov.co");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r2.responsableARL.nombres, " ", ctx_r2.responsableARL.apellidos, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.responsableARL.nombreProveedor, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.responsableARL.idProveedor, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.SIGNATURE_PAD_OPTIONS);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r2.responsableARL.nombres, " ", ctx_r2.responsableARL.apellidos, "");
      }
    }

    function SignaturePage_ng_template_14_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Firma responsable de empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "signature-pad", 35, 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onEndEvent", function SignaturePage_ng_template_14_ng_container_0_Template_signature_pad_onEndEvent_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r24.drawComplete(_r22, "firmaEmpresa");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignaturePage_ng_template_14_ng_container_0_Template_ion_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

          var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r26.clear(_r22, "firmaEmpresa");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Borrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Responsable de ARL");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Responsable ARL:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Raz\xF3n social del proveedor");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Nombre proveedor: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Documento proveedor:");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Firma responsable de ARL");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "signature-pad", 35, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onEndEvent", function SignaturePage_ng_template_14_ng_container_0_Template_signature_pad_onEndEvent_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

          var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r27.drawComplete(_r23, "firmaARL");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignaturePage_ng_template_14_ng_container_0_Template_ion_button_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r28.clear(_r23, "firmaARL");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Borrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Al enviar, est\xE1 autorizando el uso de la su firma \xDANICAMENTE para el registro de la ejecuci\xF3n de las actividades relacionadas en el acta de asesor\xEDa en promoci\xF3n y prevenci\xF3n de POSITIVA COMPA\xD1\xCDA DE SEGUROS S.A. La Pol\xEDtica de tratamiento de la informaci\xF3n la puede consultar en ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignaturePage_ng_template_14_ng_container_0_Template_a_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r29.openLink("https://www.positiva.gov.co");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "https://www.positiva.gov.co");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, ". ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r21.SIGNATURE_PAD_OPTIONS);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r21.formGroup.controls.responsable.value.Nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r21.responsableARL.nombres, " ", ctx_r21.responsableARL.apellidos, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r21.responsableARL.nombreProveedor, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r21.responsableARL.idProveedor, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r21.SIGNATURE_PAD_OPTIONS);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r21.responsableARL.nombres, " ", ctx_r21.responsableARL.apellidos, "");
      }
    }

    function SignaturePage_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SignaturePage_ng_template_14_ng_container_0_Template, 40, 9, "ng-container", 15);
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.formGroup.controls.codigoVerificacion.valid);
      }
    }
    /**
     * Componente para la vista de firma de actualización.
     */


    var SignaturePage = /*#__PURE__*/function () {
      function SignaturePage(alertCtrl, loadingCtlr, activityListCompany, ngZone, route, companiesService, router, net, alertService, iab, geolocation) {
        _classCallCheck(this, SignaturePage);

        this.alertCtrl = alertCtrl;
        this.loadingCtlr = loadingCtlr;
        this.activityListCompany = activityListCompany;
        this.ngZone = ngZone;
        this.route = route;
        this.companiesService = companiesService;
        this.router = router;
        this.net = net;
        this.alertService = alertService;
        this.iab = iab;
        this.geolocation = geolocation;
        /**
         * Opciones para el control de firma.
         */

        this.SIGNATURE_PAD_OPTIONS = {
          maxWidth: 1,
          minWidth: 1,
          canvasWidth: 300,
          canvasHeight: 300
        };
        /**
         * Opciones del navegador embebido.
         */

        this.BROWSER_OPTIONS = {
          location: 'yes',
          hidden: 'no',
          clearcache: 'yes',
          clearsessioncache: 'yes',
          zoom: 'yes',
          hardwareback: 'yes',
          mediaPlaybackRequiresUserAction: 'no',
          shouldPauseOnSuspend: 'no',
          closebuttoncaption: 'Cerrar',
          disallowoverscroll: 'no',
          toolbar: 'yes',
          enableViewportScale: 'no',
          allowInlineMediaPlayback: 'no',
          presentationstyle: 'fullscreen',
          fullscreen: 'yes'
        };
      }

      return _createClass(SignaturePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getGeolocation();
        }
        /**
         * Maneja el evento de culminación de dibujado en el componente de firma.
         */

      }, {
        key: "drawComplete",
        value: function drawComplete(pad, control) {
          var firma = pad.toDataURL().split(',');
          var firmaBase64 = firma[0].concat(',').concat(' ').concat(firma[1]);
          this.formGroup.controls[control].setValue(firmaBase64);
        }
        /**
         * Limpia el control de firma.
         */

      }, {
        key: "clear",
        value: function clear(pad, control) {
          pad.clear();
          this.formGroup.controls[control].reset();
        }
        /**
         * Abre una ventana del navegador del dispositivo con la _url_ indicada.
         *
         * @param url Dirección _url_.
         */

      }, {
        key: "openLink",
        value: function openLink(url) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this.iab.create(url, '_blank', this.BROWSER_OPTIONS);

                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         * Envía los datos al servidor para su procesamiento.
         */

      }, {
        key: "send",
        value: function send() {
          var _a, _b, _c, _d;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this = this;

            var onError, value, alert, loading;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  console.log("LogDev Send");

                  if (!this.formGroup.invalid) {
                    _context5.next = 3;
                    break;
                  }

                  return _context5.abrupt("return");

                case 3:
                  onError = function onError() {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                      var _this2 = this;

                      var alert;
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return this.alertCtrl.create({
                              backdropDismiss: false,
                              mode: 'ios',
                              header: "Error",
                              message: 'Ha ocurrido un error en el servidor y no se pudieron guardar los datos. ¿Desea guardarlos para más tarde?',
                              buttons: [{
                                text: 'Guardar para más tarde',
                                handler: function handler() {
                                  _this2.ngZone.run(function () {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                                      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                                        while (1) switch (_context2.prev = _context2.next) {
                                          case 0:
                                            _context2.next = 2;
                                            return this.guardar();

                                          case 2:
                                            this.router.navigate(['../../../../'], {
                                              relativeTo: this.route
                                            });

                                          case 3:
                                          case "end":
                                            return _context2.stop();
                                        }
                                      }, _callee2, this);
                                    }));
                                  });
                                }
                              }, {
                                text: 'Seguir editando',
                                role: 'cancel'
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
                  };

                  value = this.formGroup.value; //this.responsableARL.idLicenciaSst

                  this.company.edActa_Actualizacion_Empresa = {
                    RA_ResposableId: this.responsableARL.idRegistro,
                    RA_ResposableDocumento: this.responsableARL.idPersona,
                    RA_ResposableNombre: "".concat(this.responsableARL.nombres, " ").concat(this.responsableARL.apellidos),
                    RA_ResposableNumeroLicenciaSST: this.responsableARL.idLicenciaSst,
                    RA_ResponsableRazonSocial: this.responsableARL.nombreProveedor,
                    RA_ResponsableCargo: this.responsableARL.cargo,
                    RA_ResponsableFirma: value.firmaARL,
                    RE_ResposableId: value.responsable.id,
                    RE_ResposableDocumento: value.responsable.numeroDocumento,
                    RE_ResposableNombre: value.responsable.Nombre,
                    RE_ResponsableCargo: value.responsable.cargo,
                    RE_ResponsableFirma: value.firmaEmpresa,
                    FirmaQR: value.qr,
                    strIp: this.net.ipAddress.ip ? this.net.ipAddress.ip : '',
                    Latitud: (_b = (_a = this.coords) === null || _a === void 0 ? void 0 : _a.lat) !== null && _b !== void 0 ? _b : '',
                    Longitud: (_d = (_c = this.coords) === null || _c === void 0 ? void 0 : _c.lat) !== null && _d !== void 0 ? _d : ''
                  };

                  if (!(this.net.getNetworkStatus() !== src_app_services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["ConnectionStatusEnum"].Online)) {
                    _context5.next = 15;
                    break;
                  }

                  _context5.next = 9;
                  return this.alertService.showAlert('Atención', 'El móvil no tiene acceso a datos, por lo cual la actualización de empresa se guardó con estado pendiente por enviar.');

                case 9:
                  alert = _context5.sent;
                  alert.present();
                  _context5.next = 13;
                  return this.guardar();

                case 13:
                  this.router.navigate(['../../../../'], {
                    relativeTo: this.route
                  });
                  return _context5.abrupt("return");

                case 15:
                  _context5.next = 17;
                  return this.alertService.showLoading();

                case 17:
                  loading = _context5.sent;
                  this.companiesService.save().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
                    return _this.alertService.hideLoading(loading);
                  })).subscribe({
                    next: function next(r) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var result, alert;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              result = JSON.stringify(r).includes('false');
                              console.log('LogDev Send Next: ', JSON.stringify(r));

                              if (!(result == true)) {
                                _context4.next = 5;
                                break;
                              }

                              onError();
                              return _context4.abrupt("return");

                            case 5:
                              _context4.next = 7;
                              return this.alertService.showAlert('Empresa actualizada', 'Los datos se han registrado exitosamente.');

                            case 7:
                              alert = _context4.sent;
                              alert.present();
                              this.router.navigate(['../../../../'], {
                                relativeTo: this.route
                              });

                            case 10:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4, this);
                      }));
                    },
                    error: function error(err) {
                      console.error("LogDev Send: " + JSON.stringify(err)); // Manejo de errores
                    }
                  });

                case 19:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
        /**
         * Guarda los cambios de la empresa actual en el almacén de datos.
         */

      }, {
        key: "guardar",
        value: function guardar() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var result, _alert;

            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  this.company.__confirmed = true;
                  _context6.next = 3;
                  return this.companiesService.saveChanges();

                case 3:
                  result = _context6.sent;

                  if (result) {
                    _context6.next = 10;
                    break;
                  }

                  _context6.next = 7;
                  return this.alertCtrl.create({
                    backdropDismiss: false,
                    header: 'Atención',
                    mode: 'ios',
                    message: 'No tiene espacio suficiente en el dispositivo. Intente liberar memoria.',
                    buttons: ['ACEPTAR']
                  });

                case 7:
                  _alert = _context6.sent;
                  _context6.next = 10;
                  return _alert.present();

                case 10:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
        }
        /**
         * Emite una alerta para solicitar al usuario el código de verificación. También tiene opción
         * para recuperación de este código a través de un correo electrónico.
         */

      }, {
        key: "solicitarCodigoVerificacion",
        value: function solicitarCodigoVerificacion() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _this3 = this;

            var correo, alert;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  correo = this.formGroup.controls.correo.value;
                  _context7.next = 3;
                  return this.alertCtrl.create({
                    backdropDismiss: false,
                    mode: 'ios',
                    header: "Ingrese el c\xF3digo de verificaci\xF3n. Si selecciona la opci\xF3n reenviar c\xF3digo, se enviar\xE1 al siguiente correo: ".concat(correo, "."),
                    inputs: [{
                      name: 'verificationCode',
                      type: 'number',
                      placeholder: 'Código de verificación'
                    }],
                    buttons: [{
                      text: 'Reenviar código',
                      handler: function handler() {
                        _this3.reenviarCodigo(_this3);
                      }
                    }, {
                      text: 'Aceptar',
                      handler: function handler(codigo) {
                        _this3.comprobarCodigoVerificacion(codigo, _this3);
                      }
                    }, {
                      text: 'Cancelar',
                      role: 'cancel'
                    }]
                  });

                case 3:
                  alert = _context7.sent;
                  _context7.next = 6;
                  return alert.present();

                case 6:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
        }
        /**
         * Comprueba que haya conexión a internet.
         */

      }, {
        key: "validateNetwork",
        value: function validateNetwork() {
          var status = this.net.getNetworkStatus();
          return status === src_app_services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["ConnectionStatusEnum"].Online;
        }
        /**
         * Obtiene la geolocalización del dispositivo.
         */

      }, {
        key: "getGeolocation",
        value: function getGeolocation() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var _this4 = this;

            var loading;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  console.log("LogDev getGeolocation");
                  _context9.next = 3;
                  return this.alertService.showLoading();

                case 3:
                  loading = _context9.sent;
                  this.geolocation.getCurrentPosition().then(function (response) {
                    _this4.coords = {
                      lat: "".concat(response.coords.latitude),
                      lng: "".concat(response.coords.longitude)
                    };
                    console.log("LogDev getGeolocation", JSON.stringify(_this4.coords));

                    _this4.getCompany();
                  })["catch"](function (error) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
                      var alert;
                      return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                        while (1) switch (_context8.prev = _context8.next) {
                          case 0:
                            console.log("LogDev getGeolocation", JSON.stringify(error.code));

                            if (!(error.code === 1)) {
                              _context8.next = 5;
                              break;
                            }

                            // Si se produce un error de este tipo es porque se está intentando acceder al servicio
                            // de ubicación desde un origen inseguro. Se asume que entonces se está ejecutando la aplicación
                            // desde el servidor de desarrollo de Ionic
                            this.coords = {
                              lat: '0',
                              lng: '0'
                            };
                            this.getCompany();
                            return _context8.abrupt("return");

                          case 5:
                            _context8.next = 7;
                            return this.alertCtrl.create({
                              header: 'Atención',
                              backdropDismiss: false,
                              mode: 'ios',
                              message: 'Debe conceder permisos de ubicación a la aplicación para poder continuar.',
                              buttons: ['ACEPTAR']
                            });

                          case 7:
                            alert = _context8.sent;
                            alert.present();
                            this.router.navigate(['../../../'], {
                              relativeTo: this.route
                            });

                          case 10:
                          case "end":
                            return _context8.stop();
                        }
                      }, _callee8, this);
                    }));
                  })["finally"](function () {
                    loading.dismiss();
                  });

                case 5:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
        }
        /**
         * Establece la empresa de la vista de detalles.
         */

      }, {
        key: "getCompany",
        value: function getCompany() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var id;
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  id = +this.route.snapshot.params.id;
                  _context10.prev = 1;
                  _context10.next = 4;
                  return this.companiesService.prepareCompany(id);

                case 4:
                  this.company = _context10.sent;
                  _context10.next = 10;
                  break;

                case 7:
                  _context10.prev = 7;
                  _context10.t0 = _context10["catch"](1);
                  this.company = this.companiesService.company;

                case 10:
                  if (this.company) {
                    _context10.next = 13;
                    break;
                  }

                  this.router.navigate(['../']);
                  return _context10.abrupt("return");

                case 13:
                  _context10.next = 15;
                  return this.companiesService.responsableARL;

                case 15:
                  this.responsableARL = _context10.sent;
                  this.initForm();

                case 17:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this, [[1, 7]]);
          }));
        }
        /**
         * Inicializa el formulario.
         */

      }, {
        key: "initForm",
        value: function initForm() {
          var _this5 = this;

          var responsableControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          var tipoDocumentoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: undefined,
            disabled: true
          });
          var documentoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: undefined,
            disabled: true
          });
          var correoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: undefined,
            disabled: true
          });
          var cargoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: undefined,
            disabled: true
          });
          var qrControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false);
          var firmaARLControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          var codigoVerificacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          var firmaEmpresaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            responsable: responsableControl,
            tipoDocumento: tipoDocumentoControl,
            documento: documentoControl,
            correo: correoControl,
            cargo: cargoControl,
            qr: qrControl,
            firmaARL: firmaARLControl,
            codigoVerificacion: codigoVerificacionControl,
            firmaEmpresa: firmaEmpresaControl
          });
          this.formGroup.controls.responsable.valueChanges.subscribe(function (v) {
            if (!v) {
              _this5.formGroup.controls.tipoDocumento.reset();

              _this5.formGroup.controls.documento.reset();

              _this5.formGroup.controls.correo.reset();

              _this5.formGroup.controls.cargo.reset();

              _this5.formGroup.controls.qr.reset();

              return;
            }

            _this5.formGroup.controls.tipoDocumento.setValue(v.tipoDocumentoDescripcion);

            _this5.formGroup.controls.documento.setValue(v.numeroDocumento);

            _this5.formGroup.controls.correo.setValue(v.correo);

            _this5.formGroup.controls.cargo.setValue(v.cargo);
          });
          this.formGroup.controls.qr.valueChanges.subscribe(function (v) {
            if (v) {
              _this5.formGroup.controls.codigoVerificacion.reset();

              _this5.formGroup.controls.codigoVerificacion.disable();

              _this5.formGroup.controls.firmaEmpresa.reset();

              _this5.formGroup.controls.firmaEmpresa.disable();

              return;
            }

            _this5.formGroup.controls.codigoVerificacion.enable();

            _this5.formGroup.controls.firmaEmpresa.enable();
          });
        }
        /**
         * Reenvía el código de verficación al responsable de la empresa a su correo.
         *
         * @param component Referencia de este componente.
         */

      }, {
        key: "reenviarCodigo",
        value: function reenviarCodigo(component) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var available, _alert2, loading, responsableID, empresaID, correo, result, header, message, alert;

            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  available = component.validateNetwork();

                  if (available) {
                    _context11.next = 8;
                    break;
                  }

                  _context11.next = 4;
                  return component.alertCtrl.create({
                    header: 'Alerta',
                    backdropDismiss: false,
                    mode: 'ios',
                    message: 'No tienes conexión a internet para utilizar esta funcionalidad.',
                    buttons: ['ACEPTAR']
                  });

                case 4:
                  _alert2 = _context11.sent;
                  _context11.next = 7;
                  return _alert2.present();

                case 7:
                  return _context11.abrupt("return");

                case 8:
                  _context11.next = 10;
                  return component.loadingCtlr.create({
                    mode: 'ios',
                    message: 'Reenviando código de verificación...'
                  });

                case 10:
                  loading = _context11.sent;
                  loading.present();
                  responsableID = component.formGroup.controls.responsable.value.id;
                  empresaID = component.company.Fk_Id_EmpresaSUM;
                  correo = component.formGroup.controls.correo.value;
                  _context11.prev = 15;
                  _context11.next = 18;
                  return component.activityListCompany.recordarCodigoVerificacion(responsableID, empresaID).toPromise();

                case 18:
                  result = _context11.sent;

                  if (result) {
                    header = 'Exitoso';
                    message = "Se reenvi\xF3 el c\xF3digo de verificaci\xF3n al correo ".concat(correo, ".");
                  } else {
                    header = 'Error';
                    message = "No se pudo enviar el c\xF3digo de verificaci\xF3n al correo ".concat(correo, ".");
                  }

                  _context11.next = 26;
                  break;

                case 22:
                  _context11.prev = 22;
                  _context11.t0 = _context11["catch"](15);
                  header = 'Error';
                  message = "No se pudo enviar el c\xF3digo de verificaci\xF3n al correo ".concat(correo, ".");

                case 26:
                  _context11.next = 28;
                  return component.alertCtrl.create({
                    header: header,
                    backdropDismiss: false,
                    mode: 'ios',
                    message: message,
                    buttons: ['ACEPTAR']
                  });

                case 28:
                  alert = _context11.sent;
                  loading.dismiss();
                  _context11.next = 32;
                  return alert.present();

                case 32:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, null, [[15, 22]]);
          }));
        }
        /**
         * Comprueba que el código de verificación introducido y el que posee el responsable de la empresa
         * coincidan.
         *
         * @param codigo Código introducido.
         * @param componente Referencia de este componente.
         */

      }, {
        key: "comprobarCodigoVerificacion",
        value: function comprobarCodigoVerificacion(codigo, componente) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  if (!(componente.formGroup.controls.responsable.value.codigoVerificacion !== codigo.verificationCode)) {
                    _context12.next = 8;
                    break;
                  }

                  componente.ngZone.run(function () {
                    componente.formGroup.controls.codigoVerificacion.reset();
                  });
                  _context12.next = 4;
                  return componente.alertCtrl.create({
                    header: 'Atención',
                    backdropDismiss: false,
                    mode: 'ios',
                    message: 'El código ingresado no es válido. Por favor intente nuevamente.',
                    buttons: ['ACEPTAR']
                  });

                case 4:
                  alert = _context12.sent;
                  _context12.next = 7;
                  return alert.present();

                case 7:
                  return _context12.abrupt("return");

                case 8:
                  componente.ngZone.run(function () {
                    componente.formGroup.controls.codigoVerificacion.setValue(codigo.verificationCode);
                  });

                case 9:
                case "end":
                  return _context12.stop();
              }
            }, _callee12);
          }));
        }
      }]);
    }();

    SignaturePage.ɵfac = function SignaturePage_Factory(t) {
      return new (t || SignaturePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_9__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]));
    };

    SignaturePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignaturePage,
      selectors: [["app-signature"]],
      viewQuery: function SignaturePage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
        }
      },
      decls: 16,
      vars: 1,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "ion-padding"], [3, "formGroup", 4, "ngIf"], ["qr", ""], ["noQr", ""], [3, "formGroup"], ["lines", "none"], [1, "ion-margin-bottom"], ["position", "stacked", 1, "font-large", "text-center"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "responsable", 1, "ion-margin-top"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "value"], ["position", "stacked"], ["formControlName", "tipoDocumento"], ["formControlName", "documento"], ["formControlName", "correo"], ["formControlName", "cargo"], [1, "bold"], ["formControlName", "qr"], [1, "section-title"], ["color", "tertiary", "expand", "block", "routerLink", "../../../summary", 1, "ion-margin-bottom"], ["expand", "block", 3, "click", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "img-wrapper ion-text-center", 4, "ngIf"], ["expand", "block", 3, "click"], [4, "ngTemplateOutlet"], [1, "img-wrapper", "ion-text-center"], ["src", "../../../assets/icon/boton_enviar.png", "alt", "enviar", 3, "click"], [1, "mr"], [1, "firmaContent", 2, "border", "1px solid black", "border-radius", "10px"], [3, "options", "onEndEvent"], ["padARL", ""], [1, "leyenda", "ion-text-center"], ["expand", "block", "fill", "clear", "shape", "round", 3, "click"], [1, "ion-text-justify"], [1, "positiva-link", 3, "click"], ["padEmpresa", ""]],
      template: function SignaturePage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Firma Actualizaci\xF3n de Datos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SignaturePage_form_11_Template, 8, 3, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignaturePage_ng_template_12_Template, 30, 7, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SignaturePage_ng_template_14_Template, 1, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  padding: 0px;\n  text-align: left;\n  top: -50%;\n  transform: translateY(50%);\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: inherit;\n  --highlight-height: 0;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-medium);\n  color: var(--ion-color-medium-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  white-space: break-spaces;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]     .native-input {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select.select-disabled[_ngcontent-%COMP%] {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-dark);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  background-color: var(--ion-color-light);\n  color: var(--ion-color-light-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 2rem 0;\n}\nsignature-pad[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.font-large[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.mr[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.leyenda[_ngcontent-%COMP%] {\n  border-top: 1px solid #95a6b1;\n  margin-right: 30px;\n  margin-left: 30px;\n  font-weight: bold;\n  color: gray;\n  font: unset;\n  font-size: 15px;\n  padding-top: 5px;\n}\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 150px;\n  height: auto;\n}\n.positiva-link[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.firmaContent[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.firmaContent[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9zaWduYXR1cmUvc2lnbmF0dXJlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL3NpZ25hdHVyZS9zaWduYXR1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdRO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ0RWO0FES007RUFDRSxZQUFBO0FDSFI7QURXSTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0FDUk47QURXUTtFQUNFLHFDQUFBO0VBQ0EseUNBQUE7QUNUVjtBRFlRO0VBQ0UseUNBQUE7RUFDQSx1Q0FBQTtBQ1ZWO0FEY007RUFDRSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1pSO0FEaUJVO0VBQ0UsVUFBQTtBQ2ZaO0FEcUJRO0VBQ0UsVUFBQTtBQ25CVjtBRHVCTTtFQUVFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQ3RCUjtBRDBCSTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtBQ3hCTjtBRDZCQTtFQUNFLDhCQUFBO0FDMUJGO0FENkJBO0VBQ0UsaUJBQUE7QUMxQkY7QUQ2QkE7RUFDRSxrQkFBQTtBQzFCRjtBRDZCQTtFQUNFLGlCQUFBO0FDMUJGO0FENkJBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQzFCRjtBRDhCRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQzNCSjtBRCtCQTtFQUNFLCtCQUFBO0FDNUJGO0FEK0JBO0VBQ0UsOEJBQUE7QUM1QkY7QUQrQkE7RUFDRSw4QkFBQTtBQzVCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9zaWduYXR1cmUvc2lnbmF0dXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAmIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmIGlvbi1yb3cge1xuICAgICAgJiBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuXG4gICAgICAgICYgaW9uLXRpdGxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHRvcDogLTUwJTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICYgaW9uLWxpc3Qge1xuICAgICYgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcblxuICAgICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgICAgJiBpb24taW5wdXQge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1zZWxlY3Qge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmIGlvbi1sYWJlbCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgICAgIH1cblxuICAgICAgJiBpb24taW5wdXQge1xuICAgICAgICAmIDo6bmctZGVlcCB7XG4gICAgICAgICAgJiAubmF0aXZlLWlucHV0IHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgaW9uLXNlbGVjdCB7XG4gICAgICAgICYuc2VsZWN0LWRpc2FibGVkIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgaW9uLWlucHV0LFxuICAgICAgJiBpb24tc2VsZWN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMXJlbTtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiAuc2VjdGlvbi10aXRsZSB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW46IDJyZW0gMDtcbiAgICB9XG4gIH1cbn1cblxuc2lnbmF0dXJlLXBhZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYhaW1wb3J0YW50O1xufVxuXG4uZm9udC1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tciB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG4ubGV5ZW5kYSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTVhNmIxO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQ6IHVuc2V0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5pbWctd3JhcHBlciB7XG4gICYgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuXG4ucG9zaXRpdmEtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5maXJtYUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIWltcG9ydGFudDtcbn1cblxuLmZpcm1hQ29udGVudCBkaXZ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYhaW1wb3J0YW50O1xufVxuIiwiaW9uLWhlYWRlciBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tdGl0bGUge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB0b3A6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbS5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIGlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCBpb24tc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCA6Om5nLWRlZXAgLm5hdGl2ZS1pbnB1dCB7XG4gIG9wYWNpdHk6IDE7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tc2VsZWN0LnNlbGVjdC1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDE7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQsIGlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IC5zZWN0aW9uLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuc2lnbmF0dXJlLXBhZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmZvbnQtbGFyZ2Uge1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubXIge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmxleWVuZGEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzk1YTZiMTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmF5O1xuICBmb250OiB1bnNldDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uaW1nLXdyYXBwZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucG9zaXRpdmEtbGluayB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5maXJtYUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5maXJtYUNvbnRlbnQgZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignaturePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signature',
          templateUrl: './signature.page.html',
          styleUrls: ['./signature.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_9__["ActivityListCompanyService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_11__["CompaniesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"]
        }, {
          type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_10__["AlertService"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"]
        }];
      }, {
        signaturePad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"]]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=signature-signature-module-es5.js.map