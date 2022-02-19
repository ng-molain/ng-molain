import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef} from "../form-control-ref";
import {get} from "lodash-es";

@Component({
  selector: 'ml-checkbox-group-control',
  templateUrl: './checkbox-group-control.component.html',
  styleUrls: ['./checkbox-group-control.component.scss']
})
export class CheckboxGroupControlComponent implements OnInit {

  formControl: FormControl;
  attrs: any;
  fieldSchema: any;

  constructor(private controlRef: FormControlRef) {
    const {context} = controlRef;
    this.formControl = context.formControl as FormControl;
    this.attrs = context.attrs;
    this.fieldSchema = context.fieldSchema;
  }

  ngOnInit(): void {
  }

  get items() {
    // TODO dynamic get items ...
    return get(this.fieldSchema, 'enum');
  }
}
