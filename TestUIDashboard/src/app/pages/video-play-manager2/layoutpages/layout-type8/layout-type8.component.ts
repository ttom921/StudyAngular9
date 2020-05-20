import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { VideoPageDirect } from '../../video-play-mgrs.enum';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';
import { MatVideoComponent } from 'src/app/_common/video/video.component';

@Component({
  selector: 'app-layout-type8',
  templateUrl: './layout-type8.component.html',
  styleUrls: ['./layout-type8.component.scss']
})
export class LayoutType8Component implements OnInit, OnDestroy {
  @ViewChild('video1', { static: true }) video1: MatVideoComponent;
  @ViewChild('video2', { static: true }) video2: MatVideoComponent;
  @ViewChild('video3', { static: true }) video3: MatVideoComponent;
  @ViewChild('video4', { static: true }) video4: MatVideoComponent;
  @ViewChild('video5', { static: true }) video5: MatVideoComponent;
  @ViewChild('video6', { static: true }) video6: MatVideoComponent;
  @ViewChild('video7', { static: true }) video7: MatVideoComponent;
  @ViewChild('video8', { static: true }) video8: MatVideoComponent;
  @ViewChild('mainvideo', { static: true }) mainvideo: MatVideoComponent;

  videolist = [];
  mainindex = 0;

  sub = new Subscription();
  constructor(
    private communicationService: CommunicationService
  ) { }
  ngOnDestroy(): void {
    //console.log(`LayoutType8Component=>ngOnDestroy`);
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const obsSub = this.communicationService.pagechange$.subscribe(data => {
      //console.log(`LayoutType8Component=>${data}`);
    });
    this.sub.add(obsSub);
    const obssub1 = this.communicationService.videolist$.subscribe((data: any[]) => {
      this.videolist = data;
      for (let index = 0; index < this.videolist.length; index++) {
        let elm = this.videolist[index];
        this[`video${index + 1}`]['src'] = elm.src;
        this[`video${index + 1}`]['title'] = `ch${index + 1}`;
      }
      this.setmainvideo();
    });
    this.sub.add(obssub1);
  }
  changePage(direct: VideoPageDirect) {
    console.log(`LayoutType8Component=>${direct}`)
  }
  private setmainvideo(index = 0) {
    this.mainindex = index;
    let elm = this.videolist[this.mainindex];
    this[`mainvideo`]['src'] = elm.src;
    this[`mainvideo`]['title'] = `ch${this.mainindex + 1}`;
  }
}
