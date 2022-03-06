import {
  AfterContentInit,
  Component, ContentChildren,
  EventEmitter,
  forwardRef,
  Input,
  NgZone,
  OnChanges,
  OnInit,
  Output, QueryList,
  SimpleChanges
} from '@angular/core';
import {NzFormLayoutType} from "ng-zorro-antd/form";
import {AbstractControl, FormBuilder, FormGroup} from "@angular/forms";
import {ArrayProperty, FieldProperty, FormItemSchema, FormSchema, FormUISchema, ObjectProperty} from "../form.schema";
import {FormRef} from "../form-ref";
import {forEach, get, keyBy, map, size} from "lodash-es";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {debounceTime} from "rxjs";
import {FormItemDirective} from "../widgets/form-item/form-item.directive";
import {generateUiSchema} from "../schema-converter";

@Component({
  selector: 'ml-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss'],
  providers: [
    {provide: FormRef, useExisting: forwardRef(() => SimpleFormComponent)}
  ]
})
export class SimpleFormComponent extends FormRef implements OnInit, OnChanges, AfterContentInit {
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();
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

  @Input("mlHiddenItemWhenDisabled")
  override hiddenItemWhenDisabled: boolean = false;

  @ContentChildren(FormItemDirective) override customItems?: QueryList<FormItemDirective>;


  constructor(protected override readonly fb: FormBuilder,
              private ngZone: NgZone) {
    super(fb);
  }

  ngOnInit(): void {
    let {uiSchema, formSchema} = this.schema;

    if (!uiSchema) {
      uiSchema = generateUiSchema(formSchema, []) as any;
    }

    this.onInit((uiSchema as any), formSchema);

    this.rootControl.valueChanges.pipe(debounceTime(100)).subscribe((value) => {
      this.value = value;
      this.valueChange.emit(value);
      // console.log("form value:", value);
      this.ngZone.run(() => {
        this.rootControl.patchValue(value, {emitEvent: false})
      })
    });

    if (this.value) {
      this.rootControl.reset(this.value, {emitEvent: false});
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const {value: valueChange} = changes;
    if (valueChange && !valueChange.firstChange && !!valueChange.currentValue) {
      if (valueChange && !!valueChange.currentValue) {
        // console.log("form value input!")
        this.rootControl.reset(valueChange.currentValue, {emitEvent: false});
      }
    }
  }

  ngAfterContentInit() {
    console.log("不用做订阅！！", this.customItems)
    if (this.customItems) {
    //   this.customItems.changes.subscribe(() => {
    //     this.customItemTemplates.clear();
    //     // keyBy(this.customItems, 'name');
    //     console.log(this.customItems)
        this.customItems?.forEach((item) => {
          this.customItemTemplates.set(item.key, item.templateRef);
        })
    //   })
    }
  }

  submitForm($event: any) {
    // validate
    // emit submit
    console.log("form value", this.rootControl.value);
  }
}
