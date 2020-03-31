import { TestBed } from '@angular/core/testing';

import { CarVideoService } from './car-video.service';

describe('CarVideoService', () => {
  let service: CarVideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarVideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
