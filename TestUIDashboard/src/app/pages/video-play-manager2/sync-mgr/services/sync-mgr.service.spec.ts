import { TestBed } from '@angular/core/testing';

import { SyncMgrService } from './sync-mgr.service';

describe('SyncMgrService', () => {
  let service: SyncMgrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncMgrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
