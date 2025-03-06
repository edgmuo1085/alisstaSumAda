import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoRegisterEventManualPage } from './info-register-event-manual.page';

describe('InfoRegisterEventManualPage', () => {
  let component: InfoRegisterEventManualPage;
  let fixture: ComponentFixture<InfoRegisterEventManualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InfoRegisterEventManualPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoRegisterEventManualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
