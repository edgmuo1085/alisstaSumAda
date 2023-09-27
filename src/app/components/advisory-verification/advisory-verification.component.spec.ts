import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdvisoryVerificationComponent } from './advisory-verification.component';

describe('AdvisoryVerificationComponent', () => {
  let component: AdvisoryVerificationComponent;
  let fixture: ComponentFixture<AdvisoryVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvisoryVerificationComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvisoryVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
