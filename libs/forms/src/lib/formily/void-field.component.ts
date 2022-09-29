import {Component, forwardRef, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {FieldRef, FormRef2, VoidFieldProps} from "./types";
import {FormPathPattern, VoidField} from "@formily/core";

@Component({
  selector: 'ml-void-field',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {provide: FieldRef, useExisting: forwardRef(() => VoidFieldComponent)}
  ]
})
export class VoidFieldComponent extends FieldRef<any> implements OnInit {
  override field!: VoidField;

  @Input() props!: VoidFieldProps;

  constructor(private readonly formRef: FormRef2,
              @Optional() @SkipSelf() private parentRef?: FieldRef<any>) {
    super();
  }

  ngOnInit(): void {
    this.field = this.formRef.form.createVoidField({
      basePath: this.props.basePath ?? this.parentRef?.field.address,
      ...this.props
    })
  }

}
