import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AppStorageService } from 'src/app/app-storage.service';
import { SignaturePadComponent } from 'src/app/components/signature-pad/signature-pad.component';

@Component({
  selector: 'app-signature-without-qr',
  templateUrl: './signature-without-qr.component.html',
  styleUrls: ['./signature-without-qr.component.scss'],
})
export class SignatureWithoutQRComponent implements OnInit {

  @ViewChild(SignaturePadComponent) signaturePad!: SignaturePadComponent;

  pollSelectedExce = false;
  pollSelectedBue = false;
  pollSelectedReg = false;
  pollSelectedDef = false;

  answerPoll: any;
  signatureEntered: string;
  signatureEnteredARL: string;

  public signaturePadOptions: any = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 300,
  };

  @Input() namePersonSignature: any;
  @Input() verificationCodeInput: number;

  showSignature = false;
  enableBtnGuardar = false;

  @Output() infoSignatureWithoutQR = new EventEmitter();

  infoUserARL: any;

  constructor(
    private alertController: AlertController,
    private appStorage: AppStorageService
  ) {}

  ngOnInit() {
    this.getInfoUser();
  }

  async getInfoUser() {
    this.infoUserARL = await this.appStorage.get('sesion');
  }

  radioSelected(selectedPoll) {
    switch (selectedPoll) {
      case 'Excelente':
        this.pollSelectedExce = true;
        this.pollSelectedReg = false;
        this.pollSelectedBue = false;
        this.pollSelectedDef = false;
        this.showSignature = true;
        this.answerPoll = 'Excelente';
        break;

      case 'Bueno':
        this.pollSelectedBue = true;
        this.pollSelectedExce = false;
        this.pollSelectedReg = false;
        this.pollSelectedDef = false;
        this.showSignature = true;
        this.answerPoll = 'Bueno';
        break;

      case 'Regular':
        this.pollSelectedReg = true;
        this.pollSelectedExce = false;
        this.pollSelectedBue = false;
        this.pollSelectedDef = false;
        this.showSignature = true;
        this.answerPoll = 'Regular';
        break;

      case 'Deficiente':
        this.pollSelectedDef = true;
        this.pollSelectedExce = false;
        this.pollSelectedBue = false;
        this.pollSelectedReg = false;
        this.showSignature = true;
        this.answerPoll = 'Deficiente';
        break;
    }
  }

  drawComplete(signature: string) {
    const firma = signature.split(',');
    this.signatureEntered = firma[0].concat(', ').concat(firma[1]);
    this.enableBtnGuardar = !!this.signatureEntered;
  }

  drawStart() {
    console.log('begin drawing x3');
  }

  clear() {
    this.signaturePad.clear();
    this.enableBtnGuardar = false;
  }

  handleClear(isEmpty: boolean): void {
    this.enableBtnGuardar = !isEmpty;
  }

  saveSignatureWithoutQR() {
    const infoWithoutQR = {
      answerPoll: this.answerPoll,
      signatureEntered: this.signatureEntered,
    };

    this.infoSignatureWithoutQR.emit(infoWithoutQR);
  }
}
