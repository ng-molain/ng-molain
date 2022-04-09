import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR
} from "@angular/forms";
import {
  forEach,
  get,
  isArrayLike,
  isBoolean,
  isEmpty,
  isNil,
  isObject,
  isString,
  reduce,
  set,
  unset
} from "lodash-es";
import {format} from 'date-fns'
import {debounceTime, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {startWith} from "rxjs/operators";

@Component({
  selector: 'ml-composite-filter',
  templateUrl: './composite-filter.component.html',
  styleUrls: ['./composite-filter.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => CompositeFilterComponent), multi: true
  }]
})
export class CompositeFilterComponent implements OnInit, ControlValueAccessor {

  @Input() filters: any[] = [];

  controlForm: FormGroup = this.fb.group({
    filter: [],
    value: []
  });

  availableItems = new Set<any>();
  filterItemMeta: any;

  // form: FormGroup = this.fb.group({});
  private _initialValue: any;
  private onChange = (value: any) => undefined;
  private onTouched = (value: any) => undefined;

  noopFilterOption = (): boolean => true;
  asyncSelectOptions: Array<{label: string, value: string}> = [];

  constructor(private fb: FormBuilder,
              private httpClient: HttpClient) {
  }

  writeValue(obj: any): void {
    // throw new Error('Method not implemented.');
    if (isNil(obj) || !isObject(obj)) {
      return ;
    }

    this.reset();
    forEach(obj, (value, key) => {
      const filter = this.filters.find(it => it.key === key);
      this.setFilterValue(filter, value, false);
    })
  }

  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.controlForm.disable();
    } else {
      this.controlForm.enable();
    }
  }

  private reset() {
    this.filters.forEach(it => unset(it, 'value'));
    this.availableItems.clear();
  }

  ngOnInit(): void {
    // this.filters.forEach((it) => {
    //   this.form.addControl(it.key, new FormControl());
    // })

    const filterCtrl = this.controlForm.get("filter") as FormControl;
    const valueCtrl = this.controlForm.get("value") as FormControl;

    filterCtrl.setValue(this.filters[0]); // TODO patch init logic

    filterCtrl.valueChanges.pipe(startWith(filterCtrl.value)).subscribe((filterRef) => {
      // console.log(filterRef);
      if (filterRef) {
        valueCtrl.setValue(null, {emitEvent: false});
        this.filterItemMeta = {type: filterRef.type, context: filterRef, params: {formControl: valueCtrl, options: filterRef}}
        setTimeout(() => {
          valueCtrl.setValue(filterRef.value, {emitEvent: false});
        }, 100);
      }
    });

    valueCtrl.valueChanges.pipe(debounceTime(1000)).subscribe((value) => {
      const filter = filterCtrl.value;
      if (this.availableItems.has(filter)) {
        this.setFilterValue(filter, value);
      }
    })
  }

  submitControl(controlForm: FormGroup, $event: any) {
    const {filter, value} = controlForm.value;
    this.setFilterValue(filter, value);
  }

  private setFilterValue(filter: any, value: any, emitChange = true) {
    if (isNil(value) || ((isString(value) || isArrayLike(value)) && isEmpty(value))) {
      // remove from valid items
      unset(filter, 'value');
      this.availableItems.delete(filter);
    } else {
      // add filter item value
      set(filter, 'value', value);
      this.availableItems.add(filter);
    }

    this.setPrettyText(filter);

    if (emitChange) {
      this.emitChange();
    }
  }

  private setPrettyText(filter: any) {
    const {name, value, operator} = filter;
    if (isNil(value) || ((isString(value) || isArrayLike(value)) && isEmpty(value))) {
      unset(filter, "prettyText");
      return;
    }

    let valueText = `${value}`;
    if (filter.type === 'select' && !isEmpty(filter.options)) {
      valueText = get(filter.options.find((it: any) => it.value === value), 'label', valueText);
    }
    if (filter.type === 'rangePicker') {
      // TODO Fix 如果是range组件，只能选择一个范围，不能是只有开始或结束时间
      //    增加操作选项 ”开始于“、”结束于“、”间于“
      const [startDate, endDate] = value;
      console.log(startDate, "~", endDate);
      const formatTpl = 'yyyy-MM-dd';
      valueText = `${format(startDate, formatTpl)} ~ ${format(endDate, formatTpl)}`
    }

    let prettyText = `${name}, ${valueText}`;
    switch (operator) {
      case 'contains':
        prettyText = `${name}, 包含 "${valueText}"`;
        break;
      case 'equals':
        prettyText = `${name}, 等于 "${valueText}"`;
        break;
      default:
        prettyText = `${name}, ${operator || ''} ${valueText}`
    }
    set(filter, 'prettyText', prettyText);
  }

  switchToFilter(item: any) {
    const filterCtrl = this.controlForm.get("filter") as FormControl;
    filterCtrl.setValue(item);
  }

  removeFilter(item: any) {
    this.setFilterValue(item, undefined);
  }

  private emitChange() {
    const value = this.getValue();
    this.onChange(value);
  }

  getValue() {
    return reduce(Array.from(this.availableItems.values()), (result, item) => {
      (result[item.key] = item.value);
      return result;
    }, {} as any)
  }

  asyncSelectSource($event: string) {
    // TODO 需要服务端通用数据源加载接口支持，搁置
    // const url = "//localhost:8085/api/users/assistant/lookupList";
    // this.httpClient.get(url, {params: {username: $event}}).pipe(
    //   tap((result: any) => {
    //     this.asyncSelectOptions = (result.content as any[]).map(it => ({
    //       label: `${it.username}-${it.displayName}`,
    //       value: it.id
    //     }));
    //   })
    // ).subscribe();
  }
}
