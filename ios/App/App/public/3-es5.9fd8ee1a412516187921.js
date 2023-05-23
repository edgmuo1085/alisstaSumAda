function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(M){s=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var i=e&&e.prototype instanceof h?e:h,c=Object.create(i.prototype),a=new C(o||[]);return r(c,"_invoke",{value:S(t,n,a)}),c}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(M){return{type:"throw",arg:M}}}t.wrap=u;var f={};function h(){}function p(){}function g(){}var d={};s(d,i,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(P([])));v&&v!==e&&n.call(v,i)&&(d=v);var m=g.prototype=h.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;r(this,"_invoke",{value:function(r,i){function c(){return new e((function(o,c){!function r(o,i,c,a){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,a)}),(function(t){r("throw",t,c,a)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,a)}))}a(s.arg)}(r,i,o,c)}))}return o=o?o.then(c,c):c()}})}function S(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=O(c,n);if(a){if(a===f)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return p.prototype=g,r(m,"constructor",{value:g,configurable:!0}),r(g,"constructor",{value:p,configurable:!0}),p.displayName=s(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new w(u(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},y(m),s(m,a,"Generator"),s(m,i,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"7eI/":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("fXoL"),o=n("tk/3"),i=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getMenuOpts",value:function(){return this.http.get("/assets/data/menuConfiguracion.json")}},{key:"getMenuMain",value:function(){return this.http.get("/assets/data/menuPrincipal-prod.json")}},{key:"getMenuExceActivities",value:function(){return this.http.get("/assets/data/menuExecuteActi.json")}},{key:"getMenuHelpExceActivities",value:function(){return this.http.get("/assets/data/menuHelpExecuteActi.json")}},{key:"getMenuActivitySelected",value:function(){return this.http.get("/assets/data/menuVisitActivity.json")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Wb(o.a))},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},k0k6:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("mrSG"),o=n("C6fG"),i=n("fXoL"),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(r.c)(e,t),e.prototype.setPreferences=function(t){return Object(o.c)(this,"setPreferences",{},arguments)},e.prototype.getPreferences=function(){return Object(o.c)(this,"getPreferences",{},arguments)},e.prototype.promptForRating=function(t){return Object(o.c)(this,"promptForRating",{},arguments)},e.prototype.navigateToAppStore=function(){return Object(o.c)(this,"navigateToAppStore",{},arguments)},Object.defineProperty(e.prototype,"preferences",{get:function(){return Object(o.e)(this,"preferences")},set:function(t){Object(o.f)(this,"preferences",t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"locales",{get:function(){return Object(o.e)(this,"locales")},set:function(t){Object(o.f)(this,"locales",t)},enumerable:!1,configurable:!0}),e.pluginName="AppRate",e.plugin="cordova-plugin-apprate",e.pluginRef="AppRate",e.repo="https://github.com/pushandplay/cordova-plugin-apprate",e.platforms=["Android","BlackBerry 10","iOS","Windows"],e.\u0275fac=function(t){return n(t||e)},e.\u0275prov=i.Ib({token:e,factory:function(t){return e.\u0275fac(t)}});var n=i.Ub(e);return e}(o.a)},"m/P+":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("mrSG"),o=n("C6fG"),i=n("HDdC"),c=n("fXoL"),a=function(){function t(t,e,n){try{n&&"string"!=typeof n&&(n=Object.keys(n).map((function(t){return t+"="+n[t]})).join(",")),this._objectInstance=cordova.InAppBrowser.open(t,e,n)}catch(r){"undefined"!=typeof window&&window.open(t,e),console.warn("Native: InAppBrowser is not installed or you are running on a browser. Falling back to window.open.")}}return t.prototype._loadAfterBeforeload=function(t){return Object(o.d)(this,"_loadAfterBeforeload",{sync:!0},arguments)},t.prototype.show=function(){return Object(o.d)(this,"show",{sync:!0},arguments)},t.prototype.close=function(){return Object(o.d)(this,"close",{sync:!0},arguments)},t.prototype.hide=function(){return Object(o.d)(this,"hide",{sync:!0},arguments)},t.prototype.executeScript=function(t){return Object(o.d)(this,"executeScript",{},arguments)},t.prototype.insertCSS=function(t){return Object(o.d)(this,"insertCSS",{},arguments)},t.prototype.on=function(t){var e=this;return function(){if(!0===Object(o.h)(e))return new i.a((function(n){return e._objectInstance.addEventListener(t,n.next.bind(n)),function(){return e._objectInstance.removeEventListener(t,n.next.bind(n))}}))}()},t.prototype.on=function(t){var e=this;return function(){if(!0===Object(o.h)(e))return new i.a((function(n){return e._objectInstance.addEventListener(t,n.next.bind(n)),function(){return e._objectInstance.removeEventListener(t,n.next.bind(n))}}))}()},t}(),s=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}Object(r.c)(e,t),e.prototype.create=function(t,e,n){return new a(t,e,n)},e.pluginName="InAppBrowser",e.plugin="cordova-plugin-inappbrowser",e.pluginRef="cordova.InAppBrowser",e.repo="https://github.com/apache/cordova-plugin-inappbrowser",e.platforms=["AmazonFire OS","Android","Browser","iOS","macOS","Windows"],e.\u0275fac=function(t){return n(t||e)},e.\u0275prov=c.Ib({token:e,factory:function(t){return e.\u0275fac(t)}});var n=c.Ub(e);return e}(o.a)},nD9t:function(t,e,n){"use strict";n.d(e,"a",(function(){return O}));var r=n("mrSG"),o={prefix:"fas",iconName:"book",icon:[448,512,[],"f02d","M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"]},i=n("k0k6"),c=n("m/P+"),a=n("wxHw"),s=n("7eI/"),u=n("qkCY"),l=n("AytR"),f=n("wljF"),h=n("fXoL"),p=n("e8h1"),g=n("tyNb"),d=n("TEn/"),b=n("ofXK"),v=n("3Pt+");function m(t,e){if(1&t){var n=h.Tb();h.Sb(0,"div"),h.Sb(1,"ion-card",6),h.Sb(2,"div",7),h.Sb(3,"div",8),h.Sb(4,"div",7),h.Sb(5,"div",8),h.Nb(6,"img",15),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(7,"ion-label"),h.Sb(8,"h4",10),h.Cc(9,"TouchID/FaceID"),h.Rb(),h.Rb(),h.Sb(10,"div",7),h.Sb(11,"div",8),h.Sb(12,"ion-toggle",16),h.ac("ngModelChange",(function(t){return h.tc(n),h.ec().touchfaceid=t}))("ionChange",(function(){return h.tc(n),h.ec().switchTouchFaceID()})),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb()}if(2&t){var r=h.ec();h.Bb(12),h.mc("ngModel",r.touchfaceid)}}function y(t,e){1&t&&h.Nb(0,"ion-toggle",20)}function w(t,e){if(1&t){var n=h.Tb();h.Sb(0,"ion-col",4),h.Sb(1,"ion-card",17),h.ac("click",(function(){h.tc(n);var t=e.$implicit;return h.ec().optionSelectedMenu(t)})),h.Sb(2,"div",7),h.Sb(3,"div",8),h.Sb(4,"div",7),h.Sb(5,"div",8),h.Nb(6,"img",18),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(7,"ion-label"),h.Sb(8,"h4",10),h.Cc(9),h.Rb(),h.Rb(),h.Sb(10,"div",7),h.Sb(11,"div",8),h.Ac(12,y,1,0,"ion-toggle",19),h.Rb(),h.Rb(),h.Rb(),h.Rb()}if(2&t){var r=e.$implicit,o=e.index;h.Bb(6),h.mc("src",r.icon,h.vc),h.Bb(3),h.Dc(r.title),h.Bb(3),h.mc("ngIf",0===o)}}var S,O=((S=function(){function t(e,n,r,i,c,a,s,u,l){_classCallCheck(this,t),this.appRate=e,this.config=n,this.iab=r,this.storage=i,this.menuConfOptions=c,this.router=a,this.storageService=s,this.toastController=u,this.oneSignal=l,this.RATE_APP_TEXTS={title:"Rese\xf1a Alissta SUM",message:"Si te gusta Alissta SUM, \xbfpodr\xedas escribirnos una rese\xf1a? No tomar\xe1 m\xe1s de un minuto. \xa1Gracias por tu apoyo!",rateButtonLabel:"Escribir rese\xf1a ahora",cancelButtonLabel:"No, gracias",laterButtonLabel:"Recordarme m\xe1s tarde"},this.RATE_APP_IDS={ios:"<".concat(this.config.iosAppID,">"),android:"market://details?id=<".concat(this.config.androidAppID,">")},this.isFingerFaceAvailable=!1,this.faBook=o}return _createClass(t,[{key:"ngOnInit",value:function(){var e=this;this.optMenuOptions=this.menuConfOptions.getMenuOpts(),this.storageService.get("autologin").then((function(t){null!=t&&(e.autologin=t)})).catch((function(t){console.log("error: "+t)})),this.storageService.get("activateFinger").then((function(t){null!=t&&(e.touchfaceid=t)})).catch((function(t){console.log("error: "+t)})),this.storageService.get("isFingerFaceAvailable").then((function(t){null!=t&&(e.isFingerFaceAvailable=t)})).catch((function(t){console.log("error: "+t)}));var n=localStorage.getItem(t.NOTIFICATIONS_KEY);this.notifications="true"==n}},{key:"optionSelectedMenu",value:function(t){switch(t.title){case"Notificaciones":case"TouchID/FaceID":case"Autologin":case"Tutoriales":break;case"Calificar el APP":this.rateApp();break;case"Acerca de":this.router.navigate(["u","settings","about"]);break;case"Terminos y condiciones":this.router.navigateByUrl("u/settings/termAndConditions");break;case"Cambiar contrase\xf1a":this.changePassword();break;case"Cerrar sesi\xf3n":this.singOff()}}},{key:"switchNotifications",value:function(){this.notifications=!this.notifications,localStorage.setItem(t.NOTIFICATIONS_KEY,this.notifications?"true":"false"),this.oneSignal.setSubscription(!!this.notifications)}},{key:"rateApp",value:function(){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.appRate.setPreferences({storeAppURL:this.RATE_APP_IDS,customLocale:this.RATE_APP_TEXTS,simpleMode:!0}),this.appRate.promptForRating(!0);case 1:case"end":return t.stop()}}),t,this)})))}},{key:"changePassword",value:function(){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.iab.create(l.a.RECUPERAR_PASSWORD,"_system");case 1:case"end":return t.stop()}}),t,this)})))}},{key:"singOff",value:function(){this.oneSignal.setSubscription(!1),this.oneSignal.deleteTag("PERSONAL"),this.storage.clear(),localStorage.clear(),sessionStorage.clear(),this.router.navigateByUrl("/login")}},{key:"toastBiometric",value:function(t){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:t,duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"toastAutologin",value:function(t){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastController.create({message:t,duration:2e3});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"switchTouchFaceID",value:function(){this.storageService.set("activateFinger",this.touchfaceid),this.toastBiometric(this.touchfaceid?"\xa1TouchID/FaceID activado!":"\xa1TouchID/FaceID desactivado!")}},{key:"switchAutologin",value:function(){this.storageService.set("autologin",this.autologin),this.toastAutologin(this.autologin?"\xa1Autologin activado!":"\xa1Autologin desactivado!")}}]),t}()).NOTIFICATIONS_KEY="notifications",S.\u0275fac=function(t){return new(t||S)(h.Mb(i.a),h.Mb(a.a),h.Mb(c.a),h.Mb(p.b),h.Mb(s.a),h.Mb(g.g),h.Mb(u.a),h.Mb(d.kb),h.Mb(f.a))},S.\u0275cmp=h.Gb({type:S,selectors:[["app-settings"]],decls:39,vars:6,consts:[[1,"background-image","backgroundContent"],["color","tertiary"],["name","settings-outline"],[1,"titulo"],["size","4"],[4,"ngIf"],["mode","ios"],[1,"vertical-center"],[1,"center"],["src","../../../assets/icon/icono_autologin.svg",2,"padding-top","5px"],[1,"tituloOpcion"],["mode","md",3,"ngModel","ngModelChange","ionChange"],["src","../../../assets/icon/icono_notificaciones.svg",2,"padding-top","5px"],["mode","md",3,"checked","ionChange"],["size","4",4,"ngFor","ngForOf"],["src","../../../assets/icon/icono_touch_face.svg",2,"padding-top","5px"],["mode","md","checked","false",3,"ngModel","ngModelChange","ionChange"],["mode","ios",3,"click"],["alt","",3,"src"],["mode","md",4,"ngIf"],["mode","md"]],template:function(t,e){1&t&&(h.Sb(0,"ion-content",0),h.Sb(1,"ion-list"),h.Sb(2,"ion-item",1),h.Nb(3,"ion-icon",2),h.Sb(4,"ion-label"),h.Sb(5,"h1",3),h.Cc(6,"CONFIGURACI\xd3N"),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(7,"ion-grid"),h.Sb(8,"ion-row"),h.Sb(9,"ion-col",4),h.Ac(10,m,13,1,"div",5),h.Rb(),h.Sb(11,"ion-col",4),h.Sb(12,"ion-card",6),h.Sb(13,"div",7),h.Sb(14,"div",8),h.Sb(15,"div",7),h.Sb(16,"div",8),h.Nb(17,"img",9),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(18,"ion-label"),h.Sb(19,"h4",10),h.Cc(20,"Autologin"),h.Rb(),h.Rb(),h.Sb(21,"div",7),h.Sb(22,"div",8),h.Sb(23,"ion-toggle",11),h.ac("ngModelChange",(function(t){return e.autologin=t}))("ionChange",(function(){return e.switchAutologin()})),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(24,"ion-col",4),h.Sb(25,"ion-card",6),h.Sb(26,"div",7),h.Sb(27,"div",8),h.Sb(28,"div",7),h.Sb(29,"div",8),h.Nb(30,"img",12),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Sb(31,"ion-label"),h.Sb(32,"h4",10),h.Cc(33,"Notificaciones"),h.Rb(),h.Rb(),h.Sb(34,"div",7),h.Sb(35,"div",8),h.Sb(36,"ion-toggle",13),h.ac("ionChange",(function(){return e.switchNotifications()})),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Rb(),h.Ac(37,w,13,3,"ion-col",14),h.fc(38,"async"),h.Rb(),h.Rb(),h.Rb()),2&t&&(h.Bb(10),h.mc("ngIf",e.isFingerFaceAvailable),h.Bb(13),h.mc("ngModel",e.autologin),h.Bb(13),h.mc("checked",e.notifications),h.Bb(1),h.mc("ngForOf",h.gc(38,4,e.optMenuOptions)))},directives:[d.q,d.G,d.A,d.x,d.F,d.v,d.L,d.p,b.l,d.j,d.X,d.b,v.l,v.o,b.k],pipes:[b.b],styles:["ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{margin-left:10px;font-weight:700;font-size:26px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{margin-top:50px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:100%;height:97%;margin:0;border-radius:13px;border:1px solid #95a6b1}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{margin-top:-15px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:block;margin:auto;width:70%}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%]{text-align:center;margin-bottom:5px;font-size:13px}"]}),S)},qkCY:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("mrSG"),o=n("fXoL"),i=n("e8h1"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.storage=e}return _createClass(t,[{key:"set",value:function(t,e){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var r;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.storage.set(t,e);case 3:r=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),r=!1;case 9:return n.abrupt("return",!1!==r);case 10:case"end":return n.stop()}}),n,this,[[0,6]])})))}},{key:"get",value:function(t){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.storage.get(t);case 3:n=e.sent,e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:return e.abrupt("return",n);case 9:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"remove",value:function(t){this.storage.remove(t)}},{key:"clear",value:function(){this.storage.clear()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Wb(i.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);