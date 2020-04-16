import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedAngularMaterialModule } from './share/shared-angular-material/shared-angular-material.module';
//#region  多國語言
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
//AoT requires an exported function for factories
//建立TranslateHttplLoader作為語系檔的讀取器
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
//#endregion 多國語言
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedAngularMaterialModule,
    //#region  多國語言
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    //#endregion 多國語言
    //#region Toastr
    //初始化的預設值的設定
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      enableHtml: true,
      closeButton: true,
      //disableTimeOut: true
    }) // ToastrModule added
    //#endregion Toastr
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
