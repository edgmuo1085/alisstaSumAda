import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-signature-without-qr',
  templateUrl: './signature-without-qr.component.html',
  styleUrls: ['./signature-without-qr.component.scss'],
})
export class SignatureWithoutQRComponent implements OnInit {


  pollSelectedExce = false;
  pollSelectedBue = false;
  pollSelectedReg = false;
  pollSelectedDef = false;

  answerPoll: {};

  signatureEntered: string;

  signatureEnteredARL: string;

  @ViewChild(SignaturePad) signaturePad: SignaturePad;


  // tslint:disable-next-line: ban-types
  public signaturePadOptions: Object = {
    maxWidth: 1,
    minWidth: 1,
    canvasWidth: 300,
    canvasHeight: 300
  };


  @Input() namePersonSignature: any;
  @Input() verificationCodeInput: number;
  showSignature = false;

  @Output() infoSignatureWithoutQR = new EventEmitter();

  infoUserARL: any;

  enableBtnGuardar = false;

  constructor(private alertController: AlertController, private storage: Storage) { }

  ionViewDidEnter() {
  }

  ngOnInit() {
    this.getInfoUser();
  }

  async getInfoUser() {
    this.infoUserARL = await this.storage.get('sesion');
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
      default:
        break;
    }

  }

  drawComplete() {
    const firma = this.signaturePad.toDataURL().split(',');
    this.signatureEntered = firma[0].concat(',').concat(' ').concat(firma[1]);
    if (this.signatureEntered) {
      this.enableBtnGuardar = true;
    } else {
      this.enableBtnGuardar = false;
    }
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  clear() {
    this.signaturePad.clear();
    this.enableBtnGuardar = false;
  }

  saveSignatureWithoutQR() {
    const infoWithoutQR = {
      answerPoll: this.answerPoll,
      signatureEntered: this.signatureEntered,
    };
    this.infoSignatureWithoutQR.emit(infoWithoutQR);
  }

}
