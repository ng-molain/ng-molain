import {get} from "lodash-es";

export interface ColumnDef {
  title: string | null,
  name: string;
  render?: number | string | CellContent | RenderFn;
  hidden?: boolean;
  pinLeft?: boolean;
  pinRight?: boolean;
  defaultValue?: any;

  sortable?: boolean;
}

export interface CellContent {
  isTag?: boolean;
  text: number | string | boolean;
  color?: string;
}

export type CellValue = number | string | CellContent;

export type RenderFn = (row: any, col: ColumnDef) => CellValue;


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
