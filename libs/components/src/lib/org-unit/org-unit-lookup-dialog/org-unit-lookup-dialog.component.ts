import {Component, Input, OnInit} from '@angular/core';
import {SelectionModel} from "@angular/cdk/collections";
import {OrgUnitFlatNode} from "../org-unit.typings";
import {isArray} from "lodash-es";
import {NzModalRef} from "ng-zorro-antd/modal";
import {OrgUnitLoadChildrenFn} from "..";

@Component({
  selector: 'ml-org-unit-lookup-dialog',
  templateUrl: './org-unit-lookup-dialog.component.html',
  styleUrls: ['./org-unit-lookup-dialog.component.scss'],
})
export class OrgUnitLookupDialogComponent implements OnInit {

  mode = 'tree'; // 'tree' | 'list'

  selection: SelectionModel<any> = new SelectionModel<any>(true);
  searchVisible: boolean = false;

  @Input() multipleSelect: boolean = false;
  @Input() loadChildrenFn: OrgUnitLoadChildrenFn;

  constructor(private modalRef: NzModalRef,) { }

  ngOnInit() {
  }

  select($event: OrgUnitFlatNode | OrgUnitFlatNode[]) {
    this.selection.clear();
    if (isArray($event)) {
      this.selection.select(...$event);
    } else if (!!$event) {
      this.selection.select($event);
    }
  }
}
