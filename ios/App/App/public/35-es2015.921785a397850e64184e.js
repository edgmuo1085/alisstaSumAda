(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{SG8g:function(n,t,o){"use strict";o.r(t),o.d(t,"RecommendationPageModule",(function(){return p}));var e=o("ofXK"),i=o("3Pt+"),c=o("TEn/"),r=o("tyNb"),a=o("mrSG"),d=o("wd/R"),s=o("AC/E"),b=o("fXoL");function g(n,t){1&n&&b.Ob(0)}const m=function(n){return{recomendacion:n}};function l(n,t){if(1&n&&(b.Qb(0),b.Ac(1,g,1,0,"ng-container",27),b.Pb()),2&n){const n=t.$implicit;b.ec(2);const o=b.rc(13);b.Bb(1),b.mc("ngTemplateOutlet",o)("ngTemplateOutletContext",b.oc(2,m,n))}}function C(n,t){if(1&n){const n=b.Tb();b.Sb(0,"form",8),b.ac("ngSubmit",(function(){return b.tc(n),b.ec().save()})),b.Sb(1,"ion-card",9),b.Sb(2,"ion-card-header"),b.Sb(3,"ion-card-title"),b.Cc(4,"Datos del accidente"),b.Rb(),b.Rb(),b.Sb(5,"ion-card-content"),b.Sb(6,"ion-list",10),b.Sb(7,"ion-item"),b.Sb(8,"ion-label"),b.Cc(9,"N\xfamero siniestro"),b.Rb(),b.Nb(10,"ion-input",11),b.Rb(),b.Sb(11,"ion-item"),b.Sb(12,"ion-label",12),b.Cc(13,"N\xfamero de identificaci\xf3n"),b.Rb(),b.Nb(14,"ion-input",13),b.Rb(),b.Sb(15,"ion-item"),b.Sb(16,"ion-label",12),b.Cc(17,"Nombre trabajador"),b.Rb(),b.Nb(18,"ion-input",14),b.Rb(),b.Sb(19,"ion-item",15),b.Sb(20,"ion-label"),b.Cc(21,"Fecha de ocurrencia AT"),b.Rb(),b.Nb(22,"ion-input",16),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(23,"ion-card",17),b.Sb(24,"ion-card-header"),b.Sb(25,"ion-card-title"),b.Cc(26,"Descripci\xf3n de AT"),b.Rb(),b.Rb(),b.Sb(27,"ion-card-content"),b.Sb(28,"p",18),b.Cc(29),b.Rb(),b.Rb(),b.Rb(),b.Sb(30,"ion-card",17),b.Sb(31,"ion-card-content"),b.Sb(32,"ion-list",10),b.Sb(33,"ion-item",19),b.Sb(34,"ion-label"),b.Cc(35,"Fecha radicaci\xf3n investigaci\xf3n AT"),b.Rb(),b.Nb(36,"ion-input",20),b.Rb(),b.Sb(37,"ion-item",19),b.Sb(38,"ion-label"),b.Cc(39,"Fecha remisi\xf3n recomendaciones AT"),b.Rb(),b.Nb(40,"ion-input",21),b.Rb(),b.Sb(41,"ion-item",19),b.Sb(42,"ion-label"),b.Cc(43,"Fecha proyecta del seguimiento"),b.Rb(),b.Nb(44,"ion-input",22),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(45,"ion-card"),b.Sb(46,"ion-card-header"),b.Sb(47,"ion-card-title"),b.Cc(48,"Recomendaciones enviadas"),b.Rb(),b.Rb(),b.Sb(49,"ion-card-content"),b.Ac(50,l,2,4,"ng-container",23),b.Rb(),b.Rb(),b.Sb(51,"ion-card"),b.Sb(52,"ion-card-content"),b.Nb(53,"ion-textarea",24),b.Rb(),b.Rb(),b.Sb(54,"div",25),b.Sb(55,"ion-button",26),b.Cc(56,"Continuar"),b.Rb(),b.Rb(),b.Rb()}if(2&n){const n=b.ec();b.mc("formGroup",n.formGroup),b.Bb(29),b.Ec(" ",n.actividad.siniestro.Descripcion_AT," "),b.Bb(21),b.mc("ngForOf",n.actividad.siniestro.Recomendaciones)}}function M(n,t){if(1&n&&(b.Sb(0,"ion-button",36),b.Nb(1,"ion-checkbox",37),b.Rb()),2&n){const n=b.ec().recomendacion;b.mc("routerLink","./follow-up/"+n.Pk_Id_SiniestroRecomendaciones)}}function O(n,t){if(1&n&&(b.Sb(0,"ion-button",38),b.Nb(1,"ion-icon",39),b.Rb()),2&n){const n=b.ec().recomendacion;b.mc("routerLink","./follow-up/"+n.Pk_Id_SiniestroRecomendaciones)}}function P(n,t){if(1&n&&(b.Sb(0,"div",28),b.Sb(1,"div",29),b.Cc(2),b.Rb(),b.Sb(3,"div",30),b.Sb(4,"span",31),b.Cc(5,"Tipo"),b.Rb(),b.Sb(6,"ion-item",10),b.Sb(7,"ion-label"),b.Cc(8,"Fuente"),b.Rb(),b.Nb(9,"ion-checkbox",32),b.Rb(),b.Sb(10,"ion-item",10),b.Sb(11,"ion-label"),b.Cc(12,"Medio"),b.Rb(),b.Nb(13,"ion-checkbox",32),b.Rb(),b.Sb(14,"ion-item",10),b.Sb(15,"ion-label"),b.Cc(16,"Trabajo"),b.Rb(),b.Nb(17,"ion-checkbox",32),b.Rb(),b.Sb(18,"ion-item",33),b.Ac(19,M,2,1,"ion-button",34),b.Ac(20,O,2,1,"ion-button",35),b.Rb(),b.Rb(),b.Rb()),2&n){const n=t.recomendacion;b.Bb(2),b.Ec(" ",n.Recomendacion," "),b.Bb(7),b.mc("checked",n.tipoFuente),b.Bb(4),b.mc("checked",n.tipoMedio),b.Bb(4),b.mc("checked",n.tipoTrabajo),b.Bb(1),b.mc("ngSwitch",n.diligenciado),b.Bb(1),b.mc("ngSwitchCase",!0)}}const _=[{path:"",component:(()=>{class n{constructor(n,t,o,e){this.cacheService=n,this.route=t,this.router=o,this.alertController=e,this.COMMENTS_PATH="/u/execLog/pending-visits/visit-id/company-info/comments",this.RECOMMENDATION_PATH="/u/execLog/pending-visits/visit-id/recommendation"}ngOnInit(){}ionViewWillEnter(){this.establecerActividad(),this.initForm()}save(){return Object(a.a)(this,void 0,void 0,(function*(){this.actividad.siniestro.Recomendaciones.every(n=>n.diligenciado)&&!this.formGroup.invalid?(this.actividad.siniestro.Observaciones=this.formGroup.value.observaciones,this.next()):(yield this.alertController.create({header:"Datos incompletos",mode:"ios",message:"Debe completar todas las recomendaciones y a\xf1adir observaciones.",buttons:["OK"]})).present()}))}next(){const n=this.cacheService.activitiesSelectedForExec,t=+this.route.snapshot.params.activityId,o=n.findIndex(n=>n.id===t),e=n.find((n,t)=>t>o&&n.siniestro);this.router.navigateByUrl(e?`${this.RECOMMENDATION_PATH}/${e.id}`:this.COMMENTS_PATH)}establecerActividad(){const n=+this.route.snapshot.params.activityId,t=this.cacheService.activitiesSelectedForExec.find(t=>t.id===n);this.actividad=t}initForm(){const n=new i.c({value:this.actividad.siniestro.Id_Siniestro,disabled:!0}),t=new i.c({value:this.actividad.siniestro.Doc_Empleado,disabled:!0}),o=new i.c({value:`${this.actividad.siniestro.Primer_Nombre} ${this.actividad.siniestro.Primer_Apellido}`,disabled:!0}),e=d(this.actividad.siniestro.Fecha_AT);let c=e.isBefore(d().subtract(100,"years"));const r=new i.c({value:c?"Sin informaci\xf3n":e.format("DD/MM/YYYY"),disabled:!0}),a=d(this.actividad.siniestro.FechaRadicacionInvestigacionEmpresa);c=a.isBefore(d().subtract(100,"years"));const s=new i.c({value:c?"Sin informaci\xf3n":a.format("DD/MM/YYYY"),disabled:!0}),b=d(this.actividad.siniestro.FechaRemisionRecomendacionEmpresa);c=b.isBefore(d().subtract(100,"years"));const g=new i.c({value:c?"Sin informaci\xf3n":b.format("DD/MM/YYYY"),disabled:!0}),m=d(this.actividad.siniestro.fechaProyectadaSeguimientoEmpresa);c=m.isBefore(d().subtract(100,"years"));const l=new i.c({value:c?"Sin informaci\xf3n":m.format("DD/MM/YYYY"),disabled:!0}),C=new i.c(this.actividad.siniestro.Observaciones,[i.q.required]);this.formGroup=new i.e({numeroSiniestro:n,numeroIdentificacion:t,nombreTrabajador:o,fechaOcurrencia:r,fechaRadicacion:s,fechaRemision:g,fechaProyectada:l,observaciones:C})}}return n.\u0275fac=function(t){return new(t||n)(b.Mb(s.a),b.Mb(r.a),b.Mb(r.g),b.Mb(c.a))},n.\u0275cmp=b.Gb({type:n,selectors:[["app-recommendation"]],decls:14,vars:1,consts:[["size","2"],["color","tertiary"],["slot","start"],["color","primary","mode","md","defaultHref","/"],["size","10"],[1,"titulo"],[3,"formGroup","ngSubmit",4,"ngIf"],["recommendation",""],[3,"formGroup","ngSubmit"],[1,"background-secondary"],["lines","none"],["formControlName","numeroSiniestro",1,"ion-margin-start"],["position","stacked"],["formControlName","numeroIdentificacion",1,"ion-margin-top"],["formControlName","nombreTrabajador",1,"ion-margin-top"],[1,"ion-margin-top","fix-label"],["formControlName","fechaOcurrencia",1,"ion-margin-start"],[1,"background-primary"],[1,"ion-text-justify"],[1,"fix-label"],["formControlName","fechaRadicacion",1,"ion-margin-start"],["formControlName","fechaRemision",1,"ion-margin-start"],["formControlName","fechaProyectada",1,"ion-margin-start"],[4,"ngFor","ngForOf"],["placeholder","Observaciones","formControlName","observaciones"],[1,"text-center","ion-margin"],["type","submit"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"recommendation"],[1,"recommendation-text"],[1,"recommendation-type"],[1,"label"],["slot","start","disabled","true",3,"checked"],["lines","none",1,"actions",3,"ngSwitch"],[3,"routerLink",4,"ngSwitchCase"],["class","arrowIcon",3,"routerLink",4,"ngSwitchDefault"],[3,"routerLink"],["color","success","checked","true","disabled","true"],[1,"arrowIcon",3,"routerLink"],["slot","icon-only","name","arrow-forward-circle-outline"]],template:function(n,t){1&n&&(b.Sb(0,"ion-header"),b.Sb(1,"ion-grid"),b.Sb(2,"ion-row"),b.Sb(3,"ion-col",0),b.Sb(4,"ion-toolbar",1),b.Sb(5,"ion-buttons",2),b.Nb(6,"ion-back-button",3),b.Rb(),b.Rb(),b.Rb(),b.Sb(7,"ion-col",4),b.Sb(8,"div",5),b.Cc(9,"Seguimiento a Recomendaciones AT"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(10,"ion-content"),b.Ac(11,C,57,3,"form",6),b.Rb(),b.Ac(12,P,21,6,"ng-template",null,7,b.Bc)),2&n&&(b.Bb(11),b.mc("ngIf",t.formGroup))},directives:[c.w,c.v,c.L,c.p,c.Y,c.i,c.e,c.f,c.q,e.l,i.r,i.m,i.f,c.j,c.l,c.n,c.k,c.G,c.A,c.F,c.z,c.jb,i.l,i.d,e.k,c.U,c.h,e.q,c.o,c.b,e.n,e.o,e.p,c.hb,r.h,c.x],styles:["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;background:#95a6b1}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-size:1rem;padding:0;position:relative;top:50%;transform:translateY(-50%)}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-card.background-primary[_ngcontent-%COMP%]{--background:var(--ion-color-primary);--color:var(--ion-color-primary-contrast)}ion-content[_ngcontent-%COMP%]   ion-card.background-primary[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--background:var(--ion-color-primary-contrast)}ion-content[_ngcontent-%COMP%]   ion-card.background-secondary[_ngcontent-%COMP%]{--background:var(--ion-color-secondary);--color:var(--ion-color-secondary-contrast)}ion-content[_ngcontent-%COMP%]   ion-card.background-secondary[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--background:var(--ion-color-secondary-contrast)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{text-align:center;font-size:1rem;text-transform:uppercase;color:inherit}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background-color:transparent}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--background:transparent;--color:inherit;--highlight-height:none}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.fix-label[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{max-width:65%;white-space:break-spaces}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.fix-label[_ngcontent-%COMP%]   ion-datetime[_ngcontent-%COMP%]{padding:.5rem;font-size:.9rem;color:initial;border-radius:.5rem;background-color:var(--ion-color-tertiary);opacity:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-transform:capitalize;opacity:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[position=stacked][_ngcontent-%COMP%]{width:100%;transform:translateY(50%);text-align:center}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:.5rem;--color:#000;--padding-top:8px;--padding-bottom:8px;--padding-start:8px;--padding-end:8px;font-size:.8rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[aria-disabled=true][_ngcontent-%COMP%]{--background:var(--ion-color-tertiary)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[aria-disabled=true][_ngcontent-%COMP%]  .native-input{opacity:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1.5rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-text[_ngcontent-%COMP%]{height:150px;overflow:scroll;border-radius:.5rem;border:1px solid var(--ion-color-tertiary-shade);padding:10px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]{display:flex;justify-content:space-around;font-size:.7rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{text-transform:uppercase;font-weight:700;align-self:center}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{font-size:inherit;--padding-start:5px;--inner-padding-end:0}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item.actions[_ngcontent-%COMP%]{pointer-events:auto}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{opacity:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox[_ngcontent-%COMP%]{margin:0 5px 0 0}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-checkbox.checkbox-disabled[_ngcontent-%COMP%]{opacity:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .recommendation[_ngcontent-%COMP%]   .recommendation-type[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--background:transparent;--box-shadow:none;--color:var(--ion-color-primary)}ion-content[_ngcontent-%COMP%]   .arrowIcon[_ngcontent-%COMP%]{font-size:1rem}"]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({factory:function(t){return new(t||n)},imports:[[r.j.forChild(_)],r.j]}),n})(),p=(()=>{class n{}return n.\u0275mod=b.Kb({type:n}),n.\u0275inj=b.Jb({factory:function(t){return new(t||n)},imports:[[e.c,i.g,i.p,c.Z,u]]}),n})()}}]);