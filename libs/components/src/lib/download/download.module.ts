import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DownloadDirective } from './download.directive';
import {NzNotificationModule} from "ng-zorro-antd/notification";
import { DownloadProgressComponent } from './download-progress/download-progress.component';
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzPipesModule} from "ng-zorro-antd/pipes";



@NgModule({
  declarations: [
    DownloadDirective,
    DownloadProgressComponent
  ],
  imports: [
    CommonModule,
    NzNotificationModule,
    NzProgressModule,
    NzPipesModule,
  ],
  exports: [
    DownloadDirective,
    DownloadProgressComponent
  ]
})
export class MlDownloadModule { }
