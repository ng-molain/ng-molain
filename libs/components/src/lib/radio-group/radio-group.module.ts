import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioGroupDirective} from "./radio-group.directive";


@NgModule({
  declarations: [RadioGroupDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    RadioGroupDirective,
  ]
})
export class MlRadioGroupModule { }
