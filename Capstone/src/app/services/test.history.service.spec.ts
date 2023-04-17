import { TestBed } from '@angular/core/testing';

import { TestHistoryService } from './test.history.service';

describe('TestHistoryService', () => {
  let service: TestHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
