import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef} from "../form-control-ref";

@Component({
  selector: 'ml-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss']
})
export class InputControlComponent implements OnInit {

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
    // console.log(this.controlRef.container)
  }

}
