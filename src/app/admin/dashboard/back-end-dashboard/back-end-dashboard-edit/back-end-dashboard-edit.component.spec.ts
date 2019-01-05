import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndDashboardEditComponent } from './back-end-dashboard-edit.component';

describe('BackEndDashboardEditComponent', () => {
  let component: BackEndDashboardEditComponent;
  let fixture: ComponentFixture<BackEndDashboardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndDashboardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndDashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
