import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, fromEvent } from 'rxjs';
import { MatVideoComponent } from '../../video/video.component';

@Injectable({
  providedIn: 'root'
})
export class SyncVideoMgrService {
  private syncvideolst = [];
  //可播放
  canPlay$ = new BehaviorSubject(false);
  //等待中
  waiting$ = new BehaviorSubject(false);

  constructor() { }
  addVideo(video: MatVideoComponent) {
    this.syncvideolst.push(video);
  }
  //#region rxjs相關
  initcombineLatest() {
    this.init_canplay_combineLatest();
    this.init_waiting_combineLatest();
    // const allEvents$ = combineLatest(this.syncvideolst);
    // allEvents$.subscribe(data => {
    //   //console.dir(data);
    //   //console.log(`allEvents canPlay=${data}`);
    //   this.canPlay$.next(true);
    //   this.waiting$.next(false);
    // });
  }
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
      //console.dir(data[0]);
      //console.dir(data[1]);
      console.log(`allEvents canPlay=${data}`);
      this.canPlay$.next(true);
      this.waiting$.next(false);
    });
  }
  private init_waiting_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      //obsary.push(item.waiting());
      const event$ = fromEvent(item.getVideoTag(), 'waiting');

      obsary.push(event$);
    });
    const allEvents$ = combineLatest(obsary);
    allEvents$.subscribe(data => {
      console.dir(data[0]);
      console.log(`allEvents waiting=${data}`);
      this.canPlay$.next(false);
      this.waiting$.next(true);
    });
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
}
