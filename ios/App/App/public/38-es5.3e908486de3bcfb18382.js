function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},n=Object.prototype,t=n.hasOwnProperty,o=Object.defineProperty||function(e,n,t){e[n]=t.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(e,n,t){return Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[n]}try{c({},"")}catch(_){c=function(e,n,t){return e[n]=t}}function u(e,n,t,r){var i=n&&n.prototype instanceof h?n:h,a=Object.create(i.prototype),s=new P(r||[]);return o(a,"_invoke",{value:R(e,t,s)}),a}function l(e,n,t){try{return{type:"normal",arg:e.call(n,t)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var d={};function h(){}function f(){}function b(){}var m={};c(m,i,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(k([])));g&&g!==n&&t.call(g,i)&&(m=g);var p=b.prototype=h.prototype=Object.create(m);function S(e){["next","throw","return"].forEach((function(n){c(e,n,(function(e){return this._invoke(n,e)}))}))}function C(e,n){var r;o(this,"_invoke",{value:function(o,i){function a(){return new n((function(r,a){!function o(r,i,a,s){var c=l(e[r],e,i);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&t.call(d,"__await")?n.resolve(d.__await).then((function(e){o("next",e,a,s)}),(function(e){o("throw",e,a,s)})):n.resolve(d).then((function(e){u.value=e,a(u)}),(function(e){return o("throw",e,a,s)}))}s(c.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}})}function R(e,n,t){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return x()}for(t.method=r,t.arg=i;;){var a=t.delegate;if(a){var s=y(a,t);if(s){if(s===d)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===o)throw o="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);o="executing";var c=l(e,n,t);if("normal"===c.type){if(o=t.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:t.done}}"throw"===c.type&&(o="completed",t.method="throw",t.arg=c.arg)}}}function y(e,n){var t=n.method,o=e.iterator[t];if(void 0===o)return n.delegate=null,"throw"===t&&e.iterator.return&&(n.method="return",n.arg=void 0,y(e,n),"throw"===n.method)||"return"!==t&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+t+"' method")),d;var r=l(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var i=r.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function w(e){var n={tryLoc:e[0]};1 in e&&(n.catchLoc=e[1]),2 in e&&(n.finallyLoc=e[2],n.afterLoc=e[3]),this.tryEntries.push(n)}function M(e){var n=e.completion||{};n.type="normal",delete n.arg,e.completion=n}function P(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function k(e){if(e){var n=e[i];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,r=function n(){for(;++o<e.length;)if(t.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=b,o(p,"constructor",{value:b,configurable:!0}),o(b,"constructor",{value:f,configurable:!0}),f.displayName=c(b,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var n="function"==typeof e&&e.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,s,"GeneratorFunction")),e.prototype=Object.create(p),e},e.awrap=function(e){return{__await:e}},S(C.prototype),c(C.prototype,a,(function(){return this})),e.AsyncIterator=C,e.async=function(n,t,o,r,i){void 0===i&&(i=Promise);var a=new C(u(n,t,o,r),i);return e.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},S(p),c(p,s,"Generator"),c(p,i,(function(){return this})),c(p,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var n=Object(e),t=[];for(var o in n)t.push(o);return t.reverse(),function e(){for(;t.length;){var o=t.pop();if(o in n)return e.value=o,e.done=!1,e}return e.done=!0,e}},e.values=k,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(M),!e)for(var n in this)"t"===n.charAt(0)&&t.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(t,o){return a.type="throw",a.arg=e,n.next=t,o&&(n.method="next",n.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=t.call(i,"catchLoc"),c=t.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,n){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&t.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,n){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&n&&(this.next=n),d},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),M(t),d}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var t=this.tryEntries[n];if(t.tryLoc===e){var o=t.completion;if("throw"===o.type){var r=o.arg;M(t)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,t){return this.delegate={iterator:k(e),resultName:n,nextLoc:t},"next"===this.method&&(this.arg=void 0),d}},e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var n=_toPrimitive(e,"string");return"symbol"==typeof n?n:String(n)}function _toPrimitive(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{ZUZ2:function(e,n,t){"use strict";t.r(n),t.d(n,"TalkPageModule",(function(){return O}));var o=t("ofXK"),r=t("TEn/"),i=t("tyNb"),a=t("mrSG"),s=t("KX+i"),c=t("AC/E"),u=t("fXoL"),l=t("3Pt+"),d=t("e8h1"),h=["content"],f=["Lista"];function b(e,n){1&e&&(u.Sb(0,"ion-row"),u.Sb(1,"ion-col",7),u.Sb(2,"div",30),u.Sb(3,"p"),u.Sb(4,"i",41),u.Cc(5,"Comunicaci\xf3n privada"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb())}function m(e,n){if(1&e&&(u.Sb(0,"ion-row"),u.Sb(1,"ion-col",7),u.Sb(2,"div"),u.Sb(3,"p"),u.Sb(4,"i",41),u.Cc(5),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()),2&e){var t=u.ec().$implicit;u.Bb(5),u.Ec('"',t.MensajePadre.Mensaje,'"')}}var v=function(e){return{color:e}};function g(e,n){if(1&e&&u.Nb(0,"ion-icon",42),2&e){var t=u.ec().$implicit,o=u.ec();u.mc("ngStyle",u.oc(1,v,t.LeidoPorMi||t.FKUsuario!=o.idUsuario?"orange":""))}}function p(e,n){1&e&&u.Nb(0,"ion-icon",43)}var S=function(e,n){return{itemBackgroundPrivadoParaMi:e,itemBackgroundPrivadoPorMi:n}},C=function(e){return{"text-align":e}};function R(e,n){if(1&e){var t=u.Tb();u.Sb(0,"ion-list",null,18),u.Sb(2,"ion-item-sliding",null,19),u.Sb(4,"ion-item-options",20),u.Sb(5,"ion-item-option",21),u.dc(),u.Sb(6,"svg",22),u.ac("click",(function(){u.tc(t);var e=n.$implicit,o=u.rc(3);return u.ec().responderMensaje(e,o)})),u.Nb(7,"path",23),u.Rb(),u.Rb(),u.Rb(),u.cc(),u.Sb(8,"ion-item-options",24),u.ac("ionSwipe",(function(){u.tc(t);var e=n.$implicit;return u.ec().cambioOptions(e)})),u.Sb(9,"ion-item-option",25),u.Sb(10,"ion-icon",26),u.ac("click",(function(){u.tc(t);var e=n.$implicit,o=u.rc(3);return u.ec().editarMensaje(e,o)})),u.Rb(),u.Sb(11,"ion-icon",27),u.ac("click",(function(){u.tc(t);var e=n.$implicit,o=u.rc(3);return u.ec().eliminarMensaje(e,o)})),u.Rb(),u.Rb(),u.Rb(),u.Sb(12,"ion-item",28),u.Sb(13,"ion-grid",29),u.Sb(14,"ion-row"),u.Sb(15,"ion-col",7),u.Sb(16,"div",30),u.Sb(17,"p"),u.Sb(18,"i",31),u.Cc(19),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(20,"ion-row"),u.Sb(21,"ion-col",7),u.Sb(22,"div",30),u.Sb(23,"p"),u.Sb(24,"i",31),u.Cc(25),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Ac(26,b,6,0,"ion-row",32),u.Ac(27,m,6,1,"ion-row",32),u.Sb(28,"ion-row"),u.Sb(29,"ion-col",7),u.Sb(30,"div"),u.Sb(31,"p"),u.Cc(32),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(33,"div",33),u.Sb(34,"div",34),u.dc(),u.Sb(35,"svg",35),u.ac("click",(function(){u.tc(t);var e=n.$implicit;return u.ec().mostrarInfoMensaje(e)})),u.Nb(36,"path",36),u.Nb(37,"path",37),u.Rb(),u.Rb(),u.cc(),u.Sb(38,"div",38),u.Ac(39,g,1,3,"ion-icon",39),u.Ac(40,p,1,0,"ion-icon",40),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var o=n.$implicit,r=u.ec();u.Bb(12),u.mc("color",r.conversationColor(o))("ngClass",u.pc(10,S,!0===o.EsPrivadoParaMi,!0===o.EsPrivadoPorMi)),u.Bb(1),u.mc("ngStyle",u.oc(13,C,r.textAlignConversation(o))),u.Bb(6),u.Dc(o.UsuarioNombre),u.Bb(6),u.Dc(o.FechaCorta),u.Bb(1),u.mc("ngIf",o.EsPrivadoParaMi||o.EsPrivadoPorMi),u.Bb(1),u.mc("ngIf",o.MensajePadre),u.Bb(5),u.Ec(" ",o.Mensaje," "),u.Bb(7),u.mc("ngIf",!r.allUsersReadMessage(o)),u.Bb(1),u.mc("ngIf",r.allUsersReadMessage(o))}}function y(e,n){if(1&e){var t=u.Tb();u.Sb(0,"ion-item",52),u.Sb(1,"ion-label",14),u.Cc(2),u.Rb(),u.Sb(3,"p"),u.Cc(4),u.Rb(),u.Sb(5,"ion-icon",53),u.ac("click",(function(){return u.tc(t),u.ec(2).cerrarMensajeResponder()})),u.Rb(),u.Rb()}if(2&e){var o=u.ec(2);u.Bb(2),u.Ec("Respondiendo a ",o.mensajeAResponser.UsuarioNombre,""),u.Bb(2),u.Ec(" ",o.mensajeAResponser.Mensaje," ")}}function w(e,n){if(1&e){var t=u.Tb();u.Sb(0,"ion-row"),u.Sb(1,"ion-col",7),u.Sb(2,"ion-item",12),u.Sb(3,"p",54),u.Sb(4,"i"),u.Cc(5),u.Rb(),u.Rb(),u.Sb(6,"ion-icon",53),u.ac("click",(function(){return u.tc(t),u.ec(2).cleanPrivateSelected()})),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var o=u.ec(2);u.Bb(5),u.Ec("Mensaje privado a: ",o.usuarioPrivadoSelected,"")}}function M(e,n){if(1&e){var t=u.Tb();u.Sb(0,"ion-footer",44),u.Sb(1,"form",45),u.Ac(2,y,6,2,"ion-item",46),u.Sb(3,"ion-item",12),u.Sb(4,"ion-grid"),u.Ac(5,w,7,1,"ion-row",32),u.Sb(6,"ion-row"),u.Sb(7,"ion-col",7),u.Sb(8,"textarea",47),u.ac("input",(function(e){return u.tc(t),u.ec().onKeyDownHandler(e)})),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(9,"ion-grid"),u.Sb(10,"ion-row",48),u.Sb(11,"ion-col",49),u.Sb(12,"ion-button",50),u.ac("click",(function(){return u.tc(t),u.ec().openModalUserPrivate()})),u.Cc(13," Privado "),u.Rb(),u.Rb(),u.Sb(14,"ion-col",49),u.Sb(15,"ion-button",51),u.ac("click",(function(){u.tc(t);var e=u.ec();return e.enviarMensaje(e.formEnvioMensaje.value)})),u.Cc(16," Enviar "),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var o=u.ec();u.Bb(1),u.mc("formGroup",o.formEnvioMensaje),u.Bb(1),u.mc("ngIf",o.mensajeAResponser),u.Bb(3),u.mc("ngIf",o.usuarioPrivadoSelected)}}var P,k,x,_=[{path:"",component:(P=function(){function e(n,t,o,r,i,a,s,c){_classCallCheck(this,e),this.alertController=n,this.talkService=t,this.cacheService=o,this.formBuilder=r,this.storage=i,this.popoverController=a,this.toastCtrl=s,this.elemRef=c,this.iconHabilitarUsuario="lock-open-outline",this.mostrarUsuarioSeleccionado=!1,this.usuariosInactivosSeleccionados=[],this.idsUsuariosInactivosSeleccionados=[],this.ids\u00dcsuariosPrivadosSeleccionados=[],this.mostrarOpcionesMenu=!0,this.ocultarFooterPorRolesHistoricos=!0}return _createClass(e,[{key:"ionViewWillEnter",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var n,t=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.talkService.getRolesHistoricos(),e.next=3,this.getInfoUser();case 3:this.idUsuario=e.sent,n.find((function(e){return e===t.idUsuario}))&&(this.ocultarFooterPorRolesHistoricos=!1),setTimeout((function(){document.querySelector(".conversation-color")}),200);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){this.usuarioPrivadoSelected="",this.informacionConversacionSeleccionada=this.talkService.getSelectedConversation(),this.createFormSend(),this.validarEstadoUsuario()}},{key:"ngAfterViewInit",value:function(){document.querySelector(".conversation-color"),this.elemRef.nativeElement.querySelectorAll(".conversation-color"),document.getElementsByClassName("conversation-color")}},{key:"ionViewDidEnter",value:function(){this.getInfoConversation(),document.querySelector(".conversation-color"),this.elemRef.nativeElement.querySelectorAll(".conversation-color"),document.getElementsByClassName("conversation-color")}},{key:"createFormSend",value:function(){this.formEnvioMensaje=this.formBuilder.group({send:[""],mensajePrivado:[""]})}},{key:"getInfoConversation",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var n,t,o=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.informacionConversacionSeleccionada.PKConversacion,e.next=3,this.storage.get("sesion");case 3:t=e.sent,this.talkService.getMensajes(n,t.idRegistro).subscribe((function(e){return Object(a.a)(o,void 0,void 0,_regeneratorRuntime().mark((function n(){var t;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!0!==e.IsOk){n.next=5;break}return n.next=3,this.mostrarMensajes(e.Respuesta);case 3:t=n.sent,this.mensajes=t;case 5:case"end":return n.stop()}}),n,this)})))}));case 5:case"end":return e.stop()}}),e,this)})))}},{key:"mostrarMensajes",value:function(e){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t,o;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getInfoUser();case 2:return t=n.sent,o=[],n.abrupt("return",(e.forEach((function(e){var n=e;(0===n.Privado.length||n.EsPrivadoPorMi||n.Privado.find((function(e){return e.FKUsuario===t})))&&o.push(n)})),o));case 5:case"end":return n.stop()}}),n,this)})))}},{key:"cambioOptions",value:function(e){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t,o;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.storage.get("sesion");case 2:t=n.sent,o=parseInt(t.idRegistro,10),e.FKUsuario!==o&&this.lista.closeSlidingItems();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"validarEstadoUsuario",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var n,t,o;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.get("sesion");case 2:n=e.sent,t=parseInt(n.idRegistro,10),(o=this.informacionConversacionSeleccionada.Usuarios.find((function(e){return e.FKUsuario===t})))&&(this.iconHabilitarUsuario="A"===o.Estado?"lock-open-outline":"lock-closed-outline");case 6:case"end":return e.stop()}}),e,this)})))}},{key:"activarUsuario",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var n,t,o,r=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.get("sesion");case 2:n=e.sent,t=parseInt(n.idRegistro,10),(o=this.informacionConversacionSeleccionada.Usuarios.find((function(e){return e.FKUsuario===t})))&&("A"===o.Estado?(this.iconHabilitarUsuario="lock-open-outline",this.talkService.changeStateUser(o.PKConversacionUsuario,this.informacionConversacionSeleccionada.PKConversacion,"I","",t).subscribe((function(e){!0===e.IsOk&&(r.iconHabilitarUsuario="lock-closed-outline",r.notification("Atenci\xf3n","Se actualiz\xf3 el estado del usuario"))}))):(this.iconHabilitarUsuario="lock-closed-outline",this.talkService.changeStateUser(o.PKConversacionUsuario,this.informacionConversacionSeleccionada.PKConversacion,"A","",t).subscribe((function(e){!0===e.IsOk&&(r.iconHabilitarUsuario="lock-open-outline",r.notification("Atenci\xf3n","Se actualiz\xf3 el estado del usuario"))}))));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"onKeyDownHandler",value:function(e){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t,o,r,i,a;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("@"!==e.data){n.next=17;break}if(!((t=this.getUsuariosInactivos()).length>0)){n.next=16;break}return n.next=6,this.alertController.create({cssClass:"my-custom-class",header:"Usuarios Inactivos",mode:"ios",inputs:t,buttons:[{text:"Cancelar",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Aceptar",handler:function(){console.log("Confirm Aceptar")}}]});case 6:return o=n.sent,n.next=9,o.present();case 9:return n.next=11,o.onWillDismiss();case 11:r=n.sent,void 0!==(i=r.data).values&&(this.usuariosInactivosSeleccionados.push(i.values),this.mostrarUsuarioSeleccionado=!0,this.usuarioSeleccionado=i.values,""===this.formEnvioMensaje.get("send").value?this.formEnvioMensaje.get("send").setValue("@"+this.usuarioSeleccionado):(a=this.formEnvioMensaje.get("send").value,this.formEnvioMensaje.get("send").setValue("@".concat(this.usuarioSeleccionado," ").concat(a)))),n.next=17;break;case 16:this.notification("Atenci\xf3n","La comunicaci\xf3n seleccionada no tiene usuarios inactivos");case 17:case 18:case"end":return n.stop()}}),n,this)})))}},{key:"getUsuariosInactivos",value:function(){var e=[];return this.talkService.getSelectedConversation().Usuarios.forEach((function(n){"I"===n.Estado&&e.push({name:""+n.UsuarioNombre,type:"radio",label:""+n.UsuarioNombre,value:""+n.UsuarioNombre})})),e}},{key:"openModalUserPrivate",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var n,t,o,r,i,a,s,c,u=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],this.informacionConversacionSeleccionada.Usuarios.forEach((function(e){n.push({name:""+e.UsuarioNombre,type:"checkbox",label:""+e.UsuarioNombre,value:""+e.UsuarioNombre,valor:""+e})})),e.next=4,this.alertController.create({cssClass:"my-custom-class",mode:"ios",header:"Seleccione persona para el mensaje privado",inputs:n,buttons:[{text:"Cancelar",cssClass:"secondary",handler:function(){console.log("Confirm Cancel")}},{text:"Aceptar",handler:function(e){}}]});case 4:return t=e.sent,e.next=7,t.present();case 7:return e.next=9,t.onWillDismiss();case 9:if(o=e.sent,!((r=o.data).values.length>=1)){e.next=23;break}i=r.values,this.ids\u00dcsuariosPrivadosSeleccionados=[],a=this.informacionConversacionSeleccionada.Usuarios,s=_regeneratorRuntime().mark((function e(){var n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a[c],i.find((function(e){return e===n.UsuarioNombre}))&&u.ids\u00dcsuariosPrivadosSeleccionados.push(n.FKUsuario);case 2:case"end":return e.stop()}}),e)})),c=0;case 17:if(!(c<a.length)){e.next=22;break}return e.delegateYield(s(),"t0",19);case 19:c++,e.next=17;break;case 22:this.usuarioPrivadoSelected=i.toString();case 23:case"end":return e.stop()}}),e,this)})))}},{key:"cleanPrivateSelected",value:function(){this.usuarioPrivadoSelected=""}},{key:"responderMensaje",value:function(e,n){this.mensajeAResponser=e,n.close()}},{key:"presentToastEmptyConversation",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.toastCtrl.create({message:"Debes diligenciar el cuerpo de la comunicaci\xf3n.",duration:3e3});case 2:e.sent.present();case 3:case"end":return e.stop()}}),e,this)})))}},{key:"enviarMensaje",value:function(e){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t,o,r,i,a=this;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.send&&0!=e.send.length){n.next=2;break}return n.abrupt("return",void this.presentToastEmptyConversation());case 2:return n.next=4,this.getInfoUser();case 4:t=n.sent,o=(o=this.ids\u00dcsuariosPrivadosSeleccionados).length>=1?this.ids\u00dcsuariosPrivadosSeleccionados:[],r=0,this.mensajeAResponser&&(r=this.mensajeAResponser.PKConversacionMensaje,this.mensajeAResponser.Privado.length>=1)&&(i=[],this.mensajeAResponser.Privado.forEach((function(e){i.push(e.FKUsuario)})),o=i),this.usuariosInactivosSeleccionados.length>=1&&this.informacionConversacionSeleccionada.Usuarios.forEach((function(e){a.usuariosInactivosSeleccionados.find((function(n){return n===e.UsuarioNombre}))&&a.idsUsuariosInactivosSeleccionados.push(e.FKUsuario)})),this.talkService.saveMessageConversation({PKConversacionMensaje:-1,PKConversacion:this.informacionConversacionSeleccionada.PKConversacion,PKUsuario:t,Mensaje:e.send,UidMensajeRespuesta:r,LstUsuariosMensajePrivado:o,LstUsuariosActivar:this.idsUsuariosInactivosSeleccionados,IP:"000.000.000.000"}).subscribe((function(e){!0===e.IsOk&&(a.formEnvioMensaje.get("send").reset(),a.mensajeAResponser="",a.ids\u00dcsuariosPrivadosSeleccionados=[],a.idsUsuariosInactivosSeleccionados=[],a.usuarioPrivadoSelected="",a.getInfoConversation())}));case 10:case"end":return n.stop()}}),n,this)})))}},{key:"cerrarMensajeResponder",value:function(){this.mensajeAResponser=void 0}},{key:"mostrarInfoMensaje",value:function(e){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var t,o,r;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.getInfoUser();case 2:return t=this.mostrarUsuariosLeidos(e.FKUsuario,e.Leido),o=this.mostrarUsuariosNoLeidos(e.FKUsuario,e.Leido),n.next=6,this.alertController.create({cssClass:"textoParrafo",mode:"ios",header:"Detalle del mensaje",message:"<p>\n      <strong>Mensaje: </strong> ".concat(e.Mensaje,"\n      <strong>Enviado por: </strong> ").concat(e.UsuarioNombre,"\n      <strong>Fecha: </strong> ").concat(e.FechaCorta,'\n      <strong style="color:blue">Leido por: </strong> ').concat(t,"\n      <strong>Pendiente por leer: </strong> ").concat(o,"\n      </p>"),buttons:["ACEPTAR"]});case 6:return r=n.sent,n.next=9,r.present();case 9:case"end":return n.stop()}}),n,this)})))}},{key:"mostrarUsuariosLeidos",value:function(e,n){var t=[];return n.forEach((function(n){n.FKUsuario!=e&&t.push(n.UsuarioNombre)})),""==t.toString()?"Ninguno.":t.toString()}},{key:"allUsersReadMessage",value:function(e){return this.informacionConversacionSeleccionada.Usuarios.length==e.Leido.length}},{key:"conversationColor",value:function(e){return this.idUsuario==e.FKUsuario?e.EsPrivadoPorMi?"chatgreen":"chatblue":e.EsPrivadoParaMi?"chatgreen":"chatwhite"}},{key:"textAlignConversation",value:function(e){return this.idUsuario==e.FKUsuario?"left":"right"}},{key:"mostrarUsuariosNoLeidos",value:function(e,n){for(var t=[],o=this.informacionConversacionSeleccionada.Usuarios,r=function(){var e=o[i];n.find((function(n){return n.FKUsuario===e.FKUsuario}))||t.push(e.UsuarioNombre)},i=0;i<o.length;i++)r();return t.filter((function(n){return n.FKUsuario!=e})),""==t.toString()?"Ninguno.":t.toString()}},{key:"eliminarMensaje",value:function(e,n){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var o,r,i,a=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getInfoUser();case 2:if(o=t.sent,n.close(),0!==e.Leido.length){t.next=11;break}return t.next=6,this.alertController.create({mode:"ios",header:"Eliminar Mensaje",message:"Esta seguro que desea eliminar el mensaje de esta conversaci\xf3n",buttons:[{text:"CANCELAR"},{text:"ACEPTAR",handler:function(){a.talkService.deleteMessage({PKConversacionMensaje:e.PKConversacionMensaje,PKUsuario:o,Mensaje:e.Mensaje,Eliminar:!0}).subscribe((function(e){!0===e.IsOk&&(a.notification("Atenci\xf3n","Mensaje eliminado con exito"),a.getInfoConversation())}))}}]});case 6:return r=t.sent,t.next=9,r.present();case 9:t.next=16;break;case 11:return t.next=13,this.alertController.create({mode:"ios",header:"Eliminar Mensaje",message:"No se puede eliminar este mensaje, ya fue visto por algun integrante de la conversaci\xf3n.",buttons:["ACEPTAR"]});case 13:return i=t.sent,t.next=16,i.present();case 16:case"end":return t.stop()}}),t,this)})))}},{key:"editarMensaje",value:function(e,n){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var o,r,i,a=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getInfoUser();case 2:if(o=t.sent,n.close(),0!==e.Leido.length){t.next=11;break}return t.next=6,this.alertController.create({mode:"ios",header:"Editar Mensaje",message:""+e.Mensaje,inputs:[{name:"editarMensaje",id:"editarMensaje",type:"textarea",placeholder:"Editar Mensaje"}],buttons:[{text:"Cancelar",handler:function(){console.log("editar Cancel")}},{text:"Aceptar",handler:function(n){a.talkService.deleteMessage({PKConversacionMensaje:e.PKConversacionMensaje,PKUsuario:o,Mensaje:n.editarMensaje,Eliminar:!1}).subscribe((function(e){!0===e.IsOk&&(a.notification("Atenci\xf3n","Mensaje editado con exito"),a.getInfoConversation())}))}}]});case 6:return r=t.sent,t.next=9,r.present();case 9:t.next=16;break;case 11:return t.next=13,this.alertController.create({mode:"ios",header:"Editar Mensaje",message:"No se puede editar este mensaje, ya fue visto por alg\xfan integrante de la conversaci\xf3n.",buttons:["ACEPTAR"]});case 13:return i=t.sent,t.next=16,i.present();case 16:case"end":return t.stop()}}),t,this)})))}},{key:"notification",value:function(e,n){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var o;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:e,backdropDismiss:!1,mode:"ios",message:n,buttons:["ACEPTAR"]});case 2:return o=t.sent,t.next=5,o.present();case 5:o.onDidDismiss();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"getInfoUser",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var n;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.storage.get("sesion");case 2:return n=e.sent,e.abrupt("return",parseInt(n.idRegistro,10));case 4:case"end":return e.stop()}}),e,this)})))}}]),e}(),P.\u0275fac=function(e){return new(e||P)(u.Mb(r.a),u.Mb(s.a),u.Mb(c.a),u.Mb(l.b),u.Mb(d.b),u.Mb(r.fb),u.Mb(r.kb),u.Mb(u.l))},P.\u0275cmp=u.Gb({type:P,selectors:[["app-talk"]],viewQuery:function(e,n){var t;1&e&&(u.Hc(h,!0),u.Hc(f,!0),u.Hc(r.A,!0)),2&e&&(u.qc(t=u.bc())&&(n.content=t.first),u.qc(t=u.bc())&&(n.lista=t.first),u.qc(t=u.bc())&&(n.ionItems=t))},decls:56,vars:7,consts:[["size","2"],["color","tertiary"],["slot","start"],["color","primary","mode","md","defaultHref","u/list-communications"],["size","10"],[1,"titulo"],["content",""],["size","12"],["lines","none","color","secondary"],["src","../../../../assets/icon/icono_comunicaciones.svg","alt","iconItem",1,"imgMenu"],[1,"ion-text-center"],["mode","ios","colines","none","lor","tertiary"],["lines","none"],["lines","none",2,"padding-top","35px"],["position","stacked"],["start","end",3,"name","click"],[4,"ngFor","ngForOf"],["class","ion-no-border",4,"ngIf"],["Lista",""],["slidingItem",""],["side","start"],["mode","ios"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-reply-fill",2,"width","2rem","height","2rem","color","white",3,"click"],["d","M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"],[3,"ionSwipe"],["mode","ios","side","end"],["slot","icon-only","name","create-outline",3,"click"],["slot","icon-only","name","trash-outline",3,"click"],[3,"color","ngClass"],[3,"ngStyle"],[1,"parrafoMensaje"],[2,"font-size","0.8rem"],[4,"ngIf"],[2,"width","fit-content","height","fit-content","margin-left","1rem"],[2,"width","inherit","height","inherit","margin-bottom","1rem"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chat-text",2,"width","2rem","height","2rem","color","orange",3,"click"],["d","M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"],["d","M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"],[2,"width","inherit","height","inherit"],["style","width: 2rem; height: 2rem;","slot","end","name","checkmark",3,"ngStyle",4,"ngIf"],["style","width: 2rem; height: 2rem; color: orange;","name","checkmark-done-outline","slot","end",4,"ngIf"],[2,"font-size","12px","color","#516F7A"],["slot","end","name","checkmark",2,"width","2rem","height","2rem",3,"ngStyle"],["name","checkmark-done-outline","slot","end",2,"width","2rem","height","2rem","color","orange"],[1,"ion-no-border"],[3,"formGroup"],["color","tertiary","class","itemResponder",4,"ngIf"],["formControlName","send","rows","5",1,"bg-light","mt-3","pl-1","textMensaje",2,"height","100p","border-radius","10px",3,"input"],["justify-content-around",""],["size","6"],["expand","block","color","tertiary",3,"click"],["expand","block","color","primary",3,"click"],["color","tertiary",1,"itemResponder"],["name","close-circle-outline","size","small","slot","end",3,"click"],[2,"font-size","13px","margin","0px"]],template:function(e,n){1&e&&(u.Sb(0,"ion-header"),u.Sb(1,"ion-grid"),u.Sb(2,"ion-row"),u.Sb(3,"ion-col",0),u.Sb(4,"ion-toolbar",1),u.Sb(5,"ion-buttons",2),u.Nb(6,"ion-back-button",3),u.Rb(),u.Rb(),u.Rb(),u.Sb(7,"ion-col",4),u.Sb(8,"ion-title",5),u.Cc(9,"Conversaci\xf3n"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(10,"ion-content",null,6),u.Sb(12,"ion-grid"),u.Sb(13,"ion-row"),u.Sb(14,"ion-col",7),u.Sb(15,"ion-list"),u.Sb(16,"ion-item",8),u.Sb(17,"ion-avatar",2),u.Nb(18,"img",9),u.Rb(),u.Sb(19,"div",10),u.Sb(20,"ion-label"),u.Cc(21,"Comunicaci\xf3n"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(22,"ion-card",11),u.Sb(23,"ion-item",12),u.Sb(24,"ion-list"),u.Sb(25,"ion-item",13),u.Sb(26,"strong"),u.Sb(27,"ion-label",14),u.Cc(28,"Raz\xf3n Social"),u.Rb(),u.Rb(),u.Sb(29,"p"),u.Cc(30),u.Rb(),u.Rb(),u.Sb(31,"ion-item",12),u.Sb(32,"strong"),u.Sb(33,"ion-label",14),u.Cc(34,"Tipo - N\xfamero documento"),u.Rb(),u.Rb(),u.Sb(35,"p"),u.Cc(36),u.Rb(),u.Rb(),u.Sb(37,"ion-item",12),u.Sb(38,"strong"),u.Sb(39,"ion-label",14),u.Cc(40,"Tema de conversaci\xf3n"),u.Rb(),u.Rb(),u.Sb(41,"p"),u.Cc(42),u.Rb(),u.Rb(),u.Rb(),u.Sb(43,"ion-icon",15),u.ac("click",(function(){return n.activarUsuario()})),u.Rb(),u.Rb(),u.Rb(),u.Sb(44,"ion-grid"),u.Sb(45,"ion-row"),u.Sb(46,"ion-col",7),u.Sb(47,"ion-list"),u.Sb(48,"ion-item",8),u.Sb(49,"ion-avatar",2),u.Nb(50,"img",9),u.Rb(),u.Sb(51,"div",10),u.Sb(52,"ion-label"),u.Cc(53,"Mensaje"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Ac(54,R,41,15,"ion-list",16),u.Rb(),u.Ac(55,M,17,3,"ion-footer",17)),2&e&&(u.Bb(30),u.Dc(n.informacionConversacionSeleccionada.Empresa),u.Bb(6),u.Fc("",n.informacionConversacionSeleccionada.EmpresaTipoDocumento," - ",n.informacionConversacionSeleccionada.EmpresaDocumento,""),u.Bb(6),u.Dc(n.informacionConversacionSeleccionada.Tema),u.Bb(1),u.mc("name",n.iconHabilitarUsuario),u.Bb(11),u.mc("ngForOf",n.mensajes),u.Bb(1),u.mc("ngIf",n.ocultarFooterPorRolesHistoricos))},directives:[r.w,r.v,r.L,r.p,r.Y,r.i,r.e,r.f,r.W,r.q,r.G,r.A,r.d,r.F,r.j,r.x,o.k,o.l,r.E,r.D,r.C,o.j,o.m,r.u,l.r,l.m,l.f,l.a,l.l,l.d,r.h],styles:["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;background:#95a6b1}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:none;height:80px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:40px;border-radius:15px;font-size:16.4px;font-weight:700;--min-height:70px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:10px;padding-bottom:16px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:85%}ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}ion-footer[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:50px}ion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .textMensaje[_ngcontent-%COMP%]{width:100%;height:65px;border-radius:50px;outline:none;margin-bottom:10px}.itemResponder[_ngcontent-%COMP%]{--border-radius:15px;padding:10px}.imgMenu[_ngcontent-%COMP%]{height:145%!important;transform:translateY(-8px)}.imgMenu[_ngcontent-%COMP%], .titulo[_ngcontent-%COMP%]{width:100%!important}.titulo[_ngcontent-%COMP%]{font-size:20px!important;text-align:left;padding:10px 0 0;margin-top:10px}.itemBackgroundPrivadoParaMi[_ngcontent-%COMP%], .itemBackgroundPrivadoPorMi[_ngcontent-%COMP%]{--background:#ffd96a;height:auto!important;word-wrap:break-word!important}.parrafoMensaje[_ngcontent-%COMP%]{width:100%;height:auto!important;word-wrap:break-word!important}ion-list[_ngcontent-%COMP%]   ion-item.conversation[_ngcontent-%COMP%]{--ion-background-color:#000!important}"]}),P)}],j=((x=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u.Kb({type:x}),x.\u0275inj=u.Jb({factory:function(e){return new(e||x)},imports:[[i.j.forChild(_)],i.j]}),x),O=((k=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u.Kb({type:k}),k.\u0275inj=u.Jb({factory:function(e){return new(e||k)},imports:[[o.c,l.g,l.p,r.Z,j]]}),k)}}]);