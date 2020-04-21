import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SyncVideoComponent } from './sync-video.component';
import { MatPlayButtonComponent } from './ui/mat-play-button/mat-play-button.component';




@NgModule({
  declarations: [
    MatPlayButtonComponent,
    SyncVideoComponent,

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
