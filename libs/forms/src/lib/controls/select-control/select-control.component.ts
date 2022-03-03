import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {get, has} from "lodash-es";
import {FormControlRef} from "../form-control-ref";
import {FormRef} from "../../form-ref";
import {NzSelectModeType} from "ng-zorro-antd/select/select.types";

@Component({
  selector: 'ml-select-control',
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss']
})
export class SelectControlComponent implements OnInit {

  formControl: FormControl;
  attrs: any;
  fieldSchema: any;

  defaultConfig: any;

  constructor(private controlRef: FormControlRef,
              public readonly formRef: FormRef) {
    const {context} = controlRef;
    this.formControl = context.formControl as FormControl;
    this.attrs = context.attrs;
    this.fieldSchema = context.fieldSchema;

    // default config
    if (has(context, 'config')) {
      this.defaultConfig = get(context, 'config');
    }
  }

  ngOnInit(): void {
  }

  get items() {
    // TODO dynamic get items ...
    return get(this.fieldSchema, 'enum');
  }

  // 'default' | 'multiple' | 'tags'
  get mode(): NzSelectModeType {
    return get(this.defaultConfig, 'mode') ??
      (this.formRef.isArrayOfPrimitivesSchema(this.fieldSchema) ? 'multiple' :'default');
  }
}
