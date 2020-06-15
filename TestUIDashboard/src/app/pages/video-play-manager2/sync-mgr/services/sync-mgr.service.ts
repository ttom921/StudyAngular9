import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, combineLatest, Subscription, merge } from 'rxjs';
import { VideoLayoutType, VideoPageDirect } from '../../video-play-mgrs.enum';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class SyncMgrService {


  //影像列表
  syncvideolst = [];


  constructor() { }
  clearVideolist() {
    this.syncvideolst = [];
  }
  //#region 播放相關Rxjs
  //播放狀態
  playstate$ = new BehaviorSubject(false);
  playAction = false;
  //加載完成
  videoLoaded$ = new BehaviorSubject(false);
  //可播放
  canPlay$ = new BehaviorSubject(false);
  //等待中
  waiting$ = new BehaviorSubject(false);
  //時間差
  difftime$ = new BehaviorSubject(false);
  //主控頻道
  private mainvideo: MatVideoComponent;

  //初始化rxjs的事件
  // initMatVideoRxJSevent() {
  //   this.init_loadedmetadata_combineLatest();
  //   this.init_loadstart_combineLatest();
  // }
  initVideoRxJSevent(matvideolist: MatVideoComponent[], sub: Subscription) {
    for (let index = 0; index < matvideolist.length; index++) {
      const element = matvideolist[index];
      this.syncvideolst.push(element);
    }
    console.log(`this.syncvideolst=${this.syncvideolst}`);

    console.log("initVideoRxJSevent all done");
    //是否可播放
    const obscaplay = this.init_canplay_combineLatest();
    sub.add(obscaplay);
    //讀取完成
    const obsSub1 = this.init_loadedmetadata_combineLatest();
    //const obsSub2 = this.init_loadstart_combineLatest();
    sub.add(obsSub1);
    //sub.add(obsSub2);
    //是否在緩衝
    const obswaiting = this.init_waiting_merge();
    sub.add(obswaiting);
    //是否播放結束
    const obplayended = this.init_ended__combineLatest();
    sub.add(obplayended);

  }

  //是否可播放
  init_canplay_combineLatest(): Subscription {
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
    //console.log(`init_canplay_combineLatest syncvideolst=${this.syncvideolst.length}`);
    const obsSub = combineLatest(...obsary).subscribe(data => {
      //console.log(`combineLatest->data=${data}`)
      this.canPlay$.next(true);
    });
    return obsSub;
  }

  //是否在緩衝
  init_waiting_merge(): Subscription {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      //obsary.push(item.waiting());
      const event$ = fromEvent(item.getVideoTag(), 'waiting');
      obsary.push(event$);
    });
    //合成一個，有任一就發射
    const obsSub = merge(...obsary).subscribe(data => {
      //console.dir(data);
      this.waiting$.next(true);

      //計算時間差
      this.cal_difftime_behavior_subject();
    });
    return obsSub;
  }
  //時間差
  private cal_difftime_behavior_subject() {
    //if (isNullOrUndefined(this.mainvideo)) return;
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

  // 讀取完成
  // init_loadstart_combineLatest(): Subscription {
  //   let obsary = [];
  //   this.syncvideolst.forEach(item => {
  //     const event$ = fromEvent(item.getVideoTag(), 'loadstart');
  //     obsary.push(event$);
  //   });
  //   const obsSub = combineLatest(...obsary).subscribe(data => {
  //     //console.log(`allEvents loadstart`);
  //     //this.loadstart$.next(true);
  //     this.videoLoaded$.next(true);
  //   });
  //   return obsSub;
  // }
  init_loadedmetadata_combineLatest(): Subscription {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'loadedmetadata');
      obsary.push(event$);
    });
    const obsSub = combineLatest(...obsary).subscribe(data => {
      //console.log(`allEvents loadedmetadata`);
      //this.loadedmetadata$.next(true);
      this.videoLoaded$.next(true);
    });
    return obsSub;
  }
  //是否播放結束
  init_ended__combineLatest(): Subscription {
    let obsary = [];
    this.syncvideolst.forEach(item => {
      const event$ = fromEvent(item.getVideoTag(), 'ended');
      obsary.push(event$);
    });
    const obsSub = combineLatest(...obsary).subscribe(data => {
      console.log(`allEvents ended`);
      //this.playstate$.next(false);
      //this.setVideoPlayback(false);
      this.canPlay$.next(true)
    });
    return obsSub;
  }
  //#endregion
  //#region 播放控制相關
  setVideoPlayback(value: boolean) {
    if (this.playAction !== value) {
      this.toggleVideoPlayback();
    }
  }
  toggleVideoPlayback(): void {
    this.playAction = !this.playAction;
    this.updateVideoPlayback();
  }
  updateVideoPlayback(): void {
    this.playAction ? this.play() : this.pause();
  }
  private play() {
    console.log(`SyncMgrService->play()`);
    this.syncvideolst.forEach(element => {
      element.getVideoTag().play();
    });
    this.playstate$.next(true);
  }
  pause() {
    console.log(`SyncMgrService->pause()`);
    this.syncvideolst.forEach(element => {
      element.getVideoTag().pause();
    });
    this.playstate$.next(false);
  }
  //#endregion 播放控制相關
  //#region 主控頻道相關
  //設定主控頻道
  setMainVideo(mvideo: MatVideoComponent) {
    this.mainvideo = mvideo;
  }
  //檢查是否有主頻道
  isMainvideo() {
    if (isNullOrUndefined(this.mainvideo))
      return true;
    else
      return false;
  }
  getMainTime(): number {
    return this.mainvideo.time;
  }
  //#endregion 主控頻道相關

  //設定播放時間
  setCurrentTime(setcurtime: number) {
    this.syncvideolst.forEach(element => {
      //console.log(`setCurrentTime be current=${element.time} ${setcurtime}`);
      element.time = setcurtime;
      //console.log(`setCurrentTime af current=${element.time}`);
    });
  }
  //設定移動n秒
  setJumpTime(jumptime: number) {
    this.syncvideolst.forEach(element => {
      //console.log(`setJumpTime be current=${element.time} ${setcurtime}`);
      element.time += jumptime;
      //console.log(`setJumpTime af current=${element.time}`);
    });
  }
  //控制張數
  setFrames(nbFrames: number, fps: number) {
    this.syncvideolst.forEach(element => {
      const currentFrames = element.getVideoTag().currentTime * fps;
      const newPos = (currentFrames + nbFrames) / fps + 0.00001;
      //console.log(`setFrames newPos=${newPos}`);
      element.getVideoTag().currentTime = newPos;
    });
  }

  //#region  排版相關
  //layouttype 排版
  layoutType$: BehaviorSubject<VideoLayoutType> = new BehaviorSubject(VideoLayoutType.Type1);
  //#endregion 排版相關
  //#region 切換頁面相關
  private pagechangeSource = new Subject();
  pagechange$ = this.pagechangeSource.asObservable();
  nextPage(val: VideoPageDirect) {
    this.pagechangeSource.next(val);
  }
  //#endregion
}
