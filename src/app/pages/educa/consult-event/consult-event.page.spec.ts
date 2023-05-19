import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultEventPage } from './consult-event.page';

describe('ConsultEventPage', () => {
  let component: ConsultEventPage;
  let fixture: ComponentFixture<ConsultEventPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultEventPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultEventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
