import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputNumberComponent } from './input-number.component';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    InputNumberComponent
  ],
  imports: [
    CommonModule,
    NzInputNumberModule,
    FormsModule
  ],
  exports: [
    InputNumberComponent
  ]
})
export class InputNumberModule { }
