import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-ng-test-canvas-video',
  templateUrl: './ng-test-canvas-video.component.html',
  styleUrls: ['./ng-test-canvas-video.component.scss']
})
export class NgTestCanvasVideoComponent implements OnInit, AfterViewInit {
  videosrc = "http://localhost:4200/assets/test_sound.mp4";
  @ViewChild('myVideo', { static: true }) myVideo: ElementRef<HTMLVideoElement>;
  // its important myCanvas matches the variable name in the template
  @ViewChild('myCanvas', { static: true }) myCanvas: ElementRef<HTMLCanvasElement>;
  public context: CanvasRenderingContext2D;


  constructor(private ngZone: NgZone) { }


  ngOnInit(): void {

    console.log(this.myVideo);
    console.log(this.myCanvas);
    this.context = this.myCanvas.nativeElement.getContext('2d');
    console.log(this.context);
    // set canvas size = video size when known
    fromEvent(this.myVideo.nativeElement, 'loadedmetadata').subscribe(data => {
      //console.dir(data);
      //console.log(`loadedmetadata v width=${this.myVideo.nativeElement.videoWidth}`);
      this.myCanvas.nativeElement.width = this.myVideo.nativeElement.videoWidth;
      this.myCanvas.nativeElement.height = this.myVideo.nativeElement.videoHeight;
      console.log(`loadedmetadata`);
    });
    fromEvent(this.myVideo.nativeElement, 'loadeddata').subscribe(data => {
      console.log(`loadeddata`);
      // setTimeout(() => {
      //   this.drawvideo()
      // }, 200);
    });
    fromEvent(this.myVideo.nativeElement, 'canplay').subscribe(data => {
      console.log(`canplay`);
      setTimeout(() => {
        this.drawvideo();
      }, 200);
    });
    // video.addEventListener('loadedmetadata', function() {
    //   canvas.width = video.videoWidth;
    //   canvas.height = video.videoHeight;
    // });

  }
  ngAfterViewInit(): void {
    fromEvent(this.myVideo.nativeElement, 'play').subscribe(data => {
      console.log(`play->${data}`);
      //this.context.drawImage(this.myVideo.nativeElement, 0, 0);
    });
    this.ngZone.runOutsideAngular(() => this.animate());
  }
  animate() {
    // Do stuff
    //console.log(`animate`);
    //console.log(this.myVideo.nativeElement.paused);
    if (this.myVideo.nativeElement.paused == false) {
      this.context.drawImage(this.myVideo.nativeElement, 0, 0);
      this.drawvideo();
    }
    requestAnimationFrame(this.animate.bind(this));
  }
  private drawvideo() {
    this.context.drawImage(this.myVideo.nativeElement, 0, 0);
  }
}
