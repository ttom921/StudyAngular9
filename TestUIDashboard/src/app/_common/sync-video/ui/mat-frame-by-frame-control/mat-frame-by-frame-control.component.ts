import { Component, OnInit, Input } from '@angular/core';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { SyncVideoMgrService } from '../../service/sync-video-mgr.service';

@Component({
  selector: 'mat-frame-by-frame-control',
  templateUrl: './mat-frame-by-frame-control.component.html',
  styleUrls: ['./mat-frame-by-frame-control.component.scss']
})
export class MatFrameByFrameControlComponent implements OnInit {
  @Input() video: MatVideoComponent;
  @Input() fps = 29.97;
  @Input() oneFrame = 1;// 30/30
  constructor(
    private syncVideoMgrService: SyncVideoMgrService,
  ) { }

  ngOnInit(): void {
  }
  forwardSeekFrame() {
    this.seekFrames(this.oneFrame);
  }
  rewindSeekFrame() {
    this.seekFrames(-this.oneFrame);
  }
  seekFrames(nbFrames: number) {
    if (!this.video.getVideoTag().paused) {
      this.syncVideoMgrService.pause();
      //設定成同一個currentTime
      this.syncVideoMgrService.syncvideolst.forEach(element => {
        element.getVideoTag().currentTime = this.video.getVideoTag().currentTime;
      });
    }
    //console.log(`this.video.getVideoTag().paused=${this.video.getVideoTag().paused}`);
    this.syncVideoMgrService.setFrames(nbFrames, this.fps);
  }
}
