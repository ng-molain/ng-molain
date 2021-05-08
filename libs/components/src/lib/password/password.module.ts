import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PasswordComponent} from "./password.component";
import {FormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzInputModule,
    NzIconModule,
  ],
  declarations: [
    PasswordComponent,
  ],
  exports: [
    PasswordComponent,
  ]
})
export class PasswordModule {}
