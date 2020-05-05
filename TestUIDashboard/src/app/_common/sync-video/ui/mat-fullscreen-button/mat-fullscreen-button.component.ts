import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FullscreenService } from '../../service/fullscreen.service';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { SyncVideoMgrService } from '../../service/sync-video-mgr.service';

@Component({
  selector: 'mat-fullscreen-button',
  templateUrl: './mat-fullscreen-button.component.html',
  styleUrls: ['./mat-fullscreen-button.component.scss']
})
export class MatFullscreenButtonComponent implements OnInit {
  canFullscreen = false;
  @Input() player: HTMLVideoElement;
  fullscreen = false;
  // @Input() keyboard = true;
  constructor(
    private fscreen: FullscreenService,
    private syncVideoMgrService: SyncVideoMgrService,

  ) { }

  ngOnInit(): void {
    this.player = this.syncVideoMgrService.mainvideo.player.nativeElement;
    if (this.fscreen.isEnabled()) {
      this.canFullscreen = true;
    }
    //console.log(`MatFullscreenButton->canFullscreen=${this.canFullscreen}`);
    //console.dir(this.player);
    this.fscreen.onChange(event => (this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false)));
  }

  onChangesFullscreen(value: boolean): void {
    this.syncVideoMgrService.mainvideo.isFullscreen = value;
    //傳送是否是全螢幕
    //console.log(`onChangesFullscreen=>${this.syncVideoMgrService.mainvideo.isFullscreen}`);
    this.syncVideoMgrService.fullScreen$.next(this.syncVideoMgrService.mainvideo.isFullscreen);
    //this.fullscreenChanged.emit(this.fullscreen);
    this.fullscreen = this.syncVideoMgrService.mainvideo.isFullscreen;
  }
  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.syncVideoMgrService.mainvideo.isFullscreen !== value) {
      this.toggleFullscreen();
    }
  }

  toggleFullscreen(): void {
    //console.log(`toggleFullscreen`);
    this.syncVideoMgrService.mainvideo.isFullscreen = !this.syncVideoMgrService.mainvideo.isFullscreen;
    this.updateFullscreen();
  }

  updateFullscreen(): void {
    this.syncVideoMgrService.mainvideo.isFullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();

    //this.fullscreenChanged.emit(this.fullscreen);
  }
}
