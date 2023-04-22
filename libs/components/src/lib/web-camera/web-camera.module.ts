import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebCameraComponent } from './web-camera/web-camera.component';



@NgModule({
  declarations: [
    WebCameraComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WebCameraComponent
  ]
})
export class WebCameraModule { }
