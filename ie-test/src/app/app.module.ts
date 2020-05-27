import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatVideoModule } from './_common/video/video.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgTestMultiMatVideoComponent } from './ng-test-multi-mat-video/ng-test-multi-mat-video.component';
import { NgTestMultiIEVideosComponent } from './ng-test-multi-ievideos/ng-test-multi-ievideos.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTestMultiMatVideoComponent,
    NgTestMultiIEVideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatVideoModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
