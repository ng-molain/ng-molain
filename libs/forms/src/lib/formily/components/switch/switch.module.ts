import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchComponent } from './switch.component';
import {NzSwitchModule} from "ng-zorro-antd/switch";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SwitchComponent
  ],
  imports: [
    CommonModule,
    NzSwitchModule,
    FormsModule
  ],
  exports: [
    SwitchComponent
  ]
})
export class SwitchModule { }
