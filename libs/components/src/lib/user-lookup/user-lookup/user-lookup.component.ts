import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  HostBinding,
  HostListener,
  Renderer2,
  ElementRef,
  forwardRef, ViewEncapsulation
} from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { UserLookupService } from '../user-lookup.service';
import {get, isArray, isEmpty as _isEmpty, isObject} from "lodash-es";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {AbstractControlValueAccessor} from "@ng-molain/forms";
import {firstValueFrom} from "rxjs";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'ml-user-lookup',
  templateUrl: './user-lookup.component.html',
  styleUrls: ['./user-lookup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => UserLookupComponent), multi: true
  }],
  encapsulation: ViewEncapsulation.None
})
export class UserLookupComponent extends AbstractControlValueAccessor implements OnInit, ControlValueAccessor {
  @HostBinding('class.user-lookup')
  __hostStyle = true;

  @Input() isMultiple: boolean = false;
  @Input() allowClear: boolean = false;
  @Input() size: 'large' | 'small' = 'small';
  @Input() maxTagCount: number = 3;
  @Input() maxTagPlaceholder?: TemplateRef<{$implicit: any[]}>;
  @Input() placeholder: string = "请选择用户";

  @Input() override disabled = false;

  selection = new SelectionModel<any>(false);


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

  get selected(): any[] {
    return this.selection.selected;
  }

  get isEmpty(): boolean {
    return _isEmpty(this.selected);
  }


  @HostListener("click")
  onClick() {
    console.log('clicked')
    this._openLookupDialog();
  }

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private userLookupService: UserLookupService
  ) {
    super()
    this.renderer.addClass(this.elementRef.nativeElement, 'ant-select');
  }

  ngOnInit() {
    if (this.isMultiple) {
      this.selection = new SelectionModel<any>(true);
    }

    this.selection.changed.subscribe({
      next: value => {
        const selected = this.selection.selected.map(it => ({id: it.id, name: it.name}));
        if (this.selection.isMultipleSelection()) {
          this.onChange(selected);
        } else {
          this.onChange(get(selected, "[0]", null));
        }
      }
    });
  }

  displayWith(item?: any) {
    return item.name;
  }

  trackNode(_index: number, item: any) {
    return item.key;
  }

  private _openLookupDialog() {
    if (this.disabled) {
      return;
    }
    const result =  this.userLookupService.openLookup();
    firstValueFrom(result).then(result => {
      if (!Array.isArray(result) || result.length === 0) {
        return ;
      } else {
        this.selected.push(...result);
      }
    });
  }

  removeSelected(item: any, b: boolean, $event: MouseEvent) {
    this.selection.deselect(item);
  }

  override writeValue(obj: any) {
    super.writeValue(obj);
    if (!obj) {
      this.selection.clear();
      return;
    }
    if (Array.isArray(obj)) {
      this.selection.select(...obj);
    } else if (isObject(obj)) {
      this.selection.select(obj);
    }
  }

}
