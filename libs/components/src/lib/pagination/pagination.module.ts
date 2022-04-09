import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {FormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";



@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonModule,
    NzInputNumberModule,
    FormsModule,
    NzSelectModule,
    NzButtonModule
  ],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule { }
