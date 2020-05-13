import { Component, OnInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutType1Component } from './layoutpages/layout-type1/layout-type1.component';
import { LayoutType2Component } from './layoutpages/layout-type2/layout-type2.component';
import { CarVideoService } from 'src/app/_services/video/car-video.service';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { VideoPageDirect, VideoLayoutType } from './video-play-mgrs.enum';

@Component({
  selector: 'app-video-play-manager2',
  templateUrl: './video-play-manager2.component.html',
  styleUrls: ['./video-play-manager2.component.scss']
})
export class VideoPlayManager2Component implements OnInit {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  @ViewChild('video3', { static: true }) video3: MatVideoComponent;
  @ViewChild('video4', { static: true }) video4: MatVideoComponent;
  @ViewChildren(MatVideoComponent) matVideos: QueryList<MatVideoComponent>;
  VideoPageDirect = VideoPageDirect;
  VideoLayoutType = VideoLayoutType;
  videoLayoutType: VideoLayoutType = VideoLayoutType.Type1;
  carid = "";
  eventid = "";
  token = "";
  //播放列表
  videolist = [];
  mailindex = 0;
  DynComp = LayoutType1Component;
  constructor(
    private activeRoute: ActivatedRoute,
    private carVideoService: CarVideoService,
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

      }
    );
  }


  ngOnInit(): void {
    //console.log(this.videolist[0]);
    for (let index = 0; index < this.videolist.length; index++) {
      let elm = this.videolist[index];
      this[`video${index + 1}`]['src'] = elm.src;
    }
    // this.video1.src = this.videolist[0].src;
    //console.log(this[`video1`]);
    //this[`video1`]['src'] = this.videolist[0].src;
  }

  //#region 切換上下頁
  ChangePage(direct: VideoPageDirect) {
    console.log(`videoLayoutType=${this.videoLayoutType}`);
    switch (this.videoLayoutType) {
      case VideoLayoutType.Type1:
        this.Type1ChangePage(direct);
        break;
      case VideoLayoutType.Type4:
        this.Type4ChangePage(direct)
        break;
      default:
        break;
    }
  }
  private Type4ChangePage(direct: VideoPageDirect) {

  }
  private Type1ChangePage(direct: VideoPageDirect) {
    //console.log(this.videolist.length);
    switch (direct) {
      case VideoPageDirect.Left:
        console.log("<<");
        this.mailindex = (this.mailindex + this.videolist.length - 1) % this.videolist.length;
        //this.video1.src = this.videolist[this.mailindex].src;
        this.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
      case VideoPageDirect.Right:
        console.log(">>");
        this.mailindex = (this.mailindex + 1) % this.videolist.length;
        //this.video1.src = this.videolist[this.mailindex].src;
        this.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
    }
    console.log(`this.mailindex=${this.mailindex}`);
  }
  //#endregion 切換上下頁
  //設定MatVideoComponent元件的影像來源
  videoSrcChange(matvideo: MatVideoComponent, src: string) {
    //let orgtime = this.syncMgrService.mainvideo.time;
    //console.log(`videoSrcChange time=${orgtime}`);
    //this.syncMgrService.pause();
    //this.matplaybutton.setVideoPlayback(false);
    matvideo.src = src;
    matvideo.getVideoTag().src = src;
    //matvideo.time = orgtime;

  }
  //以下是測試程式
  showfig(compname: string) {
    console.log("showfig:" + compname);
    switch (compname) {
      case "type1":
        this.DynComp = LayoutType1Component;
        break;
      case "type2":
        this.DynComp = LayoutType2Component;
        break;

      default:
        break;
    }
  }
}
