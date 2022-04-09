import {FormControlWidget} from "./form-control.widget";
import {Component} from "@angular/core";
import {get} from "lodash-es";

@Component({
  template: `
    <ml-org-unit-lookup
      [formControl]="formControl"
      [size]="size"
      [placeholder]="placeholder"
      [isMultiple]="isMultiple"
      [allowClear]="allowClear"
      class="w-full"
    ></ml-org-unit-lookup>
  `
})
export class OrgUnitLookupWidget extends FormControlWidget {
  get isMultiple() {
    return get(this.options, 'isMultiple', false);
  }

  get allowClear() {
    return get(this.options, 'allowClear', true);
  }

  override get placeholder() {
    return get(this.options, 'allowClear', '选择组织/单位');
  }
}
