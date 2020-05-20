import { Component, OnInit, Output } from '@angular/core';
import { VideoLayoutType, VideoPageDirect } from '../video-play-mgrs.enum';
import { SyncMgrService } from './services/sync-mgr.service';

@Component({
  selector: 'sync-mgr',
  templateUrl: './sync-mgr.component.html',
  styleUrls: ['./sync-mgr.component.scss']
})
export class SyncMgrComponent implements OnInit {

  //@Output() changeLayoutType = new EventEmitter<VideoLayoutType>();
  VideoPageDirect = VideoPageDirect;
  canactioned = false;
  constructor(
    private syncMgrService: SyncMgrService
  ) { }

  ngOnInit(): void {
  }
  layoutChange(layouttype: VideoLayoutType) {
    console.log(`SyncMgr=>layoutChange=${layouttype}`);
  }

}
