import { TestBed } from '@angular/core/testing';

import { TodayAppointmentsService } from './today.appointments.service';

describe('TodayAppointmentsService', () => {
  let service: TodayAppointmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayAppointmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
