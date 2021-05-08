import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'tenant-ui-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PasswordComponent), multi: true}
  ]
})
export class PasswordComponent implements ControlValueAccessor {
  passwordVisible: boolean = false;
  value: string;
  disabled: boolean = false;
  @Input() placeholder: string = 'Input password'

  onChange = (...args) => {};
  onTouched = (...args) => {};

  constructor() { }

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
    this.value = obj;
  }

}
