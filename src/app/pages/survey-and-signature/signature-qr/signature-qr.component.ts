import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AdvisoryVerificationComponent } from '../../../components/advisory-verification/advisory-verification.component';
import { CacheService } from '../../../services/cache/cache.service';
import { NetworkService } from '../../../services/network/network.service';
import { SignaturePadComponent } from 'src/app/components/signature-pad/signature-pad.component';

@Component({
  selector: 'app-signature-qr',
  templateUrl: './signature-qr.component.html',
  styleUrls: ['./signature-qr.component.scss'],
})
export class SignatureQRComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  public signaturePadOptions: Object = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 300,
  };

  disableBtnSendTask = false;leerArchivos

  infoUserARL: any;
  signatureEntered: any;

  valueNetwork: any;

  actasAsesoria = [];

  @Output() infoEnteredSignatureQR = new EventEmitter();

  constructor(
    private storage: Storage,
    private cacheService: CacheService,
    private router: Router,
    private net: NetworkService,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getInfoUser();
  }

  async getInfoUser() {
    this.infoUserARL = await this.storage.get('sesion');
  }

  drawComplete(signature: string) {
    // will be notified of szimek/signature_pad's onEnd event
    const firma = signature.split(',');
    this.signatureEntered = firma[0].concat(',').concat(' ').concat(firma[1]);
    console.log("valor firma: ", this.signatureEntered)
    if (this.signatureEntered) {
      this.disableBtnSendTask = true;
    } else {
      this.disableBtnSendTask = false;
    }
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing x2');
  }

  clear(signaturePadComponent: SignaturePadComponent) {
    signaturePadComponent.clear();
    this.disableBtnSendTask = false;
  }

  handleClear(isEmpty: boolean): void {
    console.log('¿La firma está vacía?:', isEmpty);
    this.disableBtnSendTask = !isEmpty;
  }

  sendInfoSignatureQR() {
    const infoSignatureQR = {
      nombreResponsableARL: this.infoUserARL.nombres,
      apellidosResponsableARL: this.infoUserARL.apellidos,
      cargo: this.infoUserARL.cargo,
      licenciaSST: this.infoUserARL.idLicenciaSst,
      numeroDocumentoEmpresa: this.infoUserARL.idProveedor,
      nombreProveedor: this.infoUserARL.nombreProveedor,
      documentoUsuarioARL: this.infoUserARL.idPersona,
      signatureEntered: this.signatureEntered,
    };
    this.infoEnteredSignatureQR.emit(infoSignatureQR);
  }

  async verification() {
    const infoActa = this.cacheService.getAllInfoToAdvisory();
    const modal = await this.modalCtrl.create({
      component: AdvisoryVerificationComponent,
      componentProps: {
        info: infoActa,
      },
    });

    modal.present();
  }
}
