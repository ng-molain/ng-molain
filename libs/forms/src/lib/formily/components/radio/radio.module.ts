import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './radio.component';
import {NzRadioModule} from "ng-zorro-antd/radio";



@NgModule({
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    NzRadioModule
  ],
  exports: [
    RadioComponent
  ]
})
export class RadioModule { }
