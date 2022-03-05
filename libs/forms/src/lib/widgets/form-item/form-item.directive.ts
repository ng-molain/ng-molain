import {Directive, Input, TemplateRef} from "@angular/core";

@Directive({
  selector: '[mlFormItem]'
})
export class FormItemDirective {

  @Input('mlFormItem') key!: string;

  constructor(public readonly templateRef: TemplateRef<any>) {
  }
}
