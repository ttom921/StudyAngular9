import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GPXParserService {

  constructor(private http: HttpClient) { }
  public getGPX(carid, level = 0): Observable<any> {
    let data;
    let carurl = `car${carid}`;
    console.log(`level=${level}`);
    if (level > 14) {
      data = from(fetch(`./assets/${carurl}_lv4.gpx`));
    } else {
      //const data = from(fetch('./assets/car1234.gpx'));
      data = from(fetch(`./assets/${carurl}.gpx`));
    }
    return data;
  }
}
