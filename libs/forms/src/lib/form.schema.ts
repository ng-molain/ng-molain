
export interface FormSchema {
  properties: FormProperties
  rules: any;
}

export interface FormProperties {
  [key: string]: FormProperty
}

export interface FormProperty {
  // array: arrayOfPrimitives | arrayOfObjects | arrayOfEnums
  // oneOf: oneOf(Const | ‘title’) | oneOf | allOf | anyOf
  type: 'string' | 'boolean' | 'number' | 'bigint' | 'array' | 'object' | 'enum' | 'date' | 'time' | 'dataTime';
}

// type:  VerticalLayout | HorizontalLayout | Categorization | Group | Label
// Options
// Rules: 表单项之间的关联验证，如开始/结束时间
export interface FormUISchema {
  type: string;
  elements: any[];
  scope: string; // ref to property
}

