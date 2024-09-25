function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["exec-log-exec-log-module"], {
  /***/
  "./src/app/pages/exec-log/exec-log-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/exec-log/exec-log-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ExecLogPageRoutingModule */

  /***/
  function srcAppPagesExecLogExecLogRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
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
  function srcAppPagesExecLogExecLogModuleTs(module, __webpack_exports__, __webpack_require__) {
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
  function srcAppPagesExecLogExecLogPageTs(module, __webpack_exports__, __webpack_require__) {
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


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ExecLogPage_ion_col_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_ion_col_4_Template_ion_card_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var menuOpt_r2 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.optionSelectedMenu(menuOpt_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuOpt_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", menuOpt_r2.redirecTo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOpt_r2.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuOpt_r2.title);
      }
    }

    function ExecLogPage_ion_col_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ExecLogPage_ion_col_8_Template_ion_col_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);

          var menuOptHelp_r6 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.optionSelectedMenu(menuOptHelp_r6);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menuOptHelp_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOptHelp_r6.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuOptHelp_r6.title);
      }
    }
    /**
     * Componente para la vista de registro de ejecución.
     */


    var ExecLogPage = /*#__PURE__*/function () {
      function ExecLogPage(menuConfOptions, modalCtrl, storage) {
        _classCallCheck(this, ExecLogPage);

        this.menuConfOptions = menuConfOptions;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
      }

      _createClass(ExecLogPage, [{
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
      }]);

      return ExecLogPage;
    }();

    ExecLogPage.ɵfac = function ExecLogPage_Factory(t) {
      return new (t || ExecLogPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]));
    };

    ExecLogPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ExecLogPage,
      selectors: [["app-exec-log"]],
      decls: 10,
      vars: 6,
      consts: [[1, "backgroundContent"], ["size", "4", 4, "ngFor", "ngForOf"], ["size", "4", 3, "click", 4, "ngFor", "ngForOf"], ["size", "4"], ["mode", "ios", 3, "routerLink", "click"], [1, "vertical-center"], [1, "center"], ["alt", "", 3, "src"], [1, "tituloOpcion"], ["size", "4", 3, "click"]],
      template: function ExecLogPage_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExecLogPage_ion_col_4_Template, 8, 3, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ExecLogPage_ion_col_8_Template, 7, 2, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.optMenuOptions));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 4, ctx.optMenuHelpOptions));
        }
      },
      directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: ["ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 8px !important;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  border: 1px solid #95a6b1;\n  margin: 0px;\n  outline: none !important;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 70%;\n  margin-top: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2V4ZWMtbG9nL2V4ZWMtbG9nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXhlYy1sb2cvZXhlYy1sb2cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjtBRENJO0VBQ0UsWUFBQTtBQ0NOO0FEQU07RUFDRSx1QkFBQTtBQ0VSO0FERFE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7QUNHVjtBRERRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHVjtBRERRO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNHVjtBRERRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0dWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZXhlYy1sb2cvZXhlYy1sb2cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tZ3JpZCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBpb24tcm93IHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiA4cHggIWltcG9ydGFudDtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NWE2YjE7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgICYgLnZlcnRpY2FsLWNlbnRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgICYgLmNlbnRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuICAgICAgICAmIC50aXR1bG9PcGNpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24tY29udGVudCBpb24tZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogOHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWNhcmQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNmIxO1xuICBtYXJnaW46IDBweDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC52ZXJ0aWNhbC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuY2VudGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDcwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0dWxvT3BjaW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSJdfQ== */"]
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
  function srcAppServicesMenuConfiguracionServiceTs(module, __webpack_exports__, __webpack_require__) {
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


      _createClass(MenuConfiguracionService, [{
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

      return MenuConfiguracionService;
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