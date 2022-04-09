import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompositeFilterComponent } from './composite-filter/composite-filter.component';
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ReactiveFormsModule} from "@angular/forms";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {FormControlsModule} from "../forms";
import {NzDividerModule} from "ng-zorro-antd/divider";



@NgModule({
  declarations: [
    CompositeFilterComponent
  ],
    imports: [
        CommonModule,
        NzSelectModule,
        NzInputModule,
        NzButtonModule,
        ReactiveFormsModule,
        NzDatePickerModule,
        FormControlsModule,
        NzDividerModule,
    ],
  exports: [
    CompositeFilterComponent
  ]
})
export class CompositeFilterModule { }
