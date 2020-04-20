import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarVideoService } from 'src/app/_services/video/car-video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { interval, fromEvent, combineLatest } from 'rxjs';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'app-ng-test-multi-videos',
  templateUrl: './ng-test-multi-videos.component.html',
  styleUrls: ['./ng-test-multi-videos.component.scss']
})
export class NgTestMultiVideosComponent implements OnInit {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  // @ViewChild('video3', { static: true }) video3: ElementRef;
  // @ViewChild('video4', { static: true }) video4: ElementRef;
  // @ViewChild('video5', { static: true }) video5: ElementRef;
  // @ViewChild('video6', { static: true }) video6: ElementRef;
  // @ViewChild('video7', { static: true }) video7: ElementRef;
  // @ViewChild('video8', { static: true }) video8: ElementRef;
  // srcs = [];
  constructor(
    private carVideoService: CarVideoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    //console.dir(this.video1);

    const v1$ = fromEvent(this.video1.getVideoTag(), 'canplay');
    const v2$ = fromEvent(this.video2.getVideoTag(), 'canplay');
    // v1$.subscribe(data => {
    //   console.dir(data);
    //   console.log(`canplay$`);
    // });

    const allEvents$ = combineLatest(
      v1$,
      v2$,
    );
    allEvents$.subscribe(data => {
      console.dir(data);
      console.log(`allEvents canPlay=${data}`);
      // this.canPlay$.next(true);
      // this.waiting$.next(false);
    });

    this.loadVideo();

  }
  loadVideo() {
    let vdapi;
    //vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';

    //vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4';
    this.video1.src = vdapi;
    //vdapi = "https://nkoehler.github.io/mat-video/assets/NASA.mp4"
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
  onPlay() {



  }
}
