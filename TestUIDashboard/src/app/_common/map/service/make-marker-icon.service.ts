import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { DivIcon } from 'leaflet';
import { ColorMetaData } from '../model/color-meta-data';

@Injectable({
  providedIn: 'root'
})
export class MakeMarkerIconService {

  constructor() { }
  /**
   * 建立icon
   *
   * @memberof MakeMarkerIconService
   */
  makeMarkerIcon(bgcolor: ColorMetaData, fgcolor: ColorMetaData, caption): DivIcon {
    return this.geteratorIcon(bgcolor, fgcolor, caption, false);
  }
  makeMarkerMaterialIcon(bgcolor: ColorMetaData, fgcolor: ColorMetaData, faiconname) {
    return this.geteratorIcon(bgcolor, fgcolor, faiconname, true);
  }
  geteratorIcon(bgcolor: ColorMetaData, fgcolor: ColorMetaData, caption, isFa = false): DivIcon {
    //let myCustomColour = color + 'd0';
    let mybgColour = bgcolor.RGBAToHexA();
    let size = 10,    // size of the marker
      border = 2;   // border thickness

    let markerHtmlStyles = `
        background-color: ${mybgColour};
        width: ${size * 3}px;
        height: ${size * 3}px;
        display: block;
        left: ${size * -1.5}px;
        top: ${size * -1.5}px;
        position: relative;
        border-radius: ${size * 3}px ${size * 3}px 0;
        transform: rotate(45deg);
        border: ${border}px solid #FFFFFF;
    `;
    let captionStyles;
    //let colorText = "red";
    let colorText = fgcolor.RGBAToHexA();
    if (isFa == true) {
      captionStyles = `
        transform: rotate(-45deg);
        display:block;
        width: ${size * 3}px;
        text-align: center;
        line-height: ${size * 3}px;
      `;
    } else {
      captionStyles = `
        transform: rotate(-45deg);
        display:block;
        width: ${size * 3}px;
        text-align: center;
        line-height: ${size * 3}px;
        color:${colorText};
      `;
    }


    let icon = L.divIcon({
      className: 'color-pin-' + mybgColour.replace('#', ''),
      iconAnchor: [border, size * 2 + border * 2],
      popupAnchor: [0, -(size * 3 + border)],

      html: `<span style="${markerHtmlStyles}"><span style="${captionStyles}">${caption || ''}</span></span>`
    });

    return icon;
  }
}
