import {Component, Input, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {FormRef} from "../../form-ref";
import {get, some} from "lodash-es";

@Component({
  selector: 'ml-group-layout',
  templateUrl: './group-layout.component.html',
  styleUrls: ['./group-layout.component.scss']
})
export class GroupLayoutComponent implements OnInit {

  icon?: string | null;
  name?: string | null;
  elements: any[] = [];

  private _uiSchema: any;

  level: number = 0;
  expanded: boolean = false;

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
    this.icon = get(this.uiSchema, 'options.icon', null);
  }

  get hasChildGroup(): boolean {
    // console.log("group elements:", this.elements)
    return some(this.elements, (it) => it.type === 'group-layout')
  }

  ngOnInit(): void {
  }

}
