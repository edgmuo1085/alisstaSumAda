function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(typeof e + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey-and-signature-survey-and-signature-module"], {
  /***/
  "./src/app/pages/survey-and-signature/signature-qr/signature-qr.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/survey-and-signature/signature-qr/signature-qr.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: SignatureQRComponent */

  /***/
  function srcAppPagesSurveyAndSignatureSignatureQrSignatureQrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignatureQRComponent", function () {
      return SignatureQRComponent;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../components/advisory-verification/advisory-verification.component */
    "./src/app/components/advisory-verification/advisory-verification.component.ts");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _services_network_network_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/network/network.service */
    "./src/app/services/network/network.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignatureQRComponent_p_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Responsable ARL: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.infoUserARL.nombres, " ", ctx_r0.infoUserARL.apellidos, "");
      }
    }

    function SignatureQRComponent_p_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nombre proveedor: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.infoUserARL.nombreProveedor, "");
      }
    }

    function SignatureQRComponent_p_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Documento proveedor: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.infoUserARL.idProveedor, "");
      }
    }

    function SignatureQRComponent_p_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.infoUserARL.nombres, " ", ctx_r3.infoUserARL.apellidos, "");
      }
    }

    function SignatureQRComponent_img_35_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureQRComponent_img_35_Template_img_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.sendInfoSignatureQR();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var SignatureQRComponent = /*#__PURE__*/function () {
      function SignatureQRComponent(storage, cacheService, router, net, toastController, modalCtrl, alertController) {
        _classCallCheck(this, SignatureQRComponent);

        this.storage = storage;
        this.cacheService = cacheService;
        this.router = router;
        this.net = net;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController; // tslint:disable-next-line: ban-types

        this.signaturePadOptions = {
          maxWidth: 1,
          minWidth: 1,
          canvasWidth: 300,
          canvasHeight: 300
        };
        this.disableBtnSendTask = false;
        this.actasAsesoria = [];
        this.infoEnteredSignatureQR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SignatureQRComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInfoUser();
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
        key: "drawComplete",
        value: function drawComplete() {
          // will be notified of szimek/signature_pad's onEnd event
          var firma = this.signaturePad.toDataURL().split(',');
          this.signatureEntered = firma[0].concat(',').concat(' ').concat(firma[1]);

          if (this.signatureEntered) {
            this.disableBtnSendTask = true;
          } else {
            this.disableBtnSendTask = false;
          }
        }
      }, {
        key: "drawStart",
        value: function drawStart() {
          // will be notified of szimek/signature_pad's onBegin event
          console.log('begin drawing');
        }
      }, {
        key: "clear",
        value: function clear() {
          this.signaturePad.clear();
          this.disableBtnSendTask = false;
        }
      }, {
        key: "sendInfoSignatureQR",
        value: function sendInfoSignatureQR() {
          var infoSignatureQR = {
            nombreResponsableARL: this.infoUserARL.nombres,
            apellidosResponsableARL: this.infoUserARL.apellidos,
            cargo: this.infoUserARL.cargo,
            licenciaSST: this.infoUserARL.idLicenciaSst,
            numeroDocumentoEmpresa: this.infoUserARL.idProveedor,
            nombreProveedor: this.infoUserARL.nombreProveedor,
            documentoUsuarioARL: this.infoUserARL.idPersona,
            signatureEntered: this.signatureEntered
          };
          this.infoEnteredSignatureQR.emit(infoSignatureQR);
        }
      }, {
        key: "verification",
        value: function verification() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var infoActa, modal;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  // this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature/advisoryVerification');
                  infoActa = this.cacheService.getAllInfoToAdvisory();
                  _context2.next = 3;
                  return this.modalCtrl.create({
                    component: _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_6__["AdvisoryVerificationComponent"],
                    componentProps: {
                      info: infoActa
                    }
                  });

                case 3:
                  modal = _context2.sent;
                  modal.present();

                case 5:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this);
          }));
        }
      }]);

      return SignatureQRComponent;
    }();

    SignatureQRComponent.ɵfac = function SignatureQRComponent_Factory(t) {
      return new (t || SignatureQRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]));
    };

    SignatureQRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignatureQRComponent,
      selectors: [["app-signature-qr"]],
      viewQuery: function SignatureQRComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePad"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
        }
      },
      outputs: {
        infoEnteredSignatureQR: "infoEnteredSignatureQR"
      },
      decls: 37,
      vars: 6,
      consts: [["size", "1"], ["size", "10"], ["color", "tertiary", "expand", "block", 3, "click"], [4, "ngIf"], [1, "ion-text-center"], [1, "firmaContent", 2, "border", "1px solid black", "border-radius", "10px"], [3, "options", "onBeginEvent", "onEndEvent"], ["class", "firma", 4, "ngIf"], ["expand", "block", "fill", "clear", "shape", "round", 3, "click"], [1, "ion-text-justify"], [1, "ion-text-center", 2, "margin-bottom", "30px"], ["size", "3"], ["size", "6"], ["src", "../../../assets/icon/boton_enviar.png", "alt", "enviar", 3, "click", 4, "ngIf"], [1, "firma"], ["src", "../../../assets/icon/boton_enviar.png", "alt", "enviar", 3, "click"]],
      template: function SignatureQRComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ion-col", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-col", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureQRComponent_Template_ion_button_click_6_listener() {
            return ctx.verification();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Ver Acta ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ion-col", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Responsable de ARL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, SignatureQRComponent_p_12_Template, 4, 2, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Raz\xF3n social del proveedor");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SignatureQRComponent_p_16_Template, 4, 1, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SignatureQRComponent_p_17_Template, 4, 1, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Firma responsable de ARL");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "signature-pad", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function SignatureQRComponent_Template_signature_pad_onBeginEvent_22_listener() {
            return ctx.drawStart();
          })("onEndEvent", function SignatureQRComponent_Template_signature_pad_onEndEvent_22_listener() {
            return ctx.drawComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SignatureQRComponent_p_24_Template, 2, 2, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureQRComponent_Template_ion_button_click_25_listener() {
            return ctx.clear();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Borrar ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Al enviar, est\xE1 autorizando el uso de la su firma \xDANICAMENTE para el registro de la ejecuci\xF3n de las actividades relacionadas en el acta de asesor\xEDa en promoci\xF3n y prevenci\xF3n de POSITIVA COMPA\xD1\xCDA DE SEGUROS S.A. La Pol\xEDtica de tratamiento de la informaci\xF3n la puede consultar en https://www.positiva.gov.co Una vez sea enviado el formulario, recibir\xE1 correo electr\xF3nico con los soportes de ejecuci\xF3n. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-col", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, SignatureQRComponent_img_35_Template, 1, 0, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-col", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.disableBtnSendTask);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePad"]],
      styles: ["ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\n\nsignature-pad[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n\n.firma[_ngcontent-%COMP%] {\n  border-top: 1px solid #95a6b1;\n  margin-right: 30px;\n  margin-left: 30px;\n  font-weight: bold;\n  color: gray;\n  font: unset;\n  font-size: 15px;\n  padding-top: 5px;\n}\n\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.firmaContent[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n\n.firmaContent[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VydmV5LWFuZC1zaWduYXR1cmUvc2lnbmF0dXJlLXFyL0M6XFxVc2Vyc1xcY2FsdmFyYWRvXFxEb2N1bWVudHNcXHByb3llY3RvXFxBY3R1YWxcXGFsaXNzdGFfc3VtXFxUcnVua1xcMjAyNDA2MDcxL3NyY1xcYXBwXFxwYWdlc1xcc3VydmV5LWFuZC1zaWduYXR1cmVcXHNpZ25hdHVyZS1xclxcc2lnbmF0dXJlLXFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXJ2ZXktYW5kLXNpZ25hdHVyZS9zaWduYXR1cmUtcXIvc2lnbmF0dXJlLXFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXJ2ZXktYW5kLXNpZ25hdHVyZS9zaWduYXR1cmUtcXIvc2lnbmF0dXJlLXFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuc2lnbmF0dXJlLXBhZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYhaW1wb3J0YW50O1xufVxuXG4uZmlybWEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzk1YTZiMTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmF5O1xuICBmb250OiB1bnNldDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpcm1hQ29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYhaW1wb3J0YW50O1xufVxuXG4uZmlybWFDb250ZW50IGRpdntcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiFpbXBvcnRhbnQ7XG59IFxuIiwiaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuc2lnbmF0dXJlLXBhZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmZpcm1hIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5NWE2YjE7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXJtYUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5maXJtYUNvbnRlbnQgZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignatureQRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signature-qr',
          templateUrl: './signature-qr.component.html',
          styleUrls: ['./signature-qr.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_7__["CacheService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_8__["NetworkService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }];
      }, {
        signaturePad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_5__["SignaturePad"]]
        }],
        infoEnteredSignatureQR: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/survey-and-signature/signature-without-qr/signature-without-qr.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/app/pages/survey-and-signature/signature-without-qr/signature-without-qr.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: SignatureWithoutQRComponent */

  /***/
  function srcAppPagesSurveyAndSignatureSignatureWithoutQrSignatureWithoutQrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignatureWithoutQRComponent", function () {
      return SignatureWithoutQRComponent;
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


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SignatureWithoutQRComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Encuesta");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "De acuerdo a su percepci\xF3n del servicio recibido por POSITIVA COMPA\xD1IA DE SEGUROS S.A, agradecemos su calificaci\xF3n.");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-radio-group");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureWithoutQRComponent_div_0_Template_ion_item_click_11_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r5.radioSelected("Excelente");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Excelente");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureWithoutQRComponent_div_0_Template_ion_item_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r7.radioSelected("Bueno");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ion-label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Bueno");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureWithoutQRComponent_div_0_Template_ion_item_click_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r8.radioSelected("Regular");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Regular");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "ion-item", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureWithoutQRComponent_div_0_Template_ion_item_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r9.radioSelected("Deficiente");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Deficiente");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-avatar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.pollSelectedExce ? "imgSeleccionadaExcBue" : "imgSinSeleccionar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.pollSelectedBue ? "imgSeleccionadaExcBue" : "imgSinSeleccionar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.pollSelectedReg ? "imgSeleccionadaRegDef" : "imgSinSeleccionar");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx_r0.pollSelectedDef ? "imgSeleccionadaRegDef" : "imgSinSeleccionar");
      }
    }

    function SignatureWithoutQRComponent_div_1_p_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r10.namePersonSignature.Nombre, " ");
      }
    }

    function SignatureWithoutQRComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "signature-pad", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function SignatureWithoutQRComponent_div_1_Template_signature_pad_onBeginEvent_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r11.drawStart();
        })("onEndEvent", function SignatureWithoutQRComponent_div_1_Template_signature_pad_onEndEvent_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r13.drawComplete();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignatureWithoutQRComponent_div_1_p_3_Template, 2, 1, "p", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r1.signaturePadOptions);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.namePersonSignature);
      }
    }

    function SignatureWithoutQRComponent_ion_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureWithoutQRComponent_ion_button_2_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r14.clear();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Borrar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SignatureWithoutQRComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Mi calificaci\xF3n del servicio fue: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Al guardar, est\xE1 autorizando el uso de su firma \xDANICAMENTE para el registro de la ejecuci\xF3n de las actividades relacionadas en el acta de asesor\xEDa en promoci\xF3n y prevenci\xF3n de POSITIVA COMPA\xD1\xCDA DE SEGUROS S.A. La pol\xEDtica de tratamiento de la Pol\xEDtica de tratamiento de la informaci\xF3n la puede consultar en https://www.positiva.gov.co Una vez las actividades sean validadas por POSITIVA COMPA\xD1\xCDA DE SEGUROS S.A. se enviar\xE1n los soportes en PDF a trav\xE9s del correo electr\xF3nico registrado en las actividades. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.answerPoll);
      }
    }

    function SignatureWithoutQRComponent_ion_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignatureWithoutQRComponent_ion_button_9_Template_ion_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r16.saveSignatureWithoutQR();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Guardar ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var SignatureWithoutQRComponent = /*#__PURE__*/function () {
      function SignatureWithoutQRComponent(alertController, storage) {
        _classCallCheck(this, SignatureWithoutQRComponent);

        this.alertController = alertController;
        this.storage = storage;
        this.pollSelectedExce = false;
        this.pollSelectedBue = false;
        this.pollSelectedReg = false;
        this.pollSelectedDef = false; // tslint:disable-next-line: ban-types

        this.signaturePadOptions = {
          maxWidth: 1,
          minWidth: 1,
          canvasWidth: 300,
          canvasHeight: 300
        };
        this.showSignature = false;
        this.infoSignatureWithoutQR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.enableBtnGuardar = false;
      }

      _createClass(SignatureWithoutQRComponent, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getInfoUser();
        }
      }, {
        key: "getInfoUser",
        value: function getInfoUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return this.storage.get('sesion');

                case 2:
                  this.infoUserARL = _context3.sent;

                case 3:
                case "end":
                  return _context3.stop();
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "radioSelected",
        value: function radioSelected(selectedPoll) {
          switch (selectedPoll) {
            case 'Excelente':
              this.pollSelectedExce = true;
              this.pollSelectedReg = false;
              this.pollSelectedBue = false;
              this.pollSelectedDef = false;
              this.showSignature = true;
              this.answerPoll = 'Excelente';
              break;

            case 'Bueno':
              this.pollSelectedBue = true;
              this.pollSelectedExce = false;
              this.pollSelectedReg = false;
              this.pollSelectedDef = false;
              this.showSignature = true;
              this.answerPoll = 'Bueno';
              break;

            case 'Regular':
              this.pollSelectedReg = true;
              this.pollSelectedExce = false;
              this.pollSelectedBue = false;
              this.pollSelectedDef = false;
              this.showSignature = true;
              this.answerPoll = 'Regular';
              break;

            case 'Deficiente':
              this.pollSelectedDef = true;
              this.pollSelectedExce = false;
              this.pollSelectedBue = false;
              this.pollSelectedReg = false;
              this.showSignature = true;
              this.answerPoll = 'Deficiente';
              break;

            default:
              break;
          }
        }
      }, {
        key: "drawComplete",
        value: function drawComplete() {
          var firma = this.signaturePad.toDataURL().split(',');
          this.signatureEntered = firma[0].concat(',').concat(' ').concat(firma[1]);

          if (this.signatureEntered) {
            this.enableBtnGuardar = true;
          } else {
            this.enableBtnGuardar = false;
          }
        }
      }, {
        key: "drawStart",
        value: function drawStart() {
          // will be notified of szimek/signature_pad's onBegin event
          console.log('begin drawing');
        }
      }, {
        key: "clear",
        value: function clear() {
          this.signaturePad.clear();
          this.enableBtnGuardar = false;
        }
      }, {
        key: "saveSignatureWithoutQR",
        value: function saveSignatureWithoutQR() {
          var infoWithoutQR = {
            answerPoll: this.answerPoll,
            signatureEntered: this.signatureEntered
          };
          this.infoSignatureWithoutQR.emit(infoWithoutQR);
        }
      }]);

      return SignatureWithoutQRComponent;
    }();

    SignatureWithoutQRComponent.ɵfac = function SignatureWithoutQRComponent_Factory(t) {
      return new (t || SignatureWithoutQRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]));
    };

    SignatureWithoutQRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SignatureWithoutQRComponent,
      selectors: [["app-signature-without-qr"]],
      viewQuery: function SignatureWithoutQRComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePad"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
        }
      },
      inputs: {
        namePersonSignature: "namePersonSignature",
        verificationCodeInput: "verificationCodeInput"
      },
      outputs: {
        infoSignatureWithoutQR: "infoSignatureWithoutQR"
      },
      decls: 11,
      vars: 5,
      consts: [[4, "ngIf"], ["style", "border: 1px solid black; border-radius: 10px;background: #ffffff;", "class", "firmaContent", 4, "ngIf"], ["expand", "block", "fill", "clear", "shape", "round", 3, "click", 4, "ngIf"], ["class", "ion-text-justify", 4, "ngIf"], [1, "ion-text-center", 2, "margin-bottom", "30px"], ["size", "3"], ["size", "6"], ["expand", "block", "color", "primary", "shape", "round", 3, "click", 4, "ngIf"], [1, "ion-text-center"], [1, "ion-text-justify"], ["lines", "none", 3, "click"], [1, "imgSinSeleccionar"], ["src", "../../../assets/icon/img1.png", "alt", "imgExcelente", 3, "ngClass"], ["src", "../../../assets/icon/img2.png", "alt", "imgBueno", 3, "ngClass"], ["src", "../../../assets/icon/img3.png", "alt", "imgRegular", 3, "ngClass"], ["src", "../../../assets/icon/img4.png", "alt", "imgDeficiente", 3, "ngClass"], [1, "firmaContent", 2, "border", "1px solid black", "border-radius", "10px", "background", "#ffffff"], [3, "options", "onBeginEvent", "onEndEvent"], ["class", "firma", 4, "ngIf"], [1, "firma"], ["expand", "block", "fill", "clear", "shape", "round", 3, "click"], ["expand", "block", "color", "primary", "shape", "round", 3, "click"]],
      template: function SignatureWithoutQRComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SignatureWithoutQRComponent_div_0_Template, 35, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignatureWithoutQRComponent_div_1_Template, 4, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignatureWithoutQRComponent_ion_button_2_Template, 2, 0, "ion-button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SignatureWithoutQRComponent_div_3_Template, 7, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-grid");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SignatureWithoutQRComponent_ion_button_9_Template, 2, 0, "ion-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "ion-col", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.verificationCodeInput);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSignature);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSignature);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showSignature);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.enableBtnGuardar);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRadioGroup"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePad"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]],
      styles: ["ion-item[_ngcontent-%COMP%] {\n  --background: none;\n}\n\nsignature-pad[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  width: 100% !important;\n  height: 100% !important;\n  display: contents !important;\n}\n\n.imgSinSeleccionar[_ngcontent-%COMP%] {\n  filter: hue-rotate(0deg) saturate(0%) brightness(400%);\n}\n\n.imgSeleccionadaExcBue[_ngcontent-%COMP%] {\n  filter: hue-rotate(120deg) saturate(100%) brightness(200%);\n}\n\n.imgSeleccionadaRegDef[_ngcontent-%COMP%] {\n  filter: hue-rotate(0deg) brightness(100%);\n}\n\n.firma[_ngcontent-%COMP%] {\n  border-top: 1px solid #95a6b1;\n  margin-right: 30px;\n  margin-left: 30px;\n  font-weight: bold;\n  color: gray;\n  font: unset;\n  font-size: 15px;\n  padding-top: 5px;\n}\n\n.firmaContent[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VydmV5LWFuZC1zaWduYXR1cmUvc2lnbmF0dXJlLXdpdGhvdXQtcXIvQzpcXFVzZXJzXFxjYWx2YXJhZG9cXERvY3VtZW50c1xccHJveWVjdG9cXEFjdHVhbFxcYWxpc3N0YV9zdW1cXFRydW5rXFwyMDI0MDYwNzEvc3JjXFxhcHBcXHBhZ2VzXFxzdXJ2ZXktYW5kLXNpZ25hdHVyZVxcc2lnbmF0dXJlLXdpdGhvdXQtcXJcXHNpZ25hdHVyZS13aXRob3V0LXFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXJ2ZXktYW5kLXNpZ25hdHVyZS9zaWduYXR1cmUtd2l0aG91dC1xci9zaWduYXR1cmUtd2l0aG91dC1xci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQ0NGOztBREVBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLDBEQUFBO0FDQ0Y7O0FERUE7RUFDRSx5Q0FBQTtBQ0NGOztBREVBO0VBQ0UsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cnZleS1hbmQtc2lnbmF0dXJlL3NpZ25hdHVyZS13aXRob3V0LXFyL3NpZ25hdHVyZS13aXRob3V0LXFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbnNpZ25hdHVyZS1wYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGNvbnRlbnRzICFpbXBvcnRhbnQ7XG59XG5cbi5pbWdTaW5TZWxlY2Npb25hciB7XG4gIGZpbHRlcjogaHVlLXJvdGF0ZSgwZGVnKSBzYXR1cmF0ZSgwJSkgYnJpZ2h0bmVzcyg0MDAlKTtcbn1cblxuLmltZ1NlbGVjY2lvbmFkYUV4Y0J1ZSB7XG4gIGZpbHRlcjogaHVlLXJvdGF0ZSgxMjBkZWcpIHNhdHVyYXRlKDEwMCUpIGJyaWdodG5lc3MoMjAwJSk7XG59XG5cbi5pbWdTZWxlY2Npb25hZGFSZWdEZWYge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZykgYnJpZ2h0bmVzcygxMDAlKTtcbn1cblxuLmZpcm1hIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5NWE2YjE7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuLmZpcm1hQ29udGVudCBkaXZ7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYhaW1wb3J0YW50O1xufVxuIiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG59XG5cbnNpZ25hdHVyZS1wYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBjb250ZW50cyAhaW1wb3J0YW50O1xufVxuXG4uaW1nU2luU2VsZWNjaW9uYXIge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMGRlZykgc2F0dXJhdGUoMCUpIGJyaWdodG5lc3MoNDAwJSk7XG59XG5cbi5pbWdTZWxlY2Npb25hZGFFeGNCdWUge1xuICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTIwZGVnKSBzYXR1cmF0ZSgxMDAlKSBicmlnaHRuZXNzKDIwMCUpO1xufVxuXG4uaW1nU2VsZWNjaW9uYWRhUmVnRGVmIHtcbiAgZmlsdGVyOiBodWUtcm90YXRlKDBkZWcpIGJyaWdodG5lc3MoMTAwJSk7XG59XG5cbi5maXJtYSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTVhNmIxO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQ6IHVuc2V0O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5maXJtYUNvbnRlbnQgZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignatureWithoutQRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-signature-without-qr',
          templateUrl: './signature-without-qr.component.html',
          styleUrls: ['./signature-without-qr.component.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
        }];
      }, {
        signaturePad: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePad"]]
        }],
        namePersonSignature: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        verificationCodeInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        infoSignatureWithoutQR: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/survey-and-signature/survey-and-signature-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/survey-and-signature/survey-and-signature-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: SurveyAndSignaturePageRoutingModule */

  /***/
  function srcAppPagesSurveyAndSignatureSurveyAndSignatureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyAndSignaturePageRoutingModule", function () {
      return SurveyAndSignaturePageRoutingModule;
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


    var _survey_and_signature_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./survey-and-signature.page */
    "./src/app/pages/survey-and-signature/survey-and-signature.page.ts");

    var routes = [{
      path: '',
      component: _survey_and_signature_page__WEBPACK_IMPORTED_MODULE_2__["SurveyAndSignaturePage"]
    }, {
      path: 'responsibleSignatureARL',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | responsible-signature-arl-responsible-signature-arl-module */
        [__webpack_require__.e("default~responsible-signature-arl-responsible-signature-arl-module~uploader-uploader-module"), __webpack_require__.e("responsible-signature-arl-responsible-signature-arl-module")]).then(__webpack_require__.bind(null,
        /*! ../responsible-signature-arl/responsible-signature-arl.module */
        "./src/app/pages/responsible-signature-arl/responsible-signature-arl.module.ts")).then(function (m) {
          return m.ResponsibleSignatureARLPageModule;
        });
      }
    }];

    var SurveyAndSignaturePageRoutingModule = /*#__PURE__*/_createClass(function SurveyAndSignaturePageRoutingModule() {
      _classCallCheck(this, SurveyAndSignaturePageRoutingModule);
    });

    SurveyAndSignaturePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SurveyAndSignaturePageRoutingModule
    });
    SurveyAndSignaturePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SurveyAndSignaturePageRoutingModule_Factory(t) {
        return new (t || SurveyAndSignaturePageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SurveyAndSignaturePageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyAndSignaturePageRoutingModule, [{
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
  "./src/app/pages/survey-and-signature/survey-and-signature.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/survey-and-signature/survey-and-signature.module.ts ***!
    \***************************************************************************/

  /*! exports provided: SurveyAndSignaturePageModule */

  /***/
  function srcAppPagesSurveyAndSignatureSurveyAndSignatureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyAndSignaturePageModule", function () {
      return SurveyAndSignaturePageModule;
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


    var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! angular2-signaturepad */
    "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _signature_qr_signature_qr_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signature-qr/signature-qr.component */
    "./src/app/pages/survey-and-signature/signature-qr/signature-qr.component.ts");
    /* harmony import */


    var _signature_without_qr_signature_without_qr_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signature-without-qr/signature-without-qr.component */
    "./src/app/pages/survey-and-signature/signature-without-qr/signature-without-qr.component.ts");
    /* harmony import */


    var _survey_and_signature_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./survey-and-signature-routing.module */
    "./src/app/pages/survey-and-signature/survey-and-signature-routing.module.ts");
    /* harmony import */


    var _survey_and_signature_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./survey-and-signature.page */
    "./src/app/pages/survey-and-signature/survey-and-signature.page.ts");

    var SurveyAndSignaturePageModule = /*#__PURE__*/_createClass(function SurveyAndSignaturePageModule() {
      _classCallCheck(this, SurveyAndSignaturePageModule);
    });

    SurveyAndSignaturePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SurveyAndSignaturePageModule
    });
    SurveyAndSignaturePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SurveyAndSignaturePageModule_Factory(t) {
        return new (t || SurveyAndSignaturePageModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadModule"], _survey_and_signature_routing_module__WEBPACK_IMPORTED_MODULE_8__["SurveyAndSignaturePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SurveyAndSignaturePageModule, {
        declarations: [_survey_and_signature_page__WEBPACK_IMPORTED_MODULE_9__["SurveyAndSignaturePage"], _signature_qr_signature_qr_component__WEBPACK_IMPORTED_MODULE_6__["SignatureQRComponent"], _signature_without_qr_signature_without_qr_component__WEBPACK_IMPORTED_MODULE_7__["SignatureWithoutQRComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadModule"], _survey_and_signature_routing_module__WEBPACK_IMPORTED_MODULE_8__["SurveyAndSignaturePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SurveyAndSignaturePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_4__["SignaturePadModule"], _survey_and_signature_routing_module__WEBPACK_IMPORTED_MODULE_8__["SurveyAndSignaturePageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]],
          declarations: [_survey_and_signature_page__WEBPACK_IMPORTED_MODULE_9__["SurveyAndSignaturePage"], _signature_qr_signature_qr_component__WEBPACK_IMPORTED_MODULE_6__["SignatureQRComponent"], _signature_without_qr_signature_without_qr_component__WEBPACK_IMPORTED_MODULE_7__["SignatureWithoutQRComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/survey-and-signature/survey-and-signature.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/survey-and-signature/survey-and-signature.page.ts ***!
    \*************************************************************************/

  /*! exports provided: SurveyAndSignaturePage */

  /***/
  function srcAppPagesSurveyAndSignatureSurveyAndSignaturePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyAndSignaturePage", function () {
      return SurveyAndSignaturePage;
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


    var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @capacitor/filesystem */
    "./node_modules/@capacitor/filesystem/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/advisory-verification/advisory-verification.component */
    "./src/app/components/advisory-verification/advisory-verification.component.ts");
    /* harmony import */


    var _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../services/activities/activityListCompany/activity-list-company.service */
    "./src/app/services/activities/activityListCompany/activity-list-company.service.ts");
    /* harmony import */


    var _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/activities/advisoryTopic/advisory-topic.service */
    "./src/app/services/activities/advisoryTopic/advisory-topic.service.ts");
    /* harmony import */


    var _services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/attach/photo-service.service */
    "./src/app/services/attach/photo-service.service.ts");
    /* harmony import */


    var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/cache/cache.service */
    "./src/app/services/cache/cache.service.ts");
    /* harmony import */


    var _services_network_network_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../services/network/network.service */
    "./src/app/services/network/network.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _signature_qr_signature_qr_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./signature-qr/signature-qr.component */
    "./src/app/pages/survey-and-signature/signature-qr/signature-qr.component.ts");
    /* harmony import */


    var _signature_without_qr_signature_without_qr_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./signature-without-qr/signature-without-qr.component */
    "./src/app/pages/survey-and-signature/signature-without-qr/signature-without-qr.component.ts");

    function SurveyAndSignaturePage_ion_select_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-select-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var responsable_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", responsable_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", responsable_r10.Nombre, " ");
      }
    }

    function SurveyAndSignaturePage_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tipo de documento");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SurveyAndSignaturePage_ion_input_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedVal.tipoDocumentoDescripcion, "");
      }
    }

    function SurveyAndSignaturePage_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Documento de identificaci\xF3n");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SurveyAndSignaturePage_ion_input_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r4.selectedVal.numeroDocumento, " ");
      }
    }

    function SurveyAndSignaturePage_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Correo Electr\xF3nico");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SurveyAndSignaturePage_ion_input_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.selectedVal.correo);
      }
    }

    function SurveyAndSignaturePage_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Cargo");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SurveyAndSignaturePage_ion_input_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.selectedVal.cargo);
      }
    }

    function SurveyAndSignaturePage_ng_container_26_div_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Firma responsable de la empresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-grid");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "ion-col", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-col", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyAndSignaturePage_ng_container_26_div_7_Template_ion_button_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r14.verification();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Ver Acta ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-col", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-row");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ion-col", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SurveyAndSignaturePage_ng_container_26_div_7_Template_ion_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r16.confirmVerificationCode();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Firma Acta ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-col", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r11.disabledBtnSignature);
      }
    }

    function SurveyAndSignaturePage_ng_container_26_app_signature_qr_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-signature-qr", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("infoEnteredSignatureQR", function SurveyAndSignaturePage_ng_container_26_app_signature_qr_9_Template_app_signature_qr_infoEnteredSignatureQR_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r17.getInfoSignatureQR($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SurveyAndSignaturePage_ng_container_26_app_signature_without_qr_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-signature-without-qr", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("infoSignatureWithoutQR", function SurveyAndSignaturePage_ng_container_26_app_signature_without_qr_10_Template_app_signature_without_qr_infoSignatureWithoutQR_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r19.getInfoSignatureQR($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("verificationCodeInput", ctx_r13.verificationCode)("namePersonSignature", ctx_r13.selectedVal);
      }
    }

    function SurveyAndSignaturePage_ng_container_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-list", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-toggle", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SurveyAndSignaturePage_ng_container_26_Template_ion_toggle_ionChange_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.changeOptSignature($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SurveyAndSignaturePage_ng_container_26_div_7_Template, 18, 1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SurveyAndSignaturePage_ng_container_26_app_signature_qr_9_Template, 1, 0, "app-signature-qr", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SurveyAndSignaturePage_ng_container_26_app_signature_without_qr_10_Template, 1, 2, "app-signature-without-qr", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.textCheckFirma, " se va a firmar con c\xF3digo QR");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r9.disabledFirma);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.showSignature);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r9.showSignature);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r9.showSignature);
      }
    }

    var SurveyAndSignaturePage = /*#__PURE__*/function () {
      function SurveyAndSignaturePage(platform, cacheService, router, storage, net, photoService, loadingCtlr, advisoryTopicService, activityListCompany, toastController, modalCtrl, alertController) {
        _classCallCheck(this, SurveyAndSignaturePage);

        this.platform = platform;
        this.cacheService = cacheService;
        this.router = router;
        this.storage = storage;
        this.net = net;
        this.photoService = photoService;
        this.loadingCtlr = loadingCtlr;
        this.advisoryTopicService = advisoryTopicService;
        this.activityListCompany = activityListCompany;
        this.toastController = toastController;
        this.modalCtrl = modalCtrl;
        this.alertController = alertController;
        this.data = [];
        this.showSignature = false;
        this.responsibleList = [];
        this.textCheckFirma = 'NO';
        this.disabledFirma = false;
        this.disabledBtnSignature = false;
        this.actasAsesoria = [];
        this.filesBase64 = [];
        this.filesConcat = '';
      }

      _createClass(SurveyAndSignaturePage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
            var leerArchivos;
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.readFile();

                case 2:
                  leerArchivos = _context4.sent;

                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.responsibleList = JSON.parse(sessionStorage.companySelected).listaReposables;
          console.log('responsables', this.responsibleList);
          this.data = this.responsibleList;
          this.getInfoUser();
        }
      }, {
        key: "getInfoUser",
        value: function getInfoUser() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
            return _regeneratorRuntime().wrap(function _callee5$(_context5) {
              while (1) switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.storage.get('sesion');

                case 2:
                  this.infoUserARL = _context5.sent;
                  console.log('this.infoUserARL', this.infoUserARL);

                case 4:
                case "end":
                  return _context5.stop();
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "confirmVerificationCode",
        value: function confirmVerificationCode() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
            var _this = this;

            var data2, verification, handlerVerification, handlerVerificationCode, alert;
            return _regeneratorRuntime().wrap(function _callee7$(_context7) {
              while (1) switch (_context7.prev = _context7.next) {
                case 0:
                  handlerVerification = function handlerVerification(data) {
                    data2 = data;
                  };

                  handlerVerificationCode = function handlerVerificationCode() {
                    verification = true;
                  };

                  _context7.next = 4;
                  return this.alertController.create({
                    cssClass: 'my-custom-class',
                    backdropDismiss: false,
                    mode: 'ios',
                    // tslint:disable-next-line: max-line-length
                    header: "Ingrese el c\xF3digo de verificaci\xF3n, si seleccionas la opci\xF3n reenviar c\xF3digo, se enviar\xE1 al siguiente correo: ".concat(this.selectedVal.correo),
                    inputs: [{
                      name: 'verificationCodeInput',
                      type: 'tel',
                      placeholder: 'Código de verificación'
                    }],
                    buttons: [{
                      text: 'Reenviar código',
                      handler: handlerVerificationCode
                    }, {
                      text: 'Aceptar',
                      handler: handlerVerification
                    }, {
                      text: 'Cancelar',
                      role: 'cancel',
                      cssClass: 'secondary',
                      handler: function handler() {
                        console.log('Confirm Cancel');
                      }
                    }]
                  });

                case 4:
                  alert = _context7.sent;
                  alert.onDidDismiss().then(function () {
                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                      var checkNetwork, idEmpresa, idResponsable, siEnvioCorreo;
                      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                        while (1) switch (_context6.prev = _context6.next) {
                          case 0:
                            if (!data2) {
                              _context6.next = 4;
                              break;
                            }

                            if (this.selectedVal) {
                              this.disabledFirma = true;

                              if (this.selectedVal.codigoVerificacion === data2.verificationCodeInput) {
                                this.verificationCode = data2.verificationCodeInput;
                                this.disabledBtnSignature = true;
                              } else {
                                this.notification('Atención', 'El código ingresado no es valido, por favor intente nuevamente');
                                this.disabledFirma = false;
                              }
                            } else {
                              this.notification('Alerta', 'Debes seleccionar a un responsable de la empresa.');
                            }

                            _context6.next = 21;
                            break;

                          case 4:
                            if (!verification) {
                              _context6.next = 21;
                              break;
                            }

                            if (!this.selectedVal) {
                              _context6.next = 20;
                              break;
                            }

                            checkNetwork = this.validateNetwork();

                            if (!checkNetwork) {
                              _context6.next = 17;
                              break;
                            }

                            idEmpresa = JSON.parse(sessionStorage.companySelected).id;
                            idResponsable = this.selectedVal.id;
                            this.presentLoading('Reenviando código de verificación ...');
                            _context6.next = 13;
                            return this.activityListCompany.recordarCodigoVerificacion(idResponsable, idEmpresa).toPromise();

                          case 13:
                            siEnvioCorreo = _context6.sent;

                            if (siEnvioCorreo) {
                              this.notification('Exitoso', "Se reenvio el c\xF3digo de verificaci\xF3n al correo ".concat(this.selectedVal.correo));
                              this.loading.dismiss();
                            } else {
                              this.notification('Error', "No se pudo env\xEDar el c\xF3digo de verificaci\xF3n al correo: ".concat(this.selectedVal.correo));
                              this.loading.dismiss();
                            }

                            _context6.next = 18;
                            break;

                          case 17:
                            this.notification('Alerta', 'No tienes conexión a internet para realizar esta funcionalidad');

                          case 18:
                            _context6.next = 21;
                            break;

                          case 20:
                            this.notification('Alerta', 'Debes seleccionar a un responsable de la empresa.');

                          case 21:
                          case "end":
                            return _context6.stop();
                        }
                      }, _callee6, this);
                    }));
                  });
                  _context7.next = 8;
                  return alert.present();

                case 8:
                case "end":
                  return _context7.stop();
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "OnChange",
        value: function OnChange(event) {
          this.selectedVal = event.detail.value; // this.confirmVerificationCode();
        }
      }, {
        key: "getInfoSignatureQR",
        value: function getInfoSignatureQR(infoQR) {
          var fechaCreaciónActa = new Date();

          if (this.textCheckFirma === 'NO') {
            this.textCheckFirma = false;
            var answerPoll = infoQR.answerPoll.charAt(0);
            this.infoSurveyQR = {
              nombreResponsable: this.selectedVal.Nombre,
              responsableId: this.selectedVal.id,
              tipoDocumentoResponsable: this.selectedVal.tipoDocumentoDescripcion,
              numeroDocumentoResponsable: this.selectedVal.numeroDocumento,
              cargo: this.selectedVal.cargo,
              firmaQR: this.textCheckFirma,
              answerPool: answerPoll,
              signature: infoQR.signatureEntered,
              dateCreatedSurvey: fechaCreaciónActa
            };
            this.cacheService.saveSurveyQR(this.infoSurveyQR);
            this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature/responsibleSignatureARL');
          } else {
            this.textCheckFirma = true;
            this.infoSurveyQR = {
              nombreResponsable: this.selectedVal.Nombre,
              responsableId: this.selectedVal.id,
              tipoDocumentoResponsable: this.selectedVal.tipoDocumentoDescripcion,
              numeroDocumentoResponsable: this.selectedVal.numeroDocumento,
              cargo: this.selectedVal.cargo,
              firmaQR: this.textCheckFirma,
              nombreResponsableARL: infoQR.nombreResponsableARL,
              apellidoResponsableARL: infoQR.apellidosResponsableARL,
              documentoResponsableARL: infoQR.documentoUsuarioARL,
              nombreProveedor: infoQR.nombreProveedor,
              cargoARL: infoQR.cargo,
              licenciaSSTARL: infoQR.licenciaSST,
              signature: infoQR.signatureEntered,
              dateCreatedSurvey: fechaCreaciónActa
            };
            this.cacheService.saveSurveyQR(this.infoSurveyQR);
            this.sendTask();
          }
        }
      }, {
        key: "changeOptSignature",
        value: function changeOptSignature(event) {
          if (event.detail.checked === true) {
            this.showSignature = true;
            this.textCheckFirma = 'SI';
          } else {
            this.showSignature = false;
            this.textCheckFirma = 'NO';
          }
        }
      }, {
        key: "verification",
        value: function verification() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
            var infoActa, modal;
            return _regeneratorRuntime().wrap(function _callee8$(_context8) {
              while (1) switch (_context8.prev = _context8.next) {
                case 0:
                  // this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature/advisoryVerification');
                  infoActa = this.cacheService.getAllInfoToAdvisory();
                  _context8.next = 3;
                  return this.modalCtrl.create({
                    component: _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_6__["AdvisoryVerificationComponent"],
                    componentProps: {
                      info: infoActa
                    }
                  });

                case 3:
                  modal = _context8.sent;
                  modal.present();

                case 5:
                case "end":
                  return _context8.stop();
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "sendTask",
        value: function sendTask() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var _this2 = this;

            var checkNetwork, idProveedor, files, creacionActa, _iterator, _step, f, body, _iterator2, _step2, tta, idActividadMigradaPorUsuario, notifCorreoActa, listaActividades, _loop, i, activitiesChange, getInfoActaAsesoria, actSelec, _loop2, _i, cambioCompanySelected, saveActaAsesoria;

            return _regeneratorRuntime().wrap(function _callee9$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  checkNetwork = this.validateNetwork();
                  idProveedor = this.infoUserARL.idProveedor;
                  this.actaAsesoriaGestionada = this.cacheService.createActaAsesoria(idProveedor);
                  files = this.getFiles();

                  if (!checkNetwork) {
                    _context11.next = 71;
                    break;
                  }

                  _context11.next = 7;
                  return this.presentLoading('Creando acta de asesoría ...');

                case 7:
                  _context11.next = 9;
                  return this.advisoryTopicService.saveActaAsesoria(this.actaAsesoriaGestionada).toPromise();

                case 9:
                  creacionActa = _context11.sent;
                  creacionActa = creacionActa.split(';');

                  if (!(creacionActa[0] === 'true' && creacionActa[1] !== '-1')) {
                    _context11.next = 67;
                    break;
                  }

                  _iterator = _createForOfIteratorHelper(files);
                  _context11.prev = 13;

                  _iterator.s();

                case 15:
                  if ((_step = _iterator.n()).done) {
                    _context11.next = 22;
                    break;
                  }

                  f = _step.value;
                  body = Object.assign(Object.assign({}, f), {
                    UidActaAsesoria: +creacionActa[1]
                  });
                  _context11.next = 20;
                  return this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();

                case 20:
                  _context11.next = 15;
                  break;

                case 22:
                  _context11.next = 27;
                  break;

                case 24:
                  _context11.prev = 24;
                  _context11.t0 = _context11["catch"](13);

                  _iterator.e(_context11.t0);

                case 27:
                  _context11.prev = 27;

                  _iterator.f();

                  return _context11.finish(27);

                case 30:
                  if (!(this.actaAsesoriaGestionada && this.actaAsesoriaGestionada.TTA_lista && this.actaAsesoriaGestionada.TTA_lista.length > 0)) {
                    _context11.next = 50;
                    break;
                  }

                  _iterator2 = _createForOfIteratorHelper(this.actaAsesoriaGestionada.TTA_lista);
                  _context11.prev = 32;

                  _iterator2.s();

                case 34:
                  if ((_step2 = _iterator2.n()).done) {
                    _context11.next = 42;
                    break;
                  }

                  tta = _step2.value;
                  idActividadMigradaPorUsuario = tta.id; // envio correo notificacion acta asesoria 

                  notifCorreoActa = {
                    Fk_ID_ActividadMigradaPorUsuario: idActividadMigradaPorUsuario
                  };
                  _context11.next = 40;
                  return this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();

                case 40:
                  _context11.next = 34;
                  break;

                case 42:
                  _context11.next = 47;
                  break;

                case 44:
                  _context11.prev = 44;
                  _context11.t1 = _context11["catch"](32);

                  _iterator2.e(_context11.t1);

                case 47:
                  _context11.prev = 47;

                  _iterator2.f();

                  return _context11.finish(47);

                case 50:
                  this.photoService.photos = [];
                  _context11.next = 53;
                  return this.storage.get('listaActividades');

                case 53:
                  listaActividades = _context11.sent;
                  _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                    var actividadesMigradas, ids;
                    return _regeneratorRuntime().wrap(function _loop$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                        case 0:
                          actividadesMigradas = listaActividades[i].listaActividadesMigradas;
                          ids = [];
                          actividadesMigradas.forEach(function (element) {
                            var idActividad = element.id;
                            var TTA_LISTA = _this2.actaAsesoriaGestionada.TTA_lista;
                            var index = TTA_LISTA.findIndex(function (x) {
                              return x.id === idActividad;
                            });

                            if (index > -1) {
                              ids.push(idActividad);
                            }
                          });
                          listaActividades[i].listaActividadesMigradas = actividadesMigradas.filter(function (a) {
                            return !ids.find(function (ii) {
                              return ii === a.id;
                            });
                          });

                        case 4:
                        case "end":
                          return _context9.stop();
                      }
                    }, _loop);
                  });
                  i = 0;

                case 56:
                  if (!(i < listaActividades.length)) {
                    _context11.next = 61;
                    break;
                  }

                  return _context11.delegateYield(_loop(), "t2", 58);

                case 58:
                  i++;
                  _context11.next = 56;
                  break;

                case 61:
                  this.storage.set('listaActividades', listaActividades);
                  this.registerTime(this.actaAsesoriaGestionada.AE_HorasTotales);
                  this.notification('Atención', 'Se ha creado el acta de asesoría');
                  this.router.navigateByUrl('/u/execLog');
                  _context11.next = 68;
                  break;

                case 67:
                  this.notification('Error', 'No se pudo crear el acta de asesoría');

                case 68:
                  this.loading.dismiss();
                  _context11.next = 86;
                  break;

                case 71:
                  activitiesChange = [];
                  getInfoActaAsesoria = this.cacheService.getAllInfoToAdvisory();
                  actSelec = JSON.parse(sessionStorage.companySelected);
                  _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
                    var codeActividadesMigradas, encontro;
                    return _regeneratorRuntime().wrap(function _loop2$(_context10) {
                      while (1) switch (_context10.prev = _context10.next) {
                        case 0:
                          codeActividadesMigradas = actSelec.listaActividadesMigradas[_i].idActividad;
                          encontro = getInfoActaAsesoria.activities.find(function (element) {
                            return element.idActividad === codeActividadesMigradas;
                          });

                          if (encontro) {
                            encontro.estadoInterno = 'Por enviar';
                            activitiesChange.push(encontro);
                          } else {
                            activitiesChange.push(actSelec.listaActividadesMigradas[_i]);
                          }

                        case 3:
                        case "end":
                          return _context10.stop();
                      }
                    }, _loop2);
                  });
                  _i = 0;

                case 76:
                  if (!(_i < actSelec.listaActividadesMigradas.length)) {
                    _context11.next = 81;
                    break;
                  }

                  return _context11.delegateYield(_loop2(), "t3", 78);

                case 78:
                  _i++;
                  _context11.next = 76;
                  break;

                case 81:
                  actSelec.listaActividadesMigradas = activitiesChange;
                  cambioCompanySelected = JSON.stringify(actSelec);
                  sessionStorage.setItem('companySelected', cambioCompanySelected);
                  saveActaAsesoria = this.cacheService.saveActasAsesoria(files);

                  if (saveActaAsesoria) {
                    this.registerTime(this.actaAsesoriaGestionada.AE_HorasTotales);
                    this.notification('Atención', 'El móvil no tiene acceso a datos, por lo cual el acta de asesoría se guardó con estado pendiente por enviar.');
                    this.router.navigateByUrl('/u/execLog');
                  }

                case 86:
                case "end":
                  return _context11.stop();
              }
            }, _callee9, this, [[13, 24, 27, 30], [32, 44, 47, 50]]);
          }));
        }
      }, {
        key: "readFile",
        value: function readFile() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
            var _this3 = this;

            var documentosAdjuntados, _loop3, i;

            return _regeneratorRuntime().wrap(function _callee10$(_context13) {
              while (1) switch (_context13.prev = _context13.next) {
                case 0:
                  documentosAdjuntados = this.cacheService.saveAttach;
                  _loop3 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop3(i) {
                    var nombreArchivo, idActividad, extensionBase;
                    return _regeneratorRuntime().wrap(function _loop3$(_context12) {
                      while (1) switch (_context12.prev = _context12.next) {
                        case 0:
                          nombreArchivo = documentosAdjuntados[i].nombreArchivo;
                          idActividad = documentosAdjuntados[i].idActividad;
                          extensionBase = documentosAdjuntados[i].extensionBase64;
                          _context12.prev = 3;
                          _context12.next = 6;
                          return _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].readFile({
                            path: "".concat(idActividad, "/").concat(nombreArchivo),
                            directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
                          }).then(function (data) {
                            var base64 = extensionBase.concat(',').concat(data.data);
                            var objUploadFile = {
                              UidActividadMigradaXUSuario: idActividad,
                              TipoSoporte: documentosAdjuntados[i].tipoDocumento,
                              Base64: base64
                            };

                            _this3.filesBase64.push(objUploadFile);
                          });

                        case 6:
                          _context12.next = 11;
                          break;

                        case 8:
                          _context12.prev = 8;
                          _context12.t0 = _context12["catch"](3);
                          console.log(_context12.t0);

                        case 11:
                        case "end":
                          return _context12.stop();
                      }
                    }, _loop3, null, [[3, 8]]);
                  });
                  i = 0;

                case 3:
                  if (!(i < documentosAdjuntados.length)) {
                    _context13.next = 8;
                    break;
                  }

                  return _context13.delegateYield(_loop3(i), "t0", 5);

                case 5:
                  i++;
                  _context13.next = 3;
                  break;

                case 8:
                case "end":
                  return _context13.stop();
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "removeFile",
        value: function removeFile() {
          var activities = this.cacheService.saveAttach;

          for (var i = 0; i < activities.length; i++) {
            var nombreArchivo = activities[i].nombreArchivo;
            var idActividad = activities[i].idActividad;

            try {
              _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].deleteFile({
                path: "".concat(idActividad, "/").concat(nombreArchivo),
                directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data
              });
            } catch (_a) {}
          }
        }
      }, {
        key: "validateNetwork",
        value: function validateNetwork() {
          var status = this.net.getNetworkStatus();

          if (status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_11__["ConnectionStatusEnum"].Offline) {
            this.presentToast();
          }

          return status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_11__["ConnectionStatusEnum"].Online;
        }
      }, {
        key: "presentLoading",
        value: function presentLoading(message) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            return _regeneratorRuntime().wrap(function _callee11$(_context14) {
              while (1) switch (_context14.prev = _context14.next) {
                case 0:
                  _context14.next = 2;
                  return this.loadingCtlr.create({
                    mode: 'ios',
                    message: message
                  });

                case 2:
                  this.loading = _context14.sent;
                  return _context14.abrupt("return", this.loading.present());

                case 4:
                case "end":
                  return _context14.stop();
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "presentToast",
        value: function presentToast() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
            var toast;
            return _regeneratorRuntime().wrap(function _callee12$(_context15) {
              while (1) switch (_context15.prev = _context15.next) {
                case 0:
                  _context15.next = 2;
                  return this.toastController.create({
                    message: 'Verifique su conexión a internet.',
                    duration: 2000
                  });

                case 2:
                  toast = _context15.sent;
                  toast.present();

                case 4:
                case "end":
                  return _context15.stop();
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "notification",
        value: function notification(titulo, notificacion) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
            var alert;
            return _regeneratorRuntime().wrap(function _callee13$(_context16) {
              while (1) switch (_context16.prev = _context16.next) {
                case 0:
                  _context16.next = 2;
                  return this.alertController.create({
                    header: titulo,
                    backdropDismiss: false,
                    mode: 'ios',
                    message: notificacion,
                    buttons: ['ACEPTAR']
                  });

                case 2:
                  alert = _context16.sent;
                  alert.onDidDismiss();
                  _context16.next = 6;
                  return alert.present();

                case 6:
                case "end":
                  return _context16.stop();
              }
            }, _callee13, this);
          }));
        }
        /**
         * Registra el tiempo de ejecución de esta actividad para el día actual.
         *
         * @param duration Texto que contiene la duración de la actividad.
         */

      }, {
        key: "registerTime",
        value: function registerTime(duration) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
            var re, results, minutes;
            return _regeneratorRuntime().wrap(function _callee14$(_context17) {
              while (1) switch (_context17.prev = _context17.next) {
                case 0:
                  re = /(\d+)(\s+Horas\s+)(\d+)(\s+Minutos)/gm;
                  results = re.exec(duration);

                  if (results) {
                    _context17.next = 4;
                    break;
                  }

                  return _context17.abrupt("return");

                case 4:
                  minutes = +results[1] * 60 + +results[3];
                  _context17.next = 7;
                  return this.cacheService.setRegisteredTime(minutes);

                case 7:
                case "end":
                  return _context17.stop();
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getFiles",
        value: function getFiles() {
          var _this4 = this;

          var files = [];
          var imagenesAdjuntas = this.cacheService.obtenerAdjuntosFoto();

          for (var i = 0; i < this.filesBase64.length; i++) {
            var objAdjuntarDoc = this.filesBase64[i];
            files.push(objAdjuntarDoc);
          }

          for (var j = 0; j < imagenesAdjuntas.length; j++) {
            var element = imagenesAdjuntas[j];
            element.forEach(function (documento) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
                var objAdjuntarImg;
                return _regeneratorRuntime().wrap(function _callee15$(_context18) {
                  while (1) switch (_context18.prev = _context18.next) {
                    case 0:
                      objAdjuntarImg = {
                        UidActividadMigradaXUSuario: documento.idActividad,
                        TipoSoporte: documento.idTipoArchivo,
                        base64: documento.foto.base64Imagen
                      };
                      files.push(objAdjuntarImg);

                    case 2:
                    case "end":
                      return _context18.stop();
                  }
                }, _callee15);
              }));
            });
          }

          this.removeFile();
          return files;
        }
      }]);

      return SurveyAndSignaturePage;
    }();

    SurveyAndSignaturePage.ɵfac = function SurveyAndSignaturePage_Factory(t) {
      return new (t || SurveyAndSignaturePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_10__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_9__["PhotoServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_8__["AdvisoryTopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_7__["ActivityListCompanyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]));
    };

    SurveyAndSignaturePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SurveyAndSignaturePage,
      selectors: [["app-survey-and-signature"]],
      decls: 27,
      vars: 11,
      consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding"], [1, "ion-text-center"], ["lines", "none"], ["placeholder", "Seleccionar", "interface", "action-sheet", "mode", "ios", "color", "primary", 1, "full-width-select", "bg-light", "mt-3", "rounded", "pl-1", "pr-1", 3, "ngModel", "ngModelChange"], ["class", "custom-options", 3, "value", 4, "ngFor", "ngForOf"], ["class", "ion-text-start", 4, "ngIf"], ["class", "bg-light mt-3 rounded pl-1 pr-1", "readonly", "", 4, "ngIf"], [4, "ngIf"], [1, "custom-options", 3, "value"], [1, "ion-text-start"], ["readonly", "", 1, "bg-light", "mt-3", "rounded", "pl-1", "pr-1"], [2, "background", "none"], [1, "bold"], [3, "disabled", "ionChange"], ["class", "ion-padding", 4, "ngIf"], [3, "infoEnteredSignatureQR", 4, "ngIf"], [3, "verificationCodeInput", "namePersonSignature", "infoSignatureWithoutQR", 4, "ngIf"], ["size", "1"], ["color", "tertiary", "expand", "block", 3, "click"], ["expand", "block", 3, "disabled", "click"], [3, "infoEnteredSignatureQR"], [3, "verificationCodeInput", "namePersonSignature", "infoSignatureWithoutQR"]],
      template: function SurveyAndSignaturePage_Template(rf, ctx) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Encuesta y firma de la empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Responsable de la empresa");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-item", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SurveyAndSignaturePage_Template_ion_select_ngModelChange_16_listener($event) {
            return ctx.selectedVal = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SurveyAndSignaturePage_ion_select_option_17_Template, 2, 2, "ion-select-option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SurveyAndSignaturePage_div_18_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SurveyAndSignaturePage_ion_input_19_Template, 2, 1, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SurveyAndSignaturePage_div_20_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SurveyAndSignaturePage_ion_input_21_Template, 2, 1, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, SurveyAndSignaturePage_div_22_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SurveyAndSignaturePage_ion_input_23_Template, 2, 1, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SurveyAndSignaturePage_div_24_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SurveyAndSignaturePage_ion_input_25_Template, 2, 1, "ion-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SurveyAndSignaturePage_ng_container_26_Template, 11, 5, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedVal);
        }
      },
      directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelect"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSelectOption"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _signature_qr_signature_qr_component__WEBPACK_IMPORTED_MODULE_14__["SignatureQRComponent"], _signature_without_qr_signature_without_qr_component__WEBPACK_IMPORTED_MODULE_15__["SignatureWithoutQRComponent"]],
      styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 40px;\n}\nion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .btnEnviar[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.full-width-select[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 20px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VydmV5LWFuZC1zaWduYXR1cmUvQzpcXFVzZXJzXFxjYWx2YXJhZG9cXERvY3VtZW50c1xccHJveWVjdG9cXEFjdHVhbFxcYWxpc3N0YV9zdW1cXFRydW5rXFwyMDI0MDYwNzEvc3JjXFxhcHBcXHBhZ2VzXFxzdXJ2ZXktYW5kLXNpZ25hdHVyZVxcc3VydmV5LWFuZC1zaWduYXR1cmUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdXJ2ZXktYW5kLXNpZ25hdHVyZS9zdXJ2ZXktYW5kLXNpZ25hdHVyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERU07RUFDRSxZQUFBO0FDQVI7QURPRTtFQUNFLGtCQUFBO0FDSko7QURRTTtFQUNFLFlBQUE7QUNOUjtBRE9RO0VBQ0UscUJBQUE7QUNMVjtBRFVFO0VBQ0UscUJBQUE7QUNSSjtBRGFRO0VBQ0UsZ0JBQUE7QUNYVjtBRGtCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDZkY7QURrQkE7RUFDRSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ2ZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VydmV5LWFuZC1zaWduYXR1cmUvc3VydmV5LWFuZC1zaWduYXR1cmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgICAgfVxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICB9XG4gIGlvbi1ncmlkIHtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICAmIC5idG5FbnZpYXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZ1bGwtd2lkdGgtc2VsZWN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIiwiaW9uLWhlYWRlciBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1idXR0b24ge1xuICAtLWJvcmRlci1yYWRpdXM6IDQwcHg7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5idG5FbnZpYXIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uZnVsbC13aWR0aC1zZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SurveyAndSignaturePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-survey-and-signature',
          templateUrl: './survey-and-signature.page.html',
          styleUrls: ['./survey-and-signature.page.scss']
        }]
      }], function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_10__["CacheService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
        }, {
          type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_11__["NetworkService"]
        }, {
          type: _services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_9__["PhotoServiceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_8__["AdvisoryTopicService"]
        }, {
          type: _services_activities_activityListCompany_activity_list_company_service__WEBPACK_IMPORTED_MODULE_7__["ActivityListCompanyService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=survey-and-signature-survey-and-signature-module-es5.js.map