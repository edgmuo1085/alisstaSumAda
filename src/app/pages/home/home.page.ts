import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuConfiguracionService } from '../../services/menu-configuracion.service';
import { Router } from '@angular/router';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { NativeBiometric, BiometryType } from '@capgo/capacitor-native-biometric';
import { StorageService } from 'src/app/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  optMenuMain: Observable<any[]>;
  isShowLoginWithFinger = false;
  isLoginWithFinger = false;
  isAutologin = false;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private menuService: MenuConfiguracionService,
    private platform: Platform,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.optMenuMain = this.menuService.getMenuMain();
    // No await en ngOnInit directo para mantener compatibilidad; llamamos a initAsync
    this.initAsync();
  }

  private async initAsync() {
    await this.platform.ready();

    try {
      const available = await NativeBiometric.isAvailable();

      // Si no hay biometría disponible, salimos (pero mantenemos la lógica de storage)
      if (!available.isAvailable) {
        console.log('Biometría no disponible en este dispositivo.');
        // Aun así intentamos cargar valores del storage para coherencia del UI
        await this.loadStorageFlags();
        return;
      }

      // Cargamos banderas desde el storage
      await this.loadStorageFlags();

      // Si la bandera autologin no existe la inicializamos
      const autologin = await this.storageService.get('autologin');
      if (autologin != null) {
        this.isAutologin = autologin;
      } else {
        await this.storageService.set('autologin', true);
        this.isAutologin = true;
      }

      // Si no está configurado mostrar login biométrico ni autologin, mostramos la alerta
      if (!this.isShowLoginWithFinger && !this.isLoginWithFinger && !this.isAutologin) {
        await this.presentAlertConfirm();
      }
    } catch (error) {
      console.error('Error verificando disponibilidad biométrica:', error);
      // Intentamos al menos cargar valores del storage para que el UI esté consistente
      await this.loadStorageFlags();
    }
  }

  private async loadStorageFlags() {
    try {
      const isLoginWithFinger = await this.storageService.get('isLoginWithFinger');
      this.isLoginWithFinger = isLoginWithFinger != null ? isLoginWithFinger : false;

      const showLoginWithFinger = await this.storageService.get('showLoginWithFinger');
      this.isShowLoginWithFinger = showLoginWithFinger != null ? showLoginWithFinger : false;
    } catch (err) {
      console.error('Error leyendo storage flags:', err);
      this.isLoginWithFinger = false;
      this.isShowLoginWithFinger = false;
    }
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: '¡Bienvenido!',
      mode: 'ios',
      message:
        '<strong>Hola! </strong>Detectamos que tu dispositivo cuenta con TouchID/FaceID. ¿Te gustaría iniciar sesión la próxima vez con esta tecnología?',
      buttons: [
        {
          text: 'Si',
          handler: async () => {
            await this.storageService.set('showLoginWithFinger', true);
            await this.storageService.set('activateFinger', true);
            await this.storageService.set('isLoginWithFinger', true);
            this.toastConfirmBiometric();
          },
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: async () => {
            await this.storageService.set('showLoginWithFinger', false);
            await this.storageService.set('activateFinger', false);
            await this.storageService.set('isLoginWithFinger', false);
            await this.storageService.remove('valueOne');
            await this.storageService.remove('valueTwo');
            await this.storageService.remove('valueThree');
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
    await toast.present();
  }

  async alertCancelBiometric() {
    const alert = await this.alertController.create({
      header: '¡Recuerda!',
      message: 'Puedes cambiar tus ajustes desde el menú configuración.',
      buttons: [{ text: 'Aceptar' }],
    });
    await alert.present();
  }

  optionSelectedMenu(menuSelected: any) {
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
      default:
        break;
    }
  }
}
