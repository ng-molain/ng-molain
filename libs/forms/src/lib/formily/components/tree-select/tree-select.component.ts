import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef, InputNumberProps, TreeSelectProps} from "@ng-molain/forms";
import {Field} from "@formily/core";
import {NzTreeNodeOptions} from "ng-zorro-antd/tree";

@Component({
  selector: 'ml-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.scss']
})
export class TreeSelectComponent implements OnInit {

  nodes: NzTreeNodeOptions[] = [];

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: TreeSelectProps) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
