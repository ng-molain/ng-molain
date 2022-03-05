import { Component, OnInit } from '@angular/core';
import {FormSchema, FormUISchema, UISchema} from "@ng-molain/forms";
import {formSchema, uiSchema} from "./setting-form.schema";


@Component({
  selector: 'ng-molain-setting-form-demo',
  templateUrl: './setting-form-demo.component.html',
  styleUrls: ['./setting-form-demo.component.scss']
})
export class SettingFormDemoComponent implements OnInit {

  size: 'small' | 'default' = 'default';

  schema: any;

  formSchema: any;
  uiSchema: any;

  value = {
    qIsSwitch: true
  };

  constructor() { }

  ngOnInit(): void {

    this.formSchema = formSchema;
    this.uiSchema = uiSchema;

    this.schema = {formSchema, uiSchema};
  }


}
