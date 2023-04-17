import { TestBed } from '@angular/core/testing';

import { AcceptedAppointmentService } from './accepted.appointment.service';

describe('AcceptedAppointmentService', () => {
  let service: AcceptedAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcceptedAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
