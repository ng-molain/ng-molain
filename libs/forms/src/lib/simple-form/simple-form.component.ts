import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {NzFormLayoutType} from "ng-zorro-antd/form";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {ArrayProperty, FieldProperty, FormItemSchema, FormSchema, FormUISchema, ObjectProperty} from "../form.schema";
import {FormRef} from "../form-ref";
import {forEach, get, map, size} from "lodash-es";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {debounceTime} from "rxjs";

@Component({
  selector: 'ml-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  providers: [
    {provide: FormRef, useExisting: forwardRef(() => SimpleFormComponent)}
  ]
})
export class SimpleFormComponent extends FormRef implements OnInit, OnChanges {
  // @Input() value: any;
  // @Output() valueChange = new EventEmitter<any>();
  @Input() nzLayout: NzFormLayoutType = 'horizontal';
  @Output() formSubmit = new EventEmitter<any>();


  // formGroup: FormGroup;

  // @Input() uiSchema!: FormUISchema;
  // @Input() formSchema!: FormSchema;
  @Input()
  schema!: { uiSchema?: FormUISchema, formSchema: FormSchema };

  @Input("mlMode")
  override mode: 'setting' | 'simple' | 'search' = 'simple';

  @Input("mlSize")
  override controlSize: NzSizeLDSType = "default";


  constructor(protected override readonly fb: FormBuilder,
              private ngZone: NgZone) {
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

    if (!uiSchema) {
      uiSchema = this.generateUiSchema(formSchema, []) as any;
    }

    this.onInit((uiSchema as any), formSchema);

    this.rootControl.valueChanges.pipe(debounceTime(100)).subscribe((value) => {
      // this.valueChange.emit(value);
      // console.log("form value:", value);
      this.ngZone.run(() => {
        this.rootControl.patchValue(value, {emitEvent: false})
      })
    });

    // if (this.value) {
      // this.rootControl.markAsPending()
      // this.rootControl.reset(this.value);
      // this.rootControl.markAsPristine()
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    // const {value: valueChange} = changes;
    // if (valueChange && !valueChange.firstChange && !!valueChange.currentValue) {
    // if (valueChange && !!valueChange.currentValue) {
      // console.log("form value input!")
      // this.rootControl.reset(valueChange.currentValue);
    // }
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
