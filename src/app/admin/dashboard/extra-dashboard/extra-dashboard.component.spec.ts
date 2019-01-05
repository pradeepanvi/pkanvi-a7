import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraDashboardComponent } from './extra-dashboard.component';

describe('ExtraDashboardComponent', () => {
  let component: ExtraDashboardComponent;
  let fixture: ComponentFixture<ExtraDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
