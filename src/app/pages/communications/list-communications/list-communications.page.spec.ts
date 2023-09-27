import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCommunicationsPage } from './list-communications.page';

describe('ListCommunicationsPage', () => {
  let component: ListCommunicationsPage;
  let fixture: ComponentFixture<ListCommunicationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListCommunicationsPage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCommunicationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
