import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { SyncVideoComponent } from 'src/app/_common/sync-video/sync-video.component';

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
  addVideo(video: SyncVideoComponent) {
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
      obsary.push(item.canplay());
    });
    const allEvents$ = combineLatest(obsary);
    allEvents$.subscribe(data => {
      //console.dir(data);
      //console.log(`allEvents canPlay=${data}`);
      this.canPlay$.next(true);
      this.waiting$.next(false);
    });
  }
  private init_waiting_combineLatest() {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      obsary.push(item.waiting());
    });
    const allEvents$ = combineLatest(obsary);
    allEvents$.subscribe(data => {
      //console.dir(data);
      //console.log(`allEvents canPlay=${data}`);
      this.canPlay$.next(false);
      this.waiting$.next(true);
    });
  }
  //#endregion  rxjs相關
  play() {
    this.syncvideolst.forEach(element => {
      element.play();
    });
  }
  pause() {
    this.syncvideolst.forEach(element => {
      element.pause();
    });
  }
}
