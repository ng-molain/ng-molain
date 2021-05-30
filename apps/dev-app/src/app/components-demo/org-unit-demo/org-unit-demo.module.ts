import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrgUnitDemoRoutingModule } from './org-unit-demo-routing.module';
import { OrgUnitDemoComponent } from './org-unit-demo.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {ReactiveFormsModule} from "@angular/forms";
import {OrgUnitModule} from "../../../../../../libs/components/src/lib/org-unit";


@NgModule({
  declarations: [

    OrgUnitDemoComponent
  ],
  imports: [
    CommonModule,
    OrgUnitDemoRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    OrgUnitModule
  ]
})
export class OrgUnitDemoModule { }
