(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["communications-talk-talk-module"],{

/***/ "./src/app/pages/communications/talk/talk-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/communications/talk/talk-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: TalkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkPageRoutingModule", function() { return TalkPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _talk_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./talk.page */ "./src/app/pages/communications/talk/talk.page.ts");





const routes = [
    {
        path: '',
        component: _talk_page__WEBPACK_IMPORTED_MODULE_2__["TalkPage"],
    },
];
class TalkPageRoutingModule {
}
TalkPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TalkPageRoutingModule });
TalkPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TalkPageRoutingModule_Factory(t) { return new (t || TalkPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TalkPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalkPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/communications/talk/talk.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/communications/talk/talk.module.ts ***!
  \**********************************************************/
/*! exports provided: TalkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkPageModule", function() { return TalkPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _talk_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./talk-routing.module */ "./src/app/pages/communications/talk/talk-routing.module.ts");
/* harmony import */ var _talk_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./talk.page */ "./src/app/pages/communications/talk/talk.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







class TalkPageModule {
}
TalkPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TalkPageModule });
TalkPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TalkPageModule_Factory(t) { return new (t || TalkPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _talk_routing_module__WEBPACK_IMPORTED_MODULE_3__["TalkPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TalkPageModule, { declarations: [_talk_page__WEBPACK_IMPORTED_MODULE_4__["TalkPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _talk_routing_module__WEBPACK_IMPORTED_MODULE_3__["TalkPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TalkPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _talk_routing_module__WEBPACK_IMPORTED_MODULE_3__["TalkPageRoutingModule"]],
                declarations: [_talk_page__WEBPACK_IMPORTED_MODULE_4__["TalkPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/communications/talk/talk.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/communications/talk/talk.page.ts ***!
  \********************************************************/
/*! exports provided: TalkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TalkPage", function() { return TalkPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_talk_talk_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/talk/talk.service */ "./src/app/services/talk/talk.service.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
















const _c0 = ["content"];
const _c1 = ["Lista"];
function TalkPage_ion_list_54_ion_row_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Comunicaci\u00F3n privada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TalkPage_ion_list_54_ion_row_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\"", item_r3.MensajePadre.Mensaje, "\"");
} }
const _c2 = function (a0) { return { "color": a0 }; };
function TalkPage_ion_list_54_ion_icon_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 42);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](1, _c2, item_r3.LeidoPorMi || item_r3.FKUsuario != ctx_r8.idUsuario ? "orange" : ""));
} }
function TalkPage_ion_list_54_ion_icon_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-icon", 43);
} }
const _c3 = function (a0, a1) { return { itemBackgroundPrivadoParaMi: a0, itemBackgroundPrivadoPorMi: a1 }; };
const _c4 = function (a0) { return { "text-align": a0 }; };
function TalkPage_ion_list_54_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-list", null, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item-sliding", null, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item-options", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_list_54_Template__svg_svg_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r3 = ctx.$implicit; const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.responderMensaje(item_r3, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-item-options", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionSwipe", function TalkPage_ion_list_54_Template_ion_item_options_ionSwipe_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r3 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.cambioOptions(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_list_54_Template_ion_icon_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r3 = ctx.$implicit; const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.editarMensaje(item_r3, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_list_54_Template_ion_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r3 = ctx.$implicit; const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.eliminarMensaje(item_r3, _r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-item", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-grid", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, TalkPage_ion_list_54_ion_row_26_Template, 6, 0, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, TalkPage_ion_list_54_ion_row_27_Template, 6, 1, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_list_54_Template__svg_svg_click_35_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const item_r3 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.mostrarInfoMensaje(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, TalkPage_ion_list_54_ion_icon_39_Template, 1, 3, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, TalkPage_ion_list_54_ion_icon_40_Template, 1, 0, "ion-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx_r1.conversationColor(item_r3))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](10, _c3, item_r3.EsPrivadoParaMi === true, item_r3.EsPrivadoPorMi === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c4, ctx_r1.textAlignConversation(item_r3)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.UsuarioNombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.FechaCorta);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.EsPrivadoParaMi || item_r3.EsPrivadoPorMi);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r3.MensajePadre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r3.Mensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.allUsersReadMessage(item_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.allUsersReadMessage(item_r3));
} }
function TalkPage_ion_footer_55_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-item", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_footer_55_ion_item_2_Template_ion_icon_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r20.cerrarMensajeResponder(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Respondiendo a ", ctx_r18.mensajeAResponser.UsuarioNombre, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.mensajeAResponser.Mensaje);
} }
function TalkPage_ion_footer_55_ion_row_5_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_footer_55_ion_row_5_Template_ion_icon_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r22.cleanPrivateSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Mensaje privado a: ", ctx_r19.usuarioPrivadoSelected, "");
} }
function TalkPage_ion_footer_55_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-footer", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TalkPage_ion_footer_55_ion_item_2_Template, 6, 2, "ion-item", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, TalkPage_ion_footer_55_ion_row_5_Template, 7, 1, "ion-row", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "textarea", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function TalkPage_ion_footer_55_Template_textarea_input_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r24.onKeyDownHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-grid");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-row", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-col", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_footer_55_Template_ion_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r26.openModalUserPrivate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Privado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_ion_footer_55_Template_ion_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r25); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r27.enviarMensaje(ctx_r27.formEnvioMensaje.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Enviar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r2.formEnvioMensaje);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.mensajeAResponser);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.usuarioPrivadoSelected);
} }
class TalkPage {
    constructor(alertController, talkService, cacheService, formBuilder, storage, popoverController, toastCtrl, elemRef) {
        this.alertController = alertController;
        this.talkService = talkService;
        this.cacheService = cacheService;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.popoverController = popoverController;
        this.toastCtrl = toastCtrl;
        this.elemRef = elemRef;
        this.iconHabilitarUsuario = 'lock-open-outline';
        this.mostrarUsuarioSeleccionado = false;
        this.usuariosInactivosSeleccionados = [];
        this.idsUsuariosInactivosSeleccionados = [];
        this.idsÜsuariosPrivadosSeleccionados = [];
        this.mostrarOpcionesMenu = true;
        this.ocultarFooterPorRolesHistoricos = true;
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const rolesHistoricos = this.talkService.getRolesHistoricos();
            this.idUsuario = yield this.getInfoUser();
            const encontro = rolesHistoricos.find(item => item === this.idUsuario);
            if (encontro) {
                this.ocultarFooterPorRolesHistoricos = false;
            }
            setTimeout(() => {
                debugger;
                let shadow = document.querySelector('.conversation-color');
            }, 200);
        });
    }
    ngOnInit() {
        this.usuarioPrivadoSelected = '';
        this.informacionConversacionSeleccionada = this.talkService.getSelectedConversation();
        this.createFormSend();
        this.validarEstadoUsuario();
    }
    ngAfterViewInit() {
        debugger;
        let y = this.ionItems;
        let shadow = document.querySelector('.conversation-color');
        let elements = this.elemRef.nativeElement.querySelectorAll('.conversation-color');
        let x = document.getElementsByClassName('conversation-color');
    }
    ionViewDidEnter() {
        debugger;
        this.getInfoConversation();
        let y = this.ionItems;
        let shadow = document.querySelector('.conversation-color');
        let elements = this.elemRef.nativeElement.querySelectorAll('.conversation-color');
        let x = document.getElementsByClassName('conversation-color');
    }
    createFormSend() {
        this.formEnvioMensaje = this.formBuilder.group({
            send: [''],
            mensajePrivado: [''],
        });
    }
    getInfoConversation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const pPKConversacion = this.informacionConversacionSeleccionada.PKConversacion;
            const infoUsuarioIngresado = yield this.storage.get('sesion');
            const idUSuario = infoUsuarioIngresado.idRegistro;
            debugger;
            // tslint:disable-next-line: deprecation
            this.talkService.getMensajes(pPKConversacion, idUSuario).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                debugger;
                if (response.IsOk === true) {
                    const mensajesConversacion = yield this.mostrarMensajes(response.Respuesta);
                    this.mensajes = mensajesConversacion;
                }
            }));
        });
    }
    mostrarMensajes(mensajes) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            const idUsuario = yield this.getInfoUser();
            const mensajesConversacion = [];
            mensajes.forEach(element => {
                debugger;
                const mensaje = element;
                if (mensaje.Privado.length === 0) {
                    mensajesConversacion.push(mensaje);
                }
                else {
                    if (mensaje.EsPrivadoPorMi) {
                        mensajesConversacion.push(mensaje);
                    }
                    else {
                        const encontro = mensaje.Privado.find(item => item.FKUsuario === idUsuario);
                        if (encontro) {
                            mensajesConversacion.push(mensaje);
                        }
                    }
                }
            });
            return mensajesConversacion;
        });
    }
    cambioOptions(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const infoUsuarioIngresado = yield this.storage.get('sesion');
            const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);
            if (item.FKUsuario !== idUSuario) {
                this.lista.closeSlidingItems();
            }
        });
    }
    validarEstadoUsuario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const infoUsuarioIngresado = yield this.storage.get('sesion');
            const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);
            const encontro = this.informacionConversacionSeleccionada.Usuarios.find(item => item.FKUsuario === idUSuario);
            if (encontro) {
                if (encontro.Estado === 'A') {
                    this.iconHabilitarUsuario = 'lock-open-outline';
                }
                else {
                    this.iconHabilitarUsuario = 'lock-closed-outline';
                }
            }
        });
    }
    activarUsuario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // const ip = this.cacheService.getIpAddress();
            const ip = '';
            const infoUsuarioIngresado = yield this.storage.get('sesion');
            const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);
            const encontro = this.informacionConversacionSeleccionada.Usuarios.find(item => item.FKUsuario === idUSuario);
            if (encontro) {
                if (encontro.Estado === 'A') {
                    this.iconHabilitarUsuario = 'lock-open-outline';
                    // tslint:disable-next-line: max-line-length
                    this.talkService
                        .changeStateUser(encontro.PKConversacionUsuario, this.informacionConversacionSeleccionada.PKConversacion, 'I', ip, idUSuario)
                        .subscribe(response => {
                        if (response.IsOk === true) {
                            this.iconHabilitarUsuario = 'lock-closed-outline';
                            this.notification('Atención', 'Se actualizó el estado del usuario');
                        }
                    });
                }
                else {
                    this.iconHabilitarUsuario = 'lock-closed-outline';
                    // tslint:disable-next-line: max-line-length
                    this.talkService
                        .changeStateUser(encontro.PKConversacionUsuario, this.informacionConversacionSeleccionada.PKConversacion, 'A', ip, idUSuario)
                        .subscribe(response => {
                        if (response.IsOk === true) {
                            this.iconHabilitarUsuario = 'lock-open-outline';
                            this.notification('Atención', 'Se actualizó el estado del usuario');
                        }
                    });
                }
            }
        });
    }
    onKeyDownHandler(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let valorIngresado = event.data;
            if (valorIngresado === '@') {
                const usuariosInactivos = this.getUsuariosInactivos();
                if (usuariosInactivos.length > 0) {
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Usuarios Inactivos',
                        mode: 'ios',
                        inputs: usuariosInactivos,
                        buttons: [
                            {
                                text: 'Cancelar',
                                cssClass: 'secondary',
                                handler: () => {
                                    console.log('Confirm Cancel');
                                },
                            },
                            {
                                text: 'Aceptar',
                                handler: () => {
                                    console.log('Confirm Aceptar');
                                },
                            },
                        ],
                    });
                    yield alert.present();
                    const { data } = yield alert.onWillDismiss();
                    if (data.values !== undefined) {
                        this.usuariosInactivosSeleccionados.push(data.values);
                        this.mostrarUsuarioSeleccionado = true;
                        this.usuarioSeleccionado = data.values;
                        if (this.formEnvioMensaje.get('send').value === '') {
                            this.formEnvioMensaje.get('send').setValue(`@${this.usuarioSeleccionado}`);
                        }
                        else {
                            const dataIngresada = this.formEnvioMensaje.get('send').value;
                            this.formEnvioMensaje.get('send').setValue(`@${this.usuarioSeleccionado} ${dataIngresada}`);
                        }
                    }
                }
                else {
                    this.notification('Atención', 'La comunicación seleccionada no tiene usuarios inactivos');
                }
            }
            valorIngresado = '';
        });
    }
    getUsuariosInactivos() {
        const usuariosInactivos = [];
        const usuariosConversacion = this.talkService.getSelectedConversation();
        usuariosConversacion.Usuarios.forEach(element => {
            if (element.Estado === 'I') {
                const objUsuario = {
                    name: `${element.UsuarioNombre}`,
                    type: 'radio',
                    label: `${element.UsuarioNombre}`,
                    value: `${element.UsuarioNombre}`,
                };
                usuariosInactivos.push(objUsuario);
            }
        });
        return usuariosInactivos;
    }
    openModalUserPrivate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let data2;
            // tslint:disable-next-line: no-shadowed-variable
            const handlerData = data => {
                data2 = data;
            };
            const usuarios = [];
            this.informacionConversacionSeleccionada.Usuarios.forEach(element => {
                const objUsuarios = {
                    name: `${element.UsuarioNombre}`,
                    type: 'checkbox',
                    label: `${element.UsuarioNombre}`,
                    value: `${element.UsuarioNombre}`,
                    valor: `${element}`,
                };
                usuarios.push(objUsuarios);
            });
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                mode: 'ios',
                header: 'Seleccione persona para el mensaje privado',
                inputs: usuarios,
                buttons: [
                    {
                        text: 'Cancelar',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        },
                    },
                    {
                        text: 'Aceptar',
                        handler: handlerData,
                    },
                ],
            });
            yield alert.present();
            const { data } = yield alert.onWillDismiss();
            if (data.values.length >= 1) {
                const usuariosSeleccionados = data.values;
                this.idsÜsuariosPrivadosSeleccionados = [];
                const usuariosConversacion = this.informacionConversacionSeleccionada.Usuarios;
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < usuariosConversacion.length; i++) {
                    const usuario = usuariosConversacion[i];
                    const encontro = usuariosSeleccionados.find(item => item === usuario.UsuarioNombre);
                    if (encontro) {
                        this.idsÜsuariosPrivadosSeleccionados.push(usuario.FKUsuario);
                    }
                }
                this.usuarioPrivadoSelected = usuariosSeleccionados.toString();
            }
        });
    }
    cleanPrivateSelected() {
        this.usuarioPrivadoSelected = '';
    }
    responderMensaje(mensaje, slidingItem) {
        this.mensajeAResponser = mensaje;
        // this.usuarioPrivadoSelected = mensaje;
        slidingItem.close();
    }
    presentToastEmptyConversation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Debes diligenciar el cuerpo de la comunicación.',
                duration: 3000,
            });
            toast.present();
        });
    }
    enviarMensaje(nuevoMensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            debugger;
            if (!nuevoMensaje.send || nuevoMensaje.send.length == 0) {
                this.presentToastEmptyConversation();
                return;
            }
            const idUsuario = yield this.getInfoUser();
            let usuariosPrivados = this.idsÜsuariosPrivadosSeleccionados;
            if (usuariosPrivados.length >= 1) {
                usuariosPrivados = this.idsÜsuariosPrivadosSeleccionados;
            }
            else {
                usuariosPrivados = [];
            }
            let idMensajePadre = 0;
            if (this.mensajeAResponser) {
                idMensajePadre = this.mensajeAResponser.PKConversacionMensaje;
                if (this.mensajeAResponser.Privado.length >= 1) {
                    const usuariosPrivadosRespuesta = [];
                    this.mensajeAResponser.Privado.forEach(element => {
                        usuariosPrivadosRespuesta.push(element.FKUsuario);
                    });
                    usuariosPrivados = usuariosPrivadosRespuesta;
                }
            }
            if (this.usuariosInactivosSeleccionados.length >= 1) {
                const usuariosConversacion = this.informacionConversacionSeleccionada.Usuarios;
                usuariosConversacion.forEach(element => {
                    const encontro = this.usuariosInactivosSeleccionados.find(item => item === element.UsuarioNombre);
                    if (encontro) {
                        this.idsUsuariosInactivosSeleccionados.push(element.FKUsuario);
                    }
                });
            }
            const mensaje = {
                PKConversacionMensaje: -1,
                PKConversacion: this.informacionConversacionSeleccionada.PKConversacion,
                PKUsuario: idUsuario,
                Mensaje: nuevoMensaje.send,
                UidMensajeRespuesta: idMensajePadre,
                LstUsuariosMensajePrivado: usuariosPrivados,
                LstUsuariosActivar: this.idsUsuariosInactivosSeleccionados,
                IP: '000.000.000.000',
            };
            // tslint:disable-next-line: deprecation
            this.talkService.saveMessageConversation(mensaje).subscribe(response => {
                debugger;
                if (response.IsOk === true) {
                    this.formEnvioMensaje.get('send').reset();
                    this.mensajeAResponser = '';
                    this.idsÜsuariosPrivadosSeleccionados = [];
                    this.idsUsuariosInactivosSeleccionados = [];
                    this.usuarioPrivadoSelected = '';
                    this.getInfoConversation();
                }
            });
        });
    }
    cerrarMensajeResponder() {
        this.mensajeAResponser = undefined;
    }
    mostrarInfoMensaje(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idUser = yield this.getInfoUser();
            debugger;
            const usuariosLeidos = this.mostrarUsuariosLeidos(mensaje.FKUsuario, mensaje.Leido);
            const usuariosSinLeer = this.mostrarUsuariosNoLeidos(mensaje.FKUsuario, mensaje.Leido);
            const alert = yield this.alertController.create({
                cssClass: 'textoParrafo',
                mode: 'ios',
                header: 'Detalle del mensaje',
                message: `<p>
      <strong>Mensaje: </strong> ${mensaje.Mensaje}
      <strong>Enviado por: </strong> ${mensaje.UsuarioNombre}
      <strong>Fecha: </strong> ${mensaje.FechaCorta}
      <strong style="color:blue">Leido por: </strong> ${usuariosLeidos}
      <strong>Pendiente por leer: </strong> ${usuariosSinLeer}
      </p>`,
                buttons: ['ACEPTAR'],
            });
            yield alert.present();
        });
    }
    mostrarUsuariosLeidos(idUser, usuarios) {
        const usuariosLeidos = [];
        usuarios.forEach(element => {
            debugger;
            if (element.FKUsuario != idUser) {
                const nombre = element.UsuarioNombre;
                usuariosLeidos.push(nombre);
            }
        });
        return usuariosLeidos.toString() == '' ? 'Ninguno.' : usuariosLeidos.toString();
    }
    allUsersReadMessage(message) {
        return this.informacionConversacionSeleccionada.Usuarios.length == message.Leido.length;
    }
    conversationColor(message) {
        if (this.idUsuario == message.FKUsuario) {
            if (message.EsPrivadoPorMi)
                return 'chatgreen';
            else
                return 'chatblue';
        }
        else {
            if (message.EsPrivadoParaMi)
                return 'chatgreen';
            else
                return 'chatwhite';
        }
    }
    textAlignConversation(message) {
        return this.idUsuario == message.FKUsuario ? 'left' : 'right';
    }
    mostrarUsuariosNoLeidos(idUser, usuarios) {
        let usuariosSinLeer = [];
        const usuariosConversacion = this.informacionConversacionSeleccionada.Usuarios;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < usuariosConversacion.length; i++) {
            const usuario = usuariosConversacion[i];
            const encontro = usuarios.find(item => item.FKUsuario === usuario.FKUsuario);
            if (!encontro) {
                usuariosSinLeer.push(usuario.UsuarioNombre);
            }
        }
        usuariosSinLeer.filter(user => user.FKUsuario != idUser);
        return usuariosSinLeer.toString() == '' ? 'Ninguno.' : usuariosSinLeer.toString();
    }
    eliminarMensaje(mensaje, slidingItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idUsuario = yield this.getInfoUser();
            slidingItem.close();
            if (mensaje.Leido.length === 0) {
                const alert = yield this.alertController.create({
                    mode: 'ios',
                    header: 'Eliminar Mensaje',
                    message: `Esta seguro que desea eliminar el mensaje de esta conversación`,
                    buttons: [
                        {
                            text: 'CANCELAR',
                        },
                        {
                            text: 'ACEPTAR',
                            handler: () => {
                                const objEliminarMensaje = {
                                    PKConversacionMensaje: mensaje.PKConversacionMensaje,
                                    PKUsuario: idUsuario,
                                    Mensaje: mensaje.Mensaje,
                                    Eliminar: true,
                                };
                                // tslint:disable-next-line: deprecation
                                this.talkService.deleteMessage(objEliminarMensaje).subscribe(response => {
                                    if (response.IsOk === true) {
                                        this.notification('Atención', 'Mensaje eliminado con exito');
                                        this.getInfoConversation();
                                    }
                                });
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                const alertNoSePudoEliminar = yield this.alertController.create({
                    mode: 'ios',
                    header: 'Eliminar Mensaje',
                    message: `No se puede eliminar este mensaje, ya fue visto por algun integrante de la conversación.`,
                    buttons: ['ACEPTAR'],
                });
                yield alertNoSePudoEliminar.present();
            }
        });
    }
    editarMensaje(mensaje, slidingItem) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const idUsuario = yield this.getInfoUser();
            slidingItem.close();
            if (mensaje.Leido.length === 0) {
                const alert = yield this.alertController.create({
                    mode: 'ios',
                    header: 'Editar Mensaje',
                    message: `${mensaje.Mensaje}`,
                    inputs: [
                        {
                            name: 'editarMensaje',
                            id: 'editarMensaje',
                            type: 'textarea',
                            placeholder: 'Editar Mensaje',
                        },
                    ],
                    buttons: [
                        {
                            text: 'Cancelar',
                            handler: () => {
                                console.log('editar Cancel');
                            },
                        },
                        {
                            text: 'Aceptar',
                            handler: data => {
                                const nuevoMensaje = data.editarMensaje;
                                const objMensajeAEditar = {
                                    PKConversacionMensaje: mensaje.PKConversacionMensaje,
                                    PKUsuario: idUsuario,
                                    Mensaje: nuevoMensaje,
                                    Eliminar: false,
                                };
                                // tslint:disable-next-line: deprecation
                                this.talkService.deleteMessage(objMensajeAEditar).subscribe(response => {
                                    if (response.IsOk === true) {
                                        this.notification('Atención', 'Mensaje editado con exito');
                                        this.getInfoConversation();
                                    }
                                });
                            },
                        },
                    ],
                });
                yield alert.present();
            }
            else {
                const alertNoSePudoEditar = yield this.alertController.create({
                    mode: 'ios',
                    header: 'Editar Mensaje',
                    message: `No se puede editar este mensaje, ya fue visto por algún integrante de la conversación.`,
                    buttons: ['ACEPTAR'],
                });
                yield alertNoSePudoEditar.present();
            }
        });
    }
    notification(titulo, notificacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: titulo,
                backdropDismiss: false,
                mode: 'ios',
                message: notificacion,
                buttons: ['ACEPTAR'],
            });
            yield alert.present();
            alert.onDidDismiss();
        });
    }
    getInfoUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const infoUsuarioIngresado = yield this.storage.get('sesion');
            const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);
            return idUSuario;
        });
    }
}
TalkPage.ɵfac = function TalkPage_Factory(t) { return new (t || TalkPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_talk_talk_service__WEBPACK_IMPORTED_MODULE_3__["TalkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
TalkPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TalkPage, selectors: [["app-talk"]], viewQuery: function TalkPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.lista = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ionItems = _t);
    } }, decls: 56, vars: 7, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "u/list-communications"], ["size", "10"], [1, "titulo"], ["content", ""], ["size", "12"], ["lines", "none", "color", "secondary"], ["src", "../../../../assets/icon/icono_comunicaciones.svg", "alt", "iconItem", 1, "imgMenu"], [1, "ion-text-center"], ["mode", "ios", "colines", "none", "lor", "tertiary"], ["lines", "none"], ["lines", "none", 2, "padding-top", "35px"], ["position", "stacked"], ["start", "end", 3, "name", "click"], [4, "ngFor", "ngForOf"], ["class", "ion-no-border", 4, "ngIf"], ["Lista", ""], ["slidingItem", ""], ["side", "start"], ["mode", "ios"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-reply-fill", 2, "width", "2rem", "height", "2rem", "color", "white", 3, "click"], ["d", "M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"], [3, "ionSwipe"], ["mode", "ios", "side", "end"], ["slot", "icon-only", "name", "create-outline", 3, "click"], ["slot", "icon-only", "name", "trash-outline", 3, "click"], [3, "color", "ngClass"], [3, "ngStyle"], [1, "parrafoMensaje"], [2, "font-size", "0.8rem"], [4, "ngIf"], [2, "width", "fit-content", "height", "fit-content", "margin-left", "1rem"], [2, "width", "inherit", "height", "inherit", "margin-bottom", "1rem"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-chat-text", 2, "width", "2rem", "height", "2rem", "color", "orange", 3, "click"], ["d", "M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"], ["d", "M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"], [2, "width", "inherit", "height", "inherit"], ["style", "width: 2rem; height: 2rem", "slot", "end", "name", "checkmark", 3, "ngStyle", 4, "ngIf"], ["style", "width: 2rem; height: 2rem; color: orange", "name", "checkmark-done-outline", "slot", "end", 4, "ngIf"], [2, "font-size", "12px", "color", "#516f7a"], ["slot", "end", "name", "checkmark", 2, "width", "2rem", "height", "2rem", 3, "ngStyle"], ["name", "checkmark-done-outline", "slot", "end", 2, "width", "2rem", "height", "2rem", "color", "orange"], [1, "ion-no-border"], [3, "formGroup"], ["color", "tertiary", "class", "itemResponder", 4, "ngIf"], ["formControlName", "send", "rows", "5", 1, "bg-light", "mt-3", "pl-1", "textMensaje", 2, "height", "100p", "border-radius", "10px", 3, "input"], ["justify-content-around", ""], ["size", "6"], ["expand", "block", "color", "tertiary", 3, "click"], ["expand", "block", "color", "primary", 3, "click"], ["color", "tertiary", 1, "itemResponder"], ["name", "close-circle-outline", "size", "small", "slot", "end", 3, "click"], [2, "font-size", "13px", "margin", "0px"]], template: function TalkPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Conversaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "ion-avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Comunicaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-card", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ion-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Raz\u00F3n Social");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Tipo - N\u00FAmero documento");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "ion-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Tema de conversaci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TalkPage_Template_ion_icon_click_43_listener() { return ctx.activarUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "ion-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "ion-avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Mensaje");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, TalkPage_ion_list_54_Template, 41, 15, "ion-list", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](55, TalkPage_ion_footer_55_Template, 17, 3, "ion-footer", 17);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.informacionConversacionSeleccionada.Empresa);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.informacionConversacionSeleccionada.EmpresaTipoDocumento, " - ", ctx.informacionConversacionSeleccionada.EmpresaDocumento, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.informacionConversacionSeleccionada.Tema);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("name", ctx.iconHabilitarUsuario);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.mensajes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ocultarFooterPorRolesHistoricos);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemSliding"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOptions"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItemOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonFooter"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  width: 100%;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: none;\n  height: 80px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  border-radius: 15px;\n  font-size: 16.4px;\n  font-weight: bold;\n  --min-height: 70px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 30px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding-bottom: 16px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  width: 85%;\n}\nion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0px;\n}\nion-footer[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 50px;\n}\nion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .textMensaje[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 65px;\n  border-radius: 50px;\n  outline: none;\n  margin-bottom: 10px;\n}\n.itemResponder[_ngcontent-%COMP%] {\n  --border-radius: 15px;\n  padding: 10px;\n}\n.imgMenu[_ngcontent-%COMP%] {\n  width: 100% !important;\n  height: 145% !important;\n  transform: translateY(-8px);\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 20px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n  margin-top: 10px;\n}\n.itemBackgroundPrivadoParaMi[_ngcontent-%COMP%] {\n  --background: #ffd96a;\n  height: auto !important;\n  word-wrap: break-word !important;\n}\n.itemBackgroundPrivadoPorMi[_ngcontent-%COMP%] {\n  --background: #ffd96a;\n  height: auto !important;\n  word-wrap: break-word !important;\n}\n.parrafoMensaje[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto !important;\n  word-wrap: break-word !important;\n}\nion-list[_ngcontent-%COMP%]   ion-item.conversation[_ngcontent-%COMP%] {\n  --ion-background-color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbXVuaWNhdGlvbnMvdGFsay9DOlxcVXNlcnNcXGNhbHZhcmFkb1xcRG9jdW1lbnRzXFxwcm95ZWN0b1xcQWN0dWFsXFxhbGlzc3RhX3N1bVxcVHJ1bmtcXDIwMjQwNjA3MS9zcmNcXGFwcFxccGFnZXNcXGNvbW11bmljYXRpb25zXFx0YWxrXFx0YWxrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbXVuaWNhdGlvbnMvdGFsay90YWxrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBREVNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FDQVI7QURDUTtFQUNFLFdBQUE7QUNDVjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FEVVE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNQVjtBRFFVO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ05aO0FEU1E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDUFY7QURZRTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtBQ1ZKO0FEWU07RUFDRSxVQUFBO0FDVlI7QURjRTtFQUNFLFdBQUE7QUNaSjtBRG9CUTtFQUNFLHFCQUFBO0FDakJWO0FEdUJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ3JCTjtBRDBCQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtBQ3ZCRjtBRDBCQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQ3ZCRjtBRDBCQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDdkJGO0FEMEJBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDdkJGO0FEMEJBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FDdkJGO0FEMEJBO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7QUN2QkY7QUQwQkE7RUFDRSx3Q0FBQTtBQ3ZCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbW11bmljYXRpb25zL3RhbGsvdGFsay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgaW9uLWdyaWQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBpb24tcm93IHtcbiAgICAgIGlvbi1jb2wge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgaW9uLWdyaWQge1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIGlvbi1saXN0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTYuNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICYgLnRpdHVsb09wY2lvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaW9uLWNhcmQge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICBpb24taXRlbSB7XG4gICAgICBpb24tbGlzdCB7XG4gICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHAge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG59XG5cbmlvbi1mb290ZXIge1xuICBpb24tZ3JpZCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlvbi1pdGVtIHtcbiAgICAudGV4dE1lbnNhamUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDY1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICB9XG59XG5cbi5pdGVtUmVzcG9uZGVyIHtcbiAgLS1ib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW1nTWVudSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTQ1JSAhaW1wb3J0YW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLThweCk7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLml0ZW1CYWNrZ3JvdW5kUHJpdmFkb1BhcmFNaSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZDk2YTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbUJhY2tncm91bmRQcml2YWRvUG9yTWkge1xuICAtLWJhY2tncm91bmQ6ICNmZmQ5NmE7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbn1cblxuLnBhcnJhZm9NZW5zYWplIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3QgaW9uLWl0ZW0uY29udmVyc2F0aW9uIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbiIsImlvbi1oZWFkZXIgaW9uLWdyaWQge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgaGVpZ2h0OiA4MHB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgZm9udC1zaXplOiAxNi40cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtLW1pbi1oZWlnaHQ6IDcwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnRpdHVsb09wY2lvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIGlvbi1saXN0IHtcbiAgd2lkdGg6IDg1JTtcbn1cbmlvbi1jb250ZW50IHAge1xuICBtYXJnaW46IDBweDtcbn1cblxuaW9uLWZvb3RlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbmlvbi1mb290ZXIgaW9uLWl0ZW0gLnRleHRNZW5zYWplIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLml0ZW1SZXNwb25kZXIge1xuICAtLWJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbWdNZW51IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNDUlICFpbXBvcnRhbnQ7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uaXRlbUJhY2tncm91bmRQcml2YWRvUGFyYU1pIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZkOTZhO1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtQmFja2dyb3VuZFByaXZhZG9Qb3JNaSB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZDk2YTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xufVxuXG4ucGFycmFmb01lbnNhamUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdCBpb24taXRlbS5jb252ZXJzYXRpb24ge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TalkPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-talk',
                templateUrl: './talk.page.html',
                styleUrls: ['./talk.page.scss'],
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }, { type: _services_talk_talk_service__WEBPACK_IMPORTED_MODULE_3__["TalkService"] }, { type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['content']
        }], lista: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['Lista']
        }], ionItems: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=communications-talk-talk-module-es2015.js.map