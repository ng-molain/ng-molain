import {Directive, ElementRef, forwardRef, Renderer2} from '@angular/core';
import {NzCheckboxComponent, NzCheckboxWrapperComponent} from "ng-zorro-antd/checkbox";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Directive({
  selector: '[mlCheckboxGroup]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxGroupDirective), multi: true
  }]
})
export class CheckboxGroupDirective extends NzCheckboxWrapperComponent implements ControlValueAccessor {

  private _checkboxList: NzCheckboxComponent[] = [];

  _onChange = (v: any) => undefined;
  onTouched = () => undefined;

  constructor(renderer: Renderer2, elementRef: ElementRef) {
    super(renderer, elementRef);
  }

  override addCheckbox(value: NzCheckboxComponent) {
    super.addCheckbox(value);
    this._checkboxList.push(value);
  }

  override removeCheckbox(value: NzCheckboxComponent) {
    super.removeCheckbox(value);
    this._checkboxList.splice(this._checkboxList.indexOf(value), 1);
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this._checkboxList.forEach(it => {
      it.setDisabledState(isDisabled);
    })
  }

  writeValue(obj: any): void {
    if (!Array.isArray(obj)) {
      this._checkboxList.forEach(it => it.nzChecked = false);
      return ;
    }

    this._checkboxList.forEach(it => {
      it.nzChecked = obj.includes(it.nzValue);
    });
  }

  override onChange() {
    super.onChange();

    const listOfCheckedValue = this._checkboxList.filter(item => item.nzChecked).map(item => item.nzValue);
    this._onChange(listOfCheckedValue);
  }
}
