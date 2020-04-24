import {
  Component, OnInit, ElementRef, ViewChild, Input, AfterViewInit, Renderer2
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
  //第一次播放控制
  canactioned = false;
  playcliceonce = false;
  //
  @Input() mainvideo: MatVideoComponent = null;
  constructor(
    public syncVideoMgrService: SyncVideoMgrService,
  ) {

  }

  ngOnInit(): void {
    this.playcliceonce = false;
  }

  ngAfterViewInit(): void {
    //console.log(this.matplaybutton);
    //test

    //是否可播放
    this.syncVideoMgrService.canPlay$.pipe(delay(1000)).subscribe(data => {
      //console.log(`SVC=>canPlay$=${data}`);
      //console.log(`SVC=>playcliceonce=${this.playcliceonce}`)
      if (this.playcliceonce == true) {
        //console.log(`SVC=>play`);
        this.matplaybutton.setVideoPlayback(true);
      }

      this.canactioned = true;
    });
    //是否在緩衝
    this.syncVideoMgrService.waiting$.subscribe(data => {
      //console.log(`SVC=>waiting$=${data}`);
      //console.log(`SVC=>pause`);
      this.matplaybutton.setVideoPlayback(false);
      this.canactioned = false;
    });
    //是否載入完成
    this.syncVideoMgrService.videoLoaded$.subscribe(data => {
      //console.log(`SVC=>videoLoaded$=${data}`);
      this.canactioned = data;
    });
    //是否時間差
    this.syncVideoMgrService.difftime$.subscribe(data => {
      //console.log(`SVC=>difftime=${data}`);
      let mtime = this.mainvideo.time;
      //console.log(`SVC=>difftime mainvideo time=${mtime}`);
      if (data == true) {
        console.log(`SVC=>difftime=${data}`);
        console.log(`SVC=>difftime mainvideo time=${mtime}`);
        this.syncVideoMgrService.setCurrentTime(mtime);
      }
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
  //截取canvas的圖片
  private captureImage(video: HTMLVideoElement) {
    console.log(`video.videoWidth=${video.videoWidth},video.videoHeight=${video.videoHeight}`);
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    //canvas.toDataURL('image/jpg');
    canvas.toBlob(function (blob) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.setAttribute("download", "capture.jpeg");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 'image/jpeg', 0.95); // JPEG at 95% quality
  }
  //
  onTestclick() {
    //this.captureImage(this.mainvideo.getVideoTag());
  }
  onTestCurrentTime() {
    let time = this.mainvideo.time;
    this.syncVideoMgrService.setCurrentTime(time + 5);
  }
  onTestRandTime() {
    //let time = this.mainvideo.time;
    this.syncVideoMgrService.TestRanderTime();
  }

}
