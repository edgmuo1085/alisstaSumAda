import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { VisitHistoryDetailPageComponent } from './visit-history-detail.page';



describe('VisitSubjectsPage', () => {
  let component: VisitHistoryDetailPageComponent;
  let fixture: ComponentFixture<VisitHistoryDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VisitHistoryDetailPageComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(VisitHistoryDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
