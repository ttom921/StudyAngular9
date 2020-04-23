import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit,
  Renderer2
}

  from '@angular/core';
import { Observable, fromEvent, BehaviorSubject, combineLatest } from 'rxjs';
import { MatVideoComponent } from '../video/video.component';
import { SyncVideoMgrService } from './service/sync-video-mgr.service';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';
import { isNullOrUndefined } from 'util';
import { ThemePalette } from '@angular/material/core';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'sync-video',
  templateUrl: './sync-video.component.html',
  styleUrls: ['./sync-video.component.scss']
}

) export class SyncVideoComponent implements OnInit, AfterViewInit {
  @ViewChild("matplaybutton", { static: true }) private matplaybutton: MatPlayButtonComponent;
  @Input() color: ThemePalette = "primary";
  canactioned = false;
  playing = false;
  playcliceonce = false;

  constructor(
    public syncVideoMgrService: SyncVideoMgrService,
  ) {

  }

  ngOnInit(): void {
    this.playcliceonce = false;
  }

  ngAfterViewInit(): void {
    console.log(this.matplaybutton);
    this.syncVideoMgrService.canPlay$.pipe(delay(1000)).subscribe(data => {
      console.log(`SVC=>canPlay$=${data}`);
      //console.log(`SVC=>playing=${this.playing}`)
      console.log(`SVC=>playcliceonce=${this.playcliceonce}`)
      if (this.playcliceonce == true) {
        console.log(`SVC=>play`);
        this.matplaybutton.setVideoPlayback(true);
      }

      this.canactioned = true;
    });
    this.syncVideoMgrService.waiting$.subscribe(data => {
      console.log(`SVC=>waiting$=${data}`);
      console.log(`SVC=>pause`);
      this.matplaybutton.setVideoPlayback(false);
      this.canactioned = false;
    });

    this.syncVideoMgrService.videoLoaded$.subscribe(data => {
      console.log(`SVC=>videoLoaded$=${data}`);
      this.canactioned = data;
    });
  }
  addVideo(video: MatVideoComponent) {
    this.syncVideoMgrService.addVideo(video);
  }
  onClickPlay(ev) {
    //console.log(ev);
    if (this.playcliceonce == false) {
      this.playcliceonce = true;
    }
    //console.log(`SVC->onClickPlay=>playcliceonce=${this.playcliceonce}`);
  }
  //
  onTestclick() {

  }
}
