import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef, InputNumberProps, SelectProps} from "@ng-molain/forms";
import {Field} from "@formily/core";
import {isNil} from "lodash-es";

@Component({
  selector: 'ml-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: InputNumberProps) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
