import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { MatVideoComponent } from '../../video/video.component';
import { delay } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SyncVideoMgrService {
  private syncvideolst = [];
  //加載完成
  videoLoaded$ = new BehaviorSubject(false);
  loadstart$ = new BehaviorSubject(false);
  loadedmetadata$ = new BehaviorSubject(false);
  //可播放
  canPlay$ = new BehaviorSubject(false);
  //等待中
  waiting$ = new BehaviorSubject(false);
  //時間差
  difftime$ = new BehaviorSubject(false);
  //主控頻道
  mainvideo: MatVideoComponent;
  constructor() { }
  //加入控制的video
  addVideo(video: MatVideoComponent) {
    this.syncvideolst.push(video);
  }
  setMainVideo(video: MatVideoComponent = null) {
    if (!isNullOrUndefined(video))
      this.mainvideo = this.syncvideolst[0];
    let idx = this.syncvideolst.findIndex(item => {
      return item === video;
    });
    if (idx > 0) {
      this.mainvideo = this.syncvideolst[idx];
    }
    //console.log(`setMainVideo idx=${idx}`);
    //console.dir(this.mainvideo);
    //console.log(`setMainVideo =${this.mainvideo}`)
  }
  //#region rxjs相關
  //初始化rxjs的事件
  initcombineLatest() {
    this.init_loadedmetadata_combineLatest();
    this.init_loadstart_combineLatest();
    this.init_canplay_combineLatest();
    this.init_waiting_combineLatest();
    //this.init_difftime_combineLatest();
  }
  //是否可播放
  private init_canplay_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      //obsary.push(item.canplay());
      //let myvideo = item.getVideoTag();
      const event$ = fromEvent(item.getVideoTag(), 'canplay');
      //console.log(item);
      obsary.push(event$);
    });
    //console.log(obsary);
    const allEvents$ = combineLatest(obsary);
    allEvents$.subscribe(data => {
      // let ret = true;
      // data.forEach(element => {
      //   //console.log(`canplay=>${element["returnValue"]}`);
      //   if (element["returnValue"] == false) {
      //     ret = false;
      //   }
      // });
      //檢查全部是否為真
      let ret = data.every(item => {
        return item["returnValue"] == true;
      });
      //console.log(`allEvents canPlay ans=${ans}`)
      //console.dir(data[0]);
      //console.dir(data[1]);
      //console.log(data[0]["returnValue"]);
      //console.log(data[1]["returnValue"]);
      //console.log(`allEvents canPlay=${data}`);
      //console.log(`allEvents canPlay=${ret}`)
      this.canPlay$.next(ret);
      //this.waiting$.next(false);
    });
  }
  //是否在緩衝
  private init_waiting_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      //obsary.push(item.waiting());
      const event$ = fromEvent(item.getVideoTag(), 'waiting');

      obsary.push(event$);
    });
    const allEvents$ = combineLatest(obsary);
    allEvents$.subscribe(data => {
      //檢查是否任一為真
      // let ret = false;
      // data.forEach(element => {
      //   //console.log(`waiting=>${element["returnValue"]}`);
      //   if (element["returnValue"] == true) {
      //     ret = true;
      //   }
      // });

      let ret = data.some(item => {
        return item["returnValue"] == true;
      });
      //console.dir(data[0]);
      //console.log(`allEvents waiting=${ret}`);
      //this.canPlay$.next(false);
      this.waiting$.next(ret);
      //計算時間差
      this.cal_difftime_combineLatest();
    });
  }
  //讀取完成
  private init_loadstart_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadstart');
      obsary.push(event$);
    });
    const allEvents$ = combineLatest(obsary);
    allEvents$.subscribe(data => {
      let ret = true;
      //檢查全部是否為真
      ret = data.every(item => {
        return item["type"] == "loadstart";
      });
      //console.dir(data[0]);
      //console.log(`allEvents loadstart=${ret}`);
      //this.canPlay$.next(false);
      this.loadstart$.next(ret);
      this.videoLoaded$.next(ret);
    });
  }
  private init_loadedmetadata_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadedmetadata');
      obsary.push(event$);
    });
    const allEvents$ = combineLatest(obsary);
    allEvents$.subscribe(data => {
      let ret = true;
      //檢查全部是否為真
      ret = data.every(item => {
        return item["type"] == "loadedmetadata";
      });
      //console.dir(data[0]);
      //console.log(`allEvents loadedmetadata=${ret}`);
      //this.canPlay$.next(false);
      this.loadedmetadata$.next(ret);
      this.videoLoaded$.next(ret);
    });
  }
  //時間差
  private cal_difftime_combineLatest() {
    let ret = this.syncvideolst.some(item => {
      return Math.abs(this.mainvideo.time - item.time) > 2;
    });
    //console.log(`difftime$=${ret}`);
    this.difftime$.next(ret);
  }
  //#endregion  rxjs相關
  play() {
    this.syncvideolst.forEach(element => {
      element.getVideoTag().play();
    });
  }
  pause() {
    this.syncvideolst.forEach(element => {
      element.getVideoTag().pause();
    });
  }
  setCurrentTime(setcurtime: number) {
    this.syncvideolst.forEach(element => {
      //console.log(`setCurrentTime be current=${element.time} ${setcurtime}`);
      element.time = setcurtime;
      console.log(`setCurrentTime af current=${element.time}`);
    });
  }
  //測試
  TestRanderTime() {
    this.syncvideolst.forEach(element => {
      let rtime = this.getRndInteger();
      console.log(`TestRanderTime current=${element.time} ${rtime}`);
      element.time += rtime;
      console.log(`TestRanderTime time ${element.time}`);
    });

  }
  private getRndInteger(min = 3, max = 8) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
