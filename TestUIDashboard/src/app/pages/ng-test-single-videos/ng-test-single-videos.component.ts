import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SyncVideoComponent } from 'src/app/_common/sync-video/sync-video.component';
import { fromEvent, merge, combineLatest, BehaviorSubject, Observable } from 'rxjs';
import { combineAll } from 'rxjs/operators';
import { SyncVideoMgrService } from 'src/app/_common/sync-video/service/sync-video-mgr.service';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'app-ng-test-single-videos',
  templateUrl: './ng-test-single-videos.component.html',
  styleUrls: ['./ng-test-single-videos.component.scss']
})
export class NgTestSingleVideosComponent implements OnInit, AfterViewInit {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  // @ViewChild('video1', { static: true }) video1: SyncVideoComponent;
  // @ViewChild('video2', { static: true }) video2: SyncVideoComponent;
  // @ViewChild('video3', { static: true }) video3: SyncVideoComponent;
  // @ViewChild('video4', { static: true }) video4: SyncVideoComponent;
  // @ViewChild('video5', { static: true }) video5: SyncVideoComponent;
  // @ViewChild('video6', { static: true }) video6: SyncVideoComponent;
  // @ViewChild('video7', { static: true }) video7: SyncVideoComponent;
  // @ViewChild('video8', { static: true }) video8: SyncVideoComponent;

  @ViewChild('syncvideo', { static: true }) syncvideo: SyncVideoComponent;
  // canPlay$ = new BehaviorSubject(false);
  // waiting$ = new BehaviorSubject(false);
  constructor(
    private sanitizer: DomSanitizer,
    public syncVideoMgrService: SyncVideoMgrService,
  ) {

  }
  ngAfterViewInit(): void {


  }

  ngOnInit(): void {
    // this.video1.nativeElement.addEventListener('waiting', function (event) {
    //   console.log(`onwaiting=${event}`);
    // }, false);
    // this.video1.nativeElement.onwaiting = (event) => {

    //   console.log(`onwaiting=${event}`);
    //   console.dir(event);
    // }

    // { element: this.video, name: 'canplay', callback: event => this.videoBuffering = false, dispose: null },
    //   { element: this.video, name: 'waiting', callback: event => this.videoBuffering = true, dispose: null },
    // console.dir(this.video1.getVideoTag());
    // this.video1.getVideoTag().addEventListener('canplay', function (event) {
    //   console.log(`canplay=${event}`);
    //   console.dir(event);
    // });
    // this.video1.getVideoTag().addEventListener('waiting', function (event) {
    //   console.log(`waiting=${event}`);
    //   console.dir(event);
    // });


    // console.dir(this.getVideoTag());
    // this.video1.nativeElement.addEventListener('canplay', function (event) {
    //   console.log(`canplay=${event}`);
    //   console.dir(event);
    // }, false);
    // this.video1.nativeElement.onstalled = (event) => {

    //   console.log(`onstalled=${event}`);
    //   console.dir(event);
    // }

    // this.video1.nativeElement.onwaiting = function (event) {
    //   console.log(`onwaiting=${event}`);
    //   console.dir(event);
    // };
    // const v1$ = this.video1.canplay();
    // const v2$ = this.video2.canplay();
    // this.video1.canPlay().subscribe(data => {
    //   console.dir(data);
    //   console.log(`video1 canPlay=${data}`);
    // });
    // this.video2.canPlay().subscribe(data => {
    //   console.dir(data);
    //   console.log(`video2 canPlay=${data}`);
    // });
    //const scrollEvents = fromEvent(this.video1, 'scroll');
    // const allEvents$ = combineLatest(
    //   v1$,
    //   v2$,
    // );
    // allEvents$.subscribe(data => {
    //   //console.dir(data);
    //   //console.log(`allEvents canPlay=${data}`);
    //   this.canPlay$.next(true);
    //   this.waiting$.next(false);
    // });
    // //
    // this.canPlay$.subscribe(data => {
    //   console.log(`canPlay$=${data}`);
    // });

    // //------------------------------------------
    // const v1waiting$ = this.video1.waiting();
    // const v2waiting$ = this.video2.waiting();
    // const allwaitingEvents$ = combineLatest(
    //   v1waiting$,
    //   v2waiting$,
    // );
    // allwaitingEvents$.subscribe(data => {
    //   //console.dir(data);
    //   //console.log(`allwaitingEvents=${data}`);
    //   this.canPlay$.next(false);
    //   this.waiting$.next(true);
    // });
    // this.waiting$.subscribe(data => {
    //   console.log(`waiting$=${data}`);
    // });
    // this.syncVideoMgrService.addVideo(this.video1);
    // this.syncVideoMgrService.addVideo(this.video2);
    // this.syncVideoMgrService.addVideo(this.video3);
    // this.syncVideoMgrService.addVideo(this.video4);
    // this.syncVideoMgrService.initcombineLatest();
    // this.syncVideoMgrService.canPlay$.subscribe(data => {
    //   console.log(`canPlay$=${data}`);
    // });
    // this.syncVideoMgrService.waiting$.subscribe(data => {
    //   console.log(`waiting$=${data}`);
    // });
    this.syncvideo.addVideo(this.video1);
    this.syncvideo.addVideo(this.video2);
    this.syncVideoMgrService.initcombineLatest();
    this.loadVideo();
  }
  // iscanPlay(): Observable<boolean> {
  //   return this.canPlay$.asObservable();
  // }

  loadVideo() {
    let vdapi;
    //vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

    //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';
    this.video1.src = vdapi;
    // //vdapi = "https://nkoehler.github.io/mat-video/assets/NASA.mp4"
    // //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    this.video2.src = vdapi;
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
  // getVideoTag(): HTMLVideoElement | null {
  //   return this.video1 && this.video1.nativeElement ? this.video1.nativeElement as HTMLVideoElement : null;
  // }
  onPlay() {

    this.syncVideoMgrService.play();
    // this.video1.play();
    // this.video2.play();
    // this.video3.play();
    // this.video4.play();
    // this.video5.play();
    // this.video6.play();
    // this.video7.play();
    // this.video8.play();
  }

}