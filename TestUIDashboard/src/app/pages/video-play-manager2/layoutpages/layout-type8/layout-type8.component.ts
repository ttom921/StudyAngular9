import { Component, OnInit, OnDestroy } from '@angular/core';
import { VideoPageDirect } from '../../video-play-mgrs.enum';
import { CommunicationService } from '../../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout-type8',
  templateUrl: './layout-type8.component.html',
  styleUrls: ['./layout-type8.component.scss']
})
export class LayoutType8Component implements OnInit, OnDestroy {
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
  }
  changePage(direct: VideoPageDirect) {
    console.log(`LayoutType8Component=>${direct}`)
  }
}
