import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {get} from "lodash-es";
import {FormControlRef} from "../form-control-ref";

@Component({
  selector: 'ml-radio-group-control',
  templateUrl: './radio-group-control.component.html',
  styleUrls: ['./radio-group-control.component.scss']
})
export class RadioGroupControlComponent implements OnInit {

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
    return get(this.fieldSchema, 'enum');
  }

}
