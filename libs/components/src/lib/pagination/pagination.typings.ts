import {isNumber} from "lodash-es";

export interface Pagination<T = any> {
  content?: T[] | undefined;
  readonly empty: boolean;
  readonly first: boolean;
  readonly last: boolean;
  number: number;   // page number
  readonly numberOfElements: number | undefined; // current page elements size
  size: number;
  sort?: any; // Sort order Items
  totalElements: number;
  readonly totalPages: number;
}

export interface Pageable {
  page: number;
  size: number;
}

export const PAGE_INDEX_START = 0;
export class Page<T = any> implements Pagination {
  public number: number;
  public size: number;
  public totalElements: number;
  public content?: T[];

  constructor(number: number, size: number, totalElements: number, content?: T[]) {
    this.number = number;
    this.size = size;
    this.totalElements = totalElements;
    this.content = content;
  }

  static of<T = any>(tpl: {number: number, size: number, totalElements: number, content?: T[]}): Page<T>
  static of<T = any>(number: number, size: number, totalElements: number, content?: T[]): Page<T>
  static of<T = any>(val: number | {number: number, size: number, totalElements: number, content?: T[]},
                     size?: number, totalElements?: number, content?: T[]): Page<T> {
    if (isNumber(val)) {
      const number = val;
      return new Page(number, size || 10, totalElements || 0, content);
    }
    const {number, size: _size, totalElements: _totalElements, content: _content} = val;
    return new Page<T>(number, _size, _totalElements, _content);
  }

  get empty(): boolean {
    return !(this.totalElements > 0);
  }

  get first(): boolean {
    return this.number == PAGE_INDEX_START;
  }

  get last(): boolean {
    return this.number + 1 == this.totalPages;
  }

  get numberOfElements(): number | undefined {
    return Array.isArray(this.content) ? this.content.length : undefined;
  }

  get totalPages(): number {
    return this.size > 0 && this.totalElements >= 0 ? Math.ceil(this.totalElements / this.size) : 0;
  }
}
