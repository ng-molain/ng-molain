import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[mlColTpl]'
})
export class ColTplDirective {
  @Input('mlColTpl') public colKey!: string;

  constructor(public readonly templateRef: TemplateRef<any>) {

  }

}
