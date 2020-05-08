import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewVideoDialogComponent } from './pages/iframe-even-list/dialog/view-video-dialog/view-video-dialog.component';
import { SharedAngularMaterialModule } from './share/shared-angular-material/shared-angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    //ViewVideoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents: [ViewVideoDialogComponent]

})
export class AppModule { }
