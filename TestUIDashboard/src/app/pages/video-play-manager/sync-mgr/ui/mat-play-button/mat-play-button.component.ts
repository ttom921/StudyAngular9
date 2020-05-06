import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { SyncMgrService } from '../../service/sync-mgr.service';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.scss']
})
export class MatPlayButtonComponent implements OnInit {
  // @Input() play = false;
  // @Output() playChanged = new EventEmitter<boolean>();
  constructor(
    public syncMgrService: SyncMgrService
  ) { }

  ngOnInit(): void {
  }
  setVideoPlayback(value: boolean) {
    //console.log(`setVideoPlayback->${this.syncMgrService.playstate$.value}`);
    if (this.syncMgrService.playstate$.value !== value) {
      this.toggleVideoPlayback();
    }
  }
  toggleVideoPlayback(): void {
    let play = !this.syncMgrService.playstate$.value;
    this.updateVideoPlayback();
  }
  updateVideoPlayback(): void {
    let play = !this.syncMgrService.playstate$.value;
    play ? this.syncMgrService.play() : this.syncMgrService.pause();
    //this.playChanged.emit(play);
  }
}