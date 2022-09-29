import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef, RangePickerProps, TreeSelectProps} from "@ng-molain/forms";
import {Field} from "@formily/core";

@Component({
  selector: 'ml-range-picker',
  templateUrl: './range-picker.component.html',
  styleUrls: ['./range-picker.component.scss']
})
export class RangePickerComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: RangePickerProps) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
