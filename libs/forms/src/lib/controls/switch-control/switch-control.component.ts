import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef} from "../form-control-ref";

@Component({
  selector: 'ml-switch-control',
  templateUrl: './switch-control.component.html',
  styleUrls: ['./switch-control.component.scss']
})
export class SwitchControlComponent implements OnInit {

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
