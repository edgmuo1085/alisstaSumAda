import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessTrackerModalComponent } from './process-tracker-modal.component';

describe('ProcessTrackerModalComponent', () => {
  let component: ProcessTrackerModalComponent;
  let fixture: ComponentFixture<ProcessTrackerModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessTrackerModalComponent]
    });
    fixture = TestBed.createComponent(ProcessTrackerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
