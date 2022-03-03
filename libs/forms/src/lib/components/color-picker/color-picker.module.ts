import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ColorPickerComponent} from "./color-picker.component";
import {NzPopoverModule} from "ng-zorro-antd/popover";



@NgModule({
  declarations: [
    ColorPickerComponent
  ],
  imports: [
    CommonModule,
    NzPopoverModule
  ],
  exports: [
    ColorPickerComponent
  ]
})
export class ColorPickerModule { }
