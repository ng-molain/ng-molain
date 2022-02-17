import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormsDemoMenusService} from "./forms-demo-menus.service";
import {
  ConsoleLayoutsModule,
  VIEW_FRAMEWORK_PRODUCT_SERVICE,
  ViewFrameworkProductComponent
} from "@ng-molain/components";
import {SimpleFormDemoComponent} from "./simple-form-demo/simple-form-demo.component";
import {SettingFormDemoComponent} from "./setting-form-demo/setting-form-demo.component";

const routes: Routes = [
  {
    path: '', component: ViewFrameworkProductComponent, children: [
      {path: '', redirectTo: 'simple-form', pathMatch: 'full'},
      {path: 'simple-form', component: SimpleFormDemoComponent},
      {path: 'setting-form', component: SettingFormDemoComponent}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes), ConsoleLayoutsModule],
  exports: [RouterModule],
  providers: [
    {provide: VIEW_FRAMEWORK_PRODUCT_SERVICE, useClass: FormsDemoMenusService}
  ]
})
export class FormsDemoRoutingModule { }
