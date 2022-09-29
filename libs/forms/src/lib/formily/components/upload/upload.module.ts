import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzButtonModule} from "ng-zorro-antd/button";



@NgModule({
  declarations: [
    UploadComponent
  ],
  imports: [
    CommonModule,
    NzUploadModule,
    NzButtonModule
  ],
  exports: [
    UploadComponent
  ]
})
export class UploadModule { }
