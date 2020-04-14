import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GPXParserService } from 'src/app/_services/GPXParser/gpxparser.service';
import { debounceTime, last } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Observable, of } from 'rxjs';
declare var gpxParser: any;
@Component({
  selector: 'app-ng-test-map',
  templateUrl: './ng-test-map.component.html',
  styleUrls: ['./ng-test-map.component.scss']
})
export class NgTestMapComponent implements OnInit {
  zoom = 14
  //中心點相關
  centerlist = [[24.941422, 121.311301], [25.0249211, 121.5075035]];
  centerselect = this.centerlist[0];
  center = this.centerlist[0];//[25.0249211, 121.5075035];
  //車輛相關
  carInfos = [];
  carpath = [];
  carinfo: any;
  //

  constructor(
    private gpxParserService: GPXParserService
  ) {
    this.testGenCarUid();
    //this.testInitCarInfo();
  }

  ngOnInit(): void {
  }
  selectChange(ev) {
    //console.log(this.centerselect);
    this.center = this.centerselect;
  }
  clickCarInfo(info) {
    //console.log(info);
    this.testgetGpxDatabyid(info);
  }
  zoomChange(e) {
    console.log(e);
    if (isNullOrUndefined(this.carinfo)) return;
    //   console.log(this.carinfo);
    let gpx = new gpxParser(); //Create gpxParser Object
    this.gpxParserService.getGPX(this.carinfo.caruid, e).subscribe(data => {
      this.zoom = e;
      //console.log(data.text().then(result => console.log(result)));
      data.text().then(result => {
        gpx.parse(result);
        //console.log(gpx);
        //let totalDistance = gpx.routes[0].distance.total;
        //console.log(`zoomChange distance=${totalDistance}`);
        let coordinates = gpx.routes[0].points.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);
        this.carpath = coordinates;
      });
    });
  }
  //以下是測試程式
  //建立測試車牌
  testGenCarUid() {
    let carids = ["8888", "1234"];
    carids.forEach(element => {
      let obj = {
        caruid: element,
      };
      this.carInfos.push(obj);
    });
  }
  testgetGpxDatabyid(carinfo) {
    var gpx = new gpxParser(); //Create gpxParser Object
    this.gpxParserService.getGPX(carinfo.caruid, this.zoom).subscribe(data => {
      //console.log(data.text().then(result => console.log(result)));
      data.text().then(result => {
        gpx.parse(result);
        //console.log(gpx);
        let totalDistance = gpx.routes[0].distance.total;
        console.log(`distance=${totalDistance}`);
        let coordinates = gpx.routes[0].points.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);
        this.carpath = coordinates;
        this.carinfo = carinfo;
      });
    });
  }
}
