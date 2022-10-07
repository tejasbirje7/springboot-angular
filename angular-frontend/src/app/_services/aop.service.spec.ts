import { TestBed } from '@angular/core/testing';

import { AopService } from './aop.service';

describe('AopService', () => {
  let service: AopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
