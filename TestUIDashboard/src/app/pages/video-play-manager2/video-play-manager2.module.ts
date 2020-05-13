import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayManager2RoutingModule } from './video-play-manager2-routing.module';
import { VideoPlayManager2Component } from './video-play-manager2.component';
import { LayoutType1Component } from './layoutpages/layout-type1/layout-type1.component';
import { LayoutType2Component } from './layoutpages/layout-type2/layout-type2.component';
import { LayoutType3Component } from './layoutpages/layout-type3/layout-type3.component';
import { SharedAngularMaterialModule } from 'src/app/share/shared-angular-material/shared-angular-material.module';
import { MatVideoModule } from 'src/app/_common/video/video.module';


@NgModule({
  declarations: [VideoPlayManager2Component, LayoutType1Component, LayoutType2Component, LayoutType3Component],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    MatVideoModule,
    VideoPlayManager2RoutingModule
  ],
})
export class VideoPlayManager2Module { }
