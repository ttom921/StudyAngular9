import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayManager2RoutingModule } from './video-play-manager2-routing.module';
import { VideoPlayManager2Component } from './video-play-manager2.component';
import { LayoutType1Component } from './layoutpages/layout-type1/layout-type1.component';
import { SharedAngularMaterialModule } from 'src/app/share/shared-angular-material/shared-angular-material.module';
import { MatVideoModule } from 'src/app/_common/video/video.module';
import { LayoutType4Component } from './layoutpages/layout-type4/layout-type4.component';
import { LayoutType8Component } from './layoutpages/layout-type8/layout-type8.component';
import { SyncMgrComponent } from './sync-mgr/sync-mgr.component';
import { MatLayoutButtonComponent } from './sync-mgr/ui/mat-layout-button/mat-layout-button.component';
import { MatPlayButtonComponent } from './sync-mgr/ui/mat-play-button/mat-play-button.component';
import { MatFrameByFrameControlComponent } from './sync-mgr/ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component';


@NgModule({
  declarations: [VideoPlayManager2Component,
    LayoutType1Component,
    LayoutType4Component,
    LayoutType8Component,
    SyncMgrComponent,
    MatLayoutButtonComponent,
    MatPlayButtonComponent,
    MatFrameByFrameControlComponent],
  imports: [
    CommonModule,
    SharedAngularMaterialModule,
    MatVideoModule,
    VideoPlayManager2RoutingModule
  ],
})
export class VideoPlayManager2Module { }
