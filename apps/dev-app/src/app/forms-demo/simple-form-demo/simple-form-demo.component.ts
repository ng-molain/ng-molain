import { Component, OnInit } from '@angular/core';
import {FormSchema} from "../../../../../../libs/forms/src/lib/form.schema";
import {NzFormLayoutType} from "ng-zorro-antd/form";

@Component({
  selector: 'ng-molain-simple-form-demo',
  templateUrl: './simple-form-demo.component.html',
  styleUrls: ['./simple-form-demo.component.scss']
})
export class SimpleFormDemoComponent implements OnInit {
  nzLayout: NzFormLayoutType = 'horizontal';

  formSchema: FormSchema = {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        name: '标题',
      },
      alias: {
        type: 'string',
        name: '别名',
      },
      age: {
        type: 'number',
        name: '年龄',
      },
      sex: {
        type: 'string',
        name: '性别',
        enum: ['male', 'female', 'other'],
      },
      pos: {
        type: 'string',
        name: '所属行业',
        enum: ['采矿', '食堂大师傅', '新型民工', '带刀侍卫', '一品大员', '刑部侍郎'],
      },
      multiSelect: {
        type: 'array',
        name: '所属行业（多选）',
        items: {type: 'string'},
        enum: ['采矿', '食堂大师傅', '新型民工', '带刀侍卫', '一品大员', '刑部侍郎'],
      },
      favorite: {
        type: 'array',
        name: '爱好',
        items: {
          type: "string"
        },
        enum: ['读书', '写字', '敲代码']
      },
      tags: {
        type: 'array',
        name: '关注的标签',
        items: {
          type: "string"
        },
        enum: ['采矿', '食堂大师傅', '新型民工', '带刀侍卫', '一品大员', '刑部侍郎'],
        ui: {
          controlType: 'tags'
        }
      }
    },
    rules: []
  };

  constructor() { }

  ngOnInit(): void {
  }

}
