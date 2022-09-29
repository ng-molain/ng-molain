import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangePickerComponent } from './range-picker.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    RangePickerComponent
  ],
  imports: [
    CommonModule,
    NzDatePickerModule,
    FormsModule
  ],
  exports: [
    RangePickerComponent
  ]
})
export class RangePickerModule { }
