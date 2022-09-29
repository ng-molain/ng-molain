import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, DatepickerProps, FieldRef, TreeSelectProps} from "@ng-molain/forms";
import {Field} from "@formily/core";

@Component({
  selector: 'ml-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: DatepickerProps) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
