import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef} from "../../types";
import {Field} from "@formily/core";
import {get, isNil, mapValues, pick, some} from "lodash-es";
import {InputProps} from "../types";

@Component({
  selector: 'ml-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: InputProps) { }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  get useInputGroup(): boolean {
    return some(mapValues(pick(this.props, ['addonBefore', 'addonAfter', 'prefix', 'suffix'])), it => !isNil(it));
  }


  ngOnInit(): void {
  }

}
