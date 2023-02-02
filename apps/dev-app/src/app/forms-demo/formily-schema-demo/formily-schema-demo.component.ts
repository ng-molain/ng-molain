import { Component, OnInit } from '@angular/core';
import {createForm, Form} from "@formily/core";
import {FormItemComponent2, InputComponent, UploadComponent} from "@ng-molain/forms";

@Component({
  selector: 'ng-molain-formily-schema-demo',
  templateUrl: './formily-schema-demo.component.html',
  styleUrls: ['./formily-schema-demo.component.scss']
})
export class FormilySchemaDemoComponent implements OnInit {
  form: Form = createForm();

  components = {
    Input: InputComponent,
    FormItem: FormItemComponent2,
    Upload: UploadComponent
  };

  schema = {
    "type": "object",
    "properties": {
      "video": {
        "name": "video",
        "type": "string",
        "x-decorator": "FormItem",
        "x-decorator-props": {
          "label": "视频文件"
        },
        "x-component": "Upload",
        "x-component-props": {
          "placeholder": "请输入视频文件",
          "maxLength": 1000
        },
        "required": true,
        "x-validator": null,
        "x-editable": true
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      console.log(this.form)
    }, 2000);
  }

}
