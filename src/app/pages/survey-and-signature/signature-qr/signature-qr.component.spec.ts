import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureQRComponent } from './signature-qr.component';

describe('SignatureQRComponent', () => {
  let component: SignatureQRComponent;
  let fixture: ComponentFixture<SignatureQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignatureQRComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
