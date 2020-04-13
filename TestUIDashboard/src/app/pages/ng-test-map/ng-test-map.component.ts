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
  //以下是測試程式
  //建立測試車牌
  testGenCarUid() {
    let carids = ["1234", "8888"];
    carids.forEach(element => {
      let obj = {
        caruid: element,
      };
      this.carInfos.push(obj);
    });
  }
  testgetGpxDatabyid(carinfo) {
    var gpx = new gpxParser(); //Create gpxParser Object
    this.gpxParserService.getGPX(carinfo.caruid).subscribe(data => {
      //console.log(data.text().then(result => console.log(result)));
      data.text().then(result => {
        gpx.parse(result);
        //console.log(gpx);
        let totalDistance = gpx.routes[0].distance.total;
        console.log(`distance=${totalDistance}`);
        let coordinates = gpx.routes[0].points.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);
        this.carpath = coordinates;
        carinfo.carpath = coordinates;
        //console.log(carinfo);
        this.carinfo = carinfo;

      });
    });
  }
  // testInitCarInfo() {
  //   //let carid = "1234";
  //   //this.testgetGpxData(carid);
  //   let carid = "8888";
  //   this.testgetGpxData(carid);
  //   // var gpx = new gpxParser(); //Create gpxParser Object
  //   // let carid = "1234";
  //   // this.gpxParserService.getGPX(carid).subscribe(data => {
  //   //   //console.log(data.text().then(result => console.log(result)));
  //   //   data.text().then(result => {
  //   //     gpx.parse(result);
  //   //     console.log(gpx);
  //   //     let totalDistance = gpx.routes[0].distance.total;
  //   //     console.log(`distance=${totalDistance}`);
  //   //     //let geoJSON = gpx.toGeoJSON();
  //   //     //console.log(geoJSON);
  //   //     let coordinates = gpx.routes[0].points.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);
  //   //     let obj = {
  //   //       caruid: carid,
  //   //       route: coordinates
  //   //     };
  //   //     // this.carInfos.push(obj);
  //   //     // obj = {
  //   //     //   caruid: "8888",
  //   //     //   route: coordinates
  //   //     // };
  //   //     this.carInfos.push(obj);
  //   //     console.log(this.carInfos);

  //   //     this.carpath = this.carInfos[0].route;

  //   //   });
  //   // });
  // }
  // private testgetGpxData(carid) {
  //   // this.gpxParserService.getGPX(carid).subscribe(data => {
  //   //   //console.log(data.text().then(result => console.log(result)));
  //   //   data.text().then(result => {
  //   //     this.gpx.parse(result);
  //   //     console.log(this.gpx);
  //   //     let totalDistance = this.gpx.routes[0].distance.total;
  //   //     console.log(`distance=${totalDistance}`);
  //   //     //let geoJSON = gpx.toGeoJSON();
  //   //     //console.log(geoJSON);
  //   //     let coordinates = this.gpx.routes[0].points.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);
  //   //     let obj = {
  //   //       caruid: carid,
  //   //       route: coordinates
  //   //     };
  //   //     // this.carInfos.push(obj);
  //   //     // obj = {
  //   //     //   caruid: "8888",
  //   //     //   route: coordinates
  //   //     // };
  //   //     this.carInfos.push(obj);
  //   //     console.log(this.carInfos);

  //   //     this.carpath = this.carInfos[0].route;

  //   //   });
  //   // });
  // }

}
