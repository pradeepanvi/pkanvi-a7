import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollDashboardEditComponent } from './roll-dashboard-edit.component';

describe('RollDashboardEditComponent', () => {
  let component: RollDashboardEditComponent;
  let fixture: ComponentFixture<RollDashboardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollDashboardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollDashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
