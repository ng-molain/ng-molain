import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule} from "@angular/forms";
import { TextAreaComponent } from './text-area/text-area.component';
import {NzIconModule} from "ng-zorro-antd/icon";



@NgModule({
  declarations: [
    InputComponent,
    TextAreaComponent
  ],
    imports: [
        CommonModule,
        NzInputModule,
        FormsModule,
        NzIconModule
    ],
  exports: [
    InputComponent,
    TextAreaComponent
  ]
})
export class InputModule { }
