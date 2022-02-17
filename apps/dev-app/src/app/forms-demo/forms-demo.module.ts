import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { SimpleFormDemoComponent } from './simple-form-demo/simple-form-demo.component';
import {NgMolainFormsModule} from "@ng-molain/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import { SettingFormDemoComponent } from './setting-form-demo/setting-form-demo.component';


@NgModule({
  declarations: [

    SimpleFormDemoComponent,
     SettingFormDemoComponent
  ],
  imports: [
    CommonModule,
    FormsDemoRoutingModule,
    NgMolainFormsModule,
    NzButtonModule
  ]
})
export class FormsDemoModule { }
