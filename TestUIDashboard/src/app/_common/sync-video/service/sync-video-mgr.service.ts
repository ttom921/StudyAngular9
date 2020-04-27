import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent, concat, merge, zip } from 'rxjs';
import { MatVideoComponent } from '../../video/video.component';
import { delay } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SyncVideoMgrService {
  syncvideolst = [];
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
  initRxJSevent() {
    this.init_loadedmetadata_combineLatest();
    this.init_loadstart_combineLatest();
    this.init_canplay_combineLatest();
    this.init_waiting_merge();
    // //測試
    // const event$ = fromEvent(this.mainvideo.getVideoTag(), "waiting");
    // //combineLatest( event$)
    // event$.subscribe(data => {
    //   console.dir(data);
    //   console.log(`event waiting=${data}`);
    // });
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
    //全部教到再發射
    combineLatest(...obsary).subscribe(data => {
      this.canPlay$.next(true);
    });
  }
  //是否在緩衝
  private init_waiting_merge() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      //obsary.push(item.waiting());
      const event$ = fromEvent(item.getVideoTag(), 'waiting');
      obsary.push(event$);
    });
    //合成一個，有任一就發射
    merge(...obsary).subscribe(data => {
      //console.dir(data);
      this.waiting$.next(true);

      //計算時間差
      this.cal_difftime_behavior_subject();
    });
  }
  //讀取完成
  private init_loadstart_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadstart');
      obsary.push(event$);
    });
    const allEvents$ = combineLatest(...obsary).subscribe(data => {
      //console.log(`allEvents loadstart`);
      this.loadstart$.next(true);
      this.videoLoaded$.next(true);
    });
  }
  private init_loadedmetadata_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadedmetadata');
      obsary.push(event$);
    });
    combineLatest(...obsary).subscribe(data => {
      //console.log(`allEvents loadedmetadata`);
      this.loadedmetadata$.next(true);
      this.videoLoaded$.next(true);
    });
  }
  //時間差
  private cal_difftime_behavior_subject() {
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
      //console.log(`setCurrentTime af current=${element.time}`);
    });
  }
  //測試
  TestRanderTime() {
    this.syncvideolst.forEach(element => {
      let rtime = this.getRndInteger();
      //console.log(`TestRanderTime current=${element.time} ${rtime}`);
      element.time += rtime;
      //console.log(`TestRanderTime time ${element.time}`);
    });

  }
  private getRndInteger(min = 3, max = 8) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
