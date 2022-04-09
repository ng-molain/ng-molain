import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimpleTableDemoComponent} from "./simple-table-demo.component";

const routes: Routes = [
  {path: '', component: SimpleTableDemoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimpleTableDemoRoutingModule { }
