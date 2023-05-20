import {Directive, Input, OnInit} from "@angular/core";
import {CellContent, ColumnDef} from "./simple-table.typings";
import {get, has, isBoolean, isEmpty, isFunction, isNumber, isString} from "lodash-es";

@Directive({
  selector: '[mlCellValue]',
  exportAs: "mlCellValue"
})
export class CellValueDirective implements OnInit {
  private _text?: CellContent | null;

  @Input("mlCellValueCol") col!: ColumnDef;
  @Input("mlCellValueRow") row!: any;

  get value(): CellContent | undefined | null {
    return this._text;
  }

  get isTag(): boolean {
    return get(this.value, 'isTag', false);
  }

  get isLink(): boolean {
    return this.isHrefLink || this.isRouterLink || this.isOnClickLink;
  }

  get isRouterLink(): boolean {
    const link = get(this.value, 'link');
    return !!link && (Array.isArray(link) || isString(link)) && !this.isHrefLink;
  }

  get isHrefLink(): boolean {
    const link = get(this.value, 'link');
    return !!link && isString(link) && (link.startsWith('//') || link.startsWith('http'));
  }

  get isOnClickLink(): boolean {
    if (this.isRouterLink || this.isHrefLink) {
      return false;
    }
    return isFunction(get(this.col, 'onClick'));
  }

  get link(): any[] | string {
    return get(this.value, 'link') as (any[] | string);
  }

  get linkTarget(): string | undefined {
    return get(this.value, 'linkTarget');
  }

  get text(): any {
    return get(this.value, 'text');
  }

  get hasText(): any {
    return !isEmpty(this.text) || isNumber(this.text);
  }

  get color(): string | undefined | null {
    return get(this.value, 'color');
  }

  ngOnInit() {
    if (!this.col || !this.row) {
      return;
    }
    this._text = this.cellValue(this.col, this.row);
  }

  private cellValue(col: ColumnDef, row: any): CellContent | null {
    const {name, defaultValue, render, linkTo} = col;
    if (!name && !render) {
      return null;
    }

    let value = null;
    const _getter = render || name;
    if (isFunction(_getter)) {
      value = _getter(row, col);
    } else {
      value = get(row, name, defaultValue);
    }

    let link = null;
    if (isFunction(linkTo)) {
      link = linkTo(row, col);
    }

    if (isBoolean(value)) {
      return {
        text: value ? '是' : '否',
        link
      };
    }

    if (has(value, 'text')) {
      if (has(value, 'link')) {
        return value;
      } else {
        return {
          ...value,
          link
        }
      }
    }

    return {
      text: value,
      link
    };
  }
}
