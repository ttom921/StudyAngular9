import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input } from '@angular/core';
import * as L from 'leaflet';
import { LatLngExpression, Layer, tileLayer, latLng } from 'leaflet';

@Component({
  selector: 'osm-view',
  templateUrl: './osm-view.component.html',
  styleUrls: ['./osm-view.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class OsmViewComponent implements OnInit {
  @ViewChild('osmmap', { static: true }) osmap: ElementRef;
  /**
    * 設定中心的經緯度
    * @memberof OsmViewComponent
    */
  @Input() center: LatLngExpression = [24.941422, 121.311301];
  /**
  * 目前的zoom的大小
  * @memberof OsmViewComponent
  */
  @Input() zoom = 14;
  map: L.Map;// Values to bind to Leaflet Directive

  ngOnInit(): void {
    console.log("map ngOnInit----------------------");

    //this.initMapLayer();
    this.map = L.map('mapid', {
      attributionControl: false,//移除右下角的資訊
      center: this.center,
      zoom: 16
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);

    //修改右下角的資訊
    L.control.attribution({ prefix: 'leaflet ' }).addTo(this.map);
  }

}
