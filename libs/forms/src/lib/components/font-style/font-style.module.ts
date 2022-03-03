import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontStyleComponent } from './font-style.component';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {ColorPickerModule} from "../color-picker/color-picker.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    FontStyleComponent
  ],
  imports: [
    CommonModule,
    NzInputNumberModule,
    ColorPickerModule,
    NzButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    FontStyleComponent
  ]
})
export class FontStyleModule { }
