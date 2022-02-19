import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzCascaderModule} from "ng-zorro-antd/cascader";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {FormControlRenderer} from "./form-control-renderer.component";
import { InputControlComponent } from './input-control/input-control.component';
import {FormControlsRegistry} from "./form-controls.registry";
import { InputNumberControlComponent } from './input-number-control/input-number-control.component';
import { SelectControlComponent } from './select-control/select-control.component';
import { SwitchControlComponent } from './switch-control/switch-control.component';
import { CheckboxControlComponent } from './checkbox-control/checkbox-control.component';
import { RadioControlComponent } from './radio-control/radio-control.component';
import { RadioGroupControlComponent } from './radio-group-control/radio-group-control.component';
import { CheckboxGroupControlComponent } from './checkbox-group-control/checkbox-group-control.component';
import {NzRadioModule} from "ng-zorro-antd/radio";



@NgModule({
  declarations: [
    FormControlRenderer,
    InputControlComponent,
    InputNumberControlComponent,
    SelectControlComponent,
    SwitchControlComponent,
    CheckboxControlComponent,
    RadioControlComponent,
    RadioGroupControlComponent,
    CheckboxGroupControlComponent
  ],
  exports: [
    FormControlRenderer,
    InputControlComponent,
    InputNumberControlComponent,
    SelectControlComponent,
    SwitchControlComponent,
    CheckboxControlComponent,
    RadioControlComponent,
    RadioGroupControlComponent,
    CheckboxGroupControlComponent
  ],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    NzSwitchModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzAutocompleteModule,
    NzCascaderModule,
    NzCheckboxModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzRadioModule
  ]
})
export class FormControlsModule { }
