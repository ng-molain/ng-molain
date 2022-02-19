import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef} from "../form-control-ref";

@Component({
  selector: 'ml-input-number-control',
  templateUrl: './input-number-control.component.html',
  styleUrls: ['./input-number-control.component.scss']
})
export class InputNumberControlComponent implements OnInit {

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
