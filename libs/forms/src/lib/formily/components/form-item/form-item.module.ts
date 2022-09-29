import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormItemComponent2 } from './form-item.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {PortalModule} from "@angular/cdk/portal";



@NgModule({
  declarations: [
    FormItemComponent2
  ],
  imports: [
    CommonModule,
    NzFormModule,
    PortalModule
  ],
  exports: [
    FormItemComponent2
  ]
})
export class FormItemModule2 { }
