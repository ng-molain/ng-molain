import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren, EventEmitter,
  Input,
  OnInit, Output,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {get, isEmpty, isFunction, some, isNumber, isString, has, isArray, omit} from "lodash-es";
import {SelectionModel} from "@angular/cdk/collections";
import {NzModalService} from "ng-zorro-antd/modal";
import {ColTplDirective} from "../col-tpl.directive";
import {CellContent, ColumnDef} from "../simple-table.typings";
import {Pageable, Pagination} from "../../pagination";

@Component({
  selector: 'ml-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss']
})
export class SimpleTableComponent implements OnInit, AfterContentInit {
  @Input() columns: ColumnDef[] = [];
  @Input() loading: boolean = false;
  @Input("data") _data: any[] | Pagination<any> = [];

  @Input() selectionMultiple: boolean = true;
  @Input() showSelectCol: boolean = true;
  @Input() selectTitle?: string = '选择'; // TODO 支持 TemplateRef
  selection?: SelectionModel<any>;
  @Input() showRowNumber: boolean = true;
  @Input() rowNumberTitle?: string = '序号'; // TODO 支持 TemplateRef
  @Input() rowNumberOffset: number = 0;

  @ContentChild("rowActions") rowActionsTpl?: TemplateRef<any>;
  @Input() rowActionsTitle?: string = '操作';
  @Input() rowActionsWith?: string;

  @ViewChild("displayColsModalContentTpl", {static: true}) displayColsModalContentTpl!: TemplateRef<any>;
  @Input()showTableSettingTools: boolean = true;
  @Input()hiddenWhenEmpty: boolean = false;
  @Input("noResult") noResultTpl?: TemplateRef<any>;
  @Input("noResultContent") noResultContentTpl?: string | TemplateRef<any> | null = '暂无数据';
  @Input("noResultFooter") noResultFooterTpl?: string | TemplateRef<any>;

  @ContentChildren(ColTplDirective) colTplList?: QueryList<ColTplDirective>;
  colTplMap?: Map<string, TemplateRef<any>>;

  @Output() switchPage = new EventEmitter<Pageable>();

  @ContentChild("groupActions") groupActionsTpl?: TemplateRef<any>;

  constructor(private modalService: NzModalService) {
  }

  get data(): any[] {
    return isArray(this._data) ? this._data : get(this._data, 'content', []);
  }

  get pageInfo(): Pagination | null {
    return isArray(this._data) ? null : omit(this._data, 'content') as Pagination;
  }

  get allChecked(): boolean {
    if (this.selection?.isEmpty() || isEmpty(this.data)) {
      return false;
    }
    return !some(this.data, it => !this.selection?.isSelected(it));
  }

  get indeterminateChecked(): boolean {
    if (this.selection?.isEmpty() || isEmpty(this.data)) {
      return false;
    }

    return some(this.data, it => !this.selection?.isSelected(it))
  }

  get displayCols(): ColumnDef[] {
    return this.columns.filter(it => !it.hidden);
  }

  get isEmpty(): boolean {
    return !this.data || this.data.length === 0;
  }

  ngOnInit(): void {
    this.selection = new SelectionModel(this.selectionMultiple);
  }

  ngAfterContentInit() {
    if (this.colTplList) {
      this.colTplMap = new Map<string, TemplateRef<any>>(this.colTplList.map(it => ([it.colKey, it.templateRef])));
    }
  }

  titleColTpl(col: ColumnDef) {
    const {name} = col;
    let titleTpl = null;
    // TODO 从contentChildren读取

    if (!titleTpl) {

    }
  }

  cellTpl(col: ColumnDef, row: any) {
    let cellTpl = null;
    // TODO 从contentChildren读取
    if (!cellTpl) {
      // 特殊或默认Tpl
    }
  }

  onRowClick($event: MouseEvent, row: any) {
    if ($event.shiftKey) {
      // TODO 选择区域
    }

    if ($event.ctrlKey && this.selection?.isMultipleSelection()) {
      this.selection?.toggle(row);
      return ;
    }

    this.selection?.clear();
    this.selection?.select(row);
  }

  onCheckboxChange($event: boolean, row: any) {
    if ($event) {
      this.selection?.select(row);
    } else {
      this.selection?.deselect(row);
    }
  }

  onRadioChange(row: any) {
    this.selection?.toggle(row);
  }

  selectAll() {
    this.selection?.select(...this.data);
  }

  clearSelection() {
    this.selection?.clear();
  }

  openCustomCols(mouseEvent?: MouseEvent, mode: 'modal' | 'popover' = 'popover') {
    if (mode === 'popover' && mouseEvent) {

    }

    this.modalService.create({
      nzTitle: '选择显示的列',
      nzContent: this.displayColsModalContentTpl,
      nzWidth: 256
    })
  }
}
