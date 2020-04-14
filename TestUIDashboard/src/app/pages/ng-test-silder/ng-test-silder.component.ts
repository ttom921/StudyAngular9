import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-test-silder',
  templateUrl: './ng-test-silder.component.html',
  styleUrls: ['./ng-test-silder.component.scss']
})
export class NgTestSilderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btntest() {
    window.open('http://localhost:4300/dashboard/videoplaymanager/%E3%82%8F2-674/eventid123/eyJhbGciOiJIUzUxMiIsImlhdCI6MTU4');
  }

}
