import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-test-multi-ievideos',
  templateUrl: './ng-test-multi-ievideos.component.html',
  styleUrls: ['./ng-test-multi-ievideos.component.scss']
})
export class NgTestMultiIEVideosComponent implements OnInit {
  videosrc = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4";
  constructor() { }

  ngOnInit(): void {
  }

}
