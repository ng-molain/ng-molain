import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsDemoRoutingModule } from './forms-demo-routing.module';
import { SimpleFormDemoComponent } from './simple-form-demo/simple-form-demo.component';
import {FormilyModule, NgMolainFormsModule} from "@ng-molain/forms";
import {NzButtonModule} from "ng-zorro-antd/button";
import { SettingFormDemoComponent } from './setting-form-demo/setting-form-demo.component';
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FormilyMarkupDemoComponent } from './formily-markup-demo/formily-markup-demo.component';
import { FormilySchemaDemoComponent } from './formily-schema-demo/formily-schema-demo.component';


@NgModule({
  declarations: [

    SimpleFormDemoComponent,
     SettingFormDemoComponent,
     FormilyMarkupDemoComponent,
     FormilySchemaDemoComponent
  ],
  imports: [
    CommonModule,
    FormsDemoRoutingModule,
    NgMolainFormsModule,
    NzButtonModule,
    NzRadioModule,
    FormsModule,
    FormilyModule,
    ReactiveFormsModule
  ]
})
export class FormsDemoModule { }
