import {InputComponent} from "./input/input.component";
import {TextAreaComponent} from "./input/text-area/text-area.component";
import {PasswordComponent} from "./password/password.component";
import {FormLayoutComponent} from "./form-layout/form-layout.component";
import {FormItemComponent2} from "./form-item/form-item.component";
import {SelectComponent} from "./select/select.component";
import {TreeSelectComponent} from "./tree-select/tree-select.component";
import {DatePickerComponent} from "./date-picker/date-picker.component";
import {RangePickerComponent} from "./range-picker/range-picker.component";
import {TimePickerComponent} from "./time-picker/time-picker.component";
import {TransferComponent} from "./transfer/transfer.component";
import {CascaderComponent} from "./cascader/cascader.component";
import {RadioComponent} from "./radio/radio.component";
import {CheckboxComponent} from "./checkbox/checkbox.component";
import {UploadComponent} from "./upload/upload.component";
import {SwitchComponent} from "./switch/switch.component";

export const FORMILY_COMPONENTS = {
  // 布局组件
  FormLayout: FormLayoutComponent,
  FormItem: FormItemComponent2,
  // FormGrid: ,
  // FormButtonGroup:,
  // Space:,
  // Submit:,
  // Reset:,

  // 输入控件
  Input: InputComponent,
  TextArea: TextAreaComponent,
  'Input.TextArea': TextAreaComponent,
  Password: PasswordComponent,
  Select: SelectComponent,
  TreeSelect: TreeSelectComponent,
  DatePicker: DatePickerComponent,
  RangePicker: RangePickerComponent,
  'DatePicker.Rangepicker': RangePickerComponent,
  TimePicker: TimePickerComponent,
  'TimePicker.RangePicker': RangePickerComponent,
  Transfer: TransferComponent,
  Cascaser: CascaderComponent,
  Radio: RadioComponent,
  Checkbox: CheckboxComponent,
  Upload: UploadComponent,
  Switch: SwitchComponent,


  // 场景组件
  // ArrayCards
  // ArrayItems
  // ArrayTable
  // ArrayTabs
  // FormCollapse
  // FormStep
  // FormTab
  // FormDialog
  // FormDrawer
  // Editable

  // 阅读态组件
  // PreviewText
};
