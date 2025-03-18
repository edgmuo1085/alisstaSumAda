function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"], {
  /***/
  "./src/app/pages/companies/list/list-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/companies/list/list-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ListPageRoutingModule */

  /***/
  function _src_app_pages_companies_list_listRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function () {
      return ListPageRoutingModule;
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


    var _list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/pages/companies/list/list.page.ts");

    var routes = [{
      path: '',
      component: _list_page__WEBPACK_IMPORTED_MODULE_2__["ListPage"]
    }];

    var ListPageRoutingModule = /*#__PURE__*/_createClass(function ListPageRoutingModule() {
      _classCallCheck(this, ListPageRoutingModule);
    });

    ListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListPageRoutingModule
    });
    ListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListPageRoutingModule_Factory(t) {
        return new (t || ListPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListPageRoutingModule, [{
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
  "./src/app/pages/companies/list/list.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/companies/list/list.module.ts ***!
    \*****************************************************/

  /*! exports provided: ListPageModule */

  /***/
  function _src_app_pages_companies_list_listModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPageModule", function () {
      return ListPageModule;
    });
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _list_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./list-routing.module */
    "./src/app/pages/companies/list/list-routing.module.ts");
    /* harmony import */


    var _list_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./list.page */
    "./src/app/pages/companies/list/list.page.ts");

    var ListPageModule = /*#__PURE__*/_createClass(function ListPageModule() {
      _classCallCheck(this, ListPageModule);
    });

    ListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: ListPageModule
    });
    ListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function ListPageModule_Factory(t) {
        return new (t || ListPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ListPageModule, {
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_routing_module__WEBPACK_IMPORTED_MODULE_6__["ListPageRoutingModule"], src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_5__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
          declarations: [_list_page__WEBPACK_IMPORTED_MODULE_7__["ListPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/companies/list/list.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/companies/list/list.page.ts ***!
    \***************************************************/

  /*! exports provided: ListPage */

  /***/
  function _src_app_pages_companies_list_listPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListPage", function () {
      return ListPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/alert/alert.service */
    "./src/app/services/alert/alert.service.ts");
    /* harmony import */


    var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/companies/companies.service */
    "./src/app/services/companies/companies.service.ts");
    /* harmony import */


    var src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/storage.service */
    "./src/app/storage.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pipes_filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../pipes/filterCompanies.pipe */
    "./src/app/pipes/filterCompanies.pipe.ts");

    function ListPage_ng_container_8_ion_item_3_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        company: a0
      };
    };

    function ListPage_ng_container_8_ion_item_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListPage_ng_container_8_ion_item_3_ng_container_1_Template, 1, 0, "ng-container", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var c_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngTemplateOutlet", _r3)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c0, c_r6));
      }
    }

    var _c1 = function _c1() {
      return ["strRazonSocial", "strNumeroDcto", "stringObservaciones"];
    };

    function ListPage_ng_container_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "cdk-virtual-scroll-viewport", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-list", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ListPage_ng_container_8_ion_item_3_Template, 2, 4, "ion-item", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "filterCompanies");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](4, 1, ctx_r0.companies, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c1), ctx_r0.term));
      }
    }

    function ListPage_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Recuerde sincronizar las empresas que se van actualizar aqu\xED.");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "ion-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    }

    var _c2 = function _c2(a0) {
      return [a0];
    };

    function ListPage_ng_template_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-card", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-item", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-item", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-item", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var company_r8 = ctx.company;

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c2, company_r8.Pk_Id_AS_004_Empresas_AMigrar));

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](company_r8.strRazonSocial);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", company_r8.str_Sigla_Documento, ": ", company_r8.strNumeroDcto, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Observaciones: ", company_r8.stringObservaciones, "");
      }
    }
    /**
     * Componente para la vista de listado de empresas migradas.
     */


    var ListPage = /*#__PURE__*/function () {
      function ListPage(companiesService, storageService, alertService) {
        _classCallCheck(this, ListPage);

        this.companiesService = companiesService;
        this.storageService = storageService;
        this.alertService = alertService;
      }

      return _createClass(ListPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.retrieveCompanies();
        }
        /**
         * Obtiene el listado de empresas migradas.
         */

      }, {
        key: "fetchCompanies",
        value: function fetchCompanies() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var _this = this;

            var onSuccess, onError, loading, session;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  onSuccess = function onSuccess(response) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                      return _regeneratorRuntime().wrap(function _callee$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return this.excludeConfirmed(response);

                          case 2:
                            this.companies = _context.sent;

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                      }, _callee, this);
                    }));
                  };

                  onError = function onError(error) {
                    var header;
                    var message;

                    if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                      if (error.status === 417) {
                        header = 'Sin datos';
                        message = 'Estimado usuario, no tiene empresas agendadas para actualizar.';
                      } else {
                        header = 'Error de conexión';
                        message = 'Ha ocurrido un error de conexión con el servidor.';
                      }
                    } else {
                      header = 'Memoria llena';
                      message = 'Compruebe que tiene suficiente espacio disponible en el dispositivo.';
                    }

                    _this.alertService.showAlert(header, message);
                  };

                  _context2.next = 4;
                  return this.alertService.showLoading();

                case 4:
                  loading = _context2.sent;
                  _context2.next = 7;
                  return this.storageService.get('sesion');

                case 7:
                  session = _context2.sent;
                  this.companiesService.fetchCompanies(session.idRegistro).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                    return _this.alertService.hideLoading(loading);
                  })).subscribe(function (r) {
                    return onSuccess(r);
                  }, function (e) {
                    return onError(e);
                  });

                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
        /**
         * Establece las empresas migradas que se encuentren en el almacén de datos.
         */

      }, {
        key: "retrieveCompanies",
        value: function retrieveCompanies() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.t0 = this;
                  _context3.next = 3;
                  return this.companiesService.companies;

                case 3:
                  _context3.t1 = _context3.sent;
                  _context3.next = 6;
                  return _context3.t0.excludeConfirmed.call(_context3.t0, _context3.t1);

                case 6:
                  this.companies = _context3.sent;

                case 7:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
        /**
         * Excluye del listado las compañías que ya hayan sido editadas y confirmadas.
         *
         * Estas compañías solo tienen pendiente el envío de datos, y pueden verse en el módulo
         * _Empresas por enviar_.
         */

      }, {
        key: "excludeConfirmed",
        value: function excludeConfirmed(companies) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var updatedCompanies, confirmed, editables;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.companiesService.updatedCompanies;

                case 2:
                  updatedCompanies = _context4.sent;
                  confirmed = updatedCompanies.filter(function (u) {
                    return u.__confirmed;
                  });
                  editables = companies.filter(function (c) {
                    return !confirmed.find(function (u) {
                      return u.Pk_Id_AS_004_Empresas_AMigrar === c.Pk_Id_AS_004_Empresas_AMigrar;
                    });
                  });
                  return _context4.abrupt("return", editables);

                case 6:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }]);
    }();

    ListPage.ɵfac = function ListPage_Factory(t) {
      return new (t || ListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]));
    };

    ListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ListPage,
      selectors: [["app-list"]],
      decls: 16,
      vars: 2,
      consts: [[1, "ion-no-border"], ["size", "2"], ["mode", "md", "color", "primary", "defaultHref", "/"], ["size", "10"], ["animated", "", "color", "primary", "placeholder", "Buscar", 3, "ionChange"], [1, "ion-padding"], [4, "ngIf", "ngIfElse"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed"], [3, "click"], ["name", "cloud-download-outline"], ["noCompaniesTmp", ""], ["companyTmp", ""], ["itemSize", "150", "minBufferPx", "750", "maxBufferPx", "1500"], ["lines", "none", 1, "companies"], ["class", "company ion-margin-bottom", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "company", "ion-margin-bottom"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "no-companies-wrapper"], [1, "message", "ion-padding"], ["src", "../../../assets/icon/icono_observaciones.svg"], ["name", "arrow-down-outline"], [1, "w-100", 3, "routerLink"], [1, "ion-no-margin"], ["lines", "none"], ["lines", "none", 1, "observaciones"]],
      template: function ListPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "ion-back-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ion-searchbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ionChange", function ListPage_Template_ion_searchbar_ionChange_6_listener($event) {
            return ctx.term = $event.detail.value;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ion-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ListPage_ng_container_8_Template, 5, 6, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "ion-fab", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "ion-fab-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListPage_Template_ion_fab_button_click_10_listener() {
            return ctx.fetchCompanies();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ListPage_ng_template_12_Template, 6, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ListPage_ng_template_14_Template, 9, 7, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.companies == null ? null : ctx.companies.length)("ngIfElse", _r1);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkFixedSizeVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonList"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkVirtualForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgTemplateOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["RouterLinkDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCardContent"]],
      pipes: [_pipes_filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_11__["FilterCompaniesPipe"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  position: relative;\n}\nion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 1rem;\n}\nion-content[_ngcontent-%COMP%]   .companies[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  background-color: transparent;\n}\nion-content[_ngcontent-%COMP%]   .companies[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-top: 0;\n  --background: transparent;\n}\nion-content[_ngcontent-%COMP%]   .companies[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\nion-content[_ngcontent-%COMP%]   .companies[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-secondary-contrast);\n  border-radius: 1rem;\n}\nion-content[_ngcontent-%COMP%]   .companies[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-top: 0;\n  --background: inherit;\n  --color: inherit;\n  --min-height: auto;\n  white-space: break-spaces;\n}\nion-content[_ngcontent-%COMP%]   .companies[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item.observaciones[_ngcontent-%COMP%] {\n  max-height: 4.5rem;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%] {\n  border: 1px solid #344b56;\n  border-radius: 2rem;\n  height: 80%;\n  position: relative;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 65%;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%]  .cdk-virtual-scroll-content-wrapper {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9saXN0L2xpc3QucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGtCQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQU47QURHSTtFQUNFLHFCQUFBO0FDRE47QURPRTtFQUNFLG9CQUFBO0VBQ0EsNkJBQUE7QUNKSjtBRE1JO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDSk47QURNTTtFQUNFLHFCQUFBO0FDSlI7QURNUTtFQUNFLHdDQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0pWO0FET1k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNMZDtBRE9jO0VBQ0Usa0JBQUE7QUNMaEI7QURjRTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNaSjtBRGNJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ1pOO0FEY007RUFDRSxVQUFBO0FDWlI7QURlTTtFQUNFLGlCQUFBO0FDYlI7QURnQk07RUFDRSxlQUFBO0FDZFI7QURvQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ2pCRjtBRG9CSTtFQUNFLFdBQUE7QUNsQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvbGlzdC9saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAmIGlvbi1jb2wge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICYgaW9uLWJhY2stYnV0dG9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIH1cblxuICAgICYgaW9uLXNlYXJjaGJhciB7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDFyZW07XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgJiAuY29tcGFuaWVzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICYgLmNvbXBhbnkge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgJiBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICYgaW9uLWNhcmQge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMXJlbTtcblxuICAgICAgICAgICYgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICAgICAmIGlvbi1pdGVtIHtcbiAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgICAgICAgLS1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAgICAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuXG4gICAgICAgICAgICAgICYub2JzZXJ2YWNpb25lcyB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNC41cmVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJiAubm8tY29tcGFuaWVzLXdyYXBwZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzNDRiNTY7XG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmIC5tZXNzYWdlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmIGltZyB7XG4gICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICB9XG5cbiAgICAgICYgaDMge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgICAgJiBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOjpuZy1kZWVwIHtcbiAgICAmIC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWhlYWRlciBpb24tY29sIGlvbi1iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbmlvbi1oZWFkZXIgaW9uLWNvbCBpb24tc2VhcmNoYmFyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG5pb24tY29udGVudCAuY29tcGFuaWVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLmNvbXBhbmllcyAuY29tcGFueSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLmNvbXBhbmllcyAuY29tcGFueSBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW9uLWNvbnRlbnQgLmNvbXBhbmllcyAuY29tcGFueSBhIGlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5pb24tY29udGVudCAuY29tcGFuaWVzIC5jb21wYW55IGEgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWlubmVyLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAtLWJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIC0tY29sb3I6IGluaGVyaXQ7XG4gIC0tbWluLWhlaWdodDogYXV0bztcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbn1cbmlvbi1jb250ZW50IC5jb21wYW5pZXMgLmNvbXBhbnkgYSBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1pdGVtLm9ic2VydmFjaW9uZXMge1xuICBtYXgtaGVpZ2h0OiA0LjVyZW07XG59XG5pb24tY29udGVudCAubm8tY29tcGFuaWVzLXdyYXBwZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0YjU2O1xuICBib3JkZXItcmFkaXVzOiAycmVtO1xuICBoZWlnaHQ6IDgwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLm5vLWNvbXBhbmllcy13cmFwcGVyIC5tZXNzYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAubm8tY29tcGFuaWVzLXdyYXBwZXIgLm1lc3NhZ2UgaW1nIHtcbiAgd2lkdGg6IDY1JTtcbn1cbmlvbi1jb250ZW50IC5uby1jb21wYW5pZXMtd3JhcHBlciAubWVzc2FnZSBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLm5vLWNvbXBhbmllcy13cmFwcGVyIC5tZXNzYWdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0OjpuZy1kZWVwIC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-list',
          templateUrl: './list.page.html',
          styleUrls: ['./list.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_5__["CompaniesService"]
        }, {
          type: src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]
        }, {
          type: src_app_services_alert_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=list-list-module-es5.js.map