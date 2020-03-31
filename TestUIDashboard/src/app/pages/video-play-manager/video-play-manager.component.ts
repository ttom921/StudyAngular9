import { Component, OnInit, ViewChild } from '@angular/core';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { ActivatedRoute } from '@angular/router';
import { CarVideoService } from 'src/app/_services/video/car-video.service';

@Component({
  selector: 'app-video-play-manager',
  templateUrl: './video-play-manager.component.html',
  styleUrls: ['./video-play-manager.component.scss']
})
export class VideoPlayManagerComponent implements OnInit {
  carid = "";
  eventid = "";
  token = "";
  //播放列表
  videolist = [];
  //主要播放
  @ViewChild('mainvideoid', { static: true }) matMainVideo: MatVideoComponent;
  elmainvideo: HTMLVideoElement;
  mainvideo = {
    src: ""
  };
  constructor(
    private activeRoute: ActivatedRoute,
    private carVideoService: CarVideoService
  ) {
    //取得車牌
    //this.activeRoute.params.subscribe(value => console.log(value));
    this.carid = this.activeRoute.snapshot.paramMap.get('carid');
    this.eventid = this.activeRoute.snapshot.paramMap.get('eventid');
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    //console.log(`carid=${this.carid}`);
    //console.log(`eventid=${this.eventid}`);
    //console.log(`token=${this.token}`);
    this.carVideoService.Get(this.carid).subscribe(
      res => {
        this.videolist = res;
        //console.log(this.videolist);
        this.mainvideo.src = res[0].src;
      }
    );
  }

  ngOnInit(): void {
  }
  onVideoclick(event: Event, itemvideo) {
    //event.preventDefault();
    event.stopPropagation();
    //console.log(itemvideo.src);
    this.mainvideo.src = itemvideo.src;
    return false;
  }

}
