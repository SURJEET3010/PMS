import { TestBed } from '@angular/core/testing';

import { PrescribedService } from './prescribed.service';

describe('PrescribedService', () => {
  let service: PrescribedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrescribedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
