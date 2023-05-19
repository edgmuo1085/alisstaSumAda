import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TasksToSendPage } from './tasks-to-send.page';

describe('TasksToSendPage', () => {
  let component: TasksToSendPage;
  let fixture: ComponentFixture<TasksToSendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksToSendPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksToSendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
