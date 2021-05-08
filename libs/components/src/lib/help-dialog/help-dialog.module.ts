import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HelpDialogComponent} from './help-dialog.component';
import {NzModalModule} from "ng-zorro-antd/modal";
import {HelpDialogService} from "./help-dialog.service";


@NgModule({
  imports: [
    CommonModule,
    NzModalModule,
  ],
  declarations: [
    HelpDialogComponent
  ],
  exports: [
    HelpDialogComponent,
  ],
  entryComponents: [
    HelpDialogComponent
  ],
  providers: [
    HelpDialogService,
  ]
})
export class HelpDialogModule {
}
