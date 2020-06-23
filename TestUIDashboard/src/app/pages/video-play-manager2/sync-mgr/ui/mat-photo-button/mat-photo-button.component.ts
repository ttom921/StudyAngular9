import { Component, OnInit, Input } from '@angular/core';
import { SyncMgrService } from '../../services/sync-mgr.service';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import * as _ from 'lodash';
import { VideoLayoutType } from '../../../video-play-mgrs.enum';

@Component({
  selector: 'mat-photo-button',
  templateUrl: './mat-photo-button.component.html',
  styleUrls: ['./mat-photo-button.component.scss']
})
export class MatPhotoButtonComponent implements OnInit {
  private mainvideo: MatVideoComponent;
  @Input() allphoto = false;
  constructor(
    private syncMgrService: SyncMgrService
  ) { }

  ngOnInit(): void {
  }
  takePhoto() {
    console.log(`mat-photo-button->takePhoto()`);
    this.mainvideo = this.syncMgrService.getMainVideo();
    if (this.allphoto) {
      let layout = this.syncMgrService.getCurrentLayout();
      //console.log(`layouttype=${layout}`);
      let count = this.syncMgrService.syncvideolst.length;
      //console.log(`mat-photo-button->takePhoto()->all count=${count}`);
      this.syncMgrService.syncvideolst.forEach((item, idx) => {
        //檢查是否是type8
        if (layout.toString() == VideoLayoutType.Type8.toString()) {
          if (!_.isEqual(item, this.mainvideo)) {
            //console.log(`type8 captureImage  id=${idx}`);
            this.captureImage(item.getVideoTag(), `capture_${idx}`);
          }
        } else {
          //console.log(`captureImage  id=${idx}`);
          this.captureImage(item.getVideoTag(), `capture_${idx}`);
        }

      });
      // this.syncVideoMgrService.syncvideolst.forEach((item, idx) => {
      //   this.captureImage(item.getVideoTag(), `capture_${idx}`);
      // })
      //console.log(`mat-photo-button->takePhoto()->all`);
    } else {
      this.captureImage(this.mainvideo.getVideoTag(), "main");
    }
  }
  //截取canvas的圖片
  private captureImage(video: HTMLVideoElement, filename: string = "capture") {
    //console.log(`video.videoWidth=${video.videoWidth},video.videoHeight=${video.videoHeight}`);
    var canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    //canvas.toDataURL('image/jpg');
    canvas.toBlob(function (blob) {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.setAttribute("download", `${filename}.jpeg`);
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }, 'image/jpeg', 0.95); // JPEG at 95% quality
  }
}
