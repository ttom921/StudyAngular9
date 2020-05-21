import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SyncMgrService } from '../../services/sync-mgr.service';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.scss']
})
export class MatPlayButtonComponent implements OnInit {
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
}
