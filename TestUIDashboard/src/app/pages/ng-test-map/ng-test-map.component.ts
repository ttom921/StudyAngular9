import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ng-test-map',
  templateUrl: './ng-test-map.component.html',
  styleUrls: ['./ng-test-map.component.scss']
})
export class NgTestMapComponent implements OnInit {
  centerlist = [[24.941422, 121.311301], [25.0249211, 121.5075035]];
  centerselect = this.centerlist[0];
  center = this.centerlist[0];//[25.0249211, 121.5075035];

  constructor() { }

  ngOnInit(): void {
  }
  selectChange(ev) {
    //console.log(this.centerselect);
    this.center = this.centerselect;
  }

}
