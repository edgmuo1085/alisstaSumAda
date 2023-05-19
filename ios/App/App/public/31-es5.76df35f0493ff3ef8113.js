function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(M){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,c=Object.create(i.prototype),a=new S(r||[]);return o(c,"_invoke",{value:R(t,n,a)}),c}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(M){return{type:"throw",arg:M}}}t.wrap=l;var b={};function d(){}function f(){}function p(){}var h={};s(h,i,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(P([])));v&&v!==e&&n.call(v,i)&&(h=v);var m=p.prototype=d.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){var r;o(this,"_invoke",{value:function(o,i){function c(){return new e((function(r,c){!function o(r,i,c,a){var s=u(t[r],t,i);if("throw"!==s.type){var l=s.arg,b=l.value;return b&&"object"==typeof b&&n.call(b,"__await")?e.resolve(b.__await).then((function(t){o("next",t,c,a)}),(function(t){o("throw",t,c,a)})):e.resolve(b).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,a)}))}a(s.arg)}(o,i,r,c)}))}return r=r?r.then(c,c):c()}})}function R(t,e,n){var o="suspendedStart";return function(r,i){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw i;return x()}for(n.method=r,n.arg=i;;){var c=n.delegate;if(c){var a=_(c,n);if(a){if(a===b)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var s=u(t,e,n);if("normal"===s.type){if(o=n.done?"completed":"suspendedYield",s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o="completed",n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=e.method,o=t.iterator[n];if(void 0===o)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var r=u(o,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,b;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,b):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,r=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=p,o(m,"constructor",{value:p,configurable:!0}),o(p,"constructor",{value:f,configurable:!0}),f.displayName=s(p,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(C.prototype),s(C.prototype,c,(function(){return this})),t.AsyncIterator=C,t.async=function(e,n,o,r,i){void 0===i&&(i=Promise);var c=new C(l(e,n,o,r),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},y(m),s(m,a,"Generator"),s(m,i,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;O(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),b}},t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,_toPropertyKey(o.key),o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"7eI/":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("fXoL"),r=n("tk/3"),i=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getMenuOpts",value:function(){return this.http.get("/assets/data/menuConfiguracion.json")}},{key:"getMenuMain",value:function(){return this.http.get("/assets/data/menuPrincipal-prod.json")}},{key:"getMenuExceActivities",value:function(){return this.http.get("/assets/data/menuExecuteActi.json")}},{key:"getMenuHelpExceActivities",value:function(){return this.http.get("/assets/data/menuHelpExecuteActi.json")}},{key:"getMenuActivitySelected",value:function(){return this.http.get("/assets/data/menuVisitActivity.json")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Wb(r.a))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},i4h5:function(t,e,n){"use strict";n.r(e),n.d(e,"ExecLogPageModule",(function(){return k}));var o,r=n("ofXK"),i=n("3Pt+"),c=n("TEn/"),a=n("tyNb"),s=n("mrSG"),l=n("7eI/"),u=n("Byb6"),b=n("fXoL"),d=n("e8h1"),f=((o=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e,n){return t?e?t.filter((function(t){for(var o=!1,r=0;r<n.length;r++)if(-1!==t[n[r]].toLowerCase().indexOf(e.toLowerCase())){o=!0;break}return o})):t:[]}}]),t}()).\u0275fac=function(t){return new(t||o)},o.\u0275pipe=b.Lb({name:"searchResendCode",type:o,pure:!0}),o);function p(t,e){1&t&&(b.Sb(0,"ion-slides",12),b.Sb(1,"ion-slide"),b.Sb(2,"ion-grid"),b.Sb(3,"ion-row"),b.Sb(4,"ion-col",2),b.Sb(5,"div",13),b.Nb(6,"img",14),b.Rb(),b.Rb(),b.Rb(),b.Sb(7,"ion-row"),b.Sb(8,"ion-col",2),b.Sb(9,"strong"),b.Sb(10,"p",15),b.Cc(11," No tienes actividades migradas, por ende, no existe una lista de responsables para reenv\xedar el c\xf3digo de verificaci\xf3n "),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb())}function h(t,e){if(1&t){var n=b.Tb();b.Sb(0,"ion-row"),b.Sb(1,"ion-col",17),b.Sb(2,"ion-checkbox",20),b.ac("click",(function(){b.tc(n);var t=e.$implicit;return b.ec(2).selectResponsible(t)})),b.Rb(),b.Rb(),b.Sb(3,"ion-col",18),b.Sb(4,"ion-label"),b.Cc(5),b.Rb(),b.Rb(),b.Sb(6,"ion-col",18),b.Sb(7,"ion-label"),b.Cc(8),b.Rb(),b.Rb(),b.Rb()}if(2&t){var o=e.$implicit;b.Bb(5),b.Dc(o.listaResponsables.Nombre),b.Bb(3),b.Dc(o.listaResponsables.correo)}}var g=function(){return["nombre","correoElecctronico"]};function v(t,e){if(1&t&&(b.Sb(0,"div"),b.Sb(1,"ion-grid",16),b.Sb(2,"ion-row"),b.Nb(3,"ion-col",17),b.Sb(4,"ion-col",18),b.Sb(5,"ion-label"),b.Sb(6,"strong"),b.Cc(7,"Nombre"),b.Rb(),b.Rb(),b.Rb(),b.Sb(8,"ion-col",18),b.Sb(9,"ion-label"),b.Sb(10,"strong"),b.Cc(11,"Correo"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(12,"ion-grid",16),b.Ac(13,h,9,2,"ion-row",19),b.fc(14,"searchResendCode"),b.Rb(),b.Rb()),2&t){var n=b.ec();b.Bb(13),b.mc("ngForOf",b.ic(14,1,n.listaResponsables,n.textoBuscar,b.nc(5,g)))}}var m,y=((m=function(){function t(e,n,o,r,i,c){_classCallCheck(this,t),this.modalCtrl=e,this.listActivitiesCompany=n,this.storage=o,this.activityListCompany=r,this.loadingCtlr=i,this.alertController=c,this.listaResponsables=[],this.responsablesSeleccionados=[],this.textoBuscar=""}return _createClass(t,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){this.listActivities()}},{key:"listActivities",value:function(){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var e,n,o,r,i,c;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.get("sesion");case 2:return e=t.sent,this.presentLoading("Cargando responsables ..."),t.next=6,this.listActivitiesCompany.listActivityForCompany(e.idPersona).toPromise();case 6:for(n=t.sent,this.listaResponsables=n.listActivitiesCompany,o=[],r=0;r<this.listaResponsables.length;r++)for(i=this.listaResponsables[r].id,c=0;c<this.listaResponsables[r].listaReposables.length;c++)o.push({idEmpresa:i,listaResponsables:this.listaResponsables[r].listaReposables[c]});this.listaResponsables=o,this.loading.dismiss();case 11:case"end":return t.stop()}}),t,this)})))}},{key:"search",value:function(t){this.textoBuscar=t.detail.value}},{key:"selectResponsible",value:function(t){var e=this,n=t.listaResponsables.id,o=this.responsablesSeleccionados.find((function(t){return t.listaResponsables.id===n}));o?this.responsablesSeleccionados.forEach((function(t){t===o&&e.responsablesSeleccionados.splice(o,1)})):this.responsablesSeleccionados.push(t)}},{key:"resendCode",value:function(){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var e;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(1!==this.responsablesSeleccionados.length){t.next=12;break}return e=this.responsablesSeleccionados[0],this.presentLoading("Reenviando c\xf3digo ..."),t.next=5,this.activityListCompany.recordarCodigoVerificacion(e.listaResponsables.id,e.idEmpresa).toPromise();case 5:if(!t.sent){t.next=9;break}this.notification("Atenci\xf3n","Se reenv\xedo el c\xf3digo de verificaci\xf3n al usuario:".concat(e.listaResponsables.correo," ")),t.next=10;break;case 9:this.notification("Error","No se pudo env\xedar el correo al siguiente usuario: "+e.listaResponsables.correo);case 10:t.next=13;break;case 12:this.notification("Error","Se debe seleccionar solo un usuario");case 13:this.loading.dismiss();case 14:case"end":return t.stop()}}),t,this)})))}},{key:"regresar",value:function(){this.modalCtrl.dismiss()}},{key:"presentLoading",value:function(t){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadingCtlr.create({mode:"ios",message:t});case 2:return this.loading=e.sent,e.abrupt("return",this.loading.present());case 4:case"end":return e.stop()}}),e,this)})))}},{key:"notification",value:function(t,e){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var o;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:t,backdropDismiss:!1,mode:"ios",message:e,buttons:["ACEPTAR"]});case 2:return o=n.sent,n.next=5,o.present();case 5:o.onDidDismiss();case 6:case"end":return n.stop()}}),n,this)})))}}]),t}()).\u0275fac=function(t){return new(t||m)(b.Mb(c.cb),b.Mb(u.a),b.Mb(d.b),b.Mb(u.a),b.Mb(c.bb),b.Mb(c.a))},m.\u0275cmp=b.Gb({type:m,selectors:[["app-resend-verification-code"]],decls:20,vars:2,consts:[[1,"ion-no-border"],["color","tertiary"],["size","12"],[1,"titulo"],[1,"ion-padding","backgroundContent"],["mode","ios",4,"ngIf"],[4,"ngIf"],["no-border",""],["slot","start"],["color","secondary","expand","block",3,"click"],["slot","end"],["color","primary","expand","block",3,"click"],["mode","ios"],[1,"ion-text-center"],["src","../../../assets/icon/icono_observaciones.svg","alt",""],[1,"tituloSlide"],["fixed",""],["size","2"],["size","5"],[4,"ngFor","ngForOf"],["mode","ios",3,"click"]],template:function(t,e){1&t&&(b.Sb(0,"ion-header",0),b.Sb(1,"ion-toolbar",1),b.Sb(2,"ion-grid"),b.Sb(3,"ion-row"),b.Sb(4,"ion-col",2),b.Sb(5,"ion-title",3),b.Cc(6,"Reenv\xedar c\xf3digo de verificaci\xf3n"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(7,"ion-content",4),b.Ac(8,p,12,0,"ion-slides",5),b.Ac(9,v,15,6,"div",6),b.Rb(),b.Sb(10,"ion-footer",7),b.Sb(11,"ion-toolbar"),b.Sb(12,"ion-buttons",8),b.Sb(13,"ion-button",9),b.ac("click",(function(){return e.regresar()})),b.Sb(14,"ion-label"),b.Cc(15,"Regresar"),b.Rb(),b.Rb(),b.Rb(),b.Sb(16,"ion-buttons",10),b.Sb(17,"ion-button",11),b.ac("click",(function(){return e.resendCode()})),b.Sb(18,"ion-label"),b.Cc(19,"Reenv\xedar c\xf3digo"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(8),b.mc("ngIf",0===e.listaResponsables.length||void 0),b.Bb(1),b.mc("ngIf",e.listaResponsables.length>0))},directives:[c.w,c.Y,c.v,c.L,c.p,c.W,c.q,r.l,c.u,c.i,c.h,c.F,c.Q,c.P,r.k,c.o,c.b],pipes:[f],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding-top:0}ion-header[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{width:100%!important;font-size:14.5px!important;text-align:center}ion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--border-radius:30px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:80%;border:1px solid #344b56;border-radius:50px;margin-top:40px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloSlide[_ngcontent-%COMP%]{margin-top:-30px;font-weight:700;color:#344b56}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:0;background:none}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:10px;border-radius:15px}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:50px}"]}),m),C=n("2MiI");function R(t,e){if(1&t){var n=b.Tb();b.Sb(0,"ion-col",3),b.Sb(1,"ion-card",4),b.ac("click",(function(){b.tc(n);var t=e.$implicit;return b.ec().optionSelectedMenu(t)})),b.Sb(2,"div",5),b.Sb(3,"div",6),b.Nb(4,"img",7),b.Rb(),b.Rb(),b.Sb(5,"ion-label"),b.Sb(6,"h4",8),b.Cc(7),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&t){var o=e.$implicit;b.Bb(1),b.mc("routerLink",o.redirecTo),b.Bb(3),b.mc("src",o.icon,b.vc),b.Bb(3),b.Dc(o.title)}}function _(t,e){if(1&t){var n=b.Tb();b.Sb(0,"ion-col",9),b.ac("click",(function(){b.tc(n);var t=e.$implicit;return b.ec().optionSelectedMenu(t)})),b.Sb(1,"div",5),b.Sb(2,"div",6),b.Nb(3,"img",7),b.Rb(),b.Rb(),b.Sb(4,"ion-label"),b.Sb(5,"h4",8),b.Cc(6),b.Rb(),b.Rb(),b.Rb()}if(2&t){var o=e.$implicit;b.Bb(3),b.mc("src",o.icon,b.vc),b.Bb(3),b.Dc(o.title)}}var w,O,S,P=[{path:"",component:(w=function(){function t(e,n,o){_classCallCheck(this,t),this.menuConfOptions=e,this.modalCtrl=n,this.storage=o}return _createClass(t,[{key:"ngOnInit",value:function(){this.optMenuOptions=this.menuConfOptions.getMenuExceActivities(),this.optMenuHelpOptions=this.menuConfOptions.getMenuHelpExceActivities(),this.uploadInfoUser()}},{key:"optionSelectedMenu",value:function(t){switch(t.title){case"Visitas pendientes":case"Tareas por enviar":case"Liberar actividades":break;case"Recordar c\xf3digo":this.showResendVerificationCode()}}},{key:"uploadInfoUser",value:function(){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var e;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.get("sesion");case 2:e=t.sent,this.nameUserRegister=e.nombre1+" "+e.apellido1;case 4:case"end":return t.stop()}}),t,this)})))}},{key:"showResendVerificationCode",value:function(){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var e;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalCtrl.create({component:y});case 2:return e=t.sent,t.next=5,e.present();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})))}}]),t}(),w.\u0275fac=function(t){return new(t||w)(b.Mb(l.a),b.Mb(c.cb),b.Mb(d.b))},w.\u0275cmp=b.Gb({type:w,selectors:[["app-exec-log"]],decls:10,vars:6,consts:[[1,"backgroundContent"],["size","4",4,"ngFor","ngForOf"],["size","4",3,"click",4,"ngFor","ngForOf"],["size","4"],["mode","ios",3,"routerLink","click"],[1,"vertical-center"],[1,"center"],["alt","",3,"src"],[1,"tituloOpcion"],["size","4",3,"click"]],template:function(t,e){1&t&&(b.Nb(0,"app-header"),b.Sb(1,"ion-content",0),b.Sb(2,"ion-grid"),b.Sb(3,"ion-row"),b.Ac(4,R,8,3,"ion-col",1),b.fc(5,"async"),b.Rb(),b.Rb(),b.Sb(6,"ion-grid"),b.Sb(7,"ion-row"),b.Ac(8,_,7,2,"ion-col",2),b.fc(9,"async"),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(4),b.mc("ngForOf",b.gc(5,2,e.optMenuOptions)),b.Bb(4),b.mc("ngForOf",b.gc(9,4,e.optMenuHelpOptions)))},directives:[C.a,c.q,c.v,c.L,r.k,c.p,c.j,c.hb,a.h,c.F],pipes:[r.b],styles:["ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{margin-top:30px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:8px!important}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:10px;border:1px solid #95a6b1;margin:0;outline:none!important}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .vertical-center[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%]{display:block;width:70%;margin:15px auto auto}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%]{text-align:center;margin-bottom:10px}"]}),w)},{path:"pending-visits",loadChildren:function(){return Promise.all([n.e(0),n.e(41)]).then(n.bind(null,"kmss")).then((function(t){return t.PendingVisitsPageModule}))}},{path:"tasks-to-send",loadChildren:function(){return n.e(33).then(n.bind(null,"cjBl")).then((function(t){return t.TasksToSendPageModule}))}},{path:"releaseActivities",loadChildren:function(){return Promise.all([n.e(0),n.e(43)]).then(n.bind(null,"gnmv")).then((function(t){return t.ReleaseActivitiesPageModule}))}}],x=((O=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=b.Kb({type:O}),O.\u0275inj=b.Jb({factory:function(t){return new(t||O)},imports:[[a.j.forChild(P)],a.j]}),O),M=n("j1ZV"),k=((S=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=b.Kb({type:S}),S.\u0275inj=b.Jb({factory:function(t){return new(t||S)},imports:[[r.c,i.g,c.Z,M.a,x]]}),S)}}]);