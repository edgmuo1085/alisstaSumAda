import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss']
})
export class SignaturePadComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  private signaturePad!: SignaturePad;

  @Output() onBeginEvent = new EventEmitter<void>(); // Notifica cuando se inicia el dibujo
  @Output() onEndEvent = new EventEmitter<string>(); // Notifica cuando se finaliza el dibujo (devuelve la firma como base64)
  @Output() onClear = new EventEmitter<boolean>();

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;
    this.signaturePad = new SignaturePad(canvas);

    // Listeners para eventos de inicio y fin de dibujo
    this.signaturePad.addEventListener ( "beginStroke", () => {
      this.onBeginEvent.emit(); // Emite el evento de inicio
      console.log("Inicio emitido vacio");
    });

    this.signaturePad.addEventListener ("endStroke", () => {
      const signatureDataUrl = this.signaturePad.toDataURL();
      this.onEndEvent.emit(signatureDataUrl); // Emite la firma como base64
      this.onClear.emit(this.signatureValidate());
    });
  }

  clear(): void {
    this.signaturePad.clear();
    this.onClear.emit(this.signatureValidate());
  }

  getSignature(): string {
    return this.signaturePad.toDataURL(); // Retorna la firma como base64
  }

  signatureValidate(): boolean{
    return this.signaturePad.isEmpty();
  }
}
