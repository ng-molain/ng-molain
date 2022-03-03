import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {get, has} from "lodash-es";
import {FormControlRef} from "../form-control-ref";
import {FormRef} from "../../form-ref";

@Component({
  selector: 'ml-radio-group-control',
  templateUrl: './radio-group-control.component.html',
  styleUrls: ['./radio-group-control.component.scss']
})
export class RadioGroupControlComponent implements OnInit {

  formControl: FormControl;
  attrs: any;
  fieldSchema: any;

  type: 'radio' | 'button' = 'radio';

  constructor(private controlRef: FormControlRef,
              public readonly formRef: FormRef) {
    const {context} = controlRef;
    this.formControl = context.formControl as FormControl;
    this.attrs = context.attrs;
    this.fieldSchema = context.fieldSchema;

    const defaultConfig = get(context, 'config');
    if (has(defaultConfig, 'type')) {
      this.type = get(defaultConfig, 'type');
    }
  }

  ngOnInit(): void {
  }

  get items() {
    return get(this.fieldSchema, 'enum');
  }

}
