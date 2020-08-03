import { Injectable } from '@angular/core';
export interface OtaSetAction {
  action: string;
  actionName: string;
};

@Injectable({
  providedIn: 'root'
})


// class OtaSetActions: {
//   action: string,
//   actionName: string,
// }[] = [
//   {
//     action:"ask_user",
//     actionName:"DVR詢問使用者是否開始更新"
//   }
// ];
export class OtaSetCarService {
  OtaSetActions: OtaSetAction[] = [];
  constructor() {
    this.setInitdata();
    console.log(this.OtaSetActions);
  }
  private setInitdata() {
    this.OtaSetActions.push(
      { action: "ask_user", actionName: "DVR詢問使用者是否開始更新" },
      { action: "acc_off", actionName: "DVR ACC OFF之後開始更新" },
      { action: "acc_on", actionName: "DVR ACC ON之後開始更新" },
      { action: "right_now", actionName: "馬上更新, 不詢問使用者" },
      { action: "time", actionName: "設定更新時間" }
    );
  }
  getActionList() {
    return this.OtaSetActions;
  }
}
