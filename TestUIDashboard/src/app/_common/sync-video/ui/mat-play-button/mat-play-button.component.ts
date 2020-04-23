import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SyncVideoMgrService } from '../../service/sync-video-mgr.service';

@Component({
  selector: 'mat-play-button',
  templateUrl: './mat-play-button.component.html',
  styleUrls: ['./mat-play-button.component.scss']
})
export class MatPlayButtonComponent implements OnInit {

  @Input() play = false;

  @Output() playChanged = new EventEmitter<boolean>();

  constructor(private syncVideoMgrService: SyncVideoMgrService) { }

  ngOnInit(): void {
  }
  setVideoPlayback(value: boolean) {
    if (this.play !== value) {
      this.toggleVideoPlayback();
    }
  }
  toggleVideoPlayback(): void {
    this.play = !this.play;
    this.updateVideoPlayback();
  }
  updateVideoPlayback(): void {
    this.play ? this.syncVideoMgrService.play() : this.syncVideoMgrService.pause();
    this.playChanged.emit(this.play);
  }
}
