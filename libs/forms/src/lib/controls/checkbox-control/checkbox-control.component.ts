import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef} from "../form-control-ref";

@Component({
  selector: 'ml-checkbox-control',
  templateUrl: './checkbox-control.component.html',
  styleUrls: ['./checkbox-control.component.scss']
})
export class CheckboxControlComponent implements OnInit {

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

}
