import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VideoPageDirect, VideoLayoutType } from '../../video-play-mgrs.enum';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { SyncMgrService } from '../../sync-mgr/services/sync-mgr.service';

@Component({
  selector: 'app-layout-type1',
  templateUrl: './layout-type1.component.html',
  styleUrls: ['./layout-type1.component.scss']
})

export class LayoutType1Component implements OnInit, OnDestroy {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  @ViewChild('video3', { static: true }) video3: MatVideoComponent;
  @ViewChild('video4', { static: true }) video4: MatVideoComponent;
  @ViewChild('video5', { static: true }) video5: MatVideoComponent;
  @ViewChild('video6', { static: true }) video6: MatVideoComponent;
  @ViewChild('video7', { static: true }) video7: MatVideoComponent;
  @ViewChild('video8', { static: true }) video8: MatVideoComponent;
  videolist = [];
  mailindex = 0;
  sub = new Subscription();
  constructor(
    private communicationService: CommunicationService,
    private syncMgrService: SyncMgrService,
  ) {

  }
  ngOnDestroy(): void {
    //console.log(`LayoutType1Component=>ngOnDestroy`);
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const obsSub = this.syncMgrService.pagechange$.subscribe((data: VideoPageDirect) => {
      //console.log(`LayoutType1Component=>${data}`);
      this.changePage(data);
    });
    this.sub.add(obsSub);
    const obssub1 = this.communicationService.videolist$.subscribe((data: any[]) => {
      //console.log(typeof (data));
      //console.log(data);
      //console.log(`LayoutType1Component video=>${data}`);
      this.videolist = data;
      for (let index = 0; index < this.videolist.length; index++) {
        let elm = this.videolist[index];
        this[`video${index + 1}`]['src'] = elm.src;
        this[`video${index + 1}`]['title'] = `ch${index + 1}`;
      }
      // for (let index = 0; index < this.videolist.length; index++) {
      //   let elm = this.videolist[index];
      //   this[`video${index + 1}`]['src'] = elm.src;
      // }
      // this.video1.src = this.videolist[0].src;
      //console.log(this[`video1`]);
      //this[`video1`]['src'] = this.videolist[0].src;
    });
    this.sub.add(obssub1);
  }
  changePage(direct: VideoPageDirect) {
    //console.log(`LayoutType1Component=>${direct}`);
    //console.log(this.videolist.length);
    switch (direct) {
      case VideoPageDirect.Left:
        //console.log("<<");
        this.mailindex = (this.mailindex + this.videolist.length - 1) % this.videolist.length;
        //this.communicationService.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
      case VideoPageDirect.Right:
        //console.log(">>");
        this.mailindex = (this.mailindex + 1) % this.videolist.length;
        //this.communicationService.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
    }
    //console.log(`this.mailindex=${this.mailindex}`);
  }
}
