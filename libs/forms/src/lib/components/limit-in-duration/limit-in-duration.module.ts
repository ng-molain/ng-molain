import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LimitInDurationComponent} from "./limit-in-duration.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";



@NgModule({
  declarations: [
    LimitInDurationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputNumberModule
  ],
  exports: [
    LimitInDurationComponent
  ]
})
export class LimitInDurationModule { }
