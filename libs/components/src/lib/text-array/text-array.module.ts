import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextArrayComponent } from './text-array/text-array.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NzButtonModule} from "ng-zorro-antd/button";



@NgModule({
  declarations: [
    TextArrayComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzButtonModule
  ],
  exports: [
    TextArrayComponent
  ]
})
export class TextArrayModule { }
