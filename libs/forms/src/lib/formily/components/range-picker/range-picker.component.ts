import {Component, Inject, OnInit} from '@angular/core';
import {Field} from "@formily/core";
import {COMPONENT_PROPS, FieldRef} from "../../types";
import {RangePickerProps} from "../types";

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
