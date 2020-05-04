import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SyncVideoComponent } from './sync-video.component';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';
import { MatFrameByFrameControlComponent } from './ui/mat-frame-by-frame-control/mat-frame-by-frame-control.component';
import { MatFullscreenButtonComponent } from './ui/mat-fullscreen-button/mat-fullscreen-button.component';
import { MatPhotoButtonComponent } from './ui/mat-photo-button/mat-photo-button.component';




@NgModule({
  declarations: [
    MatPlayButtonComponent,
    SyncVideoComponent,
    MatFrameByFrameControlComponent,
    MatFullscreenButtonComponent,
    MatPhotoButtonComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    SyncVideoComponent,
  ],
})
export class SyncVideoModule { }
