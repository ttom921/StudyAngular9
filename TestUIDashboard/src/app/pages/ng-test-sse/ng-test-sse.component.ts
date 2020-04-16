import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SSEService } from 'src/app/_services/SSE/sse.service';

@Component({
  selector: 'app-ng-test-sse',
  templateUrl: './ng-test-sse.component.html',
  styleUrls: ['./ng-test-sse.component.scss']
})
export class NgTestSSEComponent implements OnInit {

  //#region form 相關
  formModel: FormGroup
  //hide = true;
  dataInfo: any = {};
  formErrors = {
    "channel": "",
    "message": "",
    "formError": ""
  };
  vaildationMessages = {
    "channel": {
      "required": "必須輸入",
      "minlength": "至少要2位"
    },
    "message": {
      "required": "必須須輸入",
      "minlength": "至少要2位"
    }
  }
  //#endregion

  constructor(
    private fb: FormBuilder,
    private sseService: SSEService,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.formModel = this.fb.group({
      "channel": [
        this.dataInfo.channel,
        [
          Validators.required,
          Validators.minLength(2),
        ]
      ],
      "message": [
        this.dataInfo.message,
        [
          Validators.required,
          Validators.minLength(2),
        ]
      ]
    });
    this.formModel.valueChanges.subscribe(data => {
      this.onValueChange(data);
    });
  }
  onValueChange(data?: any) {
    if (!this.formModel) {
      return;
    }
    //檢查是否有錯誤和顯示錯誤訊息
    const form = this.formModel;
    for (const field in this.formErrors) {
      this.formErrors[field] = "";
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.vaildationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + " ";
        }
      }
    }
  }
  onSubmit(e) {
    if (this.formModel.valid) {
      //console.log(`send to server ${this.formModel.value}`);
      this.dataInfo = this.formModel.value;
      console.log(`send to server ${this.dataInfo}`);
      this.sseService.Post(this.dataInfo).subscribe(
        res => {
          console.log(res);
        },
        error => {
          console.log(error);
        }
      );

    }
  }
}
