import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePickerComponent } from './date-picker.component';
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    NzDatePickerModule,
    FormsModule
  ],
  exports: [
    DatePickerComponent
  ]
})
export class DatePickerModule { }
