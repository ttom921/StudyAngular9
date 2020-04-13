import { TestBed } from '@angular/core/testing';

import { GPXParserService } from './gpxparser.service';

describe('GPXParserService', () => {
  let service: GPXParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GPXParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
