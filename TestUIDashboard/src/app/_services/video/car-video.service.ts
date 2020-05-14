import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarVideoService {
  //api = `${environment.apiUrl}/users`;
  constructor(private http: HttpClient) { }
  Get(carid) {
    //let url = `${this.api}?userid=${data.id}`;
    console.log("carid=" + carid);
    let datas = null;
    // if (carid == "8888") {
    //   datas = this.TestFakeData2();
    // } else {
    //   datas = this.TestFakeData();
    // }
    //datas = this.TestFakeData3();
    datas = this.TestFakeData5();

    return of(datas);
  }
  TestFakeData() {
    let data = [
      {
        //src: "https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4#t=2.0"
      },
      {
        src: "https://nkoehler.github.io/mat-video/assets/NASA.mp4"
      },
      {
        src: "http://static.videogular.com/assets/videos/videogular.mp4#t=1.0"
      },
      {
        src: "http://static.videogular.com/assets/videos/elephants-dream.mp4#t=1.0"
      },
      {
        src: "http://localhost:4200/assets/[DATE(2016-08-14)TIME(13-00-00)]CH05.mp4"
      },

    ];
    return data;
  }
  TestFakeData2() {
    let data = [
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4#t=1.0"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      },

    ];
    return data;
  }
  TestFakeData3() {
    let data = [
      {
        src: "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },

    ];
    return data;
  }
  TestFakeData4() {
    let data = [
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },

    ];
    return data;
  }
  TestFakeData5() {
    let data = [
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://172.18.2.33:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
    ];
    return data;
  }
  //
  GetBlob(vurl: any): Observable<any> {

    //var api = `${environment.apiUrl}/servers/config`;
    //let api = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4';
    return this.http.get(vurl, {
      responseType: 'blob' // <-- changed to blob
    });
    // return this.http.post<any>(api, data, { observe: 'response' });
    // this.http.post<any>('your API path', body, { responseType: 'blob' as 'json' })
  }
}
