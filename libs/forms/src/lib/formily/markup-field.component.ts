import {Component, forwardRef, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {ISchema, Schema, SchemaKey, SchemaTypes} from "@formily/json-schema";
import {get} from "lodash-es";
import {SchemaContext, SchemaFieldRef} from "./types";

const env = {
  nonameId: 0,
}

const getRandomName = () => {
  return `NO_NAME_FIELD_$${env.nonameId++}`
}

@Component({
  selector: 'ml-markup-field',
  template: `
    <ng-content></ng-content>
  `,
  providers: [
    {provide: SchemaFieldRef, useExisting: forwardRef(() => MarkupFieldComponent)}
  ]
})
export class MarkupFieldComponent extends SchemaFieldRef implements OnInit {

  @Input() props!: ISchema;

  override schema!: Schema;

  constructor(private schemaContext: SchemaContext,
              @Optional() @SkipSelf() private parentRef?: SchemaFieldRef) {
    super();
  }

  get parent(): Schema | undefined {
    return this.parentRef?.schema ?? this.schemaContext.schema;
  }

  get type(): SchemaTypes {
    return get(this.props, 'type', 'string');
  }

  get name(): SchemaKey {
    return get(this.props, 'name', getRandomName());
  }

  ngOnInit(): void {
    // console.log(this.props.name, this.parentRef?.schema.name, this.parentRef?.schema.type)

    if (this.parent) {
      const parent = this.parent;
      if (parent.type === 'object' || parent.type === 'void') {
        this.schema = this.parent.addProperty(this.name, this.props);
      } else if (parent.type === 'array') {
        const items = this.parent.items as Schema;
        if (items && items.name !== this.name) {
          this.schema = this.parent.addProperty(this.name, this.props);
        } else {
          const _schema = this.parent.setItems(this.props);
          this.schema = Array.isArray(_schema) ? _schema[0] : _schema;
        }
      }

      // console.log(this.parent.toJSON(true));
    }
    // fill this schema
  }

}
