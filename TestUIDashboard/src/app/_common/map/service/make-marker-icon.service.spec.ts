import { TestBed } from '@angular/core/testing';

import { MakeMarkerIconService } from './make-marker-icon.service';

describe('MakeMarkerIconService', () => {
  let service: MakeMarkerIconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeMarkerIconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
