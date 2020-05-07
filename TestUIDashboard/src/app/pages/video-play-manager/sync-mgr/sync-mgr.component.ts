import { Component, OnInit, Input, AfterViewInit, ViewChild } from '@angular/core';
import { SyncMgrService } from './service/sync-mgr.service';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'sync-mgr',
  templateUrl: './sync-mgr.component.html',
  styleUrls: ['./sync-mgr.component.scss']
})
export class SyncMgrComponent implements OnInit, AfterViewInit {
  @ViewChild("matplaybutton", { static: true }) private matplaybutton: MatPlayButtonComponent;

  canactioned = false;
  playBtnIsClick = false;
  @Input() mainvideo: MatVideoComponent;
  constructor(
    private syncMgrService: SyncMgrService
  ) { }


  ngOnInit(): void {
    //console.log(`SyncMgrComponent->ngOnInit`);

  }
  ngAfterViewInit(): void {
    //console.log(`SyncMgrComponent->ngAfterViewInit`);
    //是否可播放
    this.syncMgrService.canPlay$.pipe(delay(10000)).subscribe(data => {
      //console.log(`SVC=>canPlay$=${data}`);
      console.log(`SVC=>canPlay$=${data}`);
      if (this.playBtnIsClick == true) {
        console.log(`SVC=>play`);
        this.matplaybutton.setVideoPlayback(true);
      }
      this.canactioned = true;
    });
    //是否在緩衝
    this.syncMgrService.waiting$.subscribe(data => {
      console.log(`SVC=>waiting$=${data}`);
      //console.log(`SVC=>pause`);
      this.matplaybutton.setVideoPlayback(false);
      this.canactioned = false;
    });
    //是否載入完成
    this.syncMgrService.videoLoaded$.subscribe(data => {
      //console.log(`SVC=>videoLoaded=${data}`);
      this.canactioned = data;
    });
    //是否時間差
    this.syncMgrService.difftime$.subscribe(data => {
      //console.log(`SVC=>difftime=${data}`);
      let mtime = this.mainvideo.time;

      //console.log(`SVC=>difftime mainvideo time=${mtime}`);
      if (data == true) {
        //console.log(`SVC=>difftime=${data}`);
        //console.log(`SVC=>difftime mainvideo time=${mtime}`);
        this.syncMgrService.setCurrentTime(mtime);
      }
    });
  }
  addMatVideo(video: MatVideoComponent) {
    this.syncMgrService.syncvideolst.push(video);
  }
  setMainVideo() {
    //console.log(`setMainVideo->${this.mainvideo}`);
    this.syncMgrService.mainvideo = this.mainvideo;
  }
  initRxJSevent() {
    this.syncMgrService.initRxJSevent();
  }
  //設定MatVideoComponent元件的影像來源
  videoSrcChange(matvideo: MatVideoComponent, src: string) {
    let orgtime = this.syncMgrService.mainvideo.time;
    //console.log(`videoSrcChange time=${orgtime}`);
    this.syncMgrService.pause();
    matvideo.src = src;
    matvideo.getVideoTag().src = src;
    matvideo.time = orgtime;

  }
  onClickPlay(ev) {

    //console.log(ev);
    if (this.playBtnIsClick == false) {
      this.playBtnIsClick = true;
    }

    //console.log(`SVC->onClickPlay=>playcliceonce=${this.playcliceonce}`);
  }
}
