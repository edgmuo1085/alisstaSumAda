function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(x){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var i=t&&t.prototype instanceof p?t:p,c=Object.create(i.prototype),a=new S(o||[]);return r(c,"_invoke",{value:y(e,n,a)}),c}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(x){return{type:"throw",arg:x}}}e.wrap=u;var d={};function p(){}function f(){}function h(){}var b={};s(b,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(R([])));m&&m!==t&&n.call(m,i)&&(b=m);var v=h.prototype=p.prototype=Object.create(b);function _(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){var o;r(this,"_invoke",{value:function(r,i){function c(){return new t((function(o,c){!function r(o,i,c,a){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,a)}),(function(e){r("throw",e,c,a)})):t.resolve(d).then((function(e){u.value=e,c(u)}),(function(e){return r("throw",e,c,a)}))}a(s.arg)}(r,i,o,c)}))}return o=o?o.then(c,c):c()}})}function y(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return M()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=w(c,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=l(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function w(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=l(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function R(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return f.prototype=h,r(v,"constructor",{value:h,configurable:!0}),r(h,"constructor",{value:f,configurable:!0}),f.displayName=s(h,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,s(e,a,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},_(C.prototype),s(C.prototype,c,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var c=new C(u(t,n,r,o),i);return e.isGeneratorFunction(n)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},_(v),s(v,a,"Generator"),s(v,i,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=R,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(P),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return c.type="throw",c.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var a=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(a&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=e,c.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:R(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{l59q:function(e,t,n){"use strict";n.r(t),n.d(t,"ListConfirmedPageModule",(function(){return M}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),c=n("iTUp"),a=n("tyNb"),s=n("mrSG"),u=n("nYR2"),l=n("kyzu"),d=n("5qc1"),p=n("fXoL"),f=n("vhDN");function h(e,t){1&e&&p.Ob(0)}var b=function(e){return{company:e}};function g(e,t){if(1&e&&(p.Qb(0),p.Ac(1,h,1,0,"ng-container",10),p.Pb()),2&e){var n=t.$implicit;p.ec(2);var r=p.rc(12);p.Bb(1),p.mc("ngTemplateOutlet",r)("ngTemplateOutletContext",p.oc(2,b,n))}}var m=function(){return["strRazonSocial","strNumeroDcto","stringObservaciones"]};function v(e,t){if(1&e&&(p.Qb(0),p.Ac(1,g,2,4,"ng-container",9),p.fc(2,"filterCompanies"),p.Pb()),2&e){var n=p.ec();p.Bb(1),p.mc("ngForOf",p.ic(2,1,n.companies,p.nc(5,m),n.term))}}function _(e,t){1&e&&(p.Sb(0,"div",11),p.Sb(1,"div",12),p.Nb(2,"img",13),p.Sb(3,"h3"),p.Cc(4,"No tiene empresas para enviar."),p.Rb(),p.Rb(),p.Rb())}function C(e,t){if(1&e&&(p.Qb(0),p.Sb(1,"ion-item",17),p.Sb(2,"div",19),p.Sb(3,"h4"),p.Cc(4,"Departamento Sede Principal"),p.Rb(),p.Cc(5),p.Rb(),p.Rb(),p.Sb(6,"ion-item",17),p.Sb(7,"div",19),p.Sb(8,"h4"),p.Cc(9,"Municipio Sede Principal"),p.Rb(),p.Cc(10),p.Rb(),p.Rb(),p.Sb(11,"ion-item",17),p.Sb(12,"div",19),p.Sb(13,"h4"),p.Cc(14,"C\xf3digo/A.E. Principal"),p.Rb(),p.Cc(15),p.Rb(),p.Rb(),p.Sb(16,"ion-item",17),p.Sb(17,"div",19),p.Sb(18,"h4"),p.Cc(19,"Sector Econ\xf3mico"),p.Rb(),p.Cc(20),p.Rb(),p.Rb(),p.Sb(21,"ion-item",17),p.Sb(22,"div",19),p.Sb(23,"h4"),p.Cc(24,"Celular Contacto"),p.Rb(),p.Cc(25),p.Rb(),p.Rb(),p.Sb(26,"ion-item",17),p.Sb(27,"div",19),p.Sb(28,"h4"),p.Cc(29,"Tel\xe9fono Notificaci\xf3n"),p.Rb(),p.Cc(30),p.Rb(),p.Rb(),p.Sb(31,"ion-item",17),p.Sb(32,"div",19),p.Sb(33,"h4"),p.Cc(34,"Correo Notificaci\xf3n"),p.Rb(),p.Cc(35),p.Rb(),p.Rb(),p.Sb(36,"ion-item",17),p.Sb(37,"div",19),p.Sb(38,"h4"),p.Cc(39,"C\xf3digo Postal"),p.Rb(),p.Cc(40),p.Rb(),p.Rb(),p.Sb(41,"ion-item",17),p.Sb(42,"div",19),p.Sb(43,"h4"),p.Cc(44,"TD/No. Identificaci\xf3n Representante Legal"),p.Rb(),p.Cc(45),p.Rb(),p.Rb(),p.Sb(46,"ion-item",17),p.Sb(47,"div",19),p.Sb(48,"h4"),p.Cc(49,"Nombre Representante Legal"),p.Rb(),p.Cc(50),p.Rb(),p.Rb(),p.Sb(51,"ion-item",17),p.Sb(52,"div",19),p.Sb(53,"h4"),p.Cc(54,"Observaciones"),p.Rb(),p.Nb(55,"ion-textarea",23),p.Rb(),p.Rb(),p.Pb()),2&e){var n=p.ec().company;p.Bb(5),p.Ec(" ",n.eDSedesActualizadas.Nombre_Departamento_Sede," "),p.Bb(5),p.Ec(" ",n.eDSedesActualizadas.Nombre_Municipio_Sede," "),p.Bb(5),p.Fc(" ",n.strCodigoActividadEconomica," - ",n.strActividadEconomicaNombre," "),p.Bb(5),p.Ec(" ",n.strDescripcionSectorEconomico," "),p.Bb(5),p.Ec(" ",n.strCelular," "),p.Bb(5),p.Ec(" ",n.strTelefono," "),p.Bb(5),p.Ec(" ",n.strCorreoElectronico," "),p.Bb(5),p.Ec(" ",n.eDSedesActualizadas.strCodigoPostal," "),p.Bb(5),p.Fc(" ",n.strSiglaRepresentanteLegal," - ",n.strNumeroDcto_Representant_Legal," "),p.Bb(5),p.Ec(" ",n.strNombre_Representant_Legal," "),p.Bb(5),p.mc("value",n.strObservaciones)}}function y(e,t){if(1&e){var n=p.Tb();p.Sb(0,"ion-card",14),p.Sb(1,"ion-card-header"),p.Sb(2,"div",15),p.Sb(3,"div",16),p.Sb(4,"ion-item",17),p.Cc(5),p.Rb(),p.Sb(6,"ion-item",17),p.Cc(7),p.Rb(),p.Rb(),p.Sb(8,"ion-icon",18),p.ac("click",(function(){var e=t.company;return e.__showDetails=!e.__showDetails})),p.Rb(),p.Rb(),p.Rb(),p.Sb(9,"ion-card-content"),p.Sb(10,"ion-item",17),p.Sb(11,"div",19),p.Sb(12,"h4"),p.Cc(13,"Direcci\xf3n Empresa Sede Principal"),p.Rb(),p.Cc(14),p.Rb(),p.Rb(),p.Sb(15,"ion-item",17),p.Sb(16,"div",19),p.Sb(17,"h4"),p.Cc(18,"Indicador de zona"),p.Rb(),p.Cc(19),p.Rb(),p.Rb(),p.Ac(20,C,56,13,"ng-container",20),p.Sb(21,"ion-item",17),p.Sb(22,"ion-button",21),p.ac("click",(function(){p.tc(n);var e=t.company;return p.ec().edit(e.Pk_Id_AS_004_Empresas_AMigrar)})),p.Cc(23," Editar "),p.Rb(),p.Sb(24,"ion-button",22),p.ac("click",(function(){p.tc(n);var e=t.company;return p.ec().send(e.Pk_Id_AS_004_Empresas_AMigrar)})),p.Cc(25," Enviar "),p.Rb(),p.Rb(),p.Rb(),p.Rb()}if(2&e){var r=t.company;p.Bb(5),p.Dc(r.strRazonSocial),p.Bb(2),p.Fc("",r.str_Sigla_Documento,": ",r.strNumeroDcto,""),p.Bb(1),p.Cb("name",r.__showDetails?"chevron-up-outline":"chevron-down-outline"),p.Bb(6),p.Ec(" ",r.eDSedesActualizadas.strDireccion," "),p.Bb(5),p.Ec(" ",r.eDSedesActualizadas.srtIndicadorZona," "),p.Bb(1),p.mc("ngIf",r.__showDetails)}}var w,O,P,S=[{path:"",component:(w=function(){function e(t,n,r){_classCallCheck(this,e),this.companiesService=t,this.alertService=n,this.ngZone=r}return _createClass(e,[{key:"ionViewWillEnter",value:function(){this.retrieveCompanies()}},{key:"edit",value:function(e){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.companiesService.prepareCompany(e);case 2:return delete t.sent.__confirmed,t.next=5,this.companiesService.saveChanges();case 5:this.retrieveCompanies();case 6:case"end":return t.stop()}}),t,this)})))}},{key:"send",value:function(e){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var n,r,o=this;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=function(){o.ngZone.run((function(){return Object(s.a)(o,void 0,void 0,_regeneratorRuntime().mark((function e(){var t;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertService.showAlert("Error","Ha ocurrido un error en el servidor y no se pudieron guardar los datos. Intente m\xe1s tarde.");case 2:return t=e.sent,e.next=5,t.present();case 5:this.companiesService.discardChanges();case 6:case"end":return e.stop()}}),e,this)})))}))},t.next=3,this.alertService.showLoading();case 3:return r=t.sent,t.next=6,this.companiesService.prepareCompany(e);case 6:this.companiesService.save().pipe(Object(u.a)((function(){return o.alertService.hideLoading(r)}))).subscribe({next:function(e){o.ngZone.run((function(){return Object(s.a)(o,void 0,void 0,_regeneratorRuntime().mark((function t(){var r;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("true"===e.split(";")[0]){t.next=2;break}return t.abrupt("return",void n());case 2:return t.next=4,this.alertService.showAlert("Empresa actualizada","Los datos se han registrado exitosamente.");case 4:return r=t.sent,t.next=7,r.present();case 7:return t.next=9,this.retrieveCompanies();case 9:case"end":return t.stop()}}),t,this)})))}))},error:n});case 7:case"end":return t.stop()}}),t,this)})))}},{key:"retrieveCompanies",value:function(){return Object(s.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var t;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.companiesService.updatedCompanies;case 2:t=e.sent,this.companies=t.filter((function(e){return e.__confirmed}));case 4:case"end":return e.stop()}}),e,this)})))}}]),e}(),w.\u0275fac=function(e){return new(e||w)(p.Mb(d.a),p.Mb(l.a),p.Mb(p.z))},w.\u0275cmp=p.Gb({type:w,selectors:[["app-list-confirmed"]],decls:13,vars:2,consts:[[1,"ion-no-border"],["size","2"],["mode","md","color","primary","defaultHref","/"],["size","10"],["animated","","color","primary","placeholder","Buscar",3,"ionChange"],[1,"ion-padding"],[4,"ngIf","ngIfElse"],["noCompaniesTmp",""],["companyTmp",""],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"no-companies-wrapper"],[1,"message","ion-padding"],["src","../../../assets/icon/icono_observaciones.svg"],[1,"ion-no-margin"],[1,"header-wrapper"],[1,"title"],["lines","none"],[3,"click"],[1,"field"],[4,"ngIf"],["fill","clear","slot","start",3,"click"],["fill","clear","slot","end",3,"click"],["rows","1","readonly","true",3,"value"]],template:function(e,t){if(1&e&&(p.Sb(0,"ion-header",0),p.Sb(1,"ion-grid"),p.Sb(2,"ion-row"),p.Sb(3,"ion-col",1),p.Nb(4,"ion-back-button",2),p.Rb(),p.Sb(5,"ion-col",3),p.Sb(6,"ion-searchbar",4),p.ac("ionChange",(function(e){return t.term=e.detail.value})),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Rb(),p.Sb(7,"ion-content",5),p.Ac(8,v,3,6,"ng-container",6),p.Rb(),p.Ac(9,_,5,0,"ng-template",null,7,p.Bc),p.Ac(11,y,26,7,"ng-template",null,8,p.Bc)),2&e){var n=p.rc(10);p.Bb(8),p.mc("ngIf",null==t.companies?null:t.companies.length)("ngIfElse",n)}},directives:[i.w,i.v,i.L,i.p,i.e,i.f,i.M,i.jb,i.q,r.l,r.k,r.q,i.j,i.l,i.A,i.x,i.k,i.h,i.U],pipes:[f.a],styles:["ion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{position:relative}ion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-back-button[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%)}ion-header[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--border-radius:1rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin-bottom:3rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]{display:flex}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-grow:1;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:.2rem;white-space:normal}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   .header-wrapper[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{flex-grow:0;font-size:1.5rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0;--padding-top:0;--padding-bottom:0;--inner-padding-start:0;--inner-padding-end:0;--inner-padding-bottom:0;--inner-padding-top:0;--background:inherit;--color:inherit;--min-height:auto;white-space:nowrap;text-overflow:ellipsis}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{--border-radius:50%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:inherit}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]{white-space:normal;width:100%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:inherit;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%]{border-radius:1rem;--background:var(--ion-color-light-shade);--color:var(--ion-color-light-contrast);--padding-start:0.7rem;--padding-end:0.7rem}ion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]{border:1px solid #344b56;border-radius:2rem;height:80%;position:relative}ion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);text-align:center;width:100%}ion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:65%}ion-content[_ngcontent-%COMP%]   .no-companies-wrapper[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-weight:700}"]}),w)}],R=((P=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=p.Kb({type:P}),P.\u0275inj=p.Jb({factory:function(e){return new(e||P)},imports:[[a.j.forChild(S)],a.j]}),P),M=((O=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=p.Kb({type:O}),O.\u0275inj=p.Jb({factory:function(e){return new(e||O)},imports:[[r.c,o.g,i.Z,R,c.a]]}),O)},qkCY:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("mrSG"),o=n("fXoL"),i=n("e8h1"),c=function(){var e=function(){function e(t){_classCallCheck(this,e),this.storage=t}return _createClass(e,[{key:"set",value:function(e,t){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var r;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.storage.set(e,t);case 3:r=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),r=!1;case 9:return n.abrupt("return",!1!==r);case 10:case"end":return n.stop()}}),n,this,[[0,6]])})))}},{key:"get",value:function(e){return Object(r.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var n;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.storage.get(e);case 3:n=t.sent,t.next=8;break;case 6:t.prev=6,t.t0=t.catch(0);case 8:return t.abrupt("return",n);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})))}},{key:"remove",value:function(e){this.storage.remove(e)}},{key:"clear",value:function(){this.storage.clear()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Wb(i.b))},e.\u0275prov=o.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);