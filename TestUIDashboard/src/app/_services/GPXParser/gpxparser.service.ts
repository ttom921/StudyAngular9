import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GPXParserService {

  constructor(private http: HttpClient) { }
  public getGPX(carid): Observable<any> {
    let carurl = `car${carid}`;
    //const data = from(fetch('./assets/car1234.gpx'));
    const data = from(fetch(`./assets/${carurl}.gpx`));
    return data;
  }
}
