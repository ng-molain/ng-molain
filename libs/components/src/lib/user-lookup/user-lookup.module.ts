import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';

import { UserLookupComponent } from './user-lookup/user-lookup.component';
import { UserLookupDialogComponent } from './user-lookup-dialog/user-lookup-dialog.component';
import { UserLookupFastComponent } from './user-lookup-dialog/user-lookup-fast/user-lookup-fast.component';
import { UserLookupFindComponent } from './user-lookup-dialog/user-lookup-find/user-lookup-find.component';
import { UserInputComponent } from './user-input/user-input.component';
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzTreeModule} from "ng-zorro-antd/tree";
import {NzModalModule} from "ng-zorro-antd/modal";
import {UserLookupService} from "./user-lookup.service";
import {NzSelectModule} from "ng-zorro-antd/select";


@NgModule({
    imports: [
        CommonModule,
        NzTabsModule,
        NzInputModule,
        NzButtonModule,
        NzAlertModule,
        NzLayoutModule,
        NzTreeModule,
        NzModalModule,
        NzSelectModule,
    ],
  declarations: [
    UserLookupComponent,
    UserLookupDialogComponent,
    UserLookupFastComponent,
    UserLookupFindComponent,
    UserInputComponent,
  ],
  exports: [
    UserLookupComponent,
    UserInputComponent,
  ],
  providers: [
    UserLookupService,
  ],
  entryComponents: [UserLookupDialogComponent]
})
export class UserLookupModule { }
