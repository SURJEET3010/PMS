import { TestBed } from '@angular/core/testing';

import { AddVisitService } from './add.visit.service';

describe('AddVisitService', () => {
  let service: AddVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
