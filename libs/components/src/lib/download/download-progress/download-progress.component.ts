import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  template: `
    <ng-template #progressTpl let-data="data">
      <div>
        <div class="text-base font-light mb-2">下载文件</div>
        <div>{{data.name}}</div>
        <nz-progress *ngIf="data.total" [nzPercent]="data?.percent" [nzShowInfo]="false"></nz-progress>
        <div class="space-x-3">
          <span>已下载:</span>
          <span>{{data.loaded | nzBytes }}</span>
          <ng-container *ngIf="data.total">
            <span class="ml-8">共:</span>
            <span>{{data.total | nzBytes }}</span>
          </ng-container>
        </div>
      </div>
    </ng-template>
  `,
})
export class DownloadProgressComponent {
  @ViewChild("progressTpl") progressTpl!: TemplateRef<any>;
  // TODO 速率、进度条颜色
}
