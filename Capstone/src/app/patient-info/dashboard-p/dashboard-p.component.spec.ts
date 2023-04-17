import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPComponent } from './dashboard-p.component';

describe('DashboardPComponent', () => {
  let component: DashboardPComponent;
  let fixture: ComponentFixture<DashboardPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
