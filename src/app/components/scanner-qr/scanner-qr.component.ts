import { Component, OnDestroy } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scanner-qr',
  templateUrl: './scanner-qr.component.html',
  styleUrls: ['./scanner-qr.component.scss'],
})
export class ScannerQrComponent implements OnDestroy {
  result: any = null;
  scanActive: boolean = false;

  constructor(
    private modalCtrl: ModalController,
    private alertCtl: AlertController
  ) {}

  ngOnDestroy(): void {
    this.stopBarcodeRemove('');
  }

  async startBarcode(): Promise<void> {
    const allowed = await this.checkPermission();

    if (!allowed) {
      return;
    }

    document.querySelector('body').classList.add('scanner-active');
    // make background of WebView transparent
    // note: if you are using ionic this might not be enough, check below
    BarcodeScanner.hideBackground();
    this.scanActive = true;
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

    // if the result has content
    if (result.hasContent) {
      this.result = result.content;
      this.stopBarcodeRemove(result.content);
    }
  }

  async checkPermission(): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      // Check camera permission
      // This is just a simple example, check out the better checks below
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        resolve(true);
        return;
      }

      if (status.denied) {
        const alert = await this.alertCtl.create({
          header: 'Sin autorización',
          message: 'Por favor permita el acceso a la cámara en su configuración',
          buttons: [
            {
              text: 'No',
              role: 'cancel',
            },
            {
              text: 'Abrir configuración',
              handler: () => {
                BarcodeScanner.openAppSettings();
                resolve(false);
              },
            },
          ],
        });

        await alert.present();
        return;
      }

      resolve(false);
      return;
    });
  }

  stopBarcodeRemove(msg: any) {
    BarcodeScanner.stopScan();
    BarcodeScanner.showBackground();
    this.scanActive = false;
    document.querySelector('body').classList.remove('scanner-active');
    this.modalCtrl.dismiss({
      response: msg ? msg : null,
    });
  }

  cerrarModal() {
    return this.modalCtrl.dismiss();
  }
}
