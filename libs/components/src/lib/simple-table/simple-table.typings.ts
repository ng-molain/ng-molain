import {get} from "lodash-es";
import {TemplateRef} from "@angular/core";

export interface ColumnDef {
  title: string | null,
  name: string;
  render?: number | string | CellContent | RenderFn;
  hidden?: boolean;
  pinLeft?: boolean;
  pinRight?: boolean;
  defaultValue?: any;

  sortable?: boolean;
  linkTo?: LinkFn;
  onClick?: OnClickFn;

  width?: string;

  tooltip?: string | TemplateRef<any>;
}

export interface CellContent {
  isTag?: boolean;
  text: number | string | boolean;
  color?: string;
  link?: any[] | string | null;
  linkTarget?: string;
}

export type CellValue = number | string | CellContent;

export type RenderFn = (row: any, col: ColumnDef) => CellValue;

export type LinkFn = (row: any, col: ColumnDef) => string | any[] | undefined | null;

export type OnClickFn = (row: any, col: ColumnDef, cellValue: CellContent | null | undefined, event: MouseEvent) => void;


// TODO BOOLEAN map
export function enumTransformer(enumeration: {[key: string]: CellValue}): RenderFn {
  return (row: any, col: ColumnDef) => {
    const {name} = col;
    const cellValue = get(row, name);
    return get(enumeration, cellValue, cellValue);
  }
}

export function booleanTransformer(valueMapping: {truly: CellValue, falsely: CellValue}) {
  return (row: any, col: ColumnDef) => {
    const {name, defaultValue} = col;
    const cellValue = get(row, name) ? 'truly' : 'falsely';
    return get(valueMapping, cellValue, defaultValue || cellValue);
  }
}
