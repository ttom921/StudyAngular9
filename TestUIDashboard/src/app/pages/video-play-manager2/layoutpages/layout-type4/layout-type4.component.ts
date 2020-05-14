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
  constructor(
    private communicationService: CommunicationService
  ) { }
  ngOnDestroy(): void {
    //console.log(`LayoutType4Component=>ngOnDestroy`);
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    const obsSub = this.communicationService.pagechange$.subscribe(data => {
      //console.log(`LayoutType4Component=>${data}`);
    });
    this.sub.add(obsSub);
  }
  changePage(direct: VideoPageDirect) {
    console.log(`LayoutType4Component=>${direct}`);

  }
}
