import {FormControlWidget} from "./form-control.widget";
import {Component} from "@angular/core";
import {get} from "lodash-es";

@Component({
  template: `
    <nz-input-number [formControl]="formControl" [nzSize]="size" [nzPlaceHolder]="placeholder"></nz-input-number>
  `
})
export class InputNumberWidget extends FormControlWidget {

}
