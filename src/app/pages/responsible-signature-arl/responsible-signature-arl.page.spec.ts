import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResponsibleSignatureARLPage } from './responsible-signature-arl.page';

describe('ResponsibleSignatureARLPage', () => {
  let component: ResponsibleSignatureARLPage;
  let fixture: ComponentFixture<ResponsibleSignatureARLPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsibleSignatureARLPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ResponsibleSignatureARLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
