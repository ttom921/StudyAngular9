import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { VideoLayoutType, VideoPageDirect } from '../../../video-play-mgrs.enum';
import { SyncMgrService } from '../../services/sync-mgr.service';

@Component({
  selector: 'mat-layout-button',
  templateUrl: './mat-layout-button.component.html',
  styleUrls: ['./mat-layout-button.component.scss']
})
export class MatLayoutButtonComponent implements OnInit {
  VideoLayoutType = VideoLayoutType;
  VideoPageDirect = VideoPageDirect;

  constructor(
    private syncMgrService: SyncMgrService
  ) { }

  ngOnInit(): void {
    //預設的layout
    this.changeLayoutType(VideoLayoutType.Type4);
  }
  changeLayoutType(layouttye: VideoLayoutType) {
    //console.log(`start videoLayoutType=${this.videoLayoutType}`);
    switch (layouttye) {
      case VideoLayoutType.Type1:
        this.syncMgrService.layoutType$.next(VideoLayoutType.Type1);
        break;
      case VideoLayoutType.Type4:
        this.syncMgrService.layoutType$.next(VideoLayoutType.Type4);
        break;
      case VideoLayoutType.Type8:
        this.syncMgrService.layoutType$.next(VideoLayoutType.Type8);
        break;
      default:
        break;
    }
    //console.log(`end videoLayoutType=${this.videoLayoutType}`);
    //console.log(`this.DynComp,${this.DynComp}`);
  }
  //#region 切換上下頁
  changePage(direct: VideoPageDirect) {
    this.syncMgrService.nextPage(direct);
  }
  //#endregion 切換上下頁
}
