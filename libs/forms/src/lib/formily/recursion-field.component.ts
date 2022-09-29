import {Component, Input, OnChanges, OnInit, Optional, SimpleChanges} from '@angular/core';
import {ISchema, Schema, SchemaKey} from "@formily/json-schema";
import {FormPathPattern, GeneralField} from "@formily/core";
import {FieldRef, ISchemaFilter, ISchemaMapper, SchemaContext} from "@ng-molain/forms";
import {isFunction, isMatch, isNil} from "lodash-es";
import {FieldProps, VoidFieldProps} from "./types";

@Component({
  selector: 'ml-recursion-field',
  template: `
    <ng-container *ngIf="!isNilName && isObjectField && !onlyRenderProperties">
      <ml-object-field #of [props]="fieldProps">
        <ng-container *ngTemplateOutlet="propertiesTpl; context: {$implicit: of.field}"></ng-container>
      </ml-object-field>
    </ng-container>

    <ng-container *ngIf="!isNilName && isArrayField">
      <ml-array-field [props]="fieldProps"></ml-array-field>
    </ng-container>

    <ng-container *ngIf="!isNilName && isVoidField && !onlyRenderProperties">
      <ml-void-field #vf [props]="fieldProps">
        <ng-container *ngTemplateOutlet="propertiesTpl; context: {$implicit: vf.field}"></ng-container>
      </ml-void-field>
    </ng-container>

    <ng-container *ngIf="isNilName || (onlyRenderProperties && (isObjectField || isVoidField))">
      <ng-container *ngTemplateOutlet="propertiesTpl"></ng-container>
    </ng-container>

    <ng-container *ngIf="isNormalField">
      <ml-field [props]="fieldProps"></ml-field>
    </ng-container>

    <ng-template #propertiesTpl let-field>
      <ng-container *ngFor="let item of properties; index as index">
        <ml-recursion-field
          [schema]="item.schema"
          [name]="item.name"
          [basePath]="getBasePath(field)"
        ></ml-recursion-field>
      </ng-container>
    </ng-template>
  `,
  styles: []
})
export class RecursionFieldComponent implements OnInit, OnChanges {

  @Input() schema?: ISchema;
  @Input() name?: SchemaKey; // 实际不是必须的
  @Input() basePath?: FormPathPattern;

  @Input() onlyRenderProperties?: boolean;
  @Input() onlyRenderSelf?: boolean;
  @Input() mapProperties?: ISchemaMapper;
  @Input() filterProperties?: ISchemaFilter;

  fieldSchema?: Schema;
  fieldProps!: FieldProps | VoidFieldProps;
  properties?: { schema: Schema, name: SchemaKey }[];

  constructor(@Optional() private parentRef?: FieldRef<any>) {
  }

  get isObjectField(): boolean {
    return !!this.fieldSchema && isMatch(this.fieldSchema, {type: 'object'});
  }

  get isArrayField(): boolean {
    return !!this.fieldSchema && isMatch(this.fieldSchema, {type: 'array'});;
  }

  get isVoidField(): boolean {
    return !!this.fieldSchema && isMatch(this.fieldSchema, {type: 'void'});;
  }

  get isNormalField(): boolean {
    return !!this.fieldSchema && !this.isObjectField && !this.isArrayField && !this.isVoidField && !this.isNilName;
  }

  get isNilName(): boolean {
    return isNil(this.name);
  }

  getFieldProps(): FieldProps | VoidFieldProps {
    return {
      name: this.name,
      basePath: this.basePath ?? this.parentRef?.field.address,
      ...this.fieldSchema?.toFieldProps() // TODO option param scope
    } as any;
  }

  getProperties(): { schema: Schema, name: SchemaKey }[] {
    const properties = Schema.getOrderProperties(this.fieldSchema);
    return properties.map(({schema: item, key: name}, index) => {
      let schema: Schema = item;
      if (isFunction(this.mapProperties)) {
        const mapped = this.mapProperties(item, name);
        if (mapped) {
          schema = mapped;
        }
      }
      return {schema, name};
    }).filter(({schema, name}) => {
      if (isFunction(this.filterProperties)) {
        return this.filterProperties(schema, name);
      }
      return true;
    });
  }

  getBasePath(field?: GeneralField) {
    return field?.address || this.basePath;
  }

  ngOnInit(): void {
    if (this.schema) {
      this.fieldSchema = Schema.isSchemaInstance(this.schema) ? this.schema : new Schema(this.schema);

      this.fieldProps = this.getFieldProps();
      this.properties = this.getProperties();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const {schema} = changes;
    if (schema && schema.currentValue && schema.isFirstChange()) {
      // this.fieldSchema = new Schema(schema.currentValue);
      // console.log("updated schema", this.fieldSchema.toJSON())
    }
  }

}
