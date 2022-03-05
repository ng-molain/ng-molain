import {ArrayProperty, FieldProperty, FormItemSchema, FormUISchema, ObjectProperty} from "./form.schema";
import {get, map, size} from "lodash-es";
import {isArrayOfPrimitivesSchema, isFieldSchema, isObjectSchema} from "./schema-assert";

export function  generateUiSchema(p: ObjectProperty | ArrayProperty | FieldProperty,
  path: string[]): FormUISchema | FormItemSchema | undefined {
  if (isObjectSchema(p)) {
    const properties = (p as ObjectProperty).properties;
    const elements = map(properties, (v, k) => generateUiSchema(v, [...path, k]))
      .filter(it => it !== undefined) as any;
    return (size(path) === 0 ? {
      type: 'vertical-layout',
      elements: elements

    } : {
      type: 'object',
      $ref: path.join('.'),
      options: {
        layout: 'vertical-layout'
      },
      elements: elements
    });
  }

  // TODO isArrayOfObject ...

  if (isFieldSchema(p) || isArrayOfPrimitivesSchema(p)) {
    return ({
      type: 'control',
      $ref: path.join('.'),
      controlType: get(p, 'ui.controlType', undefined)
    });
  }

  return;
}
