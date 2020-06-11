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



    //datas = this.TestFakeData();
    //datas = this.TestFakeData3();
    //datas = this.TestFakeData5();

    //datas = this.TestFakeData1();

    //datas = this.TestFakeData8();
    //datas = this.TestFakeData9();



    //IE
    //datas = this.TestFakeData7();
    //datas = this.TestFakeDataIE7();
    datas = this.TestFakeData9();

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
        src: "http://localhost:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },

    ];
    return data;
  }
  TestFakeData1() {
    let data = [
      {
        //src: "http://localhost:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
        //30fps
        src: "http://localhost:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"

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
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },

    ];
    return data;
  }
  TestFakeData5() {
    let data = [
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
    ];
    return data;
  }
  TestFakeData6() {
    let data = [
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
    ];
    return data;
  }
  TestFakeData7() {
    let data = [
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2016-08-14)TIME(14-00-00)]CH01.mp4"
      },
    ];
    return data;
  }
  //https://nkoehler.github.io/mat-video/assets/NASA.mp4
  TestFakeDataIE7() {
    let data = [
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      },
    ];
    return data;
  }

  // TestFakeDataIE7() {
  //   let data = [
  //     {
  //       src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
  //     },
  //     {
  //       src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
  //     },
  //     {
  //       src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
  //     },
  //     {
  //       src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
  //     },
  //     {
  //       src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
  //     },
  //     {
  //       src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
  //     },
  //     {
  //       src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
  //     },
  //   ];
  //   return data;
  // }
  TestFakeData8() {
    let data = [
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH01.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH02.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH03.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH04.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH05.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH07.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH08.mp4"
      },
    ];
    return data;
  }
  TestFakeData9() {
    let data = [
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
      },
      {
        src: "http://192.168.46.139:4200/assets/[DATE(2020-05-15)TIME(09-22-00)]CH06_aac.mp4"
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
