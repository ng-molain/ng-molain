import {Component, forwardRef, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {FieldRef, FormRef2, FieldProps} from "./types";
import {FormPathPattern, ObjectField} from "@formily/core";

@Component({
  selector: 'ml-object-field',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {provide: FieldRef, useExisting: forwardRef(() => ObjectFieldComponent)}
  ]
})
export class ObjectFieldComponent extends FieldRef<any> implements OnInit {

  override field!: ObjectField;
  @Input() props!: FieldProps;

  constructor(private readonly formRef: FormRef2,
              @Optional() @SkipSelf() private parentRef?: FieldRef<any>) {
    super();
  }

  get keys(): string[] {
    return Object.keys(this.field.value || {});
  }

  ngOnInit(): void {
    this.field = this.formRef.form.createObjectField({
      basePath: this.props.basePath ?? this.parentRef?.field.address,
      ...this.props
    })
  }


}
