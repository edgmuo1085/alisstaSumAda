import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IonItem, IonItemSliding, IonList, ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { InactiveUsersTalkComponent } from '../../../components/inactive-users-talk/inactive-users-talk.component';
import { TalkService } from '../../../services/talk/talk.service';
import { Storage } from '@ionic/storage';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CacheService } from '../../../services/cache/cache.service';
import { injectStyles } from 'shadow-dom-inject-styles';

@Component({
  selector: 'app-talk',
  templateUrl: './talk.page.html',
  styleUrls: ['./talk.page.scss'],
})
export class TalkPage implements OnInit, AfterViewInit {

  formEnvioMensaje: FormGroup;

  @ViewChild('content') private content: any;
  @ViewChild('Lista') lista: IonList;
  mensajeAResponser: any;
  enviarNuevoMensaje: string;
  iconHabilitarUsuario = 'lock-open-outline';
  mensajes: any;
  mostrarUsuarioSeleccionado = false;
  usuarioSeleccionado: any;
  usuarioPrivadoSelected: any;
  informacionConversacionSeleccionada: any;
  usuariosInactivosSeleccionados: any[] = [];
  idsUsuariosInactivosSeleccionados: any[] = [];
  idsÜsuariosPrivadosSeleccionados: any[] = [];

  mostrarOpcionesMenu = true;

  ocultarFooterPorRolesHistoricos = true;

  idUsuario: number;

  @ViewChildren(IonItem) ionItems: QueryList<IonItem>;

  constructor(public alertController: AlertController,
              private talkService: TalkService,
              private cacheService: CacheService,
              private formBuilder: FormBuilder,
              private storage: Storage,
              public popoverController: PopoverController,
              private toastCtrl: ToastController,
              private elemRef: ElementRef) { }

  async ionViewWillEnter() {
    const rolesHistoricos = this.talkService.getRolesHistoricos();
    this.idUsuario = await this.getInfoUser();

    const encontro = rolesHistoricos.find(item => item === this.idUsuario);

    if (encontro) {
      this.ocultarFooterPorRolesHistoricos = false;
    }

    setTimeout(() => {
      debugger;
      let shadow = document.querySelector(".conversation-color") as HTMLElement;
    }, 200);
      


  }

  ngOnInit() {
    this.usuarioPrivadoSelected = '';
    this.informacionConversacionSeleccionada = this.talkService.getSelectedConversation();
    this.createFormSend();
    this.validarEstadoUsuario();
  }

  ngAfterViewInit() {
    debugger;
    let y = this.ionItems;


    let shadow = document.querySelector(".conversation-color") as HTMLElement;





    let elements = this.elemRef.nativeElement.querySelectorAll('.conversation-color');
    let x = document.getElementsByClassName('conversation-color');
  }

  ionViewDidEnter() {
    debugger;

    this.getInfoConversation();

    let y = this.ionItems;

    let shadow = document.querySelector(".conversation-color") as HTMLElement;


    let elements = this.elemRef.nativeElement.querySelectorAll('.conversation-color');
    let x = document.getElementsByClassName('conversation-color');
  }




  createFormSend() {
    this.formEnvioMensaje = this.formBuilder.group({
      send: [''],
      mensajePrivado: ['']
    });
  }

  async getInfoConversation() {

    const pPKConversacion = this.informacionConversacionSeleccionada.PKConversacion;
    const infoUsuarioIngresado = await this.storage.get('sesion');
    const idUSuario = infoUsuarioIngresado.idRegistro;
    debugger;
    // tslint:disable-next-line: deprecation
    this.talkService.getMensajes(pPKConversacion, idUSuario).subscribe( async response => {
      debugger;
      if (response.IsOk === true) {
        const mensajesConversacion = await this.mostrarMensajes(response.Respuesta);
        this.mensajes = mensajesConversacion;
      }
    });

  }

  async mostrarMensajes(mensajes) {
    debugger;
    const idUsuario = await this.getInfoUser();
    const mensajesConversacion = [];
    mensajes.forEach(element => {
      debugger;
      const mensaje = element;
      if (mensaje.Privado.length === 0) {
        mensajesConversacion.push(mensaje);
      } else {

        if (mensaje.EsPrivadoPorMi) {
          mensajesConversacion.push(mensaje);
        } else {
          const encontro = mensaje.Privado.find(item => item.FKUsuario === idUsuario);
          if (encontro) {
            mensajesConversacion.push(mensaje);
          }
        }
      }
    });

    return mensajesConversacion;

  }

  async cambioOptions(item) {
    const infoUsuarioIngresado = await this.storage.get('sesion');
    const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);
    if ( item.FKUsuario !== idUSuario ) {
      this.lista.closeSlidingItems();
    }
  }

  async validarEstadoUsuario() {
    const infoUsuarioIngresado = await this.storage.get('sesion');
    const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);
    const encontro = this.informacionConversacionSeleccionada.Usuarios.find(item => item.FKUsuario === idUSuario);
    if (encontro) {
      if (encontro.Estado === 'A') {
        this.iconHabilitarUsuario = 'lock-open-outline';
      } else {
        this.iconHabilitarUsuario = 'lock-closed-outline';
      }
    }
  }

  async activarUsuario() {
    // const ip = this.cacheService.getIpAddress();
    const ip = '';
    const infoUsuarioIngresado = await this.storage.get('sesion');
    const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);

    const encontro = this.informacionConversacionSeleccionada.Usuarios.find(item => item.FKUsuario === idUSuario);

    if (encontro) {

      if (encontro.Estado === 'A') {
        this.iconHabilitarUsuario = 'lock-open-outline';
        // tslint:disable-next-line: max-line-length
        this.talkService.changeStateUser(encontro.PKConversacionUsuario, this.informacionConversacionSeleccionada.PKConversacion, 'I', ip, idUSuario).subscribe(response => {
          if (response.IsOk === true) {
            this.iconHabilitarUsuario = 'lock-closed-outline';
            this.notification('Atención', 'Se actualizó el estado del usuario');
          }
        });
      } else {
        this.iconHabilitarUsuario = 'lock-closed-outline';
        // tslint:disable-next-line: max-line-length
        this.talkService.changeStateUser(encontro.PKConversacionUsuario, this.informacionConversacionSeleccionada.PKConversacion, 'A', ip, idUSuario).subscribe(response => {
          if (response.IsOk === true) {
            this.iconHabilitarUsuario = 'lock-open-outline';
            this.notification('Atención', 'Se actualizó el estado del usuario');
          }
        });
      }

    }

  }


  async onKeyDownHandler(event) {
    let valorIngresado = event.data;
    if ( valorIngresado === '@' ) {

      const usuariosInactivos = this.getUsuariosInactivos();

      if ( usuariosInactivos.length > 0 ) {

        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Usuarios Inactivos',
          mode: 'ios',
          inputs: usuariosInactivos,
          buttons: [
            {
              text: 'Cancelar',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, {
              text: 'Aceptar',
              handler: () => {
                console.log('Confirm Aceptar');
              }
            }
          ]
        });

        await alert.present();
        const { data } = await alert.onWillDismiss();
        if (data.values !== undefined) {
          this.usuariosInactivosSeleccionados.push(data.values);
          this.mostrarUsuarioSeleccionado = true;
          this.usuarioSeleccionado = data.values;
          if (this.formEnvioMensaje.get('send').value === '') {
            this.formEnvioMensaje.get('send').setValue(`@${this.usuarioSeleccionado}`);
          } else {
            const dataIngresada = this.formEnvioMensaje.get('send').value;
            this.formEnvioMensaje.get('send').setValue(`@${this.usuarioSeleccionado} ${dataIngresada}`);
          }
        }
      } else {
        this.notification('Atención', 'La comunicación seleccionada no tiene usuarios inactivos');
      }

    }
    valorIngresado = '';
  }

  getUsuariosInactivos() {

    const usuariosInactivos = [];
    const usuariosConversacion = this.talkService.getSelectedConversation();
    usuariosConversacion.Usuarios.forEach(element => {
      if (element.Estado === 'I') {
        const objUsuario = {
          name: `${element.UsuarioNombre}`,
          type: 'radio',
          label: `${element.UsuarioNombre}`,
          value: `${element.UsuarioNombre}`,
        };
        usuariosInactivos.push(objUsuario);
      }
    });

    return usuariosInactivos;

  }


  async openModalUserPrivate() {

    let data2: any;
    // tslint:disable-next-line: no-shadowed-variable
    const handlerData = (data) => {
      data2 = data;
    };
    const usuarios = [];
    this.informacionConversacionSeleccionada.Usuarios.forEach(element => {
      const objUsuarios = {
        name: `${element.UsuarioNombre}`,
        type: 'checkbox',
        label: `${element.UsuarioNombre}`,
        value: `${element.UsuarioNombre}`,
        valor: `${element}`
      };
      usuarios.push(objUsuarios);
    });


    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      mode: 'ios',
      header: 'Seleccione persona para el mensaje privado',
      inputs: usuarios,
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Aceptar',
          handler: handlerData
        }
      ]
    });

    await alert.present();

    const { data } = await alert.onWillDismiss();


    if (data.values.length >= 1) {
      const usuariosSeleccionados = data.values;

      this.idsÜsuariosPrivadosSeleccionados = [];
      const usuariosConversacion = this.informacionConversacionSeleccionada.Usuarios;

      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < usuariosConversacion.length; i++) {
        const usuario = usuariosConversacion[i];

        const encontro = usuariosSeleccionados.find(item => item === usuario.UsuarioNombre);

        if ( encontro ) {
          this.idsÜsuariosPrivadosSeleccionados.push(usuario.FKUsuario);
        }

      }

      this.usuarioPrivadoSelected = usuariosSeleccionados.toString();
      }

  }

  cleanPrivateSelected() {
    this.usuarioPrivadoSelected = '';
  }

  responderMensaje(mensaje, slidingItem: IonItemSliding) {
    this.mensajeAResponser = mensaje;
    // this.usuarioPrivadoSelected = mensaje;
    slidingItem.close();
  }

  private async presentToastEmptyConversation() {
    const toast = await this.toastCtrl.create({
      message: 'Debes diligenciar el cuerpo de la comunicación.',
      duration: 3000
    });
    toast.present();
  }

  async enviarMensaje(nuevoMensaje) {
    debugger;
    if (!nuevoMensaje.send || nuevoMensaje.send.length == 0) {
      this.presentToastEmptyConversation();
      return;
    }

    const idUsuario = await this.getInfoUser();
    let usuariosPrivados = this.idsÜsuariosPrivadosSeleccionados;
    if ( usuariosPrivados.length >= 1  ) {
      usuariosPrivados = this.idsÜsuariosPrivadosSeleccionados;
    } else {
      usuariosPrivados = [];
    }

    let idMensajePadre = 0;
    if ( this.mensajeAResponser ) {
      idMensajePadre = this.mensajeAResponser.PKConversacionMensaje;
      if ( this.mensajeAResponser.Privado.length >= 1 ) {
        const usuariosPrivadosRespuesta = [];
        this.mensajeAResponser.Privado.forEach(element => {
          usuariosPrivadosRespuesta.push(element.FKUsuario);
        });
        usuariosPrivados = usuariosPrivadosRespuesta;
      }
    }

    if ( this.usuariosInactivosSeleccionados.length >= 1 ) {

      const usuariosConversacion = this.informacionConversacionSeleccionada.Usuarios;


      usuariosConversacion.forEach(element => {

        const encontro = this.usuariosInactivosSeleccionados.find(item => item === element.UsuarioNombre );

        if (encontro) {
          this.idsUsuariosInactivosSeleccionados.push(element.FKUsuario);
        }

      });

    }

    const mensaje = {
       PKConversacionMensaje: -1,
       PKConversacion: this.informacionConversacionSeleccionada.PKConversacion,
       PKUsuario: idUsuario,
       Mensaje: nuevoMensaje.send,
       UidMensajeRespuesta: idMensajePadre,
       LstUsuariosMensajePrivado: usuariosPrivados,
       LstUsuariosActivar: this.idsUsuariosInactivosSeleccionados,
       IP: '000.000.000.000'
    };

    // tslint:disable-next-line: deprecation
    this.talkService.saveMessageConversation(mensaje).subscribe(response => {
      debugger;
      if (response.IsOk === true) {
        this.formEnvioMensaje.get('send').reset();
        this.mensajeAResponser = '';
        this.idsÜsuariosPrivadosSeleccionados = [];
        this.idsUsuariosInactivosSeleccionados = [];
        this.usuarioPrivadoSelected = '';
        this.getInfoConversation();
      }
    });
  }

  cerrarMensajeResponder() {
    this.mensajeAResponser = undefined;
  }

  async mostrarInfoMensaje(mensaje) {
    const idUser: number = await this.getInfoUser();
    debugger;
    const usuariosLeidos = this.mostrarUsuariosLeidos(mensaje.FKUsuario, mensaje.Leido);
    const usuariosSinLeer = this.mostrarUsuariosNoLeidos(mensaje.FKUsuario, mensaje.Leido);
    const alert = await this.alertController.create({
      cssClass: 'textoParrafo',
      mode: 'ios',
      header: 'Detalle del mensaje',
      message: `<p>
      <strong>Mensaje: </strong> ${mensaje.Mensaje}
      <strong>Enviado por: </strong> ${mensaje.UsuarioNombre}
      <strong>Fecha: </strong> ${mensaje.FechaCorta}
      <strong style="color:blue">Leido por: </strong> ${usuariosLeidos}
      <strong>Pendiente por leer: </strong> ${usuariosSinLeer}
      </p>`,
      buttons: ['ACEPTAR']
    });

    await alert.present();
  }

  mostrarUsuariosLeidos(idUser: number, usuarios) {
    const usuariosLeidos = [];
    usuarios.forEach(element => {
      debugger;
      if (element.FKUsuario != idUser) {
        const nombre = element.UsuarioNombre;
        usuariosLeidos.push(nombre);
      }
    });
    return (usuariosLeidos.toString() == '') 
      ? 'Ninguno.'
      : usuariosLeidos.toString();
  }

  allUsersReadMessage(message): boolean {
    return this.informacionConversacionSeleccionada.Usuarios.length == message.Leido.length;
  }  

  conversationColor(message): string {
    if (this.idUsuario == message.FKUsuario) {
      if (message.EsPrivadoPorMi) return 'chatgreen';
      else return 'chatblue';
    }
    else {
      if (message.EsPrivadoParaMi) return 'chatgreen';
      else return 'chatwhite';
    }
  }

  textAlignConversation(message): string {
    return (this.idUsuario == message.FKUsuario)
      ? 'left'
      : 'right';
  }

  mostrarUsuariosNoLeidos(idUser, usuarios) {
    let usuariosSinLeer = [];
    const usuariosConversacion = this.informacionConversacionSeleccionada.Usuarios;
  
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < usuariosConversacion.length; i++) {
      const usuario = usuariosConversacion[i];
      const encontro = usuarios.find(item => item.FKUsuario === usuario.FKUsuario);
      if ( !encontro ) {
        usuariosSinLeer.push(usuario.UsuarioNombre);
      }
    }
    usuariosSinLeer.filter((user) => user.FKUsuario != idUser);

    return (usuariosSinLeer.toString() == '')
      ? 'Ninguno.'
      : usuariosSinLeer.toString();

  }

  async eliminarMensaje(mensaje, slidingItem: IonItemSliding) {
    const idUsuario = await this.getInfoUser();
    slidingItem.close();
    if (mensaje.Leido.length === 0) {
      const alert = await this.alertController.create({
        mode: 'ios',
        header: 'Eliminar Mensaje',
        message: `Esta seguro que desea eliminar el mensaje de esta conversación`,
        buttons: [{
          text: 'CANCELAR'
        }, {
          text: 'ACEPTAR',
          handler: () => {
            const objEliminarMensaje = {
              PKConversacionMensaje: mensaje.PKConversacionMensaje,
              PKUsuario: idUsuario,
              Mensaje: mensaje.Mensaje,
              Eliminar: true
            };
            // tslint:disable-next-line: deprecation
            this.talkService.deleteMessage(objEliminarMensaje).subscribe(response => {
              if (response.IsOk === true) {
                this.notification('Atención', 'Mensaje eliminado con exito');
                this.getInfoConversation();
              }
            });
          }
        }]
      });
      await alert.present();

    } else {
      const alertNoSePudoEliminar = await this.alertController.create({
        mode: 'ios',
        header: 'Eliminar Mensaje',
        message: `No se puede eliminar este mensaje, ya fue visto por algun integrante de la conversación.`,
        buttons: ['ACEPTAR']
      });
      await alertNoSePudoEliminar.present();
    }

  }

  async editarMensaje(mensaje, slidingItem: IonItemSliding) {
    const idUsuario = await this.getInfoUser();
    slidingItem.close();

    if (mensaje.Leido.length === 0) {
      const alert = await this.alertController.create({
        mode: 'ios',
        header: 'Editar Mensaje',
        message: `${mensaje.Mensaje}`,
        inputs: [
          {
            name: 'editarMensaje',
            id: 'editarMensaje',
            type: 'textarea',
            placeholder: 'Editar Mensaje'
          }
        ],
        buttons: [{
          text: 'Cancelar',
          handler: () => {
            console.log('editar Cancel');
          }
        },
        {
          text: 'Aceptar',
          handler: (data) => {
            const nuevoMensaje = data.editarMensaje;
            const objMensajeAEditar = {
              PKConversacionMensaje: mensaje.PKConversacionMensaje,
              PKUsuario: idUsuario,
              Mensaje: nuevoMensaje,
              Eliminar: false
            };
            // tslint:disable-next-line: deprecation
            this.talkService.deleteMessage(objMensajeAEditar).subscribe(response => {
              if (response.IsOk === true) {
                this.notification('Atención', 'Mensaje editado con exito');
                this.getInfoConversation();
              }
            });
          }
        }]
      });

      await alert.present();
    } else {
      const alertNoSePudoEditar = await this.alertController.create({
        mode: 'ios',
        header: 'Editar Mensaje',
        message: `No se puede editar este mensaje, ya fue visto por algún integrante de la conversación.`,
        buttons: ['ACEPTAR']
      });
      await alertNoSePudoEditar.present();
    }

  }

  async notification(titulo, notificacion) {
    const alert = await this.alertController.create({
      header: titulo,
      backdropDismiss: false,
      mode: 'ios',
      message: notificacion,
      buttons: ['ACEPTAR']
    });

    await alert.present();
    alert.onDidDismiss();

  }


  async getInfoUser(): Promise<number> {
    const infoUsuarioIngresado = await this.storage.get('sesion');
    const idUSuario = parseInt(infoUsuarioIngresado.idRegistro, 10);
    return idUSuario;
  }



}
