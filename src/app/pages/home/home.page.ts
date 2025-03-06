import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Router } from '@angular/router';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { StorageService } from 'src/app/storage.service';

/**
 * Componente de la vista de inicio.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  /**
   * Array de opciones del menú de configuración
   */
  optMenuMain: Observable<any[]>;

  isShowLoginWithFinger = false;

  isLoginWithFinger = false;

  isAutologin = false;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private menuService: MenuConfiguracionService,
    private faio: FingerprintAIO,
    private platform: Platform,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.optMenuMain = this.menuService.getMenuMain();

    this.platform.ready().then(() => {
      this.faio
        .isAvailable()
        .then((ava: any) => {
          this.storageService
            .get('isLoginWithFinger')
            .then(result => {
              if (result != null) {
                this.isLoginWithFinger = result;
              }
            })
            .catch(e => {
              console.log('error: ' + e);
            });
          this.storageService
            .get('showLoginWithFinger')
            .then(result => {
              if (result != null) {
                this.isLoginWithFinger = result;
              }
            })
            .catch(e => {
              console.log('error: ' + e);
            });
          this.storageService
            .get('autologin')
            .then(result => {
              if (result != null) {
                this.isAutologin = result;
              } else {
                this.storageService.set('autologin', true);
              }
              if (!this.isShowLoginWithFinger && !this.isLoginWithFinger && !this.isAutologin) {
                this.presentAlertConfirm();
              }
            })
            .catch(e => {
              console.log('error: ' + e);
            });
        })
        .catch((error: any) => {
          console.log(error);
        });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¡Bienvenido!',
      mode: 'ios',
      message:
        '<strong>Hola! </strong>Detectamos ' +
        'que tu dispositivo cuenta con TouchID/FaceID ' +
        '¿Te gustaría iniciar sesión la próxima vez con esta tecnología?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.storageService.set('showLoginWithFinger', true);
            this.storageService.set('activateFinger', true);
            this.toastConfirmBiometric();
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.storageService.set('showLoginWithFinger', false);
            this.storageService.set('activateFinger', false);
            this.storageService.remove('valueOne');
            this.storageService.remove('valueTwo');
            this.storageService.remove('valueThree');
            this.alertCancelBiometric();
          },
        },
      ],
    });
    await alert.present();
  }

  async toastConfirmBiometric() {
    const toast = await this.toastController.create({
      message: 'TouchID/FaceID Activado',
      duration: 2000,
    });
    toast.present();
  }

  async alertCancelBiometric() {
    const alert = await this.alertController.create({
      header: '¡Recuerda!',
      message: 'Puedes cambiar tus ajustes desde el menú configuración.',
      buttons: [
        {
          text: 'Aceptar',
        },
      ],
    });
    await alert.present();
  }

  optionSelectedMenu(menuSelected) {
    switch (menuSelected.title) {
      case 'Comunicaciones':
        this.router.navigateByUrl('u/list-communications');

        break;
      case 'Registro ejecución de actividades':
        this.router.navigateByUrl('u/execLog');

        break;
      case 'Eventos Positiva':
        this.router.navigateByUrl('u/consultEvent');

        break;
      case 'Actualizar Datos Empresa':
        this.router.navigateByUrl('u/companies');

        break;
    }
  }
}
