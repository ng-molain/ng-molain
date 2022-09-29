import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef, RangePickerProps, TimePickerProps} from "@ng-molain/forms";
import {Field} from "@formily/core";

@Component({
  selector: 'ml-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.scss']
})
export class TimePickerComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: TimePickerProps) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
