import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoPlayManager2Component } from './video-play-manager2.component';

const routes: Routes = [{ path: '', component: VideoPlayManager2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayManager2RoutingModule { }
