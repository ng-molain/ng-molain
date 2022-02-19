import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {get} from "lodash-es";
import {NzFormTooltipIcon} from "ng-zorro-antd/form";
import {NzTSType} from "ng-zorro-antd/core/types";
import {AbstractControl, NgModel, Validators} from "@angular/forms";
import {FormRef} from "../../form-ref";
import {FieldProperty, FormProperty} from "../../form.schema";

export interface FieldSchema {
  type?: string; // 临时的，用于 layout

  key?: string;
  name: string;
  alias?: string;
  dataType?: string;
  rules?: any[];
  extra?: {
    [key: string]: any;
  }

  ui: FieldUiSchema;
}

export interface FieldUiSchema {
  controlType: string;
  formControl: AbstractControl;
  controlOptions?: {
    [key: string]: any
  },

  // layout


  // label
  label?: string | false;
  labelOptions?: {
    nzTooltipIcon?: string | NzFormTooltipIcon;
    nzTooltipTitle?: NzTSType;
    nzNoColon?: boolean;
    // nzRequired?: boolean; // read from rule
    // colSpan?: any
  }

  // control wrapper
  controlWrapperOptions?: {
    nzSuccessTip?: string | TemplateRef<{
      $implicit: AbstractControl | NgModel;
    }>;
    nzWarningTip?: string | TemplateRef<{
      $implicit: AbstractControl | NgModel;
    }>;
    nzErrorTip?: string | TemplateRef<{
      $implicit: AbstractControl | NgModel;
    }>;
    nzValidatingTip?: string | TemplateRef<{
      $implicit: AbstractControl | NgModel;
    }>;
    nzExtra?: string | TemplateRef<void>;
    nzAutoTips: Record<string, Record<string, string>>;
    nzDisableAutoTips: boolean | 'default';
    // nzHasFeedback: ;
    // nzValidateStatus: ;
  }

}

@Component({
  selector: 'ml-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  // @Input()
  // fieldSchema!: FieldSchema;
  // @Input() uiSchema: any;
  fieldSchema: any;
  formControl!: AbstractControl;

  controlType!: string;

  get uiSchema(): any {
    return this._uiSchema;
  }

  @Input()
  set uiSchema(value: any) {
    this._uiSchema = value;

    if (this.uiSchema) {
      const {$ref, controlType} = this.uiSchema;

      const property = this.formRef.getProperty($ref);
      this.fieldSchema = {...property, ui: this._uiSchema};
      this.formControl = this.formRef.getControl($ref)!;
      this.controlType = controlType || this.formRef.surmiseControlType(this.fieldSchema);
    }
  }

  private _uiSchema: any;


  constructor(public readonly formRef: FormRef) {
  }

  get label(): string | false {
    return this.get('alias', false) ||
      this.get('name', false) ||
      this.get('ui.label', false);
  }

  get required(): boolean {
    const formControl = this.formControl;
    return (formControl && formControl.hasValidator(Validators.required));
  }

  get(key: string | string[], defaultValue?: any): any {
    return get(this.fieldSchema, key, defaultValue);
  }

  ngOnInit(): void {
  }

}
