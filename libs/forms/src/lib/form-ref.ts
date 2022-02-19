import {
  ArrayProperty,
  FieldProperty,
  FormProperties,
  FormProperty,
  FormSchema,
  FormUISchema,
  ObjectProperty
} from "./form.schema";
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {each, get, has, isArray, isEmpty, isEqual, isString, map, size, toLower} from "lodash-es";

export class FormRef {

  readonly rootControl: FormGroup;
  public uiSchema!: FormUISchema;
  public formSchema!: FormSchema;


  // constructor(public readonly formSchema: FormSchema,
  //             public readonly uiSchema: FormUISchema,
  //             rootControl: FormGroup = new FormGroup({})) {
  //   this.rootControl = rootControl;
  //   this.generateFormControl(this.rootControl, formSchema.properties)
  // }

  constructor(protected fb: FormBuilder) {
    this.rootControl = fb.group({});
  }

  protected onInit(uiSchema: FormUISchema, formSchema: FormSchema) {
    this.uiSchema = uiSchema;
    this.formSchema = formSchema;

    this.generateFormControl(this.rootControl, formSchema.properties);
    console.log("controls", (this.rootControl).controls);
  }


  private generateFormControl(parent: FormGroup, properties: FormProperties) {
    each(properties, (property, key) => {
      if (this.isObjectSchema(property)) {
        const control = new FormGroup({});
        parent.addControl(key, control);

        const {properties} = property as ObjectProperty;
        this.generateFormControl(control, properties);

        return control;
      } else if (this.isArraySchema(property) && !this.isArrayOfPrimitivesSchema(property)) {
        const control = new FormArray([]);

        parent.addControl(key, control);
        // TODO formArray的子控制器只能根据值动态生成
        return control;
      } else {
        const control = new FormControl();
        parent.addControl(key, control);
        return control;
      }
    });

    // TODO patch validators
  }

  getControl(path: (string | number)[] | string): AbstractControl | null {
    return this.rootControl.get(path);
  }

  getProperty(path: string[]|string): ObjectProperty | ArrayProperty | FieldProperty | undefined {
    const _path = isString(path) ? path.split('.') : path;
    return this._getProperty(this.formSchema, _path);
  }

  // TODO user json-refs
  private _getProperty(schema: ObjectProperty | ArrayProperty, path: string[]): ObjectProperty | ArrayProperty | FieldProperty | undefined {
    if (isEmpty(path)) {
      return ;
    }

    const key = path.shift();
    if (!key) {
      return ;
    }

    let p;

    if (this.isObjectSchema(schema)) {
      p = get(schema, ['properties', key]);
    }
    if (this.isArraySchema(schema)) {
      p = get(schema, ['items', key]);
    }

    if (isEmpty(path)) {
      return p;
    }

    if (this.isObjectSchema(p) || this.isArraySchema(p)) {
      return this._getProperty(p, path);
    }

    return ;
  }

  isObjectSchema(schema: FormProperty): boolean {
    const {type} = schema;
    return type === 'object';
  }

  isArraySchema(schema: FormProperty): boolean {
    const {type} = schema;
    return type === 'array';
  }

  isFieldSchema(schema: FormProperty): boolean {
    const {type} = schema;
    return type !== 'array' && type !== 'object';
  }

  isEnumSchema(schema: FormProperty): boolean {
    return has(schema, 'enum') && isArray(get(schema, 'enum'));
  }

  isArrayOfPrimitivesSchema(schema: FormProperty) {
    if (!this.isArraySchema(schema)) {
      return ;
    }
    const items = get(schema, 'items');
    return this.isFieldSchema(items);
  }

  surmiseControlType(schema: FormProperty): string {
    if (!this.isFieldSchema(schema) && !this.isArrayOfPrimitivesSchema(schema)) {
      return get(schema, 'type');
    }

    if (this.isArrayOfPrimitivesSchema(schema)) {
      if (this.isEnumSchema(schema)) {
        const items = get(schema, 'enum');
        return size(items) >= 5 ? 'anyOf' : 'checkboxGroup';
      }
    }

    if (this.isEnumSchema(schema)) {
      const items = get(schema, 'enum');
      return size(items) >= 5 ? 'select' : 'radioGroup';
    }


    return get(schema, 'type');
  }

}


