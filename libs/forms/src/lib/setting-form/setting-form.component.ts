import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NzFormLayoutType} from "ng-zorro-antd/form";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'ml-setting-form',
  templateUrl: './setting-form.component.html',
  styleUrls: ['./setting-form.component.scss']
})
export class SettingFormComponent implements OnInit {

  @Input() formProperties: any;
  @Input() nzLayout: NzFormLayoutType = 'horizontal';

  @Output() formSubmit = new EventEmitter<any>();

  structFormGroup: any;
  formGroup: FormGroup;
  formItems: any[] = [];

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({});
  }

  ngOnInit(): void {
    this.formItems = [
      {type: 'fieldset', legend: '基础信息', items: [
          {type: 'text', title: '标题', key: 'title', schema: {type: 'text'}, ui: {}},
          {type: 'switch', title: '是否', key: 'true-false', schema: {type: 'switch'}, ui: {}}
        ]}
    ];
  }

  submitForm($event: any) {
    // validate
    // emit submit
  }
}
