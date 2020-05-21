import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutType1Component } from './layoutpages/layout-type1/layout-type1.component';
import { CarVideoService } from 'src/app/_services/video/car-video.service';
import { VideoPageDirect, VideoLayoutType } from './video-play-mgrs.enum';
import { LayoutType4Component } from './layoutpages/layout-type4/layout-type4.component';
import { LayoutType8Component } from './layoutpages/layout-type8/layout-type8.component';
import { CommunicationService } from './services/communication.service';
import { SyncMgrService } from './sync-mgr/services/sync-mgr.service';

@Component({
  selector: 'app-video-play-manager2',
  templateUrl: './video-play-manager2.component.html',
  styleUrls: ['./video-play-manager2.component.scss']
})
export class VideoPlayManager2Component implements OnInit {
  // @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  // @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  // @ViewChild('video3', { static: true }) video3: MatVideoComponent;
  // @ViewChild('video4', { static: true }) video4: MatVideoComponent;
  //VideoPageDirect = VideoPageDirect;
  VideoLayoutType = VideoLayoutType;
  videoLayoutType: VideoLayoutType = VideoLayoutType.Type1;
  carid = "";
  eventid = "";
  token = "";
  //播放列表
  videolist = [];
  //mailindex = 0;
  DynComp;
  constructor(
    private activeRoute: ActivatedRoute,
    private carVideoService: CarVideoService,
    private communicationService: CommunicationService,
    private syncMgrService: SyncMgrService
  ) {
    //取得車牌
    //this.activeRoute.params.subscribe(value => console.log(value));
    this.carid = this.activeRoute.snapshot.paramMap.get('carid');
    this.eventid = this.activeRoute.snapshot.paramMap.get('eventid');
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    // console.log(`carid=${this.carid}`);
    // console.log(`eventid=${this.eventid}`);
    // console.log(`token=${this.token}`);
    this.carVideoService.Get(this.carid).subscribe(
      res => {
        this.videolist = res;
        //console.log(this.videolist);
        //this.mainvideo.src = res[0].src;
        this.communicationService.nextVideolst(this.videolist);
      }
    );
    this.syncMgrService.layoutType$.subscribe(data => {
      //console.log(data);
      this.changeLayoutType(data);
    });
  }


  ngOnInit(): void {

  }
  //改變layout
  changeLayoutType(layouttye: VideoLayoutType) {
    //console.log(`start videoLayoutType=${this.videoLayoutType}`);
    switch (layouttye) {
      case VideoLayoutType.Type1:
        this.videoLayoutType = VideoLayoutType.Type1;
        this.DynComp = LayoutType1Component;
        break;
      case VideoLayoutType.Type4:
        this.videoLayoutType = VideoLayoutType.Type4;
        this.DynComp = LayoutType4Component;
        break;
      case VideoLayoutType.Type8:
        this.videoLayoutType = VideoLayoutType.Type8;
        this.DynComp = LayoutType8Component;
        break;
      default:
        break;
    }
    //console.log(`end videoLayoutType=${this.videoLayoutType}`);
    //console.log(`this.DynComp,${this.DynComp}`);
  }

  //以下是測試程式

}
