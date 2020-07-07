import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ota-set-force-car',
  templateUrl: './ota-set-force-car.component.html',
  styleUrls: ['./ota-set-force-car.component.scss']
})
export class OtaSetForceCarComponent implements OnInit {

  firmwatelist = [];

  @Input() formModel: FormGroup;
  formErrors = {
    "firmwarever": "",
    "formError": "",
  };
  validationMessages = {
    "firmwarever": {
      "required": "必須輸入",
    },
  }
  firmwaredata: string;
  constructor(
    private fb: FormBuilder,
  ) {
    this.firmwatelist.push("aaaa", "bbbb", "ccccc");
  }

  ngOnInit(): void {

    this.BuildForm();
  }
  BuildForm() {
    this.formModel = this.fb.group({
      "firmwarever": [
        this.firmwaredata = this.firmwatelist[0],
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
}
