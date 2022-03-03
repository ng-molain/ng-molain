import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef, FormRef} from "@ng-molain/forms";

@Component({
  selector: 'ml-color-picker-control',
  templateUrl: './color-picker-control.component.html',
  styleUrls: ['./color-picker-control.component.scss']
})
export class ColorPickerControlComponent implements OnInit {

  formControl: FormControl;
  attrs: any;
  fieldSchema: any;

  constructor(private controlRef: FormControlRef,
              public readonly formRef: FormRef) {
    const {context} = controlRef;
    this.formControl = context.formControl as FormControl;
    this.attrs = context.attrs;
    this.fieldSchema = context.fieldSchema;
  }

  ngOnInit() {
  }
}
