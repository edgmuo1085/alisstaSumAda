import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppStorageService } from 'src/app/app-storage.service';
import { AdvisoryVerificationComponent } from '../../../components/advisory-verification/advisory-verification.component';
import { CacheService } from '../../../services/cache/cache.service';
import { SignaturePadComponent } from 'src/app/components/signature-pad/signature-pad.component';

@Component({
  selector: 'app-signature-qr',
  templateUrl: './signature-qr.component.html',
  styleUrls: ['./signature-qr.component.scss'],
})
export class SignatureQRComponent implements OnInit {

  public signaturePadOptions: any = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 300,
  };

  disableBtnSendTask = false;

  infoUserARL: any;
  signatureEntered: any;

  @Output() infoEnteredSignatureQR = new EventEmitter();

  constructor(
    private appStorage: AppStorageService,
    private cacheService: CacheService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.getInfoUser();
  }

  async getInfoUser() {
    this.infoUserARL = await this.appStorage.get('sesion');
  }

  drawComplete(signature: string) {
    const firma = signature.split(',');
    this.signatureEntered = firma[0].concat(', ').concat(firma[1]);
    this.disableBtnSendTask = !!this.signatureEntered;
  }

  drawStart() {
    console.log('begin drawing x2');
  }

  clear(signaturePadComponent: SignaturePadComponent) {
    signaturePadComponent.clear();
    this.disableBtnSendTask = false;
  }

  handleClear(isEmpty: boolean): void {
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
      componentProps: { info: infoActa },
    });

    modal.present();
  }
}
