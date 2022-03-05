import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractControlValueAccessor} from "../abstract-control-value-accessor";

export const DURATION_OPTIONS = [
  {label: '只能', value: 'unlimited'},
  {label: '每小时', value: {number: 1, unit: 'hour'}},  // 1小时内
  {label: '每天', value: {number: 1, unit: 'day'}},    // 24 小时内容
  {label: '每自然周', value: 'week'},
  {label: '每7天内', value: {number: 7, unit: 'day'}},
  {label: '每自然月', value: 'month'},
  {label: '每30天内', value: {number: 30, unit: 'day'}},
  {label: '每季度', value: 'quarter'},
  {label: '每90天内', value: {number: 90, unit: 'day'}},
  {label: '每自然年', value: 'year'},
  {label: '每365天内', value: {number: 365, unit: 'day'}},
];

@Component({
  selector: 'ml-limit-in-duration',
  templateUrl: './limit-in-duration.component.html',
  styleUrls: ['./limit-in-duration.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => LimitInDurationComponent), multi: true
  }]
})
export class LimitInDurationComponent extends AbstractControlValueAccessor implements OnInit, ControlValueAccessor {

  @Input() mlSize: NzSizeLDSType = "default";

  durationOptions = DURATION_OPTIONS;
  @Input() actionName?: string;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    super();

    this.formGroup = fb.group({
      duration: [],
      limit: [],
    })
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      this.onChange(value);
    })
  }

  override setDisabledState(isDisabled: boolean): void {
    super.setDisabledState(isDisabled);
    isDisabled ? this.formGroup.disable() : this.formGroup.enable();
  }

  override writeValue(obj: any): void {
    super.writeValue(obj);
    this.formGroup.reset(obj || {}, {emitEvent: false});
  }

}
