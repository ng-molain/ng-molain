import {Directive, Input, TemplateRef} from "@angular/core";

@Directive({
  selector: "[mlFormControl]"
})
export class FormControlDirective{

  @Input("mlFormControl")
  name!: string;

  constructor(public templateRef: TemplateRef<any>) {
  }
}
