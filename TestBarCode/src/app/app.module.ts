import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestBarCodeComponent } from './test-bar-code/test-bar-code.component';
import { TestAppBarcodeComponent } from './test-app-barcode/test-app-barcode.component';
import { ZxingScannerModule } from './_common/zxing-scanner/zxing-scanner.module';

@NgModule({
  declarations: [
    AppComponent,
    TestBarCodeComponent,
    TestAppBarcodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ZxingScannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
