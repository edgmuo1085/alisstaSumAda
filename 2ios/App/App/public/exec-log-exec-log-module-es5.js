function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }

function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }

function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }

function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exec-log-exec-log-module"], {
  /***/
  "./src/app/pages/exec-log/exec-log-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/exec-log/exec-log-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ExecLogPageRoutingModule */

  /***/
  function _src_app_pages_execLog_execLogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExecLogPageRoutingModule", function () {
      return ExecLogPageRoutingModule;
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


    var _exec_log_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./exec-log.page */
    "./src/app/pages/exec-log/exec-log.page.ts");

    var routes = [{
      path: '',
      component: _exec_log_page__WEBPACK_IMPORTED_MODULE_2__["ExecLogPage"]
    }, {
      path: 'pending-visits',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pending-visits-pending-visits-module */
        "pending-visits-pending-visits-module").then(__webpack_require__.bind(null,
        /*! ../pending-visits/pending-visits.module */
        "./src/app/pages/pending-visits/pending-visits.module.ts")).then(function (m) {
          return m.PendingVisitsPageModule;
        });
      }
    }, {
      path: 'tasks-to-send',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | tasks-to-send-tasks-to-send-module */
        [__webpack_require__.e("common"), __webpack_require__.e("tasks-to-send-tasks-to-send-module")]).then(__webpack_require__.bind(null,
        /*! ../tasks-to-send/tasks-to-send.module */
        "./src/app/pages/tasks-to-send/tasks-to-send.module.ts")).then(function (m) {
          return m.TasksToSendPageModule;
        });
      }
    }, {
      path: 'releaseActivities',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | release-activities-release-activities-module */
        "release-activities-release-activities-module").then(__webpack_require__.bind(null,
        /*! ../release-activities/release-activities.module */
        "./src/app/pages/release-activities/release-activities.module.ts")).then(function (m) {
          return m.ReleaseActivitiesPageModule;
        });
      }
    }];

    var ExecLogPageRoutingModule = /*#__PURE__*/_createClass(function ExecLogPageRoutingModule() {
      _classCallCheck(this, ExecLogPageRoutingModule);
    });

    ExecLogPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ExecLogPageRoutingModule
    });
    ExecLogPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ExecLogPageRoutingModule_Factory(t) {
        return new (t || ExecLogPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExecLogPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExecLogPageRoutingModule, [{
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
  "./src/app/pages/exec-log/exec-log.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/exec-log/exec-log.module.ts ***!
    \***************************************************/

  /*! exports provided: ExecLogPageModule */

  /***/
  function _src_app_pages_execLog_execLogModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExecLogPageModule", function () {
      return ExecLogPageModule;
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


    var _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./exec-log-routing.module */
    "./src/app/pages/exec-log/exec-log-routing.module.ts");
    /* harmony import */


    var _exec_log_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./exec-log.page */
    "./src/app/pages/exec-log/exec-log.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var ExecLogPageModule = /*#__PURE__*/_createClass(function ExecLogPageModule() {
      _classCallCheck(this, ExecLogPageModule);
    });

    ExecLogPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ExecLogPageModule
    });
    ExecLogPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function ExecLogPageModule_Factory(t) {
        return new (t || ExecLogPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExecLogPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExecLogPageModule, {
        declarations: [_exec_log_page__WEBPACK_IMPORTED_MODULE_5__["ExecLogPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExecLogPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExecLogPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _exec_log_routing_module__WEBPACK_IMPORTED_MODULE_4__["ExecLogPageRoutingModule"]],
          declarations: [_exec_log_page__WEBPACK_IMPORTED_MODULE_5__["ExecLogPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/exec-log/exec-log.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/exec-log/exec-log.page.ts ***!
    \*************************************************/

  /*! exports provided: ExecLogPage */

  /***/
  function _src_app_pages_execLog_execLogPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExecLogPage", function () {
      return ExecLogPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _components_resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../components/resend-verification-code/resend-verification-code.component */
    "./src/app/components/resend-verification-code/resend-verification-code.component.ts");
    /* harmony import */


    var src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/activities/activityListCompany/activity-list-company.service */
    "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ExecLogPage_ion_row_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ion-progress-bar", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 12);

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

    function ExecLogPage_ion_col_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_ion_col_5_Template_ion_card_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var menuOpt_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.optionSelectedMenu(menuOpt_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuOpt_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuOpt_r3.redirecTo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOpt_r3.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuOpt_r3.title);
      }
    }

    function ExecLogPage_ion_col_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_ion_col_9_Template_ion_col_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var menuOptHelp_r7 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.optionSelectedMenu(menuOptHelp_r7);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuOptHelp_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOptHelp_r7.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 2, menuOptHelp_r7.title));
      }
    }
    /**
     * Componente para la vista de registro de ejecución.
     */


    var ExecLogPage = /*#__PURE__*/function () {
      function ExecLogPage(listActivitiesCompany, loadingCtlr, menuConfOptions, modalCtrl, storage) {
        _classCallCheck(this, ExecLogPage);

        this.listActivitiesCompany = listActivitiesCompany;
        this.loadingCtlr = loadingCtlr;
        this.menuConfOptions = menuConfOptions;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.listActivity = [];
        this.listActivityTotal = 0;
        this.showListPendingVisit = true;
        this.progressBar = {
          visible: false,
          progress: 0,
          records: 0,
          refreshBtnEnable: false
        };
      }

      return _createClass(ExecLogPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.optMenuOptions = this.menuConfOptions.getMenuExceActivities();
          this.optMenuHelpOptions = this.menuConfOptions.getMenuHelpExceActivities();
          this.uploadInfoUser();
        }
      }, {
        key: "optionSelectedMenu",
        value: function optionSelectedMenu(itemSelected) {
          switch (itemSelected.title) {
            case 'Visitas pendientes':
              break;

            case 'Tareas por enviar':
              break;

            case 'Liberar actividades':
              break;

            case 'Recordar código':
              this.showResendVerificationCode();
              break;

            case 'Ayuda PDF':
              break;

            case 'Instructivo':
              break;

            default:
              break;
          }
        }
      }, {
        key: "uploadInfoUser",
        value: function uploadInfoUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var nameUser, nombreCompleto;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.storage.get('sesion');

                case 2:
                  nameUser = _context.sent;
                  nombreCompleto = nameUser.nombre1 + ' ' + nameUser.apellido1;
                  this.nameUserRegister = nombreCompleto;

                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "showResendVerificationCode",
        value: function showResendVerificationCode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var modal;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.modalCtrl.create({
                    component: _components_resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_5__["ResendVerificationCodeComponent"]
                  });

                case 2:
                  modal = _context2.sent;
                  _context2.next = 5;
                  return modal.present();

                case 5:
                  return _context2.abrupt("return", _context2.sent);

                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "listActivities",
        value: function listActivities() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this = this;

            var documentoUsuario;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  this.presentLoading();
                  _context5.next = 3;
                  return this.storage.get('sesion');

                case 3:
                  documentoUsuario = _context5.sent;
                  setTimeout(function () {
                    //TODO: evaluar purgar memoria de array de la lista
                    _this.listActivitiesCompany.listActivityForCompanyPerPage(documentoUsuario).subscribe(function (response) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                        var _this2 = this;

                        var listActivityTotal, listActivity, actasGuardadas;
                        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                          while (1) switch (_context4.prev = _context4.next) {
                            case 0:
                              console.log('Respuesta de actividade', response);
                              listActivityTotal = response.listActivitiesCompany[0].intTotalRegistros;
                              this.listActivityTotal = listActivityTotal;
                              listActivity = response.listActivitiesCompany || [];
                              _context4.next = 6;
                              return this.storage.get('actasAsesoriaSinInternet');

                            case 6:
                              _context4.t0 = _context4.sent;

                              if (_context4.t0) {
                                _context4.next = 9;
                                break;
                              }

                              _context4.t0 = [];

                            case 9:
                              actasGuardadas = _context4.t0;
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
                                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                      while (1) switch (_context3.prev = _context3.next) {
                                        case 0:
                                          this.storage.set('listaActividades', listActivitiesForPage);
                                          _context3.next = 3;
                                          return this.storage.get('listaActividades');

                                        case 3:
                                          this.validateDataListActivities();

                                        case 4:
                                        case "end":
                                          return _context3.stop();
                                      }
                                    }, _callee3, this);
                                  }));
                                });
                              }

                            case 22:
                            case "end":
                              return _context4.stop();
                          }
                        }, _callee4, this);
                      }));
                    }, function (err) {
                      _this.loading.dismiss();

                      _this.showListPendingVisit = false;
                    });
                  }, 2000);

                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "presentLoading",
        value: function presentLoading() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.loadingCtlr.create({
                    mode: 'ios',
                    message: 'Cargando'
                  });

                case 2:
                  this.loading = _context6.sent;
                  return _context6.abrupt("return", this.loading.present());

                case 4:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "validateDataListActivities",
        value: function validateDataListActivities() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var dataListActivities;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.storage.get('listaActividades');

                case 2:
                  dataListActivities = _context7.sent;

                  if (dataListActivities) {
                    this.listActivity = dataListActivities.filter(function (a) {
                      return a.listaActividadesMigradas.length > 0;
                    });
                  } else {
                    this.listActivity = [];
                  }

                case 4:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
        }
      }]);
    }();

    ExecLogPage.ɵfac = function ExecLogPage_Factory(t) {
      return new (t || ExecLogPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]));
    };

    ExecLogPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ExecLogPage,
      selectors: [["app-exec-log"]],
      decls: 20,
      vars: 8,
      consts: [["class", "ion-align-items-center ion-padding", 4, "ngIf"], [1, "backgroundContent"], ["size", "4", 4, "ngFor", "ngForOf"], ["size", "4", 3, "click", 4, "ngFor", "ngForOf"], ["size", "12", 1, "ion-text-center"], [1, "titulo"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed"], [3, "disabled", "click"], ["name", "cloud-download-outline"], [1, "ion-align-items-center", "ion-padding"], ["size", "9"], [3, "value", "buffer"], ["size", "3", 1, "ion-text-right"], ["size", "4"], ["mode", "ios", 3, "routerLink", "click"], [1, "vertical-center"], [1, "center"], ["alt", "", 3, "src"], [1, "tituloOpcion"], ["size", "4", 3, "click"]],
      template: function ExecLogPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ExecLogPage_ion_row_1_Template, 6, 4, "ion-row", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-content", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExecLogPage_ion_col_5_Template, 8, 3, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ExecLogPage_ion_col_9_Template, 9, 4, "ion-col", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-col", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Recuerda sincronizar las actividades migradas desde la web a la aplicaci\xF3n m\xF3vil, tocando el icono de la nube.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-fab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-fab-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_Template_ion_fab_button_click_18_listener() {
            return ctx.listActivities();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-icon", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.progressBar.visible);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 4, ctx.optMenuOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 6, ctx.optMenuHelpOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.progressBar.refreshBtnEnable);
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]],
      styles: ["ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  border: 1px solid #95a6b1;\n  margin: 0px;\n  outline: none !important;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 70%;\n  margin-top: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 90%;\n  border: 1px solid #344b56;\n  border-radius: 50px;\n  margin-top: -15px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  font-weight: bold;\n  color: #344b56;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  margin-bottom: 30px;\n}\n.imgIcono[_ngcontent-%COMP%] {\n  width: auto !important;\n  max-width: 20% !important;\n  height: auto !important;\n  max-height: 45% !important;\n}\nion-fab-button[_ngcontent-%COMP%] {\n  width: 75px;\n  height: 75px;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2V4ZWMtbG9nL2V4ZWMtbG9nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhlYy1sb2cvZXhlYy1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQU07RUFDRSx1QkFBQTtBQ0VSO0FERFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNHVjtBRERRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHVjtBRERRO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNHVjtBRERRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dWO0FERUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQUo7QURLWTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSGQ7QURLWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNIZDtBRFlBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNURjtBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDVEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leGVjLWxvZy9leGVjLWxvZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1ncmlkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGlvbi1yb3cge1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xuICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzk1YTZiMTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgJiAudmVydGljYWwtY2VudGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJiAuY2VudGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICYgLnRpdHVsb09wY2lvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA5MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xuICAgIGlvbi1zbGlkZSB7XG4gICAgICBpb24tZ3JpZCB7XG4gICAgICAgIGlvbi1yb3cge1xuICAgICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgJiAudGl0dWxvIHtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBjb2xvcjogIzM0NGI1NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG59XG5cbi5pbWdJY29ubyB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA0NSUgIWltcG9ydGFudDtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBmb250LXNpemU6IDI0cHg7XG59IiwiaW9uLWNvbnRlbnQgaW9uLWdyaWQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDhweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzk1YTZiMTtcbiAgbWFyZ2luOiAwcHg7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudmVydGljYWwtY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLmNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG4gIHdpZHRoOiA3MCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdHVsb09wY2lvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDkwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdHVsbyB7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMzNDRiNTY7XG59XG5pb24tY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWljb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uaW1nSWNvbm8ge1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWF4LWhlaWdodDogNDUlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1mYWItYnV0dG9uIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ExecLogPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-exec-log',
          templateUrl: './exec-log.page.html',
          styleUrls: ['./exec-log.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_6__["ActivityListCompanyService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
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
  function _src_app_services_menuConfiguracionServiceTs(module, __webpack_exports__, __webpack_require__) {
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


      return _createClass(MenuConfiguracionService, [{
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

  }
}]);
//# sourceMappingURL=exec-log-exec-log-module-es5.js.map