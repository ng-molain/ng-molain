import {Directive, Input, OnInit} from "@angular/core";
import {CellContent, ColumnDef} from "./simple-table.typings";
import {get, has, isEmpty, isFunction} from "lodash-es";

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

  get text(): any {
    return get(this.value, 'text');
  }

  get hasText(): any {
    return !isEmpty(this.text);
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

  private cellValue(col: any, row: any): CellContent | null {
    const {name, defaultValue, render} = col;
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

    if (has(value, 'text')) {
      return value;
    }

    return {
      text: value
    };
  }
}
