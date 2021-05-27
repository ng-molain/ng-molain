import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgUnitTreeComponent } from './org-unit-tree/org-unit-tree.component';
import { OrgUnitLookupComponent } from './org-unit-lookup/org-unit-lookup.component';
import { OrgUnitLookupDialogComponent } from './org-unit-lookup-dialog/org-unit-lookup-dialog.component';
import {NzTreeViewModule} from "ng-zorro-antd/tree-view";
import {NzInputModule} from "ng-zorro-antd/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzTreeModule} from "ng-zorro-antd/tree";
import {NzNoAnimationModule} from "ng-zorro-antd/core/no-animation";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {
  BranchesOutline, CloseCircleOutline,
  CloseOutline,
  FileSearchOutline, FolderFill, FolderOpenOutline, FolderOutline,
  SearchOutline,
  UnorderedListOutline
} from "@ant-design/icons-angular/icons";
import {IconDefinition} from "@ant-design/icons-angular";
import {OrgUnitLoader} from "./org-unit-loader";
import {OrgUnitLookupService} from "./org-unit-lookup.service";

const icons: IconDefinition[] = [
  CloseOutline,
  FileSearchOutline,
  BranchesOutline,
  UnorderedListOutline,
  SearchOutline,
  FolderOutline,
  CloseCircleOutline,
  FolderOutline,
  FolderOpenOutline,
  FolderFill,
];


@NgModule({
  imports: [
    CommonModule,
    NzTreeViewModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzCheckboxModule,
    NzDividerModule,
    NzRadioModule,
    NzCardModule,
    NzInputModule,
    NzTreeModule,
    NzNoAnimationModule,
    NzSelectModule,
    NzIconModule.forChild(icons),
    NzButtonModule,
  ],
  declarations: [
    OrgUnitTreeComponent,
    OrgUnitLookupComponent,
    OrgUnitLookupDialogComponent
  ],
  exports: [
    OrgUnitTreeComponent,
    OrgUnitLookupComponent,
    OrgUnitLookupDialogComponent
  ],
  providers: [
    OrgUnitLoader,
    OrgUnitLookupService
  ]
})
export class OrgUnitModule { }
