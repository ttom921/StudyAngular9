import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit
}

  from '@angular/core';
import { Observable, fromEvent, BehaviorSubject, combineLatest } from 'rxjs';
import { MatVideoComponent } from '../video/video.component';
import { SyncVideoMgrService } from './service/sync-video-mgr.service';

@Component({
  selector: 'sync-video',
  templateUrl: './sync-video.component.html',
  styleUrls: ['./sync-video.component.scss']
}

) export class SyncVideoComponent implements OnInit, AfterViewInit {

  videoLoaded = true;
  private syncvideolst = [];
  //可播放
  canPlay$;
  //等待中
  waiting$;

  constructor(
    private syncVideoMgrService: SyncVideoMgrService,
  ) {
    this.canPlay$ = this.syncVideoMgrService.canPlay$;
    this.waiting$ = this.syncVideoMgrService.waiting$;
  }

  ngOnInit(): void {
    //console.log(this.video);
    //console.log(this.vname);
    //let vname = this.vname;
    // this.getVideoTag().addEventListener('canplay', function () {
    //   console.log(`${vname}=>canplay`);
    // });
    // this.getVideoTag().addEventListener('waiting', function () {
    //   console.log(`${vname}=>waiting`);
    // });
  }

  ngAfterViewInit(): void { }
  addVideo(video: MatVideoComponent) {
    this.syncVideoMgrService.addVideo(video);
  }
  // //#region rxjs相關
  // initcombineLatest() {
  //   this.init_canplay_combineLatest();
  //   this.init_waiting_combineLatest();
  // }
  // private init_canplay_combineLatest() {
  //   let obsary = [];
  //   this.syncvideolst.forEach(item => {
  //     const event$ = fromEvent(item.getVideoTag(), 'canplay');
  //     obsary.push(event$);
  //   });
  //   const allEvents$ = combineLatest(obsary);
  //   allEvents$.subscribe(data => {
  //     //console.dir(data);
  //     console.log(`allEvents canPlay=${data}`);
  //     this.canPlay$.next(true);
  //     this.waiting$.next(false);
  //   });
  // }
  // private init_waiting_combineLatest() {
  //   let obsary = [];
  //   this.syncvideolst.forEach(item => {
  //     const event$ = fromEvent(item.getVideoTag(), 'waiting');
  //     obsary.push(event$);
  //   });
  //   const allEvents$ = combineLatest(obsary);
  //   allEvents$.subscribe(data => {
  //     //console.dir(data);
  //     console.log(`allEvents waiting=${data}`);
  //     this.canPlay$.next(false);
  //     this.waiting$.next(true);
  //   });
  // }
  // //#endregion  rxjs相關




}
