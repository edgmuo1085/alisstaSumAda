(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{yPrK:function(t,e,n){"use strict";n.r(e),n.d(e,"SettingsPageModule",(function(){return at}));var o=n("ofXK"),r=n("3Pt+"),a=n("fXoL");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){c(t,e,n[e])}))}return t}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],o=!0,r=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(o=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);o=!0);}catch(u){r=!0,a=u}finally{try{o||null==c.return||c.return()}finally{if(r)throw a}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var f={},l={};try{"undefined"!=typeof window&&(f=window),"undefined"!=typeof document&&(l=document),"undefined"!=typeof MutationObserver&&MutationObserver,"undefined"!=typeof performance&&performance}catch(it){}var d=(f.navigator||{}).userAgent,p=void 0===d?"":d,h=f,y=l,_=!!y.documentElement&&!!y.head&&"function"==typeof y.addEventListener&&"function"==typeof y.createElement,m=(~p.indexOf("MSIE")||p.indexOf("Trident/"),[1,2,3,4,5,6,7,8,9,10]),v=m.concat([11,12,13,14,15,16,17,18,19,20]),b={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},w=(["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",b.GROUP,b.SWAP_OPACITY,b.PRIMARY,b.SECONDARY].concat(m.map((function(t){return"".concat(t,"x")}))).concat(v.map((function(t){return"w-".concat(t)}))),h.FontAwesomeConfig||{});y&&"function"==typeof y.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=s(t,2),n=e[1],o=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=y.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(e[0]));null!=o&&(w[n]=o)}));var g=u({},{familyPrefix:"fa",replacementClass:"svg-inline--fa",autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},w);g.autoReplaceSvg||(g.observeMutations=!1);var O=u({},g);h.FontAwesomeConfig=O;var E=h||{};E.___FONT_AWESOME___||(E.___FONT_AWESOME___={}),E.___FONT_AWESOME___.styles||(E.___FONT_AWESOME___.styles={}),E.___FONT_AWESOME___.hooks||(E.___FONT_AWESOME___.hooks={}),E.___FONT_AWESOME___.shims||(E.___FONT_AWESOME___.shims=[]);var M=E.___FONT_AWESOME___,A=[];_&&((y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(y.readyState)||y.addEventListener("DOMContentLoaded",(function t(){y.removeEventListener("DOMContentLoaded",t),A.map((function(t){return t()}))})));var P,S=function(){},k="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,j="undefined"==typeof setImmediate?setTimeout:setImmediate,C=[];function T(){for(var t=0;t<C.length;t++)C[t][0](C[t][1]);C=[],P=!1}function z(t,e){C.push([t,e]),P||(P=!0,j(T,0))}function N(t){var e=t.owner,n=e._state,o=e._data,r=t[n],a=t.then;if("function"==typeof r){n="fulfilled";try{o=r(o)}catch(it){I(a,it)}}L(a,o)||("fulfilled"===n&&x(a,o),"rejected"===n&&I(a,o))}function L(t,e){var n;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===i(e))){var o=e.then;if("function"==typeof o)return o.call(e,(function(o){n||(n=!0,e===o?F(t,o):x(t,o))}),(function(e){n||(n=!0,I(t,e))})),!0}}catch(it){return n||I(t,it),!0}return!1}function x(t,e){t!==e&&L(t,e)||F(t,e)}function F(t,e){"pending"===t._state&&(t._state="settled",t._data=e,z(W,t))}function I(t,e){"pending"===t._state&&(t._state="settled",t._data=e,z(Y,t))}function R(t){t._then=t._then.forEach(N)}function W(t){t._state="fulfilled",R(t)}function Y(t){t._state="rejected",R(t),!t._handled&&k&&global.process.emit("unhandledRejection",t._data,t)}function D(t){global.process.emit("rejectionHandled",t)}function K(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof K==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){I(e,t)}try{t((function(t){x(e,t)}),n)}catch(it){n(it)}}(t,this)}K.prototype={constructor:K,_state:"pending",_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(S),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,"rejected"===this._state&&k&&z(D,this)),"fulfilled"===this._state||"rejected"===this._state?z(N,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},K.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new K((function(e,n){var o=[],r=0;function a(t){return r++,function(n){o[t]=n,--r||e(o)}}for(var i,c=0;c<t.length;c++)(i=t[c])&&"function"==typeof i.then?i.then(a(c),n):o[c]=i;r||e(o)}))},K.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new K((function(e,n){for(var o,r=0;r<t.length;r++)(o=t[r])&&"function"==typeof o.then?o.then(e,n):e(o)}))},K.resolve=function(t){return t&&"object"===i(t)&&t.constructor===K?t:new K((function(e){e(t)}))},K.reject=function(t){return new K((function(e,n){n(t)}))};var H=function(t,e,n,o){var r,a,i,c=Object.keys(t),u=c.length,s=void 0!==o?function(t,e){return function(n,o,r,a){return t.call(e,n,o,r,a)}}(e,o):e;for(void 0===n?(r=1,i=t[c[0]]):(r=0,i=n);r<u;r++)i=s(i,t[a=c[r]],a,t);return i};function J(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.skipHooks,r=void 0!==o&&o,a=Object.keys(e).reduce((function(t,n){var o=e[n];return o.icon?t[o.iconName]=o.icon:t[n]=o,t}),{});"function"!=typeof M.hooks.addPack||r?M.styles[t]=u({},M.styles[t]||{},a):M.hooks.addPack(t,a),"fas"===t&&J("fa",e)}var q=M.styles,U=M.shims,V=function(){var t=function(t){return H(q,(function(e,n,o){return e[o]=H(n,t,{}),e}),{})};t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),t((function(t,e,n){var o=e[2];return t[n]=n,o.forEach((function(e){t[e]=n})),t}));var e="far"in q;H(U,(function(t,n){var o=n[1];return"far"!==o||e||(o="fas"),t[n[0]]={prefix:o,iconName:n[2]},t}),{})};function X(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}V(),(X.prototype=Object.create(Error.prototype)).constructor=X;var G={fill:"currentColor"},Z={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},B=(u({},G,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"}),u({},Z,{attributeName:"opacity"}));u({},G,{cx:"256",cy:"364",r:"28"}),u({},Z,{attributeName:"r",values:"28;14;28;28;14;28;"}),u({},B,{values:"1;0;1;1;0;1;"}),u({},G,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),u({},B,{values:"1;0;0;0;0;1;"}),u({},G,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),u({},B,{values:"0;0;1;1;0;0;"}),new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var e;return(e=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];var r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(e){t.definitions[e]=u({},t.definitions[e]||{},r[e]),J(e,r[e]),V()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var o=n[e],r=o.prefix,a=o.iconName,i=o.icon;t[r]||(t[r]={}),t[r][a]=i})),t}}])&&function(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}(t.prototype,e),t}());n("jhN1");let Q=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)}}),t})();var $=n("k0k6"),tt=n("m/P+"),et=n("TEn/"),nt=n("tyNb");const ot=[{path:"",component:n("nD9t").a},{path:"about",loadChildren:()=>n.e(36).then(n.bind(null,"UoYK")).then(t=>t.AboutPageModule)},{path:"termAndConditions",loadChildren:()=>n.e(8).then(n.bind(null,"cCjq")).then(t=>t.TermsAndConditionsPageModule)}];let rt=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[nt.j.forChild(ot)],nt.j]}),t})(),at=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},providers:[$.a,tt.a],imports:[[o.c,r.g,et.Z,Q,rt]]}),t})()}}]);