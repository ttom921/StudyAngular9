import { Component, OnInit, Input } from '@angular/core';
import { MatVideoComponent } from 'src/app/_common/video/video.component';
import { SyncVideoMgrService } from '../../service/sync-video-mgr.service';
/**
 * 拍照
 *
 * @export
 * @class MatPhotoButtonComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'mat-photo-button',
  templateUrl: './mat-photo-button.component.html',
  styleUrls: ['./mat-photo-button.component.scss']
})

export class MatPhotoButtonComponent implements OnInit {

  mainvideo: MatVideoComponent;
  @Input() allphoto = false;
  constructor(
    private syncVideoMgrService: SyncVideoMgrService,
  ) { }

  ngOnInit(): void {
    this.mainvideo = this.syncVideoMgrService.mainvideo;
    console.log(`mat-photo-button->mainvideo=${this.mainvideo}`);
  }
  takePhoto() {
    //console.log(`mat-photo-button->takePhoto()`);
    if (this.allphoto) {
      this.syncVideoMgrService.syncvideolst.forEach((item, idx) => {
        this.captureImage(item.getVideoTag(), `capture_${idx}`);
      })
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
