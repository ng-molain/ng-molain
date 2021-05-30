import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsDemoRoutingModule } from './components-demo-routing.module';
import {ComponentsDemoMenusService} from "./components-demo-menus.service";
import {VIEW_FRAMEWORK_PRODUCT_SERVICE} from "@ng-molain/components";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsDemoRoutingModule
  ],
  providers: [
    {provide: VIEW_FRAMEWORK_PRODUCT_SERVICE, useClass: ComponentsDemoMenusService}
  ]
})
export class ComponentsDemoModule { }
