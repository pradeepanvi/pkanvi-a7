import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndDashboardComponent } from './back-end-dashboard.component';

describe('BackEndDashboardComponent', () => {
  let component: BackEndDashboardComponent;
  let fixture: ComponentFixture<BackEndDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackEndDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
