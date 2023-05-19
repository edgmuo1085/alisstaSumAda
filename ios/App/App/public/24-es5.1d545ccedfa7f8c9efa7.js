function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(x){s=function(t,n,e){return t[n]=e}}function u(t,n,e,o){var i=n&&n.prototype instanceof p?n:p,a=Object.create(i.prototype),c=new M(o||[]);return r(a,"_invoke",{value:y(t,e,c)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(x){return{type:"throw",arg:x}}}t.wrap=u;var d={};function p(){}function f(){}function h(){}var g={};s(g,i,(function(){return this}));var b=Object.getPrototypeOf,m=b&&b(b(S([])));m&&m!==n&&e.call(m,i)&&(g=m);var v=h.prototype=p.prototype=Object.create(g);function C(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function _(t,n){var o;r(this,"_invoke",{value:function(r,i){function a(){return new n((function(o,a){!function r(o,i,a,c){var s=l(t[o],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&e.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}})}function y(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return R()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=P(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var s=l(t,n,e);if("normal"===s.type){if(r=e.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:e.done}}"throw"===s.type&&(r="completed",e.method="throw",e.arg=s.arg)}}}function P(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,P(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),d;var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function w(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function S(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return f.prototype=h,r(v,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=s(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===f||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,s(t,c,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},C(_.prototype),s(_.prototype,a,(function(){return this})),t.AsyncIterator=_,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new _(u(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(v),s(v,c,"Generator"),s(v,i,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=S,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),s=e.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),w(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;w(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},t}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_toPropertyKey(r.key),r)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function _toPropertyKey(t){var n=_toPrimitive(t,"string");return"symbol"==typeof n?n:String(n)}function _toPrimitive(t,n){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{QIMp:function(t,n,e){"use strict";e.r(n),e.d(n,"DetailsPageModule",(function(){return M}));var r,o=e("ofXK"),i=e("3Pt+"),a=e("TEn/"),c=e("j1ZV"),s=e("tyNb"),u=e("mrSG"),l=e("fXoL"),d=((r=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canDeactivate",value:function(t){return Object(u.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.canNavigate();case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))}}]),t}()).\u0275fac=function(t){return new(t||r)},r.\u0275prov=l.Ib({token:r,factory:r.\u0275fac,providedIn:"root"}),r),p=e("nm6V"),f=e("5qc1");function h(t,n){if(1&t){var e=l.Tb();l.Qb(0),l.Sb(1,"ion-item",15),l.Sb(2,"div",21),l.Sb(3,"h4"),l.Cc(4,"Departamento Sede Principal"),l.Rb(),l.Cc(5),l.Rb(),l.Rb(),l.Sb(6,"ion-item",15),l.Sb(7,"div",21),l.Sb(8,"h4"),l.Cc(9,"Municipio Sede Principal"),l.Rb(),l.Cc(10),l.Rb(),l.Rb(),l.Sb(11,"ion-item",15),l.Sb(12,"div",18),l.Sb(13,"h4"),l.Cc(14," C\xf3digo/A.E. Principal "),l.Sb(15,"ion-button",19),l.ac("click",(function(t){return l.tc(e),l.ec(3).showPopover(t,"actividad")})),l.Nb(16,"ion-icon",20),l.Rb(),l.Rb(),l.Sb(17,"span",29),l.Cc(18),l.Rb(),l.Cc(19),l.Rb(),l.Rb(),l.Sb(20,"ion-item",15),l.Sb(21,"div",18),l.Sb(22,"h4"),l.Cc(23," Sector Econ\xf3mico "),l.Sb(24,"ion-button",19),l.ac("click",(function(t){return l.tc(e),l.ec(3).showPopover(t,"sector")})),l.Nb(25,"ion-icon",20),l.Rb(),l.Rb(),l.Cc(26),l.Rb(),l.Rb(),l.Sb(27,"ion-item",15),l.Sb(28,"div",21),l.Sb(29,"h4"),l.Cc(30,"Celular Contacto"),l.Rb(),l.Cc(31),l.Rb(),l.Rb(),l.Sb(32,"ion-item",15),l.Sb(33,"div",21),l.Sb(34,"h4"),l.Cc(35,"Tel\xe9fono Notificaci\xf3n"),l.Rb(),l.Cc(36),l.Rb(),l.Rb(),l.Sb(37,"ion-item",15),l.Sb(38,"div",21),l.Sb(39,"h4"),l.Cc(40,"Correo Notificaci\xf3n"),l.Rb(),l.Sb(41,"span",30),l.Cc(42),l.Rb(),l.Rb(),l.Rb(),l.Sb(43,"ion-item",15),l.Sb(44,"div",21),l.Sb(45,"h4"),l.Cc(46,"C\xf3digo Postal"),l.Rb(),l.Cc(47),l.Rb(),l.Rb(),l.Sb(48,"ion-item",15),l.Sb(49,"div",21),l.Sb(50,"h4"),l.Cc(51,"TD/No. Identificaci\xf3n Representante Legal"),l.Rb(),l.Cc(52),l.Rb(),l.Rb(),l.Sb(53,"ion-item",15),l.Sb(54,"div",21),l.Sb(55,"h4"),l.Cc(56,"Nombre Representante Legal"),l.Rb(),l.Cc(57),l.Rb(),l.Rb(),l.Sb(58,"ion-item",15),l.Sb(59,"div",21),l.Sb(60,"h4"),l.Cc(61,"Observaciones"),l.Rb(),l.Nb(62,"ion-textarea",31),l.Rb(),l.Rb(),l.Pb()}if(2&t){var r=l.ec(3);l.Bb(5),l.Ec(" ",r.company.eDSedesActualizadas.Nombre_Departamento_Sede," "),l.Bb(5),l.Ec(" ",r.company.eDSedesActualizadas.Nombre_Municipio_Sede," "),l.Bb(8),l.Dc(r.company.strCodigoActividadEconomica),l.Bb(1),l.Ec(" - ",r.company.strActividadEconomicaNombre," "),l.Bb(7),l.Ec(" ",r.company.strDescripcionSectorEconomico," "),l.Bb(5),l.Ec(" ",r.company.strCelular," "),l.Bb(5),l.Ec(" ",r.company.strTelefono," "),l.Bb(6),l.Dc(r.company.strCorreoElectronico),l.Bb(5),l.Ec(" ",r.company.eDSedesActualizadas.strCodigoPostal," "),l.Bb(5),l.Fc(" ",r.company.strSiglaRepresentanteLegal," - ",r.company.strNumeroDcto_Representant_Legal," "),l.Bb(5),l.Ec(" ",r.company.strNombre_Representant_Legal," "),l.Bb(5),l.mc("value",r.company.stringObservaciones)}}function g(t,n){1&t&&l.Nb(0,"ion-icon",32)}function b(t,n){1&t&&l.Nb(0,"ion-icon",33)}function m(t,n){if(1&t){var e=l.Tb();l.Sb(0,"ion-card",13),l.Sb(1,"ion-card-header"),l.Sb(2,"div",14),l.Sb(3,"div",5),l.Sb(4,"ion-item",15),l.Sb(5,"span",16),l.Cc(6),l.Rb(),l.Rb(),l.Sb(7,"ion-item",15),l.Cc(8),l.Rb(),l.Rb(),l.Sb(9,"ion-icon",17),l.ac("click",(function(){l.tc(e);var t=l.ec(2);return t.showDetails=!t.showDetails})),l.Rb(),l.Rb(),l.Rb(),l.Sb(10,"ion-card-content"),l.Sb(11,"ion-item",15),l.Sb(12,"div",18),l.Sb(13,"h4"),l.Cc(14," Direcci\xf3n Empresa Sede Principal "),l.Sb(15,"ion-button",19),l.ac("click",(function(t){return l.tc(e),l.ec(2).showPopover(t,"direccion")})),l.Nb(16,"ion-icon",20),l.Rb(),l.Rb(),l.Cc(17),l.Rb(),l.Rb(),l.Sb(18,"ion-item",15),l.Sb(19,"div",21),l.Sb(20,"h4"),l.Cc(21,"Indicador de zona"),l.Rb(),l.Cc(22),l.Rb(),l.Rb(),l.Ac(23,h,63,13,"ng-container",22),l.Sb(24,"ion-radio-group",23),l.Sb(25,"ion-item",15),l.Sb(26,"ion-label",24),l.Ac(27,g,1,0,"ion-icon",25),l.Cc(28," Actualizar Datos Empresas "),l.Rb(),l.Nb(29,"ion-radio",26),l.Rb(),l.Sb(30,"ion-item",15),l.Sb(31,"ion-label",24),l.Ac(32,b,1,0,"ion-icon",27),l.Cc(33," Actualizar Personas Contacto "),l.Rb(),l.Nb(34,"ion-radio",28),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&t){var r=l.ec(2);l.Bb(6),l.Dc(r.company.strRazonSocial),l.Bb(2),l.Fc("",r.company.str_Sigla_Documento,": ",r.company.strNumeroDcto,""),l.Bb(1),l.Cb("name",r.showDetails?"chevron-up-outline":"chevron-down-outline"),l.Bb(8),l.Ec(" ",r.company.eDSedesActualizadas.strDireccion," "),l.Bb(5),l.Ec(" ","R"===r.company.eDSedesActualizadas.srtIndicadorZona?"Rural":"Urbana"," "),l.Bb(1),l.mc("ngIf",r.showDetails),l.Bb(4),l.mc("ngIf",r.hasChangedModule("company-data")),l.Bb(5),l.mc("ngIf",r.hasChangedModule("contact-data"))}}function v(t,n){if(1&t){var e=l.Tb();l.Sb(0,"ion-button",11),l.ac("click",(function(){return l.tc(e),l.ec(2).nextPage()})),l.Cc(1," Continuar Proceso "),l.Rb()}}function C(t,n){if(1&t){var e=l.Tb();l.Sb(0,"form",9),l.Ac(1,m,35,9,"ion-card",10),l.Sb(2,"ion-button",11),l.ac("click",(function(){return l.tc(e),l.ec().confirm()})),l.Cc(3," Confirmar Datos "),l.Rb(),l.Ac(4,v,2,0,"ion-button",12),l.Rb()}if(2&t){var r=l.ec();l.mc("formGroup",r.formGroup),l.Bb(1),l.mc("ngIf",r.company),l.Bb(3),l.mc("ngIf",!!r.formGroup.controls.nextPage.value)}}var _,y,P,O=[{path:"",canDeactivate:[d],component:(_=function(){function t(n,e,r,o,i,a){_classCallCheck(this,t),this.companiesService=n,this.route=e,this.router=r,this.alertCtrl=o,this.ngZone=i,this.popoverCtrl=a,this.HINTS={direccion:{text:"al dar clic tendr\xe1 la posibilidad de actualizar la direcci\xf3n de la sede principal.",highlightedText:"Estimado usuario: "},actividad:{text:"Para la modificaci\xf3n de la actividad econ\xf3mica de la empresa, se debe realizar a trav\xe9s de un proceso de reclasificaci\xf3n de empresa ante POSITIVA.",highlightedText:"Recuerde: "},sector:{text:"Para la modificaci\xf3n del sector econ\xf3mico de la empresa, se debe realizar a trav\xe9s de un proceso de reclasificaci\xf3n de empresa ante POSITIVA.",highlightedText:"Recuerde: "}}}return _createClass(t,[{key:"ionViewWillEnter",value:function(){this.bypass=!1,this.formGroup=void 0,this.getCompany()}},{key:"nextPage",value:function(){var t;switch(this.formGroup.controls.nextPage.value){case"companyData":t="./edit-company";break;case"contactData":t="./contact-list"}this.bypass=!0,this.router.navigate([t],{relativeTo:this.route})}},{key:"canNavigate",value:function(){var t,n;return Object(u.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var r,o,i,a=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.bypass){e.next=2;break}return e.abrupt("return",!0);case 2:if((null!==(n=null===(t=this.company)||void 0===t?void 0:t.__updated)&&void 0!==n?n:[]).length){e.next=4;break}return e.abrupt("return",(this.companiesService.discardChanges(),!0));case 4:return r=function(){return Object(u.a)(a,void 0,void 0,_regeneratorRuntime().mark((function t(){var n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.companiesService.saveChanges();case 2:if(i=t.sent){t.next=9;break}return t.next=6,this.alertCtrl.create({backdropDismiss:!1,header:"Atenci\xf3n",mode:"ios",message:"No tiene espacio suficiente en el dispositivo. Intente liberar memoria.",buttons:["ACEPTAR"]});case 6:return n=t.sent,t.next=9,n.present();case 9:case"end":return t.stop()}}),t,this)})))},o=function(){a.companiesService.discardChanges(),i=!0},e.abrupt("return",new Promise((function(t){return Object(u.a)(a,void 0,void 0,_regeneratorRuntime().mark((function n(){var e,a=this;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Atenci\xf3n",mode:"ios",backdropDismiss:!1,message:"Tiene cambios pendientes por guardar. \xbfDesea guardarlos para despu\xe9s o descartarlos?",buttons:[{text:"Guardar",handler:function(){return e.dismiss().then((function(){return Object(u.a)(a,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r();case 2:t(i);case 3:case"end":return n.stop()}}),n)})))})),!1},role:"save"},{text:"Descartar",handler:function(){return e.dismiss().then((function(){return Object(u.a)(a,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:o(),t(i);case 1:case"end":return n.stop()}}),n)})))})),!1},role:"cancel"}]});case 2:return e=n.sent,n.next=5,e.present();case 5:case"end":return n.stop()}}),n,this)})))})));case 6:case"end":return e.stop()}}),e,this)})))}},{key:"hasChangedModule",value:function(t){var n;return void 0!==(null!==(n=this.company.__updated)&&void 0!==n?n:[]).find((function(n){return n===t}))}},{key:"confirm",value:function(){return Object(u.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var n,e=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertCtrl.create({header:"Estimado Usuario",mode:"ios",backdropDismiss:!1,message:"\xbfEst\xe1 seguro de la confirmaci\xf3n de sus datos?",buttons:[{text:"Aceptar",role:"accept",handler:function(){e.ngZone.run((function(){e.bypass=!0,e.router.navigate(["./signature"],{relativeTo:e.route})}))}},{text:"Cancelar",role:"cancel"}]});case 2:return n=t.sent,t.next=5,n.present();case 5:case"end":return t.stop()}}),t,this)})))}},{key:"showPopover",value:function(t,n){return Object(u.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var r;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverCtrl.create({event:t,component:p.a,componentProps:{text:this.HINTS[n].text,highlightedText:this.HINTS[n].highlightedText}});case 2:return r=e.sent,e.next=5,r.present();case 5:case"end":return e.stop()}}),e,this)})))}},{key:"getCompany",value:function(){return Object(u.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=+this.route.snapshot.params.id,t.prev=1,t.next=4,this.companiesService.prepareCompany(n);case 4:this.company=t.sent,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),this.company=this.companiesService.company;case 10:this.company?this.initForm():this.router.navigate(["../"]);case 11:case"end":return t.stop()}}),t,this,[[1,7]])})))}},{key:"initForm",value:function(){var t=new i.c;this.formGroup=new i.e({nextPage:t})}}]),t}(),_.\u0275fac=function(t){return new(t||_)(l.Mb(f.a),l.Mb(s.a),l.Mb(s.g),l.Mb(a.a),l.Mb(l.z),l.Mb(a.fb))},_.\u0275cmp=l.Gb({type:_,selectors:[["app-details"]],decls:13,vars:1,consts:[["size","2"],["color","tertiary"],["slot","start"],["color","primary","mode","md","defaultHref","/"],["size","10"],[1,"title"],[1,"title-wrapper"],[1,"backgroundContent","ion-padding"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["class","ion-no-margin",4,"ngIf"],["expand","block",1,"ion-margin-bottom",3,"click"],["class","ion-margin-bottom","expand","block",3,"click",4,"ngIf"],[1,"ion-no-margin"],[1,"header-wrapper"],["lines","none"],[1,"razon-social"],[3,"click"],[1,"field","with-help"],[1,"tooltip",3,"click"],["name","help-outline","slot","icon-only"],[1,"field"],[4,"ngIf"],["formControlName","nextPage"],[1,"radio-label"],["class","icon-updated","name","checkmark-circle-outline","slot","start",4,"ngIf"],["slot","end","value","companyData"],["name","checkmark-circle-outline","slot","start",4,"ngIf"],["slot","end","value","contactData"],[1,"codigo-actividad"],[1,"correo-notificacion"],["autoGrow","true","readonly","true",3,"value"],["name","checkmark-circle-outline","slot","start",1,"icon-updated"],["name","checkmark-circle-outline","slot","start"]],template:function(t,n){1&t&&(l.Sb(0,"ion-header"),l.Sb(1,"ion-grid"),l.Sb(2,"ion-row"),l.Sb(3,"ion-col",0),l.Sb(4,"ion-toolbar",1),l.Sb(5,"ion-buttons",2),l.Nb(6,"ion-back-button",3),l.Rb(),l.Rb(),l.Rb(),l.Sb(7,"ion-col",4),l.Sb(8,"div",5),l.Sb(9,"div",6),l.Cc(10,"Solicitud Actualizaci\xf3n Empresa"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(11,"ion-content",7),l.Ac(12,C,5,3,"form",8),l.Rb()),2&t&&(l.Bb(12),l.mc("ngIf",n.formGroup))},directives:[a.w,a.v,a.L,a.p,a.Y,a.i,a.e,a.f,a.q,o.l,i.r,i.m,i.f,a.h,a.j,a.l,a.A,a.x,a.k,a.J,a.ib,i.l,i.d,a.F,a.I,a.gb,a.U,a.jb],styles:["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;background:#95a6b1}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{width:100%!important;font-size:25px!important;padding:0;height:100%;display:flex;justify-content:center;align-items:center}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .title-wrapper[_ngcontent-%COMP%]{white-space:break-spaces;text-align:center}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0;--border-width:0}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-bottom:1rem;font-size:.9rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{display:flex}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-grow:1;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:.2rem;white-space:normal}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .razon-social[_ngcontent-%COMP%]{color:var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{flex-grow:0;font-size:1.5rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--inner-padding-bottom:0;--inner-padding-top:0;--background:inherit;--color:inherit;--min-height:auto;white-space:nowrap;text-overflow:ellipsis;font-size:inherit}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:.5rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-radius:50%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{white-space:normal;width:100%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field.with-help[_ngcontent-%COMP%]{padding:5px 0}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:inherit;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%]{--background:var(--ion-color-secondary);--color:var(--ion-color-secondary-contrast);--padding-start:1px;--padding-end:1px;--padding-top:1px;--padding-bottom:1px;--border-radius:1rem;font-size:.6rem;margin-top:-.6rem;pointer-events:auto}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{border-radius:1rem;--background:var(--ion-color-light-shade);--color:var(--ion-color-light-contrast);--padding-start:0.7rem;--padding-end:0.7rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .codigo-actividad[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   .correo-notificacion[_ngcontent-%COMP%]{color:#00f}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]{white-space:break-spaces;font-size:inherit;color:#334fff}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-left:5px;vertical-align:middle;color:var(--ion-color-success)}"]}),_)}],w=((P=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=l.Kb({type:P}),P.\u0275inj=l.Jb({factory:function(t){return new(t||P)},imports:[[s.j.forChild(O)],s.j]}),P),M=((y=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=l.Kb({type:y}),y.\u0275inj=l.Jb({factory:function(t){return new(t||y)},imports:[[o.c,i.g,i.p,a.Z,w,c.a]]}),y)},qkCY:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var r=e("mrSG"),o=e("fXoL"),i=e("e8h1"),a=function(){var t=function(){function t(n){_classCallCheck(this,t),this.storage=n}return _createClass(t,[{key:"set",value:function(t,n){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var r;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.storage.set(t,n);case 3:r=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),r=!1;case 9:return e.abrupt("return",!1!==r);case 10:case"end":return e.stop()}}),e,this,[[0,6]])})))}},{key:"get",value:function(t){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var e;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.storage.get(t);case 3:e=n.sent,n.next=8;break;case 6:n.prev=6,n.t0=n.catch(0);case 8:return n.abrupt("return",e);case 9:case"end":return n.stop()}}),n,this,[[0,6]])})))}},{key:"remove",value:function(t){this.storage.remove(t)}},{key:"clear",value:function(){this.storage.clear()}}]),t}();return t.\u0275fac=function(n){return new(n||t)(o.Wb(i.b))},t.\u0275prov=o.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);