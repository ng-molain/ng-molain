import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {NzSelectModeType} from "ng-zorro-antd/select/select.types";
import {NzSelectSizeType} from "ng-zorro-antd/select/select.component";

export interface InputProps {
  addonBefore?: string;
  addonAfter?: string;
  prefix?: string;
  suffix?: string;
  allowClear?: boolean;
  bordered?: boolean;
  maxLength?: number;
  placeholder?: string;
  size?: NzSizeLDSType; // formily provided enum: ['large', 'small', 'middle', null]

}

export interface TextAreaProps {
  bordered?: boolean;
  maxLength?: number;
  placeholder?: string;
  autoSize?: boolean;
  showCount?: boolean;
}

export interface PasswordProps extends InputProps {
  checkStrength?: boolean;
}

export interface SelectProps {
  mode?: NzSelectModeType; // formily provided enum: ['multiple', 'tags', null]
  allowClear?: boolean;
  autoClearSearchValue?: boolean;
  dropdownMatchSelectWidth?: boolean;
  autoFocus?: boolean;
  bordered?: boolean;
  defaultActiveFirstOption?: boolean; // ex
  defaultOpen?: boolean;
  labelInValue?: boolean; // ex
  showArrow?: boolean;
  showSearch?: boolean;
  virtual?: boolean;  // ex
  filterOption?: boolean;  // ex, NzFilterOptionType
  filterSort?: boolean;  // ex
  listHeight?: number;  // ex
  maxTagCount?: number;
  maxTagPlaceholder?: string;  // ex TemplateRef
  maxTagTextLength?: number;  // ex
  notFoundContent?: string;
  placeholder?: string;
  size?: NzSelectSizeType;
}

export interface InputNumberProps {
  decimalSeparator?: string;
  precision?: number;
  max: number;
  min: number;
  step: number;
  placeholder?: string;
  size?: NzSizeLDSType; // enum: ['large', 'small', 'middle', null],
  formatter?: any; // EXPRESSION
  parser?: any; // EXPRESSION
  stringMode?: boolean;
  bordered?: boolean;
  keyboard?: boolean;
}

export interface TreeSelectProps {
  allowClear?: boolean;
  autoClearSearchValue?: boolean;
  autoFocus?: boolean;
  bordered?: boolean;
  labelInValue?: boolean;
  showArrow?: boolean;
  showSearch?: boolean;
  virtual?: boolean;
  treeCheckable?: boolean;
  treeDefaultExpandAll?: boolean;
  dropdownMatchSelectWidth?: boolean;
  showCheckedStrategy?: string; // enum: ['SHOW_ALL', 'SHOW_PARENT', 'SHOW_CHILD'],
  treeDefaultExpandedKeys?: boolean;
  treeNodeFilterProp?: string;
  treeNodeLabelProp?: string;
  filterTreeNode?: boolean;
  treeDataSimpleMode?:boolean;
  listHeight?: number;
  placeholder?: string;
  size?: NzSizeLDSType; // enum: ['large', 'small', 'middle', null],
}

interface CommonDatePickerProps {
  allowClear?: boolean;
  autoFocus?: boolean;
  bordered?: boolean;
  disabledTime?: string; // EXPRESSION
  disabledDate?: string; // EXPRESSION
  inputReadOnly?: boolean;
  placeholder?: string;
  size?: NzSizeLDSType;  // enum: ['large', 'small', 'middle', null],
  format?: string;  // Default 'YYYY-MM-DD'
}

export interface DatepickerProps extends CommonDatePickerProps {
  picker?: string; // enum: ['time', 'date', 'month', 'year', 'quarter', 'decade'],
  showNow?: boolean;
  showTime?: boolean;
  showToday?: boolean;
}

export interface RangePickerProps extends CommonDatePickerProps {
  picker?: string; // enum: ['time', 'date', 'month', 'year', 'decade'],
  showTime?: boolean;
}


interface CommonTimePickerProps {
  allowClear?: boolean;
  autoFocus?: boolean;
  bordered?: boolean;
  clearText?: string;
  disabledHours?: string; // EXPRESSION
  disabledMinutes?: string; // EXPRESSION
  disabledSeconds?: string; // EXPRESSION
  hideDisabledOptions?:boolean;
  inputReadOnly?: boolean;
  showNow?: boolean;
  use12Hours?: boolean;
  hourStep?: number; // default 1
  minuteStep?: number; // default 1
  secondStep?: number; // default 1
  placeholder?: string;
  size?: NzSizeLDSType; // enum: ['large', 'small', 'middle', null],
  format?: string; // default 'YYYY-MM-DD'
}

export interface TimePickerProps extends CommonTimePickerProps {
}

export interface TimeRangePickerProps extends  CommonTimePickerProps {
}
