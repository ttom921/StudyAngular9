import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CarVideoService } from 'src/app/_services/video/car-video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { interval, fromEvent, combineLatest } from 'rxjs';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { SyncVideoComponent } from 'src/app/_common/sync-video/sync-video.component';
import { SyncVideoMgrService } from 'src/app/_common/sync-video/service/sync-video-mgr.service';

@Component({
  selector: 'app-ng-test-multi-videos',
  templateUrl: './ng-test-multi-videos.component.html',
  styleUrls: ['./ng-test-multi-videos.component.scss']
})
export class NgTestMultiVideosComponent implements OnInit, AfterViewInit {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  @ViewChild('video3', { static: true }) video3: MatVideoComponent;
  @ViewChild('video4', { static: true }) video4: MatVideoComponent;
  @ViewChild('video5', { static: true }) video5: MatVideoComponent;
  @ViewChild('video6', { static: true }) video6: MatVideoComponent;
  @ViewChild('video7', { static: true }) video7: MatVideoComponent;
  @ViewChild('video8', { static: true }) video8: MatVideoComponent;

  @ViewChild('syncvideo', { static: true }) syncvideo: SyncVideoComponent;
  constructor(
    private carVideoService: CarVideoService,
    private sanitizer: DomSanitizer,
    private syncVideoMgrService: SyncVideoMgrService,
  ) { }
  ngAfterViewInit(): void {


    this.syncVideoMgrService.initRxJSevent();

    //測試
    // this.syncVideoMgrService.canPlay$.subscribe(data => {
    //   console.log(`syncVideoMgrService.canPlay$=${data}`);
    //   this.syncVideoMgrService.play();
    // });
    // this.syncVideoMgrService.waiting$.subscribe(data => {
    //   console.log(`syncVideoMgrService.waiting$=${data}`);
    //   this.syncVideoMgrService.pause();
    // });
  }
  ngOnInit(): void {
    this.syncvideo.addVideo(this.video1);
    this.syncvideo.addVideo(this.video2);
    this.syncvideo.addVideo(this.video3);
    this.syncvideo.addVideo(this.video4);
    //
    this.syncvideo.addVideo(this.video5);
    this.syncvideo.addVideo(this.video6);
    this.syncvideo.addVideo(this.video7);
    this.syncvideo.addVideo(this.video8);

    this.syncVideoMgrService.setMainVideo(this.video1);
    this.loadVideo();



    // console.dir(this.video1.getVideoTag());
    // this.video1.getVideoTag().addEventListener('canplay', function (event) {
    //   console.log(`canplay=${event}`);
    //   console.dir(event);
    // });
    // this.video1.getVideoTag().addEventListener('waiting', function (event) {
    //   console.log(`waiting=${event}`);
    //   console.dir(event);
    // });



  }
  loadVideo() {
    this.testcarvieo();
    //this.testcaronlinevideo();
    //let vdapi;
    //let video=this.video1.getVideoTag();

    //vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

    //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';
    // //console.log(this.video1);
    // this.video1.src = vdapi;
    // //this.video1.setVideoSrc(vdapi);



    // //this.cd.detectChanges();
    // //console.log(this.video1);
    // //this.video1.getVideoTag().src = vdapi;
    // // //vdapi = "https://nkoehler.github.io/mat-video/assets/NASA.mp4"
    // // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // this.video2.src = vdapi;
    // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // this.video3.src = vdapi;
    // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // this.video2.src = vdapi;
    // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // this.video4.src = vdapi;
    // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // // vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4';
    // // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4";
    // // this.video5.src = vdapi;
    // // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // // this.video6.src = vdapi;
    // // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    // // this.video7.src = vdapi;
    // // //vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4';
    // // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4";
    // // this.video8.src = vdapi;
  }
  onPlay() {



  }
  testcarvieo() {
    let vdapi;
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    this.video1.src = vdapi;
    this.video2.src = vdapi;
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4";
    this.video3.src = vdapi;
    this.video4.src = vdapi;
    //
    //
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4";

    this.video5.src = vdapi;
    this.video6.src = vdapi;
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    this.video7.src = vdapi;
    this.video8.src = vdapi;
  }
  testcaronlinevideo() {
    let vdapi;
    vdapi = "http://ttom.tplinkdns.com:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    this.video1.src = vdapi;
    this.video2.src = vdapi;
    vdapi = "http://ttom.tplinkdns.com:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4";
    this.video3.src = vdapi;
    this.video4.src = vdapi;
    //
    vdapi = "http://ttom.tplinkdns.com:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    this.video5.src = vdapi;
    this.video6.src = vdapi;
    vdapi = "http://ttom.tplinkdns.com:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4";
    this.video7.src = vdapi;
    this.video8.src = vdapi;
  }
}
