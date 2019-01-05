import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDashboardEditComponent } from './extra-dashboard-edit.component';

describe('ExtraDashboardEditComponent', () => {
  let component: ExtraDashboardEditComponent;
  let fixture: ComponentFixture<ExtraDashboardEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraDashboardEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraDashboardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
