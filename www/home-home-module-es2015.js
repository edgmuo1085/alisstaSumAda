(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");





const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_2__["HomePage"],
    },
];
class HomePageRoutingModule {
}
HomePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomePageRoutingModule });
HomePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomePageRoutingModule_Factory(t) { return new (t || HomePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









class HomePageModule {
}
HomePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomePageModule_Factory(t) { return new (t || HomePageModule)(); }, providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
                declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
                providers: [_ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/menu-configuracion.service */ "./src/app/services/menu-configuracion.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/storage.service */ "./src/app/storage.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function HomePage_ion_col_4_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePage_ion_col_4_ion_card_1_Template_ion_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const menuOpt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.optionSelectedMenu(menuOpt_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuOpt_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("padding-8", menuOpt_r1.title === "Actualizar Datos Empresa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", menuOpt_r1.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](menuOpt_r1.title);
} }
function HomePage_ion_col_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-col", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, HomePage_ion_col_4_ion_card_1_Template, 7, 4, "ion-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuOpt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", menuOpt_r1.show);
} }
/**
 * Componente de la vista de inicio.
 */
class HomePage {
    constructor(router, toastController, alertController, menuService, faio, platform, storageService) {
        this.router = router;
        this.toastController = toastController;
        this.alertController = alertController;
        this.menuService = menuService;
        this.faio = faio;
        this.platform = platform;
        this.storageService = storageService;
        this.isShowLoginWithFinger = false;
        this.isLoginWithFinger = false;
        this.isAutologin = false;
    }
    ngOnInit() {
        this.optMenuMain = this.menuService.getMenuMain();
        this.platform.ready().then(() => {
            this.faio
                .isAvailable()
                .then((ava) => {
                this.storageService
                    .get('isLoginWithFinger')
                    .then(result => {
                    if (result != null) {
                        this.isLoginWithFinger = result;
                    }
                })
                    .catch(e => {
                    console.log('error: ' + e);
                });
                this.storageService
                    .get('showLoginWithFinger')
                    .then(result => {
                    if (result != null) {
                        this.isLoginWithFinger = result;
                    }
                })
                    .catch(e => {
                    console.log('error: ' + e);
                });
                this.storageService
                    .get('autologin')
                    .then(result => {
                    if (result != null) {
                        this.isAutologin = result;
                    }
                    else {
                        this.storageService.set('autologin', true);
                    }
                    if (!this.isShowLoginWithFinger && !this.isLoginWithFinger && !this.isAutologin) {
                        this.presentAlertConfirm();
                    }
                })
                    .catch(e => {
                    console.log('error: ' + e);
                });
            })
                .catch((error) => {
                console.log(error);
            });
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¡Bienvenido!',
                mode: 'ios',
                message: '<strong>Hola! </strong>Detectamos ' +
                    'que tu dispositivo cuenta con TouchID/FaceID ' +
                    '¿Te gustaría iniciar sesión la próxima vez con esta tecnología?',
                buttons: [
                    {
                        text: 'Si',
                        handler: () => {
                            this.storageService.set('showLoginWithFinger', true);
                            this.storageService.set('activateFinger', true);
                            this.toastConfirmBiometric();
                        },
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            this.storageService.set('showLoginWithFinger', false);
                            this.storageService.set('activateFinger', false);
                            this.storageService.remove('valueOne');
                            this.storageService.remove('valueTwo');
                            this.storageService.remove('valueThree');
                            this.alertCancelBiometric();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    toastConfirmBiometric() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'TouchID/FaceID Activado',
                duration: 2000,
            });
            toast.present();
        });
    }
    alertCancelBiometric() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: '¡Recuerda!',
                message: 'Puedes cambiar tus ajustes desde el menú configuración.',
                buttons: [
                    {
                        text: 'Aceptar',
                    },
                ],
            });
            yield alert.present();
        });
    }
    optionSelectedMenu(menuSelected) {
        switch (menuSelected.title) {
            case 'Comunicaciones':
                this.router.navigateByUrl('u/list-communications');
                break;
            case 'Registro ejecución de actividades':
                this.router.navigateByUrl('u/execLog');
                break;
            case 'Eventos Positiva':
                this.router.navigateByUrl('u/consultEvent');
                break;
            case 'Actualizar Datos Empresa':
                this.router.navigateByUrl('u/companies');
                break;
        }
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"])); };
HomePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], decls: 6, vars: 3, consts: [[1, "backgroundContent"], ["size", "6", 4, "ngFor", "ngForOf"], ["size", "6"], ["mode", "ios", 3, "click", 4, "ngIf"], ["mode", "ios", 3, "click"], [1, "vertical-center"], [1, "center"], ["alt", "", 3, "src"], [1, "tituloOpcion"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-content", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, HomePage_ion_col_4_Template, 2, 1, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 1, ctx.optMenuMain));
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%] {\n  padding: 10px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  border-radius: 10px;\n  border: 1px solid #95a6b1;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n  width: 70%;\n  margin-top: 15px;\n}\nion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\nion-content[_ngcontent-%COMP%]   .padding-8[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxhQUFBO0FDRE47QURFTTtFQUNFLGFBQUE7QUNBUjtBRENRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0NWO0FEQ1E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NWO0FEQ1E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0NWO0FEQ1E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FDQ1Y7QURLRTtFQUNFLFlBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIGlvbi1ncmlkIHtcbiAgICBpb24tcm93IHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgaW9uLWNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5NWE2YjE7XG4gICAgICAgIH1cbiAgICAgICAgJiAudmVydGljYWwtY2VudGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgJiAuY2VudGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgICYgLnRpdHVsb09wY2lvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmIC5wYWRkaW5nLTgge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgfVxufVxuIiwiaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIGlvbi1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5NWE2YjE7XG59XG5pb24tY29udGVudCBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wgLnZlcnRpY2FsLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC5jZW50ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgaW9uLWdyaWQgaW9uLXJvdyBpb24tY29sIC50aXR1bG9PcGNpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAucGFkZGluZy04IHtcbiAgcGFkZGluZzogOHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.page.html',
                styleUrls: ['./home.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }, { type: _services_menu_configuracion_service__WEBPACK_IMPORTED_MODULE_2__["MenuConfiguracionService"] }, { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__["FingerprintAIO"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }, { type: src_app_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/menu-configuracion.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/menu-configuracion.service.ts ***!
  \********************************************************/
/*! exports provided: MenuConfiguracionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuConfiguracionService", function() { return MenuConfiguracionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MenuConfiguracionService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Este metodo permite hacer la petición al archivo donde estan las opciones para el menú de
     * la vista de configuración
     */
    getMenuOpts() {
        return this.http.get('/assets/data/menuConfiguracion.json');
    }
    /**
     * Este método permite consultar las opciones que existen en el menú principal home.page.html
     */
    getMenuMain() {
        return this.http.get('/assets/data/menuPrincipal-prod.json');
    }
    /**
     * Este método permite consultar las opciones que existen en el menú de ejecución de
     * actividades
     */
    getMenuExceActivities() {
        return this.http.get('/assets/data/menuExecuteActi.json');
    }
    /**
     * Este método permitre consultar las opciones de ayuda en el menú de ejecución de
     * actividades
     */
    getMenuHelpExceActivities() {
        return this.http.get('/assets/data/menuHelpExecuteActi.json');
    }
    /**
     * Este método permite consultar las opciones cuando se selecciona una visita
     */
    getMenuActivitySelected() {
        return this.http.get('/assets/data/menuVisitActivity.json');
    }
}
MenuConfiguracionService.ɵfac = function MenuConfiguracionService_Factory(t) { return new (t || MenuConfiguracionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MenuConfiguracionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuConfiguracionService, factory: MenuConfiguracionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuConfiguracionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/storage.service.ts":
/*!************************************!*\
  !*** ./src/app/storage.service.ts ***!
  \************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");





class StorageService {
    constructor(storage) {
        this.storage = storage;
    }
    set(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield this.storage.set(key, value);
            }
            catch (_a) {
                result = false;
            }
            return result !== false;
        });
    }
    get(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let result;
            try {
                result = yield this.storage.get(key);
            }
            catch (_a) { }
            return result;
        });
    }
    remove(key) {
        this.storage.remove(key);
    }
    clear() {
        this.storage.clear();
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"])); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map