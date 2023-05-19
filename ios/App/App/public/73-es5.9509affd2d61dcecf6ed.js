function _defineProperty(e,t,r){return(t=_toPropertyKey(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,r){return e[t]=r}}function d(e,t,r,n){var a=t&&t.prototype instanceof u?t:u,i=Object.create(a.prototype),s=new E(n||[]);return o(i,"_invoke",{value:x(e,r,s)}),i}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(P){return{type:"throw",arg:P}}}e.wrap=d;var h={};function u(){}function p(){}function m(){}var f={};c(f,a,(function(){return this}));var b=Object.getPrototypeOf,y=b&&b(b(S([])));y&&y!==t&&r.call(y,a)&&(f=y);var v=m.prototype=u.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;o(this,"_invoke",{value:function(o,a){function i(){return new t((function(n,i){!function o(n,a,i,s){var c=l(e[n],e,a);if("throw"!==c.type){var d=c.arg,h=d.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){o("next",e,i,s)}),(function(e){o("throw",e,i,s)})):t.resolve(h).then((function(e){d.value=e,i(d)}),(function(e){return o("throw",e,i,s)}))}s(c.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}})}function x(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return _()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=k(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var c=l(e,t,r);if("normal"===c.type){if(o=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o="completed",r.method="throw",r.arg=c.arg)}}}function k(e,t){var r=t.method,o=e.iterator[r];if(void 0===o)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var n=l(o,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,h;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function S(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,n=function t(){for(;++o<e.length;)if(r.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=m,o(v,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:p,configurable:!0}),p.displayName=c(m,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,s,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},g(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new w(d(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(v),c(v,s,"Generator"),c(v,a,(function(){return this})),c(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var o in t)r.push(o);return r.reverse(),function e(){for(;r.length;){var o=r.pop();if(o in t)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=S,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(r,o){return i.type="throw",i.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(s&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var n=this.tryEntries[o];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function asyncGeneratorStep(e,t,r,o,n,a,i){try{var s=e[a](i),c=s.value}catch(d){return void r(d)}s.done?t(c):Promise.resolve(c).then(o,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(o,n){var a=e.apply(t,r);function i(e){asyncGeneratorStep(a,o,n,i,s,"next",e)}function s(e){asyncGeneratorStep(a,o,n,i,s,"throw",e)}i(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{TvZU:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_modal",(function(){return y}));var o=r("wEJo"),n=r("E/Mt"),a=r("acej"),i=r("SOSK"),s=r("74mu"),c=r("Js3/"),d=r("meiF"),l=r("bC4P"),h=r("KF81"),u=r("1vRN");r("B4Jq"),r("y08P");var p=function(e,t){var r=Object(d.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=Object(d.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),n=Object(d.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(t){var a=window.innerWidth<768,i="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=Object(d.a)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),c=document.body;if(a){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",h="translateY(".concat(i?"-10px":l,") scale(0.93)");s.afterStyles({transform:h}).beforeAddWrite((function(){return c.style.setProperty("background-color","black")})).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"}]),n.addAnimation(s)}else if(n.addAnimation(r),i){var u="translateY(-10px) scale(".concat(i?.93:1,")");s.afterStyles({transform:u}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:u}]);var p=Object(d.a)().afterStyles({transform:u}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:u}]);n.addAnimation([s,p])}else o.fromTo("opacity","0","1")}else n.addAnimation(r);return n},m=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,o=Object(d.a)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n=Object(d.a)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),a=Object(d.a)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(n);if(t){var i=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,c=Object(d.a)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(l.querySelectorAll("ion-modal")).filter((function(e){return void 0!==e.presentingElement})).length<=1&&l.style.setProperty("background-color",""))})),l=document.body;if(i){var h=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",u="translateY(".concat(s?"-10px":h,") scale(0.93)");c.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:u,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),a.addAnimation(c)}else if(a.addAnimation(o),s){var p="translateY(-10px) scale(".concat(s?.93:1,")");c.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:p},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var m=Object(d.a)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:p},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);a.addAnimation([c,m])}else n.fromTo("opacity","1","0")}else a.addAnimation(o);return a},f=function(e){var t=Object(d.a)(),r=Object(d.a)(),o=Object(d.a)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,o])},b=function(e){var t=Object(d.a)(),r=Object(d.a)(),o=Object(d.a)(),n=e.querySelector(".modal-wrapper");return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,o])},y=function(){function e(t){var r=this;_classCallCheck(this,e),Object(o.o)(this,t),this.didPresent=Object(o.g)(this,"ionModalDidPresent",7),this.willPresent=Object(o.g)(this,"ionModalWillPresent",7),this.willDismiss=Object(o.g)(this,"ionModalWillDismiss",7),this.didDismiss=Object(o.g)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){r.dismiss(void 0,i.a)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),r.dismiss()},this.onLifecycle=function(e){var t=r.usersElement,o=v[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}}}var t,r;return _createClass(e,[{key:"swipeToCloseChanged",value:function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){Object(i.f)(this.el)}},{key:"present",value:(r=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t,r,n=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.presented){e.next=2;break}return e.abrupt("return");case 2:if(t=this.el.querySelector(".modal-wrapper")){e.next=5;break}throw new Error("container is undefined");case 5:return r=Object.assign(Object.assign({},this.componentProps),{modal:this.el}),e.next=8,Object(a.a)(this.delegate,t,this.component,["ion-page"],r);case 8:return this.usersElement=e.sent,e.next=11,Object(c.f)(this.usersElement);case 11:return Object(o.f)((function(){return n.el.classList.add("show-modal")})),e.next=14,Object(i.e)(this,"modalEnter",p,f,this.presentingElement);case 14:this.swipeToClose&&this.initSwipeToClose();case 15:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"initSwipeToClose",value:function(){var e=this;if("ios"===Object(n.b)(this)){var t,r,o,a,i,s=this.leaveAnimation||n.c.get("modalLeave",m),c=this.animation=s(this.el,this.presentingElement);this.gesture=(t=this.el,r=c,o=t.offsetHeight,a=!1,i=Object(h.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content, ion-footer")},onStart:function(){r.progressStart(!0,a?1:0)},onMove:function(e){var t=Object(u.j)(1e-4,e.deltaY/o,.9999);r.progressStep(t)},onEnd:function(t){var n=t.velocityY,s=Object(u.j)(1e-4,t.deltaY/o,.9999),c=(t.deltaY+1e3*n)/o>=.5,d=c?-.001:.001;c?(r.easing("cubic-bezier(0.32, 0.72, 0, 1)"),d+=Object(l.a)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(r.easing("cubic-bezier(1, 0, 0.68, 0.28)"),d+=Object(l.a)([0,0],[1,0],[.68,.28],[1,1],s)[0]);var h=function(e,t){return Object(u.j)(400,e/Math.abs(1.1*t),500)}(c?s*o:(1-s)*o,n);a=c,i.enable(!1),r.onFinish((function(){c||i.enable(!0)})).progressEnd(c?1:0,d,h),c&&(e.gestureAnimationDismissing=!0,e.animation.onFinish(_asyncToGenerator(_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.dismiss(void 0,"gesture");case 2:e.gestureAnimationDismissing=!1;case 3:case"end":return t.stop()}}),t)})))))}})),this.gesture.enable(!0)}}},{key:"dismiss",value:(t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,r){var o,n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.gestureAnimationDismissing||"gesture"===r){e.next=2;break}return e.abrupt("return",!1);case 2:return o=i.i.get(this)||[],e.next=5,Object(i.g)(this,t,r,"modalLeave",m,b,this.presentingElement);case 5:if(n=e.sent,e.t0=n,!e.t0){e.next=12;break}return e.next=10,Object(a.b)(this.delegate,this.usersElement);case 10:this.animation&&this.animation.destroy(),o.forEach((function(e){return e.destroy()}));case 12:return this.animation=void 0,e.abrupt("return",n);case 14:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"onDidDismiss",value:function(){return Object(i.h)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return Object(i.h)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var e,t=Object(n.b)(this);return Object(o.j)(o.c,{"no-router":!0,"aria-modal":"true",tabindex:"-1",class:Object.assign((e={},_defineProperty(e,t,!0),_defineProperty(e,"modal-card",void 0!==this.presentingElement&&"ios"===t),e),Object(s.b)(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},Object(o.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===t&&Object(o.j)("div",{class:"modal-shadow"}),Object(o.j)("div",{tabindex:"0"}),Object(o.j)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),Object(o.j)("div",{tabindex:"0"}))}},{key:"el",get:function(){return Object(o.k)(this)}}],[{key:"watchers",get:function(){return{swipeToClose:["swipeToCloseChanged"]}}}]),e}(),v={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};y.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}]);