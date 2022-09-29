import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef} from "../../types";
import {Field} from "@formily/core";

@Component({
  selector: 'ml-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: any) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
