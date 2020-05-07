import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, combineLatest, merge } from 'rxjs';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Injectable({
  providedIn: 'root'
})
export class SyncMgrService {
  syncvideolst = [];
  //播放狀態
  playstate$ = new BehaviorSubject(false);
  //加載完成
  videoLoaded$ = new BehaviorSubject(false);
  private loadstart$ = new BehaviorSubject(false);
  private loadedmetadata$ = new BehaviorSubject(false);
  //可播放
  canPlay$ = new BehaviorSubject(false);
  //等待中
  waiting$ = new BehaviorSubject(false);
  //時間差
  difftime$ = new BehaviorSubject(false);
  //全螢幕
  fullScreen$ = new BehaviorSubject(false);
  //主控頻道
  mainvideo: MatVideoComponent;
  constructor() { }
  //#region rxjs相關
  //初始化rxjs的事件
  initRxJSevent() {
    this.init_loadedmetadata_combineLatest();
    this.init_loadstart_combineLatest();
    this.init_canplay_combineLatest();
    this.init_waiting_merge();
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
    //全部收到再發射
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
  //時間差
  private cal_difftime_behavior_subject() {

    let ret = this.syncvideolst.some(item => {
      //console.log(`cal_difftime -> mainvideo.time=${this.mainvideo.time} item.time=${item.time}`);
      let calret = Math.abs(this.mainvideo.time - item.time);
      //console.log(`cal_difftime calret=${calret}`);
      if (calret > 0.5)
        return true;
    });
    //console.log(`difftime$=${ret}`);
    this.difftime$.next(ret);
  }
  //讀取完成
  init_loadstart_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadstart');
      obsary.push(event$);
    });
    combineLatest(...obsary).subscribe(data => {
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
  ////#endregionrxjs相關
  play() {
    //console.log(`SyncMgrService->play()`);
    this.syncvideolst.forEach(element => {
      element.getVideoTag().play();
    });
    //this.mainvideo.getVideoTag().play();
    //this.playstate$.next(true);
  }
  pause() {
    //console.log(`SyncMgrService->pause()`);
    this.syncvideolst.forEach(element => {
      element.getVideoTag().pause();
    });
    //this.mainvideo.getVideoTag().pause();
    //this.playstate$.next(false);
  }
  setCurrentTime(setcurtime: number) {
    this.syncvideolst.forEach(element => {
      //console.log(`setCurrentTime be current=${element.time} ${setcurtime}`);
      element.time = setcurtime;
      //console.log(`setCurrentTime af current=${element.time}`);
    });
  }
}
