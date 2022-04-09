import {Component, Input} from "@angular/core";
import {AbstractControl, FormControl} from "@angular/forms";
import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {get} from "lodash-es";

@Component({template: ''})
export class FormControlWidget {
  @Input() formControl!: FormControl;
  @Input() options: any;

  get size() {
    return get(this.options, 'size', 'default');
  }

  get placeholder(): string {
    return get(this.options, 'placeholder', '');
  }
}
