import {Component, Inject, OnInit} from '@angular/core';
import {DatepickerProps} from "../types";
import {Field} from "@formily/core";
import {COMPONENT_PROPS, FieldRef} from "../../types";

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
