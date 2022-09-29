import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {NzSelectModeType} from "ng-zorro-antd/select/select.types";
import {NzSelectSizeType} from "ng-zorro-antd/select/select.component";

export class InputProps {
  addonBefore?: string;
  addonAfter?: string;
  prefix?: string;
  suffix?: string;
  allowClear?: boolean;
  bordered?: boolean;
  maxLength?: number;
  placeholder?: string;
  size?: NzSizeLDSType; // formily provided enum: ['large', 'small', 'middle', null]

  constructor(props: Partial<InputProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class TextAreaProps {
  bordered?: boolean;
  maxLength?: number;
  placeholder?: string;
  autoSize?: boolean;
  showCount?: boolean;

  constructor(props: Partial<TextAreaProps>) {
  if (props) {
  Object.assign(this, props);
}
}
}

export class PasswordProps extends InputProps {
  checkStrength?: boolean;

  constructor(props: Partial<PasswordProps>) {
    super(props)
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class SelectProps {
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

  constructor(props: Partial<SelectProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class InputNumberProps {
  decimalSeparator?: string;
  precision?: number;
  max!: number;
  min!: number;
  step!: number;
  placeholder?: string;
  size?: NzSizeLDSType; // enum: ['large', 'small', 'middle', null],
  formatter?: any; // EXPRESSION
  parser?: any; // EXPRESSION
  stringMode?: boolean;
  bordered?: boolean;
  keyboard?: boolean;

  constructor(props: Partial<InputProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class TreeSelectProps {
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

  constructor(props: Partial<TreeSelectProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

abstract class CommonDatePickerProps {
  allowClear?: boolean;
  autoFocus?: boolean;
  bordered?: boolean;
  disabledTime?: string; // EXPRESSION
  disabledDate?: string; // EXPRESSION
  inputReadOnly?: boolean;
  placeholder?: string;
  size?: NzSizeLDSType;  // enum: ['large', 'small', 'middle', null],
  format?: string;  // Default 'YYYY-MM-DD'

  constructor(props: Partial<CommonTimePickerProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class DatepickerProps extends CommonDatePickerProps {
  picker?: string; // enum: ['time', 'date', 'month', 'year', 'quarter', 'decade'],
  showNow?: boolean;
  showTime?: boolean;
  showToday?: boolean;

  constructor(props: Partial<DatepickerProps>) {
    super(props)
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class RangePickerProps extends CommonDatePickerProps {
  picker?: string; // enum: ['time', 'date', 'month', 'year', 'decade'],
  showTime?: boolean;

  constructor(props: Partial<RangePickerProps>) {
    super(props);
    if (props) {
      Object.assign(this, props);
    }
  }
}


abstract class CommonTimePickerProps {
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

  constructor(props: Partial<CommonTimePickerProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class TimePickerProps extends CommonTimePickerProps {
}

export class TimeRangePickerProps extends  CommonTimePickerProps {
}

export class TransferProps {
  oneWay?: boolean;
  showSearch?: boolean;
  showSearchAll?: boolean; // default true
  filterOption?: string; // EXPRESSION
  operations?: string; // EXPRESSION
  titles?: string; // EXPRESSION

  constructor(props: Partial<TreeSelectProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class CascaderProps {
  allowClear?: boolean; // default true;
  changeOnSelect?: boolean;
  autoFocus?: boolean;
  bordered?: boolean; // default true
  displayRender?: string; // EXPRESSION
  fieldNames?: string; // EXPRESSION
  showSearch?: boolean;
  notFoundContent?: string; // default value 'Not Found'
  placeholder?: string;
  size?: NzSizeLDSType; // provide enum: ['large', 'small', 'middle', null],

  constructor(props: Partial<CascaderProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class RadioProps {
  autoFocus?: boolean;

  constructor(props: Partial<RadioProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class RadioGroupProps {
  optionType?: string; // provide enum: ['default', 'button'],
  buttonStyle?: string; // provide enum: ['outline', 'solid'],

  constructor(props: Partial<RadioGroupProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class CheckboxProps {
  autoFocus?: boolean;

  constructor(props: Partial<CheckboxProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class CheckboxGroupProps {}

export class UploadProps {
  textContent?:string;
  accept?: string;
  action?: any; // include: ['TEXT', 'EXPRESSION'],
  name?: string; // default 'file'
  maxCount?: number;
  method?: string; // enum: ['POST', 'PUT', 'GET'], default 'POST'
  data?: string; // EXPRESSION
  headers?: string; // EXPRESSION
  listType?: string; //  enum: ['text', 'picture', 'picture-card'], default 'text'
  directory?: boolean;
  multiple?: boolean;
  openFileDialogOnClick?: boolean; // default true
  showUploadList?:boolean; // default true
  withCredentials?: boolean;

  constructor(props: Partial<UploadProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

export class UploadDraggerProps extends UploadProps{}

export class SwitchProps {
  autoFocus?: boolean;
  size?: NzSizeLDSType; // enum: ['large', 'small', 'default', ''],

  constructor(props: Partial<SwitchProps>) {
    if (props) {
      Object.assign(this, props);
    }
  }
}

