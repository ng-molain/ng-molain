import {
  Component,
  ElementRef,
  forwardRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  TemplateRef
} from '@angular/core';
import {NzModalRef} from "ng-zorro-antd/modal";
import {isArray, isEmpty as _isEmpty} from "lodash-es";
import {OrgUnitLookupService} from "../org-unit-lookup.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'ml-org-unit-lookup',
  templateUrl: './org-unit-lookup.component.html',
  styleUrls: ['./org-unit-lookup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => OrgUnitLookupComponent), multi: true
  }]
})
export class OrgUnitLookupComponent implements OnInit, ControlValueAccessor {

  @Input() isMultiple: boolean = false;
  @Input() allowClear: boolean;
  @Input() size: 'large' | 'small';
  @Input() maxTagCount: number;
  @Input() maxTagPlaceholder: TemplateRef<{$implicit: any[]}>;
  @Input() placeholder: string = "请选择组织";
  @Input() pickId: boolean = true;

  @Input()
  set disabled(value: boolean) {
    this._disabled = value;
  }
  get disabled(): boolean {
    return this._disabled;
  }
  private _disabled: boolean;

  value;

  selectedNodes: any[] = [];

  private _modalRef: NzModalRef;

  onChange = (_) => {};
  onTouched = (_) => {};


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
    // return _isEmpty(this.value);
    return _isEmpty(this.selectedNodes);
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
  }

  ngOnInit() {
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
        this.selectedNodes = _isEmpty(_result) ? [] : (isArray(_result) ? [..._result] : [_result]);

        if (this.isMultiple) {
          this.onChange(this.selectedNodes);
        } else if (!_isEmpty(this.selectedNodes)){
          this.onChange(this.selectedNodes[0]);
        } else {
          this.onChange(null);
        }
      }
    });
    modalRef.afterClose.subscribe((_) => {
      this._modalRef = null;
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
  }

  writeValue(obj: any): void {
  }
}
