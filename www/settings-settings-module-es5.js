function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty2(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray2(arr) { return _arrayWithoutHoles2(arr) || _iterableToArray2(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread2(); }

function _nonIterableSpread2() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray2(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles2(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
  /***/
  "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js ***!
    \****************************************************************************************************/

  /*! exports provided: FaConfig, FaDuotoneIconComponent, FaIconComponent, FaIconLibrary, FaIconService, FaLayersComponent, FaLayersCounterComponent, FaLayersTextComponent, FaStackComponent, FaStackItemSizeDirective, FontAwesomeModule, ɵa */

  /***/
  function node_modulesFortawesomeAngularFontawesome__ivy_ngcc__Fesm2015AngularFontawesomeJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaConfig", function () {
      return FaConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaDuotoneIconComponent", function () {
      return FaDuotoneIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaIconComponent", function () {
      return FaIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaIconLibrary", function () {
      return FaIconLibrary;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaIconService", function () {
      return FaIconService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaLayersComponent", function () {
      return FaLayersComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaLayersCounterComponent", function () {
      return FaLayersCounterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaLayersTextComponent", function () {
      return FaLayersTextComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaStackComponent", function () {
      return FaStackComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaStackItemSizeDirective", function () {
      return FaStackItemSizeDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FontAwesomeModule", function () {
      return FontAwesomeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FaLayersTextBaseComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/fontawesome-svg-core */
    "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = [[["fa-icon"], ["fa-duotone-icon"], ["fa-layers-text"], ["fa-layers-counter"]]];
    var _c1 = ["fa-icon, fa-duotone-icon, fa-layers-text, fa-layers-counter"];
    var _c2 = [[["fa-icon", "stackItemSize", ""], ["fa-duotone-icon", "stackItemSize", ""]]];
    var _c3 = ["fa-icon[stackItemSize],fa-duotone-icon[stackItemSize]"];

    var FaConfig = /*#__PURE__*/_createClass2(function FaConfig() {
      _classCallCheck2(this, FaConfig);

      /**
       * Default prefix to use, when one is not provided with the icon name.
       *
       * \@default 'fas'
       */
      this.defaultPrefix = 'fas';
      /**
       * Whether components should lookup icon definitions in the global icon
       * library (the one available from
       * `import { library } from '\@fortawesome/fontawesome-svg-core')`.
       *
       * See https://github.com/FortAwesome/angular-fontawesome/blob/master/docs/usage/icon-library.md
       * for detailed description of library modes.
       *
       * - 'unset' - Components should lookup icon definitions in the global library
       * and emit warning if they find a definition there. This option is a default
       * to assist existing applications with a migration. Applications are expected
       * to switch to using {\@link FaIconLibrary}.
       * - true - Components should lookup icon definitions in the global library.
       * Note that global icon library is deprecated and support for it will be
       * removed. This option can be used to temporarily suppress warnings.
       * - false - Components should not lookup icon definitions in the global
       * library. Library will throw an error if missing icon is found in the global
       * library.
       *
       * @deprecated This option is deprecated since 0.5.0. In 0.6.0 default will
       * be changed to false. In 0.7.0 the option will be removed together with the
       * support for the global icon library.
       *
       * \@default 'unset'
       */

      this.globalLibrary = 'unset';
    });

    FaConfig.ɵfac = function FaConfig_Factory(t) {
      return new (t || FaConfig)();
    };

    FaConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FaConfig,
      factory: FaConfig.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    FaConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FaConfig_Factory() {
        return new FaConfig();
      },
      token: FaConfig,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FaIconLibrary = /*#__PURE__*/function () {
      function FaIconLibrary() {
        _classCallCheck2(this, FaIconLibrary);

        this.definitions = {};
      }
      /**
       * @param {...?} icons
       * @return {?}
       */


      _createClass2(FaIconLibrary, [{
        key: "addIcons",
        value: function addIcons() {
          for (var i = 0; i < arguments.length; i++) {
            /** @type {?} */
            var icon = i < 0 || arguments.length <= i ? undefined : arguments[i];

            if (!(icon.prefix in this.definitions)) {
              this.definitions[icon.prefix] = {};
            }

            this.definitions[icon.prefix][icon.iconName] = icon;
          }
        }
        /**
         * @param {...?} packs
         * @return {?}
         */

      }, {
        key: "addIconPacks",
        value: function addIconPacks() {
          var _arguments = arguments,
              _this2 = this;

          var _loop = function _loop() {
            /** @type {?} */
            var pack = i < 0 || _arguments.length <= i ? undefined : _arguments[i];
            /** @type {?} */

            var icons = Object.keys(pack).map(
            /**
            * @param {?} key
            * @return {?}
            */
            function (key) {
              return pack[key];
            });

            _this2.addIcons.apply(_this2, _toConsumableArray2(icons));
          };

          for (var i = 0; i < arguments.length; i++) {
            _loop();
          }
        }
        /**
         * @param {?} prefix
         * @param {?} name
         * @return {?}
         */

      }, {
        key: "getIconDefinition",
        value: function getIconDefinition(prefix, name) {
          if (prefix in this.definitions && name in this.definitions[prefix]) {
            return this.definitions[prefix][name];
          }

          return null;
        }
      }]);

      return FaIconLibrary;
    }();

    FaIconLibrary.ɵfac = function FaIconLibrary_Factory(t) {
      return new (t || FaIconLibrary)();
    };

    FaIconLibrary.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FaIconLibrary,
      factory: FaIconLibrary.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    FaIconLibrary.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FaIconLibrary_Factory() {
        return new FaIconLibrary();
      },
      token: FaIconLibrary,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaIconLibrary, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var faWarnIfIconDefinitionMissing =
    /**
    * @param {?} iconSpec
    * @return {?}
    */
    function faWarnIfIconDefinitionMissing(iconSpec) {
      console.error("FontAwesome: Could not find icon with iconName=".concat(iconSpec.iconName, " and prefix=").concat(iconSpec.prefix, ". ") + "This warning will become a hard error in 0.6.0.");
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var faWarnIfIconSpecMissing =
    /**
    * @return {?}
    */
    function faWarnIfIconSpecMissing() {
      console.error('FontAwesome: Property `icon` is required for `fa-icon`/`fa-duotone-icon` components. ' + "This warning will become a hard error in 0.6.0.");
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Fontawesome class list.
     * Returns classes array by props.
     * @type {?}
     */


    var faClassList =
    /**
    * @param {?} props
    * @return {?}
    */
    function faClassList(props) {
      var _classes;

      /** @type {?} */
      var classes = (_classes = {
        'fa-spin': props.spin,
        'fa-pulse': props.pulse,
        'fa-fw': props.fixedWidth,
        'fa-border': props.border,
        'fa-li': props.listItem,
        'fa-inverse': props.inverse,
        'fa-layers-counter': props.counter,
        'fa-flip-horizontal': props.flip === 'horizontal' || props.flip === 'both',
        'fa-flip-vertical': props.flip === 'vertical' || props.flip === 'both'
      }, _defineProperty2(_classes, "fa-".concat(props.size), props.size !== null), _defineProperty2(_classes, "fa-rotate-".concat(props.rotate), props.rotate !== null), _defineProperty2(_classes, "fa-pull-".concat(props.pull), props.pull !== null), _defineProperty2(_classes, "fa-stack-".concat(props.stackItemSize), props.stackItemSize != null), _classes);
      return Object.keys(classes).map(
      /**
      * @param {?} key
      * @return {?}
      */
      function (key) {
        return classes[key] ? key : null;
      }).filter(
      /**
      * @param {?} key
      * @return {?}
      */
      function (key) {
        return key;
      });
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns if is IconLookup or not.
     * @type {?}
     */


    var isIconLookup =
    /**
    * @param {?} i
    * @return {?}
    */
    function isIconLookup(i) {
      return (
        /** @type {?} */
        i.prefix !== undefined &&
        /** @type {?} */
        i.iconName !== undefined
      );
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Normalizing icon spec.
     * @type {?}
     */


    var faNormalizeIconSpec =
    /**
    * @param {?} iconSpec
    * @param {?} defaultPrefix
    * @return {?}
    */
    function faNormalizeIconSpec(iconSpec, defaultPrefix) {
      if (isIconLookup(iconSpec)) {
        return iconSpec;
      }

      if (Array.isArray(iconSpec) &&
      /** @type {?} */
      iconSpec.length === 2) {
        return {
          prefix: iconSpec[0],
          iconName: iconSpec[1]
        };
      }

      if (typeof iconSpec === 'string') {
        return {
          prefix: defaultPrefix,
          iconName: iconSpec
        };
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FaStackItemSizeDirective = /*#__PURE__*/function () {
      function FaStackItemSizeDirective() {
        _classCallCheck2(this, FaStackItemSizeDirective);

        /**
         * Specify whether icon inside {\@link FaStackComponent} should be rendered in
         * regular size (1x) or as a larger icon (2x).
         */
        this.stackItemSize = '1x';
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass2(FaStackItemSizeDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if ('size' in changes) {
            throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. ' + 'Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.');
          }
        }
      }]);

      return FaStackItemSizeDirective;
    }();

    FaStackItemSizeDirective.ɵfac = function FaStackItemSizeDirective_Factory(t) {
      return new (t || FaStackItemSizeDirective)();
    };

    FaStackItemSizeDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FaStackItemSizeDirective,
      selectors: [["fa-icon", "stackItemSize", ""], ["fa-duotone-icon", "stackItemSize", ""]],
      inputs: {
        stackItemSize: "stackItemSize",
        size: "size"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    FaStackItemSizeDirective.propDecorators = {
      stackItemSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaStackItemSizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: 'fa-icon[stackItemSize],fa-duotone-icon[stackItemSize]'
        }]
      }], function () {
        return [];
      }, {
        stackItemSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FaIconComponent = /*#__PURE__*/function () {
      /**
       * @param {?} sanitizer
       * @param {?} config
       * @param {?} iconLibrary
       * @param {?} stackItem
       */
      function FaIconComponent(sanitizer, config, iconLibrary, stackItem) {
        _classCallCheck2(this, FaIconComponent);

        this.sanitizer = sanitizer;
        this.config = config;
        this.iconLibrary = iconLibrary;
        this.stackItem = stackItem;
        this.classes = [];
      }
      /**
       * @deprecated Since 0.5.0. Will be removed in 0.6.0. Use `icon` property directly.
       * @return {?}
       */


      _createClass2(FaIconComponent, [{
        key: "iconProp",
        get: function get() {
          return this.icon;
        }
        /**
         * @deprecated Since 0.5.0. Will be removed in 0.6.0. Use `icon` property directly.
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.icon = value;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.icon == null) {
            return faWarnIfIconSpecMissing();
          }

          if (changes) {
            /** @type {?} */
            var iconDefinition = this.findIconDefinition(this.icon);

            if (iconDefinition != null) {
              /** @type {?} */
              var params = this.buildParams();
              this.renderIcon(iconDefinition, params);
            }
          }
        }
        /**
         * Programmatically trigger rendering of the icon.
         *
         * This method is useful, when creating {\@link FaIconComponent} dynamically or
         * changing its inputs programmatically as in these cases icon won't be
         * re-rendered automatically.
         * @return {?}
         */

      }, {
        key: "render",
        value: function render() {
          this.ngOnChanges({});
        }
        /**
         * @protected
         * @param {?} i
         * @return {?}
         */

      }, {
        key: "findIconDefinition",
        value: function findIconDefinition(i) {
          /** @type {?} */
          var lookup = faNormalizeIconSpec(i, this.config.defaultPrefix);

          if ('icon' in lookup) {
            return lookup;
          }
          /** @type {?} */


          var definition = this.iconLibrary.getIconDefinition(lookup.prefix, lookup.iconName);

          if (definition != null) {
            return definition;
          }
          /** @type {?} */


          var globalDefinition = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["findIconDefinition"])(lookup);

          if (globalDefinition != null) {
            /** @type {?} */
            var message = 'Global icon library is deprecated. ' + 'Consult https://github.com/FortAwesome/angular-fontawesome/blob/master/UPGRADING.md ' + 'for the migration instructions.';

            if (this.config.globalLibrary === 'unset') {
              console.error('FontAwesome: ' + message);
            } else if (!this.config.globalLibrary) {
              throw new Error(message);
            }

            return globalDefinition;
          }

          faWarnIfIconDefinitionMissing(lookup);
          return null;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "buildParams",
        value: function buildParams() {
          /** @type {?} */
          var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth,
            stackItemSize: this.stackItem != null ? this.stackItem.stackItemSize : null
          };
          /** @type {?} */

          var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["parse"].transform(this.transform) : this.transform;
          return {
            title: this.title,
            transform: parsedTransform,
            classes: [].concat(_toConsumableArray2(faClassList(classOpts)), _toConsumableArray2(this.classes)),
            mask: this.mask != null ? this.findIconDefinition(this.mask) : null,
            styles: this.styles != null ? this.styles : {},
            symbol: this.symbol,
            attributes: {
              role: this.a11yRole
            }
          };
        }
        /**
         * @private
         * @param {?} definition
         * @param {?} params
         * @return {?}
         */

      }, {
        key: "renderIcon",
        value: function renderIcon(definition, params) {
          /** @type {?} */
          var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["icon"])(definition, params);
          this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(renderedIcon.html.join('\n'));
        }
      }]);

      return FaIconComponent;
    }();

    FaIconComponent.ɵfac = function FaIconComponent_Factory(t) {
      return new (t || FaIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FaConfig), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FaIconLibrary), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](FaStackItemSizeDirective, 8));
    };

    FaIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaIconComponent,
      selectors: [["fa-icon"]],
      hostAttrs: [1, "ng-fa-icon"],
      hostVars: 2,
      hostBindings: function FaIconComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("innerHTML", ctx.renderedIconHTML, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("title", ctx.title);
        }
      },
      inputs: {
        classes: "classes",
        icon: "icon",
        title: "title",
        spin: "spin",
        pulse: "pulse",
        mask: "mask",
        styles: "styles",
        flip: "flip",
        size: "size",
        pull: "pull",
        border: "border",
        inverse: "inverse",
        symbol: "symbol",
        listItem: "listItem",
        rotate: "rotate",
        fixedWidth: "fixedWidth",
        transform: "transform",
        a11yRole: "a11yRole"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function FaIconComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    /** @nocollapse */

    FaIconComponent.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
      }, {
        type: FaConfig
      }, {
        type: FaIconLibrary
      }, {
        type: FaStackItemSizeDirective,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    FaIconComponent.propDecorators = {
      icon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      spin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pulse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      mask: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      styles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      flip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pull: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      border: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inverse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      symbol: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fixedWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      classes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transform: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      a11yRole: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      renderedIconHTML: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['innerHTML']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fa-icon',
          template: "",
          host: {
            "class": 'ng-fa-icon',
            '[attr.title]': 'title'
          }
        }]
      }], function () {
        return [{
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }, {
          type: FaConfig
        }, {
          type: FaIconLibrary
        }, {
          type: FaStackItemSizeDirective,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }];
      }, {
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        icon: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        renderedIconHTML: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['innerHTML']
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        spin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pulse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        mask: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        flip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pull: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        border: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inverse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        symbol: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fixedWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        a11yRole: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FaDuotoneIconComponent = /*#__PURE__*/function (_FaIconComponent) {
      _inherits(FaDuotoneIconComponent, _FaIconComponent);

      var _super = _createSuper(FaDuotoneIconComponent);

      function FaDuotoneIconComponent() {
        _classCallCheck2(this, FaDuotoneIconComponent);

        return _super.apply(this, arguments);
      }

      _createClass2(FaDuotoneIconComponent, [{
        key: "findIconDefinition",
        value:
        /**
         * @protected
         * @param {?} i
         * @return {?}
         */
        function findIconDefinition(i) {
          /** @type {?} */
          var lookup = _get(_getPrototypeOf(FaDuotoneIconComponent.prototype), "findIconDefinition", this).call(this, i);

          if (lookup != null && lookup.prefix !== 'fad') {
            throw new Error('The specified icon does not appear to be a Duotone icon. ' + 'Check that you specified the correct style: ' + "<fa-duotone-icon [icon]=\"['fab', '".concat(lookup.iconName, "']\"></fa-duotone-icon> ") + "or use: <fa-icon icon=\"".concat(lookup.iconName, "\"></fa-icon> instead."));
          }

          return lookup;
        }
        /**
         * @protected
         * @return {?}
         */

      }, {
        key: "buildParams",
        value: function buildParams() {
          /** @type {?} */
          var params = _get(_getPrototypeOf(FaDuotoneIconComponent.prototype), "buildParams", this).call(this);

          if (this.swapOpacity === true || this.swapOpacity === 'true') {
            params.classes.push('fa-swap-opacity');
          }

          if (this.primaryOpacity != null) {
            params.styles['--fa-primary-opacity'] = this.primaryOpacity.toString();
          }

          if (this.secondaryOpacity != null) {
            params.styles['--fa-secondary-opacity'] = this.secondaryOpacity.toString();
          }

          if (this.primaryColor != null) {
            params.styles['--fa-primary-color'] = this.primaryColor;
          }

          if (this.secondaryColor != null) {
            params.styles['--fa-secondary-color'] = this.secondaryColor;
          }

          return params;
        }
      }]);

      return FaDuotoneIconComponent;
    }(FaIconComponent);

    FaDuotoneIconComponent.ɵfac = function FaDuotoneIconComponent_Factory(t) {
      return ɵFaDuotoneIconComponent_BaseFactory(t || FaDuotoneIconComponent);
    };

    FaDuotoneIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaDuotoneIconComponent,
      selectors: [["fa-duotone-icon"]],
      inputs: {
        swapOpacity: "swapOpacity",
        primaryOpacity: "primaryOpacity",
        secondaryOpacity: "secondaryOpacity",
        primaryColor: "primaryColor",
        secondaryColor: "secondaryColor"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function FaDuotoneIconComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    FaDuotoneIconComponent.propDecorators = {
      swapOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      primaryOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      secondaryOpacity: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      primaryColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      secondaryColor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var ɵFaDuotoneIconComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FaDuotoneIconComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaDuotoneIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fa-duotone-icon',
          template: ""
        }]
      }], null, {
        swapOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        primaryOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        secondaryOpacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        primaryColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        secondaryColor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Fontawesome layers.
     */


    var FaLayersComponent = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function FaLayersComponent(renderer, elementRef) {
        _classCallCheck2(this, FaLayersComponent);

        this.renderer = renderer;
        this.elementRef = elementRef;
      }
      /**
       * @return {?}
       */


      _createClass2(FaLayersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if ('size' in changes) {
            if (changes.size.currentValue != null) {
              this.renderer.addClass(this.elementRef.nativeElement, "fa-".concat(changes.size.currentValue));
            }

            if (changes.size.previousValue != null) {
              this.renderer.removeClass(this.elementRef.nativeElement, "fa-".concat(changes.size.previousValue));
            }
          }
        }
      }]);

      return FaLayersComponent;
    }();

    FaLayersComponent.ɵfac = function FaLayersComponent_Factory(t) {
      return new (t || FaLayersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FaLayersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaLayersComponent,
      selectors: [["fa-layers"]],
      hostVars: 2,
      hostBindings: function FaLayersComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fa-fw", ctx.fixedWidth);
        }
      },
      inputs: {
        size: "size",
        fixedWidth: "fixedWidth"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c1,
      decls: 1,
      vars: 0,
      template: function FaLayersComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    FaLayersComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FaLayersComponent.propDecorators = {
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fixedWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['class.fa-fw']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaLayersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fa-layers',
          template: "<ng-content select=\"fa-icon, fa-duotone-icon, fa-layers-text, fa-layers-counter\"></ng-content>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fixedWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class.fa-fw']
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Warns if parent component not existing.
     * @type {?}
     */


    var faWarnIfParentNotExist =
    /**
    * @param {?} parent
    * @param {?} parentName
    * @param {?} childName
    * @return {?}
    */
    function faWarnIfParentNotExist(parent, parentName, childName) {
      if (!parent) {
        console.error("FontAwesome: ".concat(childName, " should be used as child of ").concat(parentName, " only."));
      }
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */


    var FaLayersTextBaseComponent = /*#__PURE__*/function () {
      /**
       * @param {?} parent
       * @param {?} sanitizer
       */
      function FaLayersTextBaseComponent(parent, sanitizer) {
        _classCallCheck2(this, FaLayersTextBaseComponent);

        this.parent = parent;
        this.sanitizer = sanitizer;
        this.classes = [];
        faWarnIfParentNotExist(this.parent, 'FaLayersComponent', this.constructor.name);
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass2(FaLayersTextBaseComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes) {
            this.updateParams();
            this.updateContent();
          }
        }
        /**
         * Updating content by params and content.
         * @private
         * @return {?}
         */

      }, {
        key: "updateContent",
        value: function updateContent() {
          this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(this.renderFontawesomeObject(this.content || '', this.params).html.join('\n'));
        }
      }]);

      return FaLayersTextBaseComponent;
    }();

    FaLayersTextBaseComponent.ɵfac = function FaLayersTextBaseComponent_Factory(t) {
      return new (t || FaLayersTextBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return FaLayersComponent;
      }), 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
    };

    FaLayersTextBaseComponent.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FaLayersTextBaseComponent,
      factory: FaLayersTextBaseComponent.ɵfac
    });
    FaLayersTextBaseComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: FaLayersTextBaseComponent,
      hostVars: 1,
      hostBindings: function FaLayersTextBaseComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("innerHTML", ctx.renderedHTML, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      inputs: {
        classes: "classes",
        content: "content",
        title: "title",
        styles: "styles"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    FaLayersTextBaseComponent.ctorParameters = function () {
      return [{
        type: FaLayersComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return FaLayersComponent;
          })]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
      }];
    };

    FaLayersTextBaseComponent.propDecorators = {
      renderedHTML: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
        args: ['innerHTML']
      }],
      content: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      styles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      classes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaLayersTextBaseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: FaLayersComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
            /**
            * @return {?}
            */
            function () {
              return FaLayersComponent;
            })]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
        }];
      }, {
        classes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        renderedHTML: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['innerHTML']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        styles: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Fontawesome layers counter.
     */


    var FaLayersCounterComponent = /*#__PURE__*/function (_FaLayersTextBaseComp) {
      _inherits(FaLayersCounterComponent, _FaLayersTextBaseComp);

      var _super2 = _createSuper(FaLayersCounterComponent);

      function FaLayersCounterComponent() {
        _classCallCheck2(this, FaLayersCounterComponent);

        return _super2.apply(this, arguments);
      }

      _createClass2(FaLayersCounterComponent, [{
        key: "updateParams",
        value:
        /**
         * Updating params by component props.
         * @protected
         * @return {?}
         */
        function updateParams() {
          this.params = {
            title: this.title,
            classes: this.classes,
            styles: this.styles
          };
        }
        /**
         * @protected
         * @param {?} content
         * @param {?=} params
         * @return {?}
         */

      }, {
        key: "renderFontawesomeObject",
        value: function renderFontawesomeObject(content, params) {
          return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["counter"])(content, params);
        }
      }]);

      return FaLayersCounterComponent;
    }(FaLayersTextBaseComponent);

    FaLayersCounterComponent.ɵfac = function FaLayersCounterComponent_Factory(t) {
      return ɵFaLayersCounterComponent_BaseFactory(t || FaLayersCounterComponent);
    };

    FaLayersCounterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaLayersCounterComponent,
      selectors: [["fa-layers-counter"]],
      hostAttrs: [1, "ng-fa-layers-counter"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function FaLayersCounterComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    var ɵFaLayersCounterComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FaLayersCounterComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaLayersCounterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fa-layers-counter',
          template: '',
          host: {
            "class": 'ng-fa-layers-counter'
          }
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Fontawesome layers text.
     */


    var FaLayersTextComponent = /*#__PURE__*/function (_FaLayersTextBaseComp2) {
      _inherits(FaLayersTextComponent, _FaLayersTextBaseComp2);

      var _super3 = _createSuper(FaLayersTextComponent);

      function FaLayersTextComponent() {
        _classCallCheck2(this, FaLayersTextComponent);

        return _super3.apply(this, arguments);
      }

      _createClass2(FaLayersTextComponent, [{
        key: "updateParams",
        value:
        /**
         * Updating params by component props.
         * @protected
         * @return {?}
         */
        function updateParams() {
          /** @type {?} */
          var classOpts = {
            flip: this.flip,
            spin: this.spin,
            pulse: this.pulse,
            border: this.border,
            inverse: this.inverse,
            listItem: this.listItem,
            size: this.size || null,
            pull: this.pull || null,
            rotate: this.rotate || null,
            fixedWidth: this.fixedWidth
          };
          /** @type {?} */

          var parsedTransform = typeof this.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["parse"].transform(this.transform) : this.transform;
          this.params = {
            transform: parsedTransform,
            classes: [].concat(_toConsumableArray2(faClassList(classOpts)), _toConsumableArray2(this.classes)),
            title: this.title,
            styles: this.styles
          };
        }
        /**
         * @protected
         * @param {?} content
         * @param {?=} params
         * @return {?}
         */

      }, {
        key: "renderFontawesomeObject",
        value: function renderFontawesomeObject(content, params) {
          return Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_2__["text"])(content, params);
        }
      }]);

      return FaLayersTextComponent;
    }(FaLayersTextBaseComponent);

    FaLayersTextComponent.ɵfac = function FaLayersTextComponent_Factory(t) {
      return ɵFaLayersTextComponent_BaseFactory(t || FaLayersTextComponent);
    };

    FaLayersTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaLayersTextComponent,
      selectors: [["fa-layers-text"]],
      hostAttrs: [1, "ng-fa-layers-text"],
      inputs: {
        spin: "spin",
        pulse: "pulse",
        flip: "flip",
        size: "size",
        pull: "pull",
        border: "border",
        inverse: "inverse",
        listItem: "listItem",
        rotate: "rotate",
        fixedWidth: "fixedWidth",
        transform: "transform"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function FaLayersTextComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    FaLayersTextComponent.propDecorators = {
      spin: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pulse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      flip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pull: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      border: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inverse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      fixedWidth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      transform: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };

    var ɵFaLayersTextComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](FaLayersTextComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaLayersTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fa-layers-text',
          template: '',
          host: {
            "class": 'ng-fa-layers-text'
          }
        }]
      }], null, {
        spin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pulse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        flip: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        pull: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        border: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        inverse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fixedWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        transform: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FaStackComponent = /*#__PURE__*/function () {
      /**
       * @param {?} renderer
       * @param {?} elementRef
       */
      function FaStackComponent(renderer, elementRef) {
        _classCallCheck2(this, FaStackComponent);

        this.renderer = renderer;
        this.elementRef = elementRef;
      }
      /**
       * @return {?}
       */


      _createClass2(FaStackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.renderer.addClass(this.elementRef.nativeElement, 'fa-stack');
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if ('size' in changes) {
            if (changes.size.currentValue != null) {
              this.renderer.addClass(this.elementRef.nativeElement, "fa-".concat(changes.size.currentValue));
            }

            if (changes.size.previousValue != null) {
              this.renderer.removeClass(this.elementRef.nativeElement, "fa-".concat(changes.size.previousValue));
            }
          }
        }
      }]);

      return FaStackComponent;
    }();

    FaStackComponent.ɵfac = function FaStackComponent_Factory(t) {
      return new (t || FaStackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    FaStackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FaStackComponent,
      selectors: [["fa-stack"]],
      inputs: {
        size: "size"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 0,
      template: function FaStackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });
    /** @nocollapse */

    FaStackComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    FaStackComponent.propDecorators = {
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaStackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'fa-stack',
          // TODO: See if it is better to select fa-icon and throw if it does not have stackItemSize directive
          template: "<ng-content select=\"fa-icon[stackItemSize],fa-duotone-icon[stackItemSize]\"></ng-content>"
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var FontAwesomeModule = /*#__PURE__*/_createClass2(function FontAwesomeModule() {
      _classCallCheck2(this, FontAwesomeModule);
    });

    FontAwesomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FontAwesomeModule
    });
    FontAwesomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FontAwesomeModule_Factory(t) {
        return new (t || FontAwesomeModule)();
      }
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FontAwesomeModule, {
        declarations: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
        exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FontAwesomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
          exports: [FaIconComponent, FaDuotoneIconComponent, FaLayersComponent, FaLayersTextComponent, FaLayersCounterComponent, FaStackComponent, FaStackItemSizeDirective],
          entryComponents: [FaIconComponent, FaDuotoneIconComponent]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @deprecated Since 0.5.0. Will be removed in 0.6.0. Use FaConfig directly.
     */


    var FaIconService = /*#__PURE__*/function () {
      /**
       * @param {?} config
       */
      function FaIconService(config) {
        _classCallCheck2(this, FaIconService);

        this.config = config;
      }
      /**
       * @return {?}
       */


      _createClass2(FaIconService, [{
        key: "defaultPrefix",
        get: function get() {
          return this.config.defaultPrefix;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.config.defaultPrefix = value;
        }
      }]);

      return FaIconService;
    }();

    FaIconService.ɵfac = function FaIconService_Factory(t) {
      return new (t || FaIconService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](FaConfig));
    };

    FaIconService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FaIconService,
      factory: FaIconService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    FaIconService.ctorParameters = function () {
      return [{
        type: FaConfig
      }];
    };
    /** @nocollapse */


    FaIconService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function FaIconService_Factory() {
        return new FaIconService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(FaConfig));
      },
      token: FaIconService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaIconService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: FaConfig
        }];
      }, null);
    })(); //# sourceMappingURL=angular-fontawesome.js.map

    /***/

  },

  /***/
  "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
    \********************************************************************/

  /*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */

  /***/
  function node_modulesFortawesomeFontawesomeSvgCoreIndexEsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "icon", function () {
      return icon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "noAuto", function () {
      return noAuto;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "config", function () {
      return config;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toHtml", function () {
      return toHtml;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "layer", function () {
      return layer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "text", function () {
      return text;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "counter", function () {
      return counter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "library", function () {
      return library;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dom", function () {
      return dom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "parse", function () {
      return parse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "findIconDefinition", function () {
      return findIconDefinition;
    });
    /*!
     * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
     * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
     */


    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
          return typeof obj;
        };
      } else {
        _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof(obj);
    }

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
    }

    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }

    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

        return arr2;
      }
    }

    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }

    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
    }

    function _iterableToArrayLimit(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"] != null) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }

    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }

    var noop = function noop() {};

    var _WINDOW = {};
    var _DOCUMENT = {};
    var _MUTATION_OBSERVER = null;
    var _PERFORMANCE = {
      mark: noop,
      measure: noop
    };

    try {
      if (typeof window !== 'undefined') _WINDOW = window;
      if (typeof document !== 'undefined') _DOCUMENT = document;
      if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
      if (typeof performance !== 'undefined') _PERFORMANCE = performance;
    } catch (e) {}

    var _ref = _WINDOW.navigator || {},
        _ref$userAgent = _ref.userAgent,
        userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

    var WINDOW = _WINDOW;
    var DOCUMENT = _DOCUMENT;
    var MUTATION_OBSERVER = _MUTATION_OBSERVER;
    var PERFORMANCE = _PERFORMANCE;
    var IS_BROWSER = !!WINDOW.document;
    var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
    var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');
    var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
    var UNITS_IN_GRID = 16;
    var DEFAULT_FAMILY_PREFIX = 'fa';
    var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
    var DATA_FA_I2SVG = 'data-fa-i2svg';
    var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
    var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
    var DATA_PREFIX = 'data-prefix';
    var DATA_ICON = 'data-icon';
    var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
    var MUTATION_APPROACH_ASYNC = 'async';
    var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];

    var PRODUCTION = function () {
      try {
        return "development" === 'production';
      } catch (e) {
        return false;
      }
    }();

    var PREFIX_TO_STYLE = {
      'fas': 'solid',
      'far': 'regular',
      'fal': 'light',
      'fad': 'duotone',
      'fab': 'brands',
      'fak': 'kit',
      'fa': 'solid'
    };
    var STYLE_TO_PREFIX = {
      'solid': 'fas',
      'regular': 'far',
      'light': 'fal',
      'duotone': 'fad',
      'brands': 'fab',
      'kit': 'fak'
    };
    var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
    var FONT_FAMILY_PATTERN = /Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i; // TODO: do we need to handle font-weight for kit SVG pseudo-elements?

    var FONT_WEIGHT_TO_PREFIX = {
      '900': 'fas',
      '400': 'far',
      'normal': 'far',
      '300': 'fal'
    };
    var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
    var DUOTONE_CLASSES = {
      GROUP: 'group',
      SWAP_OPACITY: 'swap-opacity',
      PRIMARY: 'primary',
      SECONDARY: 'secondary'
    };
    var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
      return "".concat(n, "x");
    })).concat(oneToTwenty.map(function (n) {
      return "w-".concat(n);
    }));
    var initial = WINDOW.FontAwesomeConfig || {};

    function getAttrConfig(attr) {
      var element = DOCUMENT.querySelector('script[' + attr + ']');

      if (element) {
        return element.getAttribute(attr);
      }
    }

    function coerce(val) {
      // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
      // We'll assume that this is an indication that it should be toggled to true
      // For example <script data-search-pseudo-elements src="..."></script>
      if (val === '') return true;
      if (val === 'false') return false;
      if (val === 'true') return true;
      return val;
    }

    if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
      var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
      attrs.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            attr = _ref2[0],
            key = _ref2[1];

        var val = coerce(getAttrConfig(attr));

        if (val !== undefined && val !== null) {
          initial[key] = val;
        }
      });
    }

    var _default = {
      familyPrefix: DEFAULT_FAMILY_PREFIX,
      replacementClass: DEFAULT_REPLACEMENT_CLASS,
      autoReplaceSvg: true,
      autoAddCss: true,
      autoA11y: true,
      searchPseudoElements: false,
      observeMutations: true,
      mutateApproach: 'async',
      keepOriginalSource: true,
      measurePerformance: false,
      showMissingIcons: true
    };

    var _config = _objectSpread({}, _default, initial);

    if (!_config.autoReplaceSvg) _config.observeMutations = false;

    var config = _objectSpread({}, _config);

    WINDOW.FontAwesomeConfig = config;
    var w = WINDOW || {};
    if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
    if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
    if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
    if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
    var namespace = w[NAMESPACE_IDENTIFIER];
    var functions = [];

    var listener = function listener() {
      DOCUMENT.removeEventListener('DOMContentLoaded', listener);
      loaded = 1;
      functions.map(function (fn) {
        return fn();
      });
    };

    var loaded = false;

    if (IS_DOM) {
      loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
      if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
    }

    function domready(fn) {
      if (!IS_DOM) return;
      loaded ? setTimeout(fn, 0) : functions.push(fn);
    }

    var PENDING = 'pending';
    var SETTLED = 'settled';
    var FULFILLED = 'fulfilled';
    var REJECTED = 'rejected';

    var NOOP = function NOOP() {};

    var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
    var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
    var asyncQueue = [];
    var asyncTimer;

    function asyncFlush() {
      // run promise callbacks
      for (var i = 0; i < asyncQueue.length; i++) {
        asyncQueue[i][0](asyncQueue[i][1]);
      } // reset async asyncQueue


      asyncQueue = [];
      asyncTimer = false;
    }

    function asyncCall(callback, arg) {
      asyncQueue.push([callback, arg]);

      if (!asyncTimer) {
        asyncTimer = true;
        asyncSetTimer(asyncFlush, 0);
      }
    }

    function invokeResolver(resolver, promise) {
      function resolvePromise(value) {
        resolve(promise, value);
      }

      function rejectPromise(reason) {
        reject(promise, reason);
      }

      try {
        resolver(resolvePromise, rejectPromise);
      } catch (e) {
        rejectPromise(e);
      }
    }

    function invokeCallback(subscriber) {
      var owner = subscriber.owner;
      var settled = owner._state;
      var value = owner._data;
      var callback = subscriber[settled];
      var promise = subscriber.then;

      if (typeof callback === 'function') {
        settled = FULFILLED;

        try {
          value = callback(value);
        } catch (e) {
          reject(promise, e);
        }
      }

      if (!handleThenable(promise, value)) {
        if (settled === FULFILLED) {
          resolve(promise, value);
        }

        if (settled === REJECTED) {
          reject(promise, value);
        }
      }
    }

    function handleThenable(promise, value) {
      var resolved;

      try {
        if (promise === value) {
          throw new TypeError('A promises callback cannot return that same promise.');
        }

        if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
          // then should be retrieved only once
          var then = value.then;

          if (typeof then === 'function') {
            then.call(value, function (val) {
              if (!resolved) {
                resolved = true;

                if (value === val) {
                  fulfill(promise, val);
                } else {
                  resolve(promise, val);
                }
              }
            }, function (reason) {
              if (!resolved) {
                resolved = true;
                reject(promise, reason);
              }
            });
            return true;
          }
        }
      } catch (e) {
        if (!resolved) {
          reject(promise, e);
        }

        return true;
      }

      return false;
    }

    function resolve(promise, value) {
      if (promise === value || !handleThenable(promise, value)) {
        fulfill(promise, value);
      }
    }

    function fulfill(promise, value) {
      if (promise._state === PENDING) {
        promise._state = SETTLED;
        promise._data = value;
        asyncCall(publishFulfillment, promise);
      }
    }

    function reject(promise, reason) {
      if (promise._state === PENDING) {
        promise._state = SETTLED;
        promise._data = reason;
        asyncCall(publishRejection, promise);
      }
    }

    function publish(promise) {
      promise._then = promise._then.forEach(invokeCallback);
    }

    function publishFulfillment(promise) {
      promise._state = FULFILLED;
      publish(promise);
    }

    function publishRejection(promise) {
      promise._state = REJECTED;
      publish(promise);

      if (!promise._handled && isNode) {
        global.process.emit('unhandledRejection', promise._data, promise);
      }
    }

    function notifyRejectionHandled(promise) {
      global.process.emit('rejectionHandled', promise);
    }
    /**
     * @class
     */


    function P(resolver) {
      if (typeof resolver !== 'function') {
        throw new TypeError('Promise resolver ' + resolver + ' is not a function');
      }

      if (this instanceof P === false) {
        throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
      }

      this._then = [];
      invokeResolver(resolver, this);
    }

    P.prototype = {
      constructor: P,
      _state: PENDING,
      _then: null,
      _data: undefined,
      _handled: false,
      then: function then(onFulfillment, onRejection) {
        var subscriber = {
          owner: this,
          then: new this.constructor(NOOP),
          fulfilled: onFulfillment,
          rejected: onRejection
        };

        if ((onRejection || onFulfillment) && !this._handled) {
          this._handled = true;

          if (this._state === REJECTED && isNode) {
            asyncCall(notifyRejectionHandled, this);
          }
        }

        if (this._state === FULFILLED || this._state === REJECTED) {
          // already resolved, call callback async
          asyncCall(invokeCallback, subscriber);
        } else {
          // subscribe
          this._then.push(subscriber);
        }

        return subscriber.then;
      },
      "catch": function _catch(onRejection) {
        return this.then(null, onRejection);
      }
    };

    P.all = function (promises) {
      if (!Array.isArray(promises)) {
        throw new TypeError('You must pass an array to Promise.all().');
      }

      return new P(function (resolve, reject) {
        var results = [];
        var remaining = 0;

        function resolver(index) {
          remaining++;
          return function (value) {
            results[index] = value;

            if (! --remaining) {
              resolve(results);
            }
          };
        }

        for (var i = 0, promise; i < promises.length; i++) {
          promise = promises[i];

          if (promise && typeof promise.then === 'function') {
            promise.then(resolver(i), reject);
          } else {
            results[i] = promise;
          }
        }

        if (!remaining) {
          resolve(results);
        }
      });
    };

    P.race = function (promises) {
      if (!Array.isArray(promises)) {
        throw new TypeError('You must pass an array to Promise.race().');
      }

      return new P(function (resolve, reject) {
        for (var i = 0, promise; i < promises.length; i++) {
          promise = promises[i];

          if (promise && typeof promise.then === 'function') {
            promise.then(resolve, reject);
          } else {
            resolve(promise);
          }
        }
      });
    };

    P.resolve = function (value) {
      if (value && _typeof(value) === 'object' && value.constructor === P) {
        return value;
      }

      return new P(function (resolve) {
        resolve(value);
      });
    };

    P.reject = function (reason) {
      return new P(function (resolve, reject) {
        reject(reason);
      });
    };

    var picked = typeof Promise === 'function' ? Promise : P;
    var d = UNITS_IN_GRID;
    var meaninglessTransform = {
      size: 16,
      x: 0,
      y: 0,
      rotate: 0,
      flipX: false,
      flipY: false
    };

    function isReserved(name) {
      return ~RESERVED_CLASSES.indexOf(name);
    }

    function insertCss(css) {
      if (!css || !IS_DOM) {
        return;
      }

      var style = DOCUMENT.createElement('style');
      style.setAttribute('type', 'text/css');
      style.innerHTML = css;
      var headChildren = DOCUMENT.head.childNodes;
      var beforeChild = null;

      for (var i = headChildren.length - 1; i > -1; i--) {
        var child = headChildren[i];
        var tagName = (child.tagName || '').toUpperCase();

        if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
          beforeChild = child;
        }
      }

      DOCUMENT.head.insertBefore(style, beforeChild);
      return css;
    }

    var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function nextUniqueId() {
      var size = 12;
      var id = '';

      while (size-- > 0) {
        id += idPool[Math.random() * 62 | 0];
      }

      return id;
    }

    function toArray(obj) {
      var array = [];

      for (var i = (obj || []).length >>> 0; i--;) {
        array[i] = obj[i];
      }

      return array;
    }

    function classArray(node) {
      if (node.classList) {
        return toArray(node.classList);
      } else {
        return (node.getAttribute('class') || '').split(' ').filter(function (i) {
          return i;
        });
      }
    }

    function getIconName(familyPrefix, cls) {
      var parts = cls.split('-');
      var prefix = parts[0];
      var iconName = parts.slice(1).join('-');

      if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
        return iconName;
      } else {
        return null;
      }
    }

    function htmlEscape(str) {
      return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    function joinAttributes(attributes) {
      return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
        return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
      }, '').trim();
    }

    function joinStyles(styles) {
      return Object.keys(styles || {}).reduce(function (acc, styleName) {
        return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
      }, '');
    }

    function transformIsMeaningful(transform) {
      return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
    }

    function transformForSvg(_ref) {
      var transform = _ref.transform,
          containerWidth = _ref.containerWidth,
          iconWidth = _ref.iconWidth;
      var outer = {
        transform: "translate(".concat(containerWidth / 2, " 256)")
      };
      var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
      var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
      var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
      var inner = {
        transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
      };
      var path = {
        transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
      };
      return {
        outer: outer,
        inner: inner,
        path: path
      };
    }

    function transformForCss(_ref2) {
      var transform = _ref2.transform,
          _ref2$width = _ref2.width,
          width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
          _ref2$height = _ref2.height,
          height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
          _ref2$startCentered = _ref2.startCentered,
          startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
      var val = '';

      if (startCentered && IS_IE) {
        val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
      } else if (startCentered) {
        val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
      } else {
        val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
      }

      val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
      val += "rotate(".concat(transform.rotate, "deg) ");
      return val;
    }

    var ALL_SPACE = {
      x: 0,
      y: 0,
      width: '100%',
      height: '100%'
    };

    function fillBlack(_abstract) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (_abstract.attributes && (_abstract.attributes.fill || force)) {
        _abstract.attributes.fill = 'black';
      }

      return _abstract;
    }

    function deGroup(_abstract2) {
      if (_abstract2.tag === 'g') {
        return _abstract2.children;
      } else {
        return [_abstract2];
      }
    }

    function makeIconMasking(_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          mask = _ref.mask,
          explicitMaskId = _ref.maskId,
          transform = _ref.transform;
      var mainWidth = main.width,
          mainPath = main.icon;
      var maskWidth = mask.width,
          maskPath = mask.icon;
      var trans = transformForSvg({
        transform: transform,
        containerWidth: maskWidth,
        iconWidth: mainWidth
      });
      var maskRect = {
        tag: 'rect',
        attributes: _objectSpread({}, ALL_SPACE, {
          fill: 'white'
        })
      };
      var maskInnerGroupChildrenMixin = mainPath.children ? {
        children: mainPath.children.map(fillBlack)
      } : {};
      var maskInnerGroup = {
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [fillBlack(_objectSpread({
          tag: mainPath.tag,
          attributes: _objectSpread({}, mainPath.attributes, trans.path)
        }, maskInnerGroupChildrenMixin))]
      };
      var maskOuterGroup = {
        tag: 'g',
        attributes: _objectSpread({}, trans.outer),
        children: [maskInnerGroup]
      };
      var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
      var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
      var maskTag = {
        tag: 'mask',
        attributes: _objectSpread({}, ALL_SPACE, {
          id: maskId,
          maskUnits: 'userSpaceOnUse',
          maskContentUnits: 'userSpaceOnUse'
        }),
        children: [maskRect, maskOuterGroup]
      };
      var defs = {
        tag: 'defs',
        children: [{
          tag: 'clipPath',
          attributes: {
            id: clipId
          },
          children: deGroup(maskPath)
        }, maskTag]
      };
      children.push(defs, {
        tag: 'rect',
        attributes: _objectSpread({
          fill: 'currentColor',
          'clip-path': "url(#".concat(clipId, ")"),
          mask: "url(#".concat(maskId, ")")
        }, ALL_SPACE)
      });
      return {
        children: children,
        attributes: attributes
      };
    }

    function makeIconStandard(_ref) {
      var children = _ref.children,
          attributes = _ref.attributes,
          main = _ref.main,
          transform = _ref.transform,
          styles = _ref.styles;
      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      if (transformIsMeaningful(transform)) {
        var trans = transformForSvg({
          transform: transform,
          containerWidth: main.width,
          iconWidth: main.width
        });
        children.push({
          tag: 'g',
          attributes: _objectSpread({}, trans.outer),
          children: [{
            tag: 'g',
            attributes: _objectSpread({}, trans.inner),
            children: [{
              tag: main.icon.tag,
              children: main.icon.children,
              attributes: _objectSpread({}, main.icon.attributes, trans.path)
            }]
          }]
        });
      } else {
        children.push(main.icon);
      }

      return {
        children: children,
        attributes: attributes
      };
    }

    function asIcon(_ref) {
      var children = _ref.children,
          main = _ref.main,
          mask = _ref.mask,
          attributes = _ref.attributes,
          styles = _ref.styles,
          transform = _ref.transform;

      if (transformIsMeaningful(transform) && main.found && !mask.found) {
        var width = main.width,
            height = main.height;
        var offset = {
          x: width / height / 2,
          y: 0.5
        };
        attributes['style'] = joinStyles(_objectSpread({}, styles, {
          'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
        }));
      }

      return [{
        tag: 'svg',
        attributes: attributes,
        children: children
      }];
    }

    function asSymbol(_ref) {
      var prefix = _ref.prefix,
          iconName = _ref.iconName,
          children = _ref.children,
          attributes = _ref.attributes,
          symbol = _ref.symbol;
      var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
      return [{
        tag: 'svg',
        attributes: {
          style: 'display: none;'
        },
        children: [{
          tag: 'symbol',
          attributes: _objectSpread({}, attributes, {
            id: id
          }),
          children: children
        }]
      }];
    }

    function makeInlineSvgAbstract(params) {
      var _params$icons = params.icons,
          main = _params$icons.main,
          mask = _params$icons.mask,
          prefix = params.prefix,
          iconName = params.iconName,
          transform = params.transform,
          symbol = params.symbol,
          title = params.title,
          maskId = params.maskId,
          titleId = params.titleId,
          extra = params.extra,
          _params$watchable = params.watchable,
          watchable = _params$watchable === void 0 ? false : _params$watchable;

      var _ref = mask.found ? mask : main,
          width = _ref.width,
          height = _ref.height;

      var isUploadedIcon = prefix === 'fak';
      var widthClass = isUploadedIcon ? '' : "fa-w-".concat(Math.ceil(width / height * 16));
      var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
        return extra.classes.indexOf(c) === -1;
      }).filter(function (c) {
        return c !== '' || !!c;
      }).concat(extra.classes).join(' ');
      var content = {
        children: [],
        attributes: _objectSpread({}, extra.attributes, {
          'data-prefix': prefix,
          'data-icon': iconName,
          'class': attrClass,
          'role': extra.attributes.role || 'img',
          'xmlns': 'http://www.w3.org/2000/svg',
          'viewBox': "0 0 ".concat(width, " ").concat(height)
        })
      };
      var uploadedIconWidthStyle = isUploadedIcon && !~extra.classes.indexOf('fa-fw') ? {
        width: "".concat(width / height * 16 * 0.0625, "em")
      } : {};

      if (watchable) {
        content.attributes[DATA_FA_I2SVG] = '';
      }

      if (title) content.children.push({
        tag: 'title',
        attributes: {
          id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
        },
        children: [title]
      });

      var args = _objectSpread({}, content, {
        prefix: prefix,
        iconName: iconName,
        main: main,
        mask: mask,
        maskId: maskId,
        transform: transform,
        symbol: symbol,
        styles: _objectSpread({}, uploadedIconWidthStyle, extra.styles)
      });

      var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
          children = _ref2.children,
          attributes = _ref2.attributes;

      args.children = children;
      args.attributes = attributes;

      if (symbol) {
        return asSymbol(args);
      } else {
        return asIcon(args);
      }
    }

    function makeLayersTextAbstract(params) {
      var content = params.content,
          width = params.width,
          height = params.height,
          transform = params.transform,
          title = params.title,
          extra = params.extra,
          _params$watchable2 = params.watchable,
          watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

      var attributes = _objectSpread({}, extra.attributes, title ? {
        'title': title
      } : {}, {
        'class': extra.classes.join(' ')
      });

      if (watchable) {
        attributes[DATA_FA_I2SVG] = '';
      }

      var styles = _objectSpread({}, extra.styles);

      if (transformIsMeaningful(transform)) {
        styles['transform'] = transformForCss({
          transform: transform,
          startCentered: true,
          width: width,
          height: height
        });
        styles['-webkit-transform'] = styles['transform'];
      }

      var styleString = joinStyles(styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var val = [];
      val.push({
        tag: 'span',
        attributes: attributes,
        children: [content]
      });

      if (title) {
        val.push({
          tag: 'span',
          attributes: {
            "class": 'sr-only'
          },
          children: [title]
        });
      }

      return val;
    }

    function makeLayersCounterAbstract(params) {
      var content = params.content,
          title = params.title,
          extra = params.extra;

      var attributes = _objectSpread({}, extra.attributes, title ? {
        'title': title
      } : {}, {
        'class': extra.classes.join(' ')
      });

      var styleString = joinStyles(extra.styles);

      if (styleString.length > 0) {
        attributes['style'] = styleString;
      }

      var val = [];
      val.push({
        tag: 'span',
        attributes: attributes,
        children: [content]
      });

      if (title) {
        val.push({
          tag: 'span',
          attributes: {
            "class": 'sr-only'
          },
          children: [title]
        });
      }

      return val;
    }

    var noop$1 = function noop() {};

    var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
      mark: noop$1,
      measure: noop$1
    };
    var preamble = "FA \"5.15.4\"";

    var begin = function begin(name) {
      p.mark("".concat(preamble, " ").concat(name, " begins"));
      return function () {
        return end(name);
      };
    };

    var end = function end(name) {
      p.mark("".concat(preamble, " ").concat(name, " ends"));
      p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
    };

    var perf = {
      begin: begin,
      end: end
    };
    /**
     * Internal helper to bind a function known to have 4 arguments
     * to a given context.
     */

    var bindInternal4 = function bindInternal4(func, thisContext) {
      return function (a, b, c, d) {
        return func.call(thisContext, a, b, c, d);
      };
    };
    /**
     * # Reduce
     *
     * A fast object `.reduce()` implementation.
     *
     * @param  {Object}   subject      The object to reduce over.
     * @param  {Function} fn           The reducer function.
     * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
     * @param  {Object}   thisContext  The context for the reducer.
     * @return {mixed}                 The final result.
     */


    var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
      var keys = Object.keys(subject),
          length = keys.length,
          iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
          i,
          key,
          result;

      if (initialValue === undefined) {
        i = 1;
        result = subject[keys[0]];
      } else {
        i = 0;
        result = initialValue;
      }

      for (; i < length; i++) {
        key = keys[i];
        result = iterator(result, subject[key], key, subject);
      }

      return result;
    };

    function toHex(unicode) {
      var result = '';

      for (var i = 0; i < unicode.length; i++) {
        var hex = unicode.charCodeAt(i).toString(16);
        result += ('000' + hex).slice(-4);
      }

      return result;
    }

    function defineIcons(prefix, icons) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var _params$skipHooks = params.skipHooks,
          skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
      var normalized = Object.keys(icons).reduce(function (acc, iconName) {
        var icon = icons[iconName];
        var expanded = !!icon.icon;

        if (expanded) {
          acc[icon.iconName] = icon.icon;
        } else {
          acc[iconName] = icon;
        }

        return acc;
      }, {});

      if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
        namespace.hooks.addPack(prefix, normalized);
      } else {
        namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
      }
      /**
       * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
       * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
       * for `fas` so we'll easy the upgrade process for our users by automatically defining
       * this as well.
       */


      if (prefix === 'fas') {
        defineIcons('fa', icons);
      }
    }

    var styles = namespace.styles,
        shims = namespace.shims;
    var _byUnicode = {};
    var _byLigature = {};
    var _byOldName = {};

    var build = function build() {
      var lookup = function lookup(reducer) {
        return reduce(styles, function (o, style, prefix) {
          o[prefix] = reduce(style, reducer, {});
          return o;
        }, {});
      };

      _byUnicode = lookup(function (acc, icon, iconName) {
        if (icon[3]) {
          acc[icon[3]] = iconName;
        }

        return acc;
      });
      _byLigature = lookup(function (acc, icon, iconName) {
        var ligatures = icon[2];
        acc[iconName] = iconName;
        ligatures.forEach(function (ligature) {
          acc[ligature] = iconName;
        });
        return acc;
      });
      var hasRegular = ('far' in styles);
      _byOldName = reduce(shims, function (acc, shim) {
        var oldName = shim[0];
        var prefix = shim[1];
        var iconName = shim[2];

        if (prefix === 'far' && !hasRegular) {
          prefix = 'fas';
        }

        acc[oldName] = {
          prefix: prefix,
          iconName: iconName
        };
        return acc;
      }, {});
    };

    build();

    function byUnicode(prefix, unicode) {
      return (_byUnicode[prefix] || {})[unicode];
    }

    function byLigature(prefix, ligature) {
      return (_byLigature[prefix] || {})[ligature];
    }

    function byOldName(name) {
      return _byOldName[name] || {
        prefix: null,
        iconName: null
      };
    }

    var styles$1 = namespace.styles;

    var emptyCanonicalIcon = function emptyCanonicalIcon() {
      return {
        prefix: null,
        iconName: null,
        rest: []
      };
    };

    function getCanonicalIcon(values) {
      return values.reduce(function (acc, cls) {
        var iconName = getIconName(config.familyPrefix, cls);

        if (styles$1[cls]) {
          acc.prefix = cls;
        } else if (config.autoFetchSvg && Object.keys(PREFIX_TO_STYLE).indexOf(cls) > -1) {
          acc.prefix = cls;
        } else if (iconName) {
          var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
          acc.iconName = shim.iconName || iconName;
          acc.prefix = shim.prefix || acc.prefix;
        } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
          acc.rest.push(cls);
        }

        return acc;
      }, emptyCanonicalIcon());
    }

    function iconFromMapping(mapping, prefix, iconName) {
      if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
        return {
          prefix: prefix,
          iconName: iconName,
          icon: mapping[prefix][iconName]
        };
      }
    }

    function toHtml(abstractNodes) {
      var tag = abstractNodes.tag,
          _abstractNodes$attrib = abstractNodes.attributes,
          attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
          _abstractNodes$childr = abstractNodes.children,
          children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

      if (typeof abstractNodes === 'string') {
        return htmlEscape(abstractNodes);
      } else {
        return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
      }
    }

    var noop$2 = function noop() {};

    function isWatched(node) {
      var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
      return typeof i2svg === 'string';
    }

    function getMutator() {
      if (config.autoReplaceSvg === true) {
        return mutators.replace;
      }

      var mutator = mutators[config.autoReplaceSvg];
      return mutator || mutators.replace;
    }

    var mutators = {
      replace: function replace(mutation) {
        var node = mutation[0];
        var _abstract3 = mutation[1];

        var newOuterHTML = _abstract3.map(function (a) {
          return toHtml(a);
        }).join('\n');

        if (node.parentNode && node.outerHTML) {
          node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " Font Awesome fontawesome.com -->") : '');
        } else if (node.parentNode) {
          var newNode = document.createElement('span');
          node.parentNode.replaceChild(newNode, node);
          newNode.outerHTML = newOuterHTML;
        }
      },
      nest: function nest(mutation) {
        var node = mutation[0];
        var _abstract4 = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
        // Short-circuit to the standard replacement

        if (~classArray(node).indexOf(config.replacementClass)) {
          return mutators.replace(mutation);
        }

        var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
        delete _abstract4[0].attributes.style;
        delete _abstract4[0].attributes.id;

        var splitClasses = _abstract4[0].attributes["class"].split(' ').reduce(function (acc, cls) {
          if (cls === config.replacementClass || cls.match(forSvg)) {
            acc.toSvg.push(cls);
          } else {
            acc.toNode.push(cls);
          }

          return acc;
        }, {
          toNode: [],
          toSvg: []
        });

        _abstract4[0].attributes["class"] = splitClasses.toSvg.join(' ');

        var newInnerHTML = _abstract4.map(function (a) {
          return toHtml(a);
        }).join('\n');

        node.setAttribute('class', splitClasses.toNode.join(' '));
        node.setAttribute(DATA_FA_I2SVG, '');
        node.innerHTML = newInnerHTML;
      }
    };

    function performOperationSync(op) {
      op();
    }

    function perform(mutations, callback) {
      var callbackFunction = typeof callback === 'function' ? callback : noop$2;

      if (mutations.length === 0) {
        callbackFunction();
      } else {
        var frame = performOperationSync;

        if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
          frame = WINDOW.requestAnimationFrame || performOperationSync;
        }

        frame(function () {
          var mutator = getMutator();
          var mark = perf.begin('mutate');
          mutations.map(mutator);
          mark();
          callbackFunction();
        });
      }
    }

    var disabled = false;

    function disableObservation() {
      disabled = true;
    }

    function enableObservation() {
      disabled = false;
    }

    var mo = null;

    function observe(options) {
      if (!MUTATION_OBSERVER) {
        return;
      }

      if (!config.observeMutations) {
        return;
      }

      var treeCallback = options.treeCallback,
          nodeCallback = options.nodeCallback,
          pseudoElementsCallback = options.pseudoElementsCallback,
          _options$observeMutat = options.observeMutationsRoot,
          observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
      mo = new MUTATION_OBSERVER(function (objects) {
        if (disabled) return;
        toArray(objects).forEach(function (mutationRecord) {
          if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
            if (config.searchPseudoElements) {
              pseudoElementsCallback(mutationRecord.target);
            }

            treeCallback(mutationRecord.target);
          }

          if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
            pseudoElementsCallback(mutationRecord.target.parentNode);
          }

          if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
            if (mutationRecord.attributeName === 'class') {
              var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
                  prefix = _getCanonicalIcon.prefix,
                  iconName = _getCanonicalIcon.iconName;

              if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
              if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
            } else {
              nodeCallback(mutationRecord.target);
            }
          }
        });
      });
      if (!IS_DOM) return;
      mo.observe(observeMutationsRoot, {
        childList: true,
        attributes: true,
        characterData: true,
        subtree: true
      });
    }

    function disconnect() {
      if (!mo) return;
      mo.disconnect();
    }

    function styleParser(node) {
      var style = node.getAttribute('style');
      var val = [];

      if (style) {
        val = style.split(';').reduce(function (acc, style) {
          var styles = style.split(':');
          var prop = styles[0];
          var value = styles.slice(1);

          if (prop && value.length > 0) {
            acc[prop] = value.join(':').trim();
          }

          return acc;
        }, {});
      }

      return val;
    }

    function classParser(node) {
      var existingPrefix = node.getAttribute('data-prefix');
      var existingIconName = node.getAttribute('data-icon');
      var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
      var val = getCanonicalIcon(classArray(node));

      if (existingPrefix && existingIconName) {
        val.prefix = existingPrefix;
        val.iconName = existingIconName;
      }

      if (val.prefix && innerText.length > 1) {
        val.iconName = byLigature(val.prefix, node.innerText);
      } else if (val.prefix && innerText.length === 1) {
        val.iconName = byUnicode(val.prefix, toHex(node.innerText));
      }

      return val;
    }

    var parseTransformString = function parseTransformString(transformString) {
      var transform = {
        size: 16,
        x: 0,
        y: 0,
        flipX: false,
        flipY: false,
        rotate: 0
      };

      if (!transformString) {
        return transform;
      } else {
        return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
          var parts = n.toLowerCase().split('-');
          var first = parts[0];
          var rest = parts.slice(1).join('-');

          if (first && rest === 'h') {
            acc.flipX = true;
            return acc;
          }

          if (first && rest === 'v') {
            acc.flipY = true;
            return acc;
          }

          rest = parseFloat(rest);

          if (isNaN(rest)) {
            return acc;
          }

          switch (first) {
            case 'grow':
              acc.size = acc.size + rest;
              break;

            case 'shrink':
              acc.size = acc.size - rest;
              break;

            case 'left':
              acc.x = acc.x - rest;
              break;

            case 'right':
              acc.x = acc.x + rest;
              break;

            case 'up':
              acc.y = acc.y - rest;
              break;

            case 'down':
              acc.y = acc.y + rest;
              break;

            case 'rotate':
              acc.rotate = acc.rotate + rest;
              break;
          }

          return acc;
        }, transform);
      }
    };

    function transformParser(node) {
      return parseTransformString(node.getAttribute('data-fa-transform'));
    }

    function symbolParser(node) {
      var symbol = node.getAttribute('data-fa-symbol');
      return symbol === null ? false : symbol === '' ? true : symbol;
    }

    function attributesParser(node) {
      var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
        if (acc.name !== 'class' && acc.name !== 'style') {
          acc[attr.name] = attr.value;
        }

        return acc;
      }, {});
      var title = node.getAttribute('title');
      var titleId = node.getAttribute('data-fa-title-id');

      if (config.autoA11y) {
        if (title) {
          extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
        } else {
          extraAttributes['aria-hidden'] = 'true';
          extraAttributes['focusable'] = 'false';
        }
      }

      return extraAttributes;
    }

    function maskParser(node) {
      var mask = node.getAttribute('data-fa-mask');

      if (!mask) {
        return emptyCanonicalIcon();
      } else {
        return getCanonicalIcon(mask.split(' ').map(function (i) {
          return i.trim();
        }));
      }
    }

    function blankMeta() {
      return {
        iconName: null,
        title: null,
        titleId: null,
        prefix: null,
        transform: meaninglessTransform,
        symbol: false,
        mask: null,
        maskId: null,
        extra: {
          classes: [],
          styles: {},
          attributes: {}
        }
      };
    }

    function parseMeta(node) {
      var _classParser = classParser(node),
          iconName = _classParser.iconName,
          prefix = _classParser.prefix,
          extraClasses = _classParser.rest;

      var extraStyles = styleParser(node);
      var transform = transformParser(node);
      var symbol = symbolParser(node);
      var extraAttributes = attributesParser(node);
      var mask = maskParser(node);
      return {
        iconName: iconName,
        title: node.getAttribute('title'),
        titleId: node.getAttribute('data-fa-title-id'),
        prefix: prefix,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: node.getAttribute('data-fa-mask-id'),
        extra: {
          classes: extraClasses,
          styles: extraStyles,
          attributes: extraAttributes
        }
      };
    }

    function MissingIcon(error) {
      this.name = 'MissingIcon';
      this.message = error || 'Icon unavailable';
      this.stack = new Error().stack;
    }

    MissingIcon.prototype = Object.create(Error.prototype);
    MissingIcon.prototype.constructor = MissingIcon;
    var FILL = {
      fill: 'currentColor'
    };
    var ANIMATION_BASE = {
      attributeType: 'XML',
      repeatCount: 'indefinite',
      dur: '2s'
    };
    var RING = {
      tag: 'path',
      attributes: _objectSpread({}, FILL, {
        d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
      })
    };

    var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'opacity'
    });

    var DOT = {
      tag: 'circle',
      attributes: _objectSpread({}, FILL, {
        cx: '256',
        cy: '364',
        r: '28'
      }),
      children: [{
        tag: 'animate',
        attributes: _objectSpread({}, ANIMATION_BASE, {
          attributeName: 'r',
          values: '28;14;28;28;14;28;'
        })
      }, {
        tag: 'animate',
        attributes: _objectSpread({}, OPACITY_ANIMATE, {
          values: '1;0;1;1;0;1;'
        })
      }]
    };
    var QUESTION = {
      tag: 'path',
      attributes: _objectSpread({}, FILL, {
        opacity: '1',
        d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
      }),
      children: [{
        tag: 'animate',
        attributes: _objectSpread({}, OPACITY_ANIMATE, {
          values: '1;0;0;0;0;1;'
        })
      }]
    };
    var EXCLAMATION = {
      tag: 'path',
      attributes: _objectSpread({}, FILL, {
        opacity: '0',
        d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
      }),
      children: [{
        tag: 'animate',
        attributes: _objectSpread({}, OPACITY_ANIMATE, {
          values: '0;0;1;1;0;0;'
        })
      }]
    };
    var missing = {
      tag: 'g',
      children: [RING, DOT, QUESTION, EXCLAMATION]
    };
    var styles$2 = namespace.styles;

    function asFoundIcon(icon) {
      var width = icon[0];
      var height = icon[1];

      var _icon$slice = icon.slice(4),
          _icon$slice2 = _slicedToArray(_icon$slice, 1),
          vectorData = _icon$slice2[0];

      var element = null;

      if (Array.isArray(vectorData)) {
        element = {
          tag: 'g',
          attributes: {
            "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
          },
          children: [{
            tag: 'path',
            attributes: {
              "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
              fill: 'currentColor',
              d: vectorData[0]
            }
          }, {
            tag: 'path',
            attributes: {
              "class": "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
              fill: 'currentColor',
              d: vectorData[1]
            }
          }]
        };
      } else {
        element = {
          tag: 'path',
          attributes: {
            fill: 'currentColor',
            d: vectorData
          }
        };
      }

      return {
        found: true,
        width: width,
        height: height,
        icon: element
      };
    }

    function findIcon(iconName, prefix) {
      return new picked(function (resolve, reject) {
        var val = {
          found: false,
          width: 512,
          height: 512,
          icon: missing
        };

        if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
          var icon = styles$2[prefix][iconName];
          return resolve(asFoundIcon(icon));
        }

        if (iconName && prefix && !config.showMissingIcons) {
          reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
        } else {
          resolve(val);
        }
      });
    }

    var styles$3 = namespace.styles;

    function generateSvgReplacementMutation(node, nodeMeta) {
      var iconName = nodeMeta.iconName,
          title = nodeMeta.title,
          titleId = nodeMeta.titleId,
          prefix = nodeMeta.prefix,
          transform = nodeMeta.transform,
          symbol = nodeMeta.symbol,
          mask = nodeMeta.mask,
          maskId = nodeMeta.maskId,
          extra = nodeMeta.extra;
      return new picked(function (resolve, reject) {
        picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              main = _ref2[0],
              mask = _ref2[1];

          resolve([node, makeInlineSvgAbstract({
            icons: {
              main: main,
              mask: mask
            },
            prefix: prefix,
            iconName: iconName,
            transform: transform,
            symbol: symbol,
            mask: mask,
            maskId: maskId,
            title: title,
            titleId: titleId,
            extra: extra,
            watchable: true
          })]);
        });
      });
    }

    function generateLayersText(node, nodeMeta) {
      var title = nodeMeta.title,
          transform = nodeMeta.transform,
          extra = nodeMeta.extra;
      var width = null;
      var height = null;

      if (IS_IE) {
        var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
        var boundingClientRect = node.getBoundingClientRect();
        width = boundingClientRect.width / computedFontSize;
        height = boundingClientRect.height / computedFontSize;
      }

      if (config.autoA11y && !title) {
        extra.attributes['aria-hidden'] = 'true';
      }

      return picked.resolve([node, makeLayersTextAbstract({
        content: node.innerHTML,
        width: width,
        height: height,
        transform: transform,
        title: title,
        extra: extra,
        watchable: true
      })]);
    }

    function generateMutation(node) {
      var nodeMeta = parseMeta(node);

      if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
        return generateLayersText(node, nodeMeta);
      } else {
        return generateSvgReplacementMutation(node, nodeMeta);
      }
    }

    function onTree(root) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      if (!IS_DOM) return;
      var htmlClassList = DOCUMENT.documentElement.classList;

      var hclAdd = function hclAdd(suffix) {
        return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
      };

      var hclRemove = function hclRemove(suffix) {
        return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
      };

      var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
      var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
        return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
      })).join(', ');

      if (prefixesDomQuery.length === 0) {
        return;
      }

      var candidates = [];

      try {
        candidates = toArray(root.querySelectorAll(prefixesDomQuery));
      } catch (e) {// noop
      }

      if (candidates.length > 0) {
        hclAdd('pending');
        hclRemove('complete');
      } else {
        return;
      }

      var mark = perf.begin('onTree');
      var mutations = candidates.reduce(function (acc, node) {
        try {
          var mutation = generateMutation(node);

          if (mutation) {
            acc.push(mutation);
          }
        } catch (e) {
          if (!PRODUCTION) {
            if (e instanceof MissingIcon) {
              console.error(e);
            }
          }
        }

        return acc;
      }, []);
      return new picked(function (resolve, reject) {
        picked.all(mutations).then(function (resolvedMutations) {
          perform(resolvedMutations, function () {
            hclAdd('active');
            hclAdd('complete');
            hclRemove('pending');
            if (typeof callback === 'function') callback();
            mark();
            resolve();
          });
        })["catch"](function () {
          mark();
          reject();
        });
      });
    }

    function onNode(node) {
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      generateMutation(node).then(function (mutation) {
        if (mutation) {
          perform([mutation], callback);
        }
      });
    }

    function replaceForPosition(node, position) {
      var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
      return new picked(function (resolve, reject) {
        if (node.getAttribute(pendingAttribute) !== null) {
          // This node is already being processed
          return resolve();
        }

        var children = toArray(node.children);
        var alreadyProcessedPseudoElement = children.filter(function (c) {
          return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
        })[0];
        var styles = WINDOW.getComputedStyle(node, position);
        var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
        var fontWeight = styles.getPropertyValue('font-weight');
        var content = styles.getPropertyValue('content');

        if (alreadyProcessedPseudoElement && !fontFamily) {
          // If we've already processed it but the current computed style does not result in a font-family,
          // that probably means that a class name that was previously present to make the icon has been
          // removed. So we now should delete the icon.
          node.removeChild(alreadyProcessedPseudoElement);
          return resolve();
        } else if (fontFamily && content !== 'none' && content !== '') {
          var _content = styles.getPropertyValue('content');

          var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands', 'Kit'].indexOf(fontFamily[2]) ? STYLE_TO_PREFIX[fontFamily[2].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
          var hexValue = toHex(_content.length === 3 ? _content.substr(1, 1) : _content);
          var iconName = byUnicode(prefix, hexValue);
          var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
          // already done so with the same prefix and iconName

          if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
            node.setAttribute(pendingAttribute, iconIdentifier);

            if (alreadyProcessedPseudoElement) {
              // Delete the old one, since we're replacing it with a new one
              node.removeChild(alreadyProcessedPseudoElement);
            }

            var meta = blankMeta();
            var extra = meta.extra;
            extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
            findIcon(iconName, prefix).then(function (main) {
              var _abstract5 = makeInlineSvgAbstract(_objectSpread({}, meta, {
                icons: {
                  main: main,
                  mask: emptyCanonicalIcon()
                },
                prefix: prefix,
                iconName: iconIdentifier,
                extra: extra,
                watchable: true
              }));

              var element = DOCUMENT.createElement('svg');

              if (position === ':before') {
                node.insertBefore(element, node.firstChild);
              } else {
                node.appendChild(element);
              }

              element.outerHTML = _abstract5.map(function (a) {
                return toHtml(a);
              }).join('\n');
              node.removeAttribute(pendingAttribute);
              resolve();
            })["catch"](reject);
          } else {
            resolve();
          }
        } else {
          resolve();
        }
      });
    }

    function replace(node) {
      return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
    }

    function processable(node) {
      return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
    }

    function searchPseudoElements(root) {
      if (!IS_DOM) return;
      return new picked(function (resolve, reject) {
        var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
        var end = perf.begin('searchPseudoElements');
        disableObservation();
        picked.all(operations).then(function () {
          end();
          enableObservation();
          resolve();
        })["catch"](function () {
          end();
          enableObservation();
          reject();
        });
      });
    }

    var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

    function css() {
      var dfp = DEFAULT_FAMILY_PREFIX;
      var drc = DEFAULT_REPLACEMENT_CLASS;
      var fp = config.familyPrefix;
      var rc = config.replacementClass;
      var s = baseStyles;

      if (fp !== dfp || rc !== drc) {
        var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
        var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
        var rPatt = new RegExp("\\.".concat(drc), 'g');
        s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
      }

      return s;
    }

    var Library = /*#__PURE__*/function () {
      function Library() {
        _classCallCheck(this, Library);

        this.definitions = {};
      }

      _createClass(Library, [{
        key: "add",
        value: function add() {
          var _this = this;

          for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
            definitions[_key] = arguments[_key];
          }

          var additions = definitions.reduce(this._pullDefinitions, {});
          Object.keys(additions).forEach(function (key) {
            _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
            defineIcons(key, additions[key]);
            build();
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.definitions = {};
        }
      }, {
        key: "_pullDefinitions",
        value: function _pullDefinitions(additions, definition) {
          var normalized = definition.prefix && definition.iconName && definition.icon ? {
            0: definition
          } : definition;
          Object.keys(normalized).map(function (key) {
            var _normalized$key = normalized[key],
                prefix = _normalized$key.prefix,
                iconName = _normalized$key.iconName,
                icon = _normalized$key.icon;
            if (!additions[prefix]) additions[prefix] = {};
            additions[prefix][iconName] = icon;
          });
          return additions;
        }
      }]);

      return Library;
    }();

    function ensureCss() {
      if (config.autoAddCss && !_cssInserted) {
        insertCss(css());
        _cssInserted = true;
      }
    }

    function apiObject(val, abstractCreator) {
      Object.defineProperty(val, 'abstract', {
        get: abstractCreator
      });
      Object.defineProperty(val, 'html', {
        get: function get() {
          return val["abstract"].map(function (a) {
            return toHtml(a);
          });
        }
      });
      Object.defineProperty(val, 'node', {
        get: function get() {
          if (!IS_DOM) return;
          var container = DOCUMENT.createElement('div');
          container.innerHTML = val.html;
          return container.children;
        }
      });
      return val;
    }

    function findIconDefinition(iconLookup) {
      var _iconLookup$prefix = iconLookup.prefix,
          prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
          iconName = iconLookup.iconName;
      if (!iconName) return;
      return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
    }

    function resolveIcons(next) {
      return function (maybeIconDefinition) {
        var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
        var mask = params.mask;

        if (mask) {
          mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
        }

        return next(iconDefinition, _objectSpread({}, params, {
          mask: mask
        }));
      };
    }

    var library = new Library();

    var noAuto = function noAuto() {
      config.autoReplaceSvg = false;
      config.observeMutations = false;
      disconnect();
    };

    var _cssInserted = false;
    var dom = {
      i2svg: function i2svg() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (IS_DOM) {
          ensureCss();
          var _params$node = params.node,
              node = _params$node === void 0 ? DOCUMENT : _params$node,
              _params$callback = params.callback,
              callback = _params$callback === void 0 ? function () {} : _params$callback;

          if (config.searchPseudoElements) {
            searchPseudoElements(node);
          }

          return onTree(node, callback);
        } else {
          return picked.reject('Operation requires a DOM of some kind.');
        }
      },
      css: css,
      insertCss: function insertCss$$1() {
        if (!_cssInserted) {
          insertCss(css());
          _cssInserted = true;
        }
      },
      watch: function watch() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
            observeMutationsRoot = params.observeMutationsRoot;

        if (config.autoReplaceSvg === false) {
          config.autoReplaceSvg = true;
        }

        config.observeMutations = true;
        domready(function () {
          autoReplace({
            autoReplaceSvgRoot: autoReplaceSvgRoot
          });
          observe({
            treeCallback: onTree,
            nodeCallback: onNode,
            pseudoElementsCallback: searchPseudoElements,
            observeMutationsRoot: observeMutationsRoot
          });
        });
      }
    };
    var parse = {
      transform: function transform(transformString) {
        return parseTransformString(transformString);
      }
    };
    var icon = resolveIcons(function (iconDefinition) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform = params.transform,
          transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
          _params$symbol = params.symbol,
          symbol = _params$symbol === void 0 ? false : _params$symbol,
          _params$mask = params.mask,
          mask = _params$mask === void 0 ? null : _params$mask,
          _params$maskId = params.maskId,
          maskId = _params$maskId === void 0 ? null : _params$maskId,
          _params$title = params.title,
          title = _params$title === void 0 ? null : _params$title,
          _params$titleId = params.titleId,
          titleId = _params$titleId === void 0 ? null : _params$titleId,
          _params$classes = params.classes,
          classes = _params$classes === void 0 ? [] : _params$classes,
          _params$attributes = params.attributes,
          attributes = _params$attributes === void 0 ? {} : _params$attributes,
          _params$styles = params.styles,
          styles = _params$styles === void 0 ? {} : _params$styles;
      if (!iconDefinition) return;
      var prefix = iconDefinition.prefix,
          iconName = iconDefinition.iconName,
          icon = iconDefinition.icon;
      return apiObject(_objectSpread({
        type: 'icon'
      }, iconDefinition), function () {
        ensureCss();

        if (config.autoA11y) {
          if (title) {
            attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
          } else {
            attributes['aria-hidden'] = 'true';
            attributes['focusable'] = 'false';
          }
        }

        return makeInlineSvgAbstract({
          icons: {
            main: asFoundIcon(icon),
            mask: mask ? asFoundIcon(mask.icon) : {
              found: false,
              width: null,
              height: null,
              icon: {}
            }
          },
          prefix: prefix,
          iconName: iconName,
          transform: _objectSpread({}, meaninglessTransform, transform),
          symbol: symbol,
          title: title,
          maskId: maskId,
          titleId: titleId,
          extra: {
            attributes: attributes,
            styles: styles,
            classes: classes
          }
        });
      });
    });

    var text = function text(content) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$transform2 = params.transform,
          transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
          _params$title2 = params.title,
          title = _params$title2 === void 0 ? null : _params$title2,
          _params$classes2 = params.classes,
          classes = _params$classes2 === void 0 ? [] : _params$classes2,
          _params$attributes2 = params.attributes,
          attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
          _params$styles2 = params.styles,
          styles = _params$styles2 === void 0 ? {} : _params$styles2;
      return apiObject({
        type: 'text',
        content: content
      }, function () {
        ensureCss();
        return makeLayersTextAbstract({
          content: content,
          transform: _objectSpread({}, meaninglessTransform, transform),
          title: title,
          extra: {
            attributes: attributes,
            styles: styles,
            classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
          }
        });
      });
    };

    var counter = function counter(content) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$title3 = params.title,
          title = _params$title3 === void 0 ? null : _params$title3,
          _params$classes3 = params.classes,
          classes = _params$classes3 === void 0 ? [] : _params$classes3,
          _params$attributes3 = params.attributes,
          attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
          _params$styles3 = params.styles,
          styles = _params$styles3 === void 0 ? {} : _params$styles3;
      return apiObject({
        type: 'counter',
        content: content
      }, function () {
        ensureCss();
        return makeLayersCounterAbstract({
          content: content.toString(),
          title: title,
          extra: {
            attributes: attributes,
            styles: styles,
            classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
          }
        });
      });
    };

    var layer = function layer(assembler) {
      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _params$classes4 = params.classes,
          classes = _params$classes4 === void 0 ? [] : _params$classes4;
      return apiObject({
        type: 'layer'
      }, function () {
        ensureCss();
        var children = [];
        assembler(function (args) {
          Array.isArray(args) ? args.map(function (a) {
            children = children.concat(a["abstract"]);
          }) : children = children.concat(args["abstract"]);
        });
        return [{
          tag: 'span',
          attributes: {
            "class": ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
          },
          children: children
        }];
      });
    };

    var api = {
      noAuto: noAuto,
      config: config,
      dom: dom,
      library: library,
      parse: parse,
      findIconDefinition: findIconDefinition,
      icon: icon,
      text: text,
      counter: counter,
      layer: layer,
      toHtml: toHtml
    };

    var autoReplace = function autoReplace() {
      var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _params$autoReplaceSv = params.autoReplaceSvgRoot,
          autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
      if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
        node: autoReplaceSvgRoot
      });
    };
    /***/

  },

  /***/
  "./src/app/pages/settings/settings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/settings/settings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: SettingsPageRoutingModule */

  /***/
  function srcAppPagesSettingsSettingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
      return SettingsPageRoutingModule;
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


    var _settings_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var routes = [{
      path: '',
      component: _settings_page__WEBPACK_IMPORTED_MODULE_2__["SettingsPage"]
    }, {
      path: 'about',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | about-about-module */
        "about-about-module").then(__webpack_require__.bind(null,
        /*! ../about/about.module */
        "./src/app/pages/about/about.module.ts")).then(function (m) {
          return m.AboutPageModule;
        });
      }
    }, {
      path: 'termAndConditions',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | terms-and-conditions-terms-and-conditions-module */
        "terms-and-conditions-terms-and-conditions-module").then(__webpack_require__.bind(null,
        /*! ../terms-and-conditions/terms-and-conditions.module */
        "./src/app/pages/terms-and-conditions/terms-and-conditions.module.ts")).then(function (m) {
          return m.TermsAndConditionsPageModule;
        });
      }
    }];

    var SettingsPageRoutingModule = /*#__PURE__*/_createClass2(function SettingsPageRoutingModule() {
      _classCallCheck2(this, SettingsPageRoutingModule);
    });

    SettingsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: SettingsPageRoutingModule
    });
    SettingsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function SettingsPageRoutingModule_Factory(t) {
        return new (t || SettingsPageRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SettingsPageRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SettingsPageRoutingModule, [{
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
  "./src/app/pages/settings/settings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/settings/settings.module.ts ***!
    \***************************************************/

  /*! exports provided: SettingsPageModule */

  /***/
  function srcAppPagesSettingsSettingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
      return SettingsPageModule;
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


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/app-rate/ngx */
    "./node_modules/@ionic-native/app-rate/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/in-app-browser/ngx */
    "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./settings-routing.module */
    "./src/app/pages/settings/settings-routing.module.ts");
    /* harmony import */


    var _settings_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./settings.page */
    "./src/app/pages/settings/settings.page.ts");

    var SettingsPageModule = /*#__PURE__*/_createClass2(function SettingsPageModule() {
      _classCallCheck2(this, SettingsPageModule);
    });

    SettingsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SettingsPageModule
    });
    SettingsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function SettingsPageModule_Factory(t) {
        return new (t || SettingsPageModule)();
      },
      providers: [_ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_4__["AppRate"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["SettingsPageRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SettingsPageModule, {
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_8__["SettingsPage"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["SettingsPageRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_7__["SettingsPageRoutingModule"]],
          declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_8__["SettingsPage"]],
          providers: [_ionic_native_app_rate_ngx__WEBPACK_IMPORTED_MODULE_4__["AppRate"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=settings-settings-module-es5.js.map