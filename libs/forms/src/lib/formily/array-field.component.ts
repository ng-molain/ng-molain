import {Component, forwardRef, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {ArrayField, FormPathPattern} from "@formily/core";
import {FieldRef, FormRef2, FieldProps} from "./types";

@Component({
  selector: 'ml-array-field',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {provide: FieldRef, useExisting: forwardRef(() => ArrayFieldComponent)}
  ]
})
export class ArrayFieldComponent extends FieldRef<any> implements OnInit {
  override field!: ArrayField;

  @Input() props!: FieldProps;

  constructor(private readonly formRef: FormRef2,
              @Optional() @SkipSelf() private parentRef?: FieldRef<any>) {
    super();
  }

  ngOnInit(): void {
    this.field = this.formRef.form.createArrayField({
      basePath: this.props.basePath ?? this.parentRef?.field.address,
      ...this.props
    })
  }

}
