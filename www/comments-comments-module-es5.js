function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"], {
  /***/
  "./src/app/pages/comments/comments-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/comments/comments-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: CommentsPageRoutingModule */

  /***/
  function srcAppPagesCommentsCommentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageRoutingModule", function () {
      return CommentsPageRoutingModule;
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


    var _comments_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/pages/comments/comments.page.ts");

    var routes = [{
      path: '',
      component: _comments_page__WEBPACK_IMPORTED_MODULE_2__["CommentsPage"]
    }, {
      path: 'survey-signature',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | survey-and-signature-survey-and-signature-module */
        [__webpack_require__.e("common"), __webpack_require__.e("survey-and-signature-survey-and-signature-module")]).then(__webpack_require__.bind(null,
        /*! ../survey-and-signature/survey-and-signature.module */
        "./src/app/pages/survey-and-signature/survey-and-signature.module.ts")).then(function (m) {
          return m.SurveyAndSignaturePageModule;
        });
      }
    }];

    var CommentsPageRoutingModule = /*#__PURE__*/_createClass(function CommentsPageRoutingModule() {
      _classCallCheck(this, CommentsPageRoutingModule);
    });

    CommentsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CommentsPageRoutingModule
    });
    CommentsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CommentsPageRoutingModule_Factory(t) {
        return new (t || CommentsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CommentsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommentsPageRoutingModule, [{
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
  "./src/app/pages/comments/comments.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/comments/comments.module.ts ***!
    \***************************************************/

  /*! exports provided: MY_FORMATS, CommentsPageModule */

  /***/
  function srcAppPagesCommentsCommentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () {
      return MY_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function () {
      return CommentsPageModule;
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


    var _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comments-routing.module */
    "./src/app/pages/comments/comments-routing.module.ts");
    /* harmony import */


    var _comments_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comments.page */
    "./src/app/pages/comments/comments.page.ts");
    /* harmony import */


    var _fail_fail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./fail/fail.component */
    "./src/app/pages/comments/fail/fail.component.ts");
    /* harmony import */


    var _success_success_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./success/success.component */
    "./src/app/pages/comments/success/success.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
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

    var CommentsPageModule = /*#__PURE__*/_createClass(function CommentsPageModule() {
      _classCallCheck(this, CommentsPageModule);
    });

    CommentsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CommentsPageModule
    });
    CommentsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function CommentsPageModule_Factory(t) {
        return new (t || CommentsPageModule)();
      },
      providers: [{
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"],
        useValue: 'es-ES'
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MomentDateAdapter"],
        deps: [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],
        useValue: MY_FORMATS
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CommentsPageModule, {
        declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_5__["CommentsPage"], _success_success_component__WEBPACK_IMPORTED_MODULE_7__["SuccessComponent"], _fail_fail_component__WEBPACK_IMPORTED_MODULE_6__["FailComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommentsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _comments_routing_module__WEBPACK_IMPORTED_MODULE_4__["CommentsPageRoutingModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"]],
          declarations: [_comments_page__WEBPACK_IMPORTED_MODULE_5__["CommentsPage"], _success_success_component__WEBPACK_IMPORTED_MODULE_7__["SuccessComponent"], _fail_fail_component__WEBPACK_IMPORTED_MODULE_6__["FailComponent"]],
          providers: [{
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"],
            useValue: 'es-ES'
          }, {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MomentDateAdapter"],
            deps: [_angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_9__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
          }, {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"],
            useValue: MY_FORMATS
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/comments/comments.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/comments/comments.page.ts ***!
    \*************************************************/

  /*! exports provided: CommentsPage */

  /***/
  function srcAppPagesCommentsCommentsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommentsPage", function () {
      return CommentsPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _success_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./success/success.component */
    "./src/app/pages/comments/success/success.component.ts");
    /* harmony import */


    var _fail_fail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./fail/fail.component */
    "./src/app/pages/comments/fail/fail.component.ts");

    function CommentsPage_app_success_21_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-success", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("infoCommentSuccess", function CommentsPage_app_success_21_Template_app_success_infoCommentSuccess_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r2.getInfoComment($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("typeMenu", ctx_r0.subframe);
      }
    }

    function CommentsPage_app_fail_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-fail", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("infoCommentFail", function CommentsPage_app_fail_22_Template_app_fail_infoCommentFail_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.getInfoComment($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("typeMenu", ctx_r1.subframe);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        primary: a0,
        transparent: a1
      };
    };
    /**
     * Componente de la vista de observaciones y recomendaciones.
     */


    var CommentsPage = /*#__PURE__*/function () {
      function CommentsPage(cacheService, router, alertController) {
        _classCallCheck(this, CommentsPage);

        this.cacheService = cacheService;
        this.router = router;
        this.alertController = alertController;
        /**
         * Nombre para visita exitosa.
         */

        this.SUCCESS_FRAME = 'Exitosa';
        /**
         * Nombre para visita fallida.
         */

        this.FAIL_FRAME = 'Fallo';
        this.subframe = this.SUCCESS_FRAME;
        this.opcionMenu = this.subframe;
      }

      _createClass(CommentsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var informacionVisita = this.cacheService.getSaveCommentsAdvice();

          if (Object.keys(informacionVisita).length !== 0) {
            if (informacionVisita.type === 'Fallo') {
              this.switchFrame('Fallo');
            }

            if (informacionVisita.type === 'Exitosa') {
              this.switchFrame('Exitosa');
            }
          }
        }
        /**
         * Cambia el frame del resultado de la visita actualmente activo.
         *
         * @param subframe Nombre del frame que va a volverse activo.
         */

      }, {
        key: "switchFrame",
        value: function switchFrame(subframe) {
          if (this.cacheService.typeAdvice.type === 'Proyecto') {
            this.notification('Atención', 'El tipo de asesoría seleccionada fue por Proyecto');
            this.subframe = this.SUCCESS_FRAME;
            this.opcionMenu = this.subframe;
          } else {
            this.subframe = subframe;
            this.opcionMenu = this.subframe;
          }
        }
      }, {
        key: "getInfoComment",
        value: function getInfoComment(infoComment) {
          this.cacheService.saveCommentsAdvice(infoComment);
          var informacionVisita = this.cacheService.getSaveCommentsAdvice();

          if (informacionVisita.redireccionar === true) {
            this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature');
          }
        }
      }, {
        key: "notification",
        value: function notification(titulo, notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.alertController.create({
                    header: titulo,
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context.sent;
                  alert.onDidDismiss();
                  _context.next = 6;
                  return alert.present();

                case 6:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }]);

      return CommentsPage;
    }();

    CommentsPage.ɵfac = function CommentsPage_Factory(t) {
      return new (t || CommentsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]));
    };

    CommentsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CommentsPage,
      selectors: [["app-comments"]],
      decls: 23,
      vars: 11,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "mt-5", "text-center", "result-selector"], [1, "ion-text-center", 2, "width", "100%"], [1, "result-wrapper", "d-inline-block", "rounded"], [1, "btn", "transparent", "rounded", "ion-text-md-uppercase", 3, "ngClass", "click"], [1, "btn", "primary", "rounded", "ion-text-md-uppercase", 3, "ngClass", "click"], [3, "ngSwitch"], [3, "typeMenu", "infoCommentSuccess", 4, "ngSwitchCase"], [3, "typeMenu", "infoCommentFail", 4, "ngSwitchCase"], [3, "typeMenu", "infoCommentSuccess"], [3, "typeMenu", "infoCommentFail"]],
      template: function CommentsPage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Observaciones y recomendaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\xBFLa asesor\xEDa fue exitosa?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentsPage_Template_button_click_16_listener() {
            return ctx.switchFrame(ctx.SUCCESS_FRAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " S\xED ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CommentsPage_Template_button_click_18_listener() {
            return ctx.switchFrame(ctx.FAIL_FRAME);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " No ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, CommentsPage_app_success_21_Template, 1, 1, "app-success", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CommentsPage_app_fail_22_Template, 1, 1, "app-fail", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c0, ctx.subframe === ctx.SUCCESS_FRAME, ctx.subframe !== ctx.SUCCESS_FRAME));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](8, _c0, ctx.subframe === ctx.FAIL_FRAME, ctx.subframe !== ctx.FAIL_FRAME));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.subframe);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.SUCCESS_FRAME);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.FAIL_FRAME);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _success_success_component__WEBPACK_IMPORTED_MODULE_6__["SuccessComponent"], _fail_fail_component__WEBPACK_IMPORTED_MODULE_7__["FailComponent"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n.result-selector[_ngcontent-%COMP%]   .result-wrapper[_ngcontent-%COMP%] {\n  border: 2px var(--ion-color-primary) solid;\n}\n.result-selector[_ngcontent-%COMP%]   .result-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-right: 50px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 18px !important;\n  text-align: left;\n  padding-top: 15px;\n  padding: 0px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2NvbW1lbnRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbWVudHMvY29tbWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FERU07RUFDRSxxQkFBQTtBQ0FSO0FET0U7RUFDRSwwQ0FBQTtBQ0pKO0FETUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDSk47QURTQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDTkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tZW50cy9jb21tZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgICB9XG4gICAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5yZXN1bHQtc2VsZWN0b3Ige1xuICAmIC5yZXN1bHQtd3JhcHBlciB7XG4gICAgYm9yZGVyOiAycHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIHNvbGlkO1xuXG4gICAgJiAuYnRuIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5yZXN1bHQtc2VsZWN0b3IgLnJlc3VsdC13cmFwcGVyIHtcbiAgYm9yZGVyOiAycHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIHNvbGlkO1xufVxuLnJlc3VsdC1zZWxlY3RvciAucmVzdWx0LXdyYXBwZXIgLmJ0biB7XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CommentsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-comments',
          templateUrl: './comments.page.html',
          styleUrls: ['./comments.page.scss']
        }]
      }], function () {
        return [{
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/comments/fail/fail.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/comments/fail/fail.component.ts ***!
    \*******************************************************/

  /*! exports provided: FailComponent */

  /***/
  function srcAppPagesCommentsFailFailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FailComponent", function () {
      return FailComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    function FailComponent_ion_select_option_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var value_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", value_r2.valor);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](value_r2.valor);
      }
    }

    function FailComponent_ion_item_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nueva fecha de la actividad");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-form-field", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-datepicker-toggle", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-datepicker", null, 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](7);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r3)("min", ctx_r1.minDate)("disabled", ctx_r1.enablenewDateField);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r3);
      }
    }
    /**
     * Componente para la vista de visita fallida.
     */


    var FailComponent = /*#__PURE__*/function () {
      function FailComponent(router, alertController, cacheService, formBuilder) {
        _classCallCheck(this, FailComponent);

        this.router = router;
        this.alertController = alertController;
        this.cacheService = cacheService;
        this.formBuilder = formBuilder;
        this.minDate = new Date();
        this.contador = 0;
        this.showFieldNewDateRepro = false;
        this.infoCommentFail = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * Opciones para la ventana emergente para seleccionar el motivo de la visita fallida.
         */

        this.ALERT_OPTIONS = {
          header: 'Seleccione el motivo'
        };
        this.motivos = [{
          valor: 'Reprogramación'
        }, {
          valor: 'Cancelación de la empresa'
        }, {
          valor: 'Otro motivo'
        }];
        this.enablenewDateField = true;
      }

      _createClass(FailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.initFormCommentFail();
          var informacionVisita = this.cacheService.getSaveCommentsAdvice();

          if (Object.keys(informacionVisita).length !== 0) {
            this.formCommentFail.patchValue({
              description: informacionVisita.description,
              justify: informacionVisita.justify,
              newDateActivity: informacionVisita.newDateActivity
            });
            setTimeout(function () {
              var motivo = _this.validarMotivo(informacionVisita.motive);

              _this.formCommentFail.controls.motive.setValue(motivo);
            }, 500);
          }
        } // Formulario cuando la asesoría no fue exitosa.

      }, {
        key: "initFormCommentFail",
        value: function initFormCommentFail() {
          var _this2 = this;

          this.formCommentFail = this.formBuilder.group({
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            motive: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            justify: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            newDateActivity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
          this.formCommentFail.controls.description.valueChanges.subscribe(function (v) {
            var value = v || '';
            _this2.contador = value.length;
          });
        }
      }, {
        key: "validarMotivo",
        value: function validarMotivo(motivo) {
          switch (motivo) {
            case 'R':
              return 'Reprogramación';
              break;

            case 'C':
              return 'Cancelación de la empresa';
              break;

            case 'O':
              return 'Otro motivo';
              break;

            default:
              break;
          }
        } // Oculta el campo fecha cuando el motivo es diferente a reprogramación.

      }, {
        key: "changeValueMotive",
        value: function changeValueMotive(event) {
          var valueSelected = event.detail.value;

          if (valueSelected === 'Reprogramación') {
            this.enablenewDateField = false;
            this.showFieldNewDateRepro = true;
            this.formCommentFail.controls.newDateActivity.enable();
          } else {
            this.enablenewDateField = true;
            this.showFieldNewDateRepro = false;
            this.formCommentFail.controls.newDateActivity.disable();
          }
        }
        /**
         * Valida en las actividades seleccionadas de la gestión de la asesoria no sea mayor a 1 ya que no se debe
         * permitir que la asesoria no sea exitosa y pedirle al usuario que firme, si no es exitosa se redirecciona
         * a la parte inicial (Lista de actividades)
         */

      }, {
        key: "next",
        value: function next() {
          if (this.formCommentFail.invalid) {
            this.notification('Todos los campos son obligatorios');
            this.infoCommentFail.emit({});
            return;
          }

          var actividadesSeleccionadas = this.cacheService.getSaveActivitiesSelected();

          if (actividadesSeleccionadas.find(function (a) {
            return parseInt(a.horasEjecutadas, 10) > 1;
          })) {
            this.notificationHorasEjecutadas('La asesoría NO exitosa no se permite registrar mas de 1 hora');
            this.infoCommentFail.emit({});
            return;
          }

          var newDateActivity = this.formCommentFail.controls.newDateActivity.value._d ? this.formCommentFail.controls.newDateActivity.value._d.toISOString() : this.formCommentFail.controls.newDateActivity.value;
          var infoCommentFail = {
            type: this.typeMenu,
            typeSelected: this.enablenewDateField,
            description: this.formCommentFail.controls.description.value,
            motive: this.formCommentFail.controls.motive.value.charAt(0),
            justify: this.formCommentFail.controls.justify.value,
            newDateActivity: this.enablenewDateField ? 'N/A' : newDateActivity,
            redireccionar: true
          };
          this.infoCommentFail.emit(infoCommentFail);
        }
      }, {
        key: "notification",
        value: function notification(notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.alertController.create({
                    header: 'Atención',
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context2.sent;
                  _context2.next = 5;
                  return alert.present();

                case 5:
                  alert.onDidDismiss();

                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "notificationHorasEjecutadas",
        value: function notificationHorasEjecutadas(notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            var alert, _yield$alert$onDidDis, data;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.alertController.create({
                    header: 'Atención',
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context3.sent;
                  _context3.next = 5;
                  return alert.present();

                case 5:
                  _context3.next = 7;
                  return alert.onDidDismiss();

                case 7:
                  _yield$alert$onDidDis = _context3.sent;
                  data = _yield$alert$onDidDis.data;
                  this.router.navigateByUrl('u/execLog/pending-visits/visit-id/subjects');

                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }]);

      return FailComponent;
    }();

    FailComponent.ɵfac = function FailComponent_Factory(t) {
      return new (t || FailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    FailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FailComponent,
      selectors: [["app-fail"]],
      inputs: {
        typeMenu: "typeMenu"
      },
      outputs: {
        infoCommentFail: "infoCommentFail"
      },
      decls: 22,
      vars: 4,
      consts: [[1, "formularioFallo", 3, "formGroup"], ["lines", "none"], [1, "p-0"], ["position", "stacked"], ["type", "text", "maxlength", "2000", "placeholder", "Observaciones y/o recomendaciones ...", "formControlName", "description", "rows", "5", 1, "bg-light", "mt-3", "pl-1"], [2, "margin-bottom", "15px"], ["mode", "ios", "interface", "action-sheet", "formControlName", "motive", "cancelText", "CANCELAR", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1", 3, "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "p-0", "mt-3"], ["formControlName", "justify", "rows", "5", 1, "bg-light", "mt-3", "pl-1"], ["class", "p-0 mt-3", 4, "ngIf"], [1, "ion-text-center", "mt-5"], ["color", "primary", 3, "click"], [3, "value"], [1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1", 2, "width", "100%"], ["readonly", "", "matInput", "", "formControlName", "newDateActivity", 3, "matDatepicker", "min", "disabled"], ["matSuffix", "", 3, "for"], ["picker", ""]],
      template: function FailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Observaciones y recomendaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Motivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function FailComponent_Template_ion_select_ionChange_12_listener($event) {
            return ctx.changeValueMotive($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, FailComponent_ion_select_option_13_Template, 2, 2, "ion-select-option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Justificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-textarea", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, FailComponent_ion_item_18_Template, 8, 4, "ion-item", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FailComponent_Template_ion_button_click_20_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Continuar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formCommentFail);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.contador, "/2000");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.motivos);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showFieldNewDateRepro);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"]],
      styles: ["ion-content[_ngcontent-%COMP%]   .formularioFallo[_ngcontent-%COMP%] {\n  margin-bottom: 150px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n.label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  transform: none;\n}\nion-list[_ngcontent-%COMP%] {\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n  .alert-wrapper {\n  --width: calc(100vw - 40px);\n  --max-width: calc(100vw - 40px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2ZhaWwvZmFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbWVudHMvZmFpbC9mYWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7QUNBSjtBREVFO0VBQ0UsZ0JBQUE7QUNBSjtBRENJO0VBQ0Usa0JBQUE7QUNDTjtBREFNO0VBQ0UsbUJBQUE7QUNFUjtBRENJO0VBQ0UscUJBQUE7QUNDTjtBREtFO0VBQ0UsZUFBQTtBQ0ZKO0FETUE7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FDSEY7QURPRTtFQUNFLDJCQUFBO0VBQ0EsK0JBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL2ZhaWwvZmFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgJiAuZm9ybXVsYXJpb0ZhbGxvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbiAgfVxuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBpb24tdGV4dGFyZWEge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB9XG4gIH1cbn1cblxuLmxhYmVsLXN0YWNrZWQge1xuICAmLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuXG46Om5nLWRlZXAge1xuICAuYWxlcnQtd3JhcHBlciB7XG4gICAgLS13aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xuICAgIC0tbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gNDBweCk7XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IC5mb3JtdWxhcmlvRmFsbG8ge1xuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLXRleHRhcmVhIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5sYWJlbC1zdGFja2VkLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgdHJhbnNmb3JtOiBub25lO1xufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5cbjo6bmctZGVlcCAuYWxlcnQtd3JhcHBlciB7XG4gIC0td2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcbiAgLS1tYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA0MHB4KTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-fail',
          templateUrl: './fail.component.html',
          styleUrls: ['./fail.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, {
        typeMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infoCommentFail: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/comments/success/success.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/comments/success/success.component.ts ***!
    \*************************************************************/

  /*! exports provided: SuccessComponent */

  /***/
  function srcAppPagesCommentsSuccessSuccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuccessComponent", function () {
      return SuccessComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var SuccessComponent = /*#__PURE__*/function () {
      function SuccessComponent(formBuilder, router, cacheService) {
        _classCallCheck(this, SuccessComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.cacheService = cacheService;
        this.infoCommentSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.contador = 0;
      }

      _createClass(SuccessComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createFormSuccessComments();
          var informacionVisita = this.cacheService.getSaveCommentsAdvice();

          if (Object.keys(informacionVisita).length !== 0) {
            this.formSuccessComments.patchValue({
              descriptionSuccess: informacionVisita.comment
            });
          }
        }
      }, {
        key: "createFormSuccessComments",
        value: function createFormSuccessComments() {
          var _this3 = this;

          this.formSuccessComments = this.formBuilder.group({
            descriptionSuccess: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.formSuccessComments.controls.descriptionSuccess.valueChanges.subscribe(function (v) {
            var value = v || '';
            _this3.contador = value.length;
          });
        }
      }, {
        key: "next",
        value: function next() {
          if (this.formSuccessComments.valid) {
            var infoCommentSuccess = {
              type: this.typeMenu,
              typeSelected: true,
              comment: this.formSuccessComments.controls.descriptionSuccess.value,
              redireccionar: true
            };
            this.infoCommentSuccess.emit(infoCommentSuccess);
          }
        }
      }]);

      return SuccessComponent;
    }();

    SuccessComponent.ɵfac = function SuccessComponent_Factory(t) {
      return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"]));
    };

    SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SuccessComponent,
      selectors: [["app-success"]],
      inputs: {
        typeMenu: "typeMenu"
      },
      outputs: {
        infoCommentSuccess: "infoCommentSuccess"
      },
      decls: 12,
      vars: 2,
      consts: [["lines", "none"], [3, "formGroup"], [1, "p-0"], ["position", "stacked"], ["type", "text", "maxlength", "2000", "placeholder", "Observaciones y/o recomendaciones...", "formControlName", "descriptionSuccess", "rows", "5", 1, "bg-light", "mt-3", "pl-1"], [1, "ion-text-center", "mt-5"], ["color", "primary", 3, "click"]],
      template: function SuccessComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-list", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Observaciones y recomendaciones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "ion-textarea", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessComponent_Template_ion_button_click_10_listener() {
            return ctx.next();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Continuar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formSuccessComments);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contador, "/2000");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]],
      styles: ["ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n.label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  transform: none;\n}\nion-list[_ngcontent-%COMP%] {\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbW1lbnRzL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbWVudHMvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjtBRENJO0VBQ0Usa0JBQUE7QUNDTjtBREFNO0VBQ0UsbUJBQUE7QUNFUjtBRENJO0VBQ0UscUJBQUE7QUNDTjtBREtFO0VBQ0UsZUFBQTtBQ0ZKO0FETUE7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21tZW50cy9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGlvbi10ZXh0YXJlYSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIH1cbiAgfVxufVxuXG4ubGFiZWwtc3RhY2tlZCB7XG4gICYuc2MtaW9uLWxhYmVsLW1kLWgge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4iLCJpb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi10ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-success',
          templateUrl: './success.component.html',
          styleUrls: ['./success.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_3__["CacheService"]
        }];
      }, {
        typeMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        infoCommentSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=comments-comments-module-es5.js.map