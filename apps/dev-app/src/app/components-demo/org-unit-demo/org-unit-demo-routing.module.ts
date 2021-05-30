import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrgUnitDemoComponent} from "./org-unit-demo.component";

const routes: Routes = [
  {path: '', component: OrgUnitDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgUnitDemoRoutingModule { }
