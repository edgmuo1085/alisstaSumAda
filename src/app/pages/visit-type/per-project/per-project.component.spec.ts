import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerProjectComponent } from './per-project.component';

describe('PerProjectComponent', () => {
  let component: PerProjectComponent;
  let fixture: ComponentFixture<PerProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PerProjectComponent],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
