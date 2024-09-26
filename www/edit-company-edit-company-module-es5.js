function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-company-edit-company-module"], {
  /***/
  "./src/app/pages/companies/edit-company/edit-company-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/pages/companies/edit-company/edit-company-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: EditCompanyPageRoutingModule */

  /***/
  function srcAppPagesCompaniesEditCompanyEditCompanyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCompanyPageRoutingModule", function () {
      return EditCompanyPageRoutingModule;
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


    var _edit_company_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./edit-company.page */
    "./src/app/pages/companies/edit-company/edit-company.page.ts");

    var routes = [{
      path: '',
      component: _edit_company_page__WEBPACK_IMPORTED_MODULE_2__["EditCompanyPage"]
    }];

    var EditCompanyPageRoutingModule = /*#__PURE__*/_createClass(function EditCompanyPageRoutingModule() {
      _classCallCheck(this, EditCompanyPageRoutingModule);
    });

    EditCompanyPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EditCompanyPageRoutingModule
    });
    EditCompanyPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EditCompanyPageRoutingModule_Factory(t) {
        return new (t || EditCompanyPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EditCompanyPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCompanyPageRoutingModule, [{
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
  "./src/app/pages/companies/edit-company/edit-company.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/companies/edit-company/edit-company.module.ts ***!
    \*********************************************************************/

  /*! exports provided: EditCompanyPageModule */

  /***/
  function srcAppPagesCompaniesEditCompanyEditCompanyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCompanyPageModule", function () {
      return EditCompanyPageModule;
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


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _edit_company_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-company-routing.module */
    "./src/app/pages/companies/edit-company/edit-company-routing.module.ts");
    /* harmony import */


    var _edit_company_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-company.page */
    "./src/app/pages/companies/edit-company/edit-company.page.ts");

    var EditCompanyPageModule = /*#__PURE__*/_createClass(function EditCompanyPageModule() {
      _classCallCheck(this, EditCompanyPageModule);
    });

    EditCompanyPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: EditCompanyPageModule
    });
    EditCompanyPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function EditCompanyPageModule_Factory(t) {
        return new (t || EditCompanyPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _edit_company_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCompanyPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EditCompanyPageModule, {
        declarations: [_edit_company_page__WEBPACK_IMPORTED_MODULE_6__["EditCompanyPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _edit_company_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCompanyPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditCompanyPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], _edit_company_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditCompanyPageRoutingModule"]],
          declarations: [_edit_company_page__WEBPACK_IMPORTED_MODULE_6__["EditCompanyPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/companies/edit-company/edit-company.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/companies/edit-company/edit-company.page.ts ***!
    \*******************************************************************/

  /*! exports provided: EditCompanyPage */

  /***/
  function srcAppPagesCompaniesEditCompanyEditCompanyPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCompanyPage", function () {
      return EditCompanyPage;
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


    var src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/companies/companies.service */
    "./src/app/services/companies/companies.service.ts");
    /* harmony import */


    var _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../navbar/navbar.service */
    "./src/app/pages/navbar/navbar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../pipes/municipiosFilter.pipe */
    "./src/app/pipes/municipiosFilter.pipe.ts");

    function EditCompanyPage_form_5_p_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Direcci\xF3n es obligatorio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_ion_item_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-radio", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var tz_r14 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tz_r14.label);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", tz_r14.value);
      }
    }

    function EditCompanyPage_form_5_p_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Indicador de zona es obligatorio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_ion_select_option_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var d_r15 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", d_r15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", d_r15.Nombre_Departamento, " ");
      }
    }

    function EditCompanyPage_form_5_p_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Departamento es obligatorio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_ion_select_option_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var m_r16 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", m_r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", m_r16.NombreMunicipio, " ");
      }
    }

    function EditCompanyPage_form_5_p_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Municipio es obligatorio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_p_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Celular inv\xE1lido.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_p_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Tel\xE9fono inv\xE1lido.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_p_74_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Correo es obligatorio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_p_75_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Correo inv\xE1lido.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_p_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "C\xF3digo postal es obligatorio.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_p_81_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "C\xF3digo postal es inv\xE1lido.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function EditCompanyPage_form_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditCompanyPage_form_5_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-list", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "TD/N\xFAmero Identificaci\xF3n Empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Raz\xF3n Social Empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "ion-textarea", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "ID Sede");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "ion-input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Direcci\xF3n Empresa Sede Principal ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCompanyPage_form_5_Template_ion_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r19.showPopover($event, "direccion");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "ion-icon", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Actualizar Direcci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "ion-input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, EditCompanyPage_form_5_p_26_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Indicador de zona");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-radio-group", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, EditCompanyPage_form_5_ion_item_31_Template, 4, 2, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, EditCompanyPage_form_5_p_32_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Departamento Sede Principal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-select", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function EditCompanyPage_form_5_Template_ion_select_ionChange_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.changeDepartamento();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, EditCompanyPage_form_5_ion_select_option_37_Template, 2, 2, "ion-select-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, EditCompanyPage_form_5_p_38_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Municipio Sede Principal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-select", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, EditCompanyPage_form_5_ion_select_option_43_Template, 2, 2, "ion-select-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](44, "municipiosFilter");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, EditCompanyPage_form_5_p_45_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Estado Sede");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "ion-input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "C\xF3digo/Nombre AE Ppal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "ion-textarea", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Sector Econ\xF3mico");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "ion-textarea", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Celular Contacto");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "ion-input", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](64, EditCompanyPage_form_5_p_64_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Tel\xE9fono Notificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "ion-input", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, EditCompanyPage_form_5_p_69_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Correo Notificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "ion-input", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, EditCompanyPage_form_5_p_74_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](75, EditCompanyPage_form_5_p_75_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "C\xF3digo Postal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](79, "ion-input", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, EditCompanyPage_form_5_p_80_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](81, EditCompanyPage_form_5_p_81_Template, 2, 0, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "TD/No. Identificaci\xF3n Rpte. Legal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "ion-input", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "ion-item", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "ion-label", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Nombre Rpte. Legal");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](89, "ion-input", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "ion-button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditCompanyPage_form_5_Template_ion_button_click_91_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Cancelar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "ion-button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Actualizar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.direccionSede.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.TIPOS_ZONA);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.indicadorZona.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareWith", ctx_r0.compareWith("departamento"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.departamentos);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.departamentoSede.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("compareWith", ctx_r0.compareWith("municipio"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](44, 16, ctx_r0.municipios, ctx_r0.formGroup.controls.departamentoSede.value));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.municipioSede.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.celular.hasError("pattern"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.telefonoNotificacion.hasError("pattern"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.correo.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.correo.hasError("pattern"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.codigoPostal.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.controls.codigoPostal.hasError("pattern"));
      }
    }
    /**
     * Componente para la vista de edición de datos de empresa.
     */


    var EditCompanyPage = /*#__PURE__*/function () {
      function EditCompanyPage(navbarService, route, companiesService, router, alertCtrl, popoverCtrl) {
        _classCallCheck(this, EditCompanyPage);

        this.navbarService = navbarService;
        this.route = route;
        this.companiesService = companiesService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.popoverCtrl = popoverCtrl;
        /**
         * Expresión regular para validar correos electrónicos.
         */

        this.EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        /**
         * Indicadores de zona.
         */

        this.TIPOS_ZONA = [{
          label: 'Urbana',
          value: 'U'
        }, {
          label: 'Rural',
          value: 'R'
        }];
        /**
         * Expresión regular para validar números de teléfono celular.
         */

        this.CELLPHONE_REGEX = /^3[\d]{9}$/;
        /**
         * Expresión regular para validar solo números.
         */

        this.NUMBER_ONLY = /^[0-9]{10}$/;
        /**
         * Expresión regular para validar números de teléfono fijo.
         */

        this.TEL_REGEX = /^[\d]{7,10}$/;
        /**
         * Expresión regular para código postal.
         */

        this.ZIPCODE_REGEX = /^[\d]{6}$/;
        /**
         * Textos de ayuda.
         */

        this.HINTS = {
          direccion: {
            text: 'al dar clic tendrá la posibilidad de actualizar la dirección de la sede principal.',
            highlightedText: 'Estimado usuario: '
          }
        };
      }

      _createClass(EditCompanyPage, [{
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
         * Guarda los cambios.
         */

      }, {
        key: "save",
        value: function save() {
          var _a;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var alert, value, updated, found;
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
                  alert = _context.sent;
                  _context.next = 6;
                  return alert.present();

                case 6:
                  return _context.abrupt("return");

                case 7:
                  value = this.formGroup.value;
                  this.company.eDSedesActualizadas.srtIndicadorZona = value.indicadorZona;
                  this.company.strCelular = value.celular;
                  this.company.strTelefono = value.telefonoNotificacion;
                  this.company.eDSedesActualizadas.strTelefono = this.company.strTelefono;
                  this.company.eDSedesActualizadas.strCelular = this.company.strCelular;
                  this.company.strCorreoElectronico = value.correo;
                  this.company.eDSedesActualizadas.strCorreoElectronico = this.company.strCorreoElectronico;
                  this.company.eDSedesActualizadas.strCodigoPostal = value.codigoPostal;
                  this.company.strCodigoPostal = this.company.eDSedesActualizadas.strCodigoPostal;
                  this.company.eDSedesActualizadas.Fk_Id_Departamento = value.departamentoSede.Pk_Id_Departamento;
                  this.company.eDSedesActualizadas.Nombre_Departamento_Sede = value.departamentoSede.Nombre_Departamento;
                  this.company.Fk_Id_Departamento = this.company.eDSedesActualizadas.Fk_Id_Departamento;
                  this.company.Nombre_Departamento = this.company.eDSedesActualizadas.Nombre_Departamento_Sede;
                  this.company.eDSedesActualizadas.Fk_Id_Municipio = value.municipioSede.IdMunicipio;
                  this.company.eDSedesActualizadas.Nombre_Municipio_Sede = value.municipioSede.NombreMunicipio;
                  this.company.Fk_Id_Municipio = this.company.eDSedesActualizadas.Fk_Id_Municipio;
                  this.company.Nombre_Municipio = this.company.eDSedesActualizadas.Nombre_Municipio_Sede;
                  updated = (_a = this.company.__updated) !== null && _a !== void 0 ? _a : [];
                  found = updated.find(function (m) {
                    return m === 'company-data';
                  });

                  if (!found) {
                    updated.push('company-data');
                    this.company.__updated = updated;
                  }

                  this.cancel();

                case 29:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         * Cancela la edición de la empresa.
         */

      }, {
        key: "cancel",
        value: function cancel() {
          var id = this.route.snapshot.params.id;
          this.router.navigate(["/u/companies/list/".concat(id)], {
            replaceUrl: true
          });
        }
        /**
         * Al cambiar un departamento, se restablece el control para el municipio también.
         */

      }, {
        key: "changeDepartamento",
        value: function changeDepartamento() {
          this.formGroup.controls.municipioSede.reset();
        }
        /**
         * Comparación de objetos para establecer valores en selectores de municipios y departamentos.
         *
         * @param mode Modo.
         */

      }, {
        key: "compareWith",
        value: function compareWith(mode) {
          var key = mode === 'departamento' ? 'Pk_Id_Departamento' : 'IdMunicipio';
          return function (a, b) {
            return a && b ? a[key] === b[key] : a === b;
          };
        }
      }, {
        key: "showPopover",
        value: function showPopover(event, field) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var popover;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.popoverCtrl.create({
                    event: event,
                    component: src_app_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"],
                    componentProps: {
                      text: this.HINTS[field].text,
                      highlightedText: this.HINTS[field].highlightedText
                    }
                  });

                case 2:
                  popover = _context2.sent;
                  _context2.next = 5;
                  return popover.present();

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
        /**
         * Establece la empresa de la vista de edición de datos de empresa.
         */

      }, {
        key: "getCompany",
        value: function getCompany() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var id;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  id = +this.route.snapshot.params.id;
                  _context3.prev = 1;
                  _context3.next = 4;
                  return this.companiesService.prepareCompany(id);

                case 4:
                  this.company = _context3.sent;
                  _context3.next = 10;
                  break;

                case 7:
                  _context3.prev = 7;
                  _context3.t0 = _context3["catch"](1);
                  this.company = this.companiesService.company;

                case 10:
                  if (this.company) {
                    _context3.next = 13;
                    break;
                  }

                  this.cancel();
                  return _context3.abrupt("return");

                case 13:
                  _context3.next = 15;
                  return this.companiesService.departamentos;

                case 15:
                  this.departamentos = _context3.sent;
                  _context3.next = 18;
                  return this.companiesService.municipios;

                case 18:
                  this.municipios = _context3.sent;
                  this.initForm();

                case 20:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this, [[1, 7]]);
          }));
        }
        /**
         * Inicializa el formulario.
         */

      }, {
        key: "initForm",
        value: function initForm() {
          var identificacionEmpresa = "".concat(this.company.str_Sigla_Documento, " ").concat(this.company.strNumeroDcto);
          var identificacionEmpresaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: identificacionEmpresa,
            disabled: true
          });
          var razonSocialEmpresaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.company.strRazonSocial,
            disabled: true
          });
          var idSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.company.eDSedesActualizadas.strNombreSede,
            disabled: true
          });
          var direccionSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.company.eDSedesActualizadas.strDireccion, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          var indicadorZonaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.company.eDSedesActualizadas.srtIndicadorZona, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          var departamento = {
            Pk_Id_Departamento: this.company.eDSedesActualizadas.Fk_Id_Departamento,
            Nombre_Departamento: this.company.eDSedesActualizadas.Nombre_Departamento_Sede
          };
          var departamentoSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](departamento, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          var municipio = {
            IdMunicipio: this.company.eDSedesActualizadas.Fk_Id_Municipio,
            NombreMunicipio: this.company.eDSedesActualizadas.Nombre_Municipio_Sede
          };
          var municipioSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](municipio, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          var estadoSedeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.company.eDSedesActualizadas.strNombreSede,
            disabled: true
          });
          var actividadEconomica = "".concat(this.company.strCodigoActividadEconomica, " ").concat(this.company.strActividadEconomicaNombre);
          var actividadEconomicaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: actividadEconomica,
            disabled: true
          });
          var sectorEconomicoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.company.strDescripcionSectorEconomico,
            disabled: true
          });
          var celularControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.company.strCelular, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.CELLPHONE_REGEX), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.NUMBER_ONLY), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]);
          var telefonoNotificacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.company.strTelefono, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.TEL_REGEX), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.NUMBER_ONLY), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]);
          var correoControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.company.strCorreoElectronico, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.EMAIL_REGEX)]);
          var codigoPostalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.company.eDSedesActualizadas.strCodigoPostal, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.ZIPCODE_REGEX)]);
          var identificacionRepresentante = "".concat(this.company.strSiglaRepresentanteLegal, " ").concat(this.company.strNumeroDcto_Representant_Legal);
          var identificacionRepresentanteControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: identificacionRepresentante,
            disabled: true
          });
          var representanteLegalControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.company.strNombre_Representant_Legal,
            disabled: true
          });
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            identificacionEmpresa: identificacionEmpresaControl,
            razonSocialEmpresa: razonSocialEmpresaControl,
            idSede: idSedeControl,
            direccionSede: direccionSedeControl,
            indicadorZona: indicadorZonaControl,
            departamentoSede: departamentoSedeControl,
            municipioSede: municipioSedeControl,
            estadoSede: estadoSedeControl,
            actividadEconomica: actividadEconomicaControl,
            sectorEconomico: sectorEconomicoControl,
            celular: celularControl,
            telefonoNotificacion: telefonoNotificacionControl,
            correo: correoControl,
            codigoPostal: codigoPostalControl,
            identificacionRepresentante: identificacionRepresentanteControl,
            representanteLegal: representanteLegalControl
          });
        }
      }]);

      return EditCompanyPage;
    }();

    EditCompanyPage.ɵfac = function EditCompanyPage_Factory(t) {
      return new (t || EditCompanyPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navbar_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]));
    };

    EditCompanyPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: EditCompanyPage,
      selectors: [["app-edit-company"]],
      decls: 6,
      vars: 1,
      consts: [[1, "title"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "ion-margin"], ["lines", "none"], [1, "ion-margin-bottom"], ["position", "stacked"], ["formControlName", "identificacionEmpresa"], [1, "textarea-wrapper"], ["autoGrow", "true", "formControlName", "razonSocialEmpresa"], ["formControlName", "idSede"], [1, "tooltip", 3, "click"], ["name", "help-outline", "slot", "icon-only"], [1, "label-link-wrapper"], ["routerLink", "./../../../edit-address", 1, "label-link"], ["formControlName", "direccionSede", "readonly", ""], ["class", "invalid-feedback", 4, "ngIf"], ["formControlName", "indicadorZona"], [4, "ngFor", "ngForOf"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "departamentoSede", 3, "compareWith", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mode", "ios", "interface", "action-sheet", "cancelText", "CANCELAR", "formControlName", "municipioSede", 3, "compareWith"], ["formControlName", "estadoSede"], ["autoGrow", "true", "formControlName", "actividadEconomica"], ["autoGrow", "true", "formControlName", "sectorEconomico"], ["type", "tel", "maxlength", "10", "formControlName", "celular"], ["type", "tel", "ngModel", "60", "maxlength", "10", "formControlName", "telefonoNotificacion"], ["type", "email", "formControlName", "correo"], ["formControlName", "codigoPostal"], ["formControlName", "identificacionRepresentante"], ["formControlName", "representanteLegal"], [1, "actions-wrapper", "ion-margin-top"], ["color", "light", 3, "click"], ["type", "submit", "color", "primary"], [1, "invalid-feedback"], ["slot", "start", 3, "value"], [3, "value"]],
      template: function EditCompanyPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Actualizaci\xF3n Datos Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, EditCompanyPage_form_5_Template, 95, 19, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RadioValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"]],
      pipes: [_pipes_municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_9__["MunicipiosFilterPipe"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 10px;\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n}\nion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-overflow: initial;\n  white-space: break-spaces;\n  text-align: center;\n  font-size: 1.3rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0;\n  background-color: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --background: inherit;\n  --highlight-height: 0;\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0) scale(1);\n  white-space: break-spaces;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]     .native-input {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-dark);\n  --padding-start: 1rem;\n  --padding-end: 1rem;\n  background-color: var(--ion-color-light);\n  color: var(--ion-color-light-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .textarea-wrapper[_ngcontent-%COMP%] {\n  white-space: normal;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .textarea-wrapper[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-dark);\n  --background: var(--ion-color-medium);\n  --color: var(--ion-color-medium-contrast);\n  --padding-start: 0.7rem;\n  --padding-end: 0.7rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .textarea-wrapper[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]     .native-textarea {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .label-link-wrapper[_ngcontent-%COMP%] {\n  text-align: right;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .label-link-wrapper[_ngcontent-%COMP%]   .label-link[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-weight: bold;\n  text-decoration: none;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .label-link-wrapper[_ngcontent-%COMP%]   .label-link[_ngcontent-%COMP%]:focus-visible {\n  outline: none;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-secondary-contrast);\n  --padding-start: 1px;\n  --padding-end: 1px;\n  --padding-top: 1px;\n  --padding-bottom: 1px;\n  --border-radius: 1rem;\n  font-size: 0.6rem;\n  pointer-events: initial;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .invalid-feedback[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  margin-top: 0.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2VkaXQtY29tcGFueS9DOlxcVXNlcnNcXGNhbHZhcmFkb1xcRG9jdW1lbnRzXFxwcm95ZWN0b1xcQWN0dWFsXFxhbGlzc3RhX3N1bVxcQnJhbmNoZXNcXFJldmlzaW9uX1ZlcnNpb25fQWN0dWFsaXphZGFfMjAyNDA5MjAvc3JjXFxhcHBcXHBhZ2VzXFxjb21wYW5pZXNcXGVkaXQtY29tcGFueVxcZWRpdC1jb21wYW55LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2VkaXQtY29tcGFueS9lZGl0LWNvbXBhbnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7QUNBSjtBREVJO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRE9JO0VBQ0UsVUFBQTtFQUNBLDZCQUFBO0FDSk47QURNTTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUNKUjtBRE9VO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtBQ0xaO0FEU1E7RUFDRSxVQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtBQ1BWO0FEWVk7RUFDRSxVQUFBO0FDVmQ7QURlUTtFQUVFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxzQ0FBQTtBQ2RWO0FEaUJRO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0FDZlY7QURpQlU7RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUNmWjtBRGtCYztFQUNFLFVBQUE7QUNoQmhCO0FEc0JRO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ3BCVjtBRHVCUTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ3JCVjtBRHVCVTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FDckJaO0FEdUJZO0VBQ0UsYUFBQTtBQ3JCZDtBRDBCUTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ3hCVjtBRDJCUTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUN6QlY7QUQ4Qkk7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7QUM1Qk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvZWRpdC1jb21wYW55L2VkaXQtY29tcGFueS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgJiBpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xuXG4gICAgJiAudGl0bGUge1xuICAgICAgdGV4dC1vdmVyZmxvdzogaW5pdGlhbDtcbiAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAmIGlvbi1jYXJkIHtcbiAgICAmIGlvbi1saXN0IHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgJiBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgJi5pdGVtLWludGVyYWN0aXZlLWRpc2FibGVkIHtcbiAgICAgICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24tbGFiZWwge1xuICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgICAgJiA6Om5nLWRlZXAge1xuICAgICAgICAgICAgJiAubmF0aXZlLWlucHV0IHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmIGlvbi1pbnB1dCxcbiAgICAgICAgJiBpb24tc2VsZWN0IHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMXJlbTtcbiAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XG4gICAgICAgIH1cblxuICAgICAgICAmIC50ZXh0YXJlYS13cmFwcGVyIHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgJiBpb24tdGV4dGFyZWEge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjdyZW07XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwLjdyZW07XG5cbiAgICAgICAgICAgICYgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgJiAubmF0aXZlLXRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiBpb24tcmFkaW8tZ3JvdXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmIC5sYWJlbC1saW5rLXdyYXBwZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgJiAubGFiZWwtbGluayB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgJjpmb2N1cy12aXNpYmxlIHtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmIC50b29sdGlwIHtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMXB4O1xuICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDFweDtcbiAgICAgICAgICAtLXBhZGRpbmctdG9wOiAxcHg7XG4gICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMXB4O1xuICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogaW5pdGlhbDtcbiAgICAgICAgfVxuXG4gICAgICAgICYgLmludmFsaWQtZmVlZGJhY2sge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIC5hY3Rpb25zLXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QpO1xufVxuaW9uLWhlYWRlciBpb24tdG9vbGJhciAudGl0bGUge1xuICB0ZXh0LW92ZXJmbG93OiBpbml0aWFsO1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0tYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0uaXRlbS1pbnRlcmFjdGl2ZS1kaXNhYmxlZCBpb24taW5wdXQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCA6Om5nLWRlZXAgLm5hdGl2ZS1pbnB1dCB7XG4gIG9wYWNpdHk6IDE7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQsIGlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIGlvbi1zZWxlY3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcmVtO1xuICAtLXBhZGRpbmctZW5kOiAxcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIC50ZXh0YXJlYS13cmFwcGVyIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSAudGV4dGFyZWEtd3JhcHBlciBpb24tdGV4dGFyZWEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG4gIC0tcGFkZGluZy1zdGFydDogMC43cmVtO1xuICAtLXBhZGRpbmctZW5kOiAwLjdyZW07XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSAudGV4dGFyZWEtd3JhcHBlciBpb24tdGV4dGFyZWEgOjpuZy1kZWVwIC5uYXRpdmUtdGV4dGFyZWEge1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gLmxhYmVsLWxpbmstd3JhcHBlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1saXN0IGlvbi1pdGVtIC5sYWJlbC1saW5rLXdyYXBwZXIgLmxhYmVsLWxpbmsge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tbGlzdCBpb24taXRlbSAubGFiZWwtbGluay13cmFwcGVyIC5sYWJlbC1saW5rOmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gLnRvb2x0aXAge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDFweDtcbiAgLS1wYWRkaW5nLXRvcDogMXB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAxcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgZm9udC1zaXplOiAwLjZyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBpbml0aWFsO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWxpc3QgaW9uLWl0ZW0gLmludmFsaWQtZmVlZGJhY2sge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIC5hY3Rpb25zLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditCompanyPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-edit-company',
          templateUrl: './edit-company.page.html',
          styleUrls: ['./edit-company.page.scss']
        }]
      }], function () {
        return [{
          type: _navbar_navbar_service__WEBPACK_IMPORTED_MODULE_7__["NavbarService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_6__["CompaniesService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=edit-company-edit-company-module-es5.js.map