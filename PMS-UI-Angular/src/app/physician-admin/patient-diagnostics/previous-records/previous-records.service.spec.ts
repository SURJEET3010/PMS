import { TestBed } from '@angular/core/testing';

import { PreviousRecordsService } from './previous-records.service';

describe('PreviousRecordsService', () => {
  let service: PreviousRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
