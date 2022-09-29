import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormLayoutModule} from "./form-layout/form-layout.module";
import {FormItemModule2} from "./form-item/form-item.module";
import {InputModule} from "./input/input.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormLayoutModule,
    FormItemModule2,
    InputModule,
  ],
  exports: [
    FormLayoutModule,
    FormItemModule2,
    InputModule,
  ]
})
export class FormilyComponentsModule { }
