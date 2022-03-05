import {Component, Input, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {FormRef} from "@ng-molain/forms";
import {get, some} from "lodash-es";

@Component({
  selector: 'ml-group-layout',
  templateUrl: './group-layout.component.html',
  styleUrls: ['./group-layout.component.scss']
})
export class GroupLayoutComponent implements OnInit {

  name?: string | null;
  elements: any[] = [];

  private _uiSchema: any;

  level: number = 0;

  constructor(public readonly formRef: FormRef,
              @SkipSelf() @Optional()  private parent?: GroupLayoutComponent) {
    if (parent) {
      this.level = parent.level + 1;
    }
  }

  get uiSchema(): any {
    return this._uiSchema;
  }

  @Input()
  set uiSchema(value: any) {
    this._uiSchema = value;

    if (this.uiSchema) {
      this.elements = this.uiSchema.elements || [];
    }
    this.name = get(this.uiSchema, 'options.name', null);
  }

  get hasChildGroup(): boolean {
    // console.log("group elements:", this.elements)
    return some(this.elements, (it) => it.type === 'group-layout')
  }

  ngOnInit(): void {
  }

}
