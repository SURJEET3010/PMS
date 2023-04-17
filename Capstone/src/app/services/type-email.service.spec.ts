import { TestBed } from '@angular/core/testing';

import { TypeEmailService } from './type-email.service';

describe('TypeEmailService', () => {
  let service: TypeEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
