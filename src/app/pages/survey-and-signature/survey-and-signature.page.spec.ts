import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SurveyAndSignaturePage } from './survey-and-signature.page';

describe('SurveyAndSignaturePage', () => {
  let component: SurveyAndSignaturePage;
  let fixture: ComponentFixture<SurveyAndSignaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyAndSignaturePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(SurveyAndSignaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
