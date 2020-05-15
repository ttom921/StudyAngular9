import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoPageDirect } from '../../video-play-mgrs.enum';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-type4',
  templateUrl: './layout-type4.component.html',
  styleUrls: ['./layout-type4.component.scss']
})
export class LayoutType4Component implements OnInit, OnDestroy {
  sub = new Subscription();
  mailindex = 0;
  flexChangePageSize = 100;
  pages = 2;
  constructor(
    private communicationService: CommunicationService
  ) { }
  ngOnDestroy(): void {
    //console.log(`LayoutType4Component=>ngOnDestroy`);
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const obsSub = this.communicationService.pagechange$.subscribe((data: VideoPageDirect) => {
      //console.log(`LayoutType4Component=>${data}`);
      this.changePage(data);
    });
    this.sub.add(obsSub);
  }
  changePage(direct: VideoPageDirect) {
    //console.log(`LayoutType4Component=>${direct}`);
    switch (direct) {
      case VideoPageDirect.Left:
        //console.log("<<");
        this.mailindex = (this.mailindex + this.pages - 1) % this.pages;
        //this.communicationService.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
      case VideoPageDirect.Right:
        //console.log(">>");
        this.mailindex = (this.mailindex + 1) % this.pages;
        //this.communicationService.videoSrcChange(this.video1, this.videolist[this.mailindex].src);
        break;
    }
    console.log(`this.mailindex=${this.mailindex}`);
  }

}
