import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFrameworkProductComponent } from './view-framework-product/view-framework-product.component';
import { RouterModule } from '@angular/router';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  declarations: [ViewFrameworkProductComponent],
  exports: [
    ViewFrameworkProductComponent,
  ],
})
export class ViewFrameworkProductModule { }
