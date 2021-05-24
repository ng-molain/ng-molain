import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormArray, FormBuilder, FormControl, FormGroup, NG_VALUE_ACCESSOR} from "@angular/forms";
import {isArray, isEmpty} from "lodash-es";

@Component({
  selector: 'ml-text-array',
  templateUrl: './text-array.component.html',
  styleUrls: ['./text-array.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => TextArrayComponent), multi: true
  }]
})
export class TextArrayComponent implements OnInit, ControlValueAccessor {

  constructor(private fb: FormBuilder) { }

  form: FormGroup = this.fb.group({
    formArray: this.fb.array([])
  });
  value: any[] = [];
  disabled: boolean = false;

  get formArray(): FormArray {
    return this.form.get('formArray') as FormArray;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  ngOnInit(): void {
    this.form.valueChanges.subscribe(({formArray}) => {
      this.onChange(formArray);
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.formArray.controls.forEach(it => isDisabled ? it.disable() : it.enable());
  }

  writeValue(obj: any): void {
    this.value = obj;

    const formArray = this.fb.array([]);
    if (isArray(obj) && !isEmpty(obj)) {
      obj.forEach(it => {
        formArray.push(new FormControl(it))
      });
    }
    formArray.push(new FormControl());

    if (this.disabled) {
      formArray.controls.forEach(it => it.disable());
    }

    this.form.setControl("formArray", formArray);
  }

  add(index?: number): void {
    if (index && index > 0 && index < this.formArray.length) {
      this.formArray.insert(index, new FormControl());
      return;
    }

    this.formArray.push(new FormControl());
  }

  remove(index: number): void {
    this.formArray.removeAt(index);
  }
}


