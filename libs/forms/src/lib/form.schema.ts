
export interface FormSchema extends ObjectProperty{
  rules: any;
}

export interface FormProperties {
  [key: string]: ObjectProperty | ArrayProperty | FieldProperty;
}

export interface FormProperty {
  // array: arrayOfPrimitives | arrayOfObjects | arrayOfEnums
  // oneOf: oneOf(Const | ‘title’) | oneOf | allOf | anyOf
  type: 'object' | 'array' | 'string' | 'boolean' | 'number' | 'bigint' | 'enum' | 'date' | 'time' | 'dataTime' |
        'oneOf';
  name?: string;
  ui?: any;
}

export interface ObjectProperty extends FormProperty{
  type: 'object';
  properties: FormProperties
}

export interface ArrayProperty extends FormProperty {
  type: "array",
  items: FormProperty;
  enum?: string[];
}

export interface FieldProperty extends FormProperty {
  type: 'string' | 'boolean' | 'number' | 'bigint' | 'enum' | 'date' | 'time' | 'dataTime' | 'oneOf';
  enum?: string[];
}

// type:  VerticalLayout | HorizontalLayout | Categorization | Group | Label
// Options
// Rules: 表单项之间的关联验证，如开始/结束时间
export type FormUISchema = UIContainerSchema;

export interface UISchema {
  type: string;
  options?: {
    [key: string]: any
  }
}

export interface UIContainerSchema extends UISchema {
  elements: (UIContainerSchema | FormItemSchema)[];
}

export interface FormItemSchema extends UISchema {
  $ref: string;
  controlType?: string;
}
