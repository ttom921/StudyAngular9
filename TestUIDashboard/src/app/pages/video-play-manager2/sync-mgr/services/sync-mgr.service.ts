import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { VideoLayoutType, VideoPageDirect } from '../../video-play-mgrs.enum';

@Injectable({
  providedIn: 'root'
})
export class SyncMgrService {

  //layouttype 排版
  layoutType$: BehaviorSubject<VideoLayoutType> = new BehaviorSubject(VideoLayoutType.Type1);
  //切探頁面

  constructor() { }

  //#region 切換頁面相關
  private pagechangeSource = new Subject();
  pagechange$ = this.pagechangeSource.asObservable();
  nextPage(val: VideoPageDirect) {
    this.pagechangeSource.next(val);
  }
  //#endregion
}
