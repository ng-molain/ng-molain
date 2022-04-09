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

export type RenderFn = (row: any, col: ColumnDef) => number | string | CellContent;

export interface CellContent {
  isTag?: boolean;
  text: number | string | boolean;
  color?: string;
}


// TODO BOOLEAN map
export function enumTransformer(enumeration: {[key: string]: number | string | CellContent}): RenderFn {
  return (row: any, col: ColumnDef) => {
    const {name} = col;
    const cellValue = get(row, name);
    return get(enumeration, cellValue, cellValue);
  }
}
