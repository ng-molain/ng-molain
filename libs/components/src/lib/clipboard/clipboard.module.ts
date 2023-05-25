import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyTextDirective } from './copy-text.directive';
import {NzMessageModule} from "ng-zorro-antd/message";



@NgModule({
  declarations: [
    CopyTextDirective
  ],
  imports: [
    CommonModule,
    NzMessageModule
  ],
  exports: [
    CopyTextDirective
  ]
})
export class ClipboardModule { }
