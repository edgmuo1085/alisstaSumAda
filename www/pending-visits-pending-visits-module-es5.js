function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pending-visits-pending-visits-module"], {
  /***/
  "./src/app/pages/pending-visits/pending-visits-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/pending-visits/pending-visits-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: PendingVisitsPageRoutingModule */

  /***/
  function _src_app_pages_pendingVisits_pendingVisitsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingVisitsPageRoutingModule", function () {
      return PendingVisitsPageRoutingModule;
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


    var _pending_visits_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pending-visits.page */
    "./src/app/pages/pending-visits/pending-visits.page.ts");

    var routes = [{
      path: '',
      component: _pending_visits_page__WEBPACK_IMPORTED_MODULE_2__["PendingVisitsPage"]
    }, {
      path: ':id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | visit-visit-module */
        "visit-visit-module").then(__webpack_require__.bind(null,
        /*! ../visit/visit.module */
        "./src/app/pages/visit/visit.module.ts")).then(function (m) {
          return m.VisitPageModule;
        });
      }
    }];

    var PendingVisitsPageRoutingModule = /*#__PURE__*/_createClass(function PendingVisitsPageRoutingModule() {
      _classCallCheck(this, PendingVisitsPageRoutingModule);
    });

    PendingVisitsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PendingVisitsPageRoutingModule
    });
    PendingVisitsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PendingVisitsPageRoutingModule_Factory(t) {
        return new (t || PendingVisitsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PendingVisitsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingVisitsPageRoutingModule, [{
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
  "./src/app/pages/pending-visits/pending-visits.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/pending-visits/pending-visits.module.ts ***!
    \***************************************************************/

  /*! exports provided: PendingVisitsPageModule */

  /***/
  function _src_app_pages_pendingVisits_pendingVisitsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingVisitsPageModule", function () {
      return PendingVisitsPageModule;
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


    var _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pending-visits-routing.module */
    "./src/app/pages/pending-visits/pending-visits-routing.module.ts");
    /* harmony import */


    var _pending_visits_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pending-visits.page */
    "./src/app/pages/pending-visits/pending-visits.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");

    var PendingVisitsPageModule = /*#__PURE__*/_createClass(function PendingVisitsPageModule() {
      _classCallCheck(this, PendingVisitsPageModule);
    });

    PendingVisitsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PendingVisitsPageModule
    });
    PendingVisitsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PendingVisitsPageModule_Factory(t) {
        return new (t || PendingVisitsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__["PendingVisitsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PendingVisitsPageModule, {
        declarations: [_pending_visits_page__WEBPACK_IMPORTED_MODULE_5__["PendingVisitsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__["PendingVisitsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PendingVisitsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"], _pending_visits_routing_module__WEBPACK_IMPORTED_MODULE_4__["PendingVisitsPageRoutingModule"]],
          declarations: [_pending_visits_page__WEBPACK_IMPORTED_MODULE_5__["PendingVisitsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pending-visits/pending-visits.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/pending-visits/pending-visits.page.ts ***!
    \*************************************************************/

  /*! exports provided: PendingVisitsPage */

  /***/
  function _src_app_pages_pendingVisits_pendingVisitsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingVisitsPage", function () {
      return PendingVisitsPage;
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


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/activities/activityListCompany/activity-list-company.service */
    "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
    /* harmony import */


    var _services_network_network_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/network/network.service */
    "./src/app/services/network/network.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/esm2015/scrolling.js");
    /* harmony import */


    var _pipes_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipes/search-company-list.pipe */
    "./src/app/pipes/search-company-list.pipe.ts");

    function PendingVisitsPage_ion_row_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-progress-bar", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.progressBar.progress)("buffer", ctx_r0.progressBar.progress + 0.1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.listActivity.length, "/", ctx_r0.listActivityTotal, "");
      }
    }

    function PendingVisitsPage_ion_slides_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Recuerde sincronizar las actividades que va a ejecutar.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function PendingVisitsPage_ion_list_31_ion_item_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PendingVisitsPage_ion_list_31_ion_item_1_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var activity_r4 = ctx.$implicit;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r6.companySelected(activity_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "M\xF3dulo: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var activity_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("En proceso 0 de ", activity_r4.listaActividadesMigradas.length, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", activity_r4.tipoDocumentoDescripcion, " ", activity_r4.numeroDocumento, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](activity_r4.ModuloNombre);
      }
    }

    var _c0 = function _c0() {
      return ["numeroDocumento", "name"];
    };

    function PendingVisitsPage_ion_list_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PendingVisitsPage_ion_list_31_ion_item_1_Template, 19, 5, "ion-item", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "searchCompanyList");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkVirtualForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](2, 1, ctx_r2.listActivity, ctx_r2.textoBuscar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0), ctx_r2.moduloBuscar));
      }
    }
    /**
     * Componente de la vista de visitas pendientes.
     */


    var PendingVisitsPage = /*#__PURE__*/function () {
      function PendingVisitsPage(listActivitiesCompany, network, storage, net, loadingCtlr, router) {
        _classCallCheck(this, PendingVisitsPage);

        this.listActivitiesCompany = listActivitiesCompany;
        this.network = network;
        this.storage = storage;
        this.net = net;
        this.loadingCtlr = loadingCtlr;
        this.router = router;
        this.listActivity = [];
        this.listActivityTotal = 0;
        this.progressBar = {
          visible: false,
          progress: 0,
          records: 0,
          refreshBtnEnable: false
        };
        this.textoBuscar = '';
        this.moduloBuscar = ''; // Para la prueba

        this.showListPendingVisit = true;
        this.isConnected = false;
      }

      return _createClass(PendingVisitsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.validateDataListActivities();
          this.net.showIPAddress();
        }
        /**
         * Establece el texto a buscar en la lista
         *
         * @param event texto a buscar
         */

      }, {
        key: "search",
        value: function search(event) {
          this.textoBuscar = event.detail.value;
        }
        /**
         * Establece el filtrado por modulo
         *
         * @param event modulo a buscar
         */

      }, {
        key: "searchModulo",
        value: function searchModulo(event) {
          this.moduloBuscar = event.detail.value;
        }
      }, {
        key: "companySelected",
        value: function companySelected(activity) {
          // tslint:disable-next-line: prefer-for-of
          for (var i = 0; i < activity.listaActividadesMigradas.length; i++) {
            activity.listaActividadesMigradas[i].estadoInterno = 'Migradas';
          }

          sessionStorage.companySelected = JSON.stringify(activity);
        }
      }, {
        key: "listActivities",
        value: function listActivities() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var _this = this;

            var documentoUsuario;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  this.presentLoading();
                  _context3.next = 3;
                  return this.storage.get('sesion');

                case 3:
                  documentoUsuario = _context3.sent;
                  setTimeout(function () {
                    _this.listActivitiesCompany.listActivityForCompanyPerPage(documentoUsuario).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                        var _this2 = this;

                        var listActivityTotal, listActivity, actasGuardadas;
                        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                          while (1) switch (_context2.prev = _context2.next) {
                            case 0:
                              console.log('Respuesta de actividade', response);
                              listActivityTotal = response.listActivitiesCompany[0].intTotalRegistros;
                              this.listActivityTotal = listActivityTotal;
                              listActivity = response.listActivitiesCompany || [];
                              _context2.next = 6;
                              return this.storage.get('actasAsesoriaSinInternet');

                            case 6:
                              _context2.t0 = _context2.sent;

                              if (_context2.t0) {
                                _context2.next = 9;
                                break;
                              }

                              _context2.t0 = [];

                            case 9:
                              actasGuardadas = _context2.t0;
                              console.log('Actas Guardadas Metodo: ', actasGuardadas);
                              this.listActivitiesCompany.actasGuardadas = actasGuardadas;
                              this.listActivitiesCompany.listActivitiesFilter(listActivity);
                              this.storage.set('departamentos', response.listDepartamentos);
                              this.storage.set('municipios', response.listMunicipios);
                              this.storage.set('listArchivosSoporte', response.listArchivosSoporte); // Guardar las actividades en un BD local.

                              this.storage.set('listaActividades', listActivity);
                              this.listActivitiesCompany.setActivities(listActivity);
                              this.validateDataListActivities();
                              this.showListPendingVisit = false;
                              this.loading.dismiss();

                              if (listActivity.length < listActivityTotal) {
                                this.listActivitiesCompany.progressBarValues$.subscribe(function (progressBarValues) {
                                  _this2.progressBar = progressBarValues, console.log('Progressss...!!: ', progressBarValues);
                                });
                                this.listActivitiesCompany.listActivityForCompanyForPage(listActivityTotal);
                                this.listActivitiesCompany.activities$.subscribe(function (listActivitiesForPage) {
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                                      while (1) switch (_context.prev = _context.next) {
                                        case 0:
                                          this.storage.set('listaActividades', listActivitiesForPage);
                                          _context.next = 3;
                                          return this.storage.get('listaActividades');

                                        case 3:
                                          this.validateDataListActivities();

                                        case 4:
                                        case "end":
                                          return _context.stop();
                                      }
                                    }, _callee, this);
                                  }));
                                });
                              }

                            case 22:
                            case "end":
                              return _context2.stop();
                          }
                        }, _callee2, this);
                      }));
                    }, function (err) {
                      _this.loading.dismiss();

                      _this.showListPendingVisit = false;
                    });
                  }, 2000);

                case 5:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.loadingCtlr.create({
                    mode: 'ios',
                    message: 'Cargando'
                  });

                case 2:
                  this.loading = _context4.sent;
                  return _context4.abrupt("return", this.loading.present());

                case 4:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "validateDataListActivities",
        value: function validateDataListActivities() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var dataListActivities;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.storage.get('listaActividades');

                case 2:
                  dataListActivities = _context5.sent;

                  if (dataListActivities) {
                    this.listActivity = dataListActivities.filter(function (a) {
                      return a.listaActividadesMigradas.length > 0;
                    });
                  } else {
                    this.listActivity = [];
                  }

                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }]);
    }();

    PendingVisitsPage.ɵfac = function PendingVisitsPage_Factory(t) {
      return new (t || PendingVisitsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    PendingVisitsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PendingVisitsPage,
      selectors: [["app-pending-visits"]],
      decls: 32,
      vars: 3,
      consts: [[1, "ion-no-border"], ["size", "2"], ["slot", "start"], ["mode", "md", "color", "primary", "defaultHref", "/"], ["size", "10"], ["animated", "", "color", "primary", "placeholder", "Buscar", 3, "ionChange"], ["size", "12"], ["placeholder", "Seleccionar m\xF3dulo", "cancelText", "Cancelar", 3, "ionChange"], ["value", "GE"], ["value", "GMP"], ["value", "ASE"], ["value", "INV"], ["value", "REC"], ["value", ""], ["class", "ion-align-items-center", 4, "ngIf"], [1, "ion-padding"], ["mode", "ios", 4, "ngIf"], ["itemSize", "150", "minBufferPx", "750", "maxBufferPx", "1500"], [4, "ngIf"], [1, "ion-align-items-center"], ["size", "9"], [3, "value", "buffer"], ["size", "3", 1, "ion-text-right"], ["mode", "ios"], [1, "ion-text-center"], ["src", "../../../assets/icon/icono_observaciones.svg", "alt", "", 1, "imgIcono"], [1, "titulo"], ["color", "secondary", "routerLink", "./visit-id", "detail", "", 3, "click", 4, "cdkVirtualFor", "cdkVirtualForOf"], ["color", "secondary", "routerLink", "./visit-id", "detail", "", 3, "click"], [2, "width", "100%"], [1, "labelEnProceso"], [1, "nombre-modulo"]],
      template: function PendingVisitsPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-back-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-searchbar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PendingVisitsPage_Template_ion_searchbar_ionChange_8_listener($event) {
            return ctx.search($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "M\xF3dulo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-select", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function PendingVisitsPage_Template_ion_select_ionChange_14_listener($event) {
            return ctx.searchModulo($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-select-option", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Gran Empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-select-option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Gran MiPyMe");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-select-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Asistencia/Asesor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-select-option", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Investigaci\xF3n AT");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-select-option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Reclasificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-select-option", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Todos");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PendingVisitsPage_ion_row_27_Template, 6, 4, "ion-row", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-content", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, PendingVisitsPage_ion_slides_29_Template, 12, 0, "ion-slides", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "cdk-virtual-scroll-viewport", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PendingVisitsPage_ion_list_31_Template, 3, 7, "ion-list", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBar.visible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActivity.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listActivity.length >= 1);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkFixedSizeVirtualScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_9__["CdkVirtualForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      pipes: [_pipes_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_10__["SearchCompanyListPipe"]],
      styles: ["ion-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 30px;\n}\n\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n  --background: transparent;\n}\n\nion-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 15px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 90%;\n  border: 1px solid #344b56;\n  border-radius: 50px;\n  margin-top: -15px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  font-weight: bold;\n  color: #344b56;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .imgIcono[_ngcontent-%COMP%] {\n  width: auto !important;\n  max-width: 65% !important;\n  height: auto !important;\n  max-height: 65% !important;\n}\n\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin-bottom: 30px;\n}\n\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n  background-color: transparent;\n}\n\n.labelEnProceso[_ngcontent-%COMP%] {\n  text-align: end !important;\n  font-size: 13px !important;\n  margin-top: 5px !important;\n}\n\n.nombre-modulo[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%]  .cdk-virtual-scroll-content-wrapper {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL3BlbmRpbmctdmlzaXRzL3BlbmRpbmctdmlzaXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGVuZGluZy12aXNpdHMvcGVuZGluZy12aXNpdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURNUTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0hWOztBRFNBO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFVFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFlZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNWZDs7QURZWTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDVmQ7O0FEWVk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDVmQ7O0FEa0JFO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtBQ2hCSjs7QURvQkE7RUFDRSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsK0JBQUE7QUNqQkY7O0FEb0JBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUNqQkY7O0FEb0JJO0VBQ0UsV0FBQTtBQ2xCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BlbmRpbmctdmlzaXRzL3BlbmRpbmctdmlzaXRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG5cbmlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICBpb24tZ3JpZCB7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgJiAudGl0dWxvIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBjb2xvcjogIzM0NGI1NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYgLmltZ0ljb25vIHtcbiAgICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA2NSUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDY1JSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYgaW9uLWxpc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbi5sYWJlbEVuUHJvY2VzbyB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub21icmUtbW9kdWxvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcblxuICAmOjpuZy1kZWVwIHtcbiAgICAmIC5jZGstdmlydHVhbC1zY3JvbGwtY29udGVudC13cmFwcGVyIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn1cblxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyB7XG4gIGhlaWdodDogOTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzQ0YjU2O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBtYXJnaW4tdG9wOiAtMTVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0dWxvIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzM0NGI1Njtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuaW1nSWNvbm8ge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDY1JSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNjUlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5sYWJlbEVuUHJvY2VzbyB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ub21icmUtbW9kdWxvIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydDo6bmctZGVlcCAuY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PendingVisitsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-pending-visits',
          templateUrl: './pending-visits.page.html',
          styleUrls: ['./pending-visits.page.scss']
        }]
      }], function () {
        return [{
          type: _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"]
        }, {
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_7__["NetworkService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pending-visits-pending-visits-module-es5.js.map