function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["responsible-signature-arl-responsible-signature-arl-module"], {
  /***/
  "./src/app/pages/responsible-signature-arl/responsible-signature-arl-routing.module.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/pages/responsible-signature-arl/responsible-signature-arl-routing.module.ts ***!
    \*********************************************************************************************/

  /*! exports provided: ResponsibleSignatureARLPageRoutingModule */

  /***/
  function srcAppPagesResponsibleSignatureArlResponsibleSignatureArlRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsibleSignatureARLPageRoutingModule", function () {
      return ResponsibleSignatureARLPageRoutingModule;
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


    var _responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./responsible-signature-arl.page */
    "./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts");

    var routes = [{
      path: '',
      component: _responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_2__["ResponsibleSignatureARLPage"]
    }];

    var ResponsibleSignatureARLPageRoutingModule = /*#__PURE__*/_createClass(function ResponsibleSignatureARLPageRoutingModule() {
      _classCallCheck(this, ResponsibleSignatureARLPageRoutingModule);
    });

    ResponsibleSignatureARLPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResponsibleSignatureARLPageRoutingModule
    });
    ResponsibleSignatureARLPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResponsibleSignatureARLPageRoutingModule_Factory(t) {
        return new (t || ResponsibleSignatureARLPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResponsibleSignatureARLPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsibleSignatureARLPageRoutingModule, [{
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
  "./src/app/pages/responsible-signature-arl/responsible-signature-arl.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/pages/responsible-signature-arl/responsible-signature-arl.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ResponsibleSignatureARLPageModule */

  /***/
  function srcAppPagesResponsibleSignatureArlResponsibleSignatureArlModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsibleSignatureARLPageModule", function () {
      return ResponsibleSignatureARLPageModule;
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


    var _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./responsible-signature-arl-routing.module */
    "./src/app/pages/responsible-signature-arl/responsible-signature-arl-routing.module.ts");
    /* harmony import */


    var _responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./responsible-signature-arl.page */
    "./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");

    var ResponsibleSignatureARLPageModule = /*#__PURE__*/_createClass(function ResponsibleSignatureARLPageModule() {
      _classCallCheck(this, ResponsibleSignatureARLPageModule);
    });

    ResponsibleSignatureARLPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ResponsibleSignatureARLPageModule
    });
    ResponsibleSignatureARLPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ResponsibleSignatureARLPageModule_Factory(t) {
        return new (t || ResponsibleSignatureARLPageModule)();
      },
      providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResponsibleSignatureARLPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResponsibleSignatureARLPageModule, {
        declarations: [_responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_5__["ResponsibleSignatureARLPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResponsibleSignatureARLPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsibleSignatureARLPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResponsibleSignatureARLPageRoutingModule"]],
          declarations: [_responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_5__["ResponsibleSignatureARLPage"]],
          providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts ***!
    \***********************************************************************************/

  /*! exports provided: ResponsibleSignatureARLPage */

  /***/
  function srcAppPagesResponsibleSignatureArlResponsibleSignatureArlPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponsibleSignatureARLPage", function () {
      return ResponsibleSignatureARLPage;
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


    var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/filesystem */
    "./node_modules/@capacitor/filesystem/dist/esm/index.js");
    /* harmony import */


    var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/file/ngx */
    "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/advisory-verification/advisory-verification.component */
    "./src/app/components/advisory-verification/advisory-verification.component.ts");
    /* harmony import */


    var _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/activities/advisoryTopic/advisory-topic.service */
    "./src/app/services/activities/advisoryTopic/advisory-topic.service.ts");
    /* harmony import */


    var _services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/attach/photo-service.service */
    "./src/app/services/attach/photo-service.service.ts");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../services/network/network.service */
    "./src/app/services/network/network.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ResponsibleSignatureARLPage_p_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Responsable ARL: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.infoUserARL.nombres, " ", ctx_r0.infoUserARL.apellidos, "");
      }
    }

    function ResponsibleSignatureARLPage_p_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nombre proveedor");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.infoUserARL.nombreProveedor, "");
      }
    }

    function ResponsibleSignatureARLPage_p_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Documento proveedor ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.infoUserARL.idProveedor, "");
      }
    }

    function ResponsibleSignatureARLPage_p_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.infoUserARL.nombres, " ", ctx_r3.infoUserARL.apellidos, "");
      }
    }

    var ResponsibleSignatureARLPage = /*#__PURE__*/function () {
      function ResponsibleSignatureARLPage(storage, net, modalCtrl, photoService, file, plt, router, loadingCtlr, alertController, cacheService, advisoryTopicService, toastController) {
        _classCallCheck(this, ResponsibleSignatureARLPage);

        this.storage = storage;
        this.net = net;
        this.modalCtrl = modalCtrl;
        this.photoService = photoService;
        this.file = file;
        this.plt = plt;
        this.router = router;
        this.loadingCtlr = loadingCtlr;
        this.alertController = alertController;
        this.cacheService = cacheService;
        this.advisoryTopicService = advisoryTopicService;
        this.toastController = toastController; // tslint:disable-next-line: ban-types

        this.signaturePadOptions = {
          maxWidth: 1,
          minWidth: 1,
          canvasWidth: 300,
          canvasHeight: 300
        };
        /**
         * filesBase64, es un arreglo que almacena los base64 de los archivos que han sido leidos, que almacenaron en la actividad.
         */

        this.filesBase64 = [];
      }

      _createClass(ResponsibleSignatureARLPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInfoUser();
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.readFile();

                case 2:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "getInfoUser",
        value: function getInfoUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.storage.get('sesion');

                case 2:
                  this.infoUserARL = _context2.sent;

                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "drawComplete",
        value: function drawComplete() {
          var firma = this.signaturePad.toDataURL().split(',');
          this.signatureEntered = firma[0].concat(',').concat(' ').concat(firma[1]);
        }
      }, {
        key: "drawStart",
        value: function drawStart() {// will be notified of szimek/signature_pad's onBegin event
          // console.log('begin drawing');
        }
      }, {
        key: "clear",
        value: function clear() {
          this.signaturePad.clear();
        }
      }, {
        key: "verification",
        value: function verification() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var infoActa, modal;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  // this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature/advisoryVerification');
                  infoActa = this.cacheService.getAllInfoToAdvisory();
                  _context3.next = 3;
                  return this.modalCtrl.create({
                    component: _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_8__["AdvisoryVerificationComponent"],
                    componentProps: {
                      info: infoActa
                    }
                  });

                case 3:
                  modal = _context3.sent;
                  modal.present();

                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "validateNetwork",
        value: function validateNetwork() {
          var status = this.net.getNetworkStatus();

          if (status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["ConnectionStatusEnum"].Offline) {
            this.presentToast();
          }

          return status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["ConnectionStatusEnum"].Online;
        }
      }, {
        key: "sendTask",
        value: function sendTask() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this = this;

            var infoSurveyResponsibleARL, checkNetwork, idProveedor, files, creacionActa, _iterator, _step, f, body, _iterator2, _step2, tta, idActividadMigradaPorUsuario, notifCorreoActa, listaActividades, _loop, i, activitiesChange, getInfoActaAsesoria, actSelec, _loop2, _i, cambioCompanySelected, saveActaAsesoria;

            return _regeneratorRuntime().wrap(function _callee4$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  infoSurveyResponsibleARL = {
                    responsableId: this.infoUserARL.idPersona,
                    responsableDocumento: this.infoUserARL.idPersona,
                    responsableNombre: this.infoUserARL.nombres + ' ' + this.infoUserARL.apellidos,
                    responsableNumeroLicenciaSST: this.infoUserARL.idLicenciaSst,
                    responsableCargo: this.infoUserARL.cargo,
                    responsableRazonSocial: this.infoUserARL.nombreProveedor,
                    responsableFirma: this.signatureEntered
                  };
                  this.cacheService.saveSurveyARL(infoSurveyResponsibleARL);
                  checkNetwork = this.validateNetwork();
                  idProveedor = this.infoUserARL.idProveedor;
                  this.actaAsesoriaGestionada = this.cacheService.createActaAsesoria(idProveedor);
                  files = this.getFiles();

                  if (!checkNetwork) {
                    _context6.next = 72;
                    break;
                  }

                  _context6.next = 9;
                  return this.presentLoading('Creando acta de asesoría ...');

                case 9:
                  _context6.next = 11;
                  return this.advisoryTopicService.saveActaAsesoria(this.actaAsesoriaGestionada).toPromise();

                case 11:
                  creacionActa = _context6.sent;
                  creacionActa = creacionActa.split(';');

                  if (!(creacionActa[0] === 'true' && creacionActa[1] !== '-1')) {
                    _context6.next = 68;
                    break;
                  }

                  _iterator = _createForOfIteratorHelper(files);
                  _context6.prev = 15;

                  _iterator.s();

                case 17:
                  if ((_step = _iterator.n()).done) {
                    _context6.next = 24;
                    break;
                  }

                  f = _step.value;
                  body = Object.assign(Object.assign({}, f), {
                    UidActaAsesoria: +creacionActa[1]
                  });
                  _context6.next = 22;
                  return this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();

                case 22:
                  _context6.next = 17;
                  break;

                case 24:
                  _context6.next = 29;
                  break;

                case 26:
                  _context6.prev = 26;
                  _context6.t0 = _context6["catch"](15);

                  _iterator.e(_context6.t0);

                case 29:
                  _context6.prev = 29;

                  _iterator.f();

                  return _context6.finish(29);

                case 32:
                  if (!(this.actaAsesoriaGestionada && this.actaAsesoriaGestionada.TTA_lista && this.actaAsesoriaGestionada.TTA_lista.length > 0)) {
                    _context6.next = 52;
                    break;
                  }

                  _iterator2 = _createForOfIteratorHelper(this.actaAsesoriaGestionada.TTA_lista);
                  _context6.prev = 34;

                  _iterator2.s();

                case 36:
                  if ((_step2 = _iterator2.n()).done) {
                    _context6.next = 44;
                    break;
                  }

                  tta = _step2.value;
                  idActividadMigradaPorUsuario = tta.id; // envio correo notificacion acta APP 

                  notifCorreoActa = {
                    Fk_ID_ActividadMigradaPorUsuario: idActividadMigradaPorUsuario
                  };
                  _context6.next = 42;
                  return this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();

                case 42:
                  _context6.next = 36;
                  break;

                case 44:
                  _context6.next = 49;
                  break;

                case 46:
                  _context6.prev = 46;
                  _context6.t1 = _context6["catch"](34);

                  _iterator2.e(_context6.t1);

                case 49:
                  _context6.prev = 49;

                  _iterator2.f();

                  return _context6.finish(49);

                case 52:
                  this.photoService.photos = [];
                  _context6.next = 55;
                  return this.storage.get('listaActividades');

                case 55:
                  listaActividades = _context6.sent;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                    var actividadesMigradas;
                    return _regeneratorRuntime().wrap(function _loop$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          actividadesMigradas = listaActividades[i].listaActividadesMigradas;
                          actividadesMigradas.forEach(function (element) {
                            var idActividad = element.id;
                            var TTA_LISTA = _this.actaAsesoriaGestionada.TTA_lista;
                            var encontro = TTA_LISTA.find(function (x) {
                              return x.id === idActividad;
                            });

                            if (encontro) {
                              actividadesMigradas.splice(encontro, 1);
                              listaActividades[i].listaActividadesMigradas = actividadesMigradas;
                            }
                          });

                        case 2:
                        case "end":
                          return _context4.stop();
                      }
                    }, _loop);
                  });
                  i = 0;

                case 58:
                  if (!(i < listaActividades.length)) {
                    _context6.next = 63;
                    break;
                  }

                  return _context6.delegateYield(_loop(i), "t2", 60);

                case 60:
                  i++;
                  _context6.next = 58;
                  break;

                case 63:
                  this.storage.set('listaActividades', listaActividades);
                  this.notification('Atención', 'Se ha creado el acta de asesoría');
                  this.router.navigateByUrl('/u/execLog');
                  _context6.next = 69;
                  break;

                case 68:
                  this.notification('Error', 'No se pudo crear el acta de asesoría');

                case 69:
                  this.loading.dismiss();
                  _context6.next = 87;
                  break;

                case 72:
                  activitiesChange = [];
                  getInfoActaAsesoria = this.cacheService.getAllInfoToAdvisory();
                  actSelec = JSON.parse(sessionStorage.companySelected); // tslint:disable-next-line: prefer-for-of

                  _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                    var codeActividadesMigradas, encontro;
                    return _regeneratorRuntime().wrap(function _loop2$(_context5) {
                      while (1) switch (_context5.prev = _context5.next) {
                        case 0:
                          codeActividadesMigradas = actSelec.listaActividadesMigradas[_i].idActividad;
                          encontro = getInfoActaAsesoria.activities.find(function (element) {
                            return element.idActividad === codeActividadesMigradas;
                          });

                          if (encontro) {
                            encontro.estadoInterno = 'Por enviar';
                            activitiesChange.push(encontro);
                          } else {
                            activitiesChange.push(actSelec.listaActividadesMigradas[_i]);
                          }

                        case 3:
                        case "end":
                          return _context5.stop();
                      }
                    }, _loop2);
                  });
                  _i = 0;

                case 77:
                  if (!(_i < actSelec.listaActividadesMigradas.length)) {
                    _context6.next = 82;
                    break;
                  }

                  return _context6.delegateYield(_loop2(), "t3", 79);

                case 79:
                  _i++;
                  _context6.next = 77;
                  break;

                case 82:
                  actSelec.listaActividadesMigradas = activitiesChange;
                  cambioCompanySelected = JSON.stringify(actSelec);
                  sessionStorage.setItem('companySelected', cambioCompanySelected);
                  saveActaAsesoria = this.cacheService.saveActasAsesoria();

                  if (saveActaAsesoria) {
                    this.notification('Atención', 'Se guardo el acta de asesoría pero con estado pendiente por enviar');
                    this.router.navigateByUrl('/u/execLog');
                  }

                case 87:
                case "end":
                  return _context6.stop();
              }
            }, _callee4, this, [[15, 26, 29, 32], [34, 46, 49, 52]]);
          }));
        }
      }, {
        key: "readFile",
        value: function readFile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this2 = this;

            var documentosAdjuntados, _loop3, i;

            return _regeneratorRuntime().wrap(function _callee5$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  documentosAdjuntados = this.cacheService.saveAttach;
                  _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3(i) {
                    var nombreArchivo, idActividad, extensionBase;
                    return _regeneratorRuntime().wrap(function _loop3$(_context7) {
                      while (1) switch (_context7.prev = _context7.next) {
                        case 0:
                          nombreArchivo = documentosAdjuntados[i].nombreArchivo;
                          idActividad = documentosAdjuntados[i].idActividad;
                          extensionBase = documentosAdjuntados[i].extensionBase64;
                          _context7.prev = 3;
                          _context7.next = 6;
                          return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].readFile({
                            path: "".concat(idActividad, "/").concat(nombreArchivo),
                            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
                          }).then(function (data) {
                            var base64 = extensionBase.concat(',').concat(data.data);
                            var objUploadFile = {
                              UidActividadMigradaXUSuario: idActividad,
                              TipoSoporte: documentosAdjuntados[i].tipoDocumento,
                              Base64: base64
                            };

                            _this2.filesBase64.push(objUploadFile);
                          });

                        case 6:
                          _context7.next = 10;
                          break;

                        case 8:
                          _context7.prev = 8;
                          _context7.t0 = _context7["catch"](3);

                        case 10:
                        case "end":
                          return _context7.stop();
                      }
                    }, _loop3, null, [[3, 8]]);
                  });
                  i = 0;

                case 3:
                  if (!(i < documentosAdjuntados.length)) {
                    _context8.next = 8;
                    break;
                  }

                  return _context8.delegateYield(_loop3(i), "t0", 5);

                case 5:
                  i++;
                  _context8.next = 3;
                  break;

                case 8:
                case "end":
                  return _context8.stop();
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "removeFile",
        value: function removeFile() {
          var activities = this.cacheService.saveAttach;

          for (var i = 0; i < activities.length; i++) {
            var nombreArchivo = activities[i].nombreArchivo;
            var idActividad = activities[i].idActividad;

            try {
              _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].deleteFile({
                path: "".concat(idActividad, "/").concat(nombreArchivo),
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
              });
            } catch (_a) {}
          }
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return this.loadingCtlr.create({
                    mode: 'ios',
                    message: message
                  });

                case 2:
                  this.loading = _context9.sent;
                  return _context9.abrupt("return", this.loading.present());

                case 4:
                case "end":
                  return _context9.stop();
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee7$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return this.toastController.create({
                    message: 'Verifique su conexión a internet.',
                    duration: 2000
                  });

                case 2:
                  toast = _context10.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context10.stop();
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "notification",
        value: function notification(titulo, notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee8$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return this.alertController.create({
                    header: titulo,
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context11.sent;
                  alert.onDidDismiss();
                  _context11.next = 6;
                  return alert.present();

                case 6:
                case "end":
                  return _context11.stop();
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "getFiles",
        value: function getFiles() {
          var _this3 = this;

          var files = [];
          var imagenesAdjuntas = this.cacheService.obtenerAdjuntosFoto();

          for (var i = 0; i < this.filesBase64.length; i++) {
            var objAdjuntarDoc = this.filesBase64[i];
            files.push(objAdjuntarDoc);
          }

          for (var j = 0; j < imagenesAdjuntas.length; j++) {
            var element = imagenesAdjuntas[j];
            element.forEach(function (documento) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                var objAdjuntarImg;
                return _regeneratorRuntime().wrap(function _callee9$(_context12) {
                  while (1) switch (_context12.prev = _context12.next) {
                    case 0:
                      objAdjuntarImg = {
                        UidActividadMigradaXUSuario: documento.idActividad,
                        TipoSoporte: documento.idTipoArchivo,
                        base64: documento.foto.base64Imagen
                      };
                      files.push(objAdjuntarImg);

                    case 2:
                    case "end":
                      return _context12.stop();
                  }
                }, _callee9);
              }));
            });
          }

          this.removeFile();
          return files;
        }
      }]);

      return ResponsibleSignatureARLPage;
    }();

    ResponsibleSignatureARLPage.ɵfac = function ResponsibleSignatureARLPage_Factory(t) {
      return new (t || ResponsibleSignatureARLPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_10__["PhotoServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_9__["AdvisoryTopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]));
    };

    ResponsibleSignatureARLPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResponsibleSignatureARLPage,
      selectors: [["app-responsible-signature-arl"]],
      viewQuery: function ResponsibleSignatureARLPage_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
        }
      },
      decls: 40,
      vars: 5,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding"], [4, "ngIf"], [1, "ion-text-center"], [1, "firmaContent", 2, "border", "1px solid black"], [3, "options", "onBeginEvent", "onEndEvent"], ["class", "firma", 4, "ngIf"], ["expand", "block", "fill", "clear", "shape", "round", 3, "click"], [1, "ion-text-justify", "ion-padding"], [1, "ion-text-center", 2, "margin-bottom", "30px"], ["size", "3"], ["size", "6"], ["src", "../../../assets/icon/boton_enviar.png", "alt", "enviar", 1, "btnEnviar", 3, "click"], [1, "firma"]],
      template: function ResponsibleSignatureARLPage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Firma responsable ARL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Responsable de ARL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ResponsibleSignatureARLPage_p_15_Template, 4, 2, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Raz\xF3n social del proveedor");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ResponsibleSignatureARLPage_p_19_Template, 4, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ResponsibleSignatureARLPage_p_20_Template, 4, 1, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Firma responsable de ARL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "signature-pad", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function ResponsibleSignatureARLPage_Template_signature_pad_onBeginEvent_25_listener() {
            return ctx.drawStart();
          })("onEndEvent", function ResponsibleSignatureARLPage_Template_signature_pad_onEndEvent_25_listener() {
            return ctx.drawComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ResponsibleSignatureARLPage_p_27_Template, 2, 2, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResponsibleSignatureARLPage_Template_ion_button_click_28_listener() {
            return ctx.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Borrar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Al enviar, est\xE1 autorizando el uso de la su firma \xDANICAMENTE para el registro de la ejecuci\xF3n de las actividades relacionadas en el acta de asesor\xEDa en promoci\xF3n y prevenci\xF3n de POSITIVA COMPA\xD1\xCDA DE SEGUROS S.A. La Pol\xEDtica de tratamiento de la informaci\xF3n la puede consultar en https://www.positiva.gov.co Una vez sea enviado el formulario, recibir\xE1 correo electr\xF3nico con los soportes de ejecuci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-col", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-col", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResponsibleSignatureARLPage_Template_img_click_38_listener() {
            return ctx.sendTask();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "ion-col", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nsignature-pad[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 20px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\n.firma[_ngcontent-%COMP%] {\n  border-top: 1px solid #95a6b1;\n  margin-right: 30px;\n  margin-left: 30px;\n  font-weight: bold;\n  color: gray;\n  font: unset;\n  font-size: 15px;\n  padding-top: 5px;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.firmaContent[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.firmaContent[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVzcG9uc2libGUtc2lnbmF0dXJlLWFybC9DOlxcVXNlcnNcXGNhbHZhcmFkb1xcRG9jdW1lbnRzXFxwcm95ZWN0b1xcQWN0dWFsXFxhbGlzc3RhX3N1bVxcVHJ1bmtcXDIwMjQwNjA3MS9zcmNcXGFwcFxccGFnZXNcXHJlc3BvbnNpYmxlLXNpZ25hdHVyZS1hcmxcXHJlc3BvbnNpYmxlLXNpZ25hdHVyZS1hcmwucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZXNwb25zaWJsZS1zaWduYXR1cmUtYXJsL3Jlc3BvbnNpYmxlLXNpZ25hdHVyZS1hcmwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FETUE7RUFDRSw4QkFBQTtBQ0hGO0FETUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNIRjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hGO0FETUE7RUFDRSxrQkFBQTtBQ0hGO0FETUE7RUFDRSw4QkFBQTtBQ0hGO0FETUE7RUFDRSw4QkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVzcG9uc2libGUtc2lnbmF0dXJlLWFybC9yZXNwb25zaWJsZS1zaWduYXR1cmUtYXJsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgIH1cbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5zaWduYXR1cmUtcGFkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmZpcm1hIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5NWE2YjE7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXJtYUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIWltcG9ydGFudDtcbn1cblxuLmZpcm1hQ29udGVudCBkaXZ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYhaW1wb3J0YW50O1xufSBcbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5zaWduYXR1cmUtcGFkIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5maXJtYSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTVhNmIxO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQ6IHVuc2V0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbmgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZmlybWFDb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4uZmlybWFDb250ZW50IGRpdiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResponsibleSignatureARLPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-responsible-signature-arl',
          templateUrl: './responsible-signature-arl.page.html',
          styleUrls: ['./responsible-signature-arl.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }, {
          type: _services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_10__["PhotoServiceService"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"]
        }, {
          type: _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_9__["AdvisoryTopicService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
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
//# sourceMappingURL=responsible-signature-arl-responsible-signature-arl-module-es5.js.map