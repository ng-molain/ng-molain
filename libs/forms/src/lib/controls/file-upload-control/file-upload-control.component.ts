import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormControlRef} from "../../controls/form-control-ref";
import {FormRef} from "../../form-ref";
import {get} from "lodash-es";

@Component({
  selector: 'ml-file-upload-control',
  templateUrl: './file-upload-control.component.html',
  styleUrls: ['./file-upload-control.component.scss']
})
export class FileUploadControlComponent implements OnInit {

  formControl: FormControl;
  attrs: any;
  fieldSchema: any;

  action = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

  constructor(private controlRef: FormControlRef,
              public readonly formRef: FormRef) {
    const {context} = controlRef;
    this.formControl = context.formControl as FormControl;
    this.attrs = context.attrs;
    this.fieldSchema = context.fieldSchema;
    this.action = get(this.attrs, 'action', this.action);
  }


  ngOnInit(): void {
  }

}
