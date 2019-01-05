import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDashboardEditComponent } from './portfolio-dashboard-edit.component';

describe('PortfolioDashboardEditComponent', () => {
  let component: PortfolioDashboardEditComponent;
  let fixture: ComponentFixture<PortfolioDashboardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioDashboardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
