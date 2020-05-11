import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FullscreenService } from '../../service/fullscreen.service';
import { SyncMgrService } from '../../service/sync-mgr.service';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'mat-fullscreen-button',
  templateUrl: './mat-fullscreen-button.component.html',
  styleUrls: ['./mat-fullscreen-button.component.scss']
})
export class MatFullscreenButtonComponent implements OnInit {

  canFullscreen = false;
  player: HTMLVideoElement;
  @Input() mainvideo: MatVideoComponent;
  fullscreen = false;

  constructor(
    private fscreen: FullscreenService,
    private syncMgrService: SyncMgrService,
  ) { }


  ngOnInit(): void {
    //this.player = this.mainvideo.player.nativeElement;
    //console.log(`MatFullscreenButton-> player${this.player}`)
    if (this.fscreen.isEnabled()) {
      this.canFullscreen = true;
    }
    //console.log(`MatFullscreenButton->canFullscreen=${this.canFullscreen}`);
    //console.dir(this.player);
    this.fscreen.onChange(event => (this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false)));
  }

  onChangesFullscreen(value: boolean): void {
    this.syncMgrService.mainvideo.isFullscreen = value;
    //傳送是否是全螢幕
    //console.log(`onChangesFullscreen=>${this.syncVideoMgrService.mainvideo.isFullscreen}`);
    this.syncMgrService.fullScreen$.next(this.syncMgrService.mainvideo.isFullscreen);
    //this.fullscreenChanged.emit(this.fullscreen);
    this.fullscreen = this.syncMgrService.mainvideo.isFullscreen;
  }
  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.syncMgrService.mainvideo.isFullscreen !== value) {
      this.toggleFullscreen();
    }
  }

  toggleFullscreen(): void {
    //console.log(`toggleFullscreen`);
    this.syncMgrService.mainvideo.isFullscreen = !this.syncMgrService.mainvideo.isFullscreen;
    this.updateFullscreen();
  }

  updateFullscreen(): void {
    this.syncMgrService.mainvideo.isFullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();

    //this.fullscreenChanged.emit(this.fullscreen);
  }
}
