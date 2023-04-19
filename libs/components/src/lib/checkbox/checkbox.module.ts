import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxGroupDirective } from './checkbox-group.directive';



@NgModule({
  declarations: [
    CheckboxGroupDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CheckboxGroupDirective
  ]
})
export class MlCheckboxModule { }
