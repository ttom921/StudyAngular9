import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CarVideoService } from 'src/app/_services/video/car-video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { interval } from 'rxjs';

@Component({
  selector: 'app-ng-test-multi-videos',
  templateUrl: './ng-test-multi-videos.component.html',
  styleUrls: ['./ng-test-multi-videos.component.scss']
})
export class NgTestMultiVideosComponent implements OnInit {
  @ViewChild('video1', { static: false }) video1: ElementRef;
  @ViewChild('video2', { static: false }) video2: ElementRef;
  @ViewChild('video3', { static: false }) video3: ElementRef;
  @ViewChild('video4', { static: false }) video4: ElementRef;
  @ViewChild('video5', { static: false }) video5: ElementRef;
  @ViewChild('video6', { static: false }) video6: ElementRef;
  @ViewChild('video7', { static: false }) video7: ElementRef;
  @ViewChild('video8', { static: false }) video8: ElementRef;
  srcs = [];
  constructor(
    private carVideoService: CarVideoService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {

    let vdapi;
    //vdapi = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    //1
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      //console.log(blob);
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
      console.log(this.video1.nativeElement.duration);

    });
    //2
    //vdapi = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4";
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
    });
    //3
    //vdapi = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
    });
    //4
    //vdapi = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
    });
    //5
    //vdapi = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
    });
    //6
    //vdapi = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
    });
    //7
    //vdapi = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
    });
    //8
    //vdapi = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4";
    vdapi = "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4";
    this.carVideoService.GetBlob(vdapi).subscribe(data => {
      let blob = new Blob([data], { type: 'application/mp4' });
      let vid = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(blob));
      this.srcs.push(vid);
    });
  }
  onPlay() {
    this.video1.nativeElement.play();
    this.video2.nativeElement.play();
    this.video3.nativeElement.play();
    this.video4.nativeElement.play();
    this.video5.nativeElement.play();
    this.video6.nativeElement.play();
    this.video7.nativeElement.play();
    this.video8.nativeElement.play();
    this.video1.nativeElement.ontimeupdate = (event) => {
      //console.log('The currentTime attribute has been updated. Again.');
      console.log(event.target.currentTime);
      let diff = this.video2.nativeElement.currentTime - event.target.currentTime;
      console.log(`diff=${diff}`);
      // if (this.video2.nativeElement.currentTime - event.target.currentTime) {
      //   console.log('diff=' + event.target.currentTime);
      //   this.video2.nativeElement.currentTime = event.target.currentTime;
      // }
      //this.video2.nativeElement.currentTime = event.target.currentTime;
    };
    // addEventListener(video1, 'timeupdate', function () {

    //   position.innerHTML = asTime(this.currentTime);

    //   scrub.value = this.currentTime;

    // });
    // const source = interval(1000);
    // const subscribe = source.subscribe(val => {
    //   console.log(val);
    //   this.video1.nativeElement.currentTime = val;
    //   if (val > 15) {
    //     console.log(`unsubscribe=${val}`);
    //     subscribe.unsubscribe();
    //   }
    // });


  }
}
