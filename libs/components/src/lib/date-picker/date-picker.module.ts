import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DateRangePickerComponent
  ],
  imports: [
    CommonModule,
    NzDatePickerModule,
    ReactiveFormsModule
  ]
})
export class DatePickerModule { }
