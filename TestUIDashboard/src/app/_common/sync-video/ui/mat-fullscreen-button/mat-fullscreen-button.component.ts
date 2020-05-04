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
  //@Input()
  player: MatVideoComponent;
  @Input() fullscreen = false;
  // @Input() keyboard = true;
  constructor(
    private fscreen: FullscreenService,
    private syncVideoMgrService: SyncVideoMgrService,

  ) { }

  ngOnInit(): void {
    this.player = this.syncVideoMgrService.mainvideo;
    if (this.fscreen.isEnabled()) {
      this.canFullscreen = true;
    }
    //this.player.isFullscreen;
    //console.log(`MatFullscreenButton->canFullscreen=${this.canFullscreen}`);
    //console.log(`MatFullscreenButton->player=${this.player}`);
    //console.dir(this.player);
    this.fscreen.onChange(event => (this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false)));
  }

  onChangesFullscreen(value: boolean): void {
    this.player.isFullscreen = value;
    //傳送是否是全螢幕
    //console.log(`onChangesFullscreen=>${this.player.isFullscreen}`);
    this.syncVideoMgrService.fullScreen$.next(this.player.isFullscreen);
    //this.fullscreenChanged.emit(this.fullscreen);
  }
  setFullscreen(value: boolean) {
    if (this.canFullscreen && this.player.isFullscreen !== value) {
      this.toggleFullscreen();
    }
  }

  toggleFullscreen(): void {
    //console.log(`toggleFullscreen`);
    this.player.isFullscreen = !this.player.isFullscreen;
    this.updateFullscreen();
  }

  updateFullscreen(): void {
    this.player.isFullscreen ? this.fscreen.request(this.player.getVideoTag()) : this.fscreen.exit();
    //this.fullscreenChanged.emit(this.fullscreen);
  }
}
