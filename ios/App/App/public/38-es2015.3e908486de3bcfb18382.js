(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{ZUZ2:function(o,e,n){"use strict";n.r(e),n.d(e,"TalkPageModule",(function(){return y}));var i=n("ofXK"),t=n("TEn/"),s=n("tyNb"),r=n("mrSG"),a=n("KX+i"),c=n("AC/E"),l=n("fXoL"),d=n("3Pt+"),b=n("e8h1");const u=["content"],m=["Lista"];function h(o,e){1&o&&(l.Sb(0,"ion-row"),l.Sb(1,"ion-col",7),l.Sb(2,"div",30),l.Sb(3,"p"),l.Sb(4,"i",41),l.Cc(5,"Comunicaci\xf3n privada"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb())}function g(o,e){if(1&o&&(l.Sb(0,"ion-row"),l.Sb(1,"ion-col",7),l.Sb(2,"div"),l.Sb(3,"p"),l.Sb(4,"i",41),l.Cc(5),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&o){const o=l.ec().$implicit;l.Bb(5),l.Ec('"',o.MensajePadre.Mensaje,'"')}}const v=function(o){return{color:o}};function f(o,e){if(1&o&&l.Nb(0,"ion-icon",42),2&o){const o=l.ec().$implicit,e=l.ec();l.mc("ngStyle",l.oc(1,v,o.LeidoPorMi||o.FKUsuario!=e.idUsuario?"orange":""))}}function p(o,e){1&o&&l.Nb(0,"ion-icon",43)}const S=function(o,e){return{itemBackgroundPrivadoParaMi:o,itemBackgroundPrivadoPorMi:e}},C=function(o){return{"text-align":o}};function M(o,e){if(1&o){const o=l.Tb();l.Sb(0,"ion-list",null,18),l.Sb(2,"ion-item-sliding",null,19),l.Sb(4,"ion-item-options",20),l.Sb(5,"ion-item-option",21),l.dc(),l.Sb(6,"svg",22),l.ac("click",(function(){l.tc(o);const n=e.$implicit,i=l.rc(3);return l.ec().responderMensaje(n,i)})),l.Nb(7,"path",23),l.Rb(),l.Rb(),l.Rb(),l.cc(),l.Sb(8,"ion-item-options",24),l.ac("ionSwipe",(function(){l.tc(o);const n=e.$implicit;return l.ec().cambioOptions(n)})),l.Sb(9,"ion-item-option",25),l.Sb(10,"ion-icon",26),l.ac("click",(function(){l.tc(o);const n=e.$implicit,i=l.rc(3);return l.ec().editarMensaje(n,i)})),l.Rb(),l.Sb(11,"ion-icon",27),l.ac("click",(function(){l.tc(o);const n=e.$implicit,i=l.rc(3);return l.ec().eliminarMensaje(n,i)})),l.Rb(),l.Rb(),l.Rb(),l.Sb(12,"ion-item",28),l.Sb(13,"ion-grid",29),l.Sb(14,"ion-row"),l.Sb(15,"ion-col",7),l.Sb(16,"div",30),l.Sb(17,"p"),l.Sb(18,"i",31),l.Cc(19),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(20,"ion-row"),l.Sb(21,"ion-col",7),l.Sb(22,"div",30),l.Sb(23,"p"),l.Sb(24,"i",31),l.Cc(25),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Ac(26,h,6,0,"ion-row",32),l.Ac(27,g,6,1,"ion-row",32),l.Sb(28,"ion-row"),l.Sb(29,"ion-col",7),l.Sb(30,"div"),l.Sb(31,"p"),l.Cc(32),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(33,"div",33),l.Sb(34,"div",34),l.dc(),l.Sb(35,"svg",35),l.ac("click",(function(){l.tc(o);const n=e.$implicit;return l.ec().mostrarInfoMensaje(n)})),l.Nb(36,"path",36),l.Nb(37,"path",37),l.Rb(),l.Rb(),l.cc(),l.Sb(38,"div",38),l.Ac(39,f,1,3,"ion-icon",39),l.Ac(40,p,1,0,"ion-icon",40),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&o){const o=e.$implicit,n=l.ec();l.Bb(12),l.mc("color",n.conversationColor(o))("ngClass",l.pc(10,S,!0===o.EsPrivadoParaMi,!0===o.EsPrivadoPorMi)),l.Bb(1),l.mc("ngStyle",l.oc(13,C,n.textAlignConversation(o))),l.Bb(6),l.Dc(o.UsuarioNombre),l.Bb(6),l.Dc(o.FechaCorta),l.Bb(1),l.mc("ngIf",o.EsPrivadoParaMi||o.EsPrivadoPorMi),l.Bb(1),l.mc("ngIf",o.MensajePadre),l.Bb(5),l.Ec(" ",o.Mensaje," "),l.Bb(7),l.mc("ngIf",!n.allUsersReadMessage(o)),l.Bb(1),l.mc("ngIf",n.allUsersReadMessage(o))}}function R(o,e){if(1&o){const o=l.Tb();l.Sb(0,"ion-item",52),l.Sb(1,"ion-label",14),l.Cc(2),l.Rb(),l.Sb(3,"p"),l.Cc(4),l.Rb(),l.Sb(5,"ion-icon",53),l.ac("click",(function(){return l.tc(o),l.ec(2).cerrarMensajeResponder()})),l.Rb(),l.Rb()}if(2&o){const o=l.ec(2);l.Bb(2),l.Ec("Respondiendo a ",o.mensajeAResponser.UsuarioNombre,""),l.Bb(2),l.Ec(" ",o.mensajeAResponser.Mensaje," ")}}function P(o,e){if(1&o){const o=l.Tb();l.Sb(0,"ion-row"),l.Sb(1,"ion-col",7),l.Sb(2,"ion-item",12),l.Sb(3,"p",54),l.Sb(4,"i"),l.Cc(5),l.Rb(),l.Rb(),l.Sb(6,"ion-icon",53),l.ac("click",(function(){return l.tc(o),l.ec(2).cleanPrivateSelected()})),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&o){const o=l.ec(2);l.Bb(5),l.Ec("Mensaje privado a: ",o.usuarioPrivadoSelected,"")}}function j(o,e){if(1&o){const o=l.Tb();l.Sb(0,"ion-footer",44),l.Sb(1,"form",45),l.Ac(2,R,6,2,"ion-item",46),l.Sb(3,"ion-item",12),l.Sb(4,"ion-grid"),l.Ac(5,P,7,1,"ion-row",32),l.Sb(6,"ion-row"),l.Sb(7,"ion-col",7),l.Sb(8,"textarea",47),l.ac("input",(function(e){return l.tc(o),l.ec().onKeyDownHandler(e)})),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(9,"ion-grid"),l.Sb(10,"ion-row",48),l.Sb(11,"ion-col",49),l.Sb(12,"ion-button",50),l.ac("click",(function(){return l.tc(o),l.ec().openModalUserPrivate()})),l.Cc(13," Privado "),l.Rb(),l.Rb(),l.Sb(14,"ion-col",49),l.Sb(15,"ion-button",51),l.ac("click",(function(){l.tc(o);const e=l.ec();return e.enviarMensaje(e.formEnvioMensaje.value)})),l.Cc(16," Enviar "),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb()}if(2&o){const o=l.ec();l.Bb(1),l.mc("formGroup",o.formEnvioMensaje),l.Bb(1),l.mc("ngIf",o.mensajeAResponser),l.Bb(3),l.mc("ngIf",o.usuarioPrivadoSelected)}}const U=[{path:"",component:(()=>{class o{constructor(o,e,n,i,t,s,r,a){this.alertController=o,this.talkService=e,this.cacheService=n,this.formBuilder=i,this.storage=t,this.popoverController=s,this.toastCtrl=r,this.elemRef=a,this.iconHabilitarUsuario="lock-open-outline",this.mostrarUsuarioSeleccionado=!1,this.usuariosInactivosSeleccionados=[],this.idsUsuariosInactivosSeleccionados=[],this.ids\u00dcsuariosPrivadosSeleccionados=[],this.mostrarOpcionesMenu=!0,this.ocultarFooterPorRolesHistoricos=!0}ionViewWillEnter(){return Object(r.a)(this,void 0,void 0,(function*(){const o=this.talkService.getRolesHistoricos();this.idUsuario=yield this.getInfoUser(),o.find(o=>o===this.idUsuario)&&(this.ocultarFooterPorRolesHistoricos=!1),setTimeout(()=>{document.querySelector(".conversation-color")},200)}))}ngOnInit(){this.usuarioPrivadoSelected="",this.informacionConversacionSeleccionada=this.talkService.getSelectedConversation(),this.createFormSend(),this.validarEstadoUsuario()}ngAfterViewInit(){document.querySelector(".conversation-color"),this.elemRef.nativeElement.querySelectorAll(".conversation-color"),document.getElementsByClassName("conversation-color")}ionViewDidEnter(){this.getInfoConversation(),document.querySelector(".conversation-color"),this.elemRef.nativeElement.querySelectorAll(".conversation-color"),document.getElementsByClassName("conversation-color")}createFormSend(){this.formEnvioMensaje=this.formBuilder.group({send:[""],mensajePrivado:[""]})}getInfoConversation(){return Object(r.a)(this,void 0,void 0,(function*(){const o=this.informacionConversacionSeleccionada.PKConversacion,e=yield this.storage.get("sesion");this.talkService.getMensajes(o,e.idRegistro).subscribe(o=>Object(r.a)(this,void 0,void 0,(function*(){if(!0===o.IsOk){const e=yield this.mostrarMensajes(o.Respuesta);this.mensajes=e}})))}))}mostrarMensajes(o){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this.getInfoUser(),n=[];return o.forEach(o=>{const i=o;(0===i.Privado.length||i.EsPrivadoPorMi||i.Privado.find(o=>o.FKUsuario===e))&&n.push(i)}),n}))}cambioOptions(o){return Object(r.a)(this,void 0,void 0,(function*(){const e=yield this.storage.get("sesion"),n=parseInt(e.idRegistro,10);o.FKUsuario!==n&&this.lista.closeSlidingItems()}))}validarEstadoUsuario(){return Object(r.a)(this,void 0,void 0,(function*(){const o=yield this.storage.get("sesion"),e=parseInt(o.idRegistro,10),n=this.informacionConversacionSeleccionada.Usuarios.find(o=>o.FKUsuario===e);n&&(this.iconHabilitarUsuario="A"===n.Estado?"lock-open-outline":"lock-closed-outline")}))}activarUsuario(){return Object(r.a)(this,void 0,void 0,(function*(){const o=yield this.storage.get("sesion"),e=parseInt(o.idRegistro,10),n=this.informacionConversacionSeleccionada.Usuarios.find(o=>o.FKUsuario===e);n&&("A"===n.Estado?(this.iconHabilitarUsuario="lock-open-outline",this.talkService.changeStateUser(n.PKConversacionUsuario,this.informacionConversacionSeleccionada.PKConversacion,"I","",e).subscribe(o=>{!0===o.IsOk&&(this.iconHabilitarUsuario="lock-closed-outline",this.notification("Atenci\xf3n","Se actualiz\xf3 el estado del usuario"))})):(this.iconHabilitarUsuario="lock-closed-outline",this.talkService.changeStateUser(n.PKConversacionUsuario,this.informacionConversacionSeleccionada.PKConversacion,"A","",e).subscribe(o=>{!0===o.IsOk&&(this.iconHabilitarUsuario="lock-open-outline",this.notification("Atenci\xf3n","Se actualiz\xf3 el estado del usuario"))})))}))}onKeyDownHandler(o){return Object(r.a)(this,void 0,void 0,(function*(){let e=o.data;if("@"===e){const o=this.getUsuariosInactivos();if(o.length>0){const e=yield this.alertController.create({cssClass:"my-custom-class",header:"Usuarios Inactivos",mode:"ios",inputs:o,buttons:[{text:"Cancelar",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Aceptar",handler:()=>{console.log("Confirm Aceptar")}}]});yield e.present();const{data:n}=yield e.onWillDismiss();if(void 0!==n.values)if(this.usuariosInactivosSeleccionados.push(n.values),this.mostrarUsuarioSeleccionado=!0,this.usuarioSeleccionado=n.values,""===this.formEnvioMensaje.get("send").value)this.formEnvioMensaje.get("send").setValue("@"+this.usuarioSeleccionado);else{const o=this.formEnvioMensaje.get("send").value;this.formEnvioMensaje.get("send").setValue(`@${this.usuarioSeleccionado} ${o}`)}}else this.notification("Atenci\xf3n","La comunicaci\xf3n seleccionada no tiene usuarios inactivos")}e=""}))}getUsuariosInactivos(){const o=[];return this.talkService.getSelectedConversation().Usuarios.forEach(e=>{"I"===e.Estado&&o.push({name:""+e.UsuarioNombre,type:"radio",label:""+e.UsuarioNombre,value:""+e.UsuarioNombre})}),o}openModalUserPrivate(){return Object(r.a)(this,void 0,void 0,(function*(){let o;const e=[];this.informacionConversacionSeleccionada.Usuarios.forEach(o=>{e.push({name:""+o.UsuarioNombre,type:"checkbox",label:""+o.UsuarioNombre,value:""+o.UsuarioNombre,valor:""+o})});const n=yield this.alertController.create({cssClass:"my-custom-class",mode:"ios",header:"Seleccione persona para el mensaje privado",inputs:e,buttons:[{text:"Cancelar",cssClass:"secondary",handler:()=>{console.log("Confirm Cancel")}},{text:"Aceptar",handler:e=>{o=e}}]});yield n.present();const{data:i}=yield n.onWillDismiss();if(i.values.length>=1){const o=i.values;this.ids\u00dcsuariosPrivadosSeleccionados=[];const e=this.informacionConversacionSeleccionada.Usuarios;for(let n=0;n<e.length;n++){const i=e[n];o.find(o=>o===i.UsuarioNombre)&&this.ids\u00dcsuariosPrivadosSeleccionados.push(i.FKUsuario)}this.usuarioPrivadoSelected=o.toString()}}))}cleanPrivateSelected(){this.usuarioPrivadoSelected=""}responderMensaje(o,e){this.mensajeAResponser=o,e.close()}presentToastEmptyConversation(){return Object(r.a)(this,void 0,void 0,(function*(){(yield this.toastCtrl.create({message:"Debes diligenciar el cuerpo de la comunicaci\xf3n.",duration:3e3})).present()}))}enviarMensaje(o){return Object(r.a)(this,void 0,void 0,(function*(){if(!o.send||0==o.send.length)return void this.presentToastEmptyConversation();const e=yield this.getInfoUser();let n=this.ids\u00dcsuariosPrivadosSeleccionados;n=n.length>=1?this.ids\u00dcsuariosPrivadosSeleccionados:[];let i=0;if(this.mensajeAResponser&&(i=this.mensajeAResponser.PKConversacionMensaje,this.mensajeAResponser.Privado.length>=1)){const o=[];this.mensajeAResponser.Privado.forEach(e=>{o.push(e.FKUsuario)}),n=o}this.usuariosInactivosSeleccionados.length>=1&&this.informacionConversacionSeleccionada.Usuarios.forEach(o=>{this.usuariosInactivosSeleccionados.find(e=>e===o.UsuarioNombre)&&this.idsUsuariosInactivosSeleccionados.push(o.FKUsuario)}),this.talkService.saveMessageConversation({PKConversacionMensaje:-1,PKConversacion:this.informacionConversacionSeleccionada.PKConversacion,PKUsuario:e,Mensaje:o.send,UidMensajeRespuesta:i,LstUsuariosMensajePrivado:n,LstUsuariosActivar:this.idsUsuariosInactivosSeleccionados,IP:"000.000.000.000"}).subscribe(o=>{!0===o.IsOk&&(this.formEnvioMensaje.get("send").reset(),this.mensajeAResponser="",this.ids\u00dcsuariosPrivadosSeleccionados=[],this.idsUsuariosInactivosSeleccionados=[],this.usuarioPrivadoSelected="",this.getInfoConversation())})}))}cerrarMensajeResponder(){this.mensajeAResponser=void 0}mostrarInfoMensaje(o){return Object(r.a)(this,void 0,void 0,(function*(){yield this.getInfoUser();const e=this.mostrarUsuariosLeidos(o.FKUsuario,o.Leido),n=this.mostrarUsuariosNoLeidos(o.FKUsuario,o.Leido),i=yield this.alertController.create({cssClass:"textoParrafo",mode:"ios",header:"Detalle del mensaje",message:`<p>\n      <strong>Mensaje: </strong> ${o.Mensaje}\n      <strong>Enviado por: </strong> ${o.UsuarioNombre}\n      <strong>Fecha: </strong> ${o.FechaCorta}\n      <strong style="color:blue">Leido por: </strong> ${e}\n      <strong>Pendiente por leer: </strong> ${n}\n      </p>`,buttons:["ACEPTAR"]});yield i.present()}))}mostrarUsuariosLeidos(o,e){const n=[];return e.forEach(e=>{e.FKUsuario!=o&&n.push(e.UsuarioNombre)}),""==n.toString()?"Ninguno.":n.toString()}allUsersReadMessage(o){return this.informacionConversacionSeleccionada.Usuarios.length==o.Leido.length}conversationColor(o){return this.idUsuario==o.FKUsuario?o.EsPrivadoPorMi?"chatgreen":"chatblue":o.EsPrivadoParaMi?"chatgreen":"chatwhite"}textAlignConversation(o){return this.idUsuario==o.FKUsuario?"left":"right"}mostrarUsuariosNoLeidos(o,e){let n=[];const i=this.informacionConversacionSeleccionada.Usuarios;for(let t=0;t<i.length;t++){const o=i[t];e.find(e=>e.FKUsuario===o.FKUsuario)||n.push(o.UsuarioNombre)}return n.filter(e=>e.FKUsuario!=o),""==n.toString()?"Ninguno.":n.toString()}eliminarMensaje(o,e){return Object(r.a)(this,void 0,void 0,(function*(){const n=yield this.getInfoUser();if(e.close(),0===o.Leido.length){const e=yield this.alertController.create({mode:"ios",header:"Eliminar Mensaje",message:"Esta seguro que desea eliminar el mensaje de esta conversaci\xf3n",buttons:[{text:"CANCELAR"},{text:"ACEPTAR",handler:()=>{this.talkService.deleteMessage({PKConversacionMensaje:o.PKConversacionMensaje,PKUsuario:n,Mensaje:o.Mensaje,Eliminar:!0}).subscribe(o=>{!0===o.IsOk&&(this.notification("Atenci\xf3n","Mensaje eliminado con exito"),this.getInfoConversation())})}}]});yield e.present()}else{const o=yield this.alertController.create({mode:"ios",header:"Eliminar Mensaje",message:"No se puede eliminar este mensaje, ya fue visto por algun integrante de la conversaci\xf3n.",buttons:["ACEPTAR"]});yield o.present()}}))}editarMensaje(o,e){return Object(r.a)(this,void 0,void 0,(function*(){const n=yield this.getInfoUser();if(e.close(),0===o.Leido.length){const e=yield this.alertController.create({mode:"ios",header:"Editar Mensaje",message:""+o.Mensaje,inputs:[{name:"editarMensaje",id:"editarMensaje",type:"textarea",placeholder:"Editar Mensaje"}],buttons:[{text:"Cancelar",handler:()=>{console.log("editar Cancel")}},{text:"Aceptar",handler:e=>{this.talkService.deleteMessage({PKConversacionMensaje:o.PKConversacionMensaje,PKUsuario:n,Mensaje:e.editarMensaje,Eliminar:!1}).subscribe(o=>{!0===o.IsOk&&(this.notification("Atenci\xf3n","Mensaje editado con exito"),this.getInfoConversation())})}}]});yield e.present()}else{const o=yield this.alertController.create({mode:"ios",header:"Editar Mensaje",message:"No se puede editar este mensaje, ya fue visto por alg\xfan integrante de la conversaci\xf3n.",buttons:["ACEPTAR"]});yield o.present()}}))}notification(o,e){return Object(r.a)(this,void 0,void 0,(function*(){const n=yield this.alertController.create({header:o,backdropDismiss:!1,mode:"ios",message:e,buttons:["ACEPTAR"]});yield n.present(),n.onDidDismiss()}))}getInfoUser(){return Object(r.a)(this,void 0,void 0,(function*(){const o=yield this.storage.get("sesion");return parseInt(o.idRegistro,10)}))}}return o.\u0275fac=function(e){return new(e||o)(l.Mb(t.a),l.Mb(a.a),l.Mb(c.a),l.Mb(d.b),l.Mb(b.b),l.Mb(t.fb),l.Mb(t.kb),l.Mb(l.l))},o.\u0275cmp=l.Gb({type:o,selectors:[["app-talk"]],viewQuery:function(o,e){var n;1&o&&(l.Hc(u,!0),l.Hc(m,!0),l.Hc(t.A,!0)),2&o&&(l.qc(n=l.bc())&&(e.content=n.first),l.qc(n=l.bc())&&(e.lista=n.first),l.qc(n=l.bc())&&(e.ionItems=n))},decls:56,vars:7,consts:[["size","2"],["color","tertiary"],["slot","start"],["color","primary","mode","md","defaultHref","u/list-communications"],["size","10"],[1,"titulo"],["content",""],["size","12"],["lines","none","color","secondary"],["src","../../../../assets/icon/icono_comunicaciones.svg","alt","iconItem",1,"imgMenu"],[1,"ion-text-center"],["mode","ios","colines","none","lor","tertiary"],["lines","none"],["lines","none",2,"padding-top","35px"],["position","stacked"],["start","end",3,"name","click"],[4,"ngFor","ngForOf"],["class","ion-no-border",4,"ngIf"],["Lista",""],["slidingItem",""],["side","start"],["mode","ios"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-reply-fill",2,"width","2rem","height","2rem","color","white",3,"click"],["d","M5.921 11.9 1.353 8.62a.719.719 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"],[3,"ionSwipe"],["mode","ios","side","end"],["slot","icon-only","name","create-outline",3,"click"],["slot","icon-only","name","trash-outline",3,"click"],[3,"color","ngClass"],[3,"ngStyle"],[1,"parrafoMensaje"],[2,"font-size","0.8rem"],[4,"ngIf"],[2,"width","fit-content","height","fit-content","margin-left","1rem"],[2,"width","inherit","height","inherit","margin-bottom","1rem"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-chat-text",2,"width","2rem","height","2rem","color","orange",3,"click"],["d","M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"],["d","M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"],[2,"width","inherit","height","inherit"],["style","width: 2rem; height: 2rem;","slot","end","name","checkmark",3,"ngStyle",4,"ngIf"],["style","width: 2rem; height: 2rem; color: orange;","name","checkmark-done-outline","slot","end",4,"ngIf"],[2,"font-size","12px","color","#516F7A"],["slot","end","name","checkmark",2,"width","2rem","height","2rem",3,"ngStyle"],["name","checkmark-done-outline","slot","end",2,"width","2rem","height","2rem","color","orange"],[1,"ion-no-border"],[3,"formGroup"],["color","tertiary","class","itemResponder",4,"ngIf"],["formControlName","send","rows","5",1,"bg-light","mt-3","pl-1","textMensaje",2,"height","100p","border-radius","10px",3,"input"],["justify-content-around",""],["size","6"],["expand","block","color","tertiary",3,"click"],["expand","block","color","primary",3,"click"],["color","tertiary",1,"itemResponder"],["name","close-circle-outline","size","small","slot","end",3,"click"],[2,"font-size","13px","margin","0px"]],template:function(o,e){1&o&&(l.Sb(0,"ion-header"),l.Sb(1,"ion-grid"),l.Sb(2,"ion-row"),l.Sb(3,"ion-col",0),l.Sb(4,"ion-toolbar",1),l.Sb(5,"ion-buttons",2),l.Nb(6,"ion-back-button",3),l.Rb(),l.Rb(),l.Rb(),l.Sb(7,"ion-col",4),l.Sb(8,"ion-title",5),l.Cc(9,"Conversaci\xf3n"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(10,"ion-content",null,6),l.Sb(12,"ion-grid"),l.Sb(13,"ion-row"),l.Sb(14,"ion-col",7),l.Sb(15,"ion-list"),l.Sb(16,"ion-item",8),l.Sb(17,"ion-avatar",2),l.Nb(18,"img",9),l.Rb(),l.Sb(19,"div",10),l.Sb(20,"ion-label"),l.Cc(21,"Comunicaci\xf3n"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Sb(22,"ion-card",11),l.Sb(23,"ion-item",12),l.Sb(24,"ion-list"),l.Sb(25,"ion-item",13),l.Sb(26,"strong"),l.Sb(27,"ion-label",14),l.Cc(28,"Raz\xf3n Social"),l.Rb(),l.Rb(),l.Sb(29,"p"),l.Cc(30),l.Rb(),l.Rb(),l.Sb(31,"ion-item",12),l.Sb(32,"strong"),l.Sb(33,"ion-label",14),l.Cc(34,"Tipo - N\xfamero documento"),l.Rb(),l.Rb(),l.Sb(35,"p"),l.Cc(36),l.Rb(),l.Rb(),l.Sb(37,"ion-item",12),l.Sb(38,"strong"),l.Sb(39,"ion-label",14),l.Cc(40,"Tema de conversaci\xf3n"),l.Rb(),l.Rb(),l.Sb(41,"p"),l.Cc(42),l.Rb(),l.Rb(),l.Rb(),l.Sb(43,"ion-icon",15),l.ac("click",(function(){return e.activarUsuario()})),l.Rb(),l.Rb(),l.Rb(),l.Sb(44,"ion-grid"),l.Sb(45,"ion-row"),l.Sb(46,"ion-col",7),l.Sb(47,"ion-list"),l.Sb(48,"ion-item",8),l.Sb(49,"ion-avatar",2),l.Nb(50,"img",9),l.Rb(),l.Sb(51,"div",10),l.Sb(52,"ion-label"),l.Cc(53,"Mensaje"),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Rb(),l.Ac(54,M,41,15,"ion-list",16),l.Rb(),l.Ac(55,j,17,3,"ion-footer",17)),2&o&&(l.Bb(30),l.Dc(e.informacionConversacionSeleccionada.Empresa),l.Bb(6),l.Fc("",e.informacionConversacionSeleccionada.EmpresaTipoDocumento," - ",e.informacionConversacionSeleccionada.EmpresaDocumento,""),l.Bb(6),l.Dc(e.informacionConversacionSeleccionada.Tema),l.Bb(1),l.mc("name",e.iconHabilitarUsuario),l.Bb(11),l.mc("ngForOf",e.mensajes),l.Bb(1),l.mc("ngIf",e.ocultarFooterPorRolesHistoricos))},directives:[t.w,t.v,t.L,t.p,t.Y,t.i,t.e,t.f,t.W,t.q,t.G,t.A,t.d,t.F,t.j,t.x,i.k,i.l,t.E,t.D,t.C,i.j,i.m,t.u,d.r,d.m,d.f,d.a,d.l,d.d,t.h],styles:["ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]{color:#fff}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]{padding:0;background:#95a6b1}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{width:100%}ion-header[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{padding:0}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{background:none;height:80px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{margin-bottom:40px;border-radius:15px;font-size:16.4px;font-weight:700;--min-height:70px}ion-content[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   .tituloOpcion[_ngcontent-%COMP%]{text-align:center;margin-bottom:30px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{margin:10px;padding-bottom:16px}ion-content[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{width:85%}ion-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}ion-footer[_ngcontent-%COMP%]   ion-grid[_ngcontent-%COMP%]   ion-row[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:50px}ion-footer[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .textMensaje[_ngcontent-%COMP%]{width:100%;height:65px;border-radius:50px;outline:none;margin-bottom:10px}.itemResponder[_ngcontent-%COMP%]{--border-radius:15px;padding:10px}.imgMenu[_ngcontent-%COMP%]{height:145%!important;transform:translateY(-8px)}.imgMenu[_ngcontent-%COMP%], .titulo[_ngcontent-%COMP%]{width:100%!important}.titulo[_ngcontent-%COMP%]{font-size:20px!important;text-align:left;padding:10px 0 0;margin-top:10px}.itemBackgroundPrivadoParaMi[_ngcontent-%COMP%], .itemBackgroundPrivadoPorMi[_ngcontent-%COMP%]{--background:#ffd96a;height:auto!important;word-wrap:break-word!important}.parrafoMensaje[_ngcontent-%COMP%]{width:100%;height:auto!important;word-wrap:break-word!important}ion-list[_ngcontent-%COMP%]   ion-item.conversation[_ngcontent-%COMP%]{--ion-background-color:#000!important}"]}),o})()}];let O=(()=>{class o{}return o.\u0275mod=l.Kb({type:o}),o.\u0275inj=l.Jb({factory:function(e){return new(e||o)},imports:[[s.j.forChild(U)],s.j]}),o})(),y=(()=>{class o{}return o.\u0275mod=l.Kb({type:o}),o.\u0275inj=l.Jb({factory:function(e){return new(e||o)},imports:[[i.c,d.g,d.p,t.Z,O]]}),o})()}}]);