import { Component, OnInit, Output } from '@angular/core';
import { SyncMgrService } from './services/sync-mgr.service';

@Component({
  selector: 'sync-mgr',
  templateUrl: './sync-mgr.component.html',
  styleUrls: ['./sync-mgr.component.scss']
})
export class SyncMgrComponent implements OnInit {

  canactioned = false;
  constructor(
    private syncMgrService: SyncMgrService
  ) { }

  ngOnInit(): void {
  }
}
