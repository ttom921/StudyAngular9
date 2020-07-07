import { TestBed } from '@angular/core/testing';

import { OtaSetCarService } from './ota-set-car.service';

describe('OtaSetCarService', () => {
  let service: OtaSetCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtaSetCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
