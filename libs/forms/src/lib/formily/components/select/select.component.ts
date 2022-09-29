import {Component, Inject, OnInit} from '@angular/core';
import {SelectProps} from "../types";
import {Field} from "@formily/core";
import {COMPONENT_PROPS, FieldRef} from "../../types";

@Component({
  selector: 'ml-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: SelectProps) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
