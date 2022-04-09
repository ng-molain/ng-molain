import {FormControlWidget} from "./form-control.widget";
import {Component} from "@angular/core";
import {get} from "lodash-es";

@Component({
  template: `
    <input type="text" nz-input [formControl]="formControl" [nzSize]="size" [placeholder]="placeholder">
  `
})
export class InputWidget extends FormControlWidget {

  get type() {
    return get(this.options, 'type', 'text');
  }
}
