import {Component, forwardRef, Input, OnInit, TemplateRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {COLOR_OPTIONS} from "./color-options.data";
import {SelectionModel} from "@angular/cdk/collections";
import {get} from "lodash-es";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";

@Component({
  selector: 'ml-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ColorPickerComponent), multi: true
  }]
})
export class ColorPickerComponent implements OnInit, ControlValueAccessor {
  // TODO 支持多选

  colorOptions = COLOR_OPTIONS;
  selection = new SelectionModel<string>();

  @Input() handleContent?: TemplateRef<any>;
  @Input() mlSize: NzSizeLDSType = 'default';

  value: any; // TODO color type
  disabled: boolean = false;
  onChange = (v: any) => undefined;
  onTouched = () => undefined;

  constructor() { }

  ngOnInit(): void {
    this.selection.changed.subscribe(() => {
      this.value = get(this.selection.selected, '[0]', null);
      this.onChange(this.value);
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
  }

  writeValue(obj: any): void {
    this.value = obj || '#FFFFFF';
    this.selection.select(this.value);
  }

}
