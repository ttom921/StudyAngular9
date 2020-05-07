import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SyncMgrService } from '../../service/sync-mgr.service';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.scss']
})
export class MatPlayButtonComponent implements OnInit {
  //play = false;
  @Output() playChanged = new EventEmitter<boolean>();
  constructor(
    public syncMgrService: SyncMgrService
  ) { }

  ngOnInit(): void {
  }
  setVideoPlayback(value: boolean) {
    this.syncMgrService.setVideoPlayback(value);
    // //console.log(`setVideoPlayback->${this.play} value=${value}`);
    // if (this.play !== value) {
    //   this.toggleVideoPlayback();
    // }
  }
  toggleVideoPlayback(): void {
    // this.play = !this.play;
    // this.updateVideoPlayback();
    this.syncMgrService.toggleVideoPlayback();
    this.playChanged.emit(this.syncMgrService.playstate$.value);
  }
  // updateVideoPlayback(): void {
  //   // this.play ? this.syncMgrService.playAction() : this.syncMgrService.pause();
  //   // this.syncMgrService.playstate$.next(this.play);
  //   this.playChanged.emit(this.play);
  // }
}
