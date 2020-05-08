import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SyncMgrService } from '../../service/sync-mgr.service';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'mat-frame-by-frame-control',
  templateUrl: './mat-frame-by-frame-control.component.html',
  styleUrls: ['./mat-frame-by-frame-control.component.scss']
})
export class MatFrameByFrameControlComponent implements OnInit {
  @Input() video: MatVideoComponent;
  @Input() fps = 29.97;
  @Input() oneFrame = 1;// 30/30
  //指定跳轉時間
  @Input() jumpTime = 5;
  constructor(
    private syncMgrService: SyncMgrService
  ) { }


  ngOnInit(): void {
    //console.log(`mat-frame-by-frame-control=>ngOnInit video=${this.video}`);
  }

  forwardSeekFrame() {
    this.seekFrames(this.oneFrame);
  }
  rewindSeekFrame() {
    this.seekFrames(-this.oneFrame);
  }
  private seekFrames(nbFrames: number) {
    if (!this.video.getVideoTag().paused) {
      this.syncMgrService.pause();
      //設定成同一個currentTime
      this.syncMgrService.syncvideolst.forEach(element => {
        element.getVideoTag().currentTime = this.video.getVideoTag().currentTime;
      });
    }
    //console.log(`this.video.getVideoTag().paused=${this.video.getVideoTag().paused}`);
    this.syncMgrService.setFrames(nbFrames, this.fps);
  }
  //往前處理
  forwardJumeTime() {
    //this.syncVideoMgrService.setJumpTime(this.jumpTime);
  }
  //往後處理
  rewindJumeTime() {
    //this.syncVideoMgrService.setJumpTime(-this.jumpTime);
  }
}
