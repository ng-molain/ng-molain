import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CiphertextComponent } from './ciphertext.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    CiphertextComponent
  ],
  imports: [
    CommonModule,
    NzInputModule,
    ReactiveFormsModule
  ],
  exports: [
    CiphertextComponent
  ]
})
export class CiphertextModule { }
