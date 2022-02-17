import {Component, Input, OnInit} from '@angular/core';
import {InputBoolean} from "ng-zorro-antd/core/util";
import {NzSafeAny} from "ng-zorro-antd/core/types";

@Component({
  selector: 'ml-field-set',
  templateUrl: './field-set.component.html',
  styleUrls: ['./field-set.component.scss']
})
export class FieldSetComponent implements OnInit {
  @Input("mlLegend") legend?: string | null;
  @Input("mlFormItems") formItems: any[] = [];

  constructor() { }

  get isEmpty() {
    return !(this.formItems && this.formItems.length > 0);
  }

  ngOnInit(): void {
  }

}
