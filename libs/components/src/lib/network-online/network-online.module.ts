import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetworkOnlineDirective } from './network-online.directive';



@NgModule({
  declarations: [
    NetworkOnlineDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NetworkOnlineDirective
  ]
})
export class NetworkOnlineModule { }
