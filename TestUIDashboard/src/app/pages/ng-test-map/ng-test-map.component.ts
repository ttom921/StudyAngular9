import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GPXParserService } from 'src/app/_services/GPXParser/gpxparser.service';
declare var gpxParser: any;
@Component({
  selector: 'app-ng-test-map',
  templateUrl: './ng-test-map.component.html',
  styleUrls: ['./ng-test-map.component.scss']
})
export class NgTestMapComponent implements OnInit {
  //中心點相關
  centerlist = [[24.941422, 121.311301], [25.0249211, 121.5075035]];
  centerselect = this.centerlist[0];
  center = this.centerlist[0];//[25.0249211, 121.5075035];
  //車輛相關
  carInfos = [];
  carpath = [];
  constructor(
    private gpxParserService: GPXParserService
  ) {
    this.testInitCarInfo();
  }

  ngOnInit(): void {
  }
  selectChange(ev) {
    //console.log(this.centerselect);
    this.center = this.centerselect;
  }
  clickCarInfo(info) {
    console.log(info);
  }
  //以下是測試程式
  testInitCarInfo() {
    var gpx = new gpxParser(); //Create gpxParser Object
    this.gpxParserService.getGPX().subscribe(data => {
      //console.log(data.text().then(result => console.log(result)));
      data.text().then(result => {
        gpx.parse(result);
        console.log(gpx);
        let totalDistance = gpx.routes[0].distance.total;
        console.log(`distance=${totalDistance}`);
        //let geoJSON = gpx.toGeoJSON();
        //console.log(geoJSON);
        let coordinates = gpx.routes[0].points.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);
        let obj = {
          caruid: "1234",
          route: coordinates
        };
        this.carInfos.push(obj);
        obj = {
          caruid: "8888",
          route: coordinates
        };
        this.carInfos.push(obj);
        console.log(this.carInfos);

        this.carpath = this.carInfos[0].route;

      });
    });


  }

}
