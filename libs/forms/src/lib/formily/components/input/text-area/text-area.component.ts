import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef} from "@ng-molain/forms";
import {Field} from "@formily/core";
import {TextAreaProps} from "../../types";

@Component({
  selector: 'ml-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: TextAreaProps) { }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
