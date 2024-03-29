import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NzDatePickerComponent, SupportTimeOptions} from "ng-zorro-antd/date-picker";
import {get, isDate, isNumber} from "lodash-es";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ml-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent implements OnInit {

  @Input() nzShowTime: SupportTimeOptions | boolean = false;
  @Input() nzFormat: string = 'yyyy-MM-dd';
  @Input() nzPlaceHolder: string | string[] = [];

  @ViewChild("endPicker") endPicker!: NzDatePickerComponent;

  @Input() startCtrl = new FormControl();
  @Input() endCtrl = new FormControl();

  constructor() {
  }

  get startPlaceholder() {
    return Array.isArray(this.nzPlaceHolder)
      ? get(this.nzPlaceHolder, '[0]', '开始日期')
      : (this.nzPlaceHolder ?? '开始日期');
  }

  get endPlaceholder() {
    return Array.isArray(this.nzPlaceHolder)
      ? get(this.nzPlaceHolder, '[1]', '结束日期')
      : (this.nzPlaceHolder ?? '结束日期');
  }

  ngOnInit(): void {
  }

  startDisabledDate = (value: Date) => {
    if (!value || !this.endCtrl.value) {
      return false;
    }
    const endTime = isDate(this.endCtrl.value) ? this.endCtrl.value.getTime() : this.endCtrl.value;
    return value.getTime() > endTime;
  }

  endDisabledDate = (value: Date) => {
    if (!value || !this.startCtrl.value) {
      return false;
    }
    const startTime = isDate(this.startCtrl.value) ? this.startCtrl.value.getTime() : this.startCtrl.value;
    return value.getTime() < startTime;
  }

  onStartOpenChange(open: boolean) {
    if (!open) {
      this.endPicker.open();
    }

  }

  onEndOpenChange(open: boolean) {

  }
}
