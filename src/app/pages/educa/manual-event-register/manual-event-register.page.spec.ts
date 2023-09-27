import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManualEventRegisterPage } from './manual-event-register.page';

describe('ManualEventRegisterPage', () => {
  let component: ManualEventRegisterPage;
  let fixture: ComponentFixture<ManualEventRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ManualEventRegisterPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ManualEventRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
