import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProcessTrackerModalComponent, ProcessStep } from
  'src/app/pages/process-tracker-modal/process-tracker-modal.component';

@Injectable({ providedIn: 'root' })
export class ProcessTrackerService {

  private modal: HTMLIonModalElement | null = null;

  // 🔹 STATE (privado)
  private stepsSubject = new BehaviorSubject<ProcessStep[]>([]);
  private headerSubject = new BehaviorSubject<string>('Procesando...');
  private finishedSubject = new BehaviorSubject<boolean>(false);
  private successSubject = new BehaviorSubject<boolean>(true);

  // 🔹 STREAMS (públicos, solo lectura)
  steps$: Observable<ProcessStep[]> = this.stepsSubject.asObservable();
  header$: Observable<string> = this.headerSubject.asObservable();
  finished$: Observable<boolean> = this.finishedSubject.asObservable();
  success$: Observable<boolean> = this.successSubject.asObservable();

  constructor(private modalCtrl: ModalController) { }

  // ---------------------------
  // INICIO DEL PROCESO
  // ---------------------------
  async startProcess(initialStep: string) {
    this.resetState();

    this.stepsSubject.next([{ text: initialStep, done: false }]);

    this.modal = await this.modalCtrl.create({
      component: ProcessTrackerModalComponent,
      backdropDismiss: false,
      cssClass: 'process-tracker-centered-modal'
    });

    await this.modal.present();

    // Limpieza al cerrar
    this.modal.onDidDismiss().then(() => this.resetState());
  }

  // ---------------------------
  // API DEL PROCESO
  // ---------------------------
  addStep(text: string) {
    const steps = this.stepsSubject.value;
    this.stepsSubject.next([...steps, { text, done: false }]);
  }

  completeLastStep() {
    const steps = [...this.stepsSubject.value];

    if (!steps.length) return;

    steps[steps.length - 1].done = true;
    this.stepsSubject.next(steps);
  }

  finish(success: boolean, finalMessage: string) {
    const steps = this.stepsSubject.value;
    this.stepsSubject.next([...steps, { text: finalMessage, done: success }]);

    this.headerSubject.next(success ? '✔️ Éxito' : '❌ Error');
    this.successSubject.next(success);
    this.finishedSubject.next(true);
  }

  // ---------------------------
  // RESET (clave)
  // ---------------------------
  private resetState() {
    this.stepsSubject.next([]);
    this.headerSubject.next('Procesando...');
    this.finishedSubject.next(false);
    this.successSubject.next(true);
  }

  closeModal() {
    this.modal?.dismiss();
    this.modal = null;
  }
}
