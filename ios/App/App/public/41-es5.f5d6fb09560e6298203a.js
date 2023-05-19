function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(x){s=function(t,e,n){return t[e]=n}}function u(t,e,n,o){var r=e&&e.prototype instanceof h?e:h,a=Object.create(r.prototype),c=new R(o||[]);return i(a,"_invoke",{value:C(t,n,c)}),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(x){return{type:"throw",arg:x}}}t.wrap=u;var d={};function h(){}function f(){}function b(){}var p={};s(p,r,(function(){return this}));var g=Object.getPrototypeOf,v=g&&g(g(O([])));v&&v!==e&&n.call(v,r)&&(p=v);var m=b.prototype=h.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;i(this,"_invoke",{value:function(i,r){function a(){return new e((function(o,a){!function i(o,r,a,c){var s=l(t[o],t,r);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){i("next",t,a,c)}),(function(t){i("throw",t,a,c)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return i("throw",t,a,c)}))}c(s.arg)}(i,r,o,a)}))}return o=o?o.then(a,a):a()}})}function C(t,e,n){var i="suspendedStart";return function(o,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw r;return M()}for(n.method=o,n.arg=r;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===i)throw i="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);i="executing";var s=l(t,e,n);if("normal"===s.type){if(i=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(i="completed",n.method="throw",n.arg=s.arg)}}}function _(t,e){var n=e.method,i=t.iterator[n];if(void 0===i)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=l(i,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var r=o.arg;return r?r.done?(e[t.resultName]=r.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):r:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var e=t[r];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function e(){for(;++i<t.length;)if(n.call(t,i))return e.value=t[i],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return f.prototype=b,i(m,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:f,configurable:!0}),f.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,i,o,r){void 0===r&&(r=Promise);var a=new w(u(e,n,i,o),r);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(m),s(m,c,"Generator"),s(m,r,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var i in e)n.push(i);return n.reverse(),function t(){for(;n.length;){var i=n.pop();if(i in e)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=O,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function i(n,i){return a.type="throw",a.arg=t,e.next=n,i&&(e.method="next",e.arg=void 0),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],a=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var c=n.call(r,"catchLoc"),s=n.call(r,"finallyLoc");if(c&&s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(c){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var o=i.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var e=_toPrimitive(t,"string");return"symbol"==typeof e?e:String(e)}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{kmss:function(t,e,n){"use strict";n.r(e),n.d(e,"PendingVisitsPageModule",(function(){return R}));var i=n("ofXK"),o=n("3Pt+"),r=n("TEn/"),a=n("tyNb"),c=n("mrSG"),s=n("kwrG"),u=n("Byb6"),l=n("7AKq"),d=n("fXoL"),h=n("e8h1"),f=n("+J/9"),b=n("uOC6");function p(t,e){1&t&&(d.Sb(0,"ion-slides",22),d.Sb(1,"ion-slide"),d.Sb(2,"ion-grid"),d.Sb(3,"ion-row"),d.Sb(4,"ion-col",6),d.Sb(5,"div",23),d.Nb(6,"img",24),d.Rb(),d.Rb(),d.Rb(),d.Sb(7,"ion-row"),d.Sb(8,"ion-col",6),d.Sb(9,"strong"),d.Sb(10,"h3",25),d.Cc(11," Recuerde sincronizar las actividades que va a ejecutar aqu\xed. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(12,"ion-row"),d.Sb(13,"ion-col",6),d.Nb(14,"ion-icon",26),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb())}function g(t,e){if(1&t){var n=d.Tb();d.Sb(0,"ion-item",28),d.ac("click",(function(){d.tc(n);var t=e.$implicit;return d.ec(2).companySelected(t)})),d.Sb(1,"div",29),d.Sb(2,"ion-label",30),d.Cc(3),d.Rb(),d.Sb(4,"ion-grid"),d.Sb(5,"ion-row"),d.Sb(6,"ion-col",6),d.Sb(7,"ion-label"),d.Cc(8),d.Rb(),d.Rb(),d.Rb(),d.Sb(9,"ion-row"),d.Sb(10,"ion-col",6),d.Sb(11,"ion-label"),d.Cc(12),d.Rb(),d.Rb(),d.Rb(),d.Sb(13,"ion-row"),d.Sb(14,"ion-col",6),d.Sb(15,"ion-label"),d.Cc(16,"M\xf3dulo: "),d.Sb(17,"span",31),d.Cc(18),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()}if(2&t){var i=e.$implicit;d.Bb(3),d.Ec("En proceso 0 de ",i.listaActividadesMigradas.length,""),d.Bb(5),d.Dc(i.name),d.Bb(4),d.Fc("",i.tipoDocumentoDescripcion," ",i.numeroDocumento,""),d.Bb(6),d.Dc(i.ModuloNombre)}}var v=function(){return["numeroDocumento","name"]};function m(t,e){if(1&t&&(d.Sb(0,"ion-list"),d.Ac(1,g,19,5,"ion-item",27),d.fc(2,"searchCompanyList"),d.Rb()),2&t){var n=d.ec();d.Bb(1),d.mc("cdkVirtualForOf",d.jc(2,1,n.listActivity,n.textoBuscar,d.nc(6,v),n.moduloBuscar))}}var y,w,C,_=[{path:"",component:(y=function(){function t(e,n,i,o,r,a){_classCallCheck(this,t),this.listActivitiesCompany=e,this.network=n,this.storage=i,this.net=o,this.loadingCtlr=r,this.router=a,this.listActivity=[],this.textoBuscar="",this.moduloBuscar="",this.showListPendingVisit=!0,this.isConnected=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.validateDataListActivities(),this.net.showIPAddress()}},{key:"search",value:function(t){this.textoBuscar=t.detail.value}},{key:"searchModulo",value:function(t){this.moduloBuscar=t.detail.value}},{key:"companySelected",value:function(t){for(var e=0;e<t.listaActividadesMigradas.length;e++)t.listaActividadesMigradas[e].estadoInterno="Migradas";sessionStorage.companySelected=JSON.stringify(t)}},{key:"listActivities",value:function(){return Object(c.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var e,n=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.presentLoading(),t.next=3,this.storage.get("sesion");case 3:e=t.sent,setTimeout((function(){n.listActivitiesCompany.listActivityForCompany(e.idPersona).subscribe((function(t){return Object(c.a)(n,void 0,void 0,_regeneratorRuntime().mark((function e(){var n,i;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Respuesta de actividade",t),n=t.listActivitiesCompany||[],e.next=4,this.storage.get("actasAsesoriaSinInternet");case 4:if(e.t0=e.sent,e.t0){e.next=7;break}e.t0=[];case 7:i=e.t0,n.forEach((function(t){t.listaActividadesMigradas=t.listaActividadesMigradas.filter((function(t){return void 0===i.find((function(e){return e.activities.find((function(e){return e.id===t.id}))}))}))})),this.storage.set("departamentos",t.listDepartamentos),this.storage.set("municipios",t.listMunicipios),this.storage.set("listArchivosSoporte",t.listArchivosSoporte),this.storage.set("listaActividades",n),this.validateDataListActivities(),this.showListPendingVisit=!1,this.loading.dismiss();case 9:case"end":return e.stop()}}),e,this)})))}),(function(t){n.loading.dismiss(),n.showListPendingVisit=!1}))}),2e3);case 5:case"end":return t.stop()}}),t,this)})))}},{key:"presentLoading",value:function(){return Object(c.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingCtlr.create({mode:"ios",message:"Cargando"});case 2:return this.loading=t.sent,t.abrupt("return",this.loading.present());case 4:case"end":return t.stop()}}),t,this)})))}},{key:"validateDataListActivities",value:function(){return Object(c.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var e;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.get("listaActividades");case 2:e=t.sent,this.listActivity=e?e.filter((function(t){return t.listaActividadesMigradas.length>0})):[];case 4:case"end":return t.stop()}}),t,this)})))}}]),t}(),y.\u0275fac=function(t){return new(t||y)(d.Mb(u.a),d.Mb(s.a),d.Mb(h.b),d.Mb(l.b),d.Mb(r.bb),d.Mb(a.g))},y.\u0275cmp=d.Gb({type:y,selectors:[["app-pending-visits"]],decls:36,vars:2,consts:[[1,"ion-no-border"],["size","2"],["slot","start"],["mode","md","color","primary","defaultHref","/"],["size","10"],["animated","","color","primary","placeholder","Buscar",3,"ionChange"],["size","12"],["placeholder","Seleccionar m\xf3dulo",3,"ionChange"],["value","GEM"],["value","GMP"],["value","GCT"],["value","ASE"],["value","INV"],["value","REC"],["value",""],[1,"ion-padding"],["mode","ios",4,"ngIf"],["itemSize","150","minBufferPx","750","maxBufferPx","1500"],[4,"ngIf"],["vertical","bottom","horizontal","center","slot","fixed"],[3,"click"],["name","cloud-download-outline"],["mode","ios"],[1,"ion-text-center"],["src","../../../assets/icon/icono_observaciones.svg","alt","",1,"imgIcono"],[1,"titulo"],["name","arrow-down-outline"],["color","secondary","routerLink","./visit-id","detail","",3,"click",4,"cdkVirtualFor","cdkVirtualForOf"],["color","secondary","routerLink","./visit-id","detail","",3,"click"],[2,"width","100%"],[1,"labelEnProceso"],[1,"nombre-modulo"]],template:function(t,e){1&t&&(d.Sb(0,"ion-header",0),d.Sb(1,"ion-grid"),d.Sb(2,"ion-row"),d.Sb(3,"ion-col",1),d.Sb(4,"ion-toolbar"),d.Sb(5,"ion-buttons",2),d.Nb(6,"ion-back-button",3),d.Rb(),d.Rb(),d.Rb(),d.Sb(7,"ion-col",4),d.Sb(8,"ion-searchbar",5),d.ac("ionChange",(function(t){return e.search(t)})),d.Rb(),d.Rb(),d.Rb(),d.Sb(9,"ion-row"),d.Sb(10,"ion-col",6),d.Sb(11,"ion-item"),d.Sb(12,"ion-label"),d.Cc(13,"M\xf3dulo"),d.Rb(),d.Sb(14,"ion-select",7),d.ac("ionChange",(function(t){return e.searchModulo(t)})),d.Sb(15,"ion-select-option",8),d.Cc(16,"Gran Empresa"),d.Rb(),d.Sb(17,"ion-select-option",9),d.Cc(18,"Gran MiPyme"),d.Rb(),d.Sb(19,"ion-select-option",10),d.Cc(20,"Grandes Cuentas"),d.Rb(),d.Sb(21,"ion-select-option",11),d.Cc(22,"Asistencia/Asesor\xeda"),d.Rb(),d.Sb(23,"ion-select-option",12),d.Cc(24,"Investigaci\xf3n AT"),d.Rb(),d.Sb(25,"ion-select-option",13),d.Cc(26,"Reclasificaci\xf3n"),d.Rb(),d.Sb(27,"ion-select-option",14),d.Cc(28,"Todos"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(29,"ion-content",15),d.Ac(30,p,15,0,"ion-slides",16),d.Sb(31,"cdk-virtual-scroll-viewport",17),d.Ac(32,m,3,7,"ion-list",18),d.Rb(),d.Sb(33,"ion-fab",19),d.Sb(34,"ion-fab-button",20),d.ac("click",(function(){return e.listActivities()})),d.Nb(35,"ion-icon",21),d.Rb(),d.Rb(),d.Rb()),2&t&&(d.Bb(30),d.mc("ngIf",0==e.listActivity.length),d.Bb(2),d.mc("ngIf",e.listActivity.length>=1))},directives:[r.w,r.v,r.L,r.p,r.Y,r.i,r.e,r.f,r.M,r.jb,r.A,r.F,r.N,r.ib,r.O,r.q,i.l,f.c,f.a,r.s,r.t,r.x,r.Q,r.P,r.G,f.b,r.hb,a.h],pipes:[b.a],styles:["ion-searchbar[_ngcontent-%COMP%]{--border-radius:30px}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0;--background:transparent}ion-item[_ngcontent-%COMP%]{margin-bottom:10px;border-radius:15px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:90%;border:1px solid #344b56;border-radius:50px;margin-top:-15px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{margin-top:-30px;font-weight:700;color:#344b56}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .imgIcono[_ngcontent-%COMP%]{width:auto!important;max-width:65%!important;height:auto!important;max-height:65%!important}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:100%;height:40px;margin-bottom:30px}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{margin-bottom:100px;background-color:transparent}.labelEnProceso[_ngcontent-%COMP%]{text-align:end!important;font-size:13px!important;margin-top:5px!important}.nombre-modulo[_ngcontent-%COMP%]{color:var(--ion-color-primary)}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]{height:100%;width:100%}cdk-virtual-scroll-viewport[_ngcontent-%COMP%]  .cdk-virtual-scroll-content-wrapper{width:100%}"]}),y)},{path:":id",loadChildren:function(){return n.e(47).then(n.bind(null,"o5pZ")).then((function(t){return t.VisitPageModule}))}}],S=((w=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=d.Kb({type:w}),w.\u0275inj=d.Jb({factory:function(t){return new(t||w)},imports:[[a.j.forChild(_)],a.j]}),w),P=n("iTUp"),R=((C=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=d.Kb({type:C}),C.\u0275inj=d.Jb({factory:function(t){return new(t||C)},imports:[[i.c,o.g,r.Z,P.a,f.e,S]]}),C)}}]);