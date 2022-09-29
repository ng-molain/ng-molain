import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimePickerComponent } from './time-picker.component';
import {NzTimePickerModule} from "ng-zorro-antd/time-picker";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TimePickerComponent
  ],
  imports: [
    CommonModule,
    NzTimePickerModule,
    FormsModule
  ],
  exports: [
    TimePickerComponent
  ]
})
export class TimePickerModule { }
