import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OtaSetCarService, OtaSetAction } from '../_service/ota-set-car.service';
import * as moment from 'moment';
import { ThemePalette } from '@angular/material/core';
import { MatDatepickerToggle } from '@angular/material/datepicker';
@Component({
  selector: 'ota-set-car',
  templateUrl: './ota-set-car.component.html',
  styleUrls: ['./ota-set-car.component.scss'],
  providers: [OtaSetCarService]
})

export class OtaSetCarComponent implements OnInit {
  @ViewChild('pickicon', { static: true }) el: Element;
  minDate: moment.Moment;
  maxDate: moment.Moment;
  color: ThemePalette = 'primary';
  //#region form相關
  formModel: FormGroup;
  formErrors = {
    "action": "",
    "date": "",
    "formError": "",
  };
  validationMessages = {
    "action": {
      //"required": "必須輸入",
    },
    "date": {
      "required": "必須輸入",
    }
  }

  actionlist: OtaSetAction[] = [];
  actiondata: any;
  date: string;
  //#endregion form相關
  isTimeVisible = false;
  constructor(
    private fb: FormBuilder,
    private otaSetCarService: OtaSetCarService) { }

  ngOnInit(): void {
    let theDay = new Date()   // 建立時間物件
    this.actionlist = this.otaSetCarService.getActionList();
    this.date = theDay.toISOString();// moment().format('YYYY/MM HH:MM:SS');
    //console.log(this.el);
    //console.dir(this.el);
    this.BuildForm();
  }
  BuildForm() {
    let theDay = new Date()   // 建立時間物件
    this.formModel = this.fb.group({
      "action": [
        this.actiondata = this.actionlist[4].action,
        []
      ],
      "date": [
        this.date = theDay.toISOString(),// moment().format('YYYY/MM HH:MM:SS'),
        [Validators.required]
      ]
    });

    this.formModel.valueChanges.subscribe(data => this.onValueChange(data));
    this.onValueChange(this.formModel.value);
  }
  onValueChange(data?: any) {
    if (!this.formModel) {
      return;
    }
    console.log(data);
    if (data.action == "time") {
      //console.log(data);
      this.isTimeVisible = true;
    } else {
      this.isTimeVisible = false;
    }
    //檢查是否有錯誤和顯示錯誤訊息
    const form = this.formModel;
    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }
  onSubmit() {

  }
}
