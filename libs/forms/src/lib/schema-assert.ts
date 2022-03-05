import {FormProperty} from "./form.schema";
import {get, has, isArray, size} from "lodash-es";

export function isObjectSchema(schema: FormProperty): boolean {
  const {type} = schema;
  return type === 'object';
}

export function isArraySchema(schema: FormProperty): boolean {
  const {type} = schema;
  return type === 'array';
}

export function isFieldSchema(schema: FormProperty): boolean {
  const {type} = schema;
  return type !== 'array' && type !== 'object';
}

export function isEnumSchema(schema: FormProperty): boolean {
  return has(schema, 'enum') && isArray(get(schema, 'enum'));
}

export function isArrayOfPrimitivesSchema(schema: FormProperty) {
  if (!isArraySchema(schema)) {
    return ;
  }
  const items = get(schema, 'items');
  return isFieldSchema(items);
}

export function surmiseControlType(schema: FormProperty): string {
  if (!isFieldSchema(schema) && !isArrayOfPrimitivesSchema(schema)) {
    return get(schema, 'type');
  }

  if (isArrayOfPrimitivesSchema(schema)) {
    if (isEnumSchema(schema)) {
      const items = get(schema, 'enum');
      return size(items) >= 5 ? 'anyOf' : 'checkboxGroup';
    }
  }

  if (isEnumSchema(schema)) {
    const items = get(schema, 'enum');
    return size(items) >= 5 ? 'select' : 'radioGroup';
  }


  return get(schema, 'type');
}
