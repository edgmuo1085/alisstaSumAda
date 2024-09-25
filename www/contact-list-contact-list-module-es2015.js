(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-list-contact-list-module"],{

/***/ "./src/app/pages/companies/contact-list/contact-list-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/companies/contact-list/contact-list-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContactListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPageRoutingModule", function() { return ContactListPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _contact_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-list.page */ "./src/app/pages/companies/contact-list/contact-list.page.ts");





const routes = [
    {
        path: '',
        component: _contact_list_page__WEBPACK_IMPORTED_MODULE_2__["ContactListPage"],
    },
];
class ContactListPageRoutingModule {
}
ContactListPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactListPageRoutingModule });
ContactListPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactListPageRoutingModule_Factory(t) { return new (t || ContactListPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactListPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/contact-list/contact-list.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/companies/contact-list/contact-list.module.ts ***!
  \*********************************************************************/
/*! exports provided: ContactListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPageModule", function() { return ContactListPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_list_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-list-routing.module */ "./src/app/pages/companies/contact-list/contact-list-routing.module.ts");
/* harmony import */ var _contact_list_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-list.page */ "./src/app/pages/companies/contact-list/contact-list.page.ts");







class ContactListPageModule {
}
ContactListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContactListPageModule });
ContactListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContactListPageModule_Factory(t) { return new (t || ContactListPageModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _contact_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactListPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContactListPageModule, { declarations: [_contact_list_page__WEBPACK_IMPORTED_MODULE_5__["ContactListPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _contact_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactListPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _contact_list_routing_module__WEBPACK_IMPORTED_MODULE_4__["ContactListPageRoutingModule"]],
                declarations: [_contact_list_page__WEBPACK_IMPORTED_MODULE_5__["ContactListPage"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/companies/contact-list/contact-list.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/companies/contact-list/contact-list.page.ts ***!
  \*******************************************************************/
/*! exports provided: ContactListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListPage", function() { return ContactListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/companies/companies.service */ "./src/app/services/companies/companies.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










function ContactListPage_ion_card_11_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const c_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", c_r1.strSiglaTipoDoc, " ", c_r1.strNumeroDocumento, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r1.strSexo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r1.strCelular, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r1.strTelefono, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", c_r1.strEmail, " ");
} }
function ContactListPage_ion_card_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactListPage_ion_card_11_Template_ion_icon_click_8_listener() { const c_r1 = ctx.$implicit; return c_r1.__expanded = !c_r1.__expanded; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "ion-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ContactListPage_ion_card_11_ng_container_10_Template, 11, 6, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ion-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactListPage_ion_card_11_Template_ion_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const c_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.edit(c_r1.strNumeroDocumento); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactListPage_ion_card_11_Template_ion_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const c_r1 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.remove(c_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.getContactName(c_r1), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r1.strPapelRespresentacion);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("name", c_r1.__expanded ? "chevron-up-outline" : "chevron-down-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", c_r1.__expanded);
} }
/**
 * Componente para la vista de listado de personas de contacto para la empresa actual.
 */
class ContactListPage {
    constructor(route, companiesService, router, alertCtrl, ref) {
        this.route = route;
        this.companiesService = companiesService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.ref = ref;
    }
    ionViewWillEnter() {
        this.getContacts();
    }
    /**
     * Redirige a la vista para crear un nuevo contacto.
     */
    add() {
        this.edit();
    }
    /**
     * Redirige a la vista de edición de contactos.
     *
     * @param id Número del documento del contacto a editar.
     */
    edit(id) {
        this.router.navigate(['edit-contact'], { relativeTo: this.route, queryParams: { id } });
    }
    /**
     * Elimina el contacto indicado de la lista de contactos para esta empresa.
     *
     * @param contact
     */
    remove(contact) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const drop = () => {
                var _a;
                const index = this.contacts.findIndex(c => c === contact);
                this.contacts.splice(index, 1);
                const updated = (_a = this.company.__updated) !== null && _a !== void 0 ? _a : [];
                const found = updated.find((m) => m === 'contact-data');
                if (!found) {
                    updated.push('contact-data');
                    this.company.__updated = updated;
                }
                this.ref.detectChanges();
            };
            const alert = yield this.alertCtrl.create({
                header: 'Atención',
                mode: 'ios',
                message: '¿Realmente desea eliminar este contacto?',
                buttons: [
                    { text: 'Eliminar', role: 'drop', handler: drop },
                    { text: 'Cancelar', role: 'cancel' },
                ],
            });
            yield alert.present();
        });
    }
    /**
     * Cancela la edición de personas de contacto para la empresa.
     */
    cancel() {
        const id = this.route.snapshot.params.id;
        this.router.navigate([`/u/companies/list/${id}`], { replaceUrl: true });
    }
    /**
     * Obtiene el nombre completo del contacto.
     *
     * @param contact Contacto.
     */
    getContactName(contact) {
        var _a, _b, _c, _d;
        const primerNombre = (_a = contact.strPrimerNombre) !== null && _a !== void 0 ? _a : '';
        const segundoNombre = (_b = contact.strSegundoNombre) !== null && _b !== void 0 ? _b : '';
        const primerApellido = (_c = contact.strPrimerApellido) !== null && _c !== void 0 ? _c : '';
        const segundoApellido = (_d = contact.strSegundoApellido) !== null && _d !== void 0 ? _d : '';
        let name = `${primerNombre} ${segundoNombre} ${primerApellido} ${segundoApellido}`;
        name = name.replace(/\s+/g, ' ');
        name = name.trim();
        return name;
    }
    /**
     * Establece el listado de contactos para esta empresa.
     */
    getContacts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = +this.route.snapshot.params.id;
            try {
                this.company = yield this.companiesService.prepareCompany(id);
            }
            catch (_a) {
                this.company = this.companiesService.company;
            }
            if (!this.company) {
                this.cancel();
                return;
            }
            this.contacts = this.company.listaPersonasContacto;
        });
    }
}
ContactListPage.ɵfac = function ContactListPage_Factory(t) { return new (t || ContactListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
ContactListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactListPage, selectors: [["app-contact-list"]], decls: 15, vars: 1, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "backgroundContent", "ion-padding"], ["class", "ion-no-margin", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed", 1, "ion-padding"], [3, "click"], ["name", "add"], [1, "ion-no-margin"], [1, "header-wrapper"], [1, "title"], ["lines", "none"], ["lines", "none", 1, "role"], [4, "ngIf"], ["fill", "clear", "slot", "start", 3, "click"], ["fill", "clear", "slot", "end", 3, "click"]], template: function ContactListPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Actualizaci\u00F3n Contactos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ContactListPage_ion_card_11_Template, 16, 4, "ion-card", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "ion-fab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-fab-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactListPage_Template_ion_fab_button_click_13_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  padding: 0px;\n  text-align: left;\n  top: -50%;\n  transform: translateY(50%);\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  font-weight: bold;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.2rem;\n  white-space: normal;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item.role[_ngcontent-%COMP%] {\n  color: #3d4e5c;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  font-size: 1.5rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --inner-padding-start: 0;\n  --inner-padding-end: 0;\n  --inner-padding-bottom: 0;\n  --inner-padding-top: 0;\n  --background: inherit;\n  --color: inherit;\n  --min-height: auto;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1rem;\n}\nion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  font-size: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2NvbXBhbmllcy9jb250YWN0LWxpc3QvY29udGFjdC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tcGFuaWVzL2NvbnRhY3QtbGlzdC9jb250YWN0LWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER007RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdRO0VBQ0Usc0JBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtBQ0RWO0FES007RUFDRSxZQUFBO0FDSFI7QURVRTtFQUNFLG1CQUFBO0FDUEo7QURVTTtFQUNFLGFBQUE7QUNSUjtBRFVRO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDUlY7QURVVTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNSWjtBRFVZO0VBQ0UsY0FBQTtBQ1JkO0FEYVE7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7QUNYVjtBRGdCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZE47QURnQk07RUFDRSxtQkFBQTtBQ2RSO0FEb0JRO0VBQ0Usa0JBQUE7QUNsQlYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb21wYW5pZXMvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgJiBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuXG4gICAgJiBpb24tcm93IHtcbiAgICAgICYgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcblxuICAgICAgICAmIGlvbi10aXRsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICB0b3A6IC01MCU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJiBpb24tdG9vbGJhciB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuaW9uLWNvbnRlbnQge1xuICAmIGlvbi1jYXJkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgJiBpb24tY2FyZC1oZWFkZXIge1xuICAgICAgJiAuaGVhZGVyLXdyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICYgLnRpdGxlIHtcbiAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgICAgICAgICAmIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cbiAgICAgICAgICAgICYucm9sZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjM2Q0ZTVjO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICYgaW9uLWljb24ge1xuICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYgaW9uLWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLXN0YXJ0OiAwO1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAtLWlubmVyLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1iYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgLS1jb2xvcjogaW5oZXJpdDtcbiAgICAgIC0tbWluLWhlaWdodDogYXV0bztcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgICAgJiBpb24taXRlbSB7XG4gICAgICAgICYgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi10aXRsZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHRvcDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1jb250ZW50IGlvbi1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1jYXJkLWhlYWRlciAuaGVhZGVyLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIC5oZWFkZXItd3JhcHBlciAudGl0bGUge1xuICBmbGV4LWdyb3c6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtaGVhZGVyIC5oZWFkZXItd3JhcHBlciAudGl0bGUgaW9uLWl0ZW0ge1xuICBtYXJnaW4tYm90dG9tOiAwLjJyZW07XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLmhlYWRlci13cmFwcGVyIC50aXRsZSBpb24taXRlbS5yb2xlIHtcbiAgY29sb3I6ICMzZDRlNWM7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpb24tY2FyZC1oZWFkZXIgLmhlYWRlci13cmFwcGVyIGlvbi1pY29uIHtcbiAgZmxleC1ncm93OiAwO1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gIC0taW5uZXItcGFkZGluZy1ib3R0b206IDA7XG4gIC0taW5uZXItcGFkZGluZy10b3A6IDA7XG4gIC0tYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgLS1jb2xvcjogaW5oZXJpdDtcbiAgLS1taW4taGVpZ2h0OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgaW9uLWNhcmQtY29udGVudCBpb24taXRlbSBpb24tYnV0dG9uIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactListPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact-list',
                templateUrl: './contact-list.page.html',
                styleUrls: ['./contact-list.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: src_app_services_companies_companies_service__WEBPACK_IMPORTED_MODULE_4__["CompaniesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=contact-list-contact-list-module-es2015.js.map