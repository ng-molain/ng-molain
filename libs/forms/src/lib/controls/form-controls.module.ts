import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {InputControlComponent} from './input-control/input-control.component';
import {FormControlsRegistry} from "./form-controls.registry";
import {InputNumberControlComponent} from './input-number-control/input-number-control.component';
import {SelectControlComponent} from './select-control/select-control.component';
import {SwitchControlComponent} from './switch-control/switch-control.component';
import {CheckboxControlComponent} from './checkbox-control/checkbox-control.component';
import {RadioControlComponent} from './radio-control/radio-control.component';
import {RadioGroupControlComponent} from './radio-group-control/radio-group-control.component';
import {CheckboxGroupControlComponent} from './checkbox-group-control/checkbox-group-control.component';
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FileUploadControlComponent} from './file-upload-control/file-upload-control.component';
import {ColorPickerControlComponent} from './color-picker-control/color-picker-control.component';
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";
import {FontStyleControlComponent} from './font-style-control/font-style-control.component';
import {ColorPickerModule, FontStyleModule} from "../components";


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
    CheckboxGroupControlComponent,
    FileUploadControlComponent,
    ColorPickerControlComponent,
    FontStyleControlComponent
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
    CheckboxGroupControlComponent,
    FileUploadControlComponent,
    ColorPickerControlComponent,
    FontStyleControlComponent
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
    NzRadioModule,
    ColorPickerModule,
    NzUploadModule,
    NzButtonModule,
    FontStyleModule
  ]
})
export class FormControlsModule {
}
