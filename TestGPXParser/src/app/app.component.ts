import { Component } from '@angular/core';
declare var gpxParser: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestGPXParser';
  constructor() {
    var gpx = new gpxParser(); //Create gpxParser Object
  }
}
