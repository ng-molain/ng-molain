import {AfterContentInit, ContentChildren, Directive, forwardRef, QueryList} from '@angular/core';
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {debounceTime, merge} from "rxjs";
import {AbstractControlValueAccessor} from "@ng-molain/forms";

@Directive({
  selector: '[mlCheckboxGroup]',
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CheckboxGroupDirective), multi: true
  }]
})
export class CheckboxGroupDirective extends AbstractControlValueAccessor implements ControlValueAccessor, AfterContentInit {

  @ContentChildren(NzCheckboxComponent, {descendants: true}) _checkboxList!: QueryList<NzCheckboxComponent>;
  constructor() {
    super();
  }

  ngAfterContentInit() {
    console.log(">>>>", this._checkboxList);
    merge(this._checkboxList.map(it => it.nzCheckedChange)).subscribe({
      next: value => {
        this._onChange();
      }
    });

    setTimeout(() => {
      this.updateValue();
      this.updateDisabledState();
    }, 100);
  }

  override setDisabledState(isDisabled: boolean): void {
    super.setDisabledState(isDisabled);
    this.updateDisabledState();
  }

  override writeValue(obj: any): void {
    super.writeValue(obj);
    this.updateValue();
  }

  updateDisabledState() {
    if (!this._checkboxList) {
      return;
    }
    const isDisabled = this.disabled;
    this._checkboxList.forEach(it => {
      it.setDisabledState(isDisabled);
    });
  }

  updateValue() {
    if (!this._checkboxList || !this.initialValue) {
      return;
    }

    const value = this.initialValue;
    if (!Array.isArray(value)) {
      this._checkboxList.forEach(it => it.nzChecked = false);
      return ;
    }

    this._checkboxList.forEach(it => {
      it.nzChecked = value.includes(it.nzValue);
    });
  }

  _onChange() {
    const listOfCheckedValue = this._checkboxList.filter(item => item.nzChecked).map(item => item.nzValue);
    this.onChange(listOfCheckedValue);
  }
}
