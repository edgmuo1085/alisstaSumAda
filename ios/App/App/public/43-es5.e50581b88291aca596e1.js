function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,i=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(x){s=function(t,n,e){return t[n]=e}}function l(t,n,e,o){var r=n&&n.prototype instanceof f?n:f,c=Object.create(r.prototype),a=new S(o||[]);return i(c,"_invoke",{value:_(t,e,a)}),c}function u(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(x){return{type:"throw",arg:x}}}t.wrap=l;var d={};function f(){}function h(){}function b(){}var g={};s(g,r,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(R([])));v&&v!==n&&e.call(v,r)&&(g=v);var m=b.prototype=f.prototype=Object.create(g);function y(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function C(t,n){var o;i(this,"_invoke",{value:function(i,r){function c(){return new n((function(o,c){!function i(o,r,c,a){var s=u(t[o],t,r);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==typeof d&&e.call(d,"__await")?n.resolve(d.__await).then((function(t){i("next",t,c,a)}),(function(t){i("throw",t,c,a)})):n.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,a)}))}a(s.arg)}(i,r,o,c)}))}return o=o?o.then(c,c):c()}})}function _(t,n,e){var i="suspendedStart";return function(o,r){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===o)throw r;return M()}for(e.method=o,e.arg=r;;){var c=e.delegate;if(c){var a=w(c,e);if(a){if(a===d)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===i)throw i="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i="executing";var s=u(t,n,e);if("normal"===s.type){if(i=e.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(i="completed",e.method="throw",e.arg=s.arg)}}}function w(t,n){var e=n.method,i=t.iterator[e];if(void 0===i)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,w(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=u(i,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var r=o.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function O(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function R(t){if(t){var n=t[r];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){for(;++i<t.length;)if(e.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return h.prototype=b,i(m,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:h,configurable:!0}),h.displayName=s(b,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,a,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},y(C.prototype),s(C.prototype,c,(function(){return this})),t.AsyncIterator=C,t.async=function(n,e,i,o,r){void 0===r&&(r=Promise);var c=new C(l(n,e,i,o),r);return t.isGeneratorFunction(e)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},y(m),s(m,a,"Generator"),s(m,r,(function(){return this})),s(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var i in n)e.push(i);return e.reverse(),function t(){for(;e.length;){var i=e.pop();if(i in n)return t.value=i,t.done=!1,t}return t.done=!0,t}},t.values=R,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(e,i){return c.type="throw",c.arg=t,n.next=e,i&&(n.method="next",n.arg=void 0),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],c=r.completion;if("root"===r.tryLoc)return i("end");if(r.tryLoc<=this.prev){var a=e.call(r,"catchLoc"),s=e.call(r,"finallyLoc");if(a&&s){if(this.prev<r.catchLoc)return i(r.catchLoc,!0);if(this.prev<r.finallyLoc)return i(r.finallyLoc)}else if(a){if(this.prev<r.catchLoc)return i(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return i(r.finallyLoc)}}}},abrupt:function(t,n){for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=n&&n<=r.finallyLoc&&(r=null);var c=r?r.completion:{};return c.type=t,c.arg=n,r?(this.method="next",this.next=r.finallyLoc,d):this.complete(c)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var o=i.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:R(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,_toPropertyKey(i.key),i)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var n=_toPrimitive(t,"string");return"symbol"==typeof n?n:String(n)}function _toPrimitive(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,n||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{gnmv:function(t,n,e){"use strict";e.r(n),e.d(n,"ReleaseActivitiesPageModule",(function(){return S}));var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),c=e("tyNb"),a=e("mrSG"),s=e("Byb6"),l=e("AC/E"),u=e("7AKq"),d=e("fXoL"),f=e("e8h1"),h=e("uOC6");function b(t,n){1&t&&(d.Sb(0,"ion-slides",10),d.Sb(1,"ion-slide"),d.Sb(2,"ion-grid"),d.Sb(3,"ion-row"),d.Sb(4,"ion-col",11),d.Sb(5,"div",12),d.Nb(6,"img",13),d.Rb(),d.Rb(),d.Rb(),d.Sb(7,"ion-row"),d.Sb(8,"ion-col",11),d.Sb(9,"strong"),d.Sb(10,"h1",14),d.Cc(11," No tiene actividades para liberar, debes de migrar actividades desde la web para poderlas liberar. "),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb())}function g(t,n){if(1&t){var e=d.Tb();d.Sb(0,"ion-col",11),d.Sb(1,"ion-card",10),d.Sb(2,"ion-card-content",10),d.Sb(3,"ion-list"),d.Sb(4,"ion-item",20),d.Sb(5,"ion-grid"),d.Sb(6,"ion-row"),d.Sb(7,"ion-col",11),d.Sb(8,"ion-label"),d.Sb(9,"strong"),d.Cc(10,"c\xf3digo actividad"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(11,"ion-row"),d.Sb(12,"ion-col",11),d.Sb(13,"p"),d.Cc(14),d.Rb(),d.Rb(),d.Rb(),d.Sb(15,"ion-row"),d.Sb(16,"ion-col",11),d.Sb(17,"ion-label"),d.Sb(18,"strong"),d.Cc(19,"Descripci\xf3n actividad"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(20,"ion-row"),d.Sb(21,"ion-col",11),d.Sb(22,"p"),d.Cc(23),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(24,"ion-item",20),d.Sb(25,"ion-label"),d.Sb(26,"strong"),d.Cc(27,"Seleccionar actividad"),d.Rb(),d.Rb(),d.Sb(28,"ion-checkbox",21),d.ac("click",(function(){d.tc(e);var t=n.$implicit;return d.ec(3).activitySelected(t)})),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb()}if(2&t){var i=n.$implicit,o=d.ec(3);d.Bb(14),d.Dc(i.idActividad),d.Bb(9),d.Dc(i.descripcionActividad),d.Bb(5),d.mc("value",o.isSelectecActivity)}}function p(t,n){if(1&t&&(d.Sb(0,"ion-row",17),d.Sb(1,"ion-col",11),d.Sb(2,"div",12),d.Sb(3,"div",18),d.Cc(4,"Nombre Empresa"),d.Rb(),d.Sb(5,"div"),d.Cc(6),d.Rb(),d.Rb(),d.Sb(7,"div",12),d.Sb(8,"div",18),d.Cc(9,"Documento Identificaci\xf3n"),d.Rb(),d.Sb(10,"div"),d.Cc(11),d.Rb(),d.Rb(),d.Rb(),d.Ac(12,g,29,3,"ion-col",19),d.Rb()),2&t){var e=n.$implicit;d.Bb(6),d.Dc(e.name),d.Bb(5),d.Dc(e.numeroDocumento),d.Bb(1),d.mc("ngForOf",e.listaActividadesMigradas)}}var v=function(){return["numeroDocumento","name"]};function m(t,n){if(1&t){var e=d.Tb();d.Sb(0,"ion-list"),d.Ac(1,p,13,3,"ion-row",15),d.fc(2,"searchCompanyList"),d.Sb(3,"ion-row"),d.Sb(4,"ion-col",11),d.Sb(5,"ion-button",16),d.ac("click",(function(){return d.tc(e),d.ec().liberarActividad()})),d.Cc(6," Liberar actividad "),d.Rb(),d.Rb(),d.Rb(),d.Rb()}if(2&t){var i=d.ec();d.Bb(1),d.mc("ngForOf",d.ic(2,1,i.listActivity,i.textoBuscar,d.nc(5,v)))}}var y,C,_,w=[{path:"",component:(y=function(){function t(n,e,i,o,r,c){_classCallCheck(this,t),this.loadingCtlr=n,this.cacheService=e,this.alertController=i,this.listActivitiesCompany=o,this.net=r,this.storage=c,this.response=[{numeroDocumento:"123456",name:"Coca cola",listaActividades:[{id:1,codigo:"Codigo 1"},{id:2,codigo:"Codigo 2"}]},{numeroDocumento:"789012",name:"ADA",listaActividades:[{id:3,codigo:"Codigo 3"}]}],this.listActivity=[],this.actividadesSeleccionadas=[],this.isSelectecActivity=!1,this.lines="none"}return _createClass(t,[{key:"ionViewWillEnter",value:function(){this.listActivities(),this.net.showIPAddress()}},{key:"ngOnInit",value:function(){}},{key:"listActivities",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.storage.get("sesion");case 2:return this.informacionUsuario=t.sent,this.presentLoading(),t.next=6,this.listActivitiesCompany.listActivityForCompany(this.informacionUsuario.idPersona).toPromise();case 6:n=t.sent,this.listActivity=n.listActivitiesCompany,this.loading.dismiss();case 8:case"end":return t.stop()}}),t,this)})))}},{key:"search",value:function(t){this.textoBuscar=t.detail.value}},{key:"activitySelected",value:function(t){var n=this,e=t.id,i=this.actividadesSeleccionadas.find((function(t){return t.id===e}));i?this.actividadesSeleccionadas.forEach((function(t){t===i&&n.actividadesSeleccionadas.splice(i,1)})):this.actividadesSeleccionadas.push(t)}},{key:"liberarActividad",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var n,e;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.presentLoading(),n=[],this.actividadesSeleccionadas.forEach((function(t){n.push(t.id)})),e={ListaIdsActividades:n,direccionIP:this.cacheService.ipAddress,CedulaUsuarioModifica:this.informacionUsuario.idPersona},t.next=6,this.listActivitiesCompany.liberarActivities(e).toPromise();case 6:if(!t.sent){t.next=10;break}this.notification("Atenci\xf3n","Se logr\xf3 liberar la(s) actividad(es) seleccionadas"),this.listActivities(),t.next=11;break;case 10:this.notification("Error","Ocurrio un error al tratar de liberar la actividad");case 11:this.loading.dismiss();case 12:case"end":return t.stop()}}),t,this)})))}},{key:"presentLoading",value:function(){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.loadingCtlr.create({mode:"ios",message:"Cargando"});case 2:return this.loading=t.sent,t.abrupt("return",this.loading.present());case 4:case"end":return t.stop()}}),t,this)})))}},{key:"notification",value:function(t,n){return Object(a.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var i;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:t,backdropDismiss:!1,mode:"ios",message:n,buttons:["ACEPTAR"]});case 2:return(i=e.sent).onDidDismiss(),e.next=6,i.present();case 6:case"end":return e.stop()}}),e,this)})))}}]),t}(),y.\u0275fac=function(t){return new(t||y)(d.Mb(r.bb),d.Mb(l.a),d.Mb(r.a),d.Mb(s.a),d.Mb(u.b),d.Mb(f.b))},y.\u0275cmp=d.Gb({type:y,selectors:[["app-release-activities"]],decls:14,vars:2,consts:[["size","2"],["color","tertiary"],["slot","start"],["color","primary","mode","md","defaultHref","/"],["size","10"],[1,"titulo"],[1,"ion-padding"],["animated","","color","primary","placeholder","Buscar",3,"ionChange"],["mode","ios",4,"ngIf"],[4,"ngIf"],["mode","ios"],["size","12"],[1,"ion-text-center"],["src","../../../assets/icon/icono_observaciones.svg","alt","",1,"imgIcono"],[1,"tituloSlide"],["class","ion-margin-bottom",4,"ngFor","ngForOf"],["expand","block","color","primary",3,"click"],[1,"ion-margin-bottom"],[1,"bold"],["size","12",4,"ngFor","ngForOf"],["lines","none"],["slot","end","color","primary",3,"value","click"]],template:function(t,n){1&t&&(d.Sb(0,"ion-header"),d.Sb(1,"ion-grid"),d.Sb(2,"ion-row"),d.Sb(3,"ion-col",0),d.Sb(4,"ion-toolbar",1),d.Sb(5,"ion-buttons",2),d.Nb(6,"ion-back-button",3),d.Rb(),d.Rb(),d.Rb(),d.Sb(7,"ion-col",4),d.Sb(8,"ion-title",5),d.Cc(9,"Liberar Actividades"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Sb(10,"ion-content",6),d.Sb(11,"ion-searchbar",7),d.ac("ionChange",(function(t){return n.search(t)})),d.Rb(),d.Ac(12,b,12,0,"ion-slides",8),d.Ac(13,m,7,6,"ion-list",9),d.Rb()),2&t&&(d.Bb(12),d.mc("ngIf",0===n.listActivity.length),d.Bb(1),d.mc("ngIf",n.listActivity.length>0))},directives:[r.w,r.v,r.L,r.p,r.Y,r.i,r.e,r.f,r.W,r.q,r.M,r.jb,i.l,r.Q,r.P,r.G,i.k,r.h,r.j,r.k,r.A,r.F,r.o,r.b],pipes:[h.a],styles:["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;background:#95a6b1}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--border-radius:30px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:80%;border:1px solid #344b56;border-radius:50px;margin-top:40px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloSlide[_ngcontent-%COMP%]{margin-top:-30px;font-weight:700;color:#344b56;font-size:19px;text-align:center}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .imgIcono[_ngcontent-%COMP%]{width:auto!important;max-width:70%!important;height:auto!important;max-height:70%!important}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:50px}.titulo[_ngcontent-%COMP%]{width:100%!important;font-size:25px!important;padding:0;text-align:left;margin-top:10px}"]}),y)}],P=((C=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=d.Kb({type:C}),C.\u0275inj=d.Jb({factory:function(t){return new(t||C)},imports:[[c.j.forChild(w)],c.j]}),C),O=e("iTUp"),S=((_=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=d.Kb({type:_}),_.\u0275inj=d.Jb({factory:function(t){return new(t||_)},imports:[[i.c,o.g,r.Z,O.a,P]]}),_)}}]);