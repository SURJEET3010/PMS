import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayAppointmentComponent } from './today-appointment.component';

describe('TodayAppointmentComponent', () => {
  let component: TodayAppointmentComponent;
  let fixture: ComponentFixture<TodayAppointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayAppointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
