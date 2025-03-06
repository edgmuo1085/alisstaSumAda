import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecommendationDetailComponent } from './recommendation-detail.component';

describe('RecommendationDetailComponent', () => {
  let component: RecommendationDetailComponent;
  let fixture: ComponentFixture<RecommendationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationDetailComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(RecommendationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
