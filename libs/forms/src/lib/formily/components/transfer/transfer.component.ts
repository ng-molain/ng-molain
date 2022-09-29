import {Component, Inject, OnInit} from '@angular/core';
import {COMPONENT_PROPS, FieldRef} from "../../types";
import {Field} from "@formily/core";

@Component({
  selector: 'ml-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  constructor(public readonly fieldRef: FieldRef<any>,
              @Inject(COMPONENT_PROPS) public readonly props: any) {
  }

  get field(): Field {
    return this.fieldRef.field as Field;
  }

  ngOnInit(): void {
  }

}
