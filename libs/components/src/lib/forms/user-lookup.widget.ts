import {FormControlWidget} from "./form-control.widget";
import {Component} from "@angular/core";
import {get} from "lodash-es";

@Component({
  template: `
    <ml-user-lookup
      [formControl]="formControl"
      [size]="size"
      [placeholder]="placeholder"
      [isMultiple]="isMultiple"
      [allowClear]="allowClear"
      class="w-full"
    ></ml-user-lookup>
  `
})
export class UserLookupWidget extends FormControlWidget {

  get isMultiple() {
    return get(this.options, 'isMultiple', false);
  }

  get allowClear() {
    return get(this.options, 'allowClear', true);
  }

  override get placeholder() {
    return get(this.options, 'allowClear', '输入用户属性搜索');
  }
}
