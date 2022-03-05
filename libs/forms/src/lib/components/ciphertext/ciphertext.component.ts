import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractControlValueAccessor} from "../abstract-control-value-accessor";

@Component({
  selector: 'ml-ciphertext',
  templateUrl: './ciphertext.component.html',
  styleUrls: ['./ciphertext.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CiphertextComponent), multi: true
  }]
})
export class CiphertextComponent extends AbstractControlValueAccessor implements OnInit, ControlValueAccessor {


  @Input() mlSize: NzSizeLDSType = "default";
  @Input() mlPlaceholder?: string;

  displayText: boolean = false;
  formControl: FormControl = new FormControl();

  get inputType(): 'text' | 'password' {
    return this.displayText ? 'text' : 'password';
  };

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((v) => {
      this.onChange(v)
    });
  }

  override setDisabledState(isDisabled: boolean) {
    super.setDisabledState(isDisabled);
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  override writeValue(obj: any) {
    super.writeValue(obj);
    this.formControl.reset(obj, {emitEvent: false});
  }

}
