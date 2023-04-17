import { TestBed } from '@angular/core/testing';

import { PrescriptionHistoryService } from './prescription.history.service';

describe('PrescriptionHistoryService', () => {
  let service: PrescriptionHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescriptionHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
