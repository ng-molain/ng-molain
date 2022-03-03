import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {ControlValueAccessor, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {get} from "lodash-es";

@Component({
  selector: 'ml-font-style',
  templateUrl: './font-style.component.html',
  styleUrls: ['./font-style.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => FontStyleComponent), multi: true
  }]
})
export class FontStyleComponent implements OnInit, ControlValueAccessor {

  @Input()
  mlSize: NzSizeLDSType = 'default';

  formGroup: FormGroup;

  value: any;
  disabled: boolean = false;
  onChange = (v: any) => undefined;
  onTouched = () => undefined;

  constructor(private fb: FormBuilder) {
    this.formGroup = fb.group({
      size: [],
      color: [],
      bold: [],
      italic: [],
      underline: []
    });
    this.formGroup.reset({size: 16, color: 'black'});
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      this.value = value;
      this.onChange(value);
    })
  }

  toggle(name: string) {
    const control = this.formGroup.get(name) as FormControl;
    control.setValue(!control.value);
  }

  get isBold(): boolean {
    return get(this.formGroup.value, 'bold', false);
  }

  get isItalic(): boolean {
    return get(this.formGroup.value, 'italic', false);
  }

  get isUnderline(): boolean {
    return get(this.formGroup.value, 'underline', false);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.value = Object.assign({size: 16, color: 'black'}, obj || {});
    this.formGroup.reset(this.value);
  }
}
