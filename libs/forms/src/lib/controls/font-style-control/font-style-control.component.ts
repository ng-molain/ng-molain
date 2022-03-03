import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef, FormRef} from "@ng-molain/forms";

@Component({
  selector: 'ml-font-style-control',
  templateUrl: './font-style-control.component.html',
  styleUrls: ['./font-style-control.component.scss']
})
export class FontStyleControlComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
