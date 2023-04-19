import {
  AfterContentInit,
  ContentChildren,
  Directive,
  ElementRef,
  forwardRef,
  QueryList,
  Renderer2
} from '@angular/core';
import {NzCheckboxComponent, NzCheckboxWrapperComponent} from "ng-zorro-antd/checkbox";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {zip} from "rxjs";

@Directive({
  selector: '[mlCheckboxGroup]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxGroupDirective), multi: true
  }]
})
export class CheckboxGroupDirective implements ControlValueAccessor, AfterContentInit {

  @ContentChildren(NzCheckboxComponent) _checkboxList!: QueryList<NzCheckboxComponent>;

  _onChange = (v: any) => undefined;
  onTouched = () => undefined;

  constructor() {
  }

  ngAfterContentInit() {
    zip(this._checkboxList.map(it => it.nzCheckedChange)).subscribe({
      next: value => {
        this.onChange();
      }
    })
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

  onChange() {
    const listOfCheckedValue = this._checkboxList.filter(item => item.nzChecked).map(item => item.nzValue);
    this._onChange(listOfCheckedValue);
  }
}
