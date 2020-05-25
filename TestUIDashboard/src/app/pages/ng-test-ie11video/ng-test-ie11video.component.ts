import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'app-ng-test-ie11video',
  templateUrl: './ng-test-ie11video.component.html',
  styleUrls: ['./ng-test-ie11video.component.scss']
})
export class NgTestIE11videoComponent implements OnInit, AfterViewInit {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  constructor() { }


  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.loadVideo();
  }
  loadVideo() {
    this.testcarvieo();
  }
  testcarvieo() {
    let vdapi;
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    this.videoSrcChange(this.video1, vdapi);
  }
  //設定MatVideoComponent元件的影像來源
  videoSrcChange(matvideo: MatVideoComponent, src: string) {

    //console.log(`videoSrcChange time=${orgtime}`);
    //this.syncMgrService.pause();

    matvideo.src = src;
    matvideo.getVideoTag().src = src;


  }
}
