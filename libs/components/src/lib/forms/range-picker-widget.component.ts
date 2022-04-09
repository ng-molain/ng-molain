import {FormControlWidget} from "./form-control.widget";
import {Component} from "@angular/core";
import {get} from "lodash-es";

@Component({
  template: `
    <nz-range-picker
      [formControl]="formControl"
      [nzSize]="size"
      [nzPlaceHolder]="placeholder"
    ></nz-range-picker>
  `
})
export class RangePickerWidget extends FormControlWidget {

}
