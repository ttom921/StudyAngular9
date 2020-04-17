import { Component } from '@angular/core';
import { LanguageService } from './_services/language/language.service';
import { SSEService } from './_services/SSE/sse.service';
import { GlobalConfig, ToastrService } from 'ngx-toastr';
import { cloneDeep } from 'lodash';

const types = ['success', 'error', 'info', 'warning'];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestUIDashboard';
  //#region toastr相關
  options: GlobalConfig;
  //#endregion toastr相關
  constructor(
    private languageService: LanguageService,
    private sseService: SSEService,
    private toastr: ToastrService
  ) {
    //#region toastr相關
    this.options = this.toastr.toastrConfig;
    //#endregion toastr相關

    this.languageService.setInitState();
    this.languageService.setCurrentLanguage();
    //有關SSE
    //this.initSSE();
  }
  //#region SSE相關
  initSSE() {
    this.sseSetupMessage();
    this.sseSetupDVRType();
  }
  private sseSetupMessage() {
    const source = this.sseService.getEventSource("channel1");
    source.addEventListener('social', (event: MessageEvent) => {
      console.log(event.data);
      var resdata = JSON.parse(event.data);
      let data = {
        title: 'Message',
        message: resdata.message
      }
      //this.lidatas.push(event.data);
      //var data = JSON.parse(event.data);
      this.openToast(data);
    });
    source.addEventListener('error', (event: MessageEvent) => {
      console.log('reconnected service!')
    }, false);
  }
  private sseSetupDVRType() {
    const source = this.sseService.getEventSource("channel1");
    source.addEventListener('dvr', (event: MessageEvent) => {
      console.log(event.data);
      var resdata = JSON.parse(event.data);
      let data = {
        title: 'DVR',
        message: resdata.message
      }
      //this.lidatas.push(event.data);
      //var data = JSON.parse(event.data);
      this.openToast(data);
    });
    source.addEventListener('error', (event: MessageEvent) => {
      console.log('reconnected service!')
    }, false);
  }
  //#endregion SSE相關

  //#region toastr相關
  openToast(data: any) {
    let type = types[0];
    const { message, title } = data;
    const opt = cloneDeep(this.options);
    const inserted = this.toastr.show(
      message,
      title,
      opt,
      this.options.iconClasses[type],
    );
  }
  //#endregion toastr相關
}
