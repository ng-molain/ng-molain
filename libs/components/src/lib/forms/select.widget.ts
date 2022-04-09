import {FormControlWidget} from "./form-control.widget";
import {Component} from "@angular/core";
import {get} from "lodash-es";

@Component({
  template: `
    <nz-select [formControl]="formControl" [nzSize]="size" [nzPlaceHolder]="placeholder">
      <nz-option *ngFor="let item of selectOptions" [nzValue]="item.value" [nzLabel]="item.label"></nz-option>
    </nz-select>
  `
})
export class SelectWidget extends FormControlWidget {

  get selectOptions(): {value: any, label: string} {
    return get(this.options, 'selectOptions', [])
  }

}
