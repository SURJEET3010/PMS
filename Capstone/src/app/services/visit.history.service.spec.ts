import { TestBed } from '@angular/core/testing';

import { VisitHistoryService } from './visit.history.service';

describe('VisitHistoryService', () => {
  let service: VisitHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisitHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
