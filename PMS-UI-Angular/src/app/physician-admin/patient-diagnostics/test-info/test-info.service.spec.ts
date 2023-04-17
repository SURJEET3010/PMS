import { TestBed } from '@angular/core/testing';

import { TestInfoService } from './test-info.service';

describe('TestInfoService', () => {
  let service: TestInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
