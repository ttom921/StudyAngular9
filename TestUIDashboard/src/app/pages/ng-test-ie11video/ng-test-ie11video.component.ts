import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'ng-test-ie11video',
  templateUrl: './ng-test-ie11video.component.html',
  styleUrls: ['./ng-test-ie11video.component.scss']
})
export class NgTestIE11videoComponent implements OnInit, AfterViewInit {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  constructor() { }


  ngOnInit(): void {
    this.loadVideo();

  }
  ngAfterViewInit(): void {

  }
  loadVideo() {
    this.testcarvieo();
  }
  testcarvieo() {
    let vdapi;
    vdapi = "http://localhost:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4";

    //console.log(this.video1);
    this.video1.src = vdapi;
    //this.videoSrcChange(this.video1, vdapi);
  }
  //設定MatVideoComponent元件的影像來源
  videoSrcChange(matvideo: MatVideoComponent, src: string) {

    //console.log(`videoSrcChange time=${orgtime}`);
    //this.syncMgrService.pause();
    console.dir(matvideo);
    matvideo.src = src;
    matvideo.getVideoTag().src = src;


  }
}
