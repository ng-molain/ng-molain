import {NzSizeLDSType} from "ng-zorro-antd/core/types";
import {NzFormLayoutType} from "ng-zorro-antd/form";

export class FormLayoutProps {
  labelCol?: number;
  wrapperCol?: number;
  labelWidth?: number;
  wrapperWidth?: number;
  colon?: boolean; // default true
  feedbackLayout?: string; // enum: ['loose', 'terse', 'popover', 'none', null], default 'loose'
  size?: NzSizeLDSType; // enum: ['large', 'small', 'default', null],
  layout?: NzFormLayoutType; // enum: ['vertical', 'horizontal', 'inline', null],
  tooltipLayout?: string; // enum: ['icon', 'text', null], default 'icon'
  labelAlign?: string; // enum: ['left', 'right', null], default right
  wrapperAlign?: string; //enum: ['left', 'right', null], default left
  labelWrap?: boolean;
  wrapperWrap?: boolean;
  fullness?: boolean;
  inset?: boolean;
  shallow?: boolean; // default true
  bordered?: boolean; // default true
}

export class FormItemProps {
  tooltip?: string;
  addonBefore?: string;
  addonAfter?: string;
  labelCol?: number;
  wrapperCol?: number;
  labelWidth?: number;
  wrapperWidth?: number;
  colon?: boolean; //default true
  asterisk?: boolean;
  gridSpan?: number;
  feedbackLayout?: string; // enum: ['loose', 'terse', 'popover', 'none', null], defaultValue: 'loose',
  size?: NzSizeLDSType; // enum: ['large', 'small', 'default', null],
  layout?: NzFormLayoutType; //  enum: ['vertical', 'horizontal', 'inline', null], defaultValue: 'horizontal',

  tooltipLayout?: string; // enum: ['icon', 'text', null], default 'icon'
  labelAlign?: string;//enum: ['left', 'right', null], default right
  wrapperAlign?: string;//enum: ['left', 'right', null], default left
  labelWrap?: boolean;
  wrapperWrap?: boolean;
  fullness?: boolean;
  inset?: boolean;
  bordered?: boolean;//default true
}

export class FormGridProps {
  minWidth?: number; // default 100
  maxWidth?: number;
  minColumns?: number; // default 0
  maxColumns?: number;
  breakpoints?: string; // include: ['EXPRESSION'],
  columnGap?: number; // default 10
  rowGap?: number; // default 5
  colWrap?: boolean;// default true
}

export class FormGroupColumnProps {
  gridSpan?: number; // default 1
}

export class FormButtonGroupProps {}

export class SpaceProps {
  align?: string; // enum: ['start', 'end', 'center', 'baseline'],
  direction?: string; // enum: ['vertical', 'horizontal'], defaultValue: 'horizontal',
  size?: number; // defaultValue: 8,
  split?: string;
  wrap?:boolean;
}

export class SubmitProps {}

export class ResetProps {}
