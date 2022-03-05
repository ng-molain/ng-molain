import {ControlValueAccessor} from "@angular/forms";

export abstract class AbstractControlValueAccessor implements ControlValueAccessor {

  initialValue?: any;
  disabled: boolean = false;
  onChange = (v: any) => undefined;
  onTouched = (v: any) => undefined;

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  writeValue(obj: any): void {
    this.initialValue = obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
