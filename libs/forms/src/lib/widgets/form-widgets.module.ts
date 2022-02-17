import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextWidgetComponent } from './text-widget/text-widget.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import { SwitchWidgetComponent } from './switch-widget/switch-widget.component';
import {NzSwitchModule} from "ng-zorro-antd/switch";
import { NzFormControlsComponent } from './nz-form-controls/nz-form-controls.component';
import {FormControlDirective} from "./nz-form-controls/form-control.directive";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzAutocompleteModule} from "ng-zorro-antd/auto-complete";
import {NzCascaderModule} from "ng-zorro-antd/cascader";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";



@NgModule({
  declarations: [
    TextWidgetComponent,
    SwitchWidgetComponent,
    NzFormControlsComponent,
    FormControlDirective,
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
    NzInputNumberModule
  ],
  exports: [
    TextWidgetComponent,
    SwitchWidgetComponent,
    NzFormControlsComponent,
  ]
})
export class FormWidgetsModule { }
