import { Component, OnInit } from '@angular/core';
import { SyncMgrService } from '../../services/sync-mgr.service';

@Component({
  selector: 'mat-time-control',
  templateUrl: './mat-time-control.component.html',
  styleUrls: ['./mat-time-control.component.scss']
})
export class MatTimeControlComponent implements OnInit {
  video: HTMLVideoElement;
  constructor(
    private syncMgrService: SyncMgrService,
  ) { }


  ngOnInit(): void {
    this.video = this.syncMgrService.getMainVideo().getVideoTag();
    console.log(`mat-time-control=>video=${this.video}`);
  }
  reLoad() {
    this.video = this.syncMgrService.getMainVideo().getVideoTag();
    console.log(`mat-time-control=>video->reLoad ${this.video.currentTime}`);
  }
}
