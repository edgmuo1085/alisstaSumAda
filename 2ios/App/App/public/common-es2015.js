(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@capacitor/camera/dist/esm/definitions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return CameraSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return CameraDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return CameraResultType; });
var CameraSource;
(function (CameraSource) {
    /**
     * Prompts the user to select either the photo album or take a photo.
     */
    CameraSource["Prompt"] = "PROMPT";
    /**
     * Take a new photo using the camera.
     */
    CameraSource["Camera"] = "CAMERA";
    /**
     * Pick an existing photo from the gallery or photo album.
     */
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/camera/dist/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "./node_modules/@capacitor/camera/dist/esm/definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"]; });


const Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
    web: () => Promise.all(/*! import() | web */[__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null, /*! ./web */ "./node_modules/@capacitor/camera/dist/esm/web.js")).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@capacitor/filesystem/dist/esm/definitions.js":
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/definitions.js ***!
  \********************************************************************/
/*! exports provided: Directory, Encoding, FilesystemDirectory, FilesystemEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return Directory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Encoding", function() { return Encoding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return FilesystemDirectory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return FilesystemEncoding; });
var Directory;
(function (Directory) {
    /**
     * The Documents directory
     * On iOS it's the app's documents directory.
     * Use this directory to store user-generated content.
     * On Android it's the Public Documents folder, so it's accessible from other apps.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["Documents"] = "DOCUMENTS";
    /**
     * The Data directory
     * On iOS it will use the Documents directory.
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["Data"] = "DATA";
    /**
     * The Library directory
     * On iOS it will use the Library directory.
     * On Android it's the directory holding application files.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.1.0
     */
    Directory["Library"] = "LIBRARY";
    /**
     * The Cache directory
     * Can be deleted in cases of low memory, so use this directory to write app-specific files
     * that your app can re-create easily.
     *
     * @since 1.0.0
     */
    Directory["Cache"] = "CACHE";
    /**
     * The external directory
     * On iOS it will use the Documents directory
     * On Android it's the directory on the primary shared/external
     * storage device where the application can place persistent files it owns.
     * These files are internal to the applications, and not typically visible
     * to the user as media.
     * Files will be deleted when the application is uninstalled.
     *
     * @since 1.0.0
     */
    Directory["External"] = "EXTERNAL";
    /**
     * The external storage directory
     * On iOS it will use the Documents directory
     * On Android it's the primary shared/external storage directory.
     * It's not accesible on Android 10 unless the app enables legacy External Storage
     * by adding `android:requestLegacyExternalStorage="true"` in the `application` tag
     * in the `AndroidManifest.xml`.
     * It's not accesible on Android 11 or newer.
     *
     * @since 1.0.0
     */
    Directory["ExternalStorage"] = "EXTERNAL_STORAGE";
})(Directory || (Directory = {}));
var Encoding;
(function (Encoding) {
    /**
     * Eight-bit UCS Transformation Format
     *
     * @since 1.0.0
     */
    Encoding["UTF8"] = "utf8";
    /**
     * Seven-bit ASCII, a.k.a. ISO646-US, a.k.a. the Basic Latin block of the
     * Unicode character set
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["ASCII"] = "ascii";
    /**
     * Sixteen-bit UCS Transformation Format, byte order identified by an
     * optional byte-order mark
     * This encoding is only supported on Android.
     *
     * @since 1.0.0
     */
    Encoding["UTF16"] = "utf16";
})(Encoding || (Encoding = {}));
/**
 * @deprecated Use `Directory`.
 * @since 1.0.0
 */
const FilesystemDirectory = Directory;
/**
 * @deprecated Use `Encoding`.
 * @since 1.0.0
 */
const FilesystemEncoding = Encoding;
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "./node_modules/@capacitor/filesystem/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/index.js ***!
  \**************************************************************/
/*! exports provided: Directory, Encoding, FilesystemDirectory, FilesystemEncoding, Filesystem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filesystem", function() { return Filesystem; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/index.js");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "./node_modules/@capacitor/filesystem/dist/esm/definitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directory", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["Directory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Encoding", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["Encoding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemDirectory", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["FilesystemDirectory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FilesystemEncoding", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["FilesystemEncoding"]; });


const Filesystem = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Filesystem', {
    web: () => Promise.all(/*! import() | web */[__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null, /*! ./web */ "./node_modules/@capacitor/filesystem/dist/esm/web.js")).then(m => new m.FilesystemWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "./node_modules/@ionic/core/dist/esm/index-7a8b7a1c.js");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js");
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ "./node_modules/@ionic/core/dist/esm/index-34cb2743.js");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-94e770cc.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-1457892a.js */ "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "./src/app/services/activities/advisoryTopic/advisory-topic.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/services/activities/advisoryTopic/advisory-topic.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AdvisoryTopicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvisoryTopicService", function() { return AdvisoryTopicService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");





class AdvisoryTopicService {
    constructor(http) {
        this.http = http;
        this.API_SAVE_ACTA_ASESORIA = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_SAVE_ACTA_ASESORIA;
        this.API_UPLOAD_FILE_ACTA_ASESORIA = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_UPLOAD_FILE_ACTA_ASESORIA;
        this.API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP;
    }
    saveActaAsesoria(actaAses) {
        const rq = actaAses;
        console.log(rq);
        return this.http.post(this.API_SAVE_ACTA_ASESORIA, rq);
    }
    uploadFileActaAsesoria(file) {
        const rq = file;
        return this.http.post(this.API_UPLOAD_FILE_ACTA_ASESORIA, rq);
    }
    // Envio correo notificacion
    enviarCorreoNotificacionActaApp(correoNotif) {
        const rq = correoNotif;
        console.log(rq);
        return this.http.post(this.API_ENVIAR_CORREO_NOTIFICACION_ACTA_APP, rq);
    }
}
AdvisoryTopicService.ɵfac = function AdvisoryTopicService_Factory(t) { return new (t || AdvisoryTopicService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AdvisoryTopicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AdvisoryTopicService, factory: AdvisoryTopicService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AdvisoryTopicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/alert/alert.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/alert/alert.service.ts ***!
  \*************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





/**
 * Servicio general de alertas.
 */
class AlertService {
    constructor(loadingCtlr, alertCtrl) {
        this.loadingCtlr = loadingCtlr;
        this.alertCtrl = alertCtrl;
    }
    /**
     * Muestra una alerta con opciones de aceptar y cancelar.
     *
     * En caso de que no se envíe ningún manejador para los eventos de aceptación o cancelación,
     * la alerta solo contendrá un botón para aceptar.
     *
     * @param header Título.
     * @param message Mensaje.
     * @param acceptHandler Manejador del evento de aceptación.
     * @param cancelHandler Manejador del evento de cancelación.
     */
    showAlert(header, message, acceptHandler, cancelHandler) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const buttons = [];
            if (acceptHandler || cancelHandler) {
                buttons.push({ text: 'Aceptar', role: 'accept', handler: acceptHandler });
                buttons.push({ text: 'Cancelar', role: 'cancel', handler: cancelHandler });
            }
            else {
                buttons.push({ text: 'Aceptar', role: 'cancel' });
            }
            const alert = yield this.alertCtrl.create({
                mode: 'ios',
                header,
                message,
                buttons,
            });
            yield alert.present();
            return alert;
        });
    }
    /**
     * Oculta la alerta indicada.
     *
     * @param alert Alerta a ocultar.
     */
    hideAlert(alert) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield alert.dismiss();
        });
    }
    /**
     * Muestra alerta de carga.
     */
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.loadingCtlr.create({ message: 'Cargando...', mode: 'ios' });
            yield alert.present();
            return alert;
        });
    }
    /**
     * Oculta la alerta de carga indicada.
     *
     * @param element Alerta a ocultar.
     */
    hideLoading(alert) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield alert.dismiss();
        });
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"])); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }, { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/attach/photo-service.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/attach/photo-service.service.ts ***!
  \**********************************************************/
/*! exports provided: PhotoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoServiceService", function() { return PhotoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ "./node_modules/@capacitor/camera/dist/esm/index.js");




class PhotoServiceService {
    constructor() {
        this.photos = [];
    }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].DataUrl,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 60,
            });
            const fotoIngresada = {
                format: capturedPhoto.format,
                base64Imagen: capturedPhoto.dataUrl,
                idFoto: new Date().getTime().toString(16),
            };
            // this.photos.push(fotoIngresada);
            return fotoIngresada;
        });
    }
    deletePhoto(photoSelected, index) {
        const idFotoAEliminar = photoSelected.idFoto;
        const encontro = this.photos.find(x => x.idFoto === idFotoAEliminar);
        if (encontro) {
            this.photos.splice(encontro, 1);
        }
    }
}
PhotoServiceService.ɵfac = function PhotoServiceService_Factory(t) { return new (t || PhotoServiceService)(); };
PhotoServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PhotoServiceService, factory: PhotoServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PhotoServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/event/event.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/event/event.service.ts ***!
  \*************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





class EventService {
    constructor(http) {
        this.http = http;
        // API_USERREGISTREMODEL = environment.API_GETUSERREGISTEREVENT;
        // API_CREATEEVENT = environment.API_CREATE_EVENT;
        this.API_SEARCH_BRANCH_OFFICES_FOR_EVENT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_GET_BRANCH_OFFICE_EVENT;
        this.API_SEARCH_MUNICIPY_BRANCH_OFFICE_FOR_EVENT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_GET_MUNICIPY_BRANCH_OFFICE_EVENT;
        this.API_SEARCH_EVENT_FOR_MUNICIPY = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_GET_EVENT_FOR_MUNICIPY;
        this.API_RESPONSIBLE_EVENT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_POST_CREATE_RESPONSIBLE_EVENT;
        this.API_REGISTER_RESPONSIBLE_QR = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_POST_REGISTER_RESPONSIBLE_EVENT_QR;
        this.API_REGISTER_RESPONSIBLE_MANUAL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_POST_REGISTER_RESPONSIBLE_EVENT_MANUAL;
        this.API_SEARCH_RESPONSIBLE_MANUAL_EVENT = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_GET_SEARCH_RESPONSIBLE_MANUAL_EVENT;
        this.API_DOCUMENTS_TYPE = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].API_GET_DOCUMENTS_TYPE;
    }
    /**
     * Metodo que realiza la petición para obtener las sucursales segun la fecha del
     * sistema, esto en el módulo de eventos positiva.
     */
    getBranchOfficeEvent() {
        return this.http.get(this.API_SEARCH_BRANCH_OFFICES_FOR_EVENT);
    }
    /**
     * Metodo que realiza la petición para obtener los municipios acorde a la sucursal seleccionada la cual llega por parametro
     * esto en el módulo de eventos positiva.
     */
    getMunicipyBrachOffice(idBranchOffice) {
        const urlGetMunicipyBranchOffice = `${this.API_SEARCH_MUNICIPY_BRANCH_OFFICE_FOR_EVENT}?Fk_Id_Sucursal=${idBranchOffice}`;
        return this.http.get(urlGetMunicipyBranchOffice);
    }
    /**
     * Método que realiza la petición para obtener los eventos segun el municipio seleccionado
     */
    getEventForMunicipy(idMunicipy) {
        const urlEventForMunicipy = `${this.API_SEARCH_EVENT_FOR_MUNICIPY}?FK_Id_Municipio=${idMunicipy}`;
        return this.http.get(urlEventForMunicipy);
    }
    /**
     * Este método consulta los diferentes documentos que puede tener un usuario, (CC, NIT, CE, etc)
     */
    getDocumentType() {
        return this.http.get(this.API_DOCUMENTS_TYPE);
    }
    /**
     * Este metodo se encarga de guardar el responsable del evento.
     */
    createEventResponsible(responsibleEvent) {
        return this.http.post(this.API_RESPONSIBLE_EVENT, responsibleEvent);
    }
    /**
     * ESte metodo permite guardar el registro del invitado de eventos positiva cuando la opción es por código QR
     */
    registerResponsibleQR(resposibleEventQR) {
        return this.http.post(this.API_REGISTER_RESPONSIBLE_QR, resposibleEventQR);
    }
    /**
     * Este metodo permite guardar el registro del invitado de eventos positiva cuando la opción es por código Manual.
     */
    registerResponsibleManual(responsibleEventManual) {
        return this.http.post(this.API_REGISTER_RESPONSIBLE_MANUAL, responsibleEventManual);
    }
    /**
     * parametros:
     * - documentoAsistente
     * - idEvento
     * Este metodo permite consultar la información del usuario el cual sera registrado manualmente,
     * recive dos parametros para dicha consulta.
     */
    getSearchResponsibleEventManual(documentoAsistente, idEvento) {
        const urlSearchResponsibleManualEvent = `${this.API_SEARCH_RESPONSIBLE_MANUAL_EVENT}?NumeroIdentificacionEmpleado=${documentoAsistente}&Fk_Id_Evento=${idEvento}`;
        return this.http.get(urlSearchResponsibleManualEvent);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EventService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map