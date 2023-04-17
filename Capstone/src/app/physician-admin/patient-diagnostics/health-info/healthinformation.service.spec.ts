import { TestBed } from '@angular/core/testing';

import { HealthinformationService } from './healthinformation.service';

describe('HealthinformationService', () => {
  let service: HealthinformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthinformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
