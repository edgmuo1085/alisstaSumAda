function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AT-recommendation-recommendation-module"], {
  /***/
  "./src/app/pages/AT/recommendation/recommendation-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/pages/AT/recommendation/recommendation-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: RecommendationPageRoutingModule */

  /***/
  function srcAppPagesATRecommendationRecommendationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendationPageRoutingModule", function () {
      return RecommendationPageRoutingModule;
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


    var _recommendation_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./recommendation.page */
    "./src/app/pages/AT/recommendation/recommendation.page.ts");

    var routes = [{
      path: '',
      component: _recommendation_page__WEBPACK_IMPORTED_MODULE_2__["RecommendationPage"]
    }];

    var RecommendationPageRoutingModule = /*#__PURE__*/_createClass(function RecommendationPageRoutingModule() {
      _classCallCheck(this, RecommendationPageRoutingModule);
    });

    RecommendationPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RecommendationPageRoutingModule
    });
    RecommendationPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RecommendationPageRoutingModule_Factory(t) {
        return new (t || RecommendationPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RecommendationPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendationPageRoutingModule, [{
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
  "./src/app/pages/AT/recommendation/recommendation.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/pages/AT/recommendation/recommendation.module.ts ***!
    \******************************************************************/

  /*! exports provided: RecommendationPageModule */

  /***/
  function srcAppPagesATRecommendationRecommendationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendationPageModule", function () {
      return RecommendationPageModule;
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


    var _recommendation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./recommendation-routing.module */
    "./src/app/pages/AT/recommendation/recommendation-routing.module.ts");
    /* harmony import */


    var _recommendation_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./recommendation.page */
    "./src/app/pages/AT/recommendation/recommendation.page.ts");

    var RecommendationPageModule = /*#__PURE__*/_createClass(function RecommendationPageModule() {
      _classCallCheck(this, RecommendationPageModule);
    });

    RecommendationPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: RecommendationPageModule
    });
    RecommendationPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function RecommendationPageModule_Factory(t) {
        return new (t || RecommendationPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _recommendation_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecommendationPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecommendationPageModule, {
        declarations: [_recommendation_page__WEBPACK_IMPORTED_MODULE_5__["RecommendationPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _recommendation_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecommendationPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendationPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _recommendation_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecommendationPageRoutingModule"]],
          declarations: [_recommendation_page__WEBPACK_IMPORTED_MODULE_5__["RecommendationPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/AT/recommendation/recommendation.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/AT/recommendation/recommendation.page.ts ***!
    \****************************************************************/

  /*! exports provided: RecommendationPage */

  /***/
  function srcAppPagesATRecommendationRecommendationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendationPage", function () {
      return RecommendationPage;
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


    var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RecommendationPage_form_11_ng_container_50_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        recomendacion: a0
      };
    };

    function RecommendationPage_form_11_ng_container_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendationPage_form_11_ng_container_50_ng_container_1_Template, 1, 0, "ng-container", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var r_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, r_r4));
      }
    }

    function RecommendationPage_form_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RecommendationPage_form_11_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Datos del accidente");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "N\xFAmero siniestro");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-input", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "N\xFAmero de identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Nombre trabajador");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "ion-input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Fecha de ocurrencia AT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Descripci\xF3n de AT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-card", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Fecha radicaci\xF3n investigaci\xF3n AT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Fecha remisi\xF3n recomendaciones AT");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "ion-input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-item", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Fecha proyecta del seguimiento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "ion-input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-card-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Recomendaciones enviadas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, RecommendationPage_form_11_ng_container_50_Template, 2, 4, "ng-container", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "ion-textarea", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Continuar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.actividad.siniestro.Descripcion_AT);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.actividad.siniestro.Recomendaciones);
      }
    }

    function RecommendationPage_ng_template_12_ion_button_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-checkbox", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recomendacion_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().recomendacion;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./follow-up/" + recomendacion_r8.Pk_Id_SiniestroRecomendaciones);
      }
    }

    function RecommendationPage_ng_template_12_ion_button_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ion-icon", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recomendacion_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().recomendacion;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "./follow-up/" + recomendacion_r8.Pk_Id_SiniestroRecomendaciones);
      }
    }

    function RecommendationPage_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Tipo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Fuente");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ion-checkbox", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Medio");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-checkbox", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Trabajo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-checkbox", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RecommendationPage_ng_template_12_ion_button_19_Template, 2, 1, "ion-button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, RecommendationPage_ng_template_12_ion_button_20_Template, 2, 1, "ion-button", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var recomendacion_r8 = ctx.recomendacion;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](recomendacion_r8.Recomendacion);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", recomendacion_r8.tipoFuente);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", recomendacion_r8.tipoMedio);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", recomendacion_r8.tipoTrabajo);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", recomendacion_r8.diligenciado);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", true);
      }
    }

    var RecommendationPage = /*#__PURE__*/function () {
      function RecommendationPage(cacheService, route, router, alertController) {
        _classCallCheck(this, RecommendationPage);

        this.cacheService = cacheService;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        /**
         * Ruta de la vista de comentarios.
         */

        this.COMMENTS_PATH = '/u/execLog/pending-visits/visit-id/company-info/comments';
        /**
         * Ruta de la vista de recomendaciones.
         */

        this.RECOMMENDATION_PATH = '/u/execLog/pending-visits/visit-id/recommendation';
      }

      _createClass(RecommendationPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.establecerActividad();
          this.initForm();
        }
        /**
         * Guarda la información de la actividad y las recomendaciones asociadas.
         */

      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var recomendacionesCompletadas, alert, body;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  recomendacionesCompletadas = this.actividad.siniestro.Recomendaciones.every(function (r) {
                    return r.diligenciado;
                  });

                  if (!(!recomendacionesCompletadas || this.formGroup.invalid)) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 4;
                  return this.alertController.create({
                    header: 'Datos incompletos',
                    mode: 'ios',
                    message: 'Debe completar todas las recomendaciones y añadir observaciones.',
                    buttons: ['OK']
                  });

                case 4:
                  alert = _context.sent;
                  alert.present();
                  return _context.abrupt("return");

                case 7:
                  body = this.formGroup.value;
                  this.actividad.siniestro.Observaciones = body.observaciones;
                  this.next();

                case 10:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         * Redirige a la siguiente vista. Si en el arreglo de actividades seleccionadas para la visita
         * existen más actividades con recomendaciones con un índice en el arreglo superior del actual,
         * se recargará esta vista con los datos de esa recomendación. En caso de no quedar recomendaciones
         * pendientes, se redirige a la vista de comentarios de la visita.
         */

      }, {
        key: "next",
        value: function next() {
          var actividades = this.cacheService.activitiesSelectedForExec;
          var idActividad = +this.route.snapshot.params.activityId;
          var indice = actividades.findIndex(function (a) {
            return a.id === idActividad;
          });
          var actividad = actividades.find(function (a, index) {
            return index > indice && a.siniestro;
          });
          var path = actividad ? "".concat(this.RECOMMENDATION_PATH, "/").concat(actividad.id) : this.COMMENTS_PATH;
          this.router.navigateByUrl(path);
        }
        /**
         * Establece la actividad a la cuál hacer la recomendaciones.
         */

      }, {
        key: "establecerActividad",
        value: function establecerActividad() {
          var actividades = this.cacheService.activitiesSelectedForExec;
          var idActividad = +this.route.snapshot.params.activityId;
          var actividad = actividades.find(function (a) {
            return a.id === idActividad;
          });
          this.actividad = actividad;
        }
        /**
         * Inicializa el formulario de la recomendación.
         */

      }, {
        key: "initForm",
        value: function initForm() {
          var numeroSiniestroControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.actividad.siniestro.Id_Siniestro,
            disabled: true
          });
          var numeroIdentificacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: this.actividad.siniestro.Doc_Empleado,
            disabled: true
          });
          var nombreTrabajadorControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: "".concat(this.actividad.siniestro.Primer_Nombre, " ").concat(this.actividad.siniestro.Primer_Apellido),
            disabled: true
          });
          var fechaOcurrencia = moment__WEBPACK_IMPORTED_MODULE_5__(this.actividad.siniestro.Fecha_AT);
          var isInvalid = fechaOcurrencia.isBefore(moment__WEBPACK_IMPORTED_MODULE_5__().subtract(100, 'years'));
          var fechaOcurrenciaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: isInvalid ? 'Sin información' : fechaOcurrencia.format('DD/MM/YYYY'),
            disabled: true
          });
          var fechaRadicacion = moment__WEBPACK_IMPORTED_MODULE_5__(this.actividad.siniestro.FechaRadicacionInvestigacionEmpresa);
          isInvalid = fechaRadicacion.isBefore(moment__WEBPACK_IMPORTED_MODULE_5__().subtract(100, 'years'));
          var fechaRadicacionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: isInvalid ? 'Sin información' : fechaRadicacion.format('DD/MM/YYYY'),
            disabled: true
          });
          var fechaRemision = moment__WEBPACK_IMPORTED_MODULE_5__(this.actividad.siniestro.FechaRemisionRecomendacionEmpresa);
          isInvalid = fechaRemision.isBefore(moment__WEBPACK_IMPORTED_MODULE_5__().subtract(100, 'years'));
          var fechaRemisionControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: isInvalid ? 'Sin información' : fechaRemision.format('DD/MM/YYYY'),
            disabled: true
          });
          var fechaProyectada = moment__WEBPACK_IMPORTED_MODULE_5__(this.actividad.siniestro.fechaProyectadaSeguimientoEmpresa);
          isInvalid = fechaProyectada.isBefore(moment__WEBPACK_IMPORTED_MODULE_5__().subtract(100, 'years'));
          var fechaProyectadaControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({
            value: isInvalid ? 'Sin información' : fechaProyectada.format('DD/MM/YYYY'),
            disabled: true
          });
          var observacionesControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.actividad.siniestro.Observaciones, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
          this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            numeroSiniestro: numeroSiniestroControl,
            numeroIdentificacion: numeroIdentificacionControl,
            nombreTrabajador: nombreTrabajadorControl,
            fechaOcurrencia: fechaOcurrenciaControl,
            fechaRadicacion: fechaRadicacionControl,
            fechaRemision: fechaRemisionControl,
            fechaProyectada: fechaProyectadaControl,
            observaciones: observacionesControl
          });
        }
      }]);

      return RecommendationPage;
    }();

    RecommendationPage.ɵfac = function RecommendationPage_Factory(t) {
      return new (t || RecommendationPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]));
    };

    RecommendationPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RecommendationPage,
      selectors: [["app-recommendation"]],
      decls: 14,
      vars: 1,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["recommendation", ""], [3, "formGroup", "ngSubmit"], [1, "background-secondary"], ["lines", "none"], ["formControlName", "numeroSiniestro", 1, "ion-margin-start"], ["position", "stacked"], ["formControlName", "numeroIdentificacion", 1, "ion-margin-top"], ["formControlName", "nombreTrabajador", 1, "ion-margin-top"], [1, "ion-margin-top", "fix-label"], ["formControlName", "fechaOcurrencia", 1, "ion-margin-start"], [1, "background-primary"], [1, "ion-text-justify"], [1, "fix-label"], ["formControlName", "fechaRadicacion", 1, "ion-margin-start"], ["formControlName", "fechaRemision", 1, "ion-margin-start"], ["formControlName", "fechaProyectada", 1, "ion-margin-start"], [4, "ngFor", "ngForOf"], ["placeholder", "Observaciones", "formControlName", "observaciones"], [1, "text-center", "ion-margin"], ["type", "submit"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "recommendation"], [1, "recommendation-text"], [1, "recommendation-type"], [1, "label"], ["slot", "start", "disabled", "true", 3, "checked"], ["lines", "none", 1, "actions", 3, "ngSwitch"], [3, "routerLink", 4, "ngSwitchCase"], ["class", "arrowIcon", 3, "routerLink", 4, "ngSwitchDefault"], [3, "routerLink"], ["color", "success", "checked", "true", "disabled", "true"], [1, "arrowIcon", 3, "routerLink"], ["slot", "icon-only", "name", "arrow-forward-circle-outline"]],
      template: function RecommendationPage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Seguimiento a Recomendaciones AT");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RecommendationPage_form_11_Template, 57, 3, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, RecommendationPage_ng_template_12_Template, 21, 6, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formGroup);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgSwitchDefault"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["RouterLinkDelegate"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding: 0px;\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-card.background-primary[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary);\n  --color: var(--ion-color-primary-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card.background-primary[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: var(--ion-color-primary-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card.background-secondary[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary);\n  --color: var(--ion-color-secondary-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card.background-secondary[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --background: var(--ion-color-secondary-contrast);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1rem;\n  text-transform: uppercase;\n  color: inherit;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n  --color: inherit;\n  --highlight-height: none;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.fix-label[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  max-width: 65%;\n  white-space: break-spaces;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.fix-label[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n  font-size: 0.9rem;\n  color: initial;\n  border-radius: 0.5rem;\n  background-color: var(--ion-color-tertiary);\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  opacity: initial;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[position=stacked][_ngcontent-%COMP%] {\n  width: 100%;\n  transform: translateY(50%);\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  border-radius: 0.5rem;\n  --color: #000000;\n  --padding-top: 8px;\n  --padding-bottom: 8px;\n  --padding-start: 8px;\n  --padding-end: 8px;\n  font-size: 0.8rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[aria-disabled=true][_ngcontent-%COMP%] {\n  --background: var(--ion-color-tertiary);\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[aria-disabled=true][_ngcontent-%COMP%]  .native-input {\n  opacity: 1;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-text[_ngcontent-%COMP%] {\n  height: 150px;\n  overflow: scroll;\n  border-radius: 0.5rem;\n  border: 1px solid var(--ion-color-tertiary-shade);\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  font-size: 0.7rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: bold;\n  align-self: center;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  font-size: inherit;\n  --padding-start: 5px;\n  --inner-padding-end: 0;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item.actions[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  opacity: initial;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%] {\n  margin: 0 5px 0 0;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox.checkbox-disabled[_ngcontent-%COMP%] {\n  opacity: initial;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --background: transparent;\n  --box-shadow: none;\n  --color: var(--ion-color-primary);\n}\nion-content[_ngcontent-%COMP%]   .arrowIcon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL0FUL3JlY29tbWVuZGF0aW9uL3JlY29tbWVuZGF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvQVQvcmVjb21tZW5kYXRpb24vcmVjb21tZW5kYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdRO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwyQkFBQTtBQ0RWO0FES007RUFDRSxZQUFBO0FDSFI7QURXSTtFQUNFLHNDQUFBO0VBQ0EsMENBQUE7QUNSTjtBRFVNO0VBQ0UsK0NBQUE7QUNSUjtBRFlJO0VBQ0Usd0NBQUE7RUFDQSw0Q0FBQTtBQ1ZOO0FEWU07RUFDRSxpREFBQTtBQ1ZSO0FEZU07RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNiUjtBRGtCTTtFQUNFLDZCQUFBO0FDaEJSO0FEa0JRO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FDaEJWO0FEbUJZO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FDakJkO0FEb0JZO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0FDbEJkO0FEc0JVO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtBQ3BCWjtBRHNCWTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDcEJkO0FEd0JVO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUN0Qlo7QUR3Qlk7RUFDRSx1Q0FBQTtBQ3RCZDtBRHlCZ0I7RUFDRSxVQUFBO0FDdkJsQjtBRGdDUTtFQUNFLHFCQUFBO0FDOUJWO0FEaUNRO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxpREFBQTtFQUNBLGFBQUE7QUMvQlY7QURrQ1E7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtBQ2hDVjtBRGtDVTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2hDWjtBRG1DVTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtBQ2pDWjtBRG1DWTtFQUNFLG9CQUFBO0FDakNkO0FEb0NZO0VBQ0UsZ0JBQUE7QUNsQ2Q7QURxQ1k7RUFDRSxpQkFBQTtBQ25DZDtBRHFDYztFQUNFLGdCQUFBO0FDbkNoQjtBRHVDWTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtBQ3JDZDtBRDRDRTtFQUNFLGVBQUE7QUMxQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9BVC9yZWNvbW1lbmRhdGlvbi9yZWNvbW1lbmRhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgJiBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJiBpb24tcm93IHtcbiAgICAgICYgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcblxuICAgICAgICAmIC50aXR1bG8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICYgaW9uLWNhcmQge1xuICAgICYuYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuXG4gICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgICYuYmFja2dyb3VuZC1zZWNvbmRhcnkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuXG4gICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJiBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgJiBpb24tY2FyZC10aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgJiBpb24tbGlzdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICYgaW9uLWl0ZW0ge1xuICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgLS1jb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IG5vbmU7XG5cbiAgICAgICAgICAmLmZpeC1sYWJlbCB7XG4gICAgICAgICAgICAmIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNjUlO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIGlvbi1kYXRldGltZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICAgICAgICAgIGNvbG9yOiBpbml0aWFsO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBpb24tbGFiZWwge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBvcGFjaXR5OiBpbml0aWFsO1xuXG4gICAgICAgICAgICAmW3Bvc2l0aW9uPSdzdGFja2VkJ10ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICAtLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcblxuICAgICAgICAgICAgJlthcmlhLWRpc2FibGVkPSd0cnVlJ10ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSk7XG5cbiAgICAgICAgICAgICAgJjo6bmctZGVlcCB7XG4gICAgICAgICAgICAgICAgJiAubmF0aXZlLWlucHV0IHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYgLnJlY29tbWVuZGF0aW9uIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmIC5yZWNvbW1lbmRhdGlvbi10ZXh0IHtcbiAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICYgLnJlY29tbWVuZGF0aW9uLXR5cGUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XG5cbiAgICAgICAgICAmIC5sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJiBpb24taXRlbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDVweDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG5cbiAgICAgICAgICAgICYuYWN0aW9ucyB7XG4gICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IGluaXRpYWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgaW9uLWNoZWNrYm94IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweCAwIDA7XG5cbiAgICAgICAgICAgICAgJi5jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogaW5pdGlhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmFycm93SWNvbiB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC50aXR1bG8ge1xuICBmb250LXNpemU6IDFyZW07XG4gIHBhZGRpbmc6IDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tY29udGVudCBpb24tY2FyZC5iYWNrZ3JvdW5kLXByaW1hcnkge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQuYmFja2dyb3VuZC1wcmltYXJ5IGlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQuYmFja2dyb3VuZC1zZWNvbmRhcnkge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkLmJhY2tncm91bmQtc2Vjb25kYXJ5IGlvbi1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1jb2xvcjogaW5oZXJpdDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbS5maXgtbGFiZWwgaW9uLWxhYmVsIHtcbiAgbWF4LXdpZHRoOiA2NSU7XG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtLmZpeC1sYWJlbCBpb24tZGF0ZXRpbWUge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBjb2xvcjogaW5pdGlhbDtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnkpO1xuICBvcGFjaXR5OiAxO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24tbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgb3BhY2l0eTogaW5pdGlhbDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsW3Bvc2l0aW9uPXN0YWNrZWRdIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgLS1jb2xvcjogIzAwMDAwMDtcbiAgLS1wYWRkaW5nLXRvcDogOHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiA4cHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXRbYXJpYS1kaXNhYmxlZD10cnVlXSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5KTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0W2FyaWEtZGlzYWJsZWQ9dHJ1ZV06Om5nLWRlZXAgLm5hdGl2ZS1pbnB1dCB7XG4gIG9wYWNpdHk6IDE7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yZWNvbW1lbmRhdGlvbjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAucmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9uLXRleHQge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZSk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yZWNvbW1lbmRhdGlvbiAucmVjb21tZW5kYXRpb24tdHlwZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWNvbnRlbnQgLnJlY29tbWVuZGF0aW9uIC5yZWNvbW1lbmRhdGlvbi10eXBlIC5sYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yZWNvbW1lbmRhdGlvbiAucmVjb21tZW5kYXRpb24tdHlwZSBpb24taXRlbSB7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yZWNvbW1lbmRhdGlvbiAucmVjb21tZW5kYXRpb24tdHlwZSBpb24taXRlbS5hY3Rpb25zIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yZWNvbW1lbmRhdGlvbiAucmVjb21tZW5kYXRpb24tdHlwZSBpb24taXRlbSBpb24tbGFiZWwge1xuICBvcGFjaXR5OiBpbml0aWFsO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAucmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9uLXR5cGUgaW9uLWl0ZW0gaW9uLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwIDVweCAwIDA7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IC5yZWNvbW1lbmRhdGlvbiAucmVjb21tZW5kYXRpb24tdHlwZSBpb24taXRlbSBpb24tY2hlY2tib3guY2hlY2tib3gtZGlzYWJsZWQge1xuICBvcGFjaXR5OiBpbml0aWFsO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCAucmVjb21tZW5kYXRpb24gLnJlY29tbWVuZGF0aW9uLXR5cGUgaW9uLWl0ZW0gaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuaW9uLWNvbnRlbnQgLmFycm93SWNvbiB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendationPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-recommendation',
          templateUrl: './recommendation.page.html',
          styleUrls: ['./recommendation.page.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=AT-recommendation-recommendation-module-es5.js.map