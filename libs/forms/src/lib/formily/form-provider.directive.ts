import {ApplicationModule, Component, Directive, forwardRef, Inject, Input, OnInit, Self, Type} from '@angular/core';
import {Form} from "@formily/core";
import {FormRef2, IFormLayoutProps} from "./types";

@Directive({
  selector: '[mlFormProvider]',
  providers: [
    {provide: FormRef2, useExisting: forwardRef(() => FormProviderDirective)}
  ]
})
export class FormProviderDirective extends FormRef2 implements OnInit{

  @Input("mlFormProvider")
  override form!: Form;

  @Input()
  layout?: IFormLayoutProps;

  @Input()
  components: Map<string, Type<any>> = new Map<string, Type<any>>();

  // constructor(@Self() public readonly nzForm: NzFormDirective) { }

  ngOnInit(): void {
    // this.nzForm.nzLayout = this.layout?.layout || 'vertical';
    // this.nzForm.nzAutoTips = false;
    // this.nzForm.nzConfigService
    // this.nzForm.nzNoColon = !this.layout?.colon;
    // this.nzForm.nzDisableAutoTips = false;
    // this.nzForm.nzTooltipIcon
  }

  getComponent(key: string): Type<any> {
    return this.components.get(key) || NoopComponent;
  }

}

@Component({
  template: `<div>noop</div>`
})
export class NoopComponent {}
