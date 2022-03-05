import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef} from "../form-control-ref";
import {FormRef} from "../../form-ref";


@Component({
  selector: 'ml-ciphertext-control',
  templateUrl: './ciphertext-control.component.html',
  styleUrls: ['./ciphertext-control.component.scss']
})
export class CiphertextControlComponent implements OnInit {

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
