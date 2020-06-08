import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, Input, OnDestroy } from '@angular/core';
import videojs from 'video.js';
import { CaptionParser, Transmuxer } from 'mux.js/lib/mp4';
@Component({
  selector: 'app-ng-test-videojs-player',
  templateUrl: './ng-test-videojs-player.component.html',
  styleUrls: ['./ng-test-videojs-player.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgTestVideojsPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target: ElementRef;
  // see options: https://github.com/videojs/video.js/blob/mastertutorial-options.html
  @Input() options: {
    fluid: boolean,
    aspectRatio: string,
    autoplay: boolean,
    sources: {
      src: string,
      type: string,
    }[],
  };
  player: videojs.Player;
  // captionParser = new CaptionParser();
  constructor(
    private elementRef: ElementRef,
  ) { }


  ngOnInit(): void {


    // instantiate Video.js
    this.player = videojs(this.target.nativeElement, this.options, function onPlayerReady() {
      console.log('onPlayerReady', this);


    });
    console.dir(this.player);
    //
    // let mediaSource = new MediaSource();
    // let transmuxer = new Transmuxer();
    // this.player.src = URL.createObjectURL(mediaSource);
    // // mediaSource.addEventListener("sourceopen", appendFirstSegment);
    // transmuxer.on('data', function (segment) {
    //   console.log(segment);
    // })

    // initalize the CaptionParser to ensure that it is ready for data
    // if (!this.captionParser.isInitialized()) {
    //   console.log(`captionParser init`);
    //   this.captionParser.init();

    //   const data = new Uint8Array();
    //   // Parsed captions are returned
    //   const parsed = this.captionParser.parse(
    //     data,
    //     //videoTrackIds,
    //     //timescales
    //   );
    //   console.log(data);

    //}


  }
  ngOnDestroy(): void {
    // destroy player
    if (this.player) {
      this.player.dispose();
    }
  }

}
