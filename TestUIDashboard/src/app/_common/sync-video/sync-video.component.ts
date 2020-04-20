import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Input,
  AfterViewInit
}

  from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'sync-video',
  templateUrl: './sync-video.component.html',
  styleUrls: ['./sync-video.component.scss']
}

) export class SyncVideoComponent implements OnInit,
  AfterViewInit {

  @ViewChild('video', { static: true }) private video: ElementRef;
  @Input() vname: string;
  @Input() src: string;
  @Input() autoplay: boolean = false;
  @Input() preload: boolean = false;
  @Input() loop: boolean = false;
  @Input() controls: boolean = false;
  @Input() poster: string = null;
  private _muted: boolean = false;

  @Input() get muted() {
    return this._muted;
  }

  set muted(v: boolean) {
    this._muted = v;
    //console.log(this.video);
    if (this.video != null) {
      //console.log(this.video.nativeElement);
      this.video.nativeElement.muted = this._muted;
    }
  }


  constructor() { }


  ngOnInit(): void {
    //console.log(this.video);
    //console.log(this.vname);
    let vname = this.vname;
    // this.getVideoTag().addEventListener('canplay', function () {
    //   console.log(`${vname}=>canplay`);
    // });
    // this.getVideoTag().addEventListener('waiting', function () {
    //   console.log(`${vname}=>waiting`);
    // });
  }

  ngAfterViewInit(): void { }

  getVideoTag(): HTMLVideoElement | null {
    return this.video && this.video.nativeElement ? this.video.nativeElement as HTMLVideoElement : null;
  }
  play() {
    this.video.nativeElement.play();
  }

  canplay(): Observable<any> {
    return fromEvent(this.getVideoTag(), 'canplay');
  }
  waiting(): Observable<any> {
    return fromEvent(this.getVideoTag(), 'waiting');
  }
}
