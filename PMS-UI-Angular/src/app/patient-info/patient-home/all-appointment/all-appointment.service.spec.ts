import { TestBed } from '@angular/core/testing';

import { AllAppointmentService } from './all-appointment.service';

describe('AllAppointmentService', () => {
  let service: AllAppointmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllAppointmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
