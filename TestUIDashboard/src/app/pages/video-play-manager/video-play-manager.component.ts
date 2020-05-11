import { Component, OnInit, ViewChild, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { ActivatedRoute } from '@angular/router';
import { CarVideoService } from 'src/app/_services/video/car-video.service';
import { SyncMgrComponent } from './sync-mgr/sync-mgr.component';

@Component({
  selector: 'app-video-play-manager',
  templateUrl: './video-play-manager.component.html',
  styleUrls: ['./video-play-manager.component.scss']
})
export class VideoPlayManagerComponent implements OnInit, AfterViewInit {
  carid = "";
  eventid = "";
  token = "";
  //播放列表
  videolist = [];
  selectidx = 0;
  //主要播放
  @ViewChild('mainvideoid', { static: true }) matMainVideo: MatVideoComponent;
  @ViewChildren(MatVideoComponent) matVideos: QueryList<MatVideoComponent>;
  @ViewChild('syncmgr', { static: true }) syncmgr: SyncMgrComponent;
  mainvideo = {
    src: ""
  };
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
        this.mainvideo.src = res[0].src;
      }
    );
  }


  ngOnInit(): void {
    //console.log(`VideoPlayManagerComponent->ngOnInit`);
    //初始化
    this.matMainVideo.src = this.mainvideo.src;

  }
  ngAfterViewInit(): void {
    //console.log(`VideoPlayManagerComponent->ngAfterViewInit`);

    this.matVideos.forEach((matvideo, idx, array) => {
      //console.log(`idx=${idx},matvideo=${matvideo}`);
      // if (idx == 1) {
      //   this.videoSrcChange(this.matMainVideo, matvideo.src);
      // }
      this.syncmgr.addMatVideo(matvideo);
      if (idx == array.length - 1) {
        //console.log("all done");
        this.syncmgr.initRxJSevent();
      }
    });
    this.syncmgr.setMainVideo();

  }
  onVideoclick(event: Event, itemvideo, idx) {
    this.selectidx = idx;
    //event.preventDefault();
    event.stopPropagation();
    //console.log(itemvideo.src);
    this.mainvideo.src = itemvideo.src;
    this.syncmgr.videoSrcChange(this.matMainVideo, this.mainvideo.src);
    //this.videoSrcChange(this.matMainVideo, this.mainvideo.src);

    return false;
  }
}
