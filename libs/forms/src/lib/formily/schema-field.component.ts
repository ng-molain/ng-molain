import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {Schema} from "@formily/json-schema";
import {SchemaContext, SchemaFieldProps, SchemaFieldRef} from "./types";

@Component({
  selector: 'ml-schema-field',
  template: `
<!--    <ml-markup-field [props]="schema" *ngIf="!props.schema">-->
<!--      <ng-content></ng-content>-->
<!--    </ml-markup-field>-->
    <ng-container *ngIf="!props.schema">
      <ng-content></ng-content>
    </ng-container>
    <ml-recursion-field
      [schema]="schema"
      [name]="props.name"
      [basePath]="props.basePath"
    ></ml-recursion-field>
  `,
  providers: [
    {provide: SchemaContext, useExisting: forwardRef(() => SchemaFieldComponent)}
  ]
})
export class SchemaFieldComponent extends SchemaContext implements OnInit {

  @Input() props!: SchemaFieldProps;

  override schema!: Schema;

  constructor() {
    super();
  }

  override get components() {
    return this.props.components;
  }

  ngOnInit(): void {
    const schema = Schema.isSchemaInstance(this.props.schema) ? this.props.schema : new Schema({
      type: 'object',
      ...this.props.schema
    });

    this.schema = schema;
  }

}
