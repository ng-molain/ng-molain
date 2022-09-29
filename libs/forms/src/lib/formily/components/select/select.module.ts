import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SelectComponent
  ],
  imports: [
    CommonModule,
    NzSelectModule,
    FormsModule
  ],
  exports: [
    SelectComponent
  ]
})
export class SelectModule { }
