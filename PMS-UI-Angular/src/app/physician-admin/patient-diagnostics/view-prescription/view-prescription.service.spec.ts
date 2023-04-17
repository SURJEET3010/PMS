import { TestBed } from '@angular/core/testing';

import { ViewPrescriptionService } from './view-prescription.service';

describe('ViewPrescriptionService', () => {
  let service: ViewPrescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPrescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
