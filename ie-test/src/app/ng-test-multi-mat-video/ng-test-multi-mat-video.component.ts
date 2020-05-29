import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-test-multi-mat-video',
  templateUrl: './ng-test-multi-mat-video.component.html',
  styleUrls: ['./ng-test-multi-mat-video.component.scss']
})
export class NgTestMultiMatVideoComponent implements OnInit {
  //videosrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4";
  //720
  videosrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4";

  //videosrc = "http://localhost:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4";
  //videosrc = "http://localhost:4200/assets/test.mp4";
  constructor() { }

  ngOnInit(): void {
  }

}
