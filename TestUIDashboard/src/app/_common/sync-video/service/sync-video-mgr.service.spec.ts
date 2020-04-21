import { TestBed } from '@angular/core/testing';

import { SyncVideoMgrService } from './sync-video-mgr.service';

describe('SyncVideoMgrService', () => {
  let service: SyncVideoMgrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SyncVideoMgrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
