import { Component, OnInit } from '@angular/core';
import { ToastrService, GlobalConfig } from 'ngx-toastr';
import { cloneDeep, random } from 'lodash';
interface Quote {
  title?: string;
  message?: string;
}
const quotes: Quote[] = [
  {
    title: 'Title',
    message: 'Message'
  },
  {
    title: '😃',
    message: 'Supoorts Emoji',
  },
  {
    title: '移動',
    //message: "<a href='/dashboard/ngtestmap' > 地圖 </a>",
    message: `<a href='/dashboard/ngtestmap' > 地圖 </a>`,
  }
];
const types = ['success', 'error', 'info', 'warning'];
@Component({
  selector: 'app-ng-test-toastr',
  templateUrl: './ng-test-toastr.component.html',
  styleUrls: ['./ng-test-toastr.component.scss']
})
export class NgTestToastrComponent implements OnInit {
  options: GlobalConfig;
  title = '';
  message = '';
  type = types[0];
  private lastInserted: number[] = [];
  constructor(private toastr: ToastrService) {
    this.options = this.toastr.toastrConfig;
  }

  ngOnInit(): void {
  }
  openToast() {
    const { message, title } = this.getMessage();
    const opt = cloneDeep(this.options);
    const inserted = this.toastr.show(
      message,
      title,
      opt,
      this.options.iconClasses[this.type],
    );
    if (inserted) {
      this.lastInserted.push(inserted.toastId);
    }
    return inserted;
  }
  clearToasts() {
    this.toastr.clear();
  }
  clearLastToast() {
    this.toastr.clear(this.lastInserted.pop());
  }
  //測試程式
  getMessage() {
    let m: string | undefined = this.message;
    let t: string | undefined = this.title;
    if (!this.title.length && !this.message.length) {
      const randomMessage = quotes[random(0, quotes.length - 1)];
      m = randomMessage.message;
      t = randomMessage.title;
    }
    return {
      message: m,
      title: t,
    };
  }

}
