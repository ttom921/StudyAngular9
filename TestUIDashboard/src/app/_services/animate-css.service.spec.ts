import { TestBed } from '@angular/core/testing';

import { AnimateCSSService } from './animate-css.service';

describe('AnimateCSSService', () => {
  let service: AnimateCSSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimateCSSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
