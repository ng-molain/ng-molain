import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadDirective } from './download.directive';
import {NzNotificationModule} from "ng-zorro-antd/notification";
import { DownloadProgressComponent } from './download-progress/download-progress.component';
import {NzProgressModule} from "ng-zorro-antd/progress";



@NgModule({
  declarations: [
    DownloadDirective,
    DownloadProgressComponent
  ],
  imports: [
    CommonModule,
    NzNotificationModule,
    NzProgressModule,
  ],
  exports: [
    DownloadDirective,
    DownloadProgressComponent
  ]
})
export class MlDownloadModule { }
