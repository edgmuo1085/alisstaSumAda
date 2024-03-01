import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignatureWithoutQRComponent } from './signature-without-qr.component';

describe('SignatureWithoutQRComponent', () => {
  let component: SignatureWithoutQRComponent;
  let fixture: ComponentFixture<SignatureWithoutQRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignatureWithoutQRComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SignatureWithoutQRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
