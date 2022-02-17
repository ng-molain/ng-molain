import {Directive, Input} from "@angular/core";

@Directive()
export class FormWidget {

  @Input() formItem: any;

}
