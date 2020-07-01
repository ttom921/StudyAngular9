import { Component, OnInit } from '@angular/core';
import { ThemePalette, } from '@angular/material/core';
import * as moment from 'moment';
import { FormGroup, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-ng-test-date-time-picker',
  templateUrl: './ng-test-date-time-picker.component.html',
  styleUrls: ['./ng-test-date-time-picker.component.scss'],
})
export class NgTestDateTimePickerComponent implements OnInit {
  date: moment.Moment;
  disabled = false;
  showSpinners = true;
  showSeconds = false;
  touchUi = false;
  enableMeridian = false;//Whether to display 12H or 24H mode
  minDate: moment.Moment;
  maxDate: moment.Moment;
  stepHour = 1;
  stepMinute = 1;
  stepSecond = 1;
  color: ThemePalette = 'primary';
  hideTime = true;
  disableMinute = false;
  formGroup = new FormGroup({
    date: new FormControl(moment().format('YYYY/MM'), [Validators.required]),
    date2: new FormControl(null, [Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
    this.date = moment();
    this.formGroup.valueChanges.subscribe(foms => {
      console.log(foms);
    });
  }

}
