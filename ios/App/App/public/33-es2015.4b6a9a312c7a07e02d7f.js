(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{JTjT:function(t,n,i){"use strict";i.d(n,"a",(function(){return r}));var o=i("AytR"),e=i("fXoL"),s=i("tk/3");let r=(()=>{class t{constructor(t){this.http=t,this.API_SAVE_ACTA_ASESORIA=o.a.API_SAVE_ACTA_ASESORIA,this.API_UPLOAD_FILE_ACTA_ASESORIA=o.a.API_UPLOAD_FILE_ACTA_ASESORIA}saveActaAsesoria(t){const n=t;return console.log(n),this.http.post(this.API_SAVE_ACTA_ASESORIA,n)}uploadFileActaAsesoria(t){return this.http.post(this.API_UPLOAD_FILE_ACTA_ASESORIA,t)}}return t.\u0275fac=function(n){return new(n||t)(e.Wb(s.a))},t.\u0275prov=e.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},cjBl:function(t,n,i){"use strict";i.r(n),i.d(n,"TasksToSendPageModule",(function(){return v}));var o=i("ofXK"),e=i("3Pt+"),s=i("TEn/"),r=i("tyNb"),c=i("mrSG"),a=i("JTjT"),d=i("AC/E"),b=i("7AKq"),l=i("fXoL"),h=i("e8h1");function g(t,n){1&t&&(l.Sb(0,"ion-slides",12),l.Sb(1,"ion-slide"),l.Sb(2,"ion-grid"),l.Sb(3,"ion-row"),l.Sb(4,"ion-col",13),l.Sb(5,"div",14),l.Nb(6,"img",15),l.Rb(),l.Rb(),l.Rb(),l.Sb(7,"ion-row"),l.Sb(8,"ion-col",13),l.Sb(9,"strong"),l.Sb(10,"h1",16),l.Cc(11," No tiene actas de asesor\xeda por enviar. "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb())}function u(t,n){if(1&t){const t=l.Tb();l.Sb(0,"ion-item",17),l.Sb(1,"ion-grid"),l.Sb(2,"ion-row"),l.Sb(3,"ion-col",13),l.Sb(4,"ion-row"),l.Sb(5,"ion-col",13),l.Sb(6,"p"),l.Sb(7,"strong"),l.Cc(8,"Raz\xf3n Social"),l.Rb(),l.Cc(9),l.Rb(),l.Rb(),l.Rb(),l.Sb(10,"ion-row"),l.Sb(11,"ion-col",13),l.Sb(12,"p"),l.Sb(13,"strong"),l.Cc(14,"Identificaci\xf3n Empresa"),l.Rb(),l.Cc(15),l.Rb(),l.Rb(),l.Rb(),l.Sb(16,"ion-row"),l.Sb(17,"ion-col",13),l.Sb(18,"p"),l.Sb(19,"strong"),l.Cc(20,"Fecha de creaci\xf3n"),l.Rb(),l.Cc(21),l.fc(22,"date"),l.Rb(),l.Rb(),l.Rb(),l.Sb(23,"ion-row"),l.Sb(24,"ion-col",13),l.Sb(25,"ion-item",18),l.Sb(26,"p"),l.Sb(27,"strong"),l.Cc(28,"Seleccionar Acta de Asesor\xeda"),l.Rb(),l.Rb(),l.Sb(29,"ion-checkbox",19),l.ac("ionChange",(function(i){l.tc(t);const o=n.$implicit;return l.ec().actaSeleccionada(i,o)})),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&t){const t=n.$implicit;l.Bb(9),l.Ec(" ",t.infoCompany.nombre,""),l.Bb(6),l.Fc(" ",t.infoCompany.tipoDocumento," - ",t.infoCompany.numeroDocumento," "),l.Bb(6),l.Ec(" ",l.hc(22,4,t.infoSurveyQR.dateCreatedSurvey,"medium")," ")}}function S(t,n){if(1&t){const t=l.Tb();l.Sb(0,"ion-col",20),l.Sb(1,"img",21),l.ac("click",(function(){return l.tc(t),l.ec().sendTasks()})),l.Rb(),l.Rb()}}const p=[{path:"",component:(()=>{class t{constructor(t,n,i,o,e,s,r){this.storage=t,this.toastController=n,this.loadingCtlr=i,this.cacheService=o,this.alertController=e,this.advisoryTopicService=s,this.net=r,this.listAdvisory=[],this.actas=[]}ngOnInit(){this.getInfoUser(),this.getAdvisoryActsWithoutSending()}getInfoUser(){return Object(c.a)(this,void 0,void 0,(function*(){this.infoUserARL=yield this.storage.get("sesion")}))}search(t){this.textoBuscar=t.detail.value}getAdvisoryActsWithoutSending(){return Object(c.a)(this,void 0,void 0,(function*(){this.listAdvisory=yield this.storage.get("actasAsesoriaSinInternet")}))}actaSeleccionada(t,n){if(t.detail.checked)this.actas.push(n);else{const t=this.actas.findIndex(t=>t===n);if(t<0)return;this.actas.splice(t,1)}}presentToast(){return Object(c.a)(this,void 0,void 0,(function*(){(yield this.toastController.create({message:"Verifique su conexi\xf3n a internet.",duration:2e3})).present()}))}validateNetwork(){const t=this.net.getNetworkStatus();return t===b.a.Offline&&this.presentToast(),t===b.a.Online}presentLoading(){return Object(c.a)(this,void 0,void 0,(function*(){return this.loading=yield this.loadingCtlr.create({mode:"ios",message:"Cargando"}),this.loading.present()}))}sendTasks(){return Object(c.a)(this,void 0,void 0,(function*(){if(!this.validateNetwork())return void this.notification("Atenci\xf3n","Compruebe su conexi\xf3n a internet.");const t=this.actas.length,n=[];yield this.presentLoading();for(let i=0;i<this.actas.length;i++){const o=this.actas[i];(yield this.toastController.create({message:`Enviando acta ${i+1} de ${t}...`,duration:2e3})).present();const e=this.buildActa(o),s=yield this.sendTask(e,o.files);this.cacheService.limpiarVariablesAsesoria(),s&&n.push(o)}this.loading.dismiss(),n.forEach(t=>this.actaSeleccionada({detail:{checked:!1}},t)),this.listAdvisory=this.listAdvisory.filter(t=>void 0===n.find(n=>n===t)),this.storage.set("actasAsesoriaSinInternet",this.listAdvisory),this.notification("Atenci\xf3n","Los documentos seleccionados se enviaron satisfactoriamente a la web.")}))}sendTask(t,n=[]){return Object(c.a)(this,void 0,void 0,(function*(){let i,o=yield this.advisoryTopicService.saveActaAsesoria(t).toPromise();if(o=o.split(";"),"true"===o[0]&&"-1"!==o[1]){for(const t of n){const n=Object.assign(Object.assign({},t),{UidActaAsesoria:+o[1]});yield this.advisoryTopicService.uploadFileActaAsesoria(n).toPromise()}i=!0}else this.notification("Error","Ocurrio un error y no se pudo crear el acta de asesor\xeda"),i=!1;return i}))}notification(t,n){return Object(c.a)(this,void 0,void 0,(function*(){const i=yield this.alertController.create({header:t,backdropDismiss:!1,mode:"ios",message:n,buttons:["ACEPTAR"]});i.onDidDismiss(),yield i.present()}))}buildActa(t){return this.cacheService.saveSurveyARL(t.infoSurveyARL),this.cacheService.saveSurveyQR(t.infoSurveyQR),this.cacheService.saveTypeAdvice(t.typeAdvisory),this.cacheService.saveInfoCompany(t.infoCompany),this.cacheService.saveActivities(t.activities),this.cacheService.saveCommentsAdvice(t.commentsAdvice),this.cacheService.createActaAsesoria(this.infoUserARL.idProveedor)}}return t.\u0275fac=function(n){return new(n||t)(l.Mb(h.b),l.Mb(s.kb),l.Mb(s.bb),l.Mb(d.a),l.Mb(s.a),l.Mb(a.a),l.Mb(b.b))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-tasks-to-send"]],decls:20,vars:3,consts:[["size","2"],["color","tertiary"],["slot","start"],["color","primary","mode","md","defaultHref","/"],["size","10"],[1,"titulo"],[1,"ion-padding"],["animated","","color","primary","placeholder","Buscar",3,"ionChange"],["mode","ios",4,"ngIf"],["color","secondary",4,"ngFor","ngForOf"],["size","3"],["size","6",4,"ngIf"],["mode","ios"],["size","12"],[1,"ion-text-center"],["src","../../../assets/icon/icono_observaciones.svg","alt","",1,"imgIcono"],[1,"tituloSlide"],["color","secondary"],["lines","none"],["slot","end","color","primary",3,"ionChange"],["size","6"],["src","../../../assets/icon/boton_enviar.png","alt","enviar",1,"btnEnviar",3,"click"]],template:function(t,n){1&t&&(l.Sb(0,"ion-header"),l.Sb(1,"ion-grid"),l.Sb(2,"ion-row"),l.Sb(3,"ion-col",0),l.Sb(4,"ion-toolbar",1),l.Sb(5,"ion-buttons",2),l.Nb(6,"ion-back-button",3),l.Rb(),l.Rb(),l.Rb(),l.Sb(7,"ion-col",4),l.Sb(8,"ion-title",5),l.Cc(9,"Actas por enviar"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(10,"ion-content",6),l.Sb(11,"ion-searchbar",7),l.ac("ionChange",(function(t){return n.search(t)})),l.Rb(),l.Ac(12,g,12,0,"ion-slides",8),l.Sb(13,"ion-list"),l.Ac(14,u,30,7,"ion-item",9),l.Rb(),l.Sb(15,"ion-grid"),l.Sb(16,"ion-row"),l.Nb(17,"ion-col",10),l.Ac(18,S,2,0,"ion-col",11),l.Nb(19,"ion-col",10),l.Rb(),l.Rb(),l.Rb()),2&t&&(l.Bb(12),l.mc("ngIf",!(null!=n.listAdvisory&&n.listAdvisory.length)),l.Bb(2),l.mc("ngForOf",n.listAdvisory),l.Bb(4),l.mc("ngIf",n.actas.length))},directives:[s.w,s.v,s.L,s.p,s.Y,s.i,s.e,s.f,s.W,s.q,s.M,s.jb,o.l,s.G,o.k,s.Q,s.P,s.A,s.o,s.b],pipes:[o.e],styles:["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;background:#95a6b1}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{--border-radius:30px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{height:80%;border:1px solid #344b56;border-radius:50px;margin-top:40px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloSlide[_ngcontent-%COMP%]{margin-top:-30px;font-weight:700;color:#344b56}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .imgIcono[_ngcontent-%COMP%]{width:auto!important;max-width:70%!important;height:auto!important;max-height:70%!important}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:10px;border-radius:15px}.titulo[_ngcontent-%COMP%]{width:100%!important;font-size:25px!important;padding:0;text-align:left;margin-top:10px}"]}),t})()}];let A=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(n){return new(n||t)},imports:[[r.j.forChild(p)],r.j]}),t})();var f=i("iTUp");let v=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(n){return new(n||t)},imports:[[o.c,e.g,s.Z,f.a,A]]}),t})()}}]);