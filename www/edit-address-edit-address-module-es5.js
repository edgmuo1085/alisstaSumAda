function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-address-edit-address-module"], {
  /***/
  "./src/app/pages/companies/edit-address/edit-address-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/companies/edit-address/edit-address-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: EditAddressPageRoutingModule */

  /***/
  function srcAppPagesCompaniesEditAddressEditAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAddressPageRoutingModule", function () {
      return EditAddressPageRoutingModule;
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


    var _edit_address_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit-address.page */
    "./src/app/pages/companies/edit-address/edit-address.page.ts");

    var routes = [{
      path: '',
      component: _edit_address_page__WEBPACK_IMPORTED_MODULE_2__["EditAddressPage"]
    }];

    var EditAddressPageRoutingModule = /*#__PURE__*/_createClass(function EditAddressPageRoutingModule() {
      _classCallCheck(this, EditAddressPageRoutingModule);
    });

    EditAddressPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EditAddressPageRoutingModule
    });
    EditAddressPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EditAddressPageRoutingModule_Factory(t) {
        return new (t || EditAddressPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditAddressPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditAddressPageRoutingModule, [{
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
  "./src/app/pages/companies/edit-address/edit-address.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/companies/edit-address/edit-address.module.ts ***!
    \*********************************************************************/

  /*! exports provided: EditAddressPageModule */

  /***/
  function srcAppPagesCompaniesEditAddressEditAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAddressPageModule", function () {
      return EditAddressPageModule;
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


    var _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./edit-address-routing.module */
    "./src/app/pages/companies/edit-address/edit-address-routing.module.ts");
    /* harmony import */


    var _edit_address_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-address.page */
    "./src/app/pages/companies/edit-address/edit-address.page.ts");

    var EditAddressPageModule = /*#__PURE__*/_createClass(function EditAddressPageModule() {
      _classCallCheck(this, EditAddressPageModule);
    });

    EditAddressPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EditAddressPageModule
    });
    EditAddressPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EditAddressPageModule_Factory(t) {
        return new (t || EditAddressPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditAddressPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditAddressPageModule, {
        declarations: [_edit_address_page__WEBPACK_IMPORTED_MODULE_5__["EditAddressPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditAddressPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditAddressPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _edit_address_routing_module__WEBPACK_IMPORTED_MODULE_4__["EditAddressPageRoutingModule"]],
          declarations: [_edit_address_page__WEBPACK_IMPORTED_MODULE_5__["EditAddressPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/companies/edit-address/edit-address.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/companies/edit-address/edit-address.page.ts ***!
    \*******************************************************************/

  /*! exports provided: EditAddressPage */

  /***/
  function srcAppPagesCompaniesEditAddressEditAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAddressPage", function () {
      return EditAddressPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/companies/companies.service */
    "./src/app/services/companies/companies.service.ts");
    /* harmony import */


    var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../navbar/navbar.service */
    "./src/app/pages/navbar/navbar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditAddressPage_form_5_ion_select_option_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r5.strDescripcionCatologo, " ");
      }
    }

    function EditAddressPage_form_5_ion_select_option_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r6.strDescripcionCatologo, " ");
      }
    }

    function EditAddressPage_form_5_p_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "V\xEDa Generadora es inv\xE1lida.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditAddressPage_form_5_ng_container_55_ion_select_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r12 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", c_r12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r12.strDescripcionCatologo, " ");
      }
    }

    function EditAddressPage_form_5_ng_container_55_ion_select_option_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r13.strDescripcionCatologo, " ");
      }
    }

    function EditAddressPage_form_5_ng_container_55_ion_select_option_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r14.strDescripcionCatologo, " ");
      }
    }

    function EditAddressPage_form_5_ng_container_55_ion_select_option_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r15.strDescripcionCatologo, " ");
      }
    }

    function EditAddressPage_form_5_ng_container_55_ion_select_option_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var t_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", t_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", t_r16.strDescripcionCatologo, " ");
      }
    }

    function EditAddressPage_form_5_ng_container_55_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Complemento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-select", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditAddressPage_form_5_ng_container_55_ion_select_option_5_Template, 2, 2, "ion-select-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Barrio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-select", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, EditAddressPage_form_5_ng_container_55_ion_select_option_10_Template, 2, 2, "ion-select-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Nombre Barrio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Urbanizaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-select", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, EditAddressPage_form_5_ng_container_55_ion_select_option_19_Template, 2, 2, "ion-select-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Nombre Urbanizaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "ion-input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Manzana");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-select", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, EditAddressPage_form_5_ng_container_55_ion_select_option_28_Template, 2, 2, "ion-select-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Nombre Manzana");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "ion-input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Vereda");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Corregimiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Tipo de Predio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-select", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, EditAddressPage_form_5_ng_container_55_ion_select_option_45_Template, 2, 2, "ion-select-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Nombre de Predio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "ion-input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.complementos);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.tiposBarrio);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.tiposUrbanizacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.tiposManzana);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r4.tiposPredio);
      }
    }

    function EditAddressPage_form_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditAddressPage_form_5_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.preview();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Tipo de v\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditAddressPage_form_5_ion_select_option_8_Template, 2, 2, "ion-select-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Nombre o n\xFAmero de v\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Nomenclatura Principal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Prefijo (BIS)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Letra - N\xFAmero que acompa\xF1a prefijo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Cuadrante");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-select", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, EditAddressPage_form_5_ion_select_option_29_Template, 2, 2, "ion-select-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "N\xFAmero V\xEDa Generadora");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "ion-input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, EditAddressPage_form_5_p_34_Template, 2, 0, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Letra que acompa\xF1a la v\xEDa generadora");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Sufijo (BIS)");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "ion-input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Letra - N\xFAmero que acompa\xF1a sufijo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "ion-input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "N\xFAmero de placa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "ion-input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditAddressPage_form_5_Template_ion_item_click_51_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.showComplemento = !ctx_r19.showComplemento;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "ion-icon", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Complemento Direcci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, EditAddressPage_form_5_ng_container_55_Template, 50, 5, "ng-container", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditAddressPage_form_5_Template_ion_button_click_57_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Actualizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.tiposVia);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.tiposCuadrante);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.viaGeneradora.hasError("pattern"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", ctx_r0.showComplemento ? "remove-circle-outline" : "add-circle-outline");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showComplemento);
      }
    }
    /**
     * Componente para la vista de edición de dirección.
     */


    var EditAddressPage = /*#__PURE__*/function () {
      function EditAddressPage(alertCtrl, route, router, navbarService, companiesService) {
        _classCallCheck(this, EditAddressPage);

        this.alertCtrl = alertCtrl;
        this.route = route;
        this.router = router;
        this.navbarService = navbarService;
        this.companiesService = companiesService;
        /**
         * Expresiones regulares para solo números.
         */

        this.ONLY_NUMBERS_REGEX = /^\d*$/;
      }

      _createClass(EditAddressPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.navbarService.setVisibility(false);
          this.formGroup = undefined;
          this.getCompany();
        }
      }, {
        key: "ionViewWillLeave",
        value: function ionViewWillLeave() {
          this.navbarService.setVisibility(true);
        }
        /**
         * Previsualiza la dirección ingresada.
         */

      }, {
        key: "preview",
        value: function preview() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this = this;

            var _alert, value, direccion, alert;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.formGroup.invalid) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 3;
                  return this.alertCtrl.create({
                    header: 'Atención',
                    mode: 'ios',
                    message: 'Compruebe el correcto diligenciamiento de TODOS los campos obligatorios.',
                    buttons: ['ACEPTAR']
                  });

                case 3:
                  _alert = _context.sent;
                  _context.next = 6;
                  return _alert.present();

                case 6:
                  return _context.abrupt("return");

                case 7:
                  value = this.formGroup.value;
                  direccion = '';
                  Object.entries(value).forEach(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        k = _ref2[0],
                        v = _ref2[1];

                    var _a, _b, _c;

                    var currentValue;

                    if (typeof v === 'object') {
                      currentValue = (_b = (_a = v) === null || _a === void 0 ? void 0 : _a.strSigla) !== null && _b !== void 0 ? _b : '';
                    } else {
                      currentValue = (_c = v) !== null && _c !== void 0 ? _c : '';
                    }

                    direccion += " ".concat(currentValue);
                  });
                  direccion = direccion.replace(/\-|(numero|número|num|no|n)(\s|\.|\d)|\.|\,|\;|\#|\&|/gi, '');
                  direccion = direccion.replace(/\s{2,}/gi, ' ');
                  direccion = direccion.replace(/á/, 'a');
                  direccion = direccion.replace(/é/, 'e');
                  direccion = direccion.replace(/í/, 'i');
                  direccion = direccion.replace(/ó/, 'o');
                  direccion = direccion.replace(/ú/, 'u');
                  direccion = direccion.trim();
                  direccion = direccion.toUpperCase();
                  _context.next = 21;
                  return this.alertCtrl.create({
                    header: 'Compruebe la dirección',
                    mode: 'ios',
                    message: direccion,
                    buttons: [{
                      text: 'Confirmar',
                      role: 'confirm',
                      handler: function handler() {
                        return _this.save(direccion);
                      }
                    }, {
                      text: 'Cancelar',
                      role: 'cancel'
                    }]
                  });

                case 21:
                  alert = _context.sent;
                  _context.next = 24;
                  return alert.present();

                case 24:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         * Guarda los cambios.
         *
         * @param direccion Dirección.
         */

      }, {
        key: "save",
        value: function save(direccion) {
          var _a;

          this.company.strDireccion = direccion;
          this.company.eDSedesActualizadas.strDireccion = this.company.strDireccion;
          var updated = (_a = this.company.__updated) !== null && _a !== void 0 ? _a : [];
          var found = updated.find(function (m) {
            return m === 'company-data';
          });

          if (!found) {
            updated.push('company-data');
            this.company.__updated = updated;
          }

          this.cancel();
        }
        /**
         * Cancela la edición de la dirección.
         */

      }, {
        key: "cancel",
        value: function cancel() {
          var id = this.route.snapshot.params.id;
          this.router.navigate(["/u/companies/list/".concat(id, "/edit-company")], {
            replaceUrl: true
          });
        }
        /**
         * Establece la empresa de la vista de edición de datos de empresa.
         */

      }, {
        key: "getCompany",
        value: function getCompany() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var id;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  id = +this.route.snapshot.params.id;
                  _context2.prev = 1;
                  _context2.next = 4;
                  return this.companiesService.prepareCompany(id);

                case 4:
                  this.company = _context2.sent;
                  _context2.next = 10;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](1);
                  this.company = this.companiesService.company;

                case 10:
                  if (this.company) {
                    _context2.next = 13;
                    break;
                  }

                  this.cancel();
                  return _context2.abrupt("return");

                case 13:
                  _context2.next = 15;
                  return this.companiesService.vias;

                case 15:
                  this.tiposVia = _context2.sent;
                  _context2.next = 18;
                  return this.companiesService.cuadrantes;

                case 18:
                  this.tiposCuadrante = _context2.sent;
                  _context2.next = 21;
                  return this.companiesService.complementos;

                case 21:
                  this.complementos = _context2.sent;
                  _context2.next = 24;
                  return this.companiesService.barrios;

                case 24:
                  this.tiposBarrio = _context2.sent;
                  _context2.next = 27;
                  return this.companiesService.urbanizaciones;

                case 27:
                  this.tiposUrbanizacion = _context2.sent;
                  _context2.next = 30;
                  return this.companiesService.manzanas;

                case 30:
                  this.tiposManzana = _context2.sent;
                  _context2.next = 33;
                  return this.companiesService.predios;

                case 33:
                  this.tiposPredio = _context2.sent;
                  this.initForm();

                case 35:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[1, 7]]);
          }));
        }
        /**
         * Inicializa el formulario.
         */

      }, {
        key: "initForm",
        value: function initForm() {
          var tipoViaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var numeroViaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var nomenclaturaPrincipalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var prefijoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var letraPrefijoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var cuadranteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var viaGeneradoraControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.ONLY_NUMBERS_REGEX)]);
          var letraViaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var sufijoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var letraSufijoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var numeroPlacaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.ONLY_NUMBERS_REGEX)]);
          var complementoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var barrioControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var nombreBarrioControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var urbanizacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var nombreUrbanizacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var manzanaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var nombreManzanaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var veredaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var corregimientoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var tipoPredioControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          var nombrePredioControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined);
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            tipoVia: tipoViaControl,
            numeroVia: numeroViaControl,
            nomenclaturaPrincipal: nomenclaturaPrincipalControl,
            prefijo: prefijoControl,
            letraPrefijo: letraPrefijoControl,
            cuadrante: cuadranteControl,
            viaGeneradora: viaGeneradoraControl,
            letraVia: letraViaControl,
            sufijo: sufijoControl,
            letraSufijo: letraSufijoControl,
            numeroPlaca: numeroPlacaControl,
            complemento: complementoControl,
            barrio: barrioControl,
            nombreBarrio: nombreBarrioControl,
            urbanizacion: urbanizacionControl,
            nombreUrbanizacion: nombreUrbanizacionControl,
            manzana: manzanaControl,
            nombreManzana: nombreManzanaControl,
            vereda: veredaControl,
            corregimiento: corregimientoControl,
            tipoPredio: tipoPredioControl,
            nombrePredio: nombrePredioControl
          });
        }
      }]);

      return EditAddressPage;
    }();

    EditAddressPage.ɵfac = function EditAddressPage_Factory(t) {
      return new (t || EditAddressPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompaniesService"]));
    };

    EditAddressPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditAddressPage,
      selectors: [["app-edit-address"]],
      decls: 6,
      vars: 1,
      consts: [[1, "title"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "ion-margin"], ["lines", "none"], [1, "ion-margin-bottom"], ["position", "stacked"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "tipoVia"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "numeroVia"], ["formControlName", "nomenclaturaPrincipal"], ["formControlName", "prefijo"], ["formControlName", "letraPrefijo"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "cuadrante"], ["type", "number", "formControlName", "viaGeneradora"], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "letraVia"], ["formControlName", "sufijo"], ["formControlName", "letraSufijo"], ["type", "number", "formControlName", "numeroPlaca"], [1, "ion-margin-bottom", "bold", 3, "click"], ["slot", "start"], [4, "ngIf"], [1, "actions-wrapper", "ion-margin-top"], ["color", "light", 3, "click"], ["type", "submit", "color", "primary"], [3, "value"], [1, "invalid-feedback"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "complemento"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "barrio"], ["formControlName", "nombreBarrio"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "urbanizacion"], ["formControlName", "nombreUrbanizacion"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "manzana"], ["formControlName", "nombreManzana"], ["formControlName", "vereda"], ["formControlName", "corregimiento"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "tipoPredio"], ["formControlName", "nombrePredio"]],
      template: function EditAddressPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Solicitud Actualizaci\xF3n Sede Principal Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditAddressPage_form_5_Template, 61, 6, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 10px;\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-overflow: initial;\n  white-space: break-spaces;\n  text-align: center;\n  font-size: 1.3rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: inherit;\n  --highlight-height: 0;\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  white-space: break-spaces;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]     .native-input {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-dark);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  background-color: var(--ion-color-light);\n  color: var(--ion-color-light-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  margin-top: 0.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9lZGl0LWFkZHJlc3MvZWRpdC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2VkaXQtYWRkcmVzcy9lZGl0LWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7QUNBSjtBREVJO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRE9JO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FDSk47QURNTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNKUjtBRE9VO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtBQ0xaO0FEU1E7RUFDRSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1BWO0FEWVk7RUFDRSxVQUFBO0FDVmQ7QURlUTtFQUVFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQ2RWO0FEaUJRO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQ2ZWO0FEb0JJO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0FDbEJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2VkaXQtYWRkcmVzcy9lZGl0LWFkZHJlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gICYgaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcblxuICAgICYgLnRpdGxlIHtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XG4gICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgJiBpb24tY2FyZCB7XG4gICAgJiBpb24tbGlzdCB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICYuaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCB7XG4gICAgICAgICAgJiBpb24taW5wdXQge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYgaW9uLWxhYmVsIHtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24taW5wdXQge1xuICAgICAgICAgICYgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICYgLm5hdGl2ZS1pbnB1dCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24taW5wdXQsXG4gICAgICAgICYgaW9uLXNlbGVjdCB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gICAgICAgICAgLS1wYWRkaW5nLWVuZDogMXJlbTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgJiAuaW52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYgLmFjdGlvbnMtd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgfVxuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMTBweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG59XG5pb24taGVhZGVyIGlvbi10b29sYmFyIC50aXRsZSB7XG4gIHRleHQtb3ZlcmZsb3c6IGluaXRpYWw7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgLS1iYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbS5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIGlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IDo6bmctZGVlcCAubmF0aXZlLWlucHV0IHtcbiAgb3BhY2l0eTogMTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCwgaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXNlbGVjdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLXBhZGRpbmctc3RhcnQ6IDFyZW07XG4gIC0tcGFkZGluZy1lbmQ6IDFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gLmludmFsaWQtZmVlZGJhY2sge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5hY3Rpb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditAddressPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-edit-address',
          templateUrl: './edit-address.page.html',
          styleUrls: ['./edit-address.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_6__["NavbarService"]
        }, {
          type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompaniesService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=edit-address-edit-address-module-es5.js.map