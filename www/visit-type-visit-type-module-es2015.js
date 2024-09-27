(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visit-type-visit-type-module"],{

/***/ "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************/
/*! exports provided: DatePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePicker", function() { return DatePicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var DatePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @hidden
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    DatePicker.prototype.show = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "show", {}, arguments); };
    DatePicker.pluginName = "DatePicker";
    DatePicker.plugin = "cordova-plugin-datepicker";
    DatePicker.pluginRef = "datePicker";
    DatePicker.repo = "https://github.com/VitaliiBlagodir/cordova-plugin-datepicker";
    DatePicker.platforms = ["Android", "iOS", "Windows"];
DatePicker.ɵfac = function DatePicker_Factory(t) { return ɵDatePicker_BaseFactory(t || DatePicker); };
DatePicker.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DatePicker, factory: function (t) { return DatePicker.ɵfac(t); } });
var ɵDatePicker_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](DatePicker);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DatePicker, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return DatePicker;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZGF0ZS1waWNrZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBR1EsSUFzSndCLDhCQUFpQjtBQUFDO0FBSWpEO0FBR08sUUFOTjtBQUNGO0FBRUEsV0FESztBQUNMLFFBQUUsb0JBQWMsR0FBRztBQUNuQixZQUFJLGlCQUFpQixFQUFFLENBQUM7QUFDeEIsWUFBSSxlQUFlLEVBQUUsQ0FBQztBQUN0QixZQUFJLGdCQUFnQixFQUFFLENBQUM7QUFDdkIsWUFBSSx5QkFBeUIsRUFBRSxDQUFDO0FBQ2hDLFlBQUksMEJBQTBCLEVBQUUsQ0FBQztBQUNqQyxTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFLbkIseUJBQUksYUFBQyxPQUEwQjtBQUlsQjtBQUEwQztBQUFxRDtBQUF5QztBQUFzRjs4Q0F2QjVPLFVBQVU7Ozs7OzBCQUNMO0FBQUMscUJBM0pQO0FBQUUsRUEySjhCLGlCQUFpQjtBQUNoRCxTQURZLFVBQVU7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBtb2RlIG9mIHRoZSBkYXRlIHBpY2tlclxuICAgKiBWYWx1ZXM6IGRhdGUgfCB0aW1lIHwgZGF0ZXRpbWVcbiAgICovXG4gIG1vZGU6IHN0cmluZztcblxuICAvKipcbiAgICogU2VsZWN0ZWQgZGF0ZVxuICAgKi9cbiAgZGF0ZTogRGF0ZSB8IHN0cmluZyB8IG51bWJlcjtcblxuICAvKipcbiAgICogTWluaW11bSBkYXRlXG4gICAqIERlZmF1bHQ6IGVtcHR5IFN0cmluZ1xuICAgKi9cbiAgbWluRGF0ZT86IERhdGUgfCBzdHJpbmcgfCBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heGltdW0gZGF0ZVxuICAgKiBEZWZhdWx0OiBlbXB0eSBTdHJpbmdcbiAgICovXG4gIG1heERhdGU/OiBEYXRlIHwgc3RyaW5nIHwgbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBmb3IgdGhlIGRpYWxvZyB0aXRsZS4gSWYgZW1wdHksIHVzZXMgYW5kcm9pZCBkZWZhdWx0IChTZXQgZGF0ZS9TZXQgdGltZSkuXG4gICAqIERlZmF1bHQ6IGVtcHR5IFN0cmluZ1xuICAgKi9cbiAgdGl0bGVUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBMYWJlbCBvZiBCVVRUT05fUE9TSVRJVkUgKGRvbmUgYnV0dG9uKSBvbiBBbmRyb2lkXG4gICAqL1xuICBva1RleHQ/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIEJVVFRPTl9ORUdBVElWRSAoY2FuY2VsIGJ1dHRvbikuIElmIGVtcHR5LCB1c2VzIGFuZHJvaWQuUi5zdHJpbmcuY2FuY2VsLlxuICAgKi9cbiAgY2FuY2VsVGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGFiZWwgb2YgdG9kYXkgYnV0dG9uLiBJZiBlbXB0eSwgZG9lc24ndCBzaG93IHRoZSBvcHRpb24gdG8gc2VsZWN0IGN1cnJlbnQgZGF0ZS5cbiAgICovXG4gIHRvZGF5VGV4dD86IHN0cmluZztcblxuICAvKipcbiAgICogTGFiZWwgb2Ygbm93IGJ1dHRvbi4gSWYgZW1wdHksIGRvZXNuJ3Qgc2hvdyB0aGUgb3B0aW9uIHRvIHNlbGVjdCBjdXJyZW50IHRpbWUuXG4gICAqL1xuICBub3dUZXh0Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aW1lIGRpYWxvZyBpbiAyNCBob3VycyBmb3JtYXQuXG4gICAqL1xuICBpczI0SG91cj86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENob29zZSB0aGUgQW5kcm9pZCB0aGVtZSBmb3IgdGhlIHBpY2tlci4gWW91IGNhbiB1c2UgdGhlIERhdGVQaWNrZXIuQU5EUk9JRF9USEVNRVMgcHJvcGVydHkuXG4gICAqIFZhbHVlczogMTogVEhFTUVfVFJBRElUSU9OQUwgfCAyOiBUSEVNRV9IT0xPX0RBUksgfCAzOiBUSEVNRV9IT0xPX0xJR0hUIHwgNDogVEhFTUVfREVWSUNFX0RFRkFVTFRfREFSSyB8IDU6IFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUXG4gICAqL1xuICBhbmRyb2lkVGhlbWU/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFNob3dzIG9yIGhpZGUgZGF0ZXMgZWFybGllciB0aGVuIHNlbGVjdGVkIGRhdGUuXG4gICAqL1xuICBhbGxvd09sZERhdGVzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvd3Mgb3IgaGlkZSBkYXRlcyBhZnRlciBzZWxlY3RlZCBkYXRlLlxuICAgKi9cbiAgYWxsb3dGdXR1cmVEYXRlcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIGRvbmUgYnV0dG9uLlxuICAgKi9cbiAgZG9uZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIZXggY29sb3Igb2YgZG9uZSBidXR0b24uXG4gICAqL1xuICBkb25lQnV0dG9uQ29sb3I/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIExhYmVsIG9mIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxCdXR0b25MYWJlbD86IHN0cmluZztcblxuICAvKipcbiAgICogSGV4IGNvbG9yIG9mIGNhbmNlbCBidXR0b24uXG4gICAqL1xuICBjYW5jZWxCdXR0b25Db2xvcj86IHN0cmluZztcblxuICAvKipcbiAgICogWCBwb3NpdGlvbiBvZiBkYXRlIHBpY2tlci4gVGhlIHBvc2l0aW9uIGlzIGFic29sdXRlIHRvIHRoZSByb290IHZpZXcgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgeD86IG51bWJlcjtcblxuICAvKipcbiAgICogWSBwb3NpdGlvbiBvZiBkYXRlIHBpY2tlci4gVGhlIHBvc2l0aW9uIGlzIGFic29sdXRlIHRvIHRoZSByb290IHZpZXcgb2YgdGhlIGFwcGxpY2F0aW9uLlxuICAgKi9cbiAgeT86IG51bWJlcjtcblxuICAvKipcbiAgICogSW50ZXJ2YWwgYmV0d2VlbiBvcHRpb25zIGluIHRoZSBtaW51dGUgc2VjdGlvbiBvZiB0aGUgZGF0ZSBwaWNrZXIuXG4gICAqL1xuICBtaW51dGVJbnRlcnZhbD86IG51bWJlcjtcblxuICAvKipcbiAgICogRm9yY2UgdGhlIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGVudW0uIFRoZSB2YWx1ZSBhbnkgd2lsbCByZXZlcnQgdG8gZGVmYXVsdCBVSVBvcG92ZXJBcnJvd0RpcmVjdGlvbkFueSBhbmQgbGV0IHRoZSBhcHAgY2hvb3NlIHRoZSBwcm9wZXIgZGlyZWN0aW9uIGl0c2VsZi5cbiAgICovXG4gIHBvcG92ZXJBcnJvd0RpcmVjdGlvbj86IHN0cmluZztcblxuICAvKipcbiAgICogRm9yY2UgbG9jYWxlIGZvciBkYXRlUGlja2VyLlxuICAgKi9cbiAgbG9jYWxlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIERhdGUgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoZSBEYXRlUGlja2VyIHBsdWdpbiBhbGxvd3MgdGhlIHVzZXIgdG8gZmV0Y2ggZGF0ZSBvciB0aW1lIHVzaW5nIG5hdGl2ZSBkaWFsb2dzLlxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGF0ZS1waWNrZXIvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRhdGVQaWNrZXI6IERhdGVQaWNrZXIpIHsgfVxuICpcbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5kYXRlUGlja2VyLnNob3coe1xuICogICBkYXRlOiBuZXcgRGF0ZSgpLFxuICogICBtb2RlOiAnZGF0ZScsXG4gKiAgIGFuZHJvaWRUaGVtZTogdGhpcy5kYXRlUGlja2VyLkFORFJPSURfVEhFTUVTLlRIRU1FX0hPTE9fREFSS1xuICogfSkudGhlbihcbiAqICAgZGF0ZSA9PiBjb25zb2xlLmxvZygnR290IGRhdGU6ICcsIGRhdGUpLFxuICogICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9jY3VycmVkIHdoaWxlIGdldHRpbmcgZGF0ZTogJywgZXJyKVxuICogKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIERhdGVQaWNrZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnRGF0ZVBpY2tlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRhdGVwaWNrZXInLFxuICBwbHVnaW5SZWY6ICdkYXRlUGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9WaXRhbGlpQmxhZ29kaXIvY29yZG92YS1wbHVnaW4tZGF0ZXBpY2tlcicsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIERhdGVQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBAaGlkZGVuXG4gICAqL1xuICBBTkRST0lEX1RIRU1FUyA9IHtcbiAgICBUSEVNRV9UUkFESVRJT05BTDogMSxcbiAgICBUSEVNRV9IT0xPX0RBUks6IDIsXG4gICAgVEhFTUVfSE9MT19MSUdIVDogMyxcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9EQVJLOiA0LFxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUOiA1LFxuICB9O1xuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgZGF0ZSBhbmQvb3IgdGltZSBwaWNrZXIgZGlhbG9nKHMpXG4gICAqIEBwYXJhbSB7RGF0ZVBpY2tlck9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgdGhlIGRhdGUgcGlja2VyLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEYXRlPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBwaWNrZWQgZGF0ZSBhbmQvb3IgdGltZSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaG93KG9wdGlvbnM6IERhdGVQaWNrZXJPcHRpb25zKTogUHJvbWlzZTxEYXRlPiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/pages/visit-type/per-project/per-project.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/visit-type/per-project/per-project.component.ts ***!
  \***********************************************************************/
/*! exports provided: PerProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerProjectComponent", function() { return PerProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





/**
 * Componente de la vista de tipo de visita por proyecto.
 */
class PerProjectComponent {
    constructor(cacheService) {
        this.cacheService = cacheService;
        this.projectDateSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showButtonNext = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Generar la hora inicial para la asesoría especifica
         * date, es la variable con la que se valida que no se pueda seleccionar una fecha que ya paso.
         */
        this.dateSelectedProject = new Date();
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() {
        const infoVisitType = this.cacheService.getSaveTypeAdvice();
        if (Object.keys(infoVisitType).length !== 0) {
            if (infoVisitType.type === 'Proyecto') {
                this.setDate(infoVisitType.date);
            }
        }
    }
    dateSelectec(event) {
        this.setDate(event.detail.value);
    }
    setDate(date) {
        this.date = new Date(date).toISOString();
        this.projectDateSelected.emit(this.date);
        this.showButtonNext.emit(true);
    }
}
PerProjectComponent.ɵfac = function PerProjectComponent_Factory(t) { return new (t || PerProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"])); };
PerProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PerProjectComponent, selectors: [["app-per-project"]], outputs: { projectDateSelected: "projectDateSelected", showButtonNext: "showButtonNext" }, decls: 10, vars: 4, consts: [["lines", "none"], [1, "p-0"], [1, "w-100"], [1, "ion-text-center"], [1, "d-block"], [1, "mt-3"], ["placeholder", "Seleccione (MES - A\u00D1O)", "display-format", "MMM YYYY", "monthShortNames", "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre", "color", "primary", "cancelText", "CANCELAR", "doneText", "ACEPTAR", "cancelText", "Cancelar", 1, "ionDateTimeStart", 3, "pickerOptions", "min", "max", "value", "ionChange"]], template: function PerProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ion-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ion-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fecha de asesor\u00EDa del proyecto (Mes/a\u00F1o) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ion-datetime", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ionChange", function PerProjectComponent_Template_ion_datetime_ionChange_9_listener($event) { return ctx.dateSelectec($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pickerOptions", ctx.customPickerOptionsProjectDate)("min", ctx.currentYear)("max", ctx.currentYear)("value", ctx.date);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["SelectValueAccessor"]], styles: ["ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: none;\n}\nion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: none;\n}\n.label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  transform: none;\n}\nion-list[_ngcontent-%COMP%] {\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n.ionDateTimeStart[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  font-size: 20px;\n  font-weight: bolder;\n  text-align: center;\n}\n.mat-form-field-appearance-fill[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQtdHlwZS9wZXItcHJvamVjdC9DOlxcVXNlcnNcXGNhbHZhcmFkb1xcRG9jdW1lbnRzXFxwcm95ZWN0b1xcQWN0dWFsXFxhbGlzc3RhX3N1bVxcVHJ1bmtcXDIwMjQwNjA3MS9zcmNcXGFwcFxccGFnZXNcXHZpc2l0LXR5cGVcXHBlci1wcm9qZWN0XFxwZXItcHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlzaXQtdHlwZS9wZXItcHJvamVjdC9wZXItcHJvamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGdCQUFBO0FDQUo7QURDSTtFQUNFLGtCQUFBO0FDQ047QURLRTtFQUNFLGVBQUE7QUNGSjtBRE1BO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtBQ0hGO0FETUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEY7QURNQTtFQUNFLGtDQUFBO0FDSEY7QURNQTtFQUNFLGtDQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXNpdC10eXBlL3Blci1wcm9qZWN0L3Blci1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBpb24tbGlzdCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBpb24taXRlbSB7XG4gICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi5sYWJlbC1zdGFja2VkIHtcbiAgJi5zYy1pb24tbGFiZWwtbWQtaCB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cblxuLmlvbkRhdGVUaW1lU3RhcnQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4iLCJpb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tY29udGVudCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmxhYmVsLXN0YWNrZWQuc2MtaW9uLWxhYmVsLW1kLWgge1xuICB0cmFuc2Zvcm06IG5vbmU7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cblxuLmlvbkRhdGVUaW1lU3RhcnQge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PerProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-per-project',
                templateUrl: './per-project.component.html',
                styleUrls: ['./per-project.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_1__["CacheService"] }]; }, { projectDateSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], showButtonNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/visit-type/specific/specific.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/visit-type/specific/specific.component.ts ***!
  \*****************************************************************/
/*! exports provided: SpecificComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecificComponent", function() { return SpecificComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function SpecificComponent_form_1_ion_datetime_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "ion-datetime", 13);
} }
function SpecificComponent_form_1_ion_label_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Horas totales: 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SpecificComponent_form_1_ion_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Horas totales: ", ctx_r3.totalHours, "");
} }
function SpecificComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ion-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Fecha de asesor\u00EDa espec\u00EDfica");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SpecificComponent_form_1_ion_datetime_7_Template, 1, 0, "ion-datetime", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SpecificComponent_form_1_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.startTodaySpecific(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " INICIAR HOY ASESORIA ESPECIFICA ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Hora de Inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ion-datetime", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SpecificComponent_form_1_Template_ion_datetime_ionChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.changeHourStar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ion-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Hora Finalizaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "ion-datetime", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ionChange", function SpecificComponent_form_1_Template_ion_datetime_ionChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.changeHourEnd($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, SpecificComponent_form_1_ion_label_24_Template, 2, 0, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SpecificComponent_form_1_ion_label_26_Template, 2, 1, "ion-label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.formDateSpecific);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.showStartTodaySpecificAdvice);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r0.disabledBtnDateStart);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r0.customStartDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.totalHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.totalHours);
} }
/**
 * Componente de la vista de tipo de visita específica.
 */
class SpecificComponent {
    constructor(datePicker, cacheService, formBuilder, alertController) {
        this.datePicker = datePicker;
        this.cacheService = cacheService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        /**
         * Estos @Output() son los encargados de enviarles las fechas al componente padre
         * en este caso seria visit-type.ts, cada orden:
         * @Output() specificStartHourSelected: Esta variable indica la hora
         * de inicio de la asesoria especifica
         * @Output() specificEndHourSelected: Esta variable indica la hora de finalización de
         * la asesoria especifica
         * @Output() specificTotalHour: Esta variable indica el total de horas calculadas.
         */
        this.dateStartSpecific = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.specificStartHourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.specificEndHourSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.specificTotalHour = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showButtonNext = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showStartTodaySpecificAdvice = false;
        this.disabledBtnDateStart = false;
    }
    ngOnInit() {
        this.initFormDateSpecific();
        const infoVisitType = this.cacheService.getSaveTypeAdvice();
        if (Object.keys(infoVisitType).length !== 0) {
            if (infoVisitType.type === 'Especifica') {
                this.formDateSpecific.patchValue({
                    startTodaySecific: moment__WEBPACK_IMPORTED_MODULE_5__(infoVisitType.fechaInicialAsesoria, 'YYYY-MM-DD').toISOString(),
                    startHour: moment__WEBPACK_IMPORTED_MODULE_5__(infoVisitType.startHour, 'hh:mm A').toISOString(),
                    endHour: moment__WEBPACK_IMPORTED_MODULE_5__(infoVisitType.endHour, 'hh:mm A').toISOString(),
                });
                this.setVisitDate(infoVisitType.fechaInicialAsesoria);
                this.setInitialHour(infoVisitType.startHour);
                this.setEndHour(infoVisitType.endHour);
            }
        }
    }
    initFormDateSpecific() {
        this.formDateSpecific = this.formBuilder.group({
            startTodaySecific: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            startHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endHour: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    startTodaySpecific() {
        // REFACTOR: Esta notificación no tiene efecto sobre la asignación de la fecha. El usuario es
        // advertido sobre un escenario que no puede ser modificado pero no tiene opción una vez que ha
        // marcado el botón de asignación de fecha
        this.notification('Está seguro de iniciar la actividad en este momento, recuerde que esta fecha no puede modificarse.');
        this.setVisitDate(moment__WEBPACK_IMPORTED_MODULE_5__().startOf('day').toISOString().split('T')[0]);
    }
    changeHourStar(event) {
        this.setInitialHour(event.detail.value.split('T')[1]);
    }
    changeHourEnd(event) {
        this.setEndHour(event.detail.value.split('T')[1]);
    }
    validateHours(hourStart, hourEnd, hourMigrated) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // REFACTOR: No debe usarse una cadena arbitraria como _NO SE PUEDE_ para cubrir un escenario.
            // Podría definirse que este método regrese el número de horas de diferencia entre la inicial
            // y la final, y en cualquier otro caso, se usase _undefined_
            const start = hourStart.split(':');
            const end = hourEnd.split(':');
            if (parseInt(end[0], 10) === parseInt(start[0], 10)) {
                const resultHour = parseInt(end[0], 10) - parseInt(start[0], 10);
                if (resultHour < hourMigrated) {
                    return 'No se puede';
                }
            }
            if (parseInt(end[0], 10) > parseInt(start[0], 10)) {
                const resultHour = parseInt(end[0], 10) - parseInt(start[0], 10);
                const resultMinutes = +this.validateMinutes(hourStart, hourEnd, hourMigrated);
                const registeredMinutes = yield this.cacheService.getRegisteredTime();
                if (resultHour * 60 + resultMinutes + registeredMinutes <= 600) {
                    if (resultHour >= hourMigrated) {
                        return resultHour.toString();
                    }
                    else {
                        return 'No se puede';
                    }
                }
                else {
                    this.notification('Excede las horas permitidas a ejecutar. Las cuales son hasta 10 horas por día');
                }
            }
            else {
                this.totalHours = 0;
                this.notification('La hora final no puede ser menor a la hora inicial');
            }
        });
    }
    validateMinutes(hourStart, hourEnd, hourMigrated) {
        const start = hourStart.split(':');
        const end = hourEnd.split(':');
        if (parseInt(end[1], 10) > parseInt(start[1], 10)) {
            const resultMinutes = parseInt(end[1], 10) - parseInt(start[1], 10);
            return resultMinutes.toString();
        }
        else {
            const resultMinutes = parseInt(start[1], 10) - parseInt(end[1], 10);
            return resultMinutes.toString();
        }
    }
    /**
     * Esta es la popUp cuando pasa alguna excepción en la selección de las horas.
     */
    notification(notificacion) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención',
                backdropDismiss: false,
                mode: 'ios',
                message: notificacion,
                buttons: ['ACEPTAR'],
            });
            alert.onDidDismiss();
            yield alert.present();
        });
    }
    /**
     * Establece la fecha de la visita.
     *
     * @param date Fecha de la visita.
     */
    setVisitDate(date) {
        this.date = date;
        this.formDateSpecific.controls.startTodaySecific.setValue(this.date);
        this.disabledBtnDateStart = true;
        this.showStartTodaySpecificAdvice = true;
        this.dateStartSpecific.emit(this.date);
        this.showButtonNext.emit(this.formDateSpecific.controls.endHour.valid);
    }
    /**
     * Establece la hora inicial de la visita.
     *
     * @param initialHour Hora inicial de la visita.
     */
    setInitialHour(initialHour) {
        this.customStartDate = initialHour;
        this.validateVisitDuration();
    }
    /**
     * Establece la hora final de la visita.
     *
     * @param endHour Hora final de la visita.
     */
    setEndHour(endHour) {
        this.customEndDate = endHour;
        this.validateVisitDuration();
    }
    /**
     * Comprueba que las horas inicial y final de la visita sean válidas y que la duración de la visita
     * sea menor o igual que la estimada para la actividad. Si todo está en orden, emite los valores para
     * el componente padre.
     */
    validateVisitDuration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.customStartDate || !this.customEndDate) {
                return;
            }
            const horasMigradas = this.cacheService.migratedHours;
            const hours = yield this.validateHours(this.customStartDate, this.customEndDate, horasMigradas);
            let showButton;
            switch (hours) {
                case undefined:
                    showButton = false;
                    this.totalHours = 0;
                    this.formDateSpecific.controls.endHour.reset();
                    break;
                case 'No se puede':
                    showButton = false;
                    this.totalHours = 0;
                    this.formDateSpecific.controls.endHour.reset();
                    // REFACTOR: Debe normalizarse el mostrar notificaciones. O bien lo hace este método, o lo hace el
                    // de validación de horas.
                    this.notification(`No es posible ya que las horas de esta actividad no pueden ser menores a ${horasMigradas} horas.`);
                    break;
                default:
                    const now = moment__WEBPACK_IMPORTED_MODULE_5__();
                    const realStartDate = now.format('YYYY-MM-DD') + `T${this.customStartDate}`;
                    const realEndDate = now.format('YYYY-MM-DD') + `T${this.customEndDate}`;
                    const start = moment__WEBPACK_IMPORTED_MODULE_5__(realStartDate);
                    const end = moment__WEBPACK_IMPORTED_MODULE_5__(realEndDate);
                    const duration = moment__WEBPACK_IMPORTED_MODULE_5__["duration"](end.diff(start));
                    const _hours = Math.floor(duration.asHours());
                    const _minutes = Math.floor(duration.asMinutes() % 60);
                    const totalHours = _hours + _minutes / 60;
                    if (totalHours < horasMigradas) {
                        showButton = false;
                        this.totalHours = 0;
                        this.formDateSpecific.controls.endHour.reset();
                        // REFACTOR: Debe normalizarse el mostrar notificaciones. O bien lo hace este método, o lo hace el
                        // de validación de horas.
                        this.notification(`No es posible ya que las horas de esta actividad no pueden ser menores a ${horasMigradas} horas.`);
                    }
                    else {
                        showButton = !!this.date;
                        this.totalHours = _hours + ' Horas ' + _minutes + ' Minutos';
                    }
            }
            this.specificStartHourSelected.emit(this.customStartDate);
            this.specificEndHourSelected.emit(this.customEndDate);
            this.specificTotalHour.emit(this.totalHours);
            this.showButtonNext.emit(showButton);
        });
    }
}
SpecificComponent.ɵfac = function SpecificComponent_Factory(t) { return new (t || SpecificComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"])); };
SpecificComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpecificComponent, selectors: [["app-specific"]], outputs: { dateStartSpecific: "dateStartSpecific", specificStartHourSelected: "specificStartHourSelected", specificEndHourSelected: "specificEndHourSelected", specificTotalHour: "specificTotalHour", showButtonNext: "showButtonNext" }, decls: 2, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["lines", "none"], ["name", "calendar-outline", "slot", "start"], [1, "d-block"], ["placeholder", "DD MMMM YYYY", "display-format", "DD MMM YYYY", "monthShortNames", "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre", "color", "primary", "formControlName", "startTodaySecific", "mode", "ios", "disabled", "", "class", "ionDateTimeStart", "cancelText", "Cancelar", 4, "ngIf"], ["expand", "block", "color", "primary", 3, "disabled", "click"], ["lines", "none", 1, "mt-3"], ["name", "time-outline", "slot", "start"], ["placeholder", "Hora Inicial", "displayFormat", "hh:mm A", "cancelText", "CANCELAR", "doneText", "ACEPTAR", "mode", "ios", "formControlName", "startHour", 1, "ionDateTimeStart", 3, "ionChange"], [1, "mt-3"], ["placeholder", "Hora Final", "cancelText", "CANCELAR", "doneText", "ACEPTAR", "mode", "ios", "formControlName", "endHour", "displayFormat", "hh:mm A", 1, "ionDateTimeStart", 3, "disabled", "ionChange"], [4, "ngIf"], ["placeholder", "DD MMMM YYYY", "display-format", "DD MMM YYYY", "monthShortNames", "Enero, Febrero, Marzo, Abril, Mayo, Junio, Julio, Agosto, Septiembre, Octubre, Noviembre, Diciembre", "color", "primary", "formControlName", "startTodaySecific", "mode", "ios", "disabled", "", "cancelText", "Cancelar", 1, "ionDateTimeStart"]], template: function SpecificComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SpecificComponent_form_1_Template, 27, 6, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formDateSpecific);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonDatetime"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: ["ion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%] {\n  background: none;\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: none;\n}\nion-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 40px;\n}\n.label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%] {\n  transform: none;\n}\nion-list[_ngcontent-%COMP%] {\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n.ionDateTimeStart[_ngcontent-%COMP%] {\n  padding: 0px !important;\n  font-size: 20px;\n  font-weight: bolder;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQtdHlwZS9zcGVjaWZpYy9DOlxcVXNlcnNcXGNhbHZhcmFkb1xcRG9jdW1lbnRzXFxwcm95ZWN0b1xcQWN0dWFsXFxhbGlzc3RhX3N1bVxcVHJ1bmtcXDIwMjQwNjA3MS9zcmNcXGFwcFxccGFnZXNcXHZpc2l0LXR5cGVcXHNwZWNpZmljXFxzcGVjaWZpYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvdmlzaXQtdHlwZS9zcGVjaWZpYy9zcGVjaWZpYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLGdCQUFBO0FDRE47QURFTTtFQUNFLGtCQUFBO0FDQVI7QURFTTtFQUNFLHFCQUFBO0FDQVI7QURPRTtFQUNFLGVBQUE7QUNKSjtBRFFBO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtBQ0xGO0FEUUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy92aXNpdC10eXBlL3NwZWNpZmljL3NwZWNpZmljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICBmb3JtIHtcbiAgICBpb24tbGlzdCB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ubGFiZWwtc3RhY2tlZCB7XG4gICYuc2MtaW9uLWxhYmVsLW1kLWgge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5cbi5pb25EYXRlVGltZVN0YXJ0IHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiaW9uLWNvbnRlbnQgZm9ybSBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5pb24tY29udGVudCBmb3JtIGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuaW9uLWNvbnRlbnQgZm9ybSBpb24tbGlzdCBpb24tYnV0dG9uIHtcbiAgLS1ib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4ubGFiZWwtc3RhY2tlZC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuaW9uLWxpc3Qge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuXG4uaW9uRGF0ZVRpbWVTdGFydCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SpecificComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-specific',
                templateUrl: './specific.component.html',
                styleUrls: ['./specific.component.scss'],
            }]
    }], function () { return [{ type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"] }, { type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_6__["CacheService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }]; }, { dateStartSpecific: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], specificStartHourSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], specificEndHourSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], specificTotalHour: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], showButtonNext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/visit-type/visit-type-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/visit-type/visit-type-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VisitTypePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitTypePageRoutingModule", function() { return VisitTypePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _visit_type_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visit-type.page */ "./src/app/pages/visit-type/visit-type.page.ts");





const routes = [
    {
        path: '',
        component: _visit_type_page__WEBPACK_IMPORTED_MODULE_2__["VisitTypePage"],
    },
    {
        path: 'company-info',
        loadChildren: () => __webpack_require__.e(/*! import() | company-info-company-info-module */ "company-info-company-info-module").then(__webpack_require__.bind(null, /*! ../company-info/company-info.module */ "./src/app/pages/company-info/company-info.module.ts")).then(m => m.CompanyInfoPageModule),
    },
];
class VisitTypePageRoutingModule {
}
VisitTypePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VisitTypePageRoutingModule });
VisitTypePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VisitTypePageRoutingModule_Factory(t) { return new (t || VisitTypePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisitTypePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitTypePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/visit-type/visit-type.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/visit-type/visit-type.module.ts ***!
  \*******************************************************/
/*! exports provided: MY_FORMATS, VisitTypePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function() { return MY_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitTypePageModule", function() { return VisitTypePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _per_project_per_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./per-project/per-project.component */ "./src/app/pages/visit-type/per-project/per-project.component.ts");
/* harmony import */ var _specific_specific_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specific/specific.component */ "./src/app/pages/visit-type/specific/specific.component.ts");
/* harmony import */ var _visit_type_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visit-type-routing.module */ "./src/app/pages/visit-type/visit-type-routing.module.ts");
/* harmony import */ var _visit_type_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./visit-type.page */ "./src/app/pages/visit-type/visit-type.page.ts");
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-material-timepicker */ "./node_modules/ngx-material-timepicker/__ivy_ngcc__/fesm2015/ngx-material-timepicker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/__ivy_ngcc__/esm2015/material.js");
/* harmony import */ var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material-moment-adapter */ "./node_modules/@angular/material-moment-adapter/__ivy_ngcc__/fesm2015/material-moment-adapter.js");














// export const MY_FORMATS = {
//   parse: {
//     dateInput: 'MMMM YYYY',
//   },
//   display: {
//     dateInput: 'MMMM YYYY',
//     monthYearLabel: 'MMMM YYYY',
//     dateA11yLabel: 'LL',
//     monthYearA11yLabel: 'MMMM YYYY',
//   },
// };
const MY_FORMATS = {
    parse: {
        dateInput: 'MMMM YYYY',
    },
    display: {
        dateInput: 'MMMM YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
class VisitTypePageModule {
}
VisitTypePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VisitTypePageModule });
VisitTypePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function VisitTypePageModule_Factory(t) { return new (t || VisitTypePageModule)(); }, providers: [
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
        { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"], useValue: 'es-ES' },
        {
            provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
            useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MomentDateAdapter"],
            deps: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]],
        },
        { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerModule"],
            _visit_type_routing_module__WEBPACK_IMPORTED_MODULE_7__["VisitTypePageRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VisitTypePageModule, { declarations: [_visit_type_page__WEBPACK_IMPORTED_MODULE_8__["VisitTypePage"], _specific_specific_component__WEBPACK_IMPORTED_MODULE_6__["SpecificComponent"], _per_project_per_project_component__WEBPACK_IMPORTED_MODULE_5__["PerProjectComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerModule"],
        _visit_type_routing_module__WEBPACK_IMPORTED_MODULE_7__["VisitTypePageRoutingModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitTypePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                    ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_9__["NgxMaterialTimepickerModule"],
                    _visit_type_routing_module__WEBPACK_IMPORTED_MODULE_7__["VisitTypePageRoutingModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                ],
                declarations: [_visit_type_page__WEBPACK_IMPORTED_MODULE_8__["VisitTypePage"], _specific_specific_component__WEBPACK_IMPORTED_MODULE_6__["SpecificComponent"], _per_project_per_project_component__WEBPACK_IMPORTED_MODULE_5__["PerProjectComponent"]],
                providers: [
                    _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_3__["DatePicker"],
                    { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"], useValue: 'es-ES' },
                    {
                        provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["DateAdapter"],
                        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MomentDateAdapter"],
                        deps: [_angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_11__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]],
                    },
                    { provide: _angular_material__WEBPACK_IMPORTED_MODULE_10__["MAT_DATE_FORMATS"], useValue: MY_FORMATS },
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/visit-type/visit-type.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/visit-type/visit-type.page.ts ***!
  \*****************************************************/
/*! exports provided: VisitTypePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitTypePage", function() { return VisitTypePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cache/cache.service */ "./src/app/services/cache/cache.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _specific_specific_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./specific/specific.component */ "./src/app/pages/visit-type/specific/specific.component.ts");
/* harmony import */ var _per_project_per_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./per-project/per-project.component */ "./src/app/pages/visit-type/per-project/per-project.component.ts");












function VisitTypePage_app_specific_18_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-specific", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateStartSpecific", function VisitTypePage_app_specific_18_Template_app_specific_dateStartSpecific_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.getDateStart($event); })("specificStartHourSelected", function VisitTypePage_app_specific_18_Template_app_specific_specificStartHourSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.getSpecificStartHour($event); })("specificEndHourSelected", function VisitTypePage_app_specific_18_Template_app_specific_specificEndHourSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.getSpecificEndHour($event); })("specificTotalHour", function VisitTypePage_app_specific_18_Template_app_specific_specificTotalHour_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.getTotalHoursSpecific($event); })("showButtonNext", function VisitTypePage_app_specific_18_Template_app_specific_showButtonNext_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.getShowButtonNext($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitTypePage_app_per_project_19_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-per-project", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("showButtonNext", function VisitTypePage_app_per_project_19_Template_app_per_project_showButtonNext_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.getShowButtonNext($event); })("projectDateSelected", function VisitTypePage_app_per_project_19_Template_app_per_project_projectDateSelected_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.getProjectDateSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VisitTypePage_ion_fab_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-fab", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitTypePage_ion_fab_20_Template_ion_fab_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Continuar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { primary: a0, transparent: a1 }; };
/**
 * Componente de tipo de visita.
 */
class VisitTypePage {
    constructor(router, cacheService, alertController) {
        this.router = router;
        this.cacheService = cacheService;
        this.alertController = alertController;
        /**
         * Nombre para visita específica.
         */
        this.SPECIFIC_FRAME = 'Especifica';
        /**
         * Nombre para visita por proyecto.
         */
        this.PER_PROJECT_FRAME = 'Proyecto';
        /**
         * Se crean estos objetos para almacenar la respuesta y de esta manera ir teniedo la información
         * al momento de enviar todo el formulario
         */
        this.objectSpecific = {};
        this.objectProject = {};
    }
    ngOnInit() {
        const infoVisitType = this.cacheService.getSaveTypeAdvice();
        this.subframe = Object.keys(infoVisitType).length === 0 ? this.SPECIFIC_FRAME : infoVisitType.type;
    }
    /**
     * Cambia el frame del tipo de visita actualmente activo.
     *
     * @param subframe Nombre del frame que va a volverse activo.
     */
    switchFrame(subframe) {
        this.subframe = subframe;
    }
    /**
     * ************ ASESORÍA ESPECIFICA ***********
     * Los métodos que se mencionan a continuación simplemente reciben la información
     * del componente specific.component.ts por medio de los Output() para "centralizar"
     * de alguna manera la data en el componente padre. Los metodos son los siguientes:
     * 1. getDateStart( dateSpecific ) : El encargado de manipular la fecha inicial de la asesoria.
     * 2. getSpecificStartHour( specificStartHour ): Es el encargado de manipular la hora inicial
     * del a asesoría.
     * 3. getSpecificEndHour( specificEndHour ): Es el encargado de manipular la hora final de la asesoria
     * 4. getTotalHoursSpecific( totalHoursSpecific ): Es el encargado de manipular el número total de horas
     * de la asesoria
     */
    getDateStart(dateSpecific) {
        this.dateSpecific = dateSpecific;
    }
    getSpecificStartHour(specificStartHour) {
        this.startHourSpecific = specificStartHour;
    }
    getSpecificEndHour(specificEndHour) {
        this.endHourSpecific = specificEndHour;
    }
    getTotalHoursSpecific(totalHoursSpecific) {
        this.totalHourSpecific = totalHoursSpecific;
    }
    getShowButtonNext(showButton) {
        this.showButtonNext = showButton;
    }
    /**
     * Este método es el encargado de validar que exista una fecha de asesoria por proyecto para
     * dejarlo seguir tranzando
     */
    getProjectDateSelected(dateProjectSelected) {
        this.dateProject = dateProjectSelected;
    }
    next() {
        if (this.subframe === 'Especifica') {
            this.objectSpecific = {
                type: this.subframe,
                typeSelected: true,
                fechaInicialAsesoria: this.dateSpecific,
                startHour: this.startHourSpecific,
                endHour: this.endHourSpecific,
                totalHours: this.totalHourSpecific,
            };
            this.cacheService.saveTypeAdvice(this.objectSpecific);
            this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects/type/company-info');
            return;
        }
        if (this.subframe === 'Proyecto') {
            if (this.dateProject) {
                const date = this.dateProject.split('T')[0].split('-');
                const month = this.changeTextForMounth(date[1]);
                this.objectProject = {
                    type: this.subframe,
                    typeSelected: true,
                    year: date[0],
                    month,
                    date: this.dateProject,
                };
                this.cacheService.saveTypeAdvice(this.objectProject);
                this.router.navigateByUrl('/u/execLog/pending-visits/visit-id/subjects/type/company-info');
            }
        }
    }
    changeTextForMounth(numMes) {
        switch (numMes) {
            case '01':
                return 'Enero';
            case '02':
                return 'Febrero';
            case '03':
                return 'Marzo';
            case '04':
                return 'Abril';
            case '05':
                return 'Mayo';
            case '06':
                return 'Junio';
            case '07':
                return 'Julio';
            case '08':
                return 'Agosto';
            case '09':
                return 'Septiembre';
            case '10':
                return 'Octubre';
            case '11':
                return 'Noviembre';
            case '12':
                return 'Diciembre';
            default:
                break;
        }
    }
    Alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Atención',
                mode: 'ios',
                message: this.messageNotificacion,
                buttons: ['ACEPTAR'],
            });
            yield alert.present();
        });
    }
}
VisitTypePage.ɵfac = function VisitTypePage_Factory(t) { return new (t || VisitTypePage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"])); };
VisitTypePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VisitTypePage, selectors: [["app-visit-type"]], decls: 21, vars: 12, consts: [[1, "ion-no-border"], ["size", "2"], ["color", "tertiary"], ["slot", "start"], ["mode", "md", "color", "primary", "defaultHref", "/"], ["size", "10"], [1, "titulo"], [1, "mt-5", "text-center", "visit-selector"], [1, "selector-wrapper", "d-inline-block", "rounded"], [1, "btn", "primary", "rounded", "ion-text-md-uppercase", 3, "ngClass", "click"], [1, "btn", "transparent", "rounded", "ion-text-md-uppercase", 3, "ngClass", "click"], [3, "ngSwitch"], [3, "dateStartSpecific", "specificStartHourSelected", "specificEndHourSelected", "specificTotalHour", "showButtonNext", 4, "ngSwitchCase"], [3, "showButtonNext", "projectDateSelected", 4, "ngSwitchCase"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed", 3, "click", 4, "ngIf"], [3, "dateStartSpecific", "specificStartHourSelected", "specificEndHourSelected", "specificTotalHour", "showButtonNext"], [3, "showButtonNext", "projectDateSelected"], ["vertical", "bottom", "horizontal", "center", "slot", "fixed", 3, "click"], ["color", "primary", "mode", "ios", "expand", "block", 1, "btn"]], template: function VisitTypePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ion-grid");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ion-col", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ion-toolbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ion-back-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ion-col", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ion-title", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Tipo de asesor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitTypePage_Template_button_click_13_listener() { return ctx.switchFrame(ctx.SPECIFIC_FRAME); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Espec\u00EDfica ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VisitTypePage_Template_button_click_15_listener() { return ctx.switchFrame(ctx.PER_PROJECT_FRAME); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Por proyecto ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, VisitTypePage_app_specific_18_Template, 1, 0, "app-specific", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, VisitTypePage_app_per_project_19_Template, 1, 0, "app-per-project", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, VisitTypePage_ion_fab_20_Template, 3, 0, "ion-fab", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](6, _c0, ctx.subframe === ctx.SPECIFIC_FRAME, ctx.subframe !== ctx.SPECIFIC_FRAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](9, _c0, ctx.subframe === ctx.PER_PROJECT_FRAME, ctx.subframe !== ctx.PER_PROJECT_FRAME));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.subframe);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.SPECIFIC_FRAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", ctx.PER_PROJECT_FRAME);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showButtonNext);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _specific_specific_component__WEBPACK_IMPORTED_MODULE_6__["SpecificComponent"], _per_project_per_project_component__WEBPACK_IMPORTED_MODULE_7__["PerProjectComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], styles: ["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n  color: white;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n  background: #95a6b1;\n}\nion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.visit-selector[_ngcontent-%COMP%]   .selector-wrapper[_ngcontent-%COMP%] {\n  border: 2px var(--ion-color-primary) solid;\n}\n.visit-selector[_ngcontent-%COMP%]   .selector-wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding-left: 50px;\n  padding-right: 50px;\n  height: 40px;\n  outline: none !important;\n}\n.titulo[_ngcontent-%COMP%] {\n  width: 100% !important;\n  font-size: 25px !important;\n  text-align: left;\n  padding: 0px;\n  padding-top: 10px;\n}\n.positionButton[_ngcontent-%COMP%] {\n  transform: translateY(-200px);\n}\nion-fab[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  margin-left: -20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmlzaXQtdHlwZS9DOlxcVXNlcnNcXGNhbHZhcmFkb1xcRG9jdW1lbnRzXFxwcm95ZWN0b1xcQWN0dWFsXFxhbGlzc3RhX3N1bVxcVHJ1bmtcXDIwMjQwNjA3MS9zcmNcXGFwcFxccGFnZXNcXHZpc2l0LXR5cGVcXHZpc2l0LXR5cGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy92aXNpdC10eXBlL3Zpc2l0LXR5cGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERU07RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNBUjtBREVNO0VBQ0UsWUFBQTtBQ0FSO0FET0U7RUFDRSwwQ0FBQTtBQ0pKO0FETUk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FDSk47QURTQTtFQUNFLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ05GO0FEU0E7RUFDRSw2QkFBQTtBQ05GO0FEVUU7RUFDRSxrQkFBQTtBQ1BKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdmlzaXQtdHlwZS92aXNpdC10eXBlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICBpb24tZ3JpZCB7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJhY2tncm91bmQ6ICM5NWE2YjE7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGlvbi1yb3cge1xuICAgICAgaW9uLWNvbCB7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzk1YTZiMTtcbiAgICAgIH1cbiAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4udmlzaXQtc2VsZWN0b3Ige1xuICAmIC5zZWxlY3Rvci13cmFwcGVyIHtcbiAgICBib3JkZXI6IDJweCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgc29saWQ7XG5cbiAgICAmIC5idG4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuLnRpdHVsbyB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4ucG9zaXRpb25CdXR0b24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMHB4KTtcbn1cblxuaW9uLWZhYiB7XG4gICYgaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICB9XG59XG4iLCJpb24taGVhZGVyIGlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiAjOTVhNmIxO1xuICBjb2xvcjogd2hpdGU7XG59XG5pb24taGVhZGVyIGlvbi1ncmlkIGlvbi1yb3cgaW9uLWNvbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZDogIzk1YTZiMTtcbn1cbmlvbi1oZWFkZXIgaW9uLWdyaWQgaW9uLXJvdyBpb24tdG9vbGJhciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnZpc2l0LXNlbGVjdG9yIC5zZWxlY3Rvci13cmFwcGVyIHtcbiAgYm9yZGVyOiAycHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIHNvbGlkO1xufVxuLnZpc2l0LXNlbGVjdG9yIC5zZWxlY3Rvci13cmFwcGVyIC5idG4ge1xuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGl0dWxvIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNXB4ICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59XG5cbi5wb3NpdGlvbkJ1dHRvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwcHgpO1xufVxuXG5pb24tZmFiIGlvbi1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VisitTypePage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-visit-type',
                templateUrl: './visit-type.page.html',
                styleUrls: ['./visit-type.page.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_cache_cache_service__WEBPACK_IMPORTED_MODULE_4__["CacheService"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=visit-type-visit-type-module-es2015.js.map