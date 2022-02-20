import {Component, Input, OnInit} from '@angular/core';
import {FormRef} from "../../form-ref";
import {AbstractControl} from "@angular/forms";
import {get} from "lodash-es";

@Component({
  selector: 'ml-object-control',
  templateUrl: './object-control.component.html',
  styleUrls: ['./object-control.component.scss']
})
export class ObjectControlComponent implements OnInit {
  fieldSchema: any;
  // formControl!: AbstractControl;

  elements: any[] = [];

  expanded: boolean = false;

  get uiSchema(): any {
    return this._uiSchema;
  }

  // TODO use inject
  @Input()
  set uiSchema(value: any) {
    this._uiSchema = value;

    if (this.uiSchema) {
      const {$ref, controlType} = this.uiSchema;

      const property = this.formRef.getProperty($ref);
      this.fieldSchema = {...property, ui: this._uiSchema};
      // this.formControl = this.formRef.getControl($ref)!;
      // this.controlType = controlType || this.formRef.surmiseControlType(this.fieldSchema);

      this.elements = this.uiSchema.elements || [];
    }
  }

  private _uiSchema: any;

  constructor(private formRef: FormRef) { }

  get label(): string | false {
    return this.get('alias', false) ||
      this.get('name', false) ||
      this.get('ui.label', false);
  }


  get(key: string | string[], defaultValue?: any): any {
    return get(this.fieldSchema, key, defaultValue);
  }

  ngOnInit(): void {
  }

}
