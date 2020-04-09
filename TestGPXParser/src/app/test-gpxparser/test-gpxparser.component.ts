import { Component, OnInit } from '@angular/core';
import { GPXParserService } from '../_services/GPXParser/gpxparser.service';
declare var gpxParser: any;
@Component({
  selector: 'app-test-gpxparser',
  templateUrl: './test-gpxparser.component.html',
  styleUrls: ['./test-gpxparser.component.scss']
})
export class TestGPXParserComponent implements OnInit {

  constructor(private gpxParserService: GPXParserService) {

  }

  ngOnInit(): void {
    var gpx = new gpxParser(); //Create gpxParser Object
    this.gpxParserService.getGPX().subscribe(data => {
      //console.log(data.text().then(result => console.log(result)));
      data.text().then(result => {
        gpx.parse(result);
        console.log(gpx);
        let totalDistance = gpx.routes[0].distance.total;
        console.log(`distance=${totalDistance}`);
        // let geoJSON = gpx.toGeoJSON();
        // console.log(geoJSON);
        this.printRouter(gpx.routes[0]);
      });
    });
  }
  printRouter(route) {
    let coordinates = route.points.map(p => [p.lat.toFixed(5), p.lon.toFixed(5)]);
    console.log(coordinates);
  }

}
