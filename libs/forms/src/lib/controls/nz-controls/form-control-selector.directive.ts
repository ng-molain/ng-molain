import {Directive, Input, TemplateRef} from "@angular/core";

/**
 * @deprecated
 */
// @Directive({
//   selector: "[mlFormControl]"
// })
export class FormControlSelectorDirective {

  @Input("mlFormControl")
  name!: string;

  constructor(public templateRef: TemplateRef<any>) {
  }
}
