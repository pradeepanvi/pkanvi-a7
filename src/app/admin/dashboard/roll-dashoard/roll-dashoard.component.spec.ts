import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RollDashoardComponent } from './roll-dashoard.component';

describe('RollDashoardComponent', () => {
  let component: RollDashoardComponent;
  let fixture: ComponentFixture<RollDashoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RollDashoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RollDashoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
