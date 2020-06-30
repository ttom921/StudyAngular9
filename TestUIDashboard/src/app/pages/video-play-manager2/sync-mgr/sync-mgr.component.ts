import { Component, OnInit, Output, AfterViewInit, ViewChild, Input } from '@angular/core';
import { SyncMgrService } from './services/sync-mgr.service';
import { delay } from 'rxjs/operators';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';
import { isNullOrUndefined } from 'util';
import { ThemePalette } from '@angular/material/core';
import { MatTimeControlComponent } from './ui/mat-time-control/mat-time-control.component';

@Component({
  selector: 'sync-mgr',
  templateUrl: './sync-mgr.component.html',
  styleUrls: ['./sync-mgr.component.scss']
})
export class SyncMgrComponent implements OnInit, AfterViewInit {
  @ViewChild("matplaybutton", { static: true }) private matplaybutton: MatPlayButtonComponent;
  @ViewChild("mattimecontrol", { static: true }) private mattimecontrol: MatTimeControlComponent;
  @Input() color: ThemePalette = "primary";
  @Input() fps = 29.97;
  @Input() showFrameByFrame = false;
  //是否顯示時間
  @Input() showTime = false;
  //是否顯示拍照icon
  @Input() photoscreen = true;
  @Input() oneFrame = 1; // 30/15
  @Input() jumpTime = 10;

  canactioned = false;
  playBtnIsClick = false;
  constructor(
    private syncMgrService: SyncMgrService
  ) { }


  ngOnInit(): void {
  }
  ngAfterViewInit(): void {

    //是否可播放
    this.syncMgrService.canPlay$.pipe(delay(300)).subscribe(data => {
      console.log(`SVC=>canPlay$=${data}`);
      if (this.playBtnIsClick == true) {
        console.log(`SVC=>play data=${data}`);
        //this.matplaybutton.setVideoPlayback(true);
        if (data == true) {
          this.matplaybutton.setVideoPlayback(false);
        }

      }
      this.canactioned = true;
    });

    //是否載入完成
    this.syncMgrService.videoLoaded$.subscribe(data => {
      //console.log(`SVC=>videoLoaded=${data}`);
      this.canactioned = data;
      this.matplaybutton.setVideoPlayback(false);
    });

    //是否在緩衝
    this.syncMgrService.waiting$.subscribe(data => {
      //console.log(`SVC=>waiting$=${data}`);
      //console.log(`SVC=>pause`);
      if (data == true) {
        this.matplaybutton.setVideoPlayback(false);
      }
      this.canactioned = data;

    });
    //是否時間差
    this.syncMgrService.difftime$.subscribe(data => {
      //console.log(`SVC=>difftime=${data}`);
      //if (isNullOrUndefined(this.syncMgrService.mainvideo)) return;
      if (this.syncMgrService.isMainvideo()) return;
      //let mtime = this.syncMgrService.mainvideo.time;
      let mtime = this.syncMgrService.getMainTime();

      //console.log(`SVC=>difftime mainvideo time=${mtime}`);
      if (data == true) {
        //console.log(`SVC=>difftime=${data}`);
        //console.log(`SVC=>difftime mainvideo time=${mtime}`);
        this.syncMgrService.setCurrentTime(mtime);
      }
    });
    //是否切探主控頻道
    this.syncMgrService.mainvideo$.subscribe(data => {
      //console.log(`SVC=>mainvideo$=${data}`);
      if (data == true) {
        this.reloadTimeControl();
      }
    });

  }
  reloadTimeControl() {
    this.mattimecontrol.reLoad();
  }

}
