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
import { MatNativeDateModule } from '@angular/material/core';
import { NgTestMaterialExpansionPanelComponent } from './pages/ng-test-material-expansion-panel/ng-test-material-expansion-panel.component';
import { NgTestLazyloadComponent } from './pages/ng-test-lazyload/ng-test-lazyload.component';
import { IntersectionObserverDirective } from './_common/_directive/intersection-observer.directive';
@NgModule({
  declarations: [
    AppComponent,
    NgTestMaterialExpansionPanelComponent,
    NgTestLazyloadComponent,
    IntersectionObserverDirective,
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
    }), // ToastrModule added
    //#endregion Toastr
    //日曆時間元件
    MatNativeDateModule,
    //日曆時間元件

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
