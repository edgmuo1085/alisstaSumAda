(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{UoYK:function(n,t,o){"use strict";o.r(t),o.d(t,"AboutPageModule",(function(){return d}));var e=o("ofXK"),i=o("3Pt+"),r=o("mrSG"),c=o("C6fG"),s=o("fXoL"),a=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}Object(r.c)(t,n),t.prototype.getAppName=function(){return Object(c.c)(this,"getAppName",{},arguments)},t.prototype.getPackageName=function(){return Object(c.c)(this,"getPackageName",{},arguments)},t.prototype.getVersionCode=function(){return Object(c.c)(this,"getVersionCode",{},arguments)},t.prototype.getVersionNumber=function(){return Object(c.c)(this,"getVersionNumber",{},arguments)},t.pluginName="AppVersion",t.plugin="cordova-plugin-app-version",t.pluginRef="cordova.getAppVersion",t.repo="https://github.com/whiteoctober/cordova-plugin-app-version",t.platforms=["Android","iOS","Windows"],t.\u0275fac=function(n){return o(n||t)},t.\u0275prov=s.Ib({token:t,factory:function(n){return t.\u0275fac(n)}});var o=s.Ub(t);return t}(c.a),b=o("TEn/"),p=o("tyNb"),g=o("i17O");const l=[{path:"",component:(()=>{class n{constructor(n,t){this.appVersion=n,this.navbarService=t,this.appVersion.getVersionNumber().then(n=>this.versionNumber=n)}ngOnInit(){this.navbarService.setVisibility(!1)}ngOnDestroy(){this.navbarService.setVisibility(!0)}}return n.\u0275fac=function(t){return new(t||n)(s.Mb(a),s.Mb(g.a))},n.\u0275cmp=s.Gb({type:n,selectors:[["app-about"]],decls:23,vars:1,consts:[[1,"backgroundContent"],["src","../../../../assets/logos/logo_alissta.png","alt","logoAlista",1,"imgTop"],["size","12",1,"titulo"],["vertical","center","horizontal","center","slot","fixed","routerLink","/u/settings"],["id","btnBack","src","../../../assets/icon/icono_tareas_enviar.svg","alt","atras"],[1,"labelProducto"],["size","3"],["size","6"],["color","primary"],["src","../../../../assets/logos/logo_positiva.png","alt","",1,"imgFooter"]],template:function(n,t){1&n&&(s.Sb(0,"ion-content",0),s.Sb(1,"ion-slides"),s.Sb(2,"ion-slide"),s.Sb(3,"ion-card"),s.Sb(4,"ion-card-header"),s.Nb(5,"img",1),s.Rb(),s.Sb(6,"ion-card-content"),s.Sb(7,"ion-grid"),s.Sb(8,"ion-row"),s.Sb(9,"ion-col",2),s.Sb(10,"ion-label"),s.Cc(11),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(12,"ion-fab",3),s.Sb(13,"ion-fab-button"),s.Nb(14,"img",4),s.Rb(),s.Rb(),s.Sb(15,"ion-grid",5),s.Sb(16,"ion-row"),s.Nb(17,"ion-col",6),s.Sb(18,"ion-col",7),s.Sb(19,"ion-label",8),s.Cc(20," Un producto de "),s.Rb(),s.Rb(),s.Nb(21,"ion-col",6),s.Rb(),s.Rb(),s.Nb(22,"img",9),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&n&&(s.Bb(11),s.Ec("Versi\xf3n ",t.versionNumber,""))},directives:[b.q,b.Q,b.P,b.j,b.l,b.k,b.v,b.L,b.p,b.F,b.s,b.hb,p.h,b.t],styles:["ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]{margin-top:110px}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]{transform:translate(8px,-30px);outline:none}ion-content[_ngcontent-%COMP%]   ion-slides[_ngcontent-%COMP%]   ion-slide[_ngcontent-%COMP%]   ion-fab[_ngcontent-%COMP%]   ion-fab-button[_ngcontent-%COMP%]{transform:rotate(180deg);--background:none;--box-shadow:none}.imgTop[_ngcontent-%COMP%]{margin-top:50px}.titulo[_ngcontent-%COMP%]{text-align:center;font-size:20px;font-weight:700}.labelProducto[_ngcontent-%COMP%]{transform:translate(10px,80px);font-size:11px}.imgFooter[_ngcontent-%COMP%]{width:58%;margin-top:60px}"]}),n})()}];let u=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(t){return new(t||n)},imports:[[p.j.forChild(l)],p.j]}),n})(),d=(()=>{class n{}return n.\u0275mod=s.Kb({type:n}),n.\u0275inj=s.Jb({factory:function(t){return new(t||n)},providers:[a],imports:[[e.c,i.g,b.Z,u]]}),n})()}}]);