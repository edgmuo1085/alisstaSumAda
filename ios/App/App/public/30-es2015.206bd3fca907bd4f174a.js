(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{ePTs:function(n,o,e){"use strict";e.r(o),e.d(o,"SummaryPageModule",(function(){return N}));var t=e("ofXK"),i=e("3Pt+"),c=e("TEn/"),a=e("iTUp"),r=e("tyNb"),l=e("mrSG"),b=e("5qc1"),s=e("i17O"),m=e("fXoL"),d=e("GeKi");function p(n,o){if(1&n&&(m.Sb(0,"ion-item"),m.Sb(1,"ion-label"),m.Cc(2),m.Rb(),m.Nb(3,"ion-radio",28),m.Rb()),2&n){const n=o.$implicit;m.Bb(2),m.Dc(n.label),m.Bb(1),m.mc("value",n.value)}}function u(n,o){if(1&n&&(m.Sb(0,"ion-select-option",29),m.Cc(1),m.Rb()),2&n){const n=o.$implicit;m.mc("value",n),m.Bb(1),m.Ec(" ",n.Nombre_Departamento," ")}}function C(n,o){if(1&n&&(m.Sb(0,"ion-select-option",29),m.Cc(1),m.Rb()),2&n){const n=o.$implicit;m.mc("value",n),m.Bb(1),m.Ec(" ",n.NombreMunicipio," ")}}function S(n,o){if(1&n&&(m.Sb(0,"ion-select-option",29),m.Cc(1),m.Rb()),2&n){const n=o.$implicit;m.mc("value",n),m.Bb(1),m.Ec(" ",n.label," ")}}function g(n,o){if(1&n&&(m.Sb(0,"ion-select-option",29),m.Cc(1),m.Rb()),2&n){const n=o.$implicit;m.mc("value",n),m.Bb(1),m.Ec(" ",n.label," ")}}function f(n,o){if(1&n&&(m.Sb(0,"ion-select-option",29),m.Cc(1),m.Rb()),2&n){const n=o.$implicit;m.mc("value",n),m.Bb(1),m.Ec(" ",n.label," ")}}function _(n,o){1&n&&m.Nb(0,"ion-item-divider")}function P(n,o){if(1&n&&(m.Qb(0),m.Sb(1,"ion-item",5),m.Sb(2,"ion-label",6),m.Cc(3,"Papel/Representaci\xf3n"),m.Rb(),m.Sb(4,"ion-select",31),m.Ac(5,S,2,2,"ion-select-option",14),m.Rb(),m.Rb(),m.Sb(6,"ion-item",5),m.Sb(7,"ion-label",6),m.Cc(8,"Tipo Documento"),m.Rb(),m.Sb(9,"ion-select",31),m.Ac(10,g,2,2,"ion-select-option",14),m.Rb(),m.Rb(),m.Sb(11,"ion-item",5),m.Sb(12,"ion-label",6),m.Cc(13,"N\xfamero Documento"),m.Rb(),m.Nb(14,"ion-input",32),m.Rb(),m.Sb(15,"ion-item",5),m.Sb(16,"ion-label",6),m.Cc(17,"Primer Nombre"),m.Rb(),m.Nb(18,"ion-input",32),m.Rb(),m.Sb(19,"ion-item",5),m.Sb(20,"ion-label",6),m.Cc(21,"Segundo Nombre"),m.Rb(),m.Nb(22,"ion-input",32),m.Rb(),m.Sb(23,"ion-item",5),m.Sb(24,"ion-label",6),m.Cc(25,"Primer Apellido"),m.Rb(),m.Nb(26,"ion-input",32),m.Rb(),m.Sb(27,"ion-item",5),m.Sb(28,"ion-label",6),m.Cc(29,"Segundo Apellido"),m.Rb(),m.Nb(30,"ion-input",32),m.Rb(),m.Sb(31,"ion-item",5),m.Sb(32,"ion-label",6),m.Cc(33,"Sexo"),m.Rb(),m.Sb(34,"ion-select",31),m.Ac(35,f,2,2,"ion-select-option",14),m.Rb(),m.Rb(),m.Sb(36,"ion-item",5),m.Sb(37,"ion-label",6),m.Cc(38,"Email Notificaci\xf3n"),m.Rb(),m.Nb(39,"ion-input",32),m.Rb(),m.Sb(40,"ion-item",5),m.Sb(41,"ion-label",6),m.Cc(42,"Celular"),m.Rb(),m.Nb(43,"ion-input",32),m.Rb(),m.Sb(44,"ion-item",5),m.Sb(45,"ion-label",6),m.Cc(46,"Tel\xe9fono Notificaci\xf3n"),m.Rb(),m.Nb(47,"ion-input",32),m.Rb(),m.Ac(48,_,1,0,"ion-item-divider",24),m.Pb()),2&n){const n=o.$implicit,e=o.last,t=m.ec(3);m.Bb(4),m.mc("formControlName","representacion_"+n),m.Bb(1),m.mc("ngForOf",t.TIPOS_REPRESENTACION),m.Bb(4),m.mc("formControlName","tipoDocumento_"+n),m.Bb(1),m.mc("ngForOf",t.TIPOS_DOCUMENTO),m.Bb(4),m.mc("formControlName","numeroDocumento_"+n),m.Bb(4),m.mc("formControlName","primerNombre_"+n),m.Bb(4),m.mc("formControlName","segundoNombre_"+n),m.Bb(4),m.mc("formControlName","primerApellido_"+n),m.Bb(4),m.mc("formControlName","segundoApellido_"+n),m.Bb(4),m.mc("formControlName","sexo_"+n),m.Bb(1),m.mc("ngForOf",t.TIPOS_SEXO),m.Bb(4),m.mc("formControlName","correo_"+n),m.Bb(4),m.mc("formControlName","celular_"+n),m.Bb(4),m.mc("formControlName","telefono_"+n),m.Bb(1),m.mc("ngIf",!e)}}function R(n,o){if(1&n&&(m.Qb(0),m.Sb(1,"h3",30),m.Cc(2,"Datos Personas Contacto Empresa"),m.Rb(),m.Ac(3,P,49,15,"ng-container",12),m.Pb()),2&n){const n=m.ec(2);m.Bb(3),m.mc("ngForOf",n.contacts)}}function O(n,o){if(1&n){const n=m.Tb();m.Sb(0,"form",2),m.ac("ngSubmit",(function(){return m.tc(n),m.ec().next()})),m.Sb(1,"ion-card",3),m.Sb(2,"ion-card-content"),m.Sb(3,"ion-list",4),m.Sb(4,"ion-item",5),m.Sb(5,"ion-label",6),m.Cc(6,"TD/N\xfamero Identificaci\xf3n Empresa"),m.Rb(),m.Nb(7,"ion-input",7),m.Rb(),m.Sb(8,"ion-item",5),m.Sb(9,"ion-label",6),m.Cc(10,"Raz\xf3n Social Empresa"),m.Rb(),m.Nb(11,"ion-input",8),m.Rb(),m.Sb(12,"ion-item",5),m.Sb(13,"ion-label",6),m.Cc(14,"ID Sede"),m.Rb(),m.Nb(15,"ion-input",9),m.Rb(),m.Sb(16,"ion-item",5),m.Sb(17,"ion-label",6),m.Cc(18,"Direcci\xf3n Empresa Sede Principal"),m.Rb(),m.Nb(19,"ion-input",10),m.Rb(),m.Sb(20,"ion-item",5),m.Sb(21,"ion-label",6),m.Cc(22,"Indicador de Zona"),m.Rb(),m.Sb(23,"ion-radio-group",11),m.Ac(24,p,4,2,"ion-item",12),m.Rb(),m.Rb(),m.Sb(25,"ion-item",5),m.Sb(26,"ion-label",6),m.Cc(27,"Departamento Sede Principal"),m.Rb(),m.Sb(28,"ion-select",13),m.Ac(29,u,2,2,"ion-select-option",14),m.Rb(),m.Rb(),m.Sb(30,"ion-item",5),m.Sb(31,"ion-label",6),m.Cc(32,"Municipio Sede Principal"),m.Rb(),m.Sb(33,"ion-select",15),m.Ac(34,C,2,2,"ion-select-option",14),m.fc(35,"municipiosFilter"),m.Rb(),m.Rb(),m.Sb(36,"ion-item",5),m.Sb(37,"ion-label",6),m.Cc(38,"Estado Sede"),m.Rb(),m.Nb(39,"ion-input",9),m.Rb(),m.Sb(40,"ion-item",5),m.Sb(41,"ion-label",6),m.Cc(42,"C\xf3digo/Nombre AE Principal"),m.Rb(),m.Nb(43,"ion-input",16),m.Rb(),m.Sb(44,"ion-item",5),m.Sb(45,"ion-label",6),m.Cc(46,"Sector Econ\xf3mico"),m.Rb(),m.Nb(47,"ion-input",17),m.Rb(),m.Sb(48,"ion-item",5),m.Sb(49,"ion-label",6),m.Cc(50,"Celular Contacto"),m.Rb(),m.Nb(51,"ion-input",18),m.Rb(),m.Sb(52,"ion-item",5),m.Sb(53,"ion-label",6),m.Cc(54,"Tel\xe9fono Notificaci\xf3n"),m.Rb(),m.Nb(55,"ion-input",19),m.Rb(),m.Sb(56,"ion-item",5),m.Sb(57,"ion-label",6),m.Cc(58,"Correo Notificaci\xf3n"),m.Rb(),m.Nb(59,"ion-input",20),m.Rb(),m.Sb(60,"ion-item",5),m.Sb(61,"ion-label",6),m.Cc(62,"C\xf3digo Postal"),m.Rb(),m.Nb(63,"ion-input",21),m.Rb(),m.Sb(64,"ion-item",5),m.Sb(65,"ion-label",6),m.Cc(66,"TD/No. Identificaci\xf3n Rpte. Legal"),m.Rb(),m.Nb(67,"ion-input",22),m.Rb(),m.Sb(68,"ion-item",5),m.Sb(69,"ion-label",6),m.Cc(70,"Nombre Rpte. Legal"),m.Rb(),m.Nb(71,"ion-input",23),m.Rb(),m.Ac(72,R,4,1,"ng-container",24),m.Rb(),m.Sb(73,"div",25),m.Sb(74,"ion-button",26),m.ac("click",(function(){return m.tc(n),m.ec().cancel()})),m.Cc(75,"Editar"),m.Rb(),m.Sb(76,"ion-button",27),m.Cc(77,"Aceptar"),m.Rb(),m.Rb(),m.Rb(),m.Rb(),m.Rb()}if(2&n){const n=m.ec();m.mc("formGroup",n.formGroup),m.Bb(24),m.mc("ngForOf",n.TIPOS_ZONA),m.Bb(4),m.mc("compareWith",n.compareWith("departamento")),m.Bb(1),m.mc("ngForOf",n.departamentos),m.Bb(4),m.mc("compareWith",n.compareWith("municipio")),m.Bb(1),m.mc("ngForOf",m.hc(35,7,n.municipios,n.formGroup.controls.departamentoSede.value)),m.Bb(38),m.mc("ngIf",n.contacts.length)}}const v=[{path:"",component:(()=>{class n{constructor(n,o,e,t){this.navbarService=n,this.route=o,this.companiesService=e,this.router=t,this.TIPOS_ZONA=[{label:"Urbana",value:"U"},{label:"Rural",value:"R"}],this.TIPOS_REPRESENTACION=[{label:"Representante Legal",value:"Representante Legal"},{label:"Reponsable SG-SST",value:"Reponsable SG-SST"},{label:"Talento Humano",value:"Talento Humano"}],this.TIPOS_DOCUMENTO=[{label:"CC",value:"CC"},{label:"CE",value:"CE"},{label:"PA",value:"PA"},{label:"PE",value:"PE"}],this.TIPOS_SEXO=[{label:"Masculino",value:"Masculino"},{label:"Femenino",value:"Femenino"}]}ionViewWillEnter(){this.navbarService.setVisibility(!1),this.getCompany()}ionViewWillLeave(){this.navbarService.setVisibility(!0)}next(){this.router.navigate(["../../../signature"],{relativeTo:this.route})}cancel(){this.router.navigate(["/u/companies/list/"+this.route.snapshot.params.id],{replaceUrl:!0})}compareWith(n){const o="departamento"===n?"Pk_Id_Departamento":"IdMunicipio";return(n,e)=>n&&e?n[o]===e[o]:n===e}getCompany(){return Object(l.a)(this,void 0,void 0,(function*(){const n=+this.route.snapshot.params.id;try{this.company=yield this.companiesService.prepareCompany(n)}catch(o){this.company=this.companiesService.company}this.company?(this.departamentos=yield this.companiesService.departamentos,this.municipios=yield this.companiesService.municipios,this.initForm()):this.cancel()}))}initForm(){var n;const o=new i.c({value:`${this.company.str_Sigla_Documento} ${this.company.strNumeroDcto}`,disabled:!0}),e=new i.c({value:this.company.strRazonSocial,disabled:!0}),t=new i.c({value:this.company.eDSedesActualizadas.strNombreSede,disabled:!0}),c=new i.c({value:this.company.strDireccion,disabled:!0}),a=new i.c({value:this.company.eDSedesActualizadas.srtIndicadorZona,disabled:!0}),r=new i.c({value:{Pk_Id_Departamento:this.company.eDSedesActualizadas.Fk_Id_Departamento,Nombre_Departamento:this.company.eDSedesActualizadas.Nombre_Departamento_Sede},disabled:!0}),l=new i.c({value:{IdMunicipio:this.company.eDSedesActualizadas.Fk_Id_Municipio,NombreMunicipio:this.company.eDSedesActualizadas.Nombre_Municipio_Sede},disabled:!0}),b=new i.c({value:this.company.eDSedesActualizadas.strNombreSede,disabled:!0}),s=new i.c({value:`${this.company.strCodigoActividadEconomica} ${this.company.strActividadEconomicaNombre}`,disabled:!0}),m=new i.c({value:this.company.strDescripcionSectorEconomico,disabled:!0}),d=new i.c({value:this.company.strCelular,disabled:!0}),p=new i.c({value:this.company.strTelefono,disabled:!0}),u=new i.c({value:this.company.strCorreoElectronico,disabled:!0}),C=new i.c({value:this.company.eDSedesActualizadas.strCodigoPostal,disabled:!0}),S=new i.c({value:`${this.company.strSiglaRepresentanteLegal} ${this.company.strNumeroDcto_Representant_Legal}`,disabled:!0}),g=new i.c({value:this.company.strNombre_Representant_Legal,disabled:!0}),f=new i.e({identificacionEmpresa:o,razonSocial:e,idSede:t,direccion:c,indicadorZona:a,departamentoSede:r,municipioSede:l,estadoSede:b,actividadEconomica:s,sectorEconomico:m,celular:d,telefonoNotificacion:p,correo:u,codigoPostal:C,identificacionRepresentante:S,representanteLegal:g}),_=null!==(n=this.company.listaPersonasContacto)&&void 0!==n?n:[];_.forEach((n,o)=>{const e=this.TIPOS_REPRESENTACION.find(o=>o.value===n.strPapelRespresentacion),t=new i.c({value:e,disabled:!0}),c=this.TIPOS_DOCUMENTO.find(o=>o.value===n.intTipoDocumento),a=new i.c({value:c,disabled:!0}),r=new i.c({value:n.strNumeroDocumento,disabled:!0}),l=new i.c({value:n.strPrimerNombre,disabled:!0}),b=new i.c({value:n.strSegundoNombre,disabled:!0}),s=new i.c({value:n.strPrimerApellido,disabled:!0}),m=new i.c({value:n.strSegundoApellido,disabled:!0}),d=this.TIPOS_SEXO.find(o=>o.value===n.strSexo),p=new i.c({value:d,disabled:!0}),u=new i.c({value:n.strEmail,disabled:!0}),C=new i.c({value:n.strCelular,disabled:!0}),S=new i.c({value:n.strTelefono,disabled:!0});f.addControl("representacion_"+o,t),f.addControl("tipoDocumento_"+o,a),f.addControl("numeroDocumento_"+o,r),f.addControl("primerNombre_"+o,l),f.addControl("segundoNombre_"+o,b),f.addControl("primerApellido_"+o,s),f.addControl("segundoApellido_"+o,m),f.addControl("sexo_"+o,p),f.addControl("correo_"+o,u),f.addControl("celular_"+o,C),f.addControl("telefono_"+o,S)}),this.contacts=Array.from(Array(_.length).keys()),this.formGroup=f}}return n.\u0275fac=function(o){return new(o||n)(m.Mb(s.a),m.Mb(r.a),m.Mb(b.a),m.Mb(r.g))},n.\u0275cmp=m.Gb({type:n,selectors:[["app-summary"]],decls:6,vars:1,consts:[[1,"title"],[3,"formGroup","ngSubmit",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"ion-margin"],["lines","none"],[1,"ion-margin-bottom"],["position","stacked"],["formControlName","identificacionEmpresa"],["formControlName","razonSocial"],["formControlName","idSede"],["formControlName","direccion"],["formControlName","indicadorZona"],[4,"ngFor","ngForOf"],["mode","ios","interface","action-sheet","cancelText","CANCELAR","formControlName","departamentoSede",3,"compareWith"],[3,"value",4,"ngFor","ngForOf"],["mode","ios","interface","action-sheet","cancelText","CANCELAR","formControlName","municipioSede",3,"compareWith"],["formControlName","actividadEconomica"],["formControlName","sectorEconomico"],["formControlName","celular"],["formControlName","telefonoNotificacion"],["formControlName","correo"],["formControlName","codigoPostal"],["formControlName","identificacionRepresentante"],["formControlName","representanteLegal"],[4,"ngIf"],[1,"actions-wrapper","ion-margin-top"],["color","light",3,"click"],["type","submit","color","primary"],["slot","start","disabled","",3,"value"],[3,"value"],[1,"section-title"],["mode","ios","interface","action-sheet","cancelText","CANCELAR",3,"formControlName"],[3,"formControlName"]],template:function(n,o){1&n&&(m.Sb(0,"ion-header"),m.Sb(1,"ion-toolbar"),m.Sb(2,"div",0),m.Cc(3,"Solicitud Actualizaci\xf3n Sede Principal y Personas Contacto Empresas"),m.Rb(),m.Rb(),m.Rb(),m.Sb(4,"ion-content"),m.Ac(5,O,78,10,"form",1),m.Rb()),2&n&&(m.Bb(5),m.mc("ngIf",o.formGroup))},directives:[c.w,c.Y,c.q,t.l,i.r,i.m,i.f,c.j,c.k,c.G,c.A,c.F,c.z,c.jb,i.l,i.d,c.J,c.ib,t.k,c.N,c.h,c.I,c.gb,c.O,c.B],pipes:[d.a],styles:["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:10px;--background:var(--ion-color-medium);--color:var(--ion-color-medium-contrast)}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-overflow:clip;white-space:break-spaces;text-align:center;font-size:1.3rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{padding:0;background-color:transparent}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--padding-start:0;--inner-padding-end:0;--background:inherit;--highlight-height:0;--background:transparent}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{--background:var(--ion-color-medium);--color:var(--ion-color-medium-contrast)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item.item-interactive-disabled[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{background-color:var(--ion-color-medium);color:var(--ion-color-medium-contrast)}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{opacity:1;transform:translateY(0) scale(1);white-space:break-spaces}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]     .native-input, ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select.select-disabled[_ngcontent-%COMP%]{opacity:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{border-radius:5px;border:1px solid var(--ion-color-dark);--padding-start:1rem;--padding-end:1rem}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-around}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-radio-group[_ngcontent-%COMP%]   ion-radio.radio-disabled[_ngcontent-%COMP%]{opacity:1}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%]{font-size:1.2rem;text-align:center;color:var(--ion-color-primary);margin:2rem 0;font-weight:700}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .actions-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-around}"]}),n})()}];let h=(()=>{class n{}return n.\u0275mod=m.Kb({type:n}),n.\u0275inj=m.Jb({factory:function(o){return new(o||n)},imports:[[r.j.forChild(v)],r.j]}),n})(),N=(()=>{class n{}return n.\u0275mod=m.Kb({type:n}),n.\u0275inj=m.Jb({factory:function(o){return new(o||n)},imports:[[t.c,i.g,c.Z,i.p,a.a,h]]}),n})()},qkCY:function(n,o,e){"use strict";e.d(o,"a",(function(){return a}));var t=e("mrSG"),i=e("fXoL"),c=e("e8h1");let a=(()=>{class n{constructor(n){this.storage=n}set(n,o){return Object(t.a)(this,void 0,void 0,(function*(){let e;try{e=yield this.storage.set(n,o)}catch(t){e=!1}return!1!==e}))}get(n){return Object(t.a)(this,void 0,void 0,(function*(){let o;try{o=yield this.storage.get(n)}catch(e){}return o}))}remove(n){this.storage.remove(n)}clear(){this.storage.clear()}}return n.\u0275fac=function(o){return new(o||n)(i.Wb(c.b))},n.\u0275prov=i.Ib({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);