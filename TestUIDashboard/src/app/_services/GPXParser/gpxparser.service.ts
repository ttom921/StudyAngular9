import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GPXParserService {

  constructor(private http: HttpClient) { }
  public getGPX(): Observable<any> {
    const data = from(fetch('./assets/result.gpx'));
    return data;
  }
}
