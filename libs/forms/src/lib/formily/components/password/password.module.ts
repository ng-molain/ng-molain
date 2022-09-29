import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";
import {FormsModule} from "@angular/forms";
import {NzProgressModule} from "ng-zorro-antd/progress";



@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    NzIconModule,
    FormsModule,
    NzProgressModule
  ],
  exports: [
    PasswordComponent
  ]
})
export class PasswordModule { }
