import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NzFormLayoutType} from "ng-zorro-antd/form";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormSchema, FormUISchema} from "../form.schema";
import {FormRef} from "../form-ref";
import {get, map} from "lodash-es";

@Component({
  selector: 'ml-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  providers: [
    {provide: FormRef, useExisting: forwardRef(() => SimpleFormComponent)}
  ]
})
export class SimpleFormComponent extends FormRef implements OnInit {
  @Input() nzLayout: NzFormLayoutType = 'horizontal';
  @Output() formSubmit = new EventEmitter<any>();


  // formGroup: FormGroup;

  // @Input() uiSchema!: FormUISchema;
  // @Input() formSchema!: FormSchema;
  @Input()
  schema!: {uiSchema: FormUISchema, formSchema: FormSchema};

  constructor(protected override readonly fb: FormBuilder) {
    super(fb);
  }

  ngOnInit(): void {
    // const uiSchema: FormUISchema = {
    //   type: 'vertical-layout',
    //   elements: [
    //     {type: 'control', $ref: 'title'},
    //     {type: 'control', $ref: 'alias'}
    //   ]
    // };
    let uiSchema: FormUISchema;

    const formSchema: FormSchema = {
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

    uiSchema = {
      type: 'vertical-layout',
      elements: map(formSchema.properties, (v, k) => ({
        type: 'control',
        $ref: k,
        controlType: get(v, 'ui.controlType', undefined)
      }))
    }



    this.onInit(uiSchema, formSchema);

  }

  submitForm($event: any) {
    // validate
    // emit submit
    console.log("form value", this.rootControl.value);
  }
}
