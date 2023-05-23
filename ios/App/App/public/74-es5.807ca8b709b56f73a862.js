function _createForOfIteratorHelper(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(C){u=function(e,t,r){return e[t]=r}}function c(e,t,r,i){var o=t&&t.prototype instanceof v?t:v,a=Object.create(o.prototype),s=new S(i||[]);return n(a,"_invoke",{value:k(e,r,s)}),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var h={};function v(){}function f(){}function p(){}var d={};u(d,o,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(x([])));m&&m!==t&&r.call(m,o)&&(d=m);var g=p.prototype=v.prototype=Object.create(d);function w(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var i;n(this,"_invoke",{value:function(n,o){function a(){return new t((function(i,a){!function n(i,o,a,s){var u=l(e[i],e,o);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,s)}),(function(e){n("throw",e,a,s)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,s)}))}s(u.arg)}(n,o,i,a)}))}return i=i?i.then(a,a):a()}})}function k(e,t,r){var n="suspendedStart";return function(i,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=j(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var i=l(n,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,h;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:T}}function T(){return{value:void 0,done:!0}}return f.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=u(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,s,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},w(b.prototype),u(b.prototype,a,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new b(c(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(g),u(g,s,"Generator"),u(g,o,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,h):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;_(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function asyncGeneratorStep(e,t,r,n,i,o,a){try{var s=e[o](a),u=s.value}catch(c){return void r(c)}s.done?t(u):Promise.resolve(u).then(n,i)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var o=e.apply(t,r);function a(e){asyncGeneratorStep(o,n,i,a,s,"next",e)}function s(e){asyncGeneratorStep(o,n,i,a,s,"throw",e)}a(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_toPropertyKey(n.key),n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{vnES:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_nav",(function(){return v})),r.d(t,"ion_nav_link",(function(){return f}));var n=r("wEJo"),i=r("E/Mt"),o=r("bC4P"),a=r("1vRN"),s=r("Js3/"),u=r("acej"),c=function(){function e(t,r){_classCallCheck(this,e),this.component=t,this.params=r,this.state=1}var t;return _createClass(e,[{key:"init",value:(t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var r;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state=2,this.element){e.next=5;break}return r=this.component,e.next=4,Object(u.a)(this.delegate,t,r,["ion-page","ion-page-invisible"],this.params);case 4:this.element=e.sent;case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_destroy",value:function(){Object(a.l)(3!==this.state,"view state must be ATTACHED");var e=this.element;e&&(this.delegate?this.delegate.removeViewFromDom(e.parentElement,e):e.remove()),this.nav=void 0,this.state=3}}]),e}(),l=function(e,t,r){if(!e)return!1;if(e.component!==t)return!1;var n=e.params;if(n===r)return!0;if(!n&&!r)return!0;if(!n||!r)return!1;var i=Object.keys(n),o=Object.keys(r);if(i.length!==o.length)return!1;for(var a=0,s=i;a<s.length;a++){var u=s[a];if(n[u]!==r[u])return!1}return!0},h=function(e,t){return e?e instanceof c?e:new c(e,t):null},v=function(){function e(t){_classCallCheck(this,e),Object(n.o)(this,t),this.ionNavWillLoad=Object(n.g)(this,"ionNavWillLoad",7),this.ionNavWillChange=Object(n.g)(this,"ionNavWillChange",3),this.ionNavDidChange=Object(n.g)(this,"ionNavDidChange",3),this.transInstr=[],this.animationEnabled=!0,this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}var t,u,v,f,p;return _createClass(e,[{key:"swipeGestureChanged",value:function(){this.gesture&&this.gesture.enable(!0===this.swipeGesture)}},{key:"rootChanged",value:function(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}},{key:"componentWillLoad",value:function(){if(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture){var e=Object(i.b)(this);this.swipeGesture=i.c.getBoolean("swipeBackEnabled","ios"===e)}this.ionNavWillLoad.emit()}},{key:"componentDidLoad",value:(p=_asyncToGenerator(_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.rootChanged(),e.next=3,r.e(11).then(r.bind(null,"Pu4v"));case 3:this.gesture=e.sent.createSwipeBackGesture(this.el,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged();case 5:case"end":return e.stop()}}),e,this)}))),function(){return p.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){var e,t=_createForOfIteratorHelper(this.views);try{for(t.s();!(e=t.n()).done;){var r=e.value;Object(s.h)(r.element,s.e),r._destroy()}}catch(n){t.e(n)}finally{t.f()}this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}},{key:"push",value:function(e,t,r,n){return this.queueTrns({insertStart:-1,insertViews:[{component:e,componentProps:t}],opts:r},n)}},{key:"insert",value:function(e,t,r,n,i){return this.queueTrns({insertStart:e,insertViews:[{component:t,componentProps:r}],opts:n},i)}},{key:"insertPages",value:function(e,t,r,n){return this.queueTrns({insertStart:e,insertViews:t,opts:r},n)}},{key:"pop",value:function(e,t){return this.queueTrns({removeStart:-1,removeCount:1,opts:e},t)}},{key:"popTo",value:function(e,t,r){var n={removeStart:-1,removeCount:-1,opts:t};return"object"==typeof e&&e.component?(n.removeView=e,n.removeStart=1):"number"==typeof e&&(n.removeStart=e+1),this.queueTrns(n,r)}},{key:"popToRoot",value:function(e,t){return this.queueTrns({removeStart:1,removeCount:-1,opts:e},t)}},{key:"removeIndex",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return this.queueTrns({removeStart:e,removeCount:t,opts:r},n)}},{key:"setRoot",value:function(e,t,r,n){return this.setPages([{component:e,componentProps:t}],r,n)}},{key:"setPages",value:function(e,t,r){return null==t&&(t={}),!0!==t.animated&&(t.animated=!1),this.queueTrns({insertStart:0,insertViews:e,removeStart:0,removeCount:-1,opts:t},r)}},{key:"setRouteId",value:function(e,t,r,n){var i,o=this.getActiveSync();if(l(o,e,t))return Promise.resolve({changed:!1,element:o.element});var a,s=new Promise((function(e){return i=e})),u={updateURL:!1,viewIsReady:function(e){var t,r,n=new Promise((function(e){return t=e}));return i({changed:!0,element:e,markVisible:(r=_asyncToGenerator(_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(),e.next=3,a;case 3:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})}),n}};if("root"===r)a=this.setRoot(e,t,u);else{var c=this.views.find((function(r){return l(r,e,t)}));c?a=this.popTo(c,Object.assign(Object.assign({},u),{direction:"back",animationBuilder:n})):"forward"===r?a=this.push(e,t,Object.assign(Object.assign({},u),{animationBuilder:n})):"back"===r&&(a=this.setRoot(e,t,Object.assign(Object.assign({},u),{direction:"back",animated:!0,animationBuilder:n})))}return s}},{key:"getRouteId",value:(f=_asyncToGenerator(_regeneratorRuntime().mark((function e(){var t;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getActiveSync(),e.abrupt("return",t?{id:t.element.tagName,params:t.params,element:t.element}:void 0);case 2:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"getActive",value:function(){return Promise.resolve(this.getActiveSync())}},{key:"getByIndex",value:function(e){return Promise.resolve(this.views[e])}},{key:"canGoBack",value:function(e){return Promise.resolve(this.canGoBackSync(e))}},{key:"getPrevious",value:function(e){return Promise.resolve(this.getPreviousSync(e))}},{key:"getLength",value:function(){return this.views.length}},{key:"getActiveSync",value:function(){return this.views[this.views.length-1]}},{key:"canGoBackSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();return!(!e||!this.getPreviousSync(e))}},{key:"getPreviousSync",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getActiveSync();if(e){var t=this.views,r=t.indexOf(e);return r>0?t[r-1]:void 0}}},{key:"queueTrns",value:(v=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,r){var n,i,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isTransitioning||null==t.opts||!t.opts.skipIfBusy){e.next=2;break}return e.abrupt("return",Promise.resolve(!1));case 2:if(n=new Promise((function(e,r){t.resolve=e,t.reject=r})),t.done=r,!t.opts||!1===t.opts.updateURL||!this.useRouter){e.next=13;break}if(!(i=document.querySelector("ion-router"))){e.next=13;break}return e.next=8,i.canTransition();case 8:if(!1!==(o=e.sent)){e.next=11;break}return e.abrupt("return",Promise.resolve(!1));case 11:if("string"!=typeof o){e.next=13;break}return e.abrupt("return",(i.push(o,t.opts.direction||"back"),Promise.resolve(!1)));case 13:return e.abrupt("return",(t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),n));case 14:case"end":return e.stop()}}),e,this)}))),function(e,t){return v.apply(this,arguments)})},{key:"success",value:function(e,t){if(this.destroyed)this.fireError("nav controller was destroyed",t);else if(t.done&&t.done(e.hasCompleted,e.requiresTransition,e.enteringView,e.leavingView,e.direction),t.resolve(e.hasCompleted),!1!==t.opts.updateURL&&this.useRouter){var r=document.querySelector("ion-router");r&&r.navChanged("back"===e.direction?"back":"forward")}}},{key:"failed",value:function(e,t){this.destroyed?this.fireError("nav controller was destroyed",t):(this.transInstr.length=0,this.fireError(e,t))}},{key:"fireError",value:function(e,t){t.done&&t.done(!1,!1,e),t.reject&&!this.destroyed?t.reject(e):t.resolve(!1)}},{key:"nextTrns",value:function(){if(this.isTransitioning)return!1;var e=this.transInstr.shift();return!!e&&(this.runTransition(e),!0)}},{key:"runTransition",value:(u=_asyncToGenerator(_regeneratorRuntime().mark((function e(t){var r,n,i,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t),r=this.getActiveSync(),n=this.getEnteringView(t,r),r||n){e.next=5;break}throw new Error("no views in the stack to be removed");case 5:if(e.t0=n&&1===n.state,!e.t0){e.next=9;break}return e.next=9,n.init(this.el);case 9:if(this.postViewInit(n,r,t),(i=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&n!==r)&&t.opts&&r&&("back"===t.opts.direction&&(t.opts.animationBuilder=t.opts.animationBuilder||n&&n.animationBuilder),r.animationBuilder=t.opts.animationBuilder),!i){e.next=18;break}return e.next=15,this.transition(n,r,t);case 15:e.t1=e.sent,e.next=19;break;case 18:e.t1={hasCompleted:!0,requiresTransition:!1};case 19:o=e.t1,this.success(o,t),this.ionNavDidChange.emit(),e.next=26;break;case 23:e.prev=23,e.t2=e.catch(0),this.failed(e.t2,t);case 26:this.isTransitioning=!1,this.nextTrns();case 27:case"end":return e.stop()}}),e,this,[[0,23]])}))),function(e){return u.apply(this,arguments)})},{key:"prepareTI",value:function(e){var t=this.views.length;if(e.opts=e.opts||{},void 0===e.opts.delegate&&(e.opts.delegate=this.delegate),void 0!==e.removeView){Object(a.l)(void 0!==e.removeStart,"removeView needs removeStart"),Object(a.l)(void 0!==e.removeCount,"removeView needs removeCount");var r=this.views.indexOf(e.removeView);if(r<0)throw new Error("removeView was not found");e.removeStart+=r}void 0!==e.removeStart&&(e.removeStart<0&&(e.removeStart=t-1),e.removeCount<0&&(e.removeCount=t-e.removeStart),e.leavingRequiresTransition=e.removeCount>0&&e.removeStart+e.removeCount===t),e.insertViews&&((e.insertStart<0||e.insertStart>t)&&(e.insertStart=t),e.enteringRequiresTransition=e.insertStart===t);var n=e.insertViews;if(n){Object(a.l)(n.length>0,"length can not be zero");var i=n.map((function(e){return e instanceof c?e:"component"in e?h(e.component,null===e.componentProps?void 0:e.componentProps):h(e,void 0)})).filter((function(e){return null!==e}));if(0===i.length)throw new Error("invalid views to insert");var o,s=_createForOfIteratorHelper(i);try{for(s.s();!(o=s.n()).done;){var u=o.value;u.delegate=e.opts.delegate;var l=u.nav;if(l&&l!==this)throw new Error("inserted view was already inserted");if(3===u.state)throw new Error("inserted view was already destroyed")}}catch(v){s.e(v)}finally{s.f()}e.insertViews=i}}},{key:"getEnteringView",value:function(e,t){var r=e.insertViews;if(void 0!==r)return r[r.length-1];var n=e.removeStart;if(void 0!==n)for(var i=this.views,o=n+e.removeCount,a=i.length-1;a>=0;a--){var s=i[a];if((a<n||a>=o)&&s!==t)return s}}},{key:"postViewInit",value:function(e,t,r){Object(a.l)(t||e,"Both leavingView and enteringView are null"),Object(a.l)(r.resolve,"resolve must be valid"),Object(a.l)(r.reject,"reject must be valid");var n,i=r.opts,o=r.insertViews,u=r.removeStart,c=r.removeCount;if(void 0!==u&&void 0!==c){Object(a.l)(u>=0,"removeStart can not be negative"),Object(a.l)(c>=0,"removeCount can not be negative"),n=[];for(var l=0;l<c;l++){var h=this.views[l+u];h&&h!==e&&h!==t&&n.push(h)}i.direction=i.direction||"back"}var v=this.views.length+(void 0!==o?o.length:0)-(void 0!==c?c:0);if(Object(a.l)(v>=0,"final balance can not be negative"),0===v)throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){var f,p=r.insertStart,d=_createForOfIteratorHelper(o);try{for(d.s();!(f=d.n()).done;){var y=f.value;this.insertViewAt(y,p),p++}}catch(O){d.e(O)}finally{d.f()}r.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(n&&n.length>0){var m,g=_createForOfIteratorHelper(n);try{for(g.s();!(m=g.n()).done;){var w=m.value;Object(s.h)(w.element,s.c),Object(s.h)(w.element,s.d),Object(s.h)(w.element,s.e)}}catch(O){g.e(O)}finally{g.f()}var b,k=_createForOfIteratorHelper(n);try{for(k.s();!(b=k.n()).done;){var j=b.value;this.destroyView(j)}}catch(O){k.e(O)}finally{k.f()}}}},{key:"transition",value:(t=_asyncToGenerator(_regeneratorRuntime().mark((function e(t,r,n){var o,a,u,c,l,h,v,f,p=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=n.opts,a=o.progressAnimation?function(e){return p.sbAni=e}:void 0,u=Object(i.b)(this),c=t.element,l=r&&r.element,h=Object.assign(Object.assign({mode:u,showGoBack:this.canGoBackSync(t),baseEl:this.el,progressCallback:a,animated:this.animated&&i.c.getBoolean("animated",!0),enteringEl:c,leavingEl:l},o),{animationBuilder:o.animationBuilder||this.animation||i.c.get("navAnimation")}),e.next=8,Object(s.j)(h);case 8:return v=e.sent,f=v.hasCompleted,e.abrupt("return",this.transitionFinish(f,t,r,o));case 11:case"end":return e.stop()}}),e,this)}))),function(e,r,n){return t.apply(this,arguments)})},{key:"transitionFinish",value:function(e,t,r,n){var i=e?t:r;return i&&this.cleanup(i),{hasCompleted:e,requiresTransition:!0,enteringView:t,leavingView:r,direction:n.direction}}},{key:"insertViewAt",value:function(e,t){var r=this.views,n=r.indexOf(e);n>-1?(Object(a.l)(e.nav===this,"view is not part of the nav"),r.splice(t,0,r.splice(n,1)[0])):(Object(a.l)(!e.nav,"nav is used"),e.nav=this,r.splice(t,0,e))}},{key:"removeView",value:function(e){Object(a.l)(2===e.state||3===e.state,"view state should be loaded or destroyed");var t=this.views,r=t.indexOf(e);Object(a.l)(r>-1,"view must be part of the stack"),r>=0&&t.splice(r,1)}},{key:"destroyView",value:function(e){e._destroy(),this.removeView(e)}},{key:"cleanup",value:function(e){if(!this.destroyed)for(var t=this.views,r=t.indexOf(e),n=t.length-1;n>=0;n--){var i=t[n],o=i.element;o&&(n>r?(Object(s.h)(o,s.e),this.destroyView(i)):n<r&&Object(s.i)(o,!0))}}},{key:"canStart",value:function(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.animationEnabled&&this.canGoBackSync()}},{key:"onStart",value:function(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}},{key:"onMove",value:function(e){this.sbAni&&this.sbAni.progressStep(e)}},{key:"onEnd",value:function(e,t,r){var n=this;if(this.sbAni){this.animationEnabled=!1,this.sbAni.onFinish((function(){n.animationEnabled=!0}),{oneTimeCallback:!0});var i=e?-.001:.001;e?i+=Object(o.a)([0,0],[.32,.72],[0,1],[1,1],t)[0]:(this.sbAni.easing("cubic-bezier(1, 0, 0.68, 0.28)"),i+=Object(o.a)([0,0],[1,0],[.68,.28],[1,1],t)[0]),this.sbAni.progressEnd(e?1:0,i,r)}}},{key:"render",value:function(){return Object(n.j)("slot",null)}},{key:"el",get:function(){return Object(n.k)(this)}}],[{key:"watchers",get:function(){return{swipeGesture:["swipeGestureChanged"],root:["rootChanged"]}}}]),e}();v.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}";var f=function(){function e(t){var r=this;_classCallCheck(this,e),Object(n.o)(this,t),this.routerDirection="forward",this.onClick=function(){return function(e,t,n,i,o){var a=r.el.closest("ion-nav");if(a)if("forward"===t){if(void 0!==n)return a.push(n,i,{skipIfBusy:!0,animationBuilder:o})}else if("root"===t){if(void 0!==n)return a.setRoot(n,i,{skipIfBusy:!0,animationBuilder:o})}else if("back"===t)return a.pop({skipIfBusy:!0,animationBuilder:o});return Promise.resolve(!1)}(0,r.routerDirection,r.component,r.componentProps,r.routerAnimation)}}return _createClass(e,[{key:"render",value:function(){return Object(n.j)(n.c,{onClick:this.onClick})}},{key:"el",get:function(){return Object(n.k)(this)}}]),e}()}}]);