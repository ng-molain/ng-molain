import {Component, Input, NgZone, OnInit, TemplateRef} from '@angular/core';
import {get} from "lodash-es";
import {NzFormTooltipIcon} from "ng-zorro-antd/form";
import {NzTSType} from "ng-zorro-antd/core/types";
import {AbstractControl, NgModel, Validators} from "@angular/forms";
import {FormRef} from "../../form-ref";
import {merge, mergeMap, mergeMapTo} from "rxjs";




@Component({
  selector: 'ml-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

  fieldSchema: any;
  formControl!: AbstractControl;

  controlType!: string;
  formMode?: 'setting' | 'simple' | 'search';

  customTemplate?: TemplateRef<any>;

  implicit = this;

  get uiSchema(): any {
    return this._uiSchema;
  }

  @Input()
  set uiSchema(value: any) {
    this._uiSchema = value;

    this.updateView();
  }

  private _uiSchema: any;


  constructor(public readonly formRef: FormRef,
              private ngZone: NgZone) {
    this.formMode = formRef.mode;
    // console.log(formRef.customItemTemplates)
    this.formRef.customItems?.changes
      .pipe(
      // mergeMapTo(this.ngZone.onUnstable)
    )
      .subscribe(() => {
      console.log(formRef.customItemTemplates)
      this.updateView()
    });
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

  updateView() {
    if (!this.uiSchema) {
      return ;
    }

    const {$ref, controlType} = this.uiSchema;

    const property = this.formRef.getProperty($ref);
    this.fieldSchema = {...property, ui: this._uiSchema};
    this.formControl = this.formRef.getControl($ref)!;
    this.controlType = controlType || this.formRef.surmiseControlType(this.fieldSchema);

    if (this.formRef.customItemTemplates.has($ref)) {
      this.customTemplate = this.formRef.customItemTemplates.get($ref);
    }
  }

}
