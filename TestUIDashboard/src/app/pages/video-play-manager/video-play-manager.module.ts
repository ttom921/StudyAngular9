import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayManagerRoutingModule } from './video-play-manager-routing.module';
import { VideoPlayManagerComponent } from './video-play-manager.component';
import { SharedAngularMaterialModule } from 'src/app/share/shared-angular-material/shared-angular-material.module';
import { MatVideoModule } from 'src/app/_common/video/video.module';


@NgModule({
  declarations: [VideoPlayManagerComponent],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    MatVideoModule,
    VideoPlayManagerRoutingModule
  ]
})
export class VideoPlayManagerModule { }
