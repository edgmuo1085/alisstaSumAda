function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
      "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
      "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
      "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
      "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
      "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
      "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
      "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
      "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
      "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
      "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
      "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
      "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
      "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
      "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
      "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
      "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
      "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
      "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
      "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
      "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
      "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
      "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
      "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
      "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
      "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
      "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
      "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
      "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
      "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
      "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
      "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
      "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
      "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/auth/auth.guard */
    "./src/app/pages/auth/auth.guard.ts");

    var routes = [{
      path: 'login',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-auth-login-login-module */
        [__webpack_require__.e("default~pages-auth-login-login-module~settings-settings-module~signature-signature-module"), __webpack_require__.e("default~pages-auth-login-login-module~settings-settings-module"), __webpack_require__.e("pages-auth-login-login-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/auth/login/login.module */
        "./src/app/pages/auth/login/login.module.ts")).then(function (m) {
          return m.LoginPageModule;
        });
      }
    }, {
      path: '',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-navbar-navbar-module */
        "pages-navbar-navbar-module").then(__webpack_require__.bind(null,
        /*! ./pages/navbar/navbar.module */
        "./src/app/pages/navbar/navbar.module.ts")).then(function (m) {
          return m.NavbarPageModule;
        });
      },
      canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _capacitor_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/app */
    "./node_modules/@capacitor/app/dist/esm/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _services_network_network_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/network/network.service */
    "./src/app/services/network/network.service.ts");
    /* harmony import */


    var _services_version_app_version_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/version/app-version.service */
    "./src/app/services/version/app-version.service.ts");

    var DarkMode = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"].DarkMode;

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, router, splashScreen, statusBar, oneSignal, alertCtrl, networkService, location, AppVersionSv) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.oneSignal = oneSignal;
        this.alertCtrl = alertCtrl;
        this.networkService = networkService;
        this.location = location;
        this.AppVersionSv = AppVersionSv;
        this.initializeApp();
        this.listenToAppState();
        this.AppVersionSv.checkForUpdate();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();

            _this.checkDarkTheme();

            _this.initOneSignal();

            _this.networkService.initializeNetworkEvents();

            _this.registerBackButtonListener();

            _this.router.navigateByUrl('login');
          });
        } // Escucha cambios de estado en la app (foreground/background)

      }, {
        key: "listenToAppState",
        value: function listenToAppState() {
          var _this2 = this;

          _capacitor_app__WEBPACK_IMPORTED_MODULE_4__["App"].addListener('appStateChange', function (_ref) {
            var isActive = _ref.isActive;

            if (isActive) {
              console.log('La app volvió al primer plano.');

              _this2.AppVersionSv.checkForUpdate(); // Verifica actualizaciones al volver al foreground

            }
          });
        }
      }, {
        key: "checkDarkTheme",
        value: function checkDarkTheme() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this3 = this;

            var shouldAdd, prefersDark;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  if (!this.platform.is('android')) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 3;
                  return DarkMode.isDarkModeOn();

                case 3:
                  shouldAdd = _context.sent.isDarkModeOn;
                  DarkMode.addListener('darkModeStateChanged', function (state) {
                    _this3.toggleDarkTheme(state.isDarkModeOn);
                  });
                  _context.next = 10;
                  break;

                case 7:
                  prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
                  prefersDark.addEventListener('change', function (mediaQuery) {
                    return _this3.toggleDarkTheme(mediaQuery.matches);
                  });
                  shouldAdd = prefersDark.matches;

                case 10:
                  this.toggleDarkTheme(shouldAdd);

                case 11:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "initOneSignal",
        value: function initOneSignal() {
          var _this4 = this;

          this.oneSignal.startInit(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].ONE_SIGNAL_APP_ID, _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].ONE_SIGNAL_SENDER_ID);
          this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
          this.oneSignal.handleNotificationReceived().subscribe(function (notification) {
            _this4.onNotificationReceived(notification);
          });
          this.oneSignal.handleNotificationOpened().subscribe(function (result) {
            _this4.onNotificationOpened(result);
          });
          this.oneSignal.endInit();
        }
      }, {
        key: "onNotificationReceived",
        value: function onNotificationReceived(notification) {}
      }, {
        key: "onNotificationOpened",
        value: function onNotificationOpened(result) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var alert, communicationId;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return this.alertCtrl.create({
                    header: 'Alissta SUM Comunicaciones',
                    mode: 'ios',
                    message: result.notification.payload.body,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context2.sent;
                  _context2.next = 5;
                  return alert.present();

                case 5:
                  communicationId = result.notification.payload.additionalData.PKConversacion;
                  this.router.navigate(['u/list-communications', communicationId]);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
        /**
         * Alterna el modo oscuro en base al parámetro indicado.
         *
         * @param shouldAdd Indica si activar o no el modo oscuro.
         */

      }, {
        key: "toggleDarkTheme",
        value: function toggleDarkTheme(shouldAdd) {
          document.body.classList.toggle('dark', shouldAdd);
        }
        /**
         * Registra el agente de escucha para el evento de uso del botón físico de atrás de _Android_.
         *
         * Se registra aquí para que el evento se encuentre activo en toda la aplicación. Si al presionar
         * el botón, el usuario se encuentra en una vista a la que no puede retroceder, se intenta cerrar
         * la aplicacación. De lo contrario, se navegará a la vista anterior.
         */

      }, {
        key: "registerBackButtonListener",
        value: function registerBackButtonListener() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var _this5 = this;

            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  this.platform.backButton.subscribeWithPriority(10, function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                      var currentUrl;
                      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                        while (1) switch (_context3.prev = _context3.next) {
                          case 0:
                            currentUrl = this.router.url;

                            if (!(['/login', '/u/home'].indexOf(currentUrl) > -1)) {
                              _context3.next = 4;
                              break;
                            }

                            this.closeApp();
                            return _context3.abrupt("return");

                          case 4:
                            this.location.back(); // Por la forma en la que está construido el DOM de la aplicación, el botón físico de
                            // atrás no puede completar la navegación correctamente puesto que la vista anterior
                            // no es ocultada. Lo siguiente es ocultar la vista anterior de manera manual

                            setTimeout(function () {
                              var routerOutlet = document.querySelector('app-navbar ion-router-outlet');

                              if (!routerOutlet) {
                                return;
                              }

                              if (currentUrl.endsWith('edit-address')) {
                                // Caso vista de edición de dirección de empresa
                                return;
                              }

                              console.log(currentUrl);
                              routerOutlet.lastElementChild.classList.add('ion-page-hidden');
                            }, 200);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                      }, _callee3, this);
                    }));
                  });

                case 1:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "closeApp",
        value: function closeApp() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.alertCtrl.create({
                    header: 'Alissta SUM',
                    mode: 'ios',
                    message: '¿Está seguro que desea salir de la aplicación?',
                    buttons: [{
                      text: 'ACEPTAR',
                      handler: function handler() {
                        _capacitor_app__WEBPACK_IMPORTED_MODULE_4__["App"].exitApp();
                      }
                    }, {
                      text: 'CANCELAR',
                      handler: function handler() {}
                    }]
                  });

                case 2:
                  alert = _context5.sent;
                  _context5.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_version_app_version_service__WEBPACK_IMPORTED_MODULE_12__["AppVersionService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ion-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ion-router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonApp"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: 'app.component.html',
          styleUrls: ['app.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_7__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_8__["StatusBar"]
        }, {
          type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"]
        }, {
          type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]
        }, {
          type: _services_version_app_version_service__WEBPACK_IMPORTED_MODULE_12__["AppVersionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/barcode-scanner/ngx */
    "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/fingerprint-aio/ngx */
    "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ionic-native/network-interface/ngx */
    "./node_modules/@ionic-native/network-interface/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ngx-material-timepicker */
    "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_13__["SplashScreen"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_10__["NetworkInterface"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_8__["FingerprintAIO"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonicRouteStrategy"]
      }, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_17__["SignaturePadModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_22__["PipesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_18__["NgxMaterialTimepickerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_17__["SignaturePadModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonicModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_22__["PipesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_18__["NgxMaterialTimepickerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_17__["SignaturePadModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_16__["IonicStorageModule"].forRoot(), _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_19__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_21__["ComponentsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_22__["PipesModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_18__["NgxMaterialTimepickerModule"]],
          providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_13__["SplashScreen"], _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__["Network"], _ionic_native_network_interface_ngx__WEBPACK_IMPORTED_MODULE_10__["NetworkInterface"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_6__["BarcodeScanner"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_9__["Geolocation"], _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_8__["FingerprintAIO"], {
            provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
            useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_15__["IonicRouteStrategy"]
          }, _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_12__["OneSignal"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_20__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/advisory-verification/advisory-verification.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/advisory-verification/advisory-verification.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AdvisoryVerificationComponent */

  /***/
  function srcAppComponentsAdvisoryVerificationAdvisoryVerificationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdvisoryVerificationComponent", function () {
      return AdvisoryVerificationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AdvisoryVerificationComponent_ion_card_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-header", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-card-title", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Descripci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Observaciones");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ion-input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Cobertura");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Horas migradas - Unidad de medida");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ion-input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Horas ejecutadas");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "ion-input", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var subject_r13 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", subject_r13.idActividad, " contrato ", subject_r13.firmamaQR === 1 ? "(Firma con QR)" : "(Firma sin QR)", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r13.descripcionActividad, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r13.Observaciones, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", subject_r13.coverage, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", subject_r13.horasAEjecutar, " - ", subject_r13.unidadMedida, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", subject_r13.horasEjecutadas, " - ", subject_r13.unidadMedida, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_16_ion_input_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.verification.typeAdvisory.type, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_16_ion_input_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r15.verification.typeAdvisory.fechaInicialAsesoria, "dd/MMM/yyyy"), " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_16_ion_input_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r16.verification.typeAdvisory.startHour, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_16_ion_input_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r17.verification.typeAdvisory.endHour, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_16_ion_input_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r18.verification.typeAdvisory.totalHours, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tipo de asesor\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvisoryVerificationComponent_ion_card_16_ion_input_7_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fecha Inicial Asesoria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdvisoryVerificationComponent_ion_card_16_ion_input_12_Template, 3, 4, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Hora inicio de asesor\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdvisoryVerificationComponent_ion_card_16_ion_input_17_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Hora final de asesor\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdvisoryVerificationComponent_ion_card_16_ion_input_22_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Total horas de la asesor\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdvisoryVerificationComponent_ion_card_16_ion_input_27_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.verification);
      }
    }

    function AdvisoryVerificationComponent_ion_card_17_ion_input_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r19.verification.typeAdvisory.type, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_17_ion_input_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r20.verification.typeAdvisory.date, "dd/MMMM/yyyy"), " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Tipo de asesor\xEDa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvisoryVerificationComponent_ion_card_17_ion_input_7_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Fecha Inicial Asesoria");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdvisoryVerificationComponent_ion_card_17_ion_input_12_Template, 3, 4, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.verification);
      }
    }

    function AdvisoryVerificationComponent_ion_input_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.verification.infoCompany.nombre, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_input_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.verification.infoCompany.tipoDocumento, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_input_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.verification.infoCompany.numeroDocumento, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_input_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.verification.infoCompany.direccion, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_input_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r7.verification.infoCompany.latitud, ", ", ctx_r7.verification.infoCompany.longitud, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_input_54_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r8.verification.infoCompany.telefono, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_input_59_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.verification.infoCompany.departamento, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_input_64_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r10.verification.infoCompany.municipio, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_69_ion_input_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r21.verification.commentsAdvice.type, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_69_ion_input_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r22.verification.commentsAdvice.comment, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_69_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xBFFue exitosa?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvisoryVerificationComponent_ion_card_69_ion_input_7_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Comentario");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdvisoryVerificationComponent_ion_card_69_ion_input_12_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.verification);
      }
    }

    function AdvisoryVerificationComponent_ion_card_70_ion_input_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.verification.commentsAdvice.type, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_70_ion_input_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r24.verification.commentsAdvice.motive, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_70_ion_input_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r25.verification.commentsAdvice.justify, " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_70_ion_input_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-input");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r26.verification.commentsAdvice.newDateActivity, "dd/MMMM/yyyy"), " ");
      }
    }

    function AdvisoryVerificationComponent_ion_card_70_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-card", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-card-content", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-list");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\xBFFue exitosa?");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdvisoryVerificationComponent_ion_card_70_ion_input_7_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Motivo");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AdvisoryVerificationComponent_ion_card_70_ion_input_12_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Justificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdvisoryVerificationComponent_ion_card_70_ion_input_17_Template, 2, 1, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ion-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nueva fecha");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AdvisoryVerificationComponent_ion_card_70_ion_input_22_Template, 3, 4, "ion-input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.verification);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.verification.commentsAdvice.newDateActivity !== "N/A");
      }
    }

    var AdvisoryVerificationComponent = /*#__PURE__*/function () {
      function AdvisoryVerificationComponent(modalCtrl, cacheService) {
        _classCallCheck(this, AdvisoryVerificationComponent);

        this.modalCtrl = modalCtrl;
        this.cacheService = cacheService;
      }

      _createClass(AdvisoryVerificationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInfoAdvisory();
        }
        /**
         * Este método permite obtener toda la información que ingresaron en el acta gestionada
         */

      }, {
        key: "getInfoAdvisory",
        value: function getInfoAdvisory() {
          this.verification = this.cacheService.getAllInfoToAdvisory();
        }
        /**
         * Cierra la modal de ver el acta.
         */

      }, {
        key: "regresar",
        value: function regresar() {
          this.modalCtrl.dismiss();
        }
      }]);

      return AdvisoryVerificationComponent;
    }();

    AdvisoryVerificationComponent.ɵfac = function AdvisoryVerificationComponent_Factory(t) {
      return new (t || AdvisoryVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]));
    };

    AdvisoryVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdvisoryVerificationComponent,
      selectors: [["app-advisory-verification"]],
      decls: 76,
      vars: 13,
      consts: [["size", "12"], [1, "titulo"], [1, "ion-padding"], [1, "ion-text-center", "labelTitulo"], ["mode", "ios", 4, "ngFor", "ngForOf"], ["mode", "ios", 4, "ngIf"], ["mode", "ios"], ["lines", "none"], ["position", "stacked"], [4, "ngIf"], ["no-border", ""], [1, "ion-no-border"], ["color", "primary", "expand", "block", 3, "click"], ["readonly", "", 1, "rounded"]],
      template: function AdvisoryVerificationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-col", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-title", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Verificaci\xF3n acta asesor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-content", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Actividades");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdvisoryVerificationComponent_ion_card_11_Template, 36, 9, "ion-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Tipo de asesor\xEDa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AdvisoryVerificationComponent_ion_card_16_Template, 28, 5, "ion-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AdvisoryVerificationComponent_ion_card_17_Template, 13, 2, "ion-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Informaci\xF3n de la empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "ion-card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ion-card-content", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nombre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdvisoryVerificationComponent_ion_input_29_Template, 2, 1, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Tipo de documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AdvisoryVerificationComponent_ion_input_34_Template, 2, 1, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Documento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AdvisoryVerificationComponent_ion_input_39_Template, 2, 1, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Direcci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AdvisoryVerificationComponent_ion_input_44_Template, 2, 1, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Geoposici\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, AdvisoryVerificationComponent_ion_input_49_Template, 2, 2, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Tel\xE9fono");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, AdvisoryVerificationComponent_ion_input_54_Template, 2, 1, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Departamento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AdvisoryVerificationComponent_ion_input_59_Template, 2, 1, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "ion-item", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ion-label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Municipio/Ciudad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, AdvisoryVerificationComponent_ion_input_64_Template, 2, 1, "ion-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Comentarios");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, AdvisoryVerificationComponent_ion_card_69_Template, 13, 2, "ion-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, AdvisoryVerificationComponent_ion_card_70_Template, 23, 4, "ion-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ion-footer", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ion-toolbar", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ion-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdvisoryVerificationComponent_Template_ion_button_click_73_listener() {
            return ctx.regresar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Regresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.verification.activities);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification.typeAdvisory.type === "Especifica");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification.typeAdvisory.type === "Proyecto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification.commentsAdvice.type === "Exitosa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verification.commentsAdvice.type === "Fallo");
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["TextValueAccessor"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 18px !important;\n  text-align: center;\n  padding: 0px;\n  padding-top: 10px;\n  height: 60px;\n}\nion-content[_ngcontent-%COMP%]   .labelTitulo[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin-bottom: 20px;\n  font-size: 20px;\n  font-weight: bolder;\n  border-bottom: 1px solid #344b56;\n  padding-bottom: 5px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .btnEnviar[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\nion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL2NvbXBvbmVudHMvYWR2aXNvcnktdmVyaWZpY2F0aW9uL2Fkdmlzb3J5LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hZHZpc29yeS12ZXJpZmljYXRpb24vYWR2aXNvcnktdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FETUE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDSEY7QURPRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9JO0VBQ0UsWUFBQTtBQ0xOO0FET0k7RUFDRSxZQUFBO0FDTE47QURXUTtFQUNFLGdCQUFBO0FDVFY7QURpQkU7RUFDRSxxQkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZHZpc29yeS12ZXJpZmljYXRpb24vYWR2aXNvcnktdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgICAgfVxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgJiAubGFiZWxUaXR1bG8ge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzQ0YjU2O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIH1cbiAgaW9uLWNhcmQge1xuICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICB9XG4gIGlvbi1ncmlkIHtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICAmIC5idG5FbnZpYXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWZvb3RlciB7XG4gIGlvbi1idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbiAgfVxufVxuIiwiaW9uLWhlYWRlciBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbmlvbi1jb250ZW50IC5sYWJlbFRpdHVsbyB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzM0NGI1NjtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLXRpdGxlIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAuYnRuRW52aWFyIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuaW9uLWZvb3RlciBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdvisoryVerificationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-advisory-verification',
          templateUrl: './advisory-verification.component.html',
          styleUrls: ['./advisory-verification.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_2__["CacheService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: MY_FORMATS, ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () {
      return MY_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _recommendation_detail_recommendation_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./recommendation-detail/recommendation-detail.component */
    "./src/app/components/recommendation-detail/recommendation-detail.component.ts");
    /* harmony import */


    var _advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./advisory-verification/advisory-verification.component */
    "./src/app/components/advisory-verification/advisory-verification.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/locales/es-PY */
    "./node_modules/@angular/common/locales/es-PY.js");
    /* harmony import */


    var _angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/locales/pt */
    "./node_modules/@angular/common/locales/pt.js");
    /* harmony import */


    var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/locales/en */
    "./node_modules/@angular/common/locales/en.js");
    /* harmony import */


    var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */


    var _resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./resend-verification-code/resend-verification-code.component */
    "./src/app/components/resend-verification-code/resend-verification-code.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");
    /* harmony import */


    var _inactive_users_talk_inactive_users_talk_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./inactive-users-talk/inactive-users-talk.component */
    "./src/app/components/inactive-users-talk/inactive-users-talk.component.ts");
    /* harmony import */


    var _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var _scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./scanner-qr/scanner-qr.component */
    "./src/app/components/scanner-qr/scanner-qr.component.ts"); // importar locales


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
    }; // registrar los locales con el nombre que quieras utilizar a la hora de proveer

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_es_PY__WEBPACK_IMPORTED_MODULE_11___default.a, 'es');
    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_12___default.a, 'pt');
    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_13___default.a, 'en');

    var ComponentsModule = /*#__PURE__*/_createClass(function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    });

    ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ComponentsModule
    });
    ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ComponentsModule_Factory(t) {
        return new (t || ComponentsModule)();
      },
      providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"], {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"],
        useValue: 'es-ES'
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MomentDateAdapter"],
        deps: [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
      }, {
        provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"],
        useValue: MY_FORMATS
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
        useValue: 'es'
      }],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, {
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _recommendation_detail_recommendation_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecommendationDetailComponent"], _advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_7__["AdvisoryVerificationComponent"], _resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_14__["ResendVerificationCodeComponent"], _inactive_users_talk_inactive_users_talk_component__WEBPACK_IMPORTED_MODULE_16__["InactiveUsersTalkComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"], _scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_18__["ScannerQrComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"]],
        exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _recommendation_detail_recommendation_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecommendationDetailComponent"], _advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_7__["AdvisoryVerificationComponent"], _resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_14__["ResendVerificationCodeComponent"], _inactive_users_talk_inactive_users_talk_component__WEBPACK_IMPORTED_MODULE_16__["InactiveUsersTalkComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"], _scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_18__["ScannerQrComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _recommendation_detail_recommendation_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecommendationDetailComponent"], _advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_7__["AdvisoryVerificationComponent"], _resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_14__["ResendVerificationCodeComponent"], _inactive_users_talk_inactive_users_talk_component__WEBPACK_IMPORTED_MODULE_16__["InactiveUsersTalkComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"], _scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_18__["ScannerQrComponent"]],
          exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _recommendation_detail_recommendation_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecommendationDetailComponent"], _advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_7__["AdvisoryVerificationComponent"], _resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_14__["ResendVerificationCodeComponent"], _inactive_users_talk_inactive_users_talk_component__WEBPACK_IMPORTED_MODULE_16__["InactiveUsersTalkComponent"], _popover_popover_component__WEBPACK_IMPORTED_MODULE_17__["PopoverComponent"], _scanner_qr_scanner_qr_component__WEBPACK_IMPORTED_MODULE_18__["ScannerQrComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"].forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_15__["PipesModule"]],
          providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_5__["Device"], {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"],
            useValue: 'es-ES'
          }, {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["DateAdapter"],
            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MomentDateAdapter"],
            deps: [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_10__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
          }, {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_FORMATS"],
            useValue: MY_FORMATS
          }, {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"],
            useValue: 'es'
          }],
          entryComponents: [_recommendation_detail_recommendation_detail_component__WEBPACK_IMPORTED_MODULE_6__["RecommendationDetailComponent"], _advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_7__["AdvisoryVerificationComponent"], _resend_verification_code_resend_verification_code_component__WEBPACK_IMPORTED_MODULE_14__["ResendVerificationCodeComponent"], _inactive_users_talk_inactive_users_talk_component__WEBPACK_IMPORTED_MODULE_16__["InactiveUsersTalkComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_ion_label_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nameUserRegister);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(device, storage) {
        _classCallCheck(this, HeaderComponent);

        this.device = device;
        this.storage = storage;
        this.deviceUUID = this.device.uuid;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.uploadInfoUser();
        }
      }, {
        key: "uploadInfoUser",
        value: function uploadInfoUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
            var nameUser, nombreCompleto;
            return _regeneratorRuntime().wrap(function _callee6$(_context6) {
              while (1) switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.next = 2;
                  return this.storage.get('sesion');

                case 2:
                  nameUser = _context6.sent;
                  nombreCompleto = nameUser.nombres + ' ' + nameUser.apellidos;
                  this.nameUserRegister = nombreCompleto;

                case 5:
                case "end":
                  return _context6.stop();
              }
            }, _callee6, this);
          }));
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__["Device"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 13,
      vars: 2,
      consts: [[1, "ion-no-border", "ion-no-padding"], [2, "padding-top", "0px"], [1, "header"], ["name", "person-outline", "slot", ""], ["class", "titulo", 4, "ngIf"], [1, "colUuid"], ["name", "phone-portrait-outline"], [2, "font-size", "15px", "margin-left", "10px"], [1, "titulo"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-grid", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-icon", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_ion_label_7_Template, 2, 1, "ion-label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.nameUserRegister);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.deviceUUID);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]],
      styles: [".toolbar-container[_ngcontent-%COMP%] {\n  padding: 0px !important;\n}\n\nion-col[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\nion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  color: white;\n}\n\n.colUuid[_ngcontent-%COMP%] {\n  margin-top: -5px !important;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQUU7RUFDRSxpQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURFQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAmIC50aXR1bG8ge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxufVxuXG4uY29sVXVpZCB7XG4gIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuIiwiLnRvb2xiYXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jb2wge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuaW9uLWNvbCAudGl0dWxvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbFV1aWQge1xuICBtYXJnaW4tdG9wOiAtNXB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_2__["Device"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/inactive-users-talk/inactive-users-talk.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/inactive-users-talk/inactive-users-talk.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: InactiveUsersTalkComponent */

  /***/
  function srcAppComponentsInactiveUsersTalkInactiveUsersTalkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InactiveUsersTalkComponent", function () {
      return InactiveUsersTalkComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_talk_talk_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/talk/talk.service */
    "./src/app/services/talk/talk.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function InactiveUsersTalkComponent_ion_item_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-item", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InactiveUsersTalkComponent_ion_item_4_Template_ion_item_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var item_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.onClick(item_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.UsuarioNombre);
      }
    }

    var InactiveUsersTalkComponent = /*#__PURE__*/function () {
      function InactiveUsersTalkComponent(popoverCtrl, talkService) {
        _classCallCheck(this, InactiveUsersTalkComponent);

        this.popoverCtrl = popoverCtrl;
        this.talkService = talkService;
      }

      _createClass(InactiveUsersTalkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUsuariosInactivos();
        }
      }, {
        key: "onClick",
        value: function onClick(valor) {
          this.popoverCtrl.dismiss({
            item: valor
          });
        }
      }, {
        key: "getUsuariosInactivos",
        value: function getUsuariosInactivos() {
          var usuariosInactivos = [];
          var usuariosConversacion = this.talkService.getSelectedConversation();
          usuariosConversacion.Usuarios.forEach(function (element) {
            if (element.Estado === 'A') {
              usuariosInactivos.push(element);
            }
          });
          this.items = usuariosInactivos;
        }
      }]);

      return InactiveUsersTalkComponent;
    }();

    InactiveUsersTalkComponent.ɵfac = function InactiveUsersTalkComponent_Factory(t) {
      return new (t || InactiveUsersTalkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_talk_talk_service__WEBPACK_IMPORTED_MODULE_2__["TalkService"]));
    };

    InactiveUsersTalkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InactiveUsersTalkComponent,
      selectors: [["app-inactive-users-talk"]],
      decls: 5,
      vars: 1,
      consts: [[3, "click", 4, "ngFor", "ngForOf"], [3, "click"]],
      template: function InactiveUsersTalkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Seleccione un usuario inactivo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InactiveUsersTalkComponent_ion_item_4_Template, 3, 1, "ion-item", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5hY3RpdmUtdXNlcnMtdGFsay9pbmFjdGl2ZS11c2Vycy10YWxrLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InactiveUsersTalkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inactive-users-talk',
          templateUrl: './inactive-users-talk.component.html',
          styleUrls: ['./inactive-users-talk.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["PopoverController"]
        }, {
          type: _services_talk_talk_service__WEBPACK_IMPORTED_MODULE_2__["TalkService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/popover/popover.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/popover/popover.component.ts ***!
    \*********************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function PopoverComponent_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.highlightedText);
      }
    }

    var PopoverComponent = /*#__PURE__*/_createClass(function PopoverComponent() {
      _classCallCheck(this, PopoverComponent);
    });

    PopoverComponent.ɵfac = function PopoverComponent_Factory(t) {
      return new (t || PopoverComponent)();
    };

    PopoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PopoverComponent,
      selectors: [["app-popover"]],
      inputs: {
        text: "text",
        highlightedText: "highlightedText"
      },
      decls: 4,
      vars: 2,
      consts: [[1, "ion-padding"], ["class", "highlighted", 4, "ngIf"], [1, "regular"], [1, "highlighted"]],
      template: function PopoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PopoverComponent_span_1_Template, 2, 1, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.highlightedText);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".highlighted[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BvcG92ZXIvcG9wb3Zlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWdobGlnaHRlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4iLCIuaGlnaGxpZ2h0ZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-popover',
          templateUrl: './popover.component.html',
          styleUrls: ['./popover.component.scss']
        }]
      }], null, {
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        highlightedText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/recommendation-detail/recommendation-detail.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/components/recommendation-detail/recommendation-detail.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: RecommendationDetailComponent */

  /***/
  function srcAppComponentsRecommendationDetailRecommendationDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendationDetailComponent", function () {
      return RecommendationDetailComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_AT_recommendation_at_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/AT/recommendation-at.service */
    "./src/app/services/AT/recommendation-at.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");

    var RecommendationDetailComponent = /*#__PURE__*/function () {
      function RecommendationDetailComponent(modalCtrl, alertController, recommendationService, formBuilder) {
        _classCallCheck(this, RecommendationDetailComponent);

        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.recommendationService = recommendationService;
        this.formBuilder = formBuilder;
        this.enabledField = false;
        this.disabledField = true;
      }

      _createClass(RecommendationDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var date = this.dateRadication.split('T')[0].split('-');
          var newFecha = date[1] + '/' + date[2] + '/' + date[0];
          this.maxDateImplementation = new Date(newFecha);
          this.createFormRecomemendation();
        }
        /**
         * Método que permite crear el formulario de la recomendación seleccionada
         */

      }, {
        key: "createFormRecomemendation",
        value: function createFormRecomemendation() {
          this.formRegisterRecommendationDetail = this.formBuilder.group({
            checkRecomendation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            implementationDate: [''],
            wasEffective: [''],
            notImplementation: [''],
            nameSupport: ['']
          });
        }
        /**
         * Este método se ejecuta cuando cambia el valor de la pregunta ¿ La recomendación fue implementada ?
         * y dependiendo de esto activar o desactivar algunos botones.
         */

      }, {
        key: "changeOptionCheckRecommendation",
        value: function changeOptionCheckRecommendation(event) {
          var optionSelected = event.detail.value;

          if (optionSelected === 'true') {
            this.disabledField = false;
            this.formRegisterRecommendationDetail.controls.implementationDate.enable();
            this.formRegisterRecommendationDetail.controls.notImplementation.disable();
          } else {
            this.disabledField = true;
            this.formRegisterRecommendationDetail.controls.notImplementation.enable();
            this.formRegisterRecommendationDetail.controls.implementationDate.disable();
            this.formRegisterRecommendationDetail.controls.implementationDate.reset();
            this.formRegisterRecommendationDetail.controls.wasEffective.reset();
          }
        }
        /**
         * Este metodo basicamente muestra la alerta de exito o fallido segun sea el caso al momento de
         * ejecutar el servicio
         */

      }, {
        key: "confirmationRegister",
        value: function confirmationRegister(resultadoAlerta, mensaje) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _this6 = this;

            var alert;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return this.alertController.create({
                    header: resultadoAlerta,
                    mode: 'ios',
                    message: mensaje,
                    buttons: [{
                      text: 'ACEPTAR',
                      handler: function handler() {
                        _this6.modalCtrl.dismiss();
                      }
                    }]
                  });

                case 2:
                  alert = _context7.sent;
                  _context7.next = 5;
                  return alert.present();

                case 5:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "regresar",
        value: function regresar() {
          this.modalCtrl.dismiss();
        }
        /**
         * register(), permite consumir un servicio el cual guarda el detalle de la recomendación seleccionada.
         */

      }, {
        key: "register",
        value: function register() {
          var _this7 = this;

          var checkRecommendation = this.formRegisterRecommendationDetail.value.checkRecomendation === 'true';
          var wasEffective = this.formRegisterRecommendationDetail.value.wasEffective === 'true';

          if (!checkRecommendation) {
            this.saveRecommendationDetail = {
              PK_ID_Recomendacion: this.id,
              fueImplementada: checkRecommendation,
              fueEficaz: wasEffective,
              causaDeLaNoImplementacion: this.formRegisterRecommendationDetail.value.notImplementation,
              nombreSoporte: this.formRegisterRecommendationDetail.value.nameSupport
            };
          } else {
            var recommendationDate = this.formRegisterRecommendationDetail.value.implementationDate.toISOString().split('T')[0];
            var date = recommendationDate.split('-');
            var dateString = date[2] + '/' + date[1] + '/' + date[0];
            this.saveRecommendationDetail = {
              PK_ID_Recomendacion: this.id,
              fueImplementada: checkRecommendation,
              fechaImplementacion: dateString,
              fueEficaz: wasEffective,
              causaDeLaNoImplementacion: this.formRegisterRecommendationDetail.value.notImplementation,
              nombreSoporte: this.formRegisterRecommendationDetail.value.nameSupport
            };
          }

          this.recommendationService.saveRecommendationSelected(this.saveRecommendationDetail).subscribe(function (response) {
            _this7.confirmationRegister('Exitoso', 'El registro se realizó correctamente.');
          }, function (err) {
            console.error('No fue exitoso el registro', err);

            _this7.confirmationRegister('Error.', 'No se pudo realizar el registro para el detalle de la recomendación');
          });
        }
      }]);

      return RecommendationDetailComponent;
    }();

    RecommendationDetailComponent.ɵfac = function RecommendationDetailComponent_Factory(t) {
      return new (t || RecommendationDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_AT_recommendation_at_service__WEBPACK_IMPORTED_MODULE_4__["RecommendationATService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    RecommendationDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RecommendationDetailComponent,
      selectors: [["app-recommendation-detail"]],
      inputs: {
        id: "id",
        dateRadication: "dateRadication"
      },
      decls: 70,
      vars: 6,
      consts: [[1, "ion-no-border"], ["color", "tertiary"], ["size", "12"], [1, "titulo"], [1, "ion-padding"], [3, "formGroup"], ["size", "8"], ["size", "4"], ["name", "auto", "formControlName", "checkRecomendation", 3, "ionChange"], ["lines", "none"], ["mode", "md", "value", "true"], ["mode", "md", "value", "false"], ["size", "5"], ["size", "7"], [2, "width", "100%"], ["readonly", "", "matInput", "", "formControlName", "implementationDate", 3, "matDatepicker", "max"], ["matSuffix", "", 3, "for"], ["picker", ""], ["name", "auto", "formControlName", "wasEffective"], ["mode", "md", "value", "true", 3, "disabled"], ["mode", "md", "value", "false", 3, "disabled"], ["position", "floating"], ["placeholder", "Causa de la NO implementaci\xF3n", "formControlName", "notImplementation", "rows", "5", 1, "bg-light", 2, "border-radius", "15px"], ["placeholder", "Nombre del soporte", "formControlName", "nameSupport", 1, "bg-light", 2, "border-radius", "15px"], ["no-border", ""], ["slot", "start"], ["color", "secondary", "expand", "block", 3, "click"], ["slot", "end"], ["color", "primary", "expand", "block", 3, "click"]],
      template: function RecommendationDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Registro Seguimiento Recomendaciones AT");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xBF La recomendaci\xF3n fue implementada ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-radio-group", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function RecommendationDetailComponent_Template_ion_radio_group_ionChange_16_listener($event) {
            return ctx.changeOptionCheckRecommendation($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Si");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "ion-radio", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ion-radio", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Fecha de implementaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "mat-datepicker-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "mat-datepicker", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "\xBF Fueron eficaces ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "ion-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "ion-radio-group", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Si");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "ion-radio", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "ion-radio", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-label", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Causa de la NO implementaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](54, "ion-textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Nombre del soporte");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "ion-input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "ion-footer", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "ion-buttons", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "ion-button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationDetailComponent_Template_ion_button_click_63_listener() {
            return ctx.regresar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Regresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "ion-buttons", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "ion-button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RecommendationDetailComponent_Template_ion_button_click_67_listener() {
            return ctx.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Registrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.formRegisterRecommendationDetail);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r0)("max", ctx.maxDateImplementation);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabledField);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disabledField);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadio"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RadioValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerInput"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerToggle"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepicker"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\nion-header[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 12px !important;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL2NvbXBvbmVudHMvcmVjb21tZW5kYXRpb24tZGV0YWlsL3JlY29tbWVuZGF0aW9uLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZWNvbW1lbmRhdGlvbi1kZXRhaWwvcmVjb21tZW5kYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FDQUo7QURLRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0ZKO0FER0k7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0FDRE47QURJRTtFQUNFLHFCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlY29tbWVuZGF0aW9uLWRldGFpbC9yZWNvbW1lbmRhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLXRvb2xiYXIge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gIH1cbiAgJiAudGl0dWxvIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuXG5pb24tY29udGVudCB7XG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBpb24taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB9XG4gIH1cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbmlvbi1oZWFkZXIgLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendationDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-recommendation-detail',
          templateUrl: './recommendation-detail.component.html',
          styleUrls: ['./recommendation-detail.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _services_AT_recommendation_at_service__WEBPACK_IMPORTED_MODULE_4__["RecommendationATService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dateRadication: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/components/resend-verification-code/resend-verification-code.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/components/resend-verification-code/resend-verification-code.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: ResendVerificationCodeComponent */

  /***/
  function srcAppComponentsResendVerificationCodeResendVerificationCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResendVerificationCodeComponent", function () {
      return ResendVerificationCodeComponent;
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


    var src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/activities/activityListCompany/activity-list-company.service */
    "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _pipes_search_resend_code_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../pipes/search-resend-code.pipe */
    "./src/app/pipes/search-resend-code.pipe.ts");

    function ResendVerificationCodeComponent_ion_slides_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-slides", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-slide");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " No tienes actividades migradas, por ende, no existe una lista de responsables para reenv\xEDar el c\xF3digo de verificaci\xF3n ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function ResendVerificationCodeComponent_div_9_ion_row_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-checkbox", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResendVerificationCodeComponent_div_9_ion_row_13_Template_ion_checkbox_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var responsable_r3 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r5.selectResponsible(responsable_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var responsable_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](responsable_r3.listaResponsables.Nombre);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](responsable_r3.listaResponsables.correo);
      }
    }

    var _c0 = function _c0() {
      return ["nombre", "correoElecctronico"];
    };

    function ResendVerificationCodeComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-col", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Nombre");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Correo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-grid", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ResendVerificationCodeComponent_div_9_ion_row_13_Template, 9, 2, "ion-row", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "searchResendCode");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](14, 1, ctx_r1.listaResponsables, ctx_r1.textoBuscar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0)));
      }
    }

    var ResendVerificationCodeComponent = /*#__PURE__*/function () {
      function ResendVerificationCodeComponent(modalCtrl, listActivitiesCompany, storage, activityListCompany, loadingCtlr, alertController) {
        _classCallCheck(this, ResendVerificationCodeComponent);

        this.modalCtrl = modalCtrl;
        this.listActivitiesCompany = listActivitiesCompany;
        this.storage = storage;
        this.activityListCompany = activityListCompany;
        this.loadingCtlr = loadingCtlr;
        this.alertController = alertController;
        /**
         * Este componente es la popup que esta en el menú luego de ingresar en la opción de registro de ejecución de actividades
         */

        this.listaResponsables = [];
        this.responsablesSeleccionados = [];
        this.textoBuscar = '';
      }

      _createClass(ResendVerificationCodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.listActivities();
        }
        /**
         * listActivities() lista las actividades dependiendo de las actividades migradas al usuario que se logueo en la app
         */

      }, {
        key: "listActivities",
        value: function listActivities() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var documentoUsuario, responsablesList, i, idEmpresa, j, element, objResponsables;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.storage.get('sesion');

                case 2:
                  documentoUsuario = _context8.sent;
                  _context8.next = 5;
                  return this.storage.get('listaActividades');

                case 5:
                  this.listaResponsables = _context8.sent;
                  ;
                  responsablesList = []; // tslint:disable-next-line: prefer-for-of

                  for (i = 0; i < this.listaResponsables.length; i++) {
                    idEmpresa = this.listaResponsables[i].id; // tslint:disable-next-line: prefer-for-of

                    for (j = 0; j < this.listaResponsables[i].listaReposables.length; j++) {
                      element = this.listaResponsables[i].listaReposables[j];
                      objResponsables = {
                        idEmpresa: idEmpresa,
                        listaResponsables: element
                      };
                      responsablesList.push(objResponsables);
                    }
                  }

                  this.listaResponsables = responsablesList;
                  console.log("Lista de respondables::: ", this.listaResponsables);

                case 11:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
        }
        /**
         * Buscar el responsable al que se le quiere reenviar el código de verificación
         */

      }, {
        key: "search",
        value: function search(event) {
          this.textoBuscar = event.detail.value;
        }
      }, {
        key: "selectResponsible",
        value: function selectResponsible(responsableSelected) {
          var _this8 = this;

          var idSelected = responsableSelected.listaResponsables.id;
          var existe = this.responsablesSeleccionados.find(function (item) {
            return item.listaResponsables.id === idSelected;
          });

          if (existe) {
            this.responsablesSeleccionados.forEach(function (element) {
              var item = element;

              if (item === existe) {
                _this8.responsablesSeleccionados.splice(existe, 1);
              }
            });
          } else {
            this.responsablesSeleccionados.push(responsableSelected);
          }
        }
        /**
         * Método que permite reeenviar el código de verificación a usuario seleccionado.
         */

      }, {
        key: "resendCode",
        value: function resendCode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var usuarioAEnviarCodigo, siEnvioCorreo;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  if (!(this.responsablesSeleccionados.length === 1)) {
                    _context9.next = 9;
                    break;
                  }

                  usuarioAEnviarCodigo = this.responsablesSeleccionados[0];
                  this.presentLoading('Reenviando código ...'); // tslint:disable-next-line: max-line-length

                  _context9.next = 5;
                  return this.activityListCompany.recordarCodigoVerificacion(usuarioAEnviarCodigo.listaResponsables.id, usuarioAEnviarCodigo.idEmpresa).toPromise();

                case 5:
                  siEnvioCorreo = _context9.sent;

                  if (siEnvioCorreo) {
                    this.notification('Atención', "Se reenv\xEDo el c\xF3digo de verificaci\xF3n al usuario:".concat(usuarioAEnviarCodigo.listaResponsables.correo, " "));
                  } else {
                    this.notification('Error', "No se pudo env\xEDar el correo al siguiente usuario: ".concat(usuarioAEnviarCodigo.listaResponsables.correo));
                  }

                  _context9.next = 10;
                  break;

                case 9:
                  this.notification('Error', 'Se debe seleccionar solo un usuario');

                case 10:
                  this.loading.dismiss();

                case 11:
                case "end":
                  return _context9.stop();
              }
            }, _callee9, this);
          }));
        } // Cerrar la modal.

      }, {
        key: "regresar",
        value: function regresar() {
          this.modalCtrl.dismiss();
        } // Cargar el loading

      }, {
        key: "presentLoading",
        value: function presentLoading(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            return _regeneratorRuntime().wrap(function _callee10$(_context10) {
              while (1) switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return this.loadingCtlr.create({
                    mode: 'ios',
                    message: message
                  });

                case 2:
                  this.loading = _context10.sent;
                  return _context10.abrupt("return", this.loading.present());

                case 4:
                case "end":
                  return _context10.stop();
              }
            }, _callee10, this);
          }));
        } // Cargar la notificación cuando se envía o no el código de verificación.

      }, {
        key: "notification",
        value: function notification(titulo, notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return this.alertController.create({
                    header: titulo,
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context11.sent;
                  _context11.next = 5;
                  return alert.present();

                case 5:
                  alert.onDidDismiss();

                case 6:
                case "end":
                  return _context11.stop();
              }
            }, _callee11, this);
          }));
        }
      }]);

      return ResendVerificationCodeComponent;
    }();

    ResendVerificationCodeComponent.ɵfac = function ResendVerificationCodeComponent_Factory(t) {
      return new (t || ResendVerificationCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]));
    };

    ResendVerificationCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ResendVerificationCodeComponent,
      selectors: [["app-resend-verification-code"]],
      decls: 20,
      vars: 2,
      consts: [[1, "ion-no-border"], ["color", "tertiary"], ["size", "12"], [1, "titulo"], [1, "ion-padding", "backgroundContent"], ["mode", "ios", 4, "ngIf"], [4, "ngIf"], ["no-border", ""], ["slot", "start"], ["color", "secondary", "expand", "block", 3, "click"], ["slot", "end"], ["color", "primary", "expand", "block", 3, "click"], ["mode", "ios"], [1, "ion-text-center"], ["src", "../../../assets/icon/icono_observaciones.svg", "alt", ""], [1, "tituloSlide"], ["fixed", ""], ["size", "2"], ["size", "5"], [4, "ngFor", "ngForOf"], ["mode", "ios", 3, "click"]],
      template: function ResendVerificationCodeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-col", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Reenv\xEDar c\xF3digo de verificaci\xF3n");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ResendVerificationCodeComponent_ion_slides_8_Template, 12, 0, "ion-slides", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ResendVerificationCodeComponent_div_9_Template, 15, 6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-footer", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-buttons", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResendVerificationCodeComponent_Template_ion_button_click_13_listener() {
            return ctx.regresar();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Regresar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-buttons", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResendVerificationCodeComponent_Template_ion_button_click_17_listener() {
            return ctx.resendCode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Reenv\xEDar c\xF3digo");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listaResponsables.length === 0 || undefined);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.listaResponsables.length > 0);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlide"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["BooleanValueAccessor"]],
      pipes: [_pipes_search_resend_code_pipe__WEBPACK_IMPORTED_MODULE_6__["SearchResendCodePipe"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding-top: 0px;\n}\nion-header[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 14.5px !important;\n  text-align: center;\n}\nion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%] {\n  --border-radius: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%] {\n  height: 80%;\n  border: 1px solid #344b56;\n  border-radius: 50px;\n  margin-top: 40px;\n}\nion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloSlide[_ngcontent-%COMP%] {\n  margin-top: -30px;\n  font-weight: bold;\n  color: #344b56;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-radius: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL2NvbXBvbmVudHMvcmVzZW5kLXZlcmlmaWNhdGlvbi1jb2RlL3Jlc2VuZC12ZXJpZmljYXRpb24tY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9yZXNlbmQtdmVyaWZpY2F0aW9uLWNvZGUvcmVzZW5kLXZlcmlmaWNhdGlvbi1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7QUNBSjtBREVFO0VBQ0Usc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FDQUo7QURLRTtFQUNFLHFCQUFBO0FDRko7QURJRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRE9ZO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNMZDtBRFlFO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDVko7QURXSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7QUNUTjtBRFlFO0VBQ0UscUJBQUE7QUNWSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZW5kLXZlcmlmaWNhdGlvbi1jb2RlL3Jlc2VuZC12ZXJpZmljYXRpb24tY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tdG9vbGJhciB7XG4gICAgcGFkZGluZy10b3A6IDBweDtcbiAgfVxuICAmIC50aXR1bG8ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAxNC41cHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICBpb24tc2VhcmNoYmFyIHtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIH1cbiAgaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA4MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgaW9uLXNsaWRlIHtcbiAgICAgIGlvbi1ncmlkIHtcbiAgICAgICAgaW9uLXJvdyB7XG4gICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAmIC50aXR1bG9TbGlkZSB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zMHB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzNDRiNTY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBpb24taXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB9XG4gIH1cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cbmlvbi1oZWFkZXIgLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTQuNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLXNlYXJjaGJhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0NGI1NjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgbWFyZ2luLXRvcDogNDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCAudGl0dWxvU2xpZGUge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMzQ0YjU2O1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResendVerificationCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-resend-verification-code',
          templateUrl: './resend-verification-code.component.html',
          styleUrls: ['./resend-verification-code.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__["ActivityListCompanyService"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }, {
          type: src_app_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_4__["ActivityListCompanyService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/scanner-qr/scanner-qr.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/scanner-qr/scanner-qr.component.ts ***!
    \***************************************************************/

  /*! exports provided: ScannerQrComponent */

  /***/
  function srcAppComponentsScannerQrScannerQrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScannerQrComponent", function () {
      return ScannerQrComponent;
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


    var _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor-community/barcode-scanner */
    "./node_modules/@capacitor-community/barcode-scanner/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ScannerQrComponent_ion_row_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.result);
      }
    }

    var ScannerQrComponent = /*#__PURE__*/function () {
      function ScannerQrComponent(modalCtrl, alertCtl) {
        _classCallCheck(this, ScannerQrComponent);

        this.modalCtrl = modalCtrl;
        this.alertCtl = alertCtl;
        this.result = null;
        this.scanActive = false;
      }

      _createClass(ScannerQrComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stopBarcodeRemove('');
        }
      }, {
        key: "startBarcode",
        value: function startBarcode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var allowed, result;
            return _regeneratorRuntime().wrap(function _callee12$(_context12) {
              while (1) switch (_context12.prev = _context12.next) {
                case 0:
                  _context12.next = 2;
                  return this.checkPermission();

                case 2:
                  allowed = _context12.sent;

                  if (allowed) {
                    _context12.next = 5;
                    break;
                  }

                  return _context12.abrupt("return");

                case 5:
                  document.querySelector('body').classList.add('scanner-active'); // make background of WebView transparent
                  // note: if you are using ionic this might not be enough, check below

                  _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"].hideBackground();

                  this.scanActive = true;
                  _context12.next = 10;
                  return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"].startScan();

                case 10:
                  result = _context12.sent;

                  // start scanning and wait for a result
                  // if the result has content
                  if (result.hasContent) {
                    this.result = result.content;
                    this.stopBarcodeRemove(result.content);
                  }

                case 12:
                case "end":
                  return _context12.stop();
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "checkPermission",
        value: function checkPermission() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            var _this9 = this;

            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  return _context14.abrupt("return", new Promise(function (resolve, reject) {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
                      var status, alert;
                      return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                        while (1) switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"].checkPermission({
                              force: true
                            });

                          case 2:
                            status = _context13.sent;

                            if (!status.granted) {
                              _context13.next = 6;
                              break;
                            }

                            resolve(true);
                            return _context13.abrupt("return");

                          case 6:
                            if (!status.denied) {
                              _context13.next = 13;
                              break;
                            }

                            _context13.next = 9;
                            return this.alertCtl.create({
                              header: 'Sin autorización',
                              message: 'Por favor permita el acceso a la cámara en su configuración',
                              buttons: [{
                                text: 'No',
                                role: 'cancel'
                              }, {
                                text: 'Abrir configuración',
                                handler: function handler() {
                                  _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"].openAppSettings();

                                  resolve(false);
                                }
                              }]
                            });

                          case 9:
                            alert = _context13.sent;
                            _context13.next = 12;
                            return alert.present();

                          case 12:
                            return _context13.abrupt("return");

                          case 13:
                            resolve(false);
                            return _context13.abrupt("return");

                          case 15:
                          case "end":
                            return _context13.stop();
                        }
                      }, _callee13, this);
                    }));
                  }));

                case 1:
                case "end":
                  return _context14.stop();
              }
            }, _callee14);
          }));
        }
      }, {
        key: "stopBarcodeRemove",
        value: function stopBarcodeRemove(msg) {
          _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"].stopScan();

          _capacitor_community_barcode_scanner__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"].showBackground();

          this.scanActive = false;
          document.querySelector('body').classList.remove('scanner-active');
          this.modalCtrl.dismiss({
            response: msg ? msg : null
          });
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          return this.modalCtrl.dismiss();
        }
      }]);

      return ScannerQrComponent;
    }();

    ScannerQrComponent.ɵfac = function ScannerQrComponent_Factory(t) {
      return new (t || ScannerQrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]));
    };

    ScannerQrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ScannerQrComponent,
      selectors: [["app-scanner-qr"]],
      decls: 22,
      vars: 4,
      consts: [[1, "ion-no-border", 3, "hidden"], ["color", "tertiary"], ["slot", "end"], [3, "click"], [1, "ion-padding"], [1, "scan-box"], [1, "ion-text-center", 3, "hidden"], ["size", "12", "sizeMd", "8", "sizeLg", "6"], ["mode", "ios", "color", "primary", 1, "btn", 3, "click"], ["slot", "start", "name", "scan"], ["class", "ion-text-center", 4, "ngIf"], [1, "scanner-buttons", 3, "hidden"], ["mode", "ios", "color", "secondary", 1, "btn", 3, "click"], [1, "ion-text-center"]],
      template: function ScannerQrComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-buttons", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScannerQrComponent_Template_ion_button_click_3_listener() {
            return ctx.cerrarModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Cerrar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Escanear QR");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-content", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScannerQrComponent_Template_ion_button_click_12_listener() {
            return ctx.startBarcode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Escanear");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ScannerQrComponent_ion_row_16_Template, 4, 1, "ion-row", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-row", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-col", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScannerQrComponent_Template_ion_button_click_19_listener() {
            return ctx.stopBarcodeRemove("");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Cancelar");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.scanActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.scanActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.result && !ctx.scanActive);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !ctx.scanActive);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".scanner-buttons[_ngcontent-%COMP%] {\n  margin: 0px auto;\n  position: absolute;\n  bottom: 2rem;\n  width: 90vw;\n  height: 3rem;\n  z-index: 11;\n  text-align: center;\n}\n\n.scan-box[_ngcontent-%COMP%] {\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 100vmax rgba(0, 0, 0, 0.5);\n  content: \"\";\n  display: block;\n  width: 15rem;\n  height: 15rem;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL2NvbXBvbmVudHMvc2Nhbm5lci1xci9zY2FubmVyLXFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NjYW5uZXItcXIvc2Nhbm5lci1xci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NjYW5uZXItcXIvc2Nhbm5lci1xci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY2FubmVyLWJ1dHRvbnMge1xuICBtYXJnaW46IDBweCBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnJlbTtcbiAgd2lkdGg6IDkwdnc7XG4gIGhlaWdodDogM3JlbTtcbiAgei1pbmRleDogMTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNjYW4tYm94IHtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDAgMTAwdm1heCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDE1cmVtO1xuICBoZWlnaHQ6IDE1cmVtO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuIiwiLnNjYW5uZXItYnV0dG9ucyB7XG4gIG1hcmdpbjogMHB4IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAycmVtO1xuICB3aWR0aDogOTB2dztcbiAgaGVpZ2h0OiAzcmVtO1xuICB6LWluZGV4OiAxMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2Nhbi1ib3gge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3gtc2hhZG93OiAwIDAgMCAxMDB2bWF4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxNXJlbTtcbiAgaGVpZ2h0OiAxNXJlbTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScannerQrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-scanner-qr',
          templateUrl: './scanner-qr.component.html',
          styleUrls: ['./scanner-qr.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/config.service.ts":
  /*!***********************************!*\
    !*** ./src/app/config.service.ts ***!
    \***********************************/

  /*! exports provided: ConfigService */

  /***/
  function srcAppConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfigService", function () {
      return ConfigService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /**
     * Servicio de configuración de la aplicación.
     *
     * Maneja parámetros de configuración que no cambian de acuerdo al entorno de ejecución.
     */


    var ConfigService = /*#__PURE__*/function () {
      function ConfigService() {
        _classCallCheck(this, ConfigService);

        /**
         * Dirección URL de la web de _Alissta_ para la recuperación de contraseña.
         */
        // private readonly ALISSTA_PASSWORD_RECOVERY_URL = 'https://www.alissta.gov.co/AdminUsuarios/RecuperarClave';
        // private readonly ALISSTA_PASSWORD_RECOVERY_URL = 'https://test-alissta-sum.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
        this.ALISSTA_PASSWORD_RECOVERY_URL = 'http://positiva.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
        /**
         * Dirección URL de la web de _Alissta_ para el cambio de contraseña.
         */
        // private readonly ALISSTA_CHANGE_PASSWORD_URL = 'https://test-alissta-sum.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';

        this.ALISSTA_CHANGE_PASSWORD_URL = 'http://positiva.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM';
        /**
         * Dirección URL en el que se encuentra el módulo de autenticación.
         */

        this.LOGIN_NAMESPACE = '';
        /**
         * Identificador de la aplicación para _iOS_.
         */

        this.IOS_APP_ID = '';
        /**
         * Identificador de la aplicación para _Android_.
         */

        this.ANDROID_APP_ID = 'co.positiva.alisstasum';
        /**
         *  Variable para indicar si inicio sesion
         */

        this.isLogged = false;
      }
      /**
       * Dirección URL de la web de _Alissta_ para la recuperación de contraseña.
       */


      _createClass(ConfigService, [{
        key: "allistaPasswordRecoveryURL",
        get: function get() {
          return this.ALISSTA_PASSWORD_RECOVERY_URL;
        }
        /**
         * Dirección URL de la web de _Alissta_ para el cambio de contraseña.
         */

      }, {
        key: "alisstaChangePasswordURL",
        get: function get() {
          return this.ALISSTA_CHANGE_PASSWORD_URL;
        }
        /**
         * Dirección URL en el que se encuentra el módulo de autenticación.
         */

      }, {
        key: "loginNamespace",
        get: function get() {
          return this.LOGIN_NAMESPACE;
        }
        /**
         * Identificador de la aplicación para _iOS_.
         */

      }, {
        key: "iosAppID",
        get: function get() {
          return this.IOS_APP_ID;
        }
        /**
         * Identificador de la aplicación para _Android_.
         */

      }, {
        key: "androidAppID",
        get: function get() {
          return this.ANDROID_APP_ID;
        }
      }]);

      return ConfigService;
    }();

    ConfigService.ɵfac = function ConfigService_Factory(t) {
      return new (t || ConfigService)();
    };

    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ConfigService,
      factory: ConfigService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/auth/auth.guard.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/auth/auth.guard.ts ***!
    \******************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppPagesAuthAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
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


    var _config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../config.service */
    "./src/app/config.service.ts");
    /**
     * Comprueba que el usuario esté autenticado.
     */


    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, config) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.config = config;
        /**
         * Dirección URL para la página de inicio de sesión dentro del módulo de autenticación.
         */

        this.LOGIN_URL = 'auth/login';
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var existe = this.config.isLogged;

          if (existe) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/filterCompanies.pipe.ts":
  /*!***********************************************!*\
    !*** ./src/app/pipes/filterCompanies.pipe.ts ***!
    \***********************************************/

  /*! exports provided: FilterCompaniesPipe */

  /***/
  function srcAppPipesFilterCompaniesPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterCompaniesPipe", function () {
      return FilterCompaniesPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FilterCompaniesPipe = /*#__PURE__*/function () {
      function FilterCompaniesPipe() {
        _classCallCheck(this, FilterCompaniesPipe);
      }

      _createClass(FilterCompaniesPipe, [{
        key: "transform",
        value: function transform(value, properties, term) {
          var _this10 = this;

          return value.filter(function (v) {
            return properties.some(function (p) {
              return _this10.matchItem(v, p, term);
            });
          });
        }
        /**
         * Comprueba que el término de búsqueda indicado se encuentre como subcadena de caracteres
         * dentro de la propiedad y objeto proporcionado. Esto significa que todos los valores de
         * las propiedades del objeto serán convertidas en su representación a cadena de caracteres,
         * por lo que si la propiedad es un objeto complejo la búsqueda no se efectuará y se omitirá
         * esta búsqueda.
         *
         * @param item
         * @param property
         * @param term
         * @returns
         */

      }, {
        key: "matchItem",
        value: function matchItem(item, property, term) {
          if (!term) {
            return true;
          }

          if (item[property] === undefined || item[property] === null) {
            return false;
          }

          var value = item[property].toString().toLowerCase();
          return value.includes(term.toLowerCase());
        }
      }]);

      return FilterCompaniesPipe;
    }();

    FilterCompaniesPipe.ɵfac = function FilterCompaniesPipe_Factory(t) {
      return new (t || FilterCompaniesPipe)();
    };

    FilterCompaniesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "filterCompanies",
      type: FilterCompaniesPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterCompaniesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'filterCompanies'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/municipiosFilter.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/pipes/municipiosFilter.pipe.ts ***!
    \************************************************/

  /*! exports provided: MunicipiosFilterPipe */

  /***/
  function srcAppPipesMunicipiosFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MunicipiosFilterPipe", function () {
      return MunicipiosFilterPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MunicipiosFilterPipe = /*#__PURE__*/function () {
      function MunicipiosFilterPipe() {
        _classCallCheck(this, MunicipiosFilterPipe);
      }

      _createClass(MunicipiosFilterPipe, [{
        key: "transform",
        value: function transform(municipios, departamento) {
          return municipios.filter(function (m) {
            return m.IdDepartamento === departamento.Pk_Id_Departamento;
          });
        }
      }]);

      return MunicipiosFilterPipe;
    }();

    MunicipiosFilterPipe.ɵfac = function MunicipiosFilterPipe_Factory(t) {
      return new (t || MunicipiosFilterPipe)();
    };

    MunicipiosFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "municipiosFilter",
      type: MunicipiosFilterPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MunicipiosFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'municipiosFilter'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/pipes.module.ts":
  /*!***************************************!*\
    !*** ./src/app/pipes/pipes.module.ts ***!
    \***************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcAppPipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./filterCompanies.pipe */
    "./src/app/pipes/filterCompanies.pipe.ts");
    /* harmony import */


    var _municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./municipiosFilter.pipe */
    "./src/app/pipes/municipiosFilter.pipe.ts");
    /* harmony import */


    var _recommendation_type_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./recommendation-type.pipe */
    "./src/app/pipes/recommendation-type.pipe.ts");
    /* harmony import */


    var _search_company_list_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search-company-list.pipe */
    "./src/app/pipes/search-company-list.pipe.ts");
    /* harmony import */


    var _search_resend_code_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-resend-code.pipe */
    "./src/app/pipes/search-resend-code.pipe.ts");

    var PipesModule = /*#__PURE__*/_createClass(function PipesModule() {
      _classCallCheck(this, PipesModule);
    });

    PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PipesModule
    });
    PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PipesModule_Factory(t) {
        return new (t || PipesModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, {
        declarations: [_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchCompanyListPipe"], _recommendation_type_pipe__WEBPACK_IMPORTED_MODULE_3__["RecommendationTypePipe"], _search_resend_code_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchResendCodePipe"], _filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterCompaniesPipe"], _municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_2__["MunicipiosFilterPipe"]],
        exports: [_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchCompanyListPipe"], _recommendation_type_pipe__WEBPACK_IMPORTED_MODULE_3__["RecommendationTypePipe"], _search_resend_code_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchResendCodePipe"], _filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterCompaniesPipe"], _municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_2__["MunicipiosFilterPipe"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchCompanyListPipe"], _recommendation_type_pipe__WEBPACK_IMPORTED_MODULE_3__["RecommendationTypePipe"], _search_resend_code_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchResendCodePipe"], _filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterCompaniesPipe"], _municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_2__["MunicipiosFilterPipe"]],
          exports: [_search_company_list_pipe__WEBPACK_IMPORTED_MODULE_4__["SearchCompanyListPipe"], _recommendation_type_pipe__WEBPACK_IMPORTED_MODULE_3__["RecommendationTypePipe"], _search_resend_code_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchResendCodePipe"], _filterCompanies_pipe__WEBPACK_IMPORTED_MODULE_1__["FilterCompaniesPipe"], _municipiosFilter_pipe__WEBPACK_IMPORTED_MODULE_2__["MunicipiosFilterPipe"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/recommendation-type.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/pipes/recommendation-type.pipe.ts ***!
    \***************************************************/

  /*! exports provided: RecommendationTypePipe */

  /***/
  function srcAppPipesRecommendationTypePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendationTypePipe", function () {
      return RecommendationTypePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var RecommendationTypePipe = /*#__PURE__*/function () {
      function RecommendationTypePipe() {
        _classCallCheck(this, RecommendationTypePipe);
      }

      _createClass(RecommendationTypePipe, [{
        key: "transform",
        value: function transform(texto) {
          return texto.charAt(0);
        }
      }]);

      return RecommendationTypePipe;
    }();

    RecommendationTypePipe.ɵfac = function RecommendationTypePipe_Factory(t) {
      return new (t || RecommendationTypePipe)();
    };

    RecommendationTypePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "recommendationType",
      type: RecommendationTypePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendationTypePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'recommendationType'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/search-company-list.pipe.ts":
  /*!***************************************************!*\
    !*** ./src/app/pipes/search-company-list.pipe.ts ***!
    \***************************************************/

  /*! exports provided: SearchCompanyListPipe */

  /***/
  function srcAppPipesSearchCompanyListPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCompanyListPipe", function () {
      return SearchCompanyListPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchCompanyListPipe = /*#__PURE__*/function () {
      function SearchCompanyListPipe() {
        _classCallCheck(this, SearchCompanyListPipe);
      }

      _createClass(SearchCompanyListPipe, [{
        key: "transform",
        value: function transform(companyXActivities, texto, properties, modulo) {
          if (!companyXActivities) {
            return [];
          }

          texto = texto !== null && texto !== void 0 ? texto : '';
          modulo = modulo !== null && modulo !== void 0 ? modulo : ''; // if (!texto) { return companyXActivities; }

          return companyXActivities.filter(function (item) {
            var itemFound = false; // tslint:disable-next-line: prefer-for-of

            for (var i = 0; i < properties.length; i++) {
              if (item[properties[i]].toLowerCase().indexOf(texto.toLowerCase()) !== -1) {
                if (modulo != '') {
                  // tslint:disable-next-line: prefer-for-of
                  if (item['Modulo'].toLowerCase().indexOf(modulo.toLowerCase()) !== -1) {
                    itemFound = true;
                    break;
                  }
                } else {
                  itemFound = true;
                  break;
                }
              }
            }

            return itemFound;
          });
        }
      }]);

      return SearchCompanyListPipe;
    }();

    SearchCompanyListPipe.ɵfac = function SearchCompanyListPipe_Factory(t) {
      return new (t || SearchCompanyListPipe)();
    };

    SearchCompanyListPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "searchCompanyList",
      type: SearchCompanyListPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchCompanyListPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'searchCompanyList'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pipes/search-resend-code.pipe.ts":
  /*!**************************************************!*\
    !*** ./src/app/pipes/search-resend-code.pipe.ts ***!
    \**************************************************/

  /*! exports provided: SearchResendCodePipe */

  /***/
  function srcAppPipesSearchResendCodePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchResendCodePipe", function () {
      return SearchResendCodePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchResendCodePipe = /*#__PURE__*/function () {
      function SearchResendCodePipe() {
        _classCallCheck(this, SearchResendCodePipe);
      }

      _createClass(SearchResendCodePipe, [{
        key: "transform",
        value: function transform(listResponsables, texto, properties) {
          if (!listResponsables) {
            return [];
          }

          if (!texto) {
            return listResponsables;
          }

          return listResponsables.filter(function (item) {
            var itemFound = false; // tslint:disable-next-line: prefer-for-of

            for (var i = 0; i < properties.length; i++) {
              if (item[properties[i]].toLowerCase().indexOf(texto.toLowerCase()) !== -1) {
                itemFound = true;
                break;
              }
            }

            return itemFound;
          });
        }
      }]);

      return SearchResendCodePipe;
    }();

    SearchResendCodePipe.ɵfac = function SearchResendCodePipe_Factory(t) {
      return new (t || SearchResendCodePipe)();
    };

    SearchResendCodePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "searchResendCode",
      type: SearchResendCodePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchResendCodePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'searchResendCode'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/AT/recommendation-at.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/AT/recommendation-at.service.ts ***!
    \**********************************************************/

  /*! exports provided: RecommendationATService */

  /***/
  function srcAppServicesATRecommendationAtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RecommendationATService", function () {
      return RecommendationATService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var RecommendationATService = /*#__PURE__*/function () {
      function RecommendationATService(http) {
        _classCallCheck(this, RecommendationATService);

        this.http = http;
        this.API_LIST_RECOMMENDATION_AT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_LIST_RECOMMENDATION_AT;
        this.API_INFO_RECOMMENDATION_AT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_INFO_RECOMMENDATION_AT;
        this.API_SAVE_RECOMMENDATION_DETAIL_AT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_SAVE_RECOMMENDATION_DETAIL_AT;
        this.API_SAVE_RECOMMENDATION_AT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_SAVE_RECOMMENDATION_AT;
      }
      /**
       * Listar las recomendaciones de AT
       */


      _createClass(RecommendationATService, [{
        key: "getListRecommendationAT",
        value: function getListRecommendationAT(idProveedor) {
          var rq = {
            docEmpresa: idProveedor
          };
          return this.http.post(this.API_LIST_RECOMMENDATION_AT, rq);
        }
        /**
         * Cargar la información al momento de seleccionar una opción de la lista de recomendaciones AT
         */

      }, {
        key: "getInfoRecommendationAT",
        value: function getInfoRecommendationAT(idRecommendationSelect) {
          var rq = {
            idSiniestro: idRecommendationSelect
          };
          return this.http.post(this.API_INFO_RECOMMENDATION_AT, rq);
        }
        /**
         * Guardar el detalle de la recomendación AT seleccionada
         */

      }, {
        key: "saveRecommendationSelected",
        value: function saveRecommendationSelected(recommendationSelected) {
          return this.http.post(this.API_SAVE_RECOMMENDATION_DETAIL_AT, recommendationSelected);
        }
      }, {
        key: "saveRecommendationAT",
        value: function saveRecommendationAT(recommendation) {
          return this.http.post(this.API_SAVE_RECOMMENDATION_AT, recommendation);
        }
      }]);

      return RecommendationATService;
    }();

    RecommendationATService.ɵfac = function RecommendationATService_Factory(t) {
      return new (t || RecommendationATService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    RecommendationATService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: RecommendationATService,
      factory: RecommendationATService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecommendationATService, [{
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

  },

  /***/
  "./src/app/services/activities/activityListCompany/activity-list-company.service.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/services/activities/activityListCompany/activity-list-company.service.ts ***!
    \******************************************************************************************/

  /*! exports provided: ActivityListCompanyService */

  /***/
  function srcAppServicesActivitiesActivityListCompanyActivityListCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityListCompanyService", function () {
      return ActivityListCompanyService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ActivityListCompanyService = /*#__PURE__*/function () {
      function ActivityListCompanyService(http, toastCtrl) {
        _classCallCheck(this, ActivityListCompanyService);

        this.http = http;
        this.toastCtrl = toastCtrl;
        this.progressBar = {
          visible: false,
          progress: 0,
          records: 0,
          refreshBtnEnable: true
        };
        this.activitiesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
        this.progressBarValues = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.progressBar);
        this.cantidadRegistrosPorPagina = 10;
        this.activities$ = this.activitiesSubject.asObservable();
        this.progressBarValues$ = this.progressBarValues.asObservable();
        this.actasGuardadas = [];
        this.API_REGISTROS_PAGINA = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GET_Cantidad_Registros_Por_Pagina;
        this.API_LISTACTIVITYCOMPANY = '';
        this.API_LIBERAR_ACTIVIDADES = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_LIBERAR_ACTIVIDADES;
        this.getRecordsForPage();
      }

      _createClass(ActivityListCompanyService, [{
        key: "presentToastActivitiesPaginator",
        value: function presentToastActivitiesPaginator(message, color) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee15$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return this.toastCtrl.create({
                    message: message,
                    duration: 5000,
                    position: 'bottom',
                    color: color,
                    mode: 'ios'
                  });

                case 2:
                  toast = _context15.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context15.stop();
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "setActivities",
        value: function setActivities(newActivities) {
          console.log('Seteo: ', newActivities);
          this.activitiesSubject.next(newActivities);
        }
      }, {
        key: "getRecordsForPage",
        value: function getRecordsForPage() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
            var _this11 = this;

            var headers;
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                  });
                  _context16.next = 3;
                  return this.http.post(this.API_REGISTROS_PAGINA, {}).subscribe(function (response) {
                    _this11.cantidadRegistrosPorPagina = response.intCantidadRegistrosPorPagina;
                    console.log('Cantidaddd...!!!', _this11.cantidadRegistrosPorPagina);
                  }, function (error) {
                    console.error('Error en la consulta:', error);
                  });

                case 3:
                case "end":
                  return _context16.stop();
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "listActivityForCompany",
        value: function listActivityForCompany(documentoUsuario) {
          this.API_LISTACTIVITYCOMPANY = '';
          this.API_LISTACTIVITYCOMPANY = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GET_Avtividades_Empresa;
          this.API_LISTACTIVITYCOMPANY = "".concat(this.API_LISTACTIVITYCOMPANY, "?pNumeroDocumento=").concat(documentoUsuario);
          console.log('Servicio de lista de actividades ->', this.API_LISTACTIVITYCOMPANY);
          return this.http.post(this.API_LISTACTIVITYCOMPANY, null);
        }
      }, {
        key: "listActivityForCompanyPerPage",
        value: function listActivityForCompanyPerPage(documentoUsuario) {
          this.API_LISTACTIVITYCOMPANY = '';
          this.API_LISTACTIVITYCOMPANY = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_GET_Avtividades_Empresa;
          var idPersona = documentoUsuario.idPersona,
              tipoDocProveedor = documentoUsuario.tipoDocProveedor,
              idProveedor = documentoUsuario.idProveedor;
          var params = "?pNumeroDocumento=".concat(idPersona, "&tipoDocProveedor=").concat(tipoDocProveedor, "&idProveedor=").concat(idProveedor, "&intCantReg=").concat(this.cantidadRegistrosPorPagina);
          this.API_LISTACTIVITYCOMPANY = "".concat(this.API_LISTACTIVITYCOMPANY).concat(params);
          console.log('Servicio de lista de actividades ->', this.API_LISTACTIVITYCOMPANY);
          var url = "".concat(this.API_LISTACTIVITYCOMPANY, "&numPag=", 1);
          return this.http.post(url, null);
        }
      }, {
        key: "listActivityForCompanyForPage",
        value: function listActivityForCompanyForPage(listActivityTotal) {
          this.presentToastActivitiesPaginator('Espera mientras se descargan las Actividades.', 'primary');
          this.progressBar.visible = true;
          this.progressBar.records = listActivityTotal;
          this.progressBarValues.next(this.progressBar);
          var totalPages = listActivityTotal % this.cantidadRegistrosPorPagina > 0 ? Math.floor(listActivityTotal / this.cantidadRegistrosPorPagina) + 1 : Math.floor(listActivityTotal / this.cantidadRegistrosPorPagina); // let totalPages: number = Math.floor(listActivityTotal / activitiesForPage) + 1; //cuadrar cuando no hay residuo

          var currentPage = 2;
          this.listActivityForCompanyBucle(this.API_LISTACTIVITYCOMPANY, currentPage, totalPages);
          console.log('Servicio de lista de actividades buble ->', listActivityTotal);
          console.log('Total Paginas numero', totalPages);
        }
      }, {
        key: "listActivityForCompanyBucle",
        value: function listActivityForCompanyBucle(url, currentPage, totalPages) {
          var _this12 = this;

          if (currentPage > totalPages) {
            console.log('Todas las páginas han sido procesadas');
            this.progressBar = {
              visible: false,
              progress: 0,
              records: 0,
              refreshBtnEnable: false
            };
            setTimeout(function () {
              _this12.progressBarValues.next(_this12.progressBar);
            }, 2000);
            this.presentToastActivitiesPaginator('Actividades cargadas con Exito.', 'primary');
            return;
          }

          this.getListActivitiesForPage(url, currentPage).subscribe(function (response) {
            // console.log(`Respuesta de la página ${currentPage}:`, response.listActivitiesCompany);
            var currentActivities = _this12.activitiesSubject.getValue();

            var newActivities = response.listActivitiesCompany;

            _this12.listActivitiesFilter(newActivities);

            var activities = currentActivities.concat(newActivities);

            _this12.activitiesSubject.next(activities);

            _this12.progressBar.visible = true;
            _this12.progressBar.progress = Number((activities.length / _this12.progressBar.records).toFixed(1));
            _this12.progressBar.refreshBtnEnable = true;

            _this12.progressBarValues.next(_this12.progressBar);

            console.log('Grupo llamadas...!!: ', url, currentPage + 1, totalPages);

            _this12.listActivityForCompanyBucle(url, currentPage + 1, totalPages);
          }, function (error) {
            console.error("Error en la p\xE1gina ".concat(currentPage, ":"), error);
            _this12.progressBar.visible = false;
            _this12.progressBar.refreshBtnEnable = false;

            _this12.progressBarValues.next(_this12.progressBar);

            _this12.presentToastActivitiesPaginator('Error al cargar las actividades, intentalo nuevamente por favor.', 'danger');
          }, function () {
            console.log("Llamada a la p\xE1gina ".concat(currentPage, " completada"));
          });
        }
      }, {
        key: "getListActivitiesForPage",
        value: function getListActivitiesForPage(url, page) {
          url = "".concat(url, "&numPag=").concat(page);
          console.log('Current PAge: ', url);
          return this.http.post(url, {}); // Llamado POST a la API
        }
      }, {
        key: "listActivitiesFilter",
        value: function listActivitiesFilter(listActivity) {
          var _this13 = this;

          console.log('Actas Guardads Filtro: ', this.actasGuardadas);
          return listActivity.forEach(function (a) {
            a.listaActividadesMigradas = a.listaActividadesMigradas.filter(function (aa) {
              return _this13.actasGuardadas.find(function (aaa) {
                return aaa.activities.find(function (aaaa) {
                  return aaaa.id === aa.id;
                });
              }) === undefined;
            });
          });
        }
      }, {
        key: "liberarActivities",
        value: function liberarActivities(objLiberarActividad) {
          var rq = objLiberarActividad;
          return this.http.post(this.API_LIBERAR_ACTIVIDADES, rq);
        }
      }, {
        key: "recordarCodigoVerificacion",
        value: function recordarCodigoVerificacion(pUidUsuariosAutorizadosxEmpresa, pUidEmpresaSum) {
          this.API_RECOVERY_VERIFICATION_CODE = '';
          this.API_RECOVERY_VERIFICATION_CODE = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].API_RECOVERY_VERIFICATION_CODE; // tslint:disable-next-line: max-line-length

          this.API_RECOVERY_VERIFICATION_CODE = "".concat(this.API_RECOVERY_VERIFICATION_CODE, "?pUidUsuariosAutorizadosxEmpresa=").concat(pUidUsuariosAutorizadosxEmpresa, "&pUidEmpresaSum=").concat(pUidEmpresaSum);
          return this.http.post(this.API_RECOVERY_VERIFICATION_CODE, null);
        }
      }]);

      return ActivityListCompanyService;
    }();

    ActivityListCompanyService.ɵfac = function ActivityListCompanyService_Factory(t) {
      return new (t || ActivityListCompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]));
    };

    ActivityListCompanyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ActivityListCompanyService,
      factory: ActivityListCompanyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ActivityListCompanyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cache/cache.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/cache/cache.service.ts ***!
    \*************************************************/

  /*! exports provided: CacheService */

  /***/
  function srcAppServicesCacheCacheServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CacheService", function () {
      return CacheService;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);

    var CacheService = /*#__PURE__*/function () {
      function CacheService(storage) {
        _classCallCheck(this, CacheService);

        this.storage = storage; // Variablel para almacenar la información de las actividades a
        // las cuales se les adjuntara los documentos

        this.infoActivityAtachSelected = {}; // Variable que almacenará los archivos por actividad

        this.filesAtachDocs = []; // Variable que guardará la actividad y los documentos adjuntos

        this.saveAttach = []; // Información de la actividad con su respectivo

        this.infoDocumentosPorActividad = []; // Guardar los documentos cuando son fotos

        this.fotosAdjuntas = []; // Guardar los documentos cuando son PDF

        this.pdfAdjuntos = []; // Variables para ejecución de actividades \\

        this.activitiesSelectedForExec = []; // Variable que guardara la información de los tipos de asesoria para el acta de asesoria

        this.typeAdvice = {}; // Variable para guarda la información de la empresa

        this.infoCompany = {}; // Variable para guardar los comentarios de la visita

        this.commentAdvice = {}; // Variable para cuando sea una visita fallida

        this.commentFailed = {}; // Variable para cuando sea una visita exitosa

        this.commentSucces = {}; // Variable para guardar la informacion cuando firma el acta de asesoria del responsable de la empresa

        this.infoSurveyQR = {}; // Variable para guardar la informacion cuando la firma el acta el responsable de la arl

        this.infoSurveyARL = {}; // Array para almacenar las actas de asesoria

        this.actasAsesoria = [];
        this.newRegisterEventManual = [];
      } // --------------------------- MÓDULO EJECUCIÓN ACTIVIDADES --------------------\\


      _createClass(CacheService, [{
        key: "saveActivities",
        value: function saveActivities(listActivitiesSelectedForExec) {
          this.activitiesSelectedForExec = [];
          this.activitiesSelectedForExec = listActivitiesSelectedForExec;
        }
      }, {
        key: "getSaveActivitiesSelected",
        value: function getSaveActivitiesSelected() {
          return this.activitiesSelectedForExec;
        }
      }, {
        key: "saveMigratedHours",
        value: function saveMigratedHours(migratedHourSelected) {
          this.migratedHours = 0;
          this.migratedHours = parseInt(migratedHourSelected, 10);
        } // save Info temas de asesoria
        // save info tipos de asesoria

      }, {
        key: "saveTypeAdvice",
        value: function saveTypeAdvice(typeAdvice) {
          // this.typeAdvice = {};
          this.typeAdvice = typeAdvice;
        }
      }, {
        key: "getSaveTypeAdvice",
        value: function getSaveTypeAdvice() {
          return this.typeAdvice;
        } // save info de la compañia

      }, {
        key: "saveInfoCompany",
        value: function saveInfoCompany(infoCompany) {
          this.infoCompany = {};
          this.infoCompany = infoCompany;
        }
      }, {
        key: "getSaveInfoCompany",
        value: function getSaveInfoCompany() {
          return this.infoCompany;
        } // Save comentarios de la visita

      }, {
        key: "saveCommentsAdvice",
        value: function saveCommentsAdvice(commnetAdvice) {
          this.commentAdvice = {};
          this.commentAdvice = commnetAdvice;
        }
      }, {
        key: "getSaveCommentsAdvice",
        value: function getSaveCommentsAdvice() {
          return this.commentAdvice;
        } // save info when survey without QR

      }, {
        key: "saveSurveyQR",
        value: function saveSurveyQR(infoSurveyQR) {
          this.infoSurveyQR = {};
          this.infoSurveyQR = infoSurveyQR;
        }
      }, {
        key: "saveSurveyARL",
        value: function saveSurveyARL(infoSurveyARL) {
          this.infoSurveyARL = {};
          this.infoSurveyARL = infoSurveyARL;
        } // Para guardar la ipv4

      }, {
        key: "saveIpAddress",
        value: function saveIpAddress(ip) {
          this.ipAddress = '';
          this.ipAddress = ip;
        }
      }, {
        key: "getIpAddress",
        value: function getIpAddress() {
          return this.ipAddress;
        }
      }, {
        key: "getAllInfoToAdvisory",
        value: function getAllInfoToAdvisory() {
          var _this14 = this;

          this.activitiesSelected = [];
          this.activitiesSelectedForExec.forEach(function (element) {
            if (element.coverage !== 0) {
              _this14.activitiesSelected.push(element);
            }
          });
          var verificationAdvisory = {
            activities: this.activitiesSelected,
            migrateHour: this.migratedHours,
            typeAdvisory: this.typeAdvice,
            infoCompany: this.infoCompany,
            commentsAdvice: this.commentAdvice,
            infoSurveyQR: this.infoSurveyQR,
            infoSurveyARL: this.infoSurveyARL,
            ip: this.ipAddress
          };
          return verificationAdvisory;
        } // Metodo que permite almacenar la información de la actividad al momento de redireccionarla a los documentos

      }, {
        key: "InfoActivityAttachDocs",
        value: function InfoActivityAttachDocs(attachDocs) {
          this.infoActivityAtachSelected = {};
          this.infoActivityAtachSelected = attachDocs;
        }
      }, {
        key: "obtenerInfoActividadAttachDocs",
        value: function obtenerInfoActividadAttachDocs() {
          return this.infoActivityAtachSelected;
        } // Guarda la linea de acción

      }, {
        key: "saveActionLine",
        value: function saveActionLine(line) {
          this.actionLine = '';
          this.actionLine = line;
        } // Guardar los documentos almacenados

      }, {
        key: "saveAttachDocs",
        value: function saveAttachDocs(attachsDocs) {
          this.saveAttach.push(attachsDocs);
        } // Metodo que permite guardar la información del a actividad con la cantidad de documentos adjuntos

      }, {
        key: "infoActividadPorDocumento",
        value: function infoActividadPorDocumento(documentosPorActividad) {
          var found = this.infoDocumentosPorActividad.find(function (d) {
            return d.idActividad === documentosPorActividad.idActividad;
          });

          if (found) {
            found.cantidadDocumentosAdjuntos = documentosPorActividad.cantidadDocumentosAdjuntos;
            return;
          }

          this.infoDocumentosPorActividad.push(documentosPorActividad);
        } // Metodo que permite guardar la información del a actividad con la cantidad de documentos adjuntos

      }, {
        key: "infoFotosAdjuntas",
        value: function infoFotosAdjuntas(fotosAdjuntas) {
          this.fotosAdjuntas.push(fotosAdjuntas);
        }
      }, {
        key: "removeFotoAdjunta",
        value: function removeFotoAdjunta(id) {
          var _this15 = this;

          this.fotosAdjuntas.forEach(function (f) {
            var index = f.findIndex(function (ff) {
              return ff.foto.idFoto === id;
            });

            if (index < 0) {
              return;
            }

            var deleted = f.splice(index, 1);

            var registry = _this15.infoDocumentosPorActividad.find(function (r) {
              return r.idActividad === deleted[0].idActividad;
            });

            if (!registry) {
              return;
            }

            registry.cantidadDocumentosAdjuntos = registry.cantidadDocumentosAdjuntos > 0 ? registry.cantidadDocumentosAdjuntos - 1 : 0;
          });
        }
      }, {
        key: "obtenerAdjuntosFoto",
        value: function obtenerAdjuntosFoto() {
          return this.fotosAdjuntas;
        } // Metodo que permite guardar la información del a actividad con la cantidad de documentos adjuntos

      }, {
        key: "infoPDFAdjuntos",
        value: function infoPDFAdjuntos(pdfAdjuntos) {
          this.pdfAdjuntos.push(pdfAdjuntos);
        }
      }, {
        key: "removePDFAdjunto",
        value: function removePDFAdjunto(id) {
          var _this16 = this;

          this.pdfAdjuntos.forEach(function (a) {
            var index = a.findIndex(function (aa) {
              return aa.documento.id === id;
            });

            if (index < 0) {
              return;
            }

            var deleted = a.splice(index, 1);

            var registry = _this16.infoDocumentosPorActividad.find(function (r) {
              return r.idActividad === deleted[0].idActividad;
            });

            if (!registry) {
              return;
            }

            registry.cantidadDocumentosAdjuntos = registry.cantidadDocumentosAdjuntos > 0 ? registry.cantidadDocumentosAdjuntos - 1 : 0;
          });
        }
      }, {
        key: "obtenerAdjuntosPDF",
        value: function obtenerAdjuntosPDF() {
          return this.pdfAdjuntos;
        }
      }, {
        key: "createActaAsesoria",
        value: function createActaAsesoria(idProveedor) {
          var _a, _b, _c, _d;

          var TTA_LISTA = []; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < this.getAllInfoToAdvisory().activities.length; i++) {
            var element = this.getAllInfoToAdvisory().activities[i];
            var recomendaciones = (_b = (_a = element.siniestro) === null || _a === void 0 ? void 0 : _a.Recomendaciones) !== null && _b !== void 0 ? _b : null;

            if (recomendaciones) {
              recomendaciones = recomendaciones.map(function (r) {
                var _a, _b, _c, _d, _e;

                return {
                  Pk_Id_SiniestroRecomendaciones: r.Pk_Id_SiniestroRecomendaciones,
                  Recomendacion: r.Recomendacion,
                  implementada: r.implementada,
                  fueronEficaces: (_a = r.fueronEficaces) !== null && _a !== void 0 ? _a : false,
                  Fecha_Implementacion: (_b = r.Fecha_Implementacion) !== null && _b !== void 0 ? _b : null,
                  informacionEvidencia: (_c = r.InformacionEnvidencia) !== null && _c !== void 0 ? _c : null,
                  causaNoImplementancion: (_d = r.causaNoImplementancion) !== null && _d !== void 0 ? _d : null,
                  fueGestionadaAPP: true,
                  tipoFuente: r.tipoFuente,
                  tipoMedio: r.tipoMedio,
                  tipoTrabajo: r.tipoTrabajo,
                  InformacionEnvidencia: (_e = r.InformacionEnvidencia) !== null && _e !== void 0 ? _e : null
                };
              });
            }

            element = {
              id: element.id,
              codigo: element.idActividad,
              Cantidad: element.horasAEjecutar,
              UnidadMedida: element.unidadMedida,
              Cobertura: element.coverage,
              EjecucionReal: parseInt(element.horasEjecutadas, 10),
              NumeroAutorizacion: '',
              NumeroActividad: '',
              Descripcion: element.descripcionActividad,
              ObservacionesSeguimiento: (_d = (_c = element.siniestro) === null || _c === void 0 ? void 0 : _c.Observaciones) !== null && _d !== void 0 ? _d : null,
              Recomendaciones: recomendaciones,
              AdjuntarDocumentosTecnicos: element.AdjuntarDocumentosTecnicos,
              CodigoeventoPositiva: element.CodigoeventoPositiva
            };
            TTA_LISTA.push(element);
          }

          if (this.typeAdvice.type === 'Especifica') {
            var fechaInicioAsesoria = this.typeAdvice.fechaInicialAsesoria;
            fechaInicioAsesoria = fechaInicioAsesoria.split('-');
            fechaInicioAsesoria = fechaInicioAsesoria[2].concat('/').concat(fechaInicioAsesoria[1]).concat('/').concat(fechaInicioAsesoria[0]);
            var horaInicial = this.typeAdvice.startHour;
            horaInicial = horaInicial.split('.')[0].split(':');
            horaInicial = horaInicial[0].concat(':').concat(horaInicial[1]);
            var horaFinal = this.typeAdvice.endHour;
            horaFinal = horaFinal.split('.')[0].split(':');
            horaFinal = horaFinal[0].concat(':').concat(horaFinal[1]);
            var infoEspecifica = {
              AE: this.typeAdvice.typeSelected,
              AE_Fecha: fechaInicioAsesoria,
              AE_HoraInicio: horaInicial,
              AE_HoraFin: horaFinal,
              AE_HorasTotales: this.typeAdvice.totalHours
            };
            var infoProyecto = {
              AP: false,
              AP_Mes: '',
              AP_Anio: ''
            };
            this.typeAdviceSelectedEspec = infoEspecifica;
            this.typeAdviceSelectedProject = infoProyecto;
          } else {
            var _infoProyecto = {
              AP: this.typeAdvice.typeSelected,
              AP_Mes: this.typeAdvice.month,
              AP_Anio: this.typeAdvice.year
            };
            var _infoEspecifica = {
              AE: false,
              AE_Fecha: '',
              AE_HoraInicio: '',
              AE_HoraFin: '',
              AE_HorasTotales: ''
            };
            this.typeAdviceSelectedEspec = _infoEspecifica;
            this.typeAdviceSelectedProject = _infoProyecto;
          }

          if (this.commentAdvice.type === 'Fallo') {
            var fecha = '';

            if (this.commentAdvice.motive === 'R') {
              var fechaReprogramacion = this.commentAdvice.newDateActivity.split('T')[0];
              var fechaReprogra = fechaReprogramacion.split('-');
              fecha = fechaReprogra[2].concat('/').concat(fechaReprogra[1]).concat('/').concat(fechaReprogra[0]);
            }

            var commentFail = {
              RV_Exitosa: this.commentAdvice.typeSelected,
              Observaciones: this.commentAdvice.description,
              RV_Motivo: this.commentAdvice.motive,
              RV_FechaServicio: fecha,
              RV_JustificacionMotivo: this.commentAdvice.justify
            };
            var commentSuccess = {
              RV_Exitosa: '',
              Observaciones: ''
            };
            this.commentSucces = commentSuccess;
            this.commentFailed = commentFail;
          } else {
            var _commentSuccess = {
              RV_Exitosa: this.commentAdvice.type,
              Observaciones: this.commentAdvice.comment
            };
            var _commentFail = {
              RV_Exitosa: '',
              RV_Motivo: '',
              RV_FechaServicio: '',
              RV_JustificacionMotivo: ''
            };
            this.commentFailed = _commentFail;
            this.commentSucces = _commentSuccess;
          }

          if (this.infoSurveyQR.firmaQR === false) {
            this.informacionActaAsesoria = {
              FirmaQR: this.infoSurveyQR.firmaQR,
              AE: this.typeAdviceSelectedEspec.AE,
              AE_Fecha: this.typeAdviceSelectedEspec.AE_Fecha,
              AE_HoraInicio: this.typeAdviceSelectedEspec.AE_HoraInicio,
              AE_HoraFin: this.typeAdviceSelectedEspec.AE_HoraFin,
              AE_HorasTotales: this.typeAdviceSelectedEspec.AE_HorasTotales,
              // AE_HorasTotales: '1',
              AP: this.typeAdviceSelectedProject.AP,
              AP_Mes: this.typeAdviceSelectedProject.AP_Mes,
              AP_Anio: this.typeAdviceSelectedProject.AP_Anio,
              IGE_RazonSocial: this.infoCompany.nombre,
              IGE_TipoDocumento: this.infoCompany.tipoDocumento,
              IGE_NumeroDocumento: this.infoCompany.numeroDocumento,
              IGE_Direccion: this.infoCompany.direccion,
              IGE_MinicipioId: this.infoCompany.municipioId.toString(),
              IGE_MinicipioNombre: this.infoCompany.municipio,
              IGE_DepartamentoId: this.infoCompany.departamentoId.toString(),
              IGE_DepartamentoNombre: this.infoCompany.departamento,
              IGE_Telefono: this.infoCompany.telefono,
              // IGE_Correo: this.infoCompany.emailContacto,
              IGE_Correo: '',
              IGE_Latitud: this.infoCompany.latitud,
              // IGE_Latitud: '6.1773265',
              IGE_Longitud: this.infoCompany.longitud,
              // IGE_Longitud: '-75.6091582',
              TTA_lista: TTA_LISTA,
              Observaciones: this.commentSucces.Observaciones,
              RV_Exitosa: this.commentAdvice.typeSelected,
              RV_Motivo: this.commentFailed.RV_Motivo,
              RV_FechaServicio: this.commentFailed.RV_FechaServicio,
              RV_JustificacionMotivo: this.commentFailed.RV_JustificacionMotivo,
              RV_Calificacion: this.infoSurveyQR.answerPool,
              // tslint:disable-next-line: radix
              RE_ResposableId: parseInt(this.infoSurveyQR.responsableId),
              RE_ResposableNombre: this.infoSurveyQR.nombreResponsable,
              RE_ResposableDocumento: this.infoSurveyQR.numeroDocumentoResponsable,
              RE_ResponsableCargo: this.infoSurveyQR.cargo,
              RE_ResponsableFirma: this.infoSurveyQR.signature,
              RA_ResposableId: this.infoSurveyARL.responsableId,
              RA_ResposableDocumento: this.infoSurveyARL.responsableDocumento,
              RA_ResposableNombre: this.infoSurveyARL.responsableNombre,
              RA_ResposableNumeroLicenciaSST: this.infoSurveyARL.responsableNumeroLicenciaSST,
              RA_ResponsableRazonSocial: this.infoSurveyARL.responsableRazonSocial,
              RA_ResponsableCargo: this.infoSurveyARL.responsableCargo,
              RA_ResponsableFirma: this.infoSurveyARL.responsableFirma,
              DocumentoUsuario: this.infoSurveyARL.responsableDocumento,
              strIp: this.ipAddress,
              strNitEmpresaActividades: idProveedor
            };
          } else {
            this.informacionActaAsesoria = {
              FirmaQR: this.infoSurveyQR.firmaQR,
              AE: this.typeAdviceSelectedEspec.AE,
              AE_Fecha: this.typeAdviceSelectedEspec.AE_Fecha,
              AE_HoraInicio: this.typeAdviceSelectedEspec.AE_HoraInicio,
              AE_HoraFin: this.typeAdviceSelectedEspec.AE_HoraFin,
              AE_HorasTotales: this.typeAdviceSelectedEspec.AE_HorasTotales,
              // AE_HorasTotales: '1',
              AP: this.typeAdviceSelectedProject.AP,
              AP_Mes: this.typeAdviceSelectedProject.AP_Mes,
              AP_Anio: this.typeAdviceSelectedProject.AP_Anio,
              IGE_RazonSocial: this.infoCompany.nombre,
              IGE_TipoDocumento: this.infoCompany.tipoDocumento,
              IGE_NumeroDocumento: this.infoCompany.numeroDocumento,
              IGE_Direccion: this.infoCompany.direccion,
              IGE_MinicipioId: this.infoCompany.municipioId.toString(),
              IGE_MinicipioNombre: this.infoCompany.municipio,
              IGE_DepartamentoId: this.infoCompany.departamentoId.toString(),
              IGE_DepartamentoNombre: this.infoCompany.departamento,
              IGE_Telefono: this.infoCompany.telefono,
              // IGE_Correo: this.infoCompany.emailContacto,
              IGE_Correo: '',
              IGE_Latitud: this.infoCompany.latitud,
              // IGE_Latitud: '6.1773265',
              IGE_Longitud: this.infoCompany.longitud,
              // IGE_Longitud: '-75.6091582',
              TTA_lista: TTA_LISTA,
              Observaciones: this.commentSucces.Observaciones,
              RV_Exitosa: this.commentAdvice.typeSelected,
              RV_Motivo: this.commentFailed.RV_Motivo,
              RV_FechaServicio: this.commentFailed.RV_FechaServicio,
              RV_JustificacionMotivo: this.commentFailed.RV_JustificacionMotivo,
              RV_Calificacion: '',
              RE_ResposableId: parseInt(this.infoSurveyQR.responsableId),
              RE_ResposableNombre: this.infoSurveyQR.nombreResponsable,
              RE_ResposableDocumento: this.infoSurveyQR.numeroDocumentoResponsable,
              RE_ResponsableCargo: this.infoSurveyQR.cargo,
              RE_ResponsableFirma: '',
              RA_ResposableId: this.infoSurveyQR.documentoResponsableARL,
              RA_ResposableDocumento: this.infoSurveyQR.documentoResponsableARL,
              RA_ResposableNombre: this.infoSurveyQR.nombreResponsableARL + ' ' + this.infoSurveyQR.apellidoResponsableARL,
              RA_ResposableNumeroLicenciaSST: this.infoSurveyQR.licenciaSSTARL,
              RA_ResponsableRazonSocial: this.infoSurveyQR.nombreProveedor,
              RA_ResponsableCargo: this.infoSurveyQR.cargoARL,
              RA_ResponsableFirma: this.infoSurveyQR.signature,
              DocumentoUsuario: this.infoSurveyQR.documentoResponsableARL,
              strIp: this.ipAddress,
              strNitEmpresaActividades: idProveedor
            };
          }

          return this.informacionActaAsesoria;
        }
      }, {
        key: "saveActasAsesoria",
        value: function saveActasAsesoria() {
          var files = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            var createdAdvisory, listaActividades, _loop, i, actasGuardadas;

            return _regeneratorRuntime().wrap(function _callee17$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  // const nuevasActividades = [];
                  createdAdvisory = this.getAllInfoToAdvisory(); // const companySelected = JSON.parse(sessionStorage.companySelected);
                  // const actividadesMigradasStorage = await this.storage.get('listaActividades');
                  // for (let i = 0; i < actividadesMigradasStorage.length; i++) {
                  //   createdAdvisory.activities.forEach(element => {
                  //     const codigoBuscar = element.id;
                  //     const encontro = actividadesMigradasStorage[i].listaActividadesMigradas.find(x => x.id === codigoBuscar);
                  //     if (encontro) {
                  //       const nuevasActividadesMigradas = actividadesMigradasStorage[i].listaActividadesMigradas.splice(encontro, 1);
                  //       companySelected.listaActividadesMigradas = nuevasActividadesMigradas;
                  //       const modificacionCompanySelected = companySelected;
                  //       actividadesMigradasStorage[i] = modificacionCompanySelected;
                  //     }
                  //   });
                  //   nuevasActividades.push(actividadesMigradasStorage[i]);
                  // }

                  _context18.next = 3;
                  return this.storage.get('listaActividades');

                case 3:
                  listaActividades = _context18.sent;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop(i) {
                    var actividadesMigradas;
                    return _regeneratorRuntime().wrap(function _loop$(_context17) {
                      while (1) switch (_context17.prev = _context17.next) {
                        case 0:
                          actividadesMigradas = listaActividades[i].listaActividadesMigradas;
                          actividadesMigradas.forEach(function (element) {
                            var idActividad = element.id;
                            var TTA_LISTA = createdAdvisory.activities;
                            var encontro = TTA_LISTA.find(function (x) {
                              return x.id === idActividad;
                            });

                            if (encontro) {
                              actividadesMigradas.splice(encontro, 1);
                              listaActividades[i].listaActividadesMigradas = actividadesMigradas;
                            }
                          });

                        case 2:
                        case "end":
                          return _context17.stop();
                      }
                    }, _loop);
                  });
                  i = 0;

                case 6:
                  if (!(i < listaActividades.length)) {
                    _context18.next = 11;
                    break;
                  }

                  return _context18.delegateYield(_loop(i), "t0", 8);

                case 8:
                  i++;
                  _context18.next = 6;
                  break;

                case 11:
                  this.storage.set('listaActividades', listaActividades); // this.storage.set('listaActividades', nuevasActividades);

                  _context18.next = 14;
                  return this.storage.get('actasAsesoriaSinInternet');

                case 14:
                  _context18.t1 = _context18.sent;

                  if (_context18.t1) {
                    _context18.next = 17;
                    break;
                  }

                  _context18.t1 = [];

                case 17:
                  actasGuardadas = _context18.t1;
                  actasGuardadas.push(Object.assign(Object.assign({}, createdAdvisory), {
                    files: files
                  }));
                  _context18.next = 21;
                  return this.storage.set('actasAsesoriaSinInternet', actasGuardadas);

                case 21:
                  return _context18.abrupt("return", true);

                case 22:
                case "end":
                  return _context18.stop();
              }
            }, _callee17, this);
          }));
        }
      }, {
        key: "limpiarVariablesAsesoria",
        value: function limpiarVariablesAsesoria() {
          this.activitiesSelectedForExec = [];
          this.migratedHours = 0;
          this.typeAdvice = {};
          this.infoCompany = {};
          this.commentAdvice = {};
          this.infoSurveyQR = {};
          this.infoSurveyARL = {};
          this.infoActivityAtachSelected = {};
          this.actionLine = '';
          this.saveAttach = [];
          this.infoDocumentosPorActividad = [];
          this.fotosAdjuntas = [];
          this.pdfAdjuntos = [];
          this.filesAtachDocs = [];
          this.infoActivityAtachSelected = {};
          this.activitiesSelected = [];
          this.typeAdviceSelectedEspec = '';
          this.typeAdviceSelectedProject = '';
          this.commentFailed = {};
          this.commentSucces = {}; // this.actasAsesoria = [];

          this.informacionActaAsesoria = {};
        } // ---------------------------- MÓDULO EVENTOS POSITIVA ------------------------ \\

        /**
         * Este metodo permite guardar en una variable la información del evento al cual se va a seleccionar
         * en el módulo de eventos positiva, guarda la siguiente información
         */

      }, {
        key: "saveRegisterEvent",
        value: function saveRegisterEvent(registerNewEvent) {
          this.newRegisterEvent = {
            FK_ID_Evento: null,
            dtmFechaRegistro: '',
            strDocumentoUsuario: '',
            strGeoposicionamiento: ''
          };
          this.newRegisterEvent = registerNewEvent;
        }
        /**
         * Se crea este método para tener los datos unificados al momento de realizar una incripción
         * del asistente de forma manual.
         */

      }, {
        key: "saveRegisterManual",
        value: function saveRegisterManual(registro) {
          this.newRegisterEventManual = [];
          this.newRegisterEventManual.push(registro);
          this.saveRegisterNew();
        }
      }, {
        key: "saveRegisterNew",
        value: function saveRegisterNew() {
          var registroEvento = {
            eventInfo: this.newRegisterEvent,
            userInfo: this.newRegisterEventManual[0]
          };
          return registroEvento;
        }
        /**
         * Obtiene la sumatoria del tiempo, en minutos, de todas las actividades registradas para el día actual.
         */

      }, {
        key: "getRegisteredTime",
        value: function getRegisteredTime() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            var getItem, registeredTime, registeredDate;
            return _regeneratorRuntime().wrap(function _callee18$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  getItem = function getItem() {
                    return {
                      date: moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day').toISOString(),
                      minutes: 0
                    };
                  };

                  _context19.next = 3;
                  return this.storage.get('registeredTime');

                case 3:
                  registeredTime = _context19.sent;

                  if (!registeredTime) {
                    // Si no hay registros de tiempos, se crea para el día actual
                    registeredTime = getItem();
                  }

                  registeredDate = moment__WEBPACK_IMPORTED_MODULE_3__(registeredTime.date);

                  if (!registeredDate.isSame(moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day'), 'day')) {
                    // Si el registro del tiempo de actividades es para un día diferente del actual, se
                    // reinicia el conteo
                    registeredTime = getItem();
                  }

                  return _context19.abrupt("return", registeredTime.minutes);

                case 8:
                case "end":
                  return _context19.stop();
              }
            }, _callee18, this);
          }));
        }
        /**
         * Añade los minutos indicados al contador de tiempo de todas las actividades para el día actual.
         *
         * @param minutes Minutos de la actividad a registrar.
         */

      }, {
        key: "setRegisteredTime",
        value: function setRegisteredTime(minutes) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
            var registeredMinutes, registeredTime;
            return _regeneratorRuntime().wrap(function _callee19$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.next = 2;
                  return this.getRegisteredTime();

                case 2:
                  registeredMinutes = _context20.sent;
                  registeredMinutes = registeredMinutes + minutes;
                  registeredTime = {
                    date: moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day').toISOString(),
                    minutes: registeredMinutes
                  };
                  _context20.next = 7;
                  return this.storage.set('registeredTime', registeredTime);

                case 7:
                case "end":
                  return _context20.stop();
              }
            }, _callee19, this);
          }));
        }
      }]);

      return CacheService;
    }();

    CacheService.ɵfac = function CacheService_Factory(t) {
      return new (t || CacheService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]));
    };

    CacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CacheService,
      factory: CacheService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/network/network.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/network/network.service.ts ***!
    \*****************************************************/

  /*! exports provided: ConnectionStatusEnum, NetworkService */

  /***/
  function srcAppServicesNetworkNetworkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConnectionStatusEnum", function () {
      return ConnectionStatusEnum;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkService", function () {
      return NetworkService;
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


    var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/network/ngx */
    "./node_modules/@ionic-native/network/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");

    var ConnectionStatusEnum;

    (function (ConnectionStatusEnum) {
      ConnectionStatusEnum[ConnectionStatusEnum["Online"] = 0] = "Online";
      ConnectionStatusEnum[ConnectionStatusEnum["Offline"] = 1] = "Offline";
    })(ConnectionStatusEnum || (ConnectionStatusEnum = {}));

    var NetworkService = /*#__PURE__*/function () {
      function NetworkService(network, http, cacheService, plt) {
        _classCallCheck(this, NetworkService);

        this.network = network;
        this.http = http;
        this.cacheService = cacheService;
        this.plt = plt;
        this.hasConnection = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.connectionStatus = ConnectionStatusEnum.Offline;
        this.showIPAddress();
      }

      _createClass(NetworkService, [{
        key: "showIPAddress",
        value: function showIPAddress() {
          var _this17 = this;

          this.http.get('https://api.ipify.org/?format=json').subscribe(function (ip) {
            _this17.connectionStatus = ConnectionStatusEnum.Online;
            _this17.ipAddress = ip;

            _this17.cacheService.saveIpAddress(_this17.ipAddress.ip);
          });
        }
      }, {
        key: "getNetworkTestRequest",
        value: function getNetworkTestRequest() {
          return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].API_GET_BRANCH_OFFICE_EVENT);
        }
      }, {
        key: "getNetworkType",
        value: function getNetworkType() {
          return this.network.type;
        }
      }, {
        key: "getNetworkStatus",
        value: function getNetworkStatus() {
          return this.connectionStatus;
        }
      }, {
        key: "testNetworkConnection",
        value: function testNetworkConnection() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
            var _this18 = this;

            return _regeneratorRuntime().wrap(function _callee20$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.prev = 0;
                  this.getNetworkTestRequest().subscribe(function (success) {
                    _this18.hasConnection.next(true);

                    return;
                  }, function (error) {
                    _this18.hasConnection.next(false);

                    return;
                  });
                  _context21.next = 9;
                  break;

                case 4:
                  _context21.prev = 4;
                  _context21.t0 = _context21["catch"](0);
                  console.log('err testNetworkConnection', _context21.t0);
                  this.hasConnection.next(false);
                  return _context21.abrupt("return");

                case 9:
                case "end":
                  return _context21.stop();
              }
            }, _callee20, this, [[0, 4]]);
          }));
        }
      }, {
        key: "initializeNetworkEvents",
        value: function initializeNetworkEvents() {
          var _this19 = this;

          if (this.plt.is('cordova')) {
            this.network.onConnect().subscribe(function () {
              return _this19.connectionStatus = ConnectionStatusEnum.Online;
            });
            this.network.onDisconnect().subscribe(function () {
              return _this19.connectionStatus = ConnectionStatusEnum.Offline;
            });
            return;
          }

          var connectionEvents = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(ConnectionStatusEnum.Online)), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(ConnectionStatusEnum.Offline)));
          connectionEvents.subscribe(function (status) {
            return _this19.connectionStatus = status;
          });
        }
      }]);

      return NetworkService;
    }();

    NetworkService.ɵfac = function NetworkService_Factory(t) {
      return new (t || NetworkService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
    };

    NetworkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: NetworkService,
      factory: NetworkService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NetworkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_3__["Network"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/talk/talk.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/talk/talk.service.ts ***!
    \***********************************************/

  /*! exports provided: TalkService */

  /***/
  function srcAppServicesTalkTalkServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TalkService", function () {
      return TalkService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var TalkService = /*#__PURE__*/function () {
      function TalkService(http) {
        _classCallCheck(this, TalkService);

        this.http = http;
        this.API_LIST_TEMAS_COMUNICACION = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_LIST_TEMAS_COMUNICACION;
        this.API_BUSCAR_COMUNICACION = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_BUSCAR_CUMUNICACIONES;
        this.API_LIST_MENSAJES_CONVERSACION = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_LIST_MENSAJES_CONVERSACION;
        this.API_CAMBIAR_ESTADO_USUARIO = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_CAMBIAR_ESTADO_USUARIO;
        this.API_GUARDAR_MENSAJE = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_GUARDAR_MENSAJE;
        this.API_EDITAR_ELIMINAR_MENSAJE = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].API_EDITAR_ELIMINAR_MENSAJE;
        this.rolesVisualizadosHistoricos = [];
      }

      _createClass(TalkService, [{
        key: "changeStateUser",
        value: function changeStateUser(pPKConversacionUsuario, pPKConversacion, pEstado, pIP, pPKUidUsuario) {
          var url = ''; // tslint:disable-next-line: max-line-length

          url = "".concat(this.API_CAMBIAR_ESTADO_USUARIO, "?pPKConversacionUsuario=").concat(pPKConversacionUsuario, "&pPKConversacion=").concat(pPKConversacion, "&pEstado=").concat(pEstado, "&pIP=").concat(pIP, "&pPKUidUsuario=").concat(pPKUidUsuario);
          return this.http.post(url, null);
        }
      }, {
        key: "getTemasComunicacion",
        value: function getTemasComunicacion() {
          return this.http.post(this.API_LIST_TEMAS_COMUNICACION, null);
        } // tslint:disable-next-line: max-line-length

      }, {
        key: "searchComunicacion",
        value: function searchComunicacion(pRazonSocialNit, tema, fechaInicial, fechaFinal, usuario, idRol) {
          var url = ''; // tslint:disable-next-line: max-line-length

          url = "".concat(this.API_BUSCAR_COMUNICACION, "?pRazonSocialNit=").concat(pRazonSocialNit, "&pPKTema=").concat(tema, "&pFechaInicio=").concat(fechaInicial, "&pFechaFin=").concat(fechaFinal, "&pUidUsuario=").concat(usuario, "&pUidRol=").concat(idRol);
          return this.http.post(url, null);
        }
      }, {
        key: "getMensajes",
        value: function getMensajes(pPKConversacion, pUidUsuario) {
          var url = '';
          url = "".concat(this.API_LIST_MENSAJES_CONVERSACION, "?pPKConversacion=").concat(pPKConversacion, "&pUidUsuario=").concat(pUidUsuario);
          return this.http.post(url, null);
        }
      }, {
        key: "saveMessageConversation",
        value: function saveMessageConversation(mensaje) {
          return this.http.post(this.API_GUARDAR_MENSAJE, mensaje);
        }
      }, {
        key: "deleteMessage",
        value: function deleteMessage(mensaje) {
          return this.http.post(this.API_EDITAR_ELIMINAR_MENSAJE, mensaje);
        }
      }, {
        key: "saveSelectedCoversation",
        value: function saveSelectedCoversation(talk) {
          this.talkSelected = talk;
        }
      }, {
        key: "getSelectedConversation",
        value: function getSelectedConversation() {
          return this.talkSelected;
        }
      }, {
        key: "saveRolesHistoricos",
        value: function saveRolesHistoricos(rolesHistoricos) {
          this.rolesVisualizadosHistoricos = rolesHistoricos;
        }
      }, {
        key: "getRolesHistoricos",
        value: function getRolesHistoricos() {
          return this.rolesVisualizadosHistoricos;
        }
      }]);

      return TalkService;
    }();

    TalkService.ɵfac = function TalkService_Factory(t) {
      return new (t || TalkService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    TalkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TalkService,
      factory: TalkService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/version/app-version.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/version/app-version.service.ts ***!
    \*********************************************************/

  /*! exports provided: AppVersionService */

  /***/
  function srcAppServicesVersionAppVersionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppVersionService", function () {
      return AppVersionService;
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


    var _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/browser */
    "./node_modules/@capacitor/browser/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _capacitor_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @capacitor/app */
    "./node_modules/@capacitor/app/dist/esm/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var AppVersionService = /*#__PURE__*/function () {
      function AppVersionService(http, alertCtrl, platform) {
        _classCallCheck(this, AppVersionService);

        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.appVersion = ''; // Versión local de la app (puedes obtenerla dinámicamente en Capacitor)

        this.appsTable = {
          1: 'Alissta Gestion Android',
          2: 'Alissta Gestion IOS',
          3: 'Alissta SUM Android',
          4: 'Alissta SUM IOS'
        };
      } // Método asíncrono para verificar la versión


      _createClass(AppVersionService, [{
        key: "checkForUpdate",
        value: function checkForUpdate() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
            var env, apiVersionUrl, appInfo, response;
            return _regeneratorRuntime().wrap(function _callee21$(_context22) {
              while (1) switch (_context22.prev = _context22.next) {
                case 0:
                  env = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].APP_VERSION_ENVIRONMENT;
                  apiVersionUrl = env === 'https://sproveedor.adacsc.co/sg-sst/' ? 'https://sempresa.adacsc.co/sg-sst/Empresa/Obtener-Version-APP?intAppSistema=4' : 'https://test-positiva-webservice-empresa-pre.adacsc.co/sg-sst/Empresa/Obtener-Version-APP?intAppSistema=4'; //TODO: Si se requieren mas ambientes, es mejor crear un enum con las url de los web Services

                  _context22.prev = 2;
                  _context22.next = 5;
                  return _capacitor_app__WEBPACK_IMPORTED_MODULE_5__["App"].getInfo();

                case 5:
                  appInfo = _context22.sent;
                  // Obtiene la versión actual
                  this.appVersion = appInfo.version;
                  _context22.next = 9;
                  return this.http.get(apiVersionUrl).toPromise();

                case 9:
                  response = _context22.sent;
                  console.log('Url de entorno: ', apiVersionUrl);

                  if (this.isVersionOutdated(this.appVersion, response)) {
                    this.showUpdateAlert(response);
                  }

                  _context22.next = 17;
                  break;

                case 14:
                  _context22.prev = 14;
                  _context22.t0 = _context22["catch"](2);
                  console.error('Error al verificar la versión', _context22.t0);

                case 17:
                case "end":
                  return _context22.stop();
              }
            }, _callee21, this, [[2, 14]]);
          }));
        } // Método para comparar versiones

      }, {
        key: "isVersionOutdated",
        value: function isVersionOutdated(local, latest) {
          var localParts = local.split('.').map(Number);
          var latestParts = latest.split('.').map(Number);

          for (var i = 0; i < 3; i++) {
            if (latestParts[i] > (localParts[i] || 0)) {
              return true; // La versión local está desactualizada
            } else if (latestParts[i] < (localParts[i] || 0)) {
              return false; // La versión local está actualizada
            }
          }

          return false; // Las versiones son iguales
        } // Mostrar alerta con dos botones

      }, {
        key: "showUpdateAlert",
        value: function showUpdateAlert(apiVersion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee22() {
            var _this20 = this;

            var isIos, alert;
            return _regeneratorRuntime().wrap(function _callee22$(_context23) {
              while (1) switch (_context23.prev = _context23.next) {
                case 0:
                  isIos = this.platform.is('ios'); // Detectar si la plataforma es iOS

                  _context23.next = 3;
                  return this.alertCtrl.create({
                    header: '',
                    message: "\n        <div style=\"text-align: center;\">\n          <img src=\"../assets/logos/logo_alissta_alert.png\" alt=\"App Icon\" style=\"width: 70px; max-width: 70px !important; display: block; margin: 0 auto;\"/>\n          <h2 style=\"margin: 0;\">Actualizaci\xF3n disponible</h2>\n          <p style=\"margin: 5px 0;\">Versi\xF3n actual: <strong>".concat(this.appVersion, "</strong></p>\n          <p style=\"margin: 5px 0;\">Versi\xF3n disponible: <strong>").concat(apiVersion, "</strong></p>\n          <p style=\"margin: 10px 0;\">\n            ").concat(isIos ? '¡Actualiza desde la App Store para seguir disfrutando de las nuevas mejoras!' : '¡Actualiza para seguir disfrutando de las nuevas mejoras!', "\n          </p>\n        </div>\n      "),
                    buttons: isIos ? [{
                      text: 'Más tarde',
                      role: 'cancel'
                    }] // En iOS no hay botones
                    : [{
                      text: 'Actualizar ahora',
                      handler: function handler() {
                        _this20.redirectToStore(); // Redirigir a la tienda

                      }
                    }, {
                      text: 'Más tarde',
                      role: 'cancel'
                    }],
                    mode: 'ios',
                    cssClass: 'custom-update-alert',
                    backdropDismiss: false
                  });

                case 3:
                  alert = _context23.sent;
                  _context23.next = 6;
                  return alert.present();

                case 6:
                case "end":
                  return _context23.stop();
              }
            }, _callee22, this);
          }));
        } // Redirigir a la tienda adecuada
        // private redirectToStore(): void {
        //   if (this.platform.is('android')) {
        //     window.open('https://play.google.com/store/apps/details?id=co.gov.alissta&pcampaignid=web_share', '_system');
        //   } else if (this.platform.is('ios')) {
        //     window.open('https://apps.apple.com/co/app/alissta/id1306274186', '_system');
        //   }
        // }
        // async redirectToStore(): Promise<void> {
        //   const androidUrl = 'https://play.google.com/store/apps/details?id=co.gov.alissta&pcampaignid=web_share';
        //   const iosUrl = 'itms-apps://itunes.apple.com/app/id1306274186';
        //   if (this.platform.is('android')) {
        //     // Abre Play Store
        //     await Browser.open({ url: androidUrl });
        //   } else if (this.platform.is('ios')) {
        //     // Abre App Store directamente
        //     await Browser.open({ url: iosUrl });
        //   } else {
        //     console.log('Plataforma no soportada para redirección a la tienda.');
        //   }
        // }
        // async redirectToStore(): Promise<void> {
        //   const androidUrl = 'market://details?id=co.gov.alissta';
        //   const iosUrl = 'itms-apps://itunes.apple.com/app/id1306274186';
        //   const fallbackAndroidUrl = 'https://play.google.com/store/apps/details?id=co.gov.alissta&pcampaignid=web_share';
        //   const fallbackIosUrl = 'https://apps.apple.com/co/app/alissta/id1306274186';
        //   try {
        //     if (this.platform.is('android')) {
        //       // Intenta abrir Play Store directamente
        //       await App.openUrl({ url: androidUrl });
        //     } else if (this.platform.is('ios')) {
        //       // Intenta abrir App Store directamente
        //       await App.openUrl({ url: iosUrl });
        //     } else {
        //       console.log('Plataforma no soportada para redirección a la tienda.');
        //     }
        //   } catch (error) {
        //     console.error('Error al abrir la tienda, intentando fallback:', error);
        //     // Fallback al navegador si falla
        //     const fallbackUrl = this.platform.is('android') ? fallbackAndroidUrl : fallbackIosUrl;
        //     window.open(fallbackUrl, '_system');
        //   }
        // }

      }, {
        key: "redirectToStore",
        value: function redirectToStore() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee23() {
            var androidUrl, iosUrl, url;
            return _regeneratorRuntime().wrap(function _callee23$(_context24) {
              while (1) switch (_context24.prev = _context24.next) {
                case 0:
                  androidUrl = 'https://play.google.com/store/apps/details?id=co.positiva.alisstasum&pcampaignid=web_share';
                  iosUrl = 'https://apps.apple.com/co/app/alissta-sum/id1534224945';
                  _context24.prev = 2;
                  url = this.platform.is('android') ? androidUrl : iosUrl; // Asegúrate de manejar plataformas no soportadas

                  if (url) {
                    _context24.next = 6;
                    break;
                  }

                  throw new Error('Plataforma no soportada para redirección a la tienda.');

                case 6:
                  _context24.next = 8;
                  return _capacitor_browser__WEBPACK_IMPORTED_MODULE_3__["Browser"].open({
                    url: url
                  });

                case 8:
                  _context24.next = 13;
                  break;

                case 10:
                  _context24.prev = 10;
                  _context24.t0 = _context24["catch"](2);
                  // Manejo de errores
                  console.error('Error al redirigir a la tienda:', _context24.t0);

                case 13:
                case "end":
                  return _context24.stop();
              }
            }, _callee23, this, [[2, 10]]);
          }));
        }
      }]);

      return AppVersionService;
    }();

    AppVersionService.ɵfac = function AppVersionService_Factory(t) {
      return new (t || AppVersionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]));
    };

    AppVersionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AppVersionService,
      factory: AppVersionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppVersionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! zone.js/dist/zone-error */
    "./node_modules/zone.js/dist/zone-error.js");
    /* harmony import */


    var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.

    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // Included with Angular CLI.
    // const ambiente = 'http://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/';
    // const ambiente = 'http://sproveedor-test.adacsc.co/sg-sst/';
    //http://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/;
    // const ambiente = 'https://sproveedor.adacsc.co/sg-sst/';                             // Produccion
    //const ambiente = 'http://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/'; // Test Original
    //const ambiente = 'http://test-dos-positiva.adacsc.co/';
    // const ambiente = 'http://splaneacion-test-dos.adacsc.co/';
    // const ambiente = 'http://saplicacion-test-dos.adacsc.co/';
    // const ambiente = 'http://sempresa-test-dos.adacsc.co/';
    // const ambiente = 'http://splananual-test-dos.adacsc.co/';
    // const ambiente = 'http://sincidenteinvestigacion-test-dos.adacsc.co/';
    // const ambiente = 'http://sparticipacion-test-dos.adacsc.co/';
    // const ambiente = 'http://smedicionevaluacion-test-dos.adacsc.co/';
    //const ambiente = 'http://sproveedor-test-dos.adacsc.co/sg-sst/';
    // const ambiente = 'http://senfermedadlaboral-test-dos.adacsc.co/';
    // const ambiente = 'http://srevision-test-dos.adacsc.co/';
    //const ambiente = 'http://sproveedor-test-tres.adacsc.co/';
    //  Test 1
    // const ambiente = 'http://sproveedor-test.adacsc.co/sg-sst/';
    //  Test 2
    // const ambiente = 'http://sproveedor-test-dos.adacsc.co/sg-sst/';
    //  Test 3
    // const ambiente = 'http://sproveedor-test-tres.adacsc.co/sg-sst/';
    //  Pre


    var ambiente = 'https://test-positiva-webservice-proveedor-pre.adacsc.co/sg-sst/'; //  Producción
    // const ambiente = 'https://sproveedor.adacsc.co/sg-sst/';

    var environment = {
      production: false,
      //  Pre
      RECUPERAR_PASSWORD: 'https://positiva.adacsc.co/SUM/AdminUsuariosSum/RecuperarClaveSUM',
      //  Producción
      // RECUPERAR_PASSWORD: 'https://alissta.gov.co/SUM/AdminUsuariosSum/RecuperarClaveSUM',
      API_AUTH: ambiente + 'UsuarioSumServicio/login_app_sum',
      API_GET_BRANCH_OFFICE_EVENT: ambiente + 'Evento/Buscar-Sucursales',
      API_GET_MUNICIPY_BRANCH_OFFICE_EVENT: ambiente + 'Evento/Buscar-Municipio',
      API_GET_EVENT_FOR_MUNICIPY: ambiente + 'Evento/Buscar-Eventos',
      API_GET_DOCUMENTS_TYPE: ambiente + 'Evento/Buscar-DatosApp',
      API_POST_CREATE_RESPONSIBLE_EVENT: ambiente + 'Evento/Registrar-Responsable-Evento',
      API_POST_REGISTER_RESPONSIBLE_EVENT_QR: ambiente + 'Evento/Inscribir-Invitado-Qr',
      API_POST_REGISTER_RESPONSIBLE_EVENT_MANUAL: ambiente + 'Evento/Inscribir-Invitado-Manual',
      API_GET_SEARCH_RESPONSIBLE_MANUAL_EVENT: ambiente + 'Evento/Buscar-Invitados',
      API_LIST_RECOMMENDATION_AT: ambiente + 'Incidente/listar-siniestros-proveedor-app',
      API_INFO_RECOMMENDATION_AT: ambiente + 'Incidente/listar-recomendaciones-siniestro-app',
      API_SAVE_RECOMMENDATION_DETAIL_AT: ambiente + 'Incidente/guardar-recomendacionesDetallado-siniestro-app',
      API_SAVE_RECOMMENDATION_AT: ambiente + 'Incidente/guardar-recomendacionesGenerales-siniestro-app',
      API_GET_Avtividades_Empresa: ambiente + 'Actividad/Actividades-Empresa',
      API_GET_Cantidad_Registros_Por_Pagina: ambiente + 'Actividad/Cantidad_RegistrosPorPaginaAPP',
      API_LIBERAR_ACTIVIDADES: ambiente + 'Actividad/Actividades-Liberar',
      API_RECOVERY_VERIFICATION_CODE: ambiente + 'Actividad/Actividades-ReenviarCodigoVerificacion',
      API_SAVE_ACTA_ASESORIA: ambiente + 'Actividad/Actividades-GuardarActaAsesoria',
      API_UPLOAD_FILE_ACTA_ASESORIA: ambiente + 'Actividad/Actividades-SubirSoporteActividad',
      API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP: ambiente + 'Actividad/Enviar-CorreoNotificacionActaApp',
      API_LIST_TEMAS_COMUNICACION: ambiente + 'Comunicaciones/Datos-Comunicaciones',
      API_BUSCAR_CUMUNICACIONES: ambiente + 'Comunicaciones/Comunicaciones-Filtro',
      API_LIST_MENSAJES_CONVERSACION: ambiente + 'Comunicaciones/Comunicaciones-Mensajes',
      API_GUARDAR_MENSAJE: ambiente + 'Comunicaciones/Comunicaciones-Guardar-Mensaje',
      API_EDITAR_ELIMINAR_MENSAJE: ambiente + 'Comunicaciones/Comunicaciones-Editar-Mensaje',
      API_CAMBIAR_ESTADO_USUARIO: ambiente + 'Comunicaciones/Comunicaciones-Cambiar-Estado-Usuario',
      API_LISTAR_EMPRESAS_MIGRADAS: ambiente + 'MigrarEmpresa/Obtener_Empresas_Migrar',
      API_GUARDAR_EMPRESA_MIGRADA: ambiente + 'MigrarEmpresa/Guardar-ActaActualizacionEmpresa',
      ONE_SIGNAL_SENDER_ID: '1023388241846',
      ONE_SIGNAL_APP_ID: 'af2757e0-1095-4476-84d2-298ee2b5bb5c',
      APP_VERSION_ENVIRONMENT: ambiente
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/ada/Documents/apps/alisstaSumAda/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map