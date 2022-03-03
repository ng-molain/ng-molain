import { Component, OnInit } from '@angular/core';
import {FormSchema} from "@ng-molain/forms";


@Component({
  selector: 'ng-molain-setting-form-demo',
  templateUrl: './setting-form-demo.component.html',
  styleUrls: ['./setting-form-demo.component.scss']
})
export class SettingFormDemoComponent implements OnInit {

  size: 'small' | 'default' = 'small';

  schema: any;

  value = {
    qIsSwitch: true
  };

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
            },
            color1: {
              type: 'string',
              name: '颜色选择',
              ui: {
                controlType: 'colorPicker'
              }
            },
            file1: {
              type: 'string',
              name: '颜色文件',
              ui: {
                controlType: 'upload'
              }
            },
            image1: {
              type: 'string',
              name: '颜色图片',
              ui: {
                controlType: 'image'
              }
            },
            fontStyle1: {
              type: 'string', // 实际是一个object
              name: '颜色图片',
              ui: {
                controlType: 'fontStyle'
              },
              // properties: []
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
