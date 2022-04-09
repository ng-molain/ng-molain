import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import {NzTableModule} from "ng-zorro-antd/table";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule} from "@angular/forms";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {ColTplDirective} from "./col-tpl.directive";
import {CellValueDirective} from "./cell-value.directive";
import {NzTagModule} from "ng-zorro-antd/tag";
import {PaginationModule} from "../pagination";



@NgModule({
  declarations: [
    SimpleTableComponent,
    ColTplDirective,
    CellValueDirective,
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzCheckboxModule,
    NzButtonModule,
    NzToolTipModule,
    NzRadioModule,
    FormsModule,
    NzEmptyModule,
    NzTagModule,
    PaginationModule
  ],
  exports: [
    SimpleTableComponent,
    ColTplDirective,
    CellValueDirective,
  ]
})
export class SimpleTableModule { }
