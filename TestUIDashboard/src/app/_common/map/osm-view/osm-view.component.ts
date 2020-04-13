import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { LatLngExpression, Layer, tileLayer, latLng, icon, Marker } from 'leaflet';
import { isNullOrUndefined } from 'util';
import { MakeMarkerIconService } from '../service/make-marker-icon.service';
import { ColorMetaData } from '../model/color-meta-data';

@Component({
  selector: 'osm-view',
  templateUrl: './osm-view.component.html',
  styleUrls: ['./osm-view.component.scss'],
  //encapsulation: ViewEncapsulation.None,
})
export class OsmViewComponent implements OnInit, OnChanges {

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

  //路徑
  @Input()
  carinfo: any;
  pathsObj = {};
  @Input()
  carpath = [];
  pathlayer: L.Layer;
  //mark的物件
  //markersObj = {};
  map: L.Map;// Values to bind to Leaflet Directive
  constructor(
    private makeMarkerIconService: MakeMarkerIconService
  ) {
    //console.log(this.center);
    //
    this.initDefaultIcon();
  }
  ngOnInit(): void {
    console.log("map ngOnInit----------------------");
    this.initMap();
  }
  private initMap() {
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
    //this.addMarker(this.center);
    //console.log(`carinfo=${this.carinfo}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (isNullOrUndefined(this.map)) return;

    //console.log(this.map);
    console.log(changes);
    //車子
    if (changes.hasOwnProperty('carinfo')) {
      console.log(`change carinfo=>${this.carinfo}`);
    }
    //車子路徑

    if (changes.hasOwnProperty('carpath')) {
      if (this.map.hasLayer(this.pathlayer)) {
        this.map.removeLayer(this.pathlayer);
        this.pathlayer = null;
      }
      //檢查是否有此物件
      const key = this.carinfo.caruid;
      let polyline;
      if (!this.pathsObj.hasOwnProperty(key)) {
        //加入一個path
        polyline = L.polyline(this.carinfo.carpath, { weight: 6, color: 'darkred' });
        this.pathsObj[key] = polyline;
      }
      polyline = this.pathsObj[key];
      this.pathlayer = polyline;
      this.pathlayer.addTo(this.map);
      //var polyline = L.polyline(this.carpath, { weight: 6, color: 'darkred' }).addTo(this.map);
    }
    if (changes.hasOwnProperty('center')) {
      //console.log(this.center);
      this.map.panTo(this.center);
      // const key = this.center[0] + this.center[1];
      // //檢查是否有此物件
      // if (!this.markersObj.hasOwnProperty(key)) {
      //   //加入一個mark
      //   //console.log("//加入一個mark");
      //   this.addMarker(this.center);
      // }
      // const marker = this.markersObj[key];
      // if (!this.map.hasLayer(marker)) {
      //   this.map.addLayer(marker);
      // }
    }
  }
  //初始化預設的圖標
  private initDefaultIcon() {
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    const iconDefault = icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    Marker.prototype.options.icon = iconDefault;

  }

  //以下是測試程式
  // addMarker(item) {
  //   //let myicon = this.testGetTextIcon();
  //   let myicon = this.testGetMaterialIcon();
  //   const marker = L
  //     .marker([item[0], item[1]], { icon: myicon, title: "aaa" })
  //     .addTo(this.map)
  //     // .bindPopup(item.properties.name +
  //     //   '<br>成人口罩：' + item.properties.mask_adult +
  //     //   '<br>兒童口罩：' + item.properties.mask_child
  //     //)
  //     ;
  //   const key = item[0] + item[1];
  //   this.markersObj[key] = marker;
  // }
  // removeallmark() {
  //   for (let key in this.markersObj) {
  //     let marker = this.markersObj[key];
  //     //console.log(marker);
  //     this.map.removeLayer(marker);
  //   }
  // }
  private testGetTextIcon() {
    let bgcolor = new ColorMetaData();
    bgcolor.getRandomColor();
    let fgcolor = new ColorMetaData();
    fgcolor.getRandomColor();
    let myicon = this.makeMarkerIconService.makeMarkerIcon(bgcolor, fgcolor, '012345678');
    return myicon;
  }
  private testGetMaterialIcon() {
    let bgcolor = new ColorMetaData();
    bgcolor.getRandomColor();
    let fgcolor = new ColorMetaData();
    fgcolor.getRandomColor();
    let myicon = this.makeMarkerIconService.makeMarkerMaterialIcon(bgcolor, fgcolor, '<i class="material-icons">card_travel</i>');
    return myicon;
  }

}
