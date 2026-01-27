import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ProcessTrackerService } from
  'src/app/services/activities/advisoryTopic/process-tracker.service';

export interface ProcessStep {
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-process-tracker-modal',
  templateUrl: './process-tracker-modal.component.html',
  styleUrls: ['./process-tracker-modal.component.scss'],
})
export class ProcessTrackerModalComponent implements OnDestroy {

  header = '';
  steps: ProcessStep[] = [];
  finished = false;
  success = true;

  private destroy$ = new Subject<void>();

  constructor(
    private modalCtrl: ModalController,
    private tracker: ProcessTrackerService
  ) {
    this.subscribeToState();
  }

  private subscribeToState() {
    this.tracker.header$
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => this.header = v);

    this.tracker.steps$
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => this.steps = v);

    this.tracker.finished$
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => this.finished = v);

    this.tracker.success$
      .pipe(takeUntil(this.destroy$))
      .subscribe(v => this.success = v);
  }

  get activeIndex(): number {
    return this.steps.findIndex(s => !s.done);
  }

  close() {
    this.destroy();
    this.modalCtrl.dismiss();
  }

  ngOnDestroy() {
    this.destroy();
  }

  private destroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
