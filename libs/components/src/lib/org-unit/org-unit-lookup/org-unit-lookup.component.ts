import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input, OnChanges,
  OnInit,
  Renderer2, SimpleChanges,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {isArray, isEmpty as _isEmpty} from "lodash-es";
import {OrgUnitLookupService} from "../org-unit-lookup.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {SelectionModel} from "@angular/cdk/collections";
import {InputBoolean} from "ng-zorro-antd/core/util";

@Component({
  selector: 'ml-org-unit-lookup',
  templateUrl: './org-unit-lookup.component.html',
  styleUrls: ['./org-unit-lookup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => OrgUnitLookupComponent), multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class OrgUnitLookupComponent implements OnInit, OnChanges, ControlValueAccessor {
  @HostBinding('class.org-unit-lookup')
  __hostStyle = true;

  @Input() @InputBoolean() isMultiple: boolean = false;
  @Input() allowClear: boolean = false;
  @Input() size: 'large' | 'small' = 'small';
  @Input() maxTagCount: number = 3;
  @Input() maxTagPlaceholder?: TemplateRef<{$implicit: any[]}>;
  @Input() placeholder: string = "请选择组织";
  @Input() pickId: boolean = true;

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  private _disabled: boolean = false;

  _initialValue: any;
  selection!: SelectionModel<any>; // = new SelectionModel<any>(false);

  private _modalRef?: NzModalRef;

  onChange = (_: any) => {};
  onTouched = (_: any) => {};


  @HostBinding('class.ant-select-enabled')
  get bindEnabledStyleClass() {
    return !this.disabled;
  }

  @HostBinding('class.ant-select-disabled')
  get bindDisabledStyleClass() {
    return this.disabled;
  }

  @HostBinding('class.ant-select-allow-clear')
  get bindAllowClearStyleClass() {
    return this.allowClear;
  }

  @HostBinding('class.ant-select-lg')
  get bindLgSizeStyleClass() {
    return this.size === 'large';
  }

  @HostBinding('class.ant-select-sm')
  get bindSmSizeStyleClass() {
    return this.size === 'small';
  }

  get isEmpty(): boolean {
    return this.selection.isEmpty();
  }


  @HostListener("click")
  onClick() {
    this._openLookupDialog();
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private userGroupLookupService: OrgUnitLookupService
  ) {
    this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
    this._updateSelectionModel();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isMultipleChange = changes['isMultiple'];
    if (isMultipleChange) {
      this._updateSelectionModel();
    }
  }

  _updateSelectionModel() {
    const preSelection = this.selection;
    if (!!preSelection && !!this.isMultiple === preSelection.isMultipleSelection()) {
      return ;
    }
    this.selection = new SelectionModel<any>(this.isMultiple);
    if (preSelection) {
      this.selection.select(...preSelection.selected);
      preSelection.changed.complete();
    }

    this.selection.changed.subscribe(
      (selectionChange) => {
        const {source, added, removed} = selectionChange;
        const value = this.isMultiple ? source.selected : (source.hasValue() ? source.selected[0] : null);
        this.onChange(value);
      }
    );
  }

  displayWith(item?: any) {
    return item.name;
  }

  trackNode(_index: number, item: any) {
    return item.key;
  }

  private _openLookupDialog() {
    if (this.disabled || (!!this._modalRef)) {
      return;
    }
    const modalRef = this._modalRef = this.userGroupLookupService.openLookup({
      isMultiple: this.isMultiple,
      onOk: (_result) => {
        const selectedNodes = _isEmpty(_result) ? [] : (isArray(_result) ? [..._result] : [_result]);

        this.selection.clear();
        this.selection.select(...selectedNodes);
      }
    });
    modalRef.afterClose.subscribe((_) => {
      this._modalRef = undefined;
    });
  }

  removeSelected(item: any, b: boolean, $event: MouseEvent) {

  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  writeValue(obj: any): void {
    const value = this._initialValue = obj;
    if (!_isEmpty(value)) {
      this.selection.select(...(isArray(value) ? value : [value]));
    }
  }
}
