import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedAngularMaterialModule } from './share/shared-angular-material/shared-angular-material.module';
import { NgTestVideojsPlayerComponent } from './ng-test-videojs-player/ng-test-videojs-player.component';
import { NgTestCanvasVideoComponent } from './ng-test-canvas-video/ng-test-canvas-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTestVideojsPlayerComponent,
    NgTestCanvasVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
