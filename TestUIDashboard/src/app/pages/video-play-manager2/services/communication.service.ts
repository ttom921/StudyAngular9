import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { VideoPageDirect } from '../video-play-mgrs.enum';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // //#region 切換頁面相關
  // private pagechangeSource = new Subject();
  // pagechange$ = this.pagechangeSource.asObservable();
  // nextPage(val: VideoPageDirect) {
  //   this.pagechangeSource.next(val);
  // }
  // //#endregion
  private vidoelistSource = new ReplaySubject();
  videolist$ = this.vidoelistSource.asObservable();
  nextVideolst(val: any[]) {
    this.vidoelistSource.next(val);
  }
  constructor() { }


  //設定MatVideoComponent元件的影像來源
  videoSrcChange(matvideo: MatVideoComponent, src: string) {
    //let orgtime = this.syncMgrService.mainvideo.time;
    //console.log(`videoSrcChange time=${orgtime}`);
    //this.syncMgrService.pause();
    //this.matplaybutton.setVideoPlayback(false);
    matvideo.src = src;
    matvideo.getVideoTag().src = src;
    //matvideo.time = orgtime;

  }
}
