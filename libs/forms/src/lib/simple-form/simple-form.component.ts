import {Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {NzFormLayoutType} from "ng-zorro-antd/form";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ArrayProperty, FieldProperty, FormItemSchema, FormSchema, FormUISchema, ObjectProperty} from "../form.schema";
import {FormRef} from "../form-ref";
import {forEach, get, map, size} from "lodash-es";

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
  schema!: { uiSchema?: FormUISchema, formSchema: FormSchema };

  @Input("mlMode")
  override mode: 'setting' | 'simple' | 'search' = 'simple';


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
    let {uiSchema, formSchema} = this.schema;

    uiSchema = this.generateUiSchema(formSchema, []) as any;

    this.onInit((uiSchema as any), formSchema);
  }

  private generateUiSchema(p: ObjectProperty | ArrayProperty | FieldProperty,
                           path: string[]): FormUISchema | FormItemSchema | undefined {
    if (this.isObjectSchema(p)) {
      const properties = (p as ObjectProperty).properties;
      const elements = map(properties, (v, k) => this.generateUiSchema(v, [...path, k]))
        .filter(it => it !== undefined) as any;
      return (size(path) === 0 ? {
        type: 'vertical-layout',
        elements: elements

      } : {
        type: 'object',
        $ref: path.join('.'),
        options: {
          layout: 'vertical-layout'
        },
        elements: elements
      });
    }

    // TODO isArrayOfObject ...

    if (this.isFieldSchema(p) || this.isArrayOfPrimitivesSchema(p)) {
      return ({
        type: 'control',
        $ref: path.join('.'),
        controlType: get(p, 'ui.controlType', undefined)
      });
    }

    return;
  }

  submitForm($event: any) {
    // validate
    // emit submit
    console.log("form value", this.rootControl.value);
  }
}
