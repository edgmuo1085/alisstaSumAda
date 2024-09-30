(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["responsible-signature-arl-responsible-signature-arl-module"],{

/***/ "./src/app/pages/responsible-signature-arl/responsible-signature-arl-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/responsible-signature-arl/responsible-signature-arl-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: ResponsibleSignatureARLPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibleSignatureARLPageRoutingModule", function() { return ResponsibleSignatureARLPageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsible-signature-arl.page */ "./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts");





const routes = [
    {
        path: '',
        component: _responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_2__["ResponsibleSignatureARLPage"],
    },
];
class ResponsibleSignatureARLPageRoutingModule {
}
ResponsibleSignatureARLPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResponsibleSignatureARLPageRoutingModule });
ResponsibleSignatureARLPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResponsibleSignatureARLPageRoutingModule_Factory(t) { return new (t || ResponsibleSignatureARLPageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResponsibleSignatureARLPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsibleSignatureARLPageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/responsible-signature-arl/responsible-signature-arl.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/responsible-signature-arl/responsible-signature-arl.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ResponsibleSignatureARLPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibleSignatureARLPageModule", function() { return ResponsibleSignatureARLPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsible-signature-arl-routing.module */ "./src/app/pages/responsible-signature-arl/responsible-signature-arl-routing.module.ts");
/* harmony import */ var _responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsible-signature-arl.page */ "./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");









class ResponsibleSignatureARLPageModule {
}
ResponsibleSignatureARLPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ResponsibleSignatureARLPageModule });
ResponsibleSignatureARLPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ResponsibleSignatureARLPageModule_Factory(t) { return new (t || ResponsibleSignatureARLPageModule)(); }, providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResponsibleSignatureARLPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ResponsibleSignatureARLPageModule, { declarations: [_responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_5__["ResponsibleSignatureARLPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResponsibleSignatureARLPageRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResponsibleSignatureARLPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_6__["SignaturePadModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _responsible_signature_arl_routing_module__WEBPACK_IMPORTED_MODULE_4__["ResponsibleSignatureARLPageRoutingModule"]],
                declarations: [_responsible_signature_arl_page__WEBPACK_IMPORTED_MODULE_5__["ResponsibleSignatureARLPage"]],
                providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__["File"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/responsible-signature-arl/responsible-signature-arl.page.ts ***!
  \***********************************************************************************/
/*! exports provided: ResponsibleSignatureARLPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsibleSignatureARLPage", function() { return ResponsibleSignatureARLPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/filesystem */ "./node_modules/@capacitor/filesystem/dist/esm/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-signaturepad */ "./node_modules/angular2-signaturepad/__ivy_ngcc__/fesm2015/angular2-signaturepad.js");
/* harmony import */ var _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/advisory-verification/advisory-verification.component */ "./src/app/components/advisory-verification/advisory-verification.component.ts");
/* harmony import */ var _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/activities/advisoryTopic/advisory-topic.service */ "./src/app/services/activities/advisoryTopic/advisory-topic.service.ts");
/* harmony import */ var _services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/attach/photo-service.service */ "./src/app/services/attach/photo-service.service.ts");
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/network/network.service */ "./src/app/services/network/network.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
























function ResponsibleSignatureARLPage_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Responsable ARL: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r0.infoUserARL.nombres, " ", ctx_r0.infoUserARL.apellidos, "");
} }
function ResponsibleSignatureARLPage_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Nombre proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.infoUserARL.nombreProveedor, "");
} }
function ResponsibleSignatureARLPage_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Documento proveedor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.infoUserARL.idProveedor, "");
} }
function ResponsibleSignatureARLPage_p_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r3.infoUserARL.nombres, " ", ctx_r3.infoUserARL.apellidos, "");
} }
class ResponsibleSignatureARLPage {
    constructor(storage, net, modalCtrl, photoService, file, plt, router, loadingCtlr, alertController, cacheService, advisoryTopicService, toastController) {
        this.storage = storage;
        this.net = net;
        this.modalCtrl = modalCtrl;
        this.photoService = photoService;
        this.file = file;
        this.plt = plt;
        this.router = router;
        this.loadingCtlr = loadingCtlr;
        this.alertController = alertController;
        this.cacheService = cacheService;
        this.advisoryTopicService = advisoryTopicService;
        this.toastController = toastController;
        // tslint:disable-next-line: ban-types
        this.signaturePadOptions = {
            maxWidth: 1,
            minWidth: 1,
            canvasWidth: 300,
            canvasHeight: 300,
        };
        /**
         * filesBase64, es un arreglo que almacena los base64 de los archivos que han sido leidos, que almacenaron en la actividad.
         */
        this.filesBase64 = [];
    }
    ngOnInit() {
        this.getInfoUser();
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.readFile();
        });
    }
    getInfoUser() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infoUserARL = yield this.storage.get('sesion');
        });
    }
    drawComplete() {
        const firma = this.signaturePad.toDataURL().split(',');
        this.signatureEntered = firma[0].concat(',').concat(' ').concat(firma[1]);
    }
    drawStart() {
        // will be notified of szimek/signature_pad's onBegin event
        // console.log('begin drawing');
    }
    clear() {
        this.signaturePad.clear();
    }
    verification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/company-info/comments/survey-signature/advisoryVerification');
            const infoActa = this.cacheService.getAllInfoToAdvisory();
            const modal = yield this.modalCtrl.create({
                component: _components_advisory_verification_advisory_verification_component__WEBPACK_IMPORTED_MODULE_8__["AdvisoryVerificationComponent"],
                componentProps: {
                    info: infoActa,
                },
            });
            modal.present();
        });
    }
    validateNetwork() {
        const status = this.net.getNetworkStatus();
        if (status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["ConnectionStatusEnum"].Offline) {
            this.presentToast();
        }
        return status === _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["ConnectionStatusEnum"].Online;
    }
    sendTask() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const infoSurveyResponsibleARL = {
                responsableId: this.infoUserARL.idPersona,
                responsableDocumento: this.infoUserARL.idPersona,
                responsableNombre: this.infoUserARL.nombres + ' ' + this.infoUserARL.apellidos,
                responsableNumeroLicenciaSST: this.infoUserARL.idLicenciaSst,
                responsableCargo: this.infoUserARL.cargo,
                responsableRazonSocial: this.infoUserARL.nombreProveedor,
                responsableFirma: this.signatureEntered,
            };
            this.cacheService.saveSurveyARL(infoSurveyResponsibleARL);
            const checkNetwork = this.validateNetwork();
            const idProveedor = this.infoUserARL.idProveedor;
            this.actaAsesoriaGestionada = this.cacheService.createActaAsesoria(idProveedor);
            const files = this.getFiles();
            if (checkNetwork) {
                yield this.presentLoading('Creando acta de asesoría ...');
                let creacionActa = yield this.advisoryTopicService.saveActaAsesoria(this.actaAsesoriaGestionada).toPromise();
                console.log("Creacion acta sin split: ", creacionActa);
                creacionActa = creacionActa.split(';');
                console.log("Creacion acta con split: ", creacionActa);
                if (creacionActa[0] === 'true' && creacionActa[1] !== '-1') {
                    for (const f of files) {
                        const body = Object.assign(Object.assign({}, f), { UidActaAsesoria: +creacionActa[1] });
                        yield this.advisoryTopicService.uploadFileActaAsesoria(body).toPromise();
                    }
                    if (this.actaAsesoriaGestionada && this.actaAsesoriaGestionada.TTA_lista && this.actaAsesoriaGestionada.TTA_lista.length > 0) {
                        for (const tta of this.actaAsesoriaGestionada.TTA_lista) {
                            const idActividadMigradaPorUsuario = tta.id;
                            // envio correo notificacion acta APP 
                            const notifCorreoActa = { Fk_ID_ActividadMigradaPorUsuario: idActividadMigradaPorUsuario };
                            yield this.advisoryTopicService.enviarCorreoNotificacionActaApp(notifCorreoActa).toPromise();
                        }
                    }
                    this.photoService.photos = [];
                    const listaActividades = yield this.storage.get('listaActividades');
                    for (let i = 0; i < listaActividades.length; i++) {
                        const actividadesMigradas = listaActividades[i].listaActividadesMigradas;
                        actividadesMigradas.forEach(element => {
                            const idActividad = element.id;
                            const TTA_LISTA = this.actaAsesoriaGestionada.TTA_lista;
                            const encontro = TTA_LISTA.find(x => x.id === idActividad);
                            if (encontro) {
                                actividadesMigradas.splice(encontro, 1);
                                listaActividades[i].listaActividadesMigradas = actividadesMigradas;
                            }
                        });
                    }
                    this.storage.set('listaActividades', listaActividades);
                    this.notification('Atención', 'Se ha creado el acta de asesoría');
                    this.router.navigateByUrl('/u/execLog');
                }
                else {
                    this.notification('Error', 'No se pudo crear el acta de asesoría');
                }
                this.loading.dismiss();
            }
            else {
                const activitiesChange = [];
                const getInfoActaAsesoria = this.cacheService.getAllInfoToAdvisory();
                const actSelec = JSON.parse(sessionStorage.companySelected);
                // tslint:disable-next-line: prefer-for-of
                for (let i = 0; i < actSelec.listaActividadesMigradas.length; i++) {
                    const codeActividadesMigradas = actSelec.listaActividadesMigradas[i].idActividad;
                    const encontro = getInfoActaAsesoria.activities.find(element => element.idActividad === codeActividadesMigradas);
                    if (encontro) {
                        encontro.estadoInterno = 'Por enviar';
                        activitiesChange.push(encontro);
                    }
                    else {
                        activitiesChange.push(actSelec.listaActividadesMigradas[i]);
                    }
                }
                actSelec.listaActividadesMigradas = activitiesChange;
                const cambioCompanySelected = JSON.stringify(actSelec);
                sessionStorage.setItem('companySelected', cambioCompanySelected);
                const saveActaAsesoria = this.cacheService.saveActasAsesoria();
                if (saveActaAsesoria) {
                    this.notification('Atención', 'Se guardo el acta de asesoría pero con estado pendiente por enviar');
                    this.router.navigateByUrl('/u/execLog');
                }
            }
        });
    }
    readFile() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const documentosAdjuntados = this.cacheService.saveAttach;
            for (let i = 0; i < documentosAdjuntados.length; i++) {
                const nombreArchivo = documentosAdjuntados[i].nombreArchivo;
                const idActividad = documentosAdjuntados[i].idActividad;
                const extensionBase = documentosAdjuntados[i].extensionBase64;
                try {
                    yield _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].readFile({
                        path: `${idActividad}/${nombreArchivo}`,
                        directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data,
                    }).then(data => {
                        const base64 = extensionBase.concat(',').concat(data.data);
                        const objUploadFile = {
                            UidActividadMigradaXUSuario: idActividad,
                            TipoSoporte: documentosAdjuntados[i].tipoDocumento,
                            Base64: base64,
                        };
                        this.filesBase64.push(objUploadFile);
                    });
                }
                catch (_a) { }
            }
        });
    }
    removeFile() {
        const activities = this.cacheService.saveAttach;
        for (let i = 0; i < activities.length; i++) {
            const nombreArchivo = activities[i].nombreArchivo;
            const idActividad = activities[i].idActividad;
            try {
                _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Filesystem"].deleteFile({
                    path: `${idActividad}/${nombreArchivo}`,
                    directory: _capacitor_filesystem__WEBPACK_IMPORTED_MODULE_3__["Directory"].Data,
                });
            }
            catch (_a) { }
        }
    }
    presentLoading(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtlr.create({
                mode: 'ios',
                message,
            });
            return this.loading.present();
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Verifique su conexión a internet.',
                duration: 2000,
            });
            toast.present();
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
            alert.onDidDismiss();
            yield alert.present();
        });
    }
    getFiles() {
        const files = [];
        const imagenesAdjuntas = this.cacheService.obtenerAdjuntosFoto();
        for (let i = 0; i < this.filesBase64.length; i++) {
            const objAdjuntarDoc = this.filesBase64[i];
            files.push(objAdjuntarDoc);
        }
        for (let j = 0; j < imagenesAdjuntas.length; j++) {
            const element = imagenesAdjuntas[j];
            element.forEach((documento) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const objAdjuntarImg = {
                    UidActividadMigradaXUSuario: documento.idActividad,
                    TipoSoporte: documento.idTipoArchivo,
                    base64: documento.foto.base64Imagen,
                };
                files.push(objAdjuntarImg);
            }));
        }
        this.removeFile();
        return files;
    }
}
ResponsibleSignatureARLPage.ɵfac = function ResponsibleSignatureARLPage_Factory(t) { return new (t || ResponsibleSignatureARLPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_10__["PhotoServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_9__["AdvisoryTopicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"])); };
ResponsibleSignatureARLPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResponsibleSignatureARLPage, selectors: [["app-responsible-signature-arl"]], viewQuery: function ResponsibleSignatureARLPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
    } }, decls: 40, vars: 5, consts: [["size", "2"], ["color", "tertiary"], ["slot", "start"], ["color", "primary", "mode", "md", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "ion-padding"], [4, "ngIf"], [1, "ion-text-center"], [1, "firmaContent", 2, "border", "1px solid black"], [3, "options", "onBeginEvent", "onEndEvent"], ["class", "firma", 4, "ngIf"], ["expand", "block", "fill", "clear", "shape", "round", 3, "click"], [1, "ion-text-justify", "ion-padding"], [1, "ion-text-center", 2, "margin-bottom", "30px"], ["size", "3"], ["size", "6"], ["src", "../../../assets/icon/boton_enviar.png", "alt", "enviar", 1, "btnEnviar", 3, "click"], [1, "firma"]], template: function ResponsibleSignatureARLPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Firma responsable ARL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Responsable de ARL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ResponsibleSignatureARLPage_p_15_Template, 4, 2, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Raz\u00F3n social del proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ResponsibleSignatureARLPage_p_19_Template, 4, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ResponsibleSignatureARLPage_p_20_Template, 4, 1, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Firma responsable de ARL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "signature-pad", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onBeginEvent", function ResponsibleSignatureARLPage_Template_signature_pad_onBeginEvent_25_listener() { return ctx.drawStart(); })("onEndEvent", function ResponsibleSignatureARLPage_Template_signature_pad_onEndEvent_25_listener() { return ctx.drawComplete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ResponsibleSignatureARLPage_p_27_Template, 2, 2, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "ion-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResponsibleSignatureARLPage_Template_ion_button_click_28_listener() { return ctx.clear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Borrar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Al enviar, est\u00E1 autorizando el uso de la su firma \u00DANICAMENTE para el registro de la ejecuci\u00F3n de las actividades relacionadas en el acta de asesor\u00EDa en promoci\u00F3n y prevenci\u00F3n de POSITIVA COMPA\u00D1\u00CDA DE SEGUROS S.A. La Pol\u00EDtica de tratamiento de la informaci\u00F3n la puede consultar en https://www.positiva.gov.co Una vez sea enviado el formulario, recibir\u00E1 correo electr\u00F3nico con los soportes de ejecuci\u00F3n. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "ion-col", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResponsibleSignatureARLPage_Template_img_click_38_listener() { return ctx.sendTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.signaturePadOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.infoUserARL);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\nsignature-pad[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 20px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\n.firma[_ngcontent-%COMP%] {\n  border-top: 1px solid #95a6b1;\n  margin-right: 30px;\n  margin-left: 30px;\n  font-weight: bold;\n  color: gray;\n  font: unset;\n  font-size: 15px;\n  padding-top: 5px;\n}\nh3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.firmaContent[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n.firmaContent[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZGEvRG9jdW1lbnRzL2FwcHMvYWxpc3N0YVN1bUFkYS9zcmMvYXBwL3BhZ2VzL3Jlc3BvbnNpYmxlLXNpZ25hdHVyZS1hcmwvcmVzcG9uc2libGUtc2lnbmF0dXJlLWFybC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3Jlc3BvbnNpYmxlLXNpZ25hdHVyZS1hcmwvcmVzcG9uc2libGUtc2lnbmF0dXJlLWFybC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0FSO0FERU07RUFDRSxZQUFBO0FDQVI7QURNQTtFQUNFLDhCQUFBO0FDSEY7QURNQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0hGO0FETUE7RUFDRSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSEY7QURNQTtFQUNFLGtCQUFBO0FDSEY7QURNQTtFQUNFLDhCQUFBO0FDSEY7QURNQTtFQUNFLDhCQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXNwb25zaWJsZS1zaWduYXR1cmUtYXJsL3Jlc3BvbnNpYmxlLXNpZ25hdHVyZS1hcmwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XG4gIGlvbi1ncmlkIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgaW9uLXJvdyB7XG4gICAgICBpb24tY29sIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICAgICAgfVxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnNpZ25hdHVyZS1wYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmIWltcG9ydGFudDtcbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uZmlybWEge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzk1YTZiMTtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmF5O1xuICBmb250OiB1bnNldDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpcm1hQ29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmYhaW1wb3J0YW50O1xufVxuXG4uZmlybWFDb250ZW50IGRpdntcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiFpbXBvcnRhbnQ7XG59IFxuIiwiaW9uLWhlYWRlciBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuaW9uLWhlYWRlciBpb24tZ3JpZCBpb24tcm93IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6ICM5NWE2YjE7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLXRvb2xiYXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbnNpZ25hdHVyZS1wYWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi50aXR1bG8ge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmZpcm1hIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5NWE2YjE7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogZ3JheTtcbiAgZm9udDogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5maXJtYUNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi5maXJtYUNvbnRlbnQgZGl2IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ResponsibleSignatureARLPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-responsible-signature-arl',
                templateUrl: './responsible-signature-arl.page.html',
                styleUrls: ['./responsible-signature-arl.page.scss'],
            }]
    }], function () { return [{ type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"] }, { type: _services_network_network_service__WEBPACK_IMPORTED_MODULE_12__["NetworkService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }, { type: _services_attach_photo_service_service__WEBPACK_IMPORTED_MODULE_10__["PhotoServiceService"] }, { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }, { type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_11__["CacheService"] }, { type: _services_activities_advisoryTopic_advisory_topic_service__WEBPACK_IMPORTED_MODULE_9__["AdvisoryTopicService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }]; }, { signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_7__["SignaturePad"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=responsible-signature-arl-responsible-signature-arl-module-es2015.js.map