import {NzFormLayoutType} from "ng-zorro-antd/form";
import {InjectionToken, Type} from "@angular/core";
import {Field, Form, GeneralField, IFieldFactoryProps, IVoidFieldFactoryProps} from "@formily/core";
import {NzModalRef} from "ng-zorro-antd/modal";
import {ISchema, Schema, SchemaKey} from "@formily/json-schema";

export class FieldRef<T> {
  field!: GeneralField;
  // field!: Field;
}

export class FormRef2 {
  form!: Form;
}

export class SchemaFieldRef {
  schema!: Schema;
}

export const DECORATOR_PROPS = new InjectionToken<any>("DECORATOR_PROPS");
export const COMPONENT_PROPS = new InjectionToken<any>("COMPONENT_PROPS");

export interface ISchemaMapper {
  (schema: Schema, name: SchemaKey): Schema
}

export interface ISchemaFilter {
  (schema: Schema, name: SchemaKey): boolean
}

export class SchemaContext {
  schema!: Schema;
  get components(): { [key: string]: Type<any> } {
    return {};
  }
}

export interface SchemaFieldProps extends Omit<IFieldFactoryProps<any, any>, 'name'> {
  schema?: ISchema;
  components: {
    [key: string]: Type<any>
  };
  scope?: any;
  name?: SchemaKey
}

export interface FieldProps extends IFieldFactoryProps<any, any> {
  decorator?: [] | [Type<any>] | [Type<any>, any];
  component?: [] | [Type<any>] | [Type<any>, any];
}

export interface VoidFieldProps extends IVoidFieldFactoryProps<any, any> {
  decorator?: [] | [Type<any>] | [Type<any>, any];
  component?: [] | [Type<any>] | [Type<any>, any];
}











export interface IFormLayoutProps {
  prefixCls?: string
  className?: string
  style?:  any; //React.CSSProperties
  colon?: boolean
  labelAlign?: 'right' | 'left' | ('right' | 'left')[]
  wrapperAlign?: 'right' | 'left' | ('right' | 'left')[]
  labelWrap?: boolean
  labelWidth?: number
  wrapperWidth?: number
  wrapperWrap?: boolean
  labelCol?: number | number[]
  wrapperCol?: number | number[]
  fullness?: boolean
  size?: 'small' | 'default' | 'large'
  layout?: NzFormLayoutType;
    // | 'vertical'
    // | 'horizontal'
    // | 'inline'
    // | ('vertical' | 'horizontal' | 'inline')[]
  direction?: 'rtl' | 'ltr'
  inset?: boolean
  shallow?: boolean
  tooltipLayout?: 'icon' | 'text'
  tooltipIcon?: any; // React.ReactNode
  feedbackLayout?: 'loose' | 'terse' | 'popover' | 'none'
  bordered?: boolean
  breakpoints?: number[]
  spaceGap?: number
  gridColumnGap?: number
  gridRowGap?: number
}
