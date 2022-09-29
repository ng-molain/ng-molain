import {
  AfterContentInit,
  AfterViewInit,
  Component, ComponentRef, forwardRef, Inject, Injector,
  Input, OnDestroy,
  OnInit, Optional, SkipSelf,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {FormProviderDirective} from "./form-provider.directive";
import {CdkPortalOutlet, ComponentPortal} from "@angular/cdk/portal";
import {COMPONENT_PROPS, DECORATOR_PROPS, FieldRef, FormRef2, FieldProps} from "./types";
import {Field, Form, FormPathPattern} from "@formily/core";
import {get} from "lodash-es";
import {InputBoolean} from "ng-zorro-antd/core/util";

@Component({
  selector: 'ml-field',
  template: `
    <ml-reactive-field *ngIf="field" [field]="field">
      <ng-content></ng-content>
    </ml-reactive-field>
  `,
  providers: [
    {provide: FieldRef, useExisting: forwardRef(() => FieldComponent)}
  ]
})
export class FieldComponent extends FieldRef<FieldComponent> implements OnInit {

  override field!: Field;

  @Input() props!: FieldProps;

  constructor(private formRef: FormRef2,
              @Optional() @SkipSelf() private parentRef?: FieldRef<any>) {
    super();
  }


  ngOnInit(): void {
    this.field = this.formRef.form.createField({
      basePath: this.props.basePath ?? this.parentRef?.field.address,
      ...this.props
    });

    console.log("Field", this.field)
  }

}
