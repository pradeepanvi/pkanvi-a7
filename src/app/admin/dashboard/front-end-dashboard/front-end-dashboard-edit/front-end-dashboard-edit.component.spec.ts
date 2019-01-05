import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndDashboardEditComponent } from './front-end-dashboard-edit.component';

describe('FrontEndDashboardEditComponent', () => {
  let component: FrontEndDashboardEditComponent;
  let fixture: ComponentFixture<FrontEndDashboardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEndDashboardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndDashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
