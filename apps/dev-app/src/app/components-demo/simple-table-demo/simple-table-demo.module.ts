import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleTableDemoRoutingModule } from './simple-table-demo-routing.module';
import { SimpleTableDemoComponent } from './simple-table-demo.component';
import {CompositeFilterModule, SimpleTableModule} from "@ng-molain/components";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SimpleTableDemoComponent
  ],
  imports: [
    CommonModule,
    SimpleTableDemoRoutingModule,
    SimpleTableModule,
    NzButtonModule,
    NzDividerModule,
    CompositeFilterModule,
    NzSelectModule,
    NzDropDownModule,
    NzRadioModule,
    FormsModule
  ]
})
export class SimpleTableDemoModule { }
