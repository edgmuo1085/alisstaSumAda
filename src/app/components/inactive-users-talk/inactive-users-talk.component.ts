import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { TalkService } from '../../services/talk/talk.service';

@Component({
  selector: 'app-inactive-users-talk',
  templateUrl: './inactive-users-talk.component.html',
  styleUrls: ['./inactive-users-talk.component.scss'],
})
export class InactiveUsersTalkComponent implements OnInit {
  /**
   * La idea de InactiveUsersTalkComponent es mostrar los usuarios de la conversación, cuando se llame el popover
   * (Pero esta en construcción, esto es llamado desde page/communications/talk)
   */

  items: any[];

  constructor(
    private popoverCtrl: PopoverController,
    private talkService: TalkService
  ) {}

  ngOnInit() {
    this.getUsuariosInactivos();
  }

  onClick(valor) {
    this.popoverCtrl.dismiss({
      item: valor,
    });
  }

  getUsuariosInactivos() {
    const usuariosInactivos = [];
    const usuariosConversacion = this.talkService.getSelectedConversation();
    usuariosConversacion.Usuarios.forEach(element => {
      if (element.Estado === 'A') {
        usuariosInactivos.push(element);
      }
    });

    this.items = usuariosInactivos;
  }
}
