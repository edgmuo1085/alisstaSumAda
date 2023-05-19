import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendingVisitsPage } from './pending-visits.page';

describe('PendingVisitsPage', () => {
  let component: PendingVisitsPage;
  let fixture: ComponentFixture<PendingVisitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingVisitsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendingVisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
