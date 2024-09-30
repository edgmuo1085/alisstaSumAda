function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visit-subjects-visit-subjects-module"], {
  /***/
  "./src/app/pages/visit-subjects/visit-subjects-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/visit-subjects/visit-subjects-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: VisitSubjectsPageRoutingModule */

  /***/
  function srcAppPagesVisitSubjectsVisitSubjectsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitSubjectsPageRoutingModule", function () {
      return VisitSubjectsPageRoutingModule;
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


    var _visit_subjects_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./visit-subjects.page */
    "./src/app/pages/visit-subjects/visit-subjects.page.ts");

    var routes = [{
      path: '',
      component: _visit_subjects_page__WEBPACK_IMPORTED_MODULE_2__["VisitSubjectsPage"]
    }, {
      path: 'upload',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | uploader-uploader-module */
        [__webpack_require__.e("default~responsible-signature-arl-responsible-signature-arl-module~uploader-uploader-module"), __webpack_require__.e("common"), __webpack_require__.e("uploader-uploader-module")]).then(__webpack_require__.bind(null,
        /*! ../uploader/uploader.module */
        "./src/app/pages/uploader/uploader.module.ts")).then(function (m) {
          return m.UploaderPageModule;
        });
      }
    }, {
      path: 'type',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | visit-type-visit-type-module */
        "visit-type-visit-type-module").then(__webpack_require__.bind(null,
        /*! ../visit-type/visit-type.module */
        "./src/app/pages/visit-type/visit-type.module.ts")).then(function (m) {
          return m.VisitTypePageModule;
        });
      }
    }];

    var VisitSubjectsPageRoutingModule = /*#__PURE__*/_createClass(function VisitSubjectsPageRoutingModule() {
      _classCallCheck(this, VisitSubjectsPageRoutingModule);
    });

    VisitSubjectsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VisitSubjectsPageRoutingModule
    });
    VisitSubjectsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VisitSubjectsPageRoutingModule_Factory(t) {
        return new (t || VisitSubjectsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisitSubjectsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitSubjectsPageRoutingModule, [{
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
  "./src/app/pages/visit-subjects/visit-subjects.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/visit-subjects/visit-subjects.module.ts ***!
    \***************************************************************/

  /*! exports provided: VisitSubjectsPageModule */

  /***/
  function srcAppPagesVisitSubjectsVisitSubjectsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitSubjectsPageModule", function () {
      return VisitSubjectsPageModule;
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


    var _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./visit-subjects-routing.module */
    "./src/app/pages/visit-subjects/visit-subjects-routing.module.ts");
    /* harmony import */


    var _visit_subjects_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./visit-subjects.page */
    "./src/app/pages/visit-subjects/visit-subjects.page.ts");

    var VisitSubjectsPageModule = /*#__PURE__*/_createClass(function VisitSubjectsPageModule() {
      _classCallCheck(this, VisitSubjectsPageModule);
    });

    VisitSubjectsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VisitSubjectsPageModule
    });
    VisitSubjectsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function VisitSubjectsPageModule_Factory(t) {
        return new (t || VisitSubjectsPageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitSubjectsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisitSubjectsPageModule, {
        declarations: [_visit_subjects_page__WEBPACK_IMPORTED_MODULE_5__["VisitSubjectsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitSubjectsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitSubjectsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _visit_subjects_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitSubjectsPageRoutingModule"]],
          declarations: [_visit_subjects_page__WEBPACK_IMPORTED_MODULE_5__["VisitSubjectsPage"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/visit-subjects/visit-subjects.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/visit-subjects/visit-subjects.page.ts ***!
    \*************************************************************/

  /*! exports provided: VisitSubjectsPage */

  /***/
  function srcAppPagesVisitSubjectsVisitSubjectsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitSubjectsPage", function () {
      return VisitSubjectsPage;
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


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function VisitSubjectsPage_ion_card_11_ion_badge_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", subject_r2.cantidadDocumentos, " ");
      }
    }

    function VisitSubjectsPage_ion_card_11_ion_item_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Registrar c\xF3digo de evento Educa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-toggle", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function VisitSubjectsPage_ion_card_11_ion_item_43_Template_ion_toggle_ionChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10);

          var subject_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.showInputCodeEdu($event, subject_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function VisitSubjectsPage_ion_card_11_ion_item_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "C\xF3digo de evento Educa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "codeEduca");
      }
    }

    function VisitSubjectsPage_ion_card_11_ion_badge_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-badge", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subject_r2.cantidadDocumentos);
      }
    }

    function VisitSubjectsPage_ion_card_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_card_11_Template_ion_icon_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var subject_r2 = ctx.$implicit;

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.toggleCard(subject_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-card-title", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-card-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Observaciones");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-input", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-col", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "p", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ion-input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Cobertura");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ion-input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-item", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-row", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_card_11_Template_ion_row_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var subject_r2 = ctx.$implicit;

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.attachDocs(subject_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, VisitSubjectsPage_ion_card_11_ion_badge_32_Template, 2, 1, "ion-badge", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Soportes");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-item", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Adjuntar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-item", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-label", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-toggle", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function VisitSubjectsPage_ion_card_11_Template_ion_toggle_ionChange_42_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var subject_r2 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r17.toggleAttachDocs($event, subject_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, VisitSubjectsPage_ion_card_11_ion_item_43_Template, 4, 0, "ion-item", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, VisitSubjectsPage_ion_card_11_ion_item_44_Template, 4, 1, "ion-item", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Incluir esta actividad");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "ion-checkbox", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-card-content", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-item", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "ion-item", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_card_11_Template_ion_item_click_53_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var subject_r2 = ctx.$implicit;

          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r18.attachDocs(subject_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, VisitSubjectsPage_ion_card_11_ion_badge_54_Template, 2, 1, "ion-badge", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "ion-icon", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Adjuntar documento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "ion-item", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ion-label", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Incluir esta actividad");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-checkbox", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VisitSubjectsPage_ion_card_11_Template_ion_checkbox_ngModelChange_61_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var subject_r2 = ctx.$implicit;
          return subject_r2.include = $event;
        })("ngModelChange", function VisitSubjectsPage_ion_card_11_Template_ion_checkbox_ngModelChange_61_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var subject_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r20.emitIncludedOnReactive(subject_r2, i_r3 + "included");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r2 = ctx.$implicit;
        var i_r3 = ctx.index;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", subject_r2.isOpen ? ctx_r0.CLOSE_TOGGLER : ctx_r0.OPEN_TOGGLER);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", subject_r2.idActividad, " contrato ", subject_r2.firmamaQR === 1 ? "(Firma con QR)" : "(Firma sin QR)", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ion-hide", !subject_r2.isOpen);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.subjectForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](subject_r2.descripcionActividad);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subject_r2.observaciones, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" Total de ", subject_r2.uniadMedidaDescripcion, "/ Actividad (Estimada ", subject_r2.cantidadHorasEjecutar, ") ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "horasEjecutadas");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "coverage");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.cantidadDocumentos);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.textSoporte, " se van a adjuntar documentos t\xE9cnicos por Alissta Web");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.lineaAccion === "ED");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.showInputCode);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", i_r3 + "included");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("ion-hide", subject_r2.isOpen);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", subject_r2.descripcionActividad, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", subject_r2.cantidadDocumentos);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", subject_r2.include);
      }
    }

    function VisitSubjectsPage_ion_fab_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitSubjectsPage_ion_fab_12_Template_ion_fab_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.next();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Continuar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }
    /**
     * Componente para la vista de temas de visita.
     */


    var VisitSubjectsPage = /*#__PURE__*/function () {
      function VisitSubjectsPage(alertController, router, cacheService) {
        _classCallCheck(this, VisitSubjectsPage);

        this.alertController = alertController;
        this.router = router;
        this.cacheService = cacheService;
        /**
         * Nombre del ícono para el alternador del tema cuando este está cerrado.
         */

        this.OPEN_TOGGLER = 'chevron-down-outline';
        /**
         * Nombre del ícono para el alternador del tema cuando este está abierto.
         */

        this.CLOSE_TOGGLER = 'chevron-up-outline';
        /**
         * Número máximo de temas seleccionados por operación.
         */

        this.MAX_SUBJECTS = 4;
        /**
         * Textos para la ventana de diálogo que notifica al usuario que ha seleccionado más temas de los
         * permitidos.
         */

        this.ALERT_TEXTS = {
          title: 'Atención',
          mode: 'ios',
          message: 'Puede seleccionar un máximo de cuatro (4) actividades por formulario.',
          okButtonText: 'Aceptar'
        };
        /**
         * Textos para la ventana de diálogo que notifica al usuario que hay que seleccionar por lo menos una
         * actividad.
         *
         */

        this.ALERT_TEXTS_MINACTIVITY = {
          title: 'Atención',
          mode: 'ios',
          message: 'Se debe seleccionar por lo menos (1) actividad para continuar.',
          okButtonText: 'Aceptar'
        };
        this.ALERT_TEXTS_MAXHOREJECUTAR = {
          title: 'Atención',
          mode: 'ios',
          message: 'No puede seleccionar las actividades, debido a que excede las horas permitidas a ejecutar. Las cuales son 10 horas por día',
          okButtonText: 'Aceptar'
        };
        this.ALERT_TEXTS_FIELDSEMPTY = {
          title: 'Atención',
          mode: 'ios',
          message: 'Todos los campos son obligatorios',
          okButtonText: 'Aceptar'
        };
        /**
         * Esta variable permitira insertar la actividad seleccionada,
         * Organizar la interfaz por ahora la pondre any
         */

        this.subjectsSelected = [];
        this.redirect = true;
        this.textSoporte = 'NO';
        this.validarCoberturaHorasEjecutadas = true;
      }

      _createClass(VisitSubjectsPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          // tslint:disable-next-line: prefer-for-of
          if (this.cacheService.infoDocumentosPorActividad.length > 0) {
            var _loop = function _loop(i) {
              var idActividadDocumentos = _this.cacheService.infoDocumentosPorActividad[i].idActividad;

              _this.subjects.forEach(function (element) {
                if (element.id === idActividadDocumentos) {
                  element.cantidadDocumentos = _this.cacheService.infoDocumentosPorActividad[i].cantidadDocumentosAdjuntos;
                }
              });
            };

            // tslint:disable-next-line: prefer-for-of
            for (var i = 0; i < this.cacheService.infoDocumentosPorActividad.length; i++) {
              _loop(i);
            }
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cacheService.limpiarVariablesAsesoria();
          this.updateListAdvisoryTopic();
        }
        /**
         * Muestra u oculta los detalles del tema proporcionado.
         * Si se está mostrando los detalles de un tema y existe otro abierto, lo cierra.
         *
         */

      }, {
        key: "toggleCard",
        value: function toggleCard(subject) {
          subject.isOpen = !subject.isOpen;

          if (subject.isOpen) {
            var openedSubjects = this.subjects.filter(function (s) {
              return s !== subject && s.isOpen;
            });
            openedSubjects.forEach(function (s) {
              return s.isOpen = false;
            });
          }
        }
        /**
         * Alterna el botón que permite subir archivos o no a un tema.
         *
         * @param event Evento que dispara el componente _ion-toggle_.
         * @param subject Tema actual.
         */

      }, {
        key: "toggleAttachDocs",
        value: function toggleAttachDocs(event, subject) {
          subject.attachDocs = event.detail.checked;
          var activo = event.detail.checked;

          if (activo) {
            this.textSoporte = 'SI';
          } else {
            this.textSoporte = 'NO';
          }
        }
        /**
         *
         */

      }, {
        key: "attachDocs",
        value: function attachDocs(subject) {
          this.cacheService.InfoActivityAttachDocs(subject);
          this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects/upload');
        }
      }, {
        key: "emitIncludedOnReactive",
        value: function emitIncludedOnReactive(subject, name) {
          this.subjectForm.controls[name].setValue(subject.include, {
            emitEvent: false
          });
          this.toggleIncludeSubject(subject);
        }
        /**
         * Marca para inclusión el tema proporcionado.
         *
         * Comprueba también el número máximo de temas seleccionados en la operación actual. Por defecto
         * es cuatro (4).
         *
         * @param subject Tema seleccionado.
         * @param name Nombre del campo en el formulario reactivo.
         */

      }, {
        key: "toggleIncludeSubject",
        value: function toggleIncludeSubject(subject) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var existe, validate, i, contrato, attachments, showInputCode, _i, _attachments, _showInputCode, elementRemove, filteredItems, _elementRemove, _filteredItems, okButton, alert, _okButton, _alert;

            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  // subject.include = !subject.include;
                  existe = this.searchSubject(subject);
                  validate = this.searchSubject2(subject);

                  if (existe) {
                    _context.next = 58;
                    break;
                  }

                  subject.estadoInterno = 'Proceso';

                  if (!(this.subjectsSelected.length !== 0 && validate)) {
                    _context.next = 30;
                    break;
                  }

                  i = 0;

                case 6:
                  if (!(i < this.subjectsSelected.length)) {
                    _context.next = 28;
                    break;
                  }

                  contrato = this.subjectsSelected[i].numeroContrato;

                  if (!(contrato === this.subjectsSelected[i].numeroContrato)) {
                    _context.next = 23;
                    break;
                  }

                  this.subjectsSelected.push(subject);

                  if (!(this.subjectsSelected.length > 0)) {
                    _context.next = 21;
                    break;
                  }

                  this.redirectTo = 'type'; // Guardar la linea de acción

                  this.cacheService.saveActionLine(this.subjectsSelected[i].lineaAccion);

                  if (!(this.subjectsSelected[i].lineaAccion === 'ED')) {
                    _context.next = 20;
                    break;
                  }

                  attachments = this.subjectsSelected[i].cantidadDocumentos || 0;
                  showInputCode = this.subjectsSelected[i].showInputCode;

                  if (!(attachments < 1 && !showInputCode)) {
                    _context.next = 20;
                    break;
                  }

                  this.notification('Atención', 'Como la linea de acción es EDUCA, es obligatorio cargar los soportes');
                  this.attachDocs(subject);
                  return _context.abrupt("return");

                case 20:
                  return _context.abrupt("break", 28);

                case 21:
                  _context.next = 25;
                  break;

                case 23:
                  this.redirectTo = '';
                  this.notification('Atención', 'No se puede seleccionar las actividades con contratos diferentes');

                case 25:
                  i++;
                  _context.next = 6;
                  break;

                case 28:
                  _context.next = 56;
                  break;

                case 30:
                  if (!validate) {
                    _context.next = 50;
                    break;
                  }

                  this.subjectsSelected.push(subject);
                  this.redirectTo = 'type'; // tslint:disable-next-line: prefer-for-of

                  _i = 0;

                case 34:
                  if (!(_i < this.subjectsSelected.length)) {
                    _context.next = 47;
                    break;
                  }

                  this.cacheService.saveActionLine(this.subjectsSelected[_i].lineaAccion);

                  if (!(this.subjectsSelected[_i].lineaAccion === 'ED')) {
                    _context.next = 43;
                    break;
                  }

                  _attachments = this.subjectsSelected[_i].cantidadDocumentos || 0;
                  _showInputCode = this.subjectsSelected[_i].showInputCode;

                  if (!(_attachments < 1 && !_showInputCode)) {
                    _context.next = 43;
                    break;
                  }

                  this.notification('Atención', 'Como la linea de acción es EDUCA, es obligatorio cargar los soportes Asistencia a eventos de PyP y Evaluación de eventos');
                  this.attachDocs(subject);
                  return _context.abrupt("return");

                case 43:
                  return _context.abrupt("break", 47);

                case 44:
                  _i++;
                  _context.next = 34;
                  break;

                case 47:
                  if (this.subjectsSelected.length > 0) {
                    this.redirectTo = 'type';
                  }

                  _context.next = 56;
                  break;

                case 50:
                  elementRemove = subject;
                  filteredItems = this.subjectsSelected.filter(function (item) {
                    return item !== elementRemove;
                  });
                  this.subjectsSelected = filteredItems;

                  if (this.subjectsSelected.length === 0) {
                    this.redirectTo = '';
                  } else {
                    this.redirectTo = 'type';
                  }

                  if (subject.include) {
                    this.notification('Atención', 'Dos actividades de seguimiento a observaciones no se pueden realizar en la misma acta');
                  }

                  setTimeout(function () {
                    subject.include = false;
                  }, 1000);

                case 56:
                  _context.next = 62;
                  break;

                case 58:
                  // subject.include = false;
                  _elementRemove = subject;
                  _filteredItems = this.subjectsSelected.filter(function (item) {
                    return item !== _elementRemove;
                  });
                  this.subjectsSelected = _filteredItems;

                  if (this.subjectsSelected.length === 0) {
                    this.redirectTo = '';
                  } else {
                    this.redirectTo = 'type';
                  }

                case 62:
                  if (!(this.subjectsSelected.length === 0)) {
                    _context.next = 69;
                    break;
                  }

                  // subject.include = false;
                  okButton = {
                    text: this.ALERT_TEXTS_MINACTIVITY.okButtonText,
                    role: 'OK'
                  };
                  alert = this.alertController.create({
                    header: this.ALERT_TEXTS_MINACTIVITY.title,
                    mode: 'ios',
                    message: this.ALERT_TEXTS_MINACTIVITY.message,
                    buttons: [okButton]
                  });
                  _context.next = 67;
                  return alert;

                case 67:
                  _context.sent.present();

                  return _context.abrupt("return");

                case 69:
                  if (!(this.subjectsSelected.length > this.MAX_SUBJECTS)) {
                    _context.next = 77;
                    break;
                  }

                  // Se desmarca el tema indicado porque se ha alcanzado el máximo permitido
                  // subject.include = false;
                  this.redirectTo = '';
                  _okButton = {
                    text: this.ALERT_TEXTS.okButtonText,
                    role: 'OK'
                  };
                  _alert = this.alertController.create({
                    header: this.ALERT_TEXTS.title,
                    mode: 'ios',
                    message: this.ALERT_TEXTS.message,
                    buttons: [_okButton]
                  });
                  _context.next = 75;
                  return _alert;

                case 75:
                  _context.sent.present();

                  return _context.abrupt("return");

                case 77:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
        /**
         * Busca la actividad seleccionada para validar si se checkea o se descheckea para lograr hacer
         * la gestión del acta de asesoría
         */

      }, {
        key: "searchSubject",
        value: function searchSubject(subject) {
          var idActividad = subject.id;
          var searchSubject = this.subjectsSelected.find(function (subj) {
            return subj.id === idActividad;
          });

          if (searchSubject) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "searchSubject2",
        value: function searchSubject2(subject) {
          if (subject.SiniestroOpsActividad === 5) {
            var searchSubject = this.subjectsSelected.filter(function (subj) {
              return subj.SiniestroOpsActividad === 5;
            });

            if (searchSubject.length < 1) {
              return true;
            } else {
              return false;
            }
          } else {
            return true;
          }
        }
        /**
         * Método que agrega los valores de cada actividad migrada a cada una de las tarjetas
         */

      }, {
        key: "updateListAdvisoryTopic",
        value: function updateListAdvisoryTopic() {
          var _this2 = this;

          var listActivMigradas = JSON.parse(sessionStorage.companySelected).listaActividadesMigradas;
          this.subjects = listActivMigradas;
          console.log("Lista Act Migradas", listActivMigradas);
          this.subjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({}); // tslint:disable-next-line: prefer-for-of

          var _loop2 = function _loop2(i) {
            var controlId = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].id);
            var controlIdActividad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].idActividad);
            var descripcionActividad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].descripcionActividad);
            var controlObservaciones = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].observaciones);
            var controlHorasAEjecutar = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].cantidadHorasEjecutar);
            var controlUnidadMedida = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].uniadMedidaDescripcion);
            var controlHorasEjecutadas = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
            var controlCobertura = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]);
            var controlRegistroCodigoEventosEduca = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].registroCodigoEventosEduca);
            var controlCodeEduca = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](undefined, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
            var controlFechaFinContrato = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].fechaFinContrato);
            var constFirmaConQR = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].firmamaQR);
            var constEstadoInterno = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].estadoInterno);
            var includedControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].include);
            var fkIdSiniestro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].Fk_Id_Siniestro);
            var siniestro = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].Siniestro);
            var siniestroOpActividad = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this2.subjects[i].SiniestroOpsActividad);

            _this2.subjectForm.addControl(i + 'id', controlId);

            _this2.subjectForm.addControl(i + 'idActividad', controlIdActividad);

            _this2.subjectForm.addControl(i + 'descripcionActividad', descripcionActividad);

            _this2.subjectForm.addControl(i + 'Observaciones', controlObservaciones);

            _this2.subjectForm.addControl(i + 'horasAEjecutar', controlHorasAEjecutar);

            _this2.subjectForm.addControl(i + 'unidadMedida', controlUnidadMedida);

            _this2.subjectForm.addControl(i + 'horasEjecutadas', controlHorasEjecutadas);

            _this2.subjectForm.addControl(i + 'coverage', controlCobertura);

            _this2.subjectForm.addControl(i + 'registroCodigoEventosEduca', controlRegistroCodigoEventosEduca);

            _this2.subjectForm.addControl(i + 'codeEduca', controlCodeEduca);

            _this2.subjectForm.addControl(i + 'fechaFinContrato', controlFechaFinContrato);

            _this2.subjectForm.addControl(i + 'firmaQR', constFirmaConQR);

            _this2.subjectForm.addControl(i + 'estadoInterno', constEstadoInterno);

            _this2.subjectForm.addControl(i + 'included', includedControl);

            _this2.subjectForm.addControl(i + 'fkIdSiniestro', fkIdSiniestro);

            _this2.subjectForm.addControl(i + 'siniestro', siniestro);

            _this2.subjectForm.addControl(i + 'siniestroOpActividad', siniestroOpActividad);

            _this2.subjectForm.controls[i + 'included'].valueChanges.subscribe(function (v) {
              _this2.subjects[i].include = v;

              _this2.toggleIncludeSubject(_this2.subjects[i]);
            });
          };

          for (var i = 0; i < this.subjects.length; i++) {
            _loop2(i);
          }
        }
        /**
         * Este metodo permite validar si se muestra el input para el código de educa
         */

      }, {
        key: "showInputCodeEdu",
        value: function showInputCodeEdu(event, subject) {
          var valor = event.detail.checked;

          if (valor === true) {
            subject.showInputCode = true;
          } else {
            subject.showInputCode = false;
          }
        }
      }, {
        key: "notification",
        value: function notification(titulo, notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.alertController.create({
                    header: titulo,
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context2.sent;
                  alert.onDidDismiss();
                  _context2.next = 6;
                  return alert.present();

                case 6:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "validateTarjetas",
        value: function validateTarjetas(actividesSeleccionadas, tarjetas) {
          var tarjetasSeleccionadas = []; // tslint:disable-next-line: prefer-for-of

          var _loop3 = function _loop3() {
            var element = actividesSeleccionadas[i];
            var encontro = tarjetas.find(function (item) {
              return item.id === element.id;
            });

            if (encontro) {
              encontro.include = true;
              encontro.AdjuntarDocumentosTecnicos = element.attachDocs ? 'SI' : 'NO'; // encontro.CodigoeventoPositiva = element.registroCodigoEventosEduca;

              encontro.CodigoeventoPositiva = encontro.codeEduca;
              tarjetasSeleccionadas.push(encontro);
            }
          };

          for (var i = 0; i < actividesSeleccionadas.length; i++) {
            _loop3();
          }

          return tarjetasSeleccionadas;
        }
        /**
         * Este metodo valida varias cosas:
         * 1. Captura el valor de la actividad seleccionada, luego hace un arreglo con los diferentes campos de cada tarjeta.
         * 2. Recorre los formularios y cada campo para unificarlo en uno solo llamado tarjeta.
         * 3. Valida entre las actividades seleccionadas cual tiene unidad de medida HORA u Horas para almacenar el total de horas a ejecutar
         * para las actividades seleccionadas
         * 4. Valida que exista minimo una seleccionada y no mas de 4 actividades, ademas de validar que dichas actividades seleccionadas
         * no excedan a las 10 horas por dia
         * 5. Por ultimo se guarda la información de la tarjeta en el archivo cacheService, esto se utiliza de manera temporal para ir almacenando
         * cada información ingresada por parte de la gestión del acta de asesoria.
         */

      }, {
        key: "next",
        value: function next() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this3 = this;

            var formSubject, fields, tarjetas, _loop4, i, resultadoTarjetas, cantidadHorasAEjecutar, _i2, element, actividadesEDValidas, okButton, alert, _okButton2, _alert2, _okButton3, _alert3;

            return _regeneratorRuntime().wrap(function _callee4$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  formSubject = this.subjectForm.value;
                  fields = ['include', 'id', 'idActividad', 'descripcionActividad', 'Observaciones', 'horasAEjecutar', 'unidadMedida', 'horasEjecutadas', 'coverage', 'registroCodigoEventosEduca', 'codeEduca', 'fechaFinContrato', 'firmaQR', 'estadoInterno', 'fkIdSiniestro', 'siniestro', 'siniestroOpActividad'];
                  tarjetas = [];
                  _loop4 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop4(i) {
                    var tarjeta, validateCoverage;
                    return _regeneratorRuntime().wrap(function _loop4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          tarjeta = {};
                          validateCoverage = [];
                          fields.forEach(function (f) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                                while (1) switch (_context3.prev = _context3.next) {
                                  case 0:
                                    tarjeta[f] = formSubject[i + f];

                                  case 1:
                                  case "end":
                                    return _context3.stop();
                                }
                              }, _callee3);
                            }));
                          });
                          tarjetas.push(tarjeta);

                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                    }, _loop4);
                  });
                  i = 0;

                case 5:
                  if (!(i < Object.keys(formSubject).length / fields.length)) {
                    _context5.next = 10;
                    break;
                  }

                  return _context5.delegateYield(_loop4(i), "t0", 7);

                case 7:
                  i++;
                  _context5.next = 5;
                  break;

                case 10:
                  _context5.next = 12;
                  return this.validateTarjetas(this.subjectsSelected, tarjetas);

                case 12:
                  resultadoTarjetas = _context5.sent;
                  tarjetas = resultadoTarjetas;
                  cantidadHorasAEjecutar = 0; // tslint:disable-next-line: prefer-for-of

                  _i2 = 0;

                case 16:
                  if (!(_i2 < tarjetas.length)) {
                    _context5.next = 51;
                    break;
                  }

                  element = tarjetas[_i2]; // tslint:disable-next-line: max-line-length

                  if (!(element.coverage === null || element.coverage === '' || element.horasEjecutadas === null || element.horasEjecutadas === '')) {
                    _context5.next = 24;
                    break;
                  }

                  this.validarCoberturaHorasEjecutadas = false;
                  this.notification('Atención', 'Debe ingresar el valor de la cobertura o el de las horas ejecutadas para la actividad seleccionada');
                  return _context5.abrupt("break", 51);

                case 24:
                  this.validarCoberturaHorasEjecutadas = true;

                case 25:
                  if (!(parseInt(element.horasEjecutadas, 10) > element.horasAEjecutar)) {
                    _context5.next = 29;
                    break;
                  }

                  this.validarCoberturaHorasEjecutadas = false;
                  this.notification('Atención', 'La cantidad de horas a ejecutar es mayor a la de horas migradas para realizar la actividad');
                  return _context5.abrupt("break", 51);

                case 29:
                  if (!(parseInt(element.horasEjecutadas, 10) < 1)) {
                    _context5.next = 33;
                    break;
                  }

                  this.validarCoberturaHorasEjecutadas = false;
                  this.notification('Atención', 'La hora estimada debe ser mayor a cero');
                  return _context5.abrupt("break", 51);

                case 33:
                  if (!(element.coverage < 1)) {
                    _context5.next = 37;
                    break;
                  }

                  this.validarCoberturaHorasEjecutadas = false;
                  this.notification('Atención', 'La cobertura no puede ser menor que uno');
                  return _context5.abrupt("break", 51);

                case 37:
                  actividadesEDValidas = this.validarActividadesED(resultadoTarjetas);

                  if (actividadesEDValidas) {
                    _context5.next = 42;
                    break;
                  }

                  this.validarCoberturaHorasEjecutadas = false;
                  this.notification('Atención', 'Debe adjuntar archivos para las actividades EDUCA o indicar código de evento.');
                  return _context5.abrupt("break", 51);

                case 42:
                  if (!element.siniestro) {
                    _context5.next = 47;
                    break;
                  }

                  if (!(parseInt(element.horasEjecutadas, 10) < element.horasAEjecutar)) {
                    _context5.next = 47;
                    break;
                  }

                  // En actividades de investigación solo se permiten registro de actas con el número de horas
                  // de ejecución igual al número de horas migradas
                  this.validarCoberturaHorasEjecutadas = false;
                  this.notification('Atención', 'Compruebe que la cantidad de horas ejecutadas coincida con la cantidad de horas migradas.');
                  return _context5.abrupt("break", 51);

                case 47:
                  if (element.unidadMedida === 'HORA' || element.unidadMedida === 'Horas') {
                    // tslint:disable-next-line: radix
                    cantidadHorasAEjecutar = cantidadHorasAEjecutar + parseInt(tarjetas[_i2].horasEjecutadas);
                  }

                case 48:
                  _i2++;
                  _context5.next = 16;
                  break;

                case 51:
                  if (!this.validarCoberturaHorasEjecutadas) {
                    _context5.next = 78;
                    break;
                  }

                  if (!(cantidadHorasAEjecutar <= 10)) {
                    _context5.next = 73;
                    break;
                  }

                  this.cacheService.saveMigratedHours(cantidadHorasAEjecutar);

                  if (!(this.subjectsSelected.length === 0)) {
                    _context5.next = 61;
                    break;
                  }

                  okButton = {
                    text: this.ALERT_TEXTS_MINACTIVITY.okButtonText,
                    role: 'OK'
                  };
                  alert = this.alertController.create({
                    header: this.ALERT_TEXTS_MINACTIVITY.title,
                    mode: 'ios',
                    message: this.ALERT_TEXTS_MINACTIVITY.message,
                    buttons: [okButton]
                  });
                  _context5.next = 59;
                  return alert;

                case 59:
                  _context5.sent.present();

                  return _context5.abrupt("return");

                case 61:
                  if (!(this.subjectsSelected.length > this.MAX_SUBJECTS)) {
                    _context5.next = 70;
                    break;
                  }

                  _okButton2 = {
                    text: this.ALERT_TEXTS.okButtonText,
                    role: 'OK'
                  };
                  _alert2 = this.alertController.create({
                    mode: 'ios',
                    header: this.ALERT_TEXTS.title,
                    message: this.ALERT_TEXTS.message,
                    buttons: [_okButton2]
                  });
                  _context5.next = 66;
                  return _alert2;

                case 66:
                  _context5.sent.present();

                  return _context5.abrupt("return");

                case 70:
                  // this.cacheService.saveActivities(this.subjectsSelected);
                  if (this.redirect) {
                    this.cacheService.saveActivities(tarjetas);
                    this.router.navigateByUrl('u/execLog/pending-visits/visit-id/subjects/type');
                  }

                case 71:
                  _context5.next = 78;
                  break;

                case 73:
                  _okButton3 = {
                    text: this.ALERT_TEXTS.okButtonText,
                    role: 'OK'
                  };
                  _alert3 = this.alertController.create({
                    mode: 'ios',
                    header: this.ALERT_TEXTS_MAXHOREJECUTAR.title,
                    message: this.ALERT_TEXTS_MAXHOREJECUTAR.message,
                    buttons: [_okButton3]
                  });
                  _context5.next = 77;
                  return _alert3;

                case 77:
                  _context5.sent.present();

                case 78:
                case "end":
                  return _context5.stop();
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "validarActividadesED",
        value: function validarActividadesED(tarjetas) {
          var _this4 = this;

          var actividadesED = this.subjectsSelected.filter(function (s) {
            return s.lineaAccion === 'ED';
          });

          if (!actividadesED.length) {
            return true;
          }

          var allValid = actividadesED.every(function (a) {
            var tarjeta = tarjetas.find(function (t) {
              return t.id === a.id;
            });

            if (!tarjeta) {
              return true;
            }

            var hasCode = !!tarjeta.codeEduca;
            var archivos = [];

            _this4.cacheService.pdfAdjuntos.forEach(function (arr) {
              return archivos.push.apply(archivos, _toConsumableArray(arr));
            });

            var fotos = [];

            _this4.cacheService.fotosAdjuntas.forEach(function (arr) {
              return fotos.push.apply(fotos, _toConsumableArray(arr));
            });

            var archivosActividad = archivos.filter(function (f) {
              return f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0;
            });
            var fotosActividad = fotos.filter(function (f) {
              return f.idActividad === tarjeta.id && ['AEP', 'EE'].indexOf(f.idTipoArchivo) >= 0;
            });
            var archivosAEP = archivosActividad.filter(function (f) {
              return f.idTipoArchivo === 'AEP';
            }).length + fotosActividad.filter(function (f) {
              return f.idTipoArchivo === 'AEP';
            }).length;
            var archivosEE = archivosActividad.filter(function (f) {
              return f.idTipoArchivo === 'EE';
            }).length + fotosActividad.filter(function (f) {
              return f.idTipoArchivo === 'EE';
            }).length;
            var hasFiles = archivosAEP >= 1 && archivosEE >= 1;
            return hasCode || hasFiles;
          });
          return allValid;
        }
      }]);

      return VisitSubjectsPage;
    }();

    VisitSubjectsPage.ɵfac = function VisitSubjectsPage_Factory(t) {
      return new (t || VisitSubjectsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]));
    };

    VisitSubjectsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: VisitSubjectsPage,
      selectors: [["app-visit-subjects"]],
      decls: 13,
      vars: 2,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "backgroundContent"], ["mode", "ios", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed", 3, "click", 4, "ngIf"], ["mode", "ios"], ["lines", "none", 1, "p-0"], ["slot", "end", 3, "name", "click"], [1, "cardTitle"], [3, "formGroup"], [1, "p-0"], [1, "p-0", "mt-5"], ["position", "stacked"], ["readonly", "", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [1, "p-0", "mt-3"], ["size", "6", 2, "padding", "5px"], ["position", "stacked", 2, "font-size", "12px"], ["type", "tel", "id", "horasEjecutadas", 1, "bg-light", "rounded", "pl-1", "pr-1", 3, "formControlName"], ["type", "number", "id", "cobertura", 1, "bg-light", "rounded", "pl-1", "pr-1", 2, "margin-top", "15px", 3, "formControlName"], ["color", "light", 1, "p-0", "mt-3", "rounded"], [3, "click"], ["color", "light", 1, "ion-float-start"], ["slot", "start", 4, "ngIf"], ["color", "danger"], ["color", "light", 1, "ion-float-end"], ["color", "light", 1, "mt-3", "rounded"], [1, "no-wrap"], ["color", "primary", 3, "ionChange"], ["class", "mt-3 rounded", "color", "light", 4, "ngIf"], ["lines", "none", 1, "ion-float-end", "no-effects", "mt-5"], [1, "ion-text-right"], ["slot", "end", "color", "primary", 3, "formControlName"], [1, "pt-0"], [1, "p-0", "no-effects"], ["lines", "none", 3, "click"], ["slot", "start", "name", "attach-outline"], ["lines", "none", 1, "ion-float-end", "no-effects"], ["slot", "end", "color", "primary", 3, "ngModel", "ngModelChange"], ["placeholder", "Ingrese c\xF3digo de evento Educa", 1, "bg-light", "mt-3", "rounded", 3, "formControlName"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed", 3, "click"], ["color", "primary", "mode", "ios", "expand", "block", 1, "btn"]],
      template: function VisitSubjectsPage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Temas de asesor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, VisitSubjectsPage_ion_card_11_Template, 62, 22, "ion-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, VisitSubjectsPage_ion_fab_12_Template, 3, 0, "ion-fab", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.subjects);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.redirectTo);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NumericValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\nion-card-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 0px;\n}\nion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  transform: none;\n}\n.no-effects[_ngcontent-%COMP%] {\n  --background-hover: transparent;\n  --ripple-color: transparent;\n}\nion-fab[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  padding-top: 10px;\n  padding: 0px;\n  text-align: left;\n  margin-top: 10px;\n}\n.cardTitle[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: justify;\n  font-size: 17px;\n  width: 100%;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:last-of-type {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL3Zpc2l0LXN1YmplY3RzL3Zpc2l0LXN1YmplY3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlzaXQtc3ViamVjdHMvdmlzaXQtc3ViamVjdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRENRO0VBQ0UsV0FBQTtBQ0NWO0FERU07RUFDRSxZQUFBO0FDQVI7QURTTTtFQUNFLFlBQUE7QUNOUjtBRE9RO0VBQ0UsV0FBQTtBQ0xWO0FET1E7RUFDRSxxQkFBQTtBQ0xWO0FEV0U7RUFDRSxXQUFBO0FDVEo7QURXRTtFQUNFLGVBQUE7QUNUSjtBRGNFO0VBQ0UsZUFBQTtBQ1hKO0FEZUE7RUFDRSwrQkFBQTtFQUNBLDJCQUFBO0FDWkY7QURnQkU7RUFDRSxrQkFBQTtBQ2JKO0FEaUJBO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNkRjtBRGlCQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ2RGO0FEbUJJO0VBQ0Usb0JBQUE7QUNoQk4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXNpdC1zdWJqZWN0cy92aXNpdC1zdWJqZWN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jYXJkLWNvbnRlbnQge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW9uLWljb24ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4ubGFiZWwtc3RhY2tlZCB7XG4gICYuc2MtaW9uLWxhYmVsLW1kLWgge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4ubm8tZWZmZWN0cyB7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjogdHJhbnNwYXJlbnQ7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWZhYiB7XG4gICYgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB9XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNhcmRUaXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29udGVudCB7XG4gICYgaW9uLWNhcmQge1xuICAgICY6bGFzdC1vZi10eXBlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24taXRlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi10b29sYmFyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jYXJkLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tY2FyZC1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBpb24taWNvbiB7XG4gIG1hcmdpbjogMHB4O1xufVxuaW9uLWNhcmQtY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLm5vLWVmZmVjdHMge1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHRyYW5zcGFyZW50O1xuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1mYWIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uY2FyZFRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1jb250ZW50IGlvbi1jYXJkOmxhc3Qtb2YtdHlwZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitSubjectsPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-visit-subjects',
          templateUrl: './visit-subjects.page.html',
          styleUrls: ['./visit-subjects.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_5__["CacheService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=visit-subjects-visit-subjects-module-es5.js.map