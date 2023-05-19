function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _regeneratorRuntime(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */_regeneratorRuntime=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(k){s=function(e,t,n){return e[t]=n}}function u(e,t,n,o){var i=t&&t.prototype instanceof b?t:b,a=Object.create(i.prototype),c=new T(o||[]);return r(a,"_invoke",{value:C(e,n,c)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var l={};function b(){}function h(){}function f(){}var p={};s(p,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(_([])));m&&m!==t&&n.call(m,i)&&(p=m);var v=f.prototype=b.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){var o;r(this,"_invoke",{value:function(r,i){function a(){return new t((function(o,a){!function r(o,i,a,c){var s=d(e[o],e,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,a,c)}),(function(e){r("throw",e,a,c)})):t.resolve(l).then((function(e){u.value=e,a(u)}),(function(e){return r("throw",e,a,c)}))}c(s.arg)}(r,i,o,a)}))}return o=o?o.then(a,a):a()}})}function C(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return x()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===l)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=d(e,t,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),l;var o=d(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,l;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function _(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:x}}function x(){return{value:void 0,done:!0}}return h.prototype=f,r(v,"constructor",{value:f,configurable:!0}),r(f,"constructor",{value:h,configurable:!0}),h.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(S.prototype),s(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new S(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(v),s(v,c,"Generator"),s(v,i,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=_,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(A),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:_(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,_toPropertyKey(r.key),r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){var t=_toPrimitive(e,"string");return"symbol"==typeof t?t:String(t)}function _toPrimitive(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{wlbM:function(e,t,n){"use strict";n.r(t),n.d(t,"VisitSubjectsPageModule",(function(){return C}));var r=n("ofXK"),o=n("3Pt+"),i=n("TEn/"),a=n("tyNb"),c=n("mrSG"),s=n("AC/E"),u=n("fXoL");function d(e,t){if(1&e&&(u.Sb(0,"ion-badge",2),u.Cc(1),u.Rb()),2&e){var n=u.ec().$implicit;u.Bb(1),u.Ec("",n.cantidadDocumentos," ")}}function l(e,t){if(1&e){var n=u.Tb();u.Sb(0,"ion-item",29),u.Sb(1,"ion-label",30),u.Cc(2,"Registrar c\xf3digo de evento Educa"),u.Rb(),u.Sb(3,"ion-toggle",31),u.ac("ionChange",(function(e){u.tc(n);var t=u.ec().$implicit;return u.ec().showInputCodeEdu(e,t)})),u.Rb(),u.Rb()}}function b(e,t){if(1&e&&(u.Sb(0,"ion-item",29),u.Sb(1,"ion-label",16),u.Cc(2,"C\xf3digo de evento Educa"),u.Rb(),u.Nb(3,"ion-input",42),u.Rb()),2&e){var n=u.ec().index;u.Bb(3),u.mc("formControlName",n+"codeEduca")}}function h(e,t){if(1&e&&(u.Sb(0,"ion-badge",2),u.Cc(1),u.Rb()),2&e){var n=u.ec().$implicit;u.Bb(1),u.Dc(n.cantidadDocumentos)}}function f(e,t){if(1&e){var n=u.Tb();u.Sb(0,"ion-card",9),u.Sb(1,"ion-card-header"),u.Sb(2,"ion-item",10),u.Sb(3,"ion-icon",11),u.ac("click",(function(){u.tc(n);var e=t.$implicit;return u.ec().toggleCard(e)})),u.Rb(),u.Sb(4,"ion-card-title",12),u.Cc(5),u.Rb(),u.Rb(),u.Rb(),u.Sb(6,"ion-card-content"),u.Sb(7,"form",13),u.Sb(8,"ion-list",10),u.Sb(9,"ion-item",14),u.Cc(10),u.Rb(),u.Sb(11,"ion-item",15),u.Sb(12,"ion-label",16),u.Cc(13,"Observaciones"),u.Rb(),u.Sb(14,"ion-input",17),u.Cc(15),u.Rb(),u.Rb(),u.Sb(16,"ion-item",18),u.Sb(17,"ion-grid"),u.Sb(18,"ion-row"),u.Sb(19,"ion-col",19),u.Sb(20,"p",20),u.Cc(21),u.Rb(),u.Nb(22,"ion-input",21),u.Rb(),u.Sb(23,"ion-col",19),u.Sb(24,"p",16),u.Cc(25,"Cobertura"),u.Rb(),u.Nb(26,"ion-input",22),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(27,"ion-item",23),u.Sb(28,"ion-grid"),u.Sb(29,"ion-row",24),u.ac("click",(function(){u.tc(n);var e=t.$implicit;return u.ec().attachDocs(e)})),u.Sb(30,"ion-col"),u.Sb(31,"ion-item",25),u.Ac(32,d,2,1,"ion-badge",26),u.Sb(33,"ion-label",27),u.Cc(34,"Soportes"),u.Rb(),u.Rb(),u.Rb(),u.Sb(35,"ion-col"),u.Sb(36,"ion-item",28),u.Sb(37,"ion-label",27),u.Cc(38,"Adjuntar"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(39,"ion-item",29),u.Sb(40,"ion-label",30),u.Cc(41),u.Rb(),u.Sb(42,"ion-toggle",31),u.ac("ionChange",(function(e){u.tc(n);var r=t.$implicit;return u.ec().toggleAttachDocs(e,r)})),u.Rb(),u.Rb(),u.Ac(43,l,4,0,"ion-item",32),u.Ac(44,b,4,1,"ion-item",32),u.Sb(45,"ion-item",33),u.Sb(46,"ion-label",34),u.Cc(47,"Incluir esta actividad"),u.Rb(),u.Nb(48,"ion-checkbox",35),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(49,"ion-card-content",36),u.Sb(50,"ion-list",10),u.Sb(51,"ion-item",37),u.Cc(52),u.Rb(),u.Sb(53,"ion-item",38),u.ac("click",(function(){u.tc(n);var e=t.$implicit;return u.ec().attachDocs(e)})),u.Ac(54,h,2,1,"ion-badge",26),u.Nb(55,"ion-icon",39),u.Sb(56,"p"),u.Cc(57,"Adjuntar documento"),u.Rb(),u.Rb(),u.Sb(58,"ion-item",40),u.Sb(59,"ion-label",34),u.Cc(60,"Incluir esta actividad"),u.Rb(),u.Sb(61,"ion-checkbox",41),u.ac("ngModelChange",(function(e){return u.tc(n),t.$implicit.include=e}))("ngModelChange",(function(){u.tc(n);var e=t.$implicit,r=t.index;return u.ec().emitIncludedOnReactive(e,r+"included")})),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb()}if(2&e){var r=t.$implicit,o=t.index,i=u.ec();u.Bb(3),u.mc("name",r.isOpen?i.CLOSE_TOGGLER:i.OPEN_TOGGLER),u.Bb(2),u.Fc("",r.idActividad," contrato ",1===r.firmamaQR?"(Firma con QR)":"(Firma sin QR)",""),u.Bb(1),u.Db("ion-hide",!r.isOpen),u.Bb(1),u.mc("formGroup",i.subjectForm),u.Bb(3),u.Dc(r.descripcionActividad),u.Bb(5),u.Ec(" ",r.observaciones," "),u.Bb(6),u.Fc("Total de ",r.uniadMedidaDescripcion,"/ Actividad (Estimada ",r.cantidadHorasEjecutar,")"),u.Bb(1),u.mc("formControlName",o+"horasEjecutadas"),u.Bb(4),u.mc("formControlName",o+"coverage"),u.Bb(6),u.mc("ngIf",r.cantidadDocumentos),u.Bb(9),u.Ec("",i.textSoporte," se van a adjuntar documentos t\xe9cnicos por Alissta Web"),u.Bb(2),u.mc("ngIf","ED"===r.lineaAccion),u.Bb(1),u.mc("ngIf",r.showInputCode),u.Bb(4),u.mc("formControlName",o+"included"),u.Bb(1),u.Db("ion-hide",r.isOpen),u.Bb(3),u.Ec(" ",r.descripcionActividad," "),u.Bb(2),u.mc("ngIf",r.cantidadDocumentos),u.Bb(7),u.mc("ngModel",r.include)}}function p(e,t){if(1&e){var n=u.Tb();u.Sb(0,"ion-fab",43),u.ac("click",(function(){return u.tc(n),u.ec().next()})),u.Sb(1,"ion-button",44),u.Cc(2," Continuar "),u.Rb(),u.Rb()}}var g,m,v,y=[{path:"",component:(g=function(){function e(t,n,r){_classCallCheck(this,e),this.alertController=t,this.router=n,this.cacheService=r,this.OPEN_TOGGLER="chevron-down-outline",this.CLOSE_TOGGLER="chevron-up-outline",this.MAX_SUBJECTS=4,this.ALERT_TEXTS={title:"Atenci\xf3n",mode:"ios",message:"Puede seleccionar un m\xe1ximo de cuatro (4) actividades por formulario.",okButtonText:"Aceptar"},this.ALERT_TEXTS_MINACTIVITY={title:"Atenci\xf3n",mode:"ios",message:"Se debe seleccionar por lo menos (1) actividad para continuar.",okButtonText:"Aceptar"},this.ALERT_TEXTS_MAXHOREJECUTAR={title:"Atenci\xf3n",mode:"ios",message:"No puede seleccionar las actividades, debido a que excede las horas permitidas a ejecutar. Las cuales son 10 horas por d\xeda",okButtonText:"Aceptar"},this.ALERT_TEXTS_FIELDSEMPTY={title:"Atenci\xf3n",mode:"ios",message:"Todos los campos son obligatorios",okButtonText:"Aceptar"},this.subjectsSelected=[],this.redirect=!0,this.textSoporte="NO",this.validarCoberturaHorasEjecutadas=!0}return _createClass(e,[{key:"ionViewWillEnter",value:function(){var e=this;if(this.cacheService.infoDocumentosPorActividad.length>0)for(var t=function(t){var n=e.cacheService.infoDocumentosPorActividad[t].idActividad;e.subjects.forEach((function(r){r.id===n&&(r.cantidadDocumentos=e.cacheService.infoDocumentosPorActividad[t].cantidadDocumentosAdjuntos)}))},n=0;n<this.cacheService.infoDocumentosPorActividad.length;n++)t(n)}},{key:"ngOnInit",value:function(){this.cacheService.limpiarVariablesAsesoria(),this.updateListAdvisoryTopic()}},{key:"toggleCard",value:function(e){e.isOpen=!e.isOpen,e.isOpen&&this.subjects.filter((function(t){return t!==e&&t.isOpen})).forEach((function(e){return e.isOpen=!1}))}},{key:"toggleAttachDocs",value:function(e,t){t.attachDocs=e.detail.checked,this.textSoporte=e.detail.checked?"SI":"NO"}},{key:"attachDocs",value:function(e){this.cacheService.InfoActivityAttachDocs(e),this.router.navigateByUrl("/u/execLog/pending-visits/visit-id/subjects/upload")}},{key:"emitIncludedOnReactive",value:function(e,t){this.subjectForm.controls[t].setValue(e.include,{emitEvent:!1}),this.toggleIncludeSubject(e)}},{key:"toggleIncludeSubject",value:function(e){return Object(c.a)(this,void 0,void 0,_regeneratorRuntime().mark((function t(){var n,r,o,i,a,c,s,u,d,l,b,h;return _regeneratorRuntime().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=this.searchSubject(e),r=this.searchSubject2(e),!n){t.next=6;break}o=e,i=this.subjectsSelected.filter((function(e){return e!==o})),this.subjectsSelected=i,this.redirectTo=0===this.subjectsSelected.length?"":"type",t.next=41;break;case 6:if(e.estadoInterno="Proceso",0===this.subjectsSelected.length||!r){t.next=24;break}a=0;case 8:if(!(a<this.subjectsSelected.length)){t.next=22;break}if(this.subjectsSelected[a].numeroContrato!=this.subjectsSelected[a].numeroContrato){t.next=18;break}if(this.subjectsSelected.push(e),!(this.subjectsSelected.length>0)){t.next=16;break}if(this.redirectTo="type",this.cacheService.saveActionLine(this.subjectsSelected[a].lineaAccion),"ED"!==this.subjectsSelected[a].lineaAccion){t.next=15;break}if(c=this.subjectsSelected[a].showInputCode,!((this.subjectsSelected[a].cantidadDocumentos||0)<1)||c){t.next=15;break}return t.abrupt("return",(this.notification("Atenci\xf3n","Como la linea de acci\xf3n es EDUCA, es obligatorio cargar los soportes"),void this.attachDocs(e)));case 15:return t.abrupt("break",22);case 16:t.next=19;break;case 18:this.redirectTo="",this.notification("Atenci\xf3n","No se puede seleccionar las actividades con contratos diferentes");case 19:a++,t.next=8;break;case 22:t.next=41;break;case 24:if(!r){t.next=39;break}this.subjectsSelected.push(e),this.redirectTo="type",s=0;case 27:if(!(s<this.subjectsSelected.length)){t.next=36;break}if(this.cacheService.saveActionLine(this.subjectsSelected[s].lineaAccion),"ED"!==this.subjectsSelected[s].lineaAccion){t.next=32;break}if(u=this.subjectsSelected[s].showInputCode,!((this.subjectsSelected[s].cantidadDocumentos||0)<1)||u){t.next=32;break}return t.abrupt("return",(this.notification("Atenci\xf3n","Como la linea de acci\xf3n es EDUCA, es obligatorio cargar los soportes Asistencia a eventos de PyP y Evaluaci\xf3n de eventos"),void this.attachDocs(e)));case 32:return t.abrupt("break",36);case 33:s++,t.next=27;break;case 36:this.subjectsSelected.length>0&&(this.redirectTo="type"),t.next=41;break;case 39:d=e,l=this.subjectsSelected.filter((function(e){return e!==d})),this.subjectsSelected=l,this.redirectTo=0===this.subjectsSelected.length?"":"type",e.include&&this.notification("Atenci\xf3n","Dos actividades de seguimiento a observaciones no se pueden realizar en la misma acta"),setTimeout((function(){e.include=!1}),1e3);case 41:if(0===this.subjectsSelected.length){t.next=50;break}if(!(this.subjectsSelected.length>this.MAX_SUBJECTS)){t.next=48;break}return this.redirectTo="",b=this.alertController.create({header:this.ALERT_TEXTS.title,mode:"ios",message:this.ALERT_TEXTS.message,buttons:[{text:this.ALERT_TEXTS.okButtonText,role:"OK"}]}),t.next=47,b;case 47:t.sent.present();case 48:t.next=54;break;case 50:return h=this.alertController.create({header:this.ALERT_TEXTS_MINACTIVITY.title,mode:"ios",message:this.ALERT_TEXTS_MINACTIVITY.message,buttons:[{text:this.ALERT_TEXTS_MINACTIVITY.okButtonText,role:"OK"}]}),t.next=53,h;case 53:t.sent.present();case 54:case"end":return t.stop()}}),t,this)})))}},{key:"searchSubject",value:function(e){var t=e.id;return!!this.subjectsSelected.find((function(e){return e.id===t}))}},{key:"searchSubject2",value:function(e){return 5!==e.SiniestroOpsActividad||this.subjectsSelected.filter((function(e){return 5===e.SiniestroOpsActividad})).length<1}},{key:"updateListAdvisoryTopic",value:function(){var e=this,t=JSON.parse(sessionStorage.companySelected).listaActividadesMigradas;this.subjects=t,this.subjectForm=new o.e({});for(var n=function(t){var n=new o.c(e.subjects[t].id),r=new o.c(e.subjects[t].idActividad),i=new o.c(e.subjects[t].descripcionActividad),a=new o.c(e.subjects[t].observaciones),c=new o.c(e.subjects[t].cantidadHorasEjecutar),s=new o.c(e.subjects[t].uniadMedidaDescripcion),u=new o.c,d=new o.c(void 0,[o.q.required,o.q.min(1)]),l=new o.c(e.subjects[t].registroCodigoEventosEduca),b=new o.c(void 0,[o.q.required]),h=new o.c(e.subjects[t].fechaFinContrato),f=new o.c(e.subjects[t].firmamaQR),p=new o.c(e.subjects[t].estadoInterno),g=new o.c(e.subjects[t].include),m=new o.c(e.subjects[t].Fk_Id_Siniestro),v=new o.c(e.subjects[t].Siniestro),y=new o.c(e.subjects[t].SiniestroOpsActividad);e.subjectForm.addControl(t+"id",n),e.subjectForm.addControl(t+"idActividad",r),e.subjectForm.addControl(t+"descripcionActividad",i),e.subjectForm.addControl(t+"Observaciones",a),e.subjectForm.addControl(t+"horasAEjecutar",c),e.subjectForm.addControl(t+"unidadMedida",s),e.subjectForm.addControl(t+"horasEjecutadas",u),e.subjectForm.addControl(t+"coverage",d),e.subjectForm.addControl(t+"registroCodigoEventosEduca",l),e.subjectForm.addControl(t+"codeEduca",b),e.subjectForm.addControl(t+"fechaFinContrato",h),e.subjectForm.addControl(t+"firmaQR",f),e.subjectForm.addControl(t+"estadoInterno",p),e.subjectForm.addControl(t+"included",g),e.subjectForm.addControl(t+"fkIdSiniestro",m),e.subjectForm.addControl(t+"siniestro",v),e.subjectForm.addControl(t+"siniestroOpActividad",y),e.subjectForm.controls[t+"included"].valueChanges.subscribe((function(n){e.subjects[t].include=n,e.toggleIncludeSubject(e.subjects[t])}))},r=0;r<this.subjects.length;r++)n(r)}},{key:"showInputCodeEdu",value:function(e,t){t.showInputCode=!0===e.detail.checked}},{key:"notification",value:function(e,t){return Object(c.a)(this,void 0,void 0,_regeneratorRuntime().mark((function n(){var r;return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:e,backdropDismiss:!1,mode:"ios",message:t,buttons:["ACEPTAR"]});case 2:return(r=n.sent).onDidDismiss(),n.next=6,r.present();case 6:case"end":return n.stop()}}),n,this)})))}},{key:"validateTarjetas",value:function(e,t){for(var n=[],r=function(){var r=e[o],i=t.find((function(e){return e.id===r.id}));i&&(i.include=!0,i.AdjuntarDocumentosTecnicos=r.attachDocs?"SI":"NO",i.CodigoeventoPositiva=i.codeEduca,n.push(i))},o=0;o<e.length;o++)r();return n}},{key:"next",value:function(){return Object(c.a)(this,void 0,void 0,_regeneratorRuntime().mark((function e(){var t,n,r,o,i,a,s,u,d,l,b,h,f=this;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.subjectForm.value,n=["include","id","idActividad","descripcionActividad","Observaciones","horasAEjecutar","unidadMedida","horasEjecutadas","coverage","registroCodigoEventosEduca","codeEduca","fechaFinContrato","firmaQR","estadoInterno","fkIdSiniestro","siniestro","siniestroOpActividad"],r=[],o=_regeneratorRuntime().mark((function e(o){var i;return _regeneratorRuntime().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i={},n.forEach((function(e){return Object(c.a)(f,void 0,void 0,_regeneratorRuntime().mark((function n(){return _regeneratorRuntime().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i[e]=t[o+e];case 1:case"end":return n.stop()}}),n)})))})),r.push(i);case 2:case"end":return e.stop()}}),e)})),i=0;case 4:if(!(i<Object.keys(t).length/n.length)){e.next=9;break}return e.delegateYield(o(i),"t0",6);case 6:i++,e.next=4;break;case 9:return e.next=11,this.validateTarjetas(this.subjectsSelected,r);case 11:a=e.sent,r=a,s=0,u=0;case 15:if(!(u<r.length)){e.next=36;break}if(null!==(d=r[u]).coverage&&""!==d.coverage&&null!==d.horasEjecutadas&&""!==d.horasEjecutadas){e.next=20;break}return this.validarCoberturaHorasEjecutadas=!1,this.notification("Atenci\xf3n","Debe ingresar el valor de la cobertura o el de las horas ejecutadas para la actividad seleccionada"),e.abrupt("break",36);case 20:if(this.validarCoberturaHorasEjecutadas=!0,!(parseInt(d.horasEjecutadas,10)>d.horasAEjecutar)){e.next=23;break}return this.validarCoberturaHorasEjecutadas=!1,this.notification("Atenci\xf3n","La cantidad de horas a ejecutar es mayor a la de horas migradas para realizar la actividad"),e.abrupt("break",36);case 23:if(!(d.coverage<1)){e.next=26;break}return this.validarCoberturaHorasEjecutadas=!1,this.notification("Atenci\xf3n","La cobertura no puede ser menor que uno"),e.abrupt("break",36);case 26:if(this.validarActividadesED(a)){e.next=29;break}return this.validarCoberturaHorasEjecutadas=!1,this.notification("Atenci\xf3n","Debe adjuntar archivos para las actividades EDUCA o indicar c\xf3digo de evento."),e.abrupt("break",36);case 29:if(!(d.siniestro&&parseInt(d.horasEjecutadas,10)<d.horasAEjecutar)){e.next=32;break}return this.validarCoberturaHorasEjecutadas=!1,this.notification("Atenci\xf3n","Compruebe que la cantidad de horas ejecutadas coincida con la cantidad de horas migradas."),e.abrupt("break",36);case 32:"HORA"!==d.unidadMedida&&"Horas"!==d.unidadMedida||(s+=parseInt(r[u].horasEjecutadas));case 33:u++,e.next=15;break;case 36:if(!this.validarCoberturaHorasEjecutadas){e.next=55;break}if(!(s<=10)){e.next=51;break}if(this.cacheService.saveMigratedHours(s),0!==this.subjectsSelected.length){e.next=43;break}return l=this.alertController.create({header:this.ALERT_TEXTS_MINACTIVITY.title,mode:"ios",message:this.ALERT_TEXTS_MINACTIVITY.message,buttons:[{text:this.ALERT_TEXTS_MINACTIVITY.okButtonText,role:"OK"}]}),e.next=42,l;case 42:return e.abrupt("return",void e.sent.present());case 43:if(!(this.subjectsSelected.length>this.MAX_SUBJECTS)){e.next=48;break}return b=this.alertController.create({mode:"ios",header:this.ALERT_TEXTS.title,message:this.ALERT_TEXTS.message,buttons:[{text:this.ALERT_TEXTS.okButtonText,role:"OK"}]}),e.next=47,b;case 47:return e.abrupt("return",void e.sent.present());case 48:this.redirect&&(this.cacheService.saveActivities(r),this.router.navigateByUrl("u/execLog/pending-visits/visit-id/subjects/type")),e.next=55;break;case 51:return h=this.alertController.create({mode:"ios",header:this.ALERT_TEXTS_MAXHOREJECUTAR.title,message:this.ALERT_TEXTS_MAXHOREJECUTAR.message,buttons:[{text:this.ALERT_TEXTS.okButtonText,role:"OK"}]}),e.next=54,h;case 54:e.sent.present();case 55:case"end":return e.stop()}}),e,this)})))}},{key:"validarActividadesED",value:function(e){var t=this,n=this.subjectsSelected.filter((function(e){return"ED"===e.lineaAccion}));return!n.length||n.every((function(n){var r=e.find((function(e){return e.id===n.id}));if(!r)return!0;var o=!!r.codeEduca,i=[];t.cacheService.pdfAdjuntos.forEach((function(e){return i.push.apply(i,_toConsumableArray(e))}));var a=[];t.cacheService.fotosAdjuntas.forEach((function(e){return a.push.apply(a,_toConsumableArray(e))}));var c=i.filter((function(e){return e.idActividad===r.id&&["AEP","EE"].indexOf(e.idTipoArchivo)>=0})),s=a.filter((function(e){return e.idActividad===r.id&&["AEP","EE"].indexOf(e.idTipoArchivo)>=0})),u=c.filter((function(e){return"AEP"===e.idTipoArchivo})).length+s.filter((function(e){return"AEP"===e.idTipoArchivo})).length,d=c.filter((function(e){return"EE"===e.idTipoArchivo})).length+s.filter((function(e){return"EE"===e.idTipoArchivo})).length;return o||u>=1&&d>=1}))}}]),e}(),g.\u0275fac=function(e){return new(e||g)(u.Mb(i.a),u.Mb(a.g),u.Mb(s.a))},g.\u0275cmp=u.Gb({type:g,selectors:[["app-visit-subjects"]],decls:13,vars:2,consts:[["size","2"],["color","tertiary"],["slot","start"],["color","primary","mode","md","defaultHref","/"],["size","10"],[1,"titulo"],[1,"backgroundContent"],["mode","ios",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","center","slot","fixed",3,"click",4,"ngIf"],["mode","ios"],["lines","none",1,"p-0"],["slot","end",3,"name","click"],[1,"cardTitle"],[3,"formGroup"],[1,"p-0"],[1,"p-0","mt-5"],["position","stacked"],["readonly","",1,"bg-light","mt-3","rounded","pl-1","pr-1"],[1,"p-0","mt-3"],["size","6",2,"padding","5px"],["position","stacked",2,"font-size","12px"],["type","tel","id","horasEjecutadas",1,"bg-light","rounded","pl-1","pr-1",3,"formControlName"],["type","number","id","cobertura",1,"bg-light","rounded","pl-1","pr-1",2,"margin-top","15px",3,"formControlName"],["color","light",1,"p-0","mt-3","rounded"],[3,"click"],["color","light",1,"ion-float-start"],["slot","start",4,"ngIf"],["color","danger"],["color","light",1,"ion-float-end"],["color","light",1,"mt-3","rounded"],[1,"no-wrap"],["color","primary",3,"ionChange"],["class","mt-3 rounded","color","light",4,"ngIf"],["lines","none",1,"ion-float-end","no-effects","mt-5"],[1,"ion-text-right"],["slot","end","color","primary",3,"formControlName"],[1,"pt-0"],[1,"p-0","no-effects"],["lines","none",3,"click"],["slot","start","name","attach-outline"],["lines","none",1,"ion-float-end","no-effects"],["slot","end","color","primary",3,"ngModel","ngModelChange"],["placeholder","Ingrese c\xf3digo de evento Educa",1,"bg-light","mt-3","rounded",3,"formControlName"],["vertical","bottom","horizontal","center","slot","fixed",3,"click"],["color","primary","mode","ios","expand","block",1,"btn"]],template:function(e,t){1&e&&(u.Sb(0,"ion-header"),u.Sb(1,"ion-grid"),u.Sb(2,"ion-row"),u.Sb(3,"ion-col",0),u.Sb(4,"ion-toolbar",1),u.Sb(5,"ion-buttons",2),u.Nb(6,"ion-back-button",3),u.Rb(),u.Rb(),u.Rb(),u.Sb(7,"ion-col",4),u.Sb(8,"ion-title",5),u.Cc(9,"Temas de asesor\xeda"),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Rb(),u.Sb(10,"ion-content",6),u.Ac(11,f,62,22,"ion-card",7),u.Ac(12,p,3,0,"ion-fab",8),u.Rb()),2&e&&(u.Bb(11),u.mc("ngForOf",t.subjects),u.Bb(1),u.mc("ngIf",t.redirectTo))},directives:[i.w,i.v,i.L,i.p,i.Y,i.i,i.e,i.f,i.W,i.q,r.k,r.l,i.j,i.l,i.A,i.x,i.n,i.k,o.r,o.m,o.f,i.G,i.F,i.z,i.jb,o.l,o.d,i.db,i.X,i.b,i.o,o.o,i.g,i.s,i.h],styles:["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;background:#95a6b1}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}ion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0}ion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}ion-card-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:50px}ion-card-content[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0}ion-card-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}.label-stacked.sc-ion-label-md-h[_ngcontent-%COMP%]{transform:none}.no-effects[_ngcontent-%COMP%]{--background-hover:transparent;--ripple-color:transparent}ion-fab[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:-20px}.titulo[_ngcontent-%COMP%]{width:100%!important;font-size:25px!important;padding:0;text-align:left;margin-top:10px}.cardTitle[_ngcontent-%COMP%]{font-weight:700;text-align:justify;font-size:17px;width:100%}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]:last-of-type{margin-bottom:100px}"]}),g)},{path:"upload",loadChildren:function(){return Promise.all([n.e(10),n.e(20)]).then(n.bind(null,"mvFa")).then((function(e){return e.UploaderPageModule}))}},{path:"type",loadChildren:function(){return n.e(9).then(n.bind(null,"To/f")).then((function(e){return e.VisitTypePageModule}))}}],S=((v=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u.Kb({type:v}),v.\u0275inj=u.Jb({factory:function(e){return new(e||v)},imports:[[a.j.forChild(y)],a.j]}),v),C=((m=_createClass((function e(){_classCallCheck(this,e)}))).\u0275mod=u.Kb({type:m}),m.\u0275inj=u.Jb({factory:function(e){return new(e||m)},imports:[[r.c,o.g,o.p,i.Z,S]]}),m)}}]);