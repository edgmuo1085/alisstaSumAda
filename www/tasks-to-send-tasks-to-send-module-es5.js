function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-to-send-tasks-to-send-module"], {
  /***/
  "./src/app/pages/tasks-to-send/tasks-to-send-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/tasks-to-send/tasks-to-send-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TasksToSendPageRoutingModule */

  /***/
  function srcAppPagesTasksToSendTasksToSendRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksToSendPageRoutingModule", function () {
      return TasksToSendPageRoutingModule;
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


    var _tasks_to_send_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./tasks-to-send.page */
    "./src/app/pages/tasks-to-send/tasks-to-send.page.ts");

    var routes = [{
      path: '',
      component: _tasks_to_send_page__WEBPACK_IMPORTED_MODULE_2__["TasksToSendPage"]
    }];

    var TasksToSendPageRoutingModule = /*#__PURE__*/_createClass(function TasksToSendPageRoutingModule() {
      _classCallCheck(this, TasksToSendPageRoutingModule);
    });

    TasksToSendPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TasksToSendPageRoutingModule
    });
    TasksToSendPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TasksToSendPageRoutingModule_Factory(t) {
        return new (t || TasksToSendPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TasksToSendPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksToSendPageRoutingModule, [{
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
  "./src/app/pages/tasks-to-send/tasks-to-send.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/tasks-to-send/tasks-to-send.module.ts ***!
    \*************************************************************/

  /*! exports provided: TasksToSendPageModule */

  /***/
  function srcAppPagesTasksToSendTasksToSendModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksToSendPageModule", function () {
      return TasksToSendPageModule;
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


    var _tasks_to_send_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./tasks-to-send-routing.module */
    "./src/app/pages/tasks-to-send/tasks-to-send-routing.module.ts");
    /* harmony import */


    var _tasks_to_send_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tasks-to-send.page */
    "./src/app/pages/tasks-to-send/tasks-to-send.page.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var TasksToSendPageModule = /*#__PURE__*/_createClass(function TasksToSendPageModule() {
      _classCallCheck(this, TasksToSendPageModule);
    });

    TasksToSendPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TasksToSendPageModule
    });
    TasksToSendPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TasksToSendPageModule_Factory(t) {
        return new (t || TasksToSendPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _tasks_to_send_routing_module__WEBPACK_IMPORTED_MODULE_4__["TasksToSendPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TasksToSendPageModule, {
        declarations: [_tasks_to_send_page__WEBPACK_IMPORTED_MODULE_5__["TasksToSendPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _tasks_to_send_routing_module__WEBPACK_IMPORTED_MODULE_4__["TasksToSendPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksToSendPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"], _tasks_to_send_routing_module__WEBPACK_IMPORTED_MODULE_4__["TasksToSendPageRoutingModule"]],
          declarations: [_tasks_to_send_page__WEBPACK_IMPORTED_MODULE_5__["TasksToSendPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/tasks-to-send/tasks-to-send.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/tasks-to-send/tasks-to-send.page.ts ***!
    \***********************************************************/

  /*! exports provided: TasksToSendPage */

  /***/
  function srcAppPagesTasksToSendTasksToSendPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TasksToSendPage", function () {
      return TasksToSendPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/activities/advisoryTopic/advisory-topic.service */
    "./src/app/services/activities/advisoryTopic/advisory-topic.service.ts");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/network/network.service */
    "./src/app/services/network/network.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function TasksToSendPage_ion_slides_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "No tiene actas de asesor\xEDa por enviar.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function TasksToSendPage_ion_item_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Raz\xF3n Social");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Identificaci\xF3n Empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Fecha de creaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-col", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Seleccionar Acta de Asesor\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-checkbox", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function TasksToSendPage_ion_item_14_Template_ion_checkbox_ionChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var AdvisoryAct_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.actaSeleccionada($event, AdvisoryAct_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var AdvisoryAct_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", AdvisoryAct_r3.infoCompany.nombre, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", AdvisoryAct_r3.infoCompany.tipoDocumento, " - ", AdvisoryAct_r3.infoCompany.numeroDocumento, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 4, AdvisoryAct_r3.infoSurveyQR.dateCreatedSurvey, "medium"), "");
      }
    }

    function TasksToSendPage_ion_col_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TasksToSendPage_ion_col_18_Template_img_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.sendTasks();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var TasksToSendPage = /*#__PURE__*/function () {
      function TasksToSendPage(storage, toastController, loadingCtlr, cacheService, alertController, advisoryTopicService, net) {
        _classCallCheck(this, TasksToSendPage);

        this.storage = storage;
        this.toastController = toastController;
        this.loadingCtlr = loadingCtlr;
        this.cacheService = cacheService;
        this.alertController = alertController;
        this.advisoryTopicService = advisoryTopicService;
        this.net = net;
        this.listAdvisory = [];
        this.actas = [];
      }

      _createClass(TasksToSendPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInfoUser();
          this.getAdvisoryActsWithoutSending();
        }
      }, {
        key: "getInfoUser",
        value: function getInfoUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.storage.get('sesion');

                case 2:
                  this.infoUserARL = _context.sent;

                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "search",
        value: function search(event) {
          this.textoBuscar = event.detail.value;
        }
      }, {
        key: "getAdvisoryActsWithoutSending",
        value: function getAdvisoryActsWithoutSending() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.storage.get('actasAsesoriaSinInternet');

                case 2:
                  this.listAdvisory = _context2.sent;

                case 3:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "actaSeleccionada",
        value: function actaSeleccionada(event, advisoryAct) {
          if (!event.detail.checked) {
            var index = this.actas.findIndex(function (a) {
              return a === advisoryAct;
            });

            if (index < 0) {
              return;
            }

            this.actas.splice(index, 1);
            return;
          }

          this.actas.push(advisoryAct);
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.toastController.create({
                    message: 'Verifique su conexión a internet.',
                    duration: 2000
                  });

                case 2:
                  toast = _context3.sent;
                  toast.present();

                case 4:
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

          if (status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionStatusEnum"].Offline) {
            this.presentToast();
          }

          return status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["ConnectionStatusEnum"].Online;
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
        key: "sendTasks",
        value: function sendTasks() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var _this = this;

            var checkNetwork, totalActas, actasEnviadas, i, a, toast, acta, response;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  checkNetwork = this.validateNetwork();

                  if (checkNetwork) {
                    _context5.next = 4;
                    break;
                  }

                  this.notification('Atención', 'Compruebe su conexión a internet.');
                  return _context5.abrupt("return");

                case 4:
                  totalActas = this.actas.length;
                  actasEnviadas = [];
                  _context5.next = 8;
                  return this.presentLoading();

                case 8:
                  i = 0;

                case 9:
                  if (!(i < this.actas.length)) {
                    _context5.next = 24;
                    break;
                  }

                  a = this.actas[i];
                  _context5.next = 13;
                  return this.toastController.create({
                    message: "Enviando acta ".concat(i + 1, " de ").concat(totalActas, "..."),
                    duration: 2000
                  });

                case 13:
                  toast = _context5.sent;
                  toast.present();
                  acta = this.buildActa(a);
                  _context5.next = 18;
                  return this.sendTask(acta, a.files);

                case 18:
                  response = _context5.sent;
                  this.cacheService.limpiarVariablesAsesoria();

                  if (response) {
                    actasEnviadas.push(a);
                  }

                case 21:
                  i++;
                  _context5.next = 9;
                  break;

                case 24:
                  this.loading.dismiss();
                  actasEnviadas.forEach(function (a) {
                    return _this.actaSeleccionada({
                      detail: {
                        checked: false
                      }
                    }, a);
                  });
                  this.listAdvisory = this.listAdvisory.filter(function (a) {
                    return actasEnviadas.find(function (aa) {
                      return aa === a;
                    }) === undefined;
                  });
                  this.storage.set('actasAsesoriaSinInternet', this.listAdvisory);
                  this.notification('Atención', 'Los documentos seleccionados se enviaron satisfactoriamente a la web.');

                case 29:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "sendTask",
        value: function sendTask(acta) {
          var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var response, creacionActa, _iterator, _step, f, body;

            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.advisoryTopicService.saveActaAsesoria(acta).toPromise();

                case 2:
                  creacionActa = _context6.sent;
                  creacionActa = creacionActa.split(';');

                  if (!(creacionActa[0] === 'true' && creacionActa[1] !== '-1')) {
                    _context6.next = 26;
                    break;
                  }

                  _iterator = _createForOfIteratorHelper(files);
                  _context6.prev = 6;

                  _iterator.s();

                case 8:
                  if ((_step = _iterator.n()).done) {
                    _context6.next = 15;
                    break;
                  }

                  f = _step.value;
                  body = Object.assign(Object.assign({}, f), {
                    UidActaAsesoria: +creacionActa[1]
                  });
                  _context6.next = 13;
                  return this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();

                case 13:
                  _context6.next = 8;
                  break;

                case 15:
                  _context6.next = 20;
                  break;

                case 17:
                  _context6.prev = 17;
                  _context6.t0 = _context6["catch"](6);

                  _iterator.e(_context6.t0);

                case 20:
                  _context6.prev = 20;

                  _iterator.f();

                  return _context6.finish(20);

                case 23:
                  response = true;
                  _context6.next = 28;
                  break;

                case 26:
                  this.notification('Error', 'Ocurrio un error y no se pudo crear el acta de asesoría');
                  response = false;

                case 28:
                  return _context6.abrupt("return", response);

                case 29:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this, [[6, 17, 20, 23]]);
          }));
        }
      }, {
        key: "notification",
        value: function notification(titulo, notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.alertController.create({
                    header: titulo,
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context7.sent;
                  alert.onDidDismiss();
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
         * Construye el cuerpo de la petición para guardar el acta.
         *
         * @param acta Acta.
         */

      }, {
        key: "buildActa",
        value: function buildActa(acta) {
          this.cacheService.saveSurveyARL(acta.infoSurveyARL);
          this.cacheService.saveSurveyQR(acta.infoSurveyQR);
          this.cacheService.saveTypeAdvice(acta.typeAdvisory);
          this.cacheService.saveInfoCompany(acta.infoCompany);
          this.cacheService.saveActivities(acta.activities);
          this.cacheService.saveCommentsAdvice(acta.commentsAdvice);
          var idProveedor = this.infoUserARL.idProveedor;
          var body = this.cacheService.createActaAsesoria(idProveedor);
          return body;
        }
      }]);

      return TasksToSendPage;
    }();

    TasksToSendPage.ɵfac = function TasksToSendPage_Factory(t) {
      return new (t || TasksToSendPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_4__["AdvisoryTopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]));
    };

    TasksToSendPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TasksToSendPage,
      selectors: [["app-tasks-to-send"]],
      decls: 20,
      vars: 3,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding"], ["animated", "", "color", "primary", "placeholder", "Buscar", 3, "ionChange"], ["mode", "ios", 4, "ngIf"], ["color", "secondary", 4, "ngFor", "ngForOf"], ["size", "3"], ["size", "6", 4, "ngIf"], ["mode", "ios"], ["size", "12"], [1, "ion-text-center"], ["src", "../../../assets/icon/icono_observaciones.svg", "alt", "", 1, "imgIcono"], [1, "tituloSlide"], ["color", "secondary"], ["lines", "none"], ["slot", "end", "color", "primary", 3, "ionChange"], ["size", "6"], ["src", "../../../assets/icon/boton_enviar.png", "alt", "enviar", 1, "btnEnviar", 3, "click"]],
      template: function TasksToSendPage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Actas por enviar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-searchbar", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function TasksToSendPage_Template_ion_searchbar_ionChange_11_listener($event) {
            return ctx.search($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, TasksToSendPage_ion_slides_12_Template, 12, 0, "ion-slides", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, TasksToSendPage_ion_item_14_Template, 30, 7, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-col", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TasksToSendPage_ion_col_18_Template, 2, 0, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "ion-col", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(ctx.listAdvisory == null ? null : ctx.listAdvisory.length));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.listAdvisory);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.actas.length);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 1px solid #344b56;\n  border-radius: 50px;\n  margin-top: 40px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloSlide[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  font-weight: bold;\n  color: #344b56;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .imgIcono[_ngcontent-%COMP%] {\n  width: auto !important;\n  max-width: 70% !important;\n  height: auto !important;\n  max-height: 70% !important;\n}\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 15px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  padding-top: 10px;\n  padding: 0px;\n  text-align: left;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL3Rhc2tzLXRvLXNlbmQvdGFza3MtdG8tc2VuZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Rhc2tzLXRvLXNlbmQvdGFza3MtdG8tc2VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERU07RUFDRSxZQUFBO0FDQVI7QURPRTtFQUNFLHFCQUFBO0FDSko7QURNRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRFNZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNQZDtBRFNZO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNQZDtBRGNFO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtBQ1pKO0FEZ0JBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNiRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rhc2tzLXRvLXNlbmQvdGFza3MtdG8tc2VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgICB9XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAmIC50aXR1bG9TbGlkZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzNDRiNTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmIC5pbWdJY29ubyB7XG4gICAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgfVxufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0dWxvU2xpZGUge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzQ0YjU2O1xufVxuaW9uLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5pbWdJY29ubyB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogNzAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXgtaGVpZ2h0OiA3MCUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TasksToSendPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-tasks-to-send',
          templateUrl: './tasks-to-send.page.html',
          styleUrls: ['./tasks-to-send.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_4__["AdvisoryTopicService"]
        }, {
          type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_6__["NetworkService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=tasks-to-send-tasks-to-send-module-es5.js.map