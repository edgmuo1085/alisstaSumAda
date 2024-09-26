(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["companies-companies-module"],{

/***/ "./src/app/pages/companies/companies-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/companies/companies-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageRoutingModule", function() { return CompaniesPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _companies_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companies.page */ "./src/app/pages/companies/companies.page.ts");





const routes = [
    {
        path: '',
        component: _companies_page__WEBPACK_IMPORTED_MODULE_2__["CompaniesPage"],
    },
    {
        path: 'list',
        loadChildren: () => Promise.all(/*! import() | list-list-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("common"), __webpack_require__.e("list-list-module")]).then(__webpack_require__.bind(null, /*! ./list/list.module */ "./src/app/pages/companies/list/list.module.ts")).then(m => m.ListPageModule),
    },
    {
        path: 'list/:id',
        loadChildren: () => Promise.all(/*! import() | details-details-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("details-details-module")]).then(__webpack_require__.bind(null, /*! ./details/details.module */ "./src/app/pages/companies/details/details.module.ts")).then(m => m.DetailsPageModule),
    },
    {
        path: 'list/:id/edit-company',
        loadChildren: () => Promise.all(/*! import() | edit-company-edit-company-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("edit-company-edit-company-module")]).then(__webpack_require__.bind(null, /*! ./edit-company/edit-company.module */ "./src/app/pages/companies/edit-company/edit-company.module.ts")).then(m => m.EditCompanyPageModule),
    },
    {
        path: 'list/:id/edit-address',
        loadChildren: () => Promise.all(/*! import() | edit-address-edit-address-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("edit-address-edit-address-module")]).then(__webpack_require__.bind(null, /*! ./edit-address/edit-address.module */ "./src/app/pages/companies/edit-address/edit-address.module.ts")).then(m => m.EditAddressPageModule),
    },
    {
        path: 'list/:id/contact-list',
        loadChildren: () => Promise.all(/*! import() | contact-list-contact-list-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("contact-list-contact-list-module")]).then(__webpack_require__.bind(null, /*! ./contact-list/contact-list.module */ "./src/app/pages/companies/contact-list/contact-list.module.ts")).then(m => m.ContactListPageModule),
    },
    {
        path: 'list/:id/contact-list/edit-contact',
        loadChildren: () => Promise.all(/*! import() | edit-contact-edit-contact-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("edit-contact-edit-contact-module")]).then(__webpack_require__.bind(null, /*! ./edit-contact/edit-contact.module */ "./src/app/pages/companies/edit-contact/edit-contact.module.ts")).then(m => m.EditContactPageModule),
    },
    {
        path: 'list/:id/summary',
        loadChildren: () => Promise.all(/*! import() | summary-summary-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("summary-summary-module")]).then(__webpack_require__.bind(null, /*! ./summary/summary.module */ "./src/app/pages/companies/summary/summary.module.ts")).then(m => m.SummaryPageModule),
    },
    {
        path: 'list/:id/signature',
        loadChildren: () => Promise.all(/*! import() | signature-signature-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("default~pages-auth-login-login-module~settings-settings-module~signature-signature-module"), __webpack_require__.e("common"), __webpack_require__.e("signature-signature-module")]).then(__webpack_require__.bind(null, /*! ./signature/signature.module */ "./src/app/pages/companies/signature/signature.module.ts")).then(m => m.SignaturePageModule),
    },
    {
        path: 'list-confirmed',
        loadChildren: () => Promise.all(/*! import() | list-confirmed-list-confirmed-module */[__webpack_require__.e("default~contact-list-contact-list-module~details-details-module~edit-address-edit-address-module~edi~22cf7fc4"), __webpack_require__.e("common"), __webpack_require__.e("list-confirmed-list-confirmed-module")]).then(__webpack_require__.bind(null, /*! ./list-confirmed/list-confirmed.module */ "./src/app/pages/companies/list-confirmed/list-confirmed.module.ts")).then(m => m.ListConfirmedPageModule),
    },
];
class CompaniesPageRoutingModule {
}
CompaniesPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CompaniesPageRoutingModule });
CompaniesPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CompaniesPageRoutingModule_Factory(t) { return new (t || CompaniesPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CompaniesPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/companies.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/companies/companies.module.ts ***!
  \*****************************************************/
/*! exports provided: CompaniesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPageModule", function() { return CompaniesPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _companies_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./companies-routing.module */ "./src/app/pages/companies/companies-routing.module.ts");
/* harmony import */ var _companies_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./companies.page */ "./src/app/pages/companies/companies.page.ts");








class CompaniesPageModule {
}
CompaniesPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CompaniesPageModule });
CompaniesPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CompaniesPageModule_Factory(t) { return new (t || CompaniesPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _companies_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompaniesPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CompaniesPageModule, { declarations: [_companies_page__WEBPACK_IMPORTED_MODULE_6__["CompaniesPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _companies_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompaniesPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CompaniesPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_4__["ComponentsModule"], _companies_routing_module__WEBPACK_IMPORTED_MODULE_5__["CompaniesPageRoutingModule"]],
                declarations: [_companies_page__WEBPACK_IMPORTED_MODULE_6__["CompaniesPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/companies.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/companies/companies.page.ts ***!
  \***************************************************/
/*! exports provided: CompaniesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesPage", function() { return CompaniesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class CompaniesPage {
    constructor() { }
    ngOnInit() { }
}
CompaniesPage.ɵfac = function CompaniesPage_Factory(t) { return new (t || CompaniesPage)(); };
CompaniesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompaniesPage, selectors: [["app-companies"]], decls: 18, vars: 0, consts: [[1, "backgroundContent"], ["mode", "ios"], ["routerLink", "./list"], ["src", "../../../assets/icon/icono_visitas_pendientes.svg"], ["routerLink", "./list-confirmed"], ["src", "../../../assets/icon/icono_tareas_enviar.svg"]], template: function CompaniesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ion-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sincronizaci\u00F3n empresas migradas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ion-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Empresas por enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["RouterLinkDelegate"]], styles: ["ion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 0;\n  border: 1px solid #95a6b1;\n}\nion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nion-content[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL0M6XFxVc2Vyc1xcY2FsdmFyYWRvXFxEb2N1bWVudHNcXHByb3llY3RvXFxBY3R1YWxcXGFsaXNzdGFfc3VtXFxCcmFuY2hlc1xcUmV2aXNpb25fVmVyc2lvbl9BY3R1YWxpemFkYV8yMDI0MDkyMC9zcmNcXGFwcFxccGFnZXNcXGNvbXBhbmllc1xcY29tcGFuaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2NvbXBhbmllcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0FDQUo7QURFSTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUNBTjtBREdRO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDRFY7QURHVTtFQUNFLGtCQUFBO0VBQ0EsMEJBQUE7QUNEWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9jb21wYW5pZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAmIGlvbi1jb2wge1xuICAgIHBhZGRpbmc6IDE1cHg7XG5cbiAgICAmIGlvbi1jYXJkIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NWE2YjE7XG5cbiAgICAgICYgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgICYgYSB7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICAgJiBoNCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImlvbi1jb250ZW50IGlvbi1jb2wge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNvbCBpb24tY2FyZCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTVhNmIxO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNvbCBpb24tY2FyZCBpb24tY2FyZC1jb250ZW50IGEgaDQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompaniesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-companies',
                templateUrl: './companies.page.html',
                styleUrls: ['./companies.page.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=companies-companies-module-es2015.js.map