import {NzSizeLDSType} from "ng-zorro-antd/core/types";

export class AdditionProps {
  method?: string; // enum: ['push', 'unshift'], defaultValue: 'push',
  defaultValue?: string;
}

export class CardProps {
  title?: string;
  extra?: string;
  type?: boolean; // enum: GlobalRegistry.getDesignerMessage('settings.cardTypes'),

  bordered?: boolean; // defaultChecked: true,
}

export type ArrayCardProps = CardProps & {Addition: AdditionProps};

export class ArrayItemsProps {};

export class ColumnProps {
  title?:string;
  align?:string; // enum: ['left', 'right', 'center'], default left
  colSpan?: number;
  width?: number;
  fixed?: string; //enum: ['left', 'right', false],
}
export class ArrayTableProps {
  bordered?: boolean;
  showHeader?:boolean; // default true
  sticky?: boolean;
  size?: NzSizeLDSType;//enum: ['large', 'small', 'middle'], defaultValue: 'small',
  tableLayout?: string; // enum: ['auto', 'fixed'], defaultValue: 'auto',

  Addition?: AdditionProps;
  Column?: ColumnProps;
}

export class ArrayTabsProps {}

export class CollapsePanelProps {
  collapsible?: string; //  enum: ['header', 'disabled'], defaultValue: 'header',
  header?: boolean;
  extra?: boolean;
}

export class FormCollapseProps {
  accordion?: boolean;
  collapsible?: string;  //  enum: ['header', 'disabled'], defaultValue: 'header',
  ghost?: boolean;
  bordered?:boolean; // defaultChecked: true,

  CollapsePanel?: CollapsePanelProps;
}

export class FormStepProps {}

export class TabPaneProps {
  tab?: string;
}

export class FormTabProps {
  animated?: boolean;
  centered?: boolean;
  size?:NzSizeLDSType;// enum: ['large', 'small', 'default', null],
  type?: string; // defaultValue: 'line',

  TabPane?: TabPaneProps;
}

export class FormDialogProps {}
export class FormDrawerProps {}
export class EditableProps {}

export class PreviewTextProps{}
