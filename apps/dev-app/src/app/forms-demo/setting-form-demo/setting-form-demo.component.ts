import { Component, OnInit } from '@angular/core';
import {FormSchema} from "../../../../../../libs/forms/src/lib/form.schema";

@Component({
  selector: 'ng-molain-setting-form-demo',
  templateUrl: './setting-form-demo.component.html',
  styleUrls: ['./setting-form-demo.component.scss']
})
export class SettingFormDemoComponent implements OnInit {

  size: 'small' | 'default' = 'small';

  schema: any;

  constructor() { }

  ngOnInit(): void {
    const formSchema: FormSchema = {
      type: 'object',
      properties: {
        qType: {
          type: 'string',
          name: '下拉选择',
          enum: ['选项一', '选项二'],
          ui: {
            controlType: 'select'
          }
        },
        qIsSwitch: {
          type: 'boolean',
          name: '是否开关',
          ui: {
            controlType: 'switch'
          }
        },
        qObject: {
          type: 'object',
          name: '对象配置项',
          properties: {
            switch1: {
              type: 'boolean',
              name: '是否开关',
              ui: {
                controlType: 'switch'
              }
            }
          },
          ui: {
            enableSwitch: true
          }
        }
      },
      rules: []
    };
    this.schema = {formSchema};
  }

}
