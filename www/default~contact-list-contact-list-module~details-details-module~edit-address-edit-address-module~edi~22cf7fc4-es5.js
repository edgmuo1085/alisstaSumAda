function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"], {
  /***/
  "./src/app/services/companies/companies.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/companies/companies.service.ts ***!
    \*********************************************************/

  /*! exports provided: CompaniesService */

  /***/
  function srcAppServicesCompaniesCompaniesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompaniesService", function () {
      return CompaniesService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/storage.service */
    "./src/app/storage.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /**
     * Manejo de empresas migradas.
     */


    var CompaniesService = /*#__PURE__*/function () {
      function CompaniesService(http, storageService) {
        _classCallCheck(this, CompaniesService);

        this.http = http;
        this.storageService = storageService;
      }
      /**
       * Listado de empresas migradas.
       */


      _createClass(CompaniesService, [{
        key: "companies",
        get: function get() {
          var _this = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    if (this._companies) {
                      _context.next = 3;
                      break;
                    }

                    _context.next = 3;
                    return this.retrieveCompanies();

                  case 3:
                    return _context.abrupt("return", this._companies);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }();
        }
        /**
         * Listado de departamentos.
         */

      }, {
        key: "departamentos",
        get: function get() {
          var _this2 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.storageService.get('migrated_departamentos');

                  case 2:
                    return _context2.abrupt("return", _context2.sent);

                  case 3:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }();
        }
        /**
         * Listado de municipios.
         */

      }, {
        key: "municipios",
        get: function get() {
          var _this3 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.storageService.get('migrated_municipios');

                  case 2:
                    return _context3.abrupt("return", _context3.sent);

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }();
        }
        /**
         * Listado de tipos de vía.
         */

      }, {
        key: "vias",
        get: function get() {
          var _this4 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.storageService.get('migrated_vias');

                  case 2:
                    return _context4.abrupt("return", _context4.sent);

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }();
        }
        /**
         * Listado de tipos de cuadrante.
         */

      }, {
        key: "cuadrantes",
        get: function get() {
          var _this5 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.storageService.get('migrated_cuadrantes');

                  case 2:
                    return _context5.abrupt("return", _context5.sent);

                  case 3:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }();
        }
        /**
         * Listado de tipos de complemento.
         */

      }, {
        key: "complementos",
        get: function get() {
          var _this6 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.storageService.get('migrated_complementos');

                  case 2:
                    return _context6.abrupt("return", _context6.sent);

                  case 3:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }();
        }
        /**
         * Listado de tipos de barrio.
         */

      }, {
        key: "barrios",
        get: function get() {
          var _this7 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this7, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.storageService.get('migrated_barrios');

                  case 2:
                    return _context7.abrupt("return", _context7.sent);

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }();
        }
        /**
         * Listado de tipos de urbanización.
         */

      }, {
        key: "urbanizaciones",
        get: function get() {
          var _this8 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this8, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.storageService.get('migrated_urbanizaciones');

                  case 2:
                    return _context8.abrupt("return", _context8.sent);

                  case 3:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }();
        }
        /**
         * Listado de tipos de manzana.
         */

      }, {
        key: "manzanas",
        get: function get() {
          var _this9 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.storageService.get('migrated_manzanas');

                  case 2:
                    return _context9.abrupt("return", _context9.sent);

                  case 3:
                  case "end":
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }();
        }
        /**
         * Listado de tipos de predio.
         */

      }, {
        key: "predios",
        get: function get() {
          var _this10 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this10, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.storageService.get('migrated_predios');

                  case 2:
                    return _context10.abrupt("return", _context10.sent);

                  case 3:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }();
        }
        /**
         * Listado de empresas actualizadas.
         */

      }, {
        key: "updatedCompanies",
        get: function get() {
          var _this11 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    if (this._udpatedCompanies) {
                      _context11.next = 3;
                      break;
                    }

                    _context11.next = 3;
                    return this.retrieveUpdatedCompanies();

                  case 3:
                    return _context11.abrupt("return", this._udpatedCompanies);

                  case 4:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }();
        }
        /**
         * Empresa que está siendo actualmente manipulada.
         */

      }, {
        key: "company",
        get: function get() {
          return this._company;
        }
        /**
         * Obtiene el responsable de la ARL (usuario actual).
         */

      }, {
        key: "responsableARL",
        get: function get() {
          var _this12 = this;

          return function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.storageService.get('sesion');

                  case 2:
                    return _context12.abrupt("return", _context12.sent);

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }, _callee12, this);
            }));
          }();
        }
        /**
         * Obtiene el listado de empresas migradas desde el servidor.
         *
         * Actualiza la lista del almacén de datos y regresa este valor.
         *
         * @param idUsuario Identificación del usuario por el cual filtrar las empresas.
         */

      }, {
        key: "fetchCompanies",
        value: function fetchCompanies(idUsuario) {
          var _this13 = this;

          var url = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_LISTAR_EMPRESAS_MIGRADAS, "?id_Usuario=").concat(idUsuario);
          return this.http.post(url, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (r) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["defer"])(function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_this13.setCompanies(r));
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (r) {
            if (r) {
              return _this13._companies;
            }

            throw new Error('Full memory.');
          }));
        }
        /**
         * Establece la empresa que se va a modificar. Se realiza una búsqueda de la empresa
         * por el identificador proporcionado. Primero se realiza una búsqueda dentro
         * del arreglo de empresas modificadas y, si no está presente, se busca en el arreglo
         * de empresas migradas.
         *
         * _IMPORTANTE: Solo puede haber una empresa siendo modificada a la vez._
         *
         * @param id Identificador de la empresa.
         */

      }, {
        key: "prepareCompany",
        value: function prepareCompany(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var result, company;
            return _regeneratorRuntime().wrap(function _callee13$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  if (!this.company) {
                    _context13.next = 2;
                    break;
                  }

                  throw new Error('Company already in place.');

                case 2:
                  _context13.next = 4;
                  return this.updatedCompanies;

                case 4:
                  result = _context13.sent;
                  company = result.find(function (r) {
                    return r.Pk_Id_AS_004_Empresas_AMigrar === id;
                  });

                  if (company) {
                    _context13.next = 11;
                    break;
                  }

                  _context13.next = 9;
                  return this.companies;

                case 9:
                  result = _context13.sent;
                  company = result.find(function (r) {
                    return r.Pk_Id_AS_004_Empresas_AMigrar === id;
                  });

                case 11:
                  this._company = JSON.parse(JSON.stringify(company));
                  return _context13.abrupt("return", this.company);

                case 13:
                case "end":
                  return _context13.stop();
              }
            }, _callee13, this);
          }));
        }
        /**
         * Guarda en el almacén de datos los cambios hechos a la empresa actualmente en edición.
         *
         * Regresa verdadero si el proceso se realizó satisfactoriamente, y falso en caso de que
         * no haya memoria en el dispositivo.
         */

      }, {
        key: "saveChanges",
        value: function saveChanges() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            var _this14 = this;

            var updatedCompanies, index, result;
            return _regeneratorRuntime().wrap(function _callee14$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  if (this.company) {
                    _context14.next = 2;
                    break;
                  }

                  throw new Error('No company set.');

                case 2:
                  _context14.next = 4;
                  return this.updatedCompanies;

                case 4:
                  updatedCompanies = _context14.sent;
                  index = updatedCompanies.findIndex(function (c) {
                    return c.Pk_Id_AS_004_Empresas_AMigrar === _this14.company.Pk_Id_AS_004_Empresas_AMigrar;
                  });

                  if (index < 0) {
                    updatedCompanies.push(this.company);
                  } else {
                    updatedCompanies[index] = this.company;
                  }

                  result = this.setUpdatedCompanies(updatedCompanies);

                  if (result) {
                    this.discardChanges();
                  }

                  return _context14.abrupt("return", result);

                case 10:
                case "end":
                  return _context14.stop();
              }
            }, _callee14, this);
          }));
        }
        /**
         * Descarta los cambios que hayan actualmente en memoria.
         *
         * Este método no elimina los cambios que hayan sido previamente guardados en el almacén de
         * datos.
         */

      }, {
        key: "discardChanges",
        value: function discardChanges() {
          this._company = undefined;
        }
        /**
         * Envía los cambios de la empresa actualmente en edición al servidor para ser procesados.
         */

      }, {
        key: "save",
        value: function save() {
          var _this15 = this;

          if (!this.company) {
            throw new Error('No company set.');
          }

          var url = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].API_GUARDAR_EMPRESA_MIGRADA;
          console.log("LogDev save: ", JSON.stringify(url));
          console.log("LogDev save: ", JSON.stringify(this.company).substr(0, 4000));
          console.log("LogDev save: ", JSON.stringify(this.company).substr(3999, 4000));
          console.log("LogDev save: ", JSON.stringify(this.company).substr(7998, 4000));
          console.log("LogDev save: ", JSON.stringify(this.company).substr(11997, 4000));
          console.log("LogDev save: ", JSON.stringify(this.company).substr(15996, 4000));
          console.log("LogDev save: ", JSON.stringify(this.company).substr(19995, 4000));
          console.log("LogDev save: ", JSON.stringify(this.company).substr(23994));
          return this.http.post(url, this.company).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (r) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var _this16 = this;

              var result, indexC, indexM;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    result = r.split(';')[0];

                    if (!(result !== 'true')) {
                      _context15.next = 3;
                      break;
                    }

                    return _context15.abrupt("return");

                  case 3:
                    _context15.next = 5;
                    return this.companies;

                  case 5:
                    indexC = _context15.sent.findIndex(function (c) {
                      return c.Pk_Id_AS_004_Empresas_AMigrar === _this16.company.Pk_Id_AS_004_Empresas_AMigrar;
                    });

                    this._companies.splice(indexC, 1);

                    _context15.next = 9;
                    return this.setCompanies(this._companies);

                  case 9:
                    _context15.next = 11;
                    return this.updatedCompanies;

                  case 11:
                    indexM = _context15.sent.find(function (m) {
                      return m.Pk_Id_AS_004_Empresas_AMigrar === _this16.company.Pk_Id_AS_004_Empresas_AMigrar;
                    });

                    this._udpatedCompanies.splice(indexM, 1);

                    _context15.next = 15;
                    return this.setUpdatedCompanies(this._udpatedCompanies);

                  case 15:
                    this.discardChanges();

                  case 16:
                  case "end":
                    return _context15.stop();
                }
              }, _callee15, this);
            }));
          }));
        }
        /**
         * Obtiene el listado de empresas migradas desde el almacén de datos.
         */

      }, {
        key: "retrieveCompanies",
        value: function retrieveCompanies() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
            var result;
            return _regeneratorRuntime().wrap(function _callee16$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.storageService.get('migrated_companies');

                case 2:
                  result = _context16.sent;
                  this._companies = result ? result : [];

                case 4:
                case "end":
                  return _context16.stop();
              }
            }, _callee16, this);
          }));
        }
        /**
         * Establece el listado de empresas migradas indicado en el almacén de datos.
         *
         * @param companies Listado de empresas migradas.
         */

      }, {
        key: "setCompanies",
        value: function setCompanies(companies) {
          var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;

          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
            var departamentos, municipios, vias, cuadrantes, complementos, barrios, urbanizaciones, manzanas, predios, result;
            return _regeneratorRuntime().wrap(function _callee17$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  departamentos = (_b = (_a = companies[0]) === null || _a === void 0 ? void 0 : _a.listDertamentos) !== null && _b !== void 0 ? _b : [];
                  municipios = (_d = (_c = companies[0]) === null || _c === void 0 ? void 0 : _c.listMunicipios) !== null && _d !== void 0 ? _d : [];
                  vias = (_g = (_f = (_e = companies[0]) === null || _e === void 0 ? void 0 : _e.eDListaMaestrosDirecciones) === null || _f === void 0 ? void 0 : _f.listaMaestrosAvenida) !== null && _g !== void 0 ? _g : [];
                  cuadrantes = (_k = (_j = (_h = companies[0]) === null || _h === void 0 ? void 0 : _h.eDListaMaestrosDirecciones) === null || _j === void 0 ? void 0 : _j.listaMaestrosCuadrante) !== null && _k !== void 0 ? _k : [];
                  complementos = (_o = (_m = (_l = companies[0]) === null || _l === void 0 ? void 0 : _l.eDListaMaestrosDirecciones) === null || _m === void 0 ? void 0 : _m.listaMaestrosSufijos) !== null && _o !== void 0 ? _o : [];
                  barrios = (_r = (_q = (_p = companies[0]) === null || _p === void 0 ? void 0 : _p.eDListaMaestrosDirecciones) === null || _q === void 0 ? void 0 : _q.listaMaestrosBarrios) !== null && _r !== void 0 ? _r : [];
                  urbanizaciones = (_u = (_t = (_s = companies[0]) === null || _s === void 0 ? void 0 : _s.eDListaMaestrosDirecciones) === null || _t === void 0 ? void 0 : _t.listaMaestrosUrbanizacion) !== null && _u !== void 0 ? _u : [];
                  manzanas = (_x = (_w = (_v = companies[0]) === null || _v === void 0 ? void 0 : _v.eDListaMaestrosDirecciones) === null || _w === void 0 ? void 0 : _w.listaMaestrosManzana) !== null && _x !== void 0 ? _x : [];
                  predios = (_0 = (_z = (_y = companies[0]) === null || _y === void 0 ? void 0 : _y.eDListaMaestrosDirecciones) === null || _z === void 0 ? void 0 : _z.listaMaestrosTipoDePredio) !== null && _0 !== void 0 ? _0 : [];
                  (_1 = companies[0]) === null || _1 === void 0 ? true : delete _1.listDertamentos;
                  (_2 = companies[0]) === null || _2 === void 0 ? true : delete _2.listMunicipios;
                  (_3 = companies[0]) === null || _3 === void 0 ? true : delete _3.eDListaMaestrosDirecciones;
                  _context17.next = 14;
                  return this.storageService.set('migrated_companies', companies);

                case 14:
                  result = _context17.sent;

                  if (!departamentos.length) {
                    _context17.next = 18;
                    break;
                  }

                  _context17.next = 18;
                  return this.storageService.set('migrated_departamentos', departamentos);

                case 18:
                  if (!municipios.length) {
                    _context17.next = 21;
                    break;
                  }

                  _context17.next = 21;
                  return this.storageService.set('migrated_municipios', municipios);

                case 21:
                  if (!vias.length) {
                    _context17.next = 24;
                    break;
                  }

                  _context17.next = 24;
                  return this.storageService.set('migrated_vias', vias);

                case 24:
                  if (!cuadrantes.length) {
                    _context17.next = 27;
                    break;
                  }

                  _context17.next = 27;
                  return this.storageService.set('migrated_cuadrantes', cuadrantes);

                case 27:
                  if (!complementos.length) {
                    _context17.next = 30;
                    break;
                  }

                  _context17.next = 30;
                  return this.storageService.set('migrated_complementos', complementos);

                case 30:
                  if (!barrios.length) {
                    _context17.next = 33;
                    break;
                  }

                  _context17.next = 33;
                  return this.storageService.set('migrated_barrios', barrios);

                case 33:
                  if (!urbanizaciones.length) {
                    _context17.next = 36;
                    break;
                  }

                  _context17.next = 36;
                  return this.storageService.set('migrated_urbanizaciones', urbanizaciones);

                case 36:
                  if (!manzanas.length) {
                    _context17.next = 39;
                    break;
                  }

                  _context17.next = 39;
                  return this.storageService.set('migrated_manzanas', manzanas);

                case 39:
                  if (!predios.length) {
                    _context17.next = 42;
                    break;
                  }

                  _context17.next = 42;
                  return this.storageService.set('migrated_predios', predios);

                case 42:
                  if (result) {
                    this._companies = companies;
                  }

                  return _context17.abrupt("return", result);

                case 44:
                case "end":
                  return _context17.stop();
              }
            }, _callee17, this);
          }));
        }
        /**
         * Obtiene el listado de empresas actualizadas desde el almacén de datos.
         */

      }, {
        key: "retrieveUpdatedCompanies",
        value: function retrieveUpdatedCompanies() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
            var result;
            return _regeneratorRuntime().wrap(function _callee18$(_context18) {
              while (1) switch (_context18.prev = _context18.next) {
                case 0:
                  _context18.next = 2;
                  return this.storageService.get('updated_companies');

                case 2:
                  result = _context18.sent;
                  this._udpatedCompanies = result ? result : [];

                case 4:
                case "end":
                  return _context18.stop();
              }
            }, _callee18, this);
          }));
        }
        /**
         * Establece el listado de empresas actualizadas indicado en el almacén de datos.
         *
         * @param companies Listado de empresas actualizadas.
         */

      }, {
        key: "setUpdatedCompanies",
        value: function setUpdatedCompanies(companies) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
            var result;
            return _regeneratorRuntime().wrap(function _callee19$(_context19) {
              while (1) switch (_context19.prev = _context19.next) {
                case 0:
                  _context19.next = 2;
                  return this.storageService.set('updated_companies', companies);

                case 2:
                  result = _context19.sent;

                  if (result) {
                    this._udpatedCompanies = companies;
                  }

                  return _context19.abrupt("return", result);

                case 5:
                case "end":
                  return _context19.stop();
              }
            }, _callee19, this);
          }));
        }
      }]);

      return CompaniesService;
    }();

    CompaniesService.ɵfac = function CompaniesService_Factory(t) {
      return new (t || CompaniesService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]));
    };

    CompaniesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: CompaniesService,
      factory: CompaniesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CompaniesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: src_app_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/storage.service.ts":
  /*!************************************!*\
    !*** ./src/app/storage.service.ts ***!
    \************************************/

  /*! exports provided: StorageService */

  /***/
  function srcAppStorageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StorageService", function () {
      return StorageService;
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

    var StorageService = /*#__PURE__*/function () {
      function StorageService(storage) {
        _classCallCheck(this, StorageService);

        this.storage = storage;
      }

      _createClass(StorageService, [{
        key: "set",
        value: function set(key, value) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
            var result;
            return _regeneratorRuntime().wrap(function _callee20$(_context20) {
              while (1) switch (_context20.prev = _context20.next) {
                case 0:
                  _context20.prev = 0;
                  _context20.next = 3;
                  return this.storage.set(key, value);

                case 3:
                  result = _context20.sent;
                  _context20.next = 9;
                  break;

                case 6:
                  _context20.prev = 6;
                  _context20.t0 = _context20["catch"](0);
                  result = false;

                case 9:
                  return _context20.abrupt("return", result !== false);

                case 10:
                case "end":
                  return _context20.stop();
              }
            }, _callee20, this, [[0, 6]]);
          }));
        }
      }, {
        key: "get",
        value: function get(key) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
            var result;
            return _regeneratorRuntime().wrap(function _callee21$(_context21) {
              while (1) switch (_context21.prev = _context21.next) {
                case 0:
                  _context21.prev = 0;
                  _context21.next = 3;
                  return this.storage.get(key);

                case 3:
                  result = _context21.sent;
                  _context21.next = 8;
                  break;

                case 6:
                  _context21.prev = 6;
                  _context21.t0 = _context21["catch"](0);

                case 8:
                  return _context21.abrupt("return", result);

                case 9:
                case "end":
                  return _context21.stop();
              }
            }, _callee21, this, [[0, 6]]);
          }));
        }
      }, {
        key: "remove",
        value: function remove(key) {
          this.storage.remove(key);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.storage.clear();
        }
      }]);

      return StorageService;
    }();

    StorageService.ɵfac = function StorageService_Factory(t) {
      return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]));
    };

    StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: StorageService,
      factory: StorageService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
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

  }
}]);
//# sourceMappingURL=default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4-es5.js.map