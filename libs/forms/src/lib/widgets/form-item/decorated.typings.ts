// import {AbstractControl, NgModel} from "@angular/forms";
// import {NzFormTooltipIcon} from "ng-zorro-antd/form";
// import {NzTSType} from "ng-zorro-antd/core/types";
// import {TemplateRef} from "@angular/core";
//
// export interface FieldSchema {
//   type?: string; // 临时的，用于 layout
//
//   key?: string;
//   name: string;
//   alias?: string;
//   dataType?: string;
//   rules?: any[];
//   extra?: {
//     [key: string]: any;
//   }
//
//   ui: FieldUiSchema;
// }
//
// export interface FieldUiSchema {
//   controlType: string;
//   formControl: AbstractControl;
//   controlOptions?: {
//     [key: string]: any
//   },
//
//   // layout
//
//
//   // label
//   label?: string | false;
//   labelOptions?: {
//     nzTooltipIcon?: string | NzFormTooltipIcon;
//     nzTooltipTitle?: NzTSType;
//     nzNoColon?: boolean;
//     // nzRequired?: boolean; // read from rule
//     // colSpan?: any
//   }
//
//   // control wrapper
//   controlWrapperOptions?: {
//     nzSuccessTip?: string | TemplateRef<{
//       $implicit: AbstractControl | NgModel;
//     }>;
//     nzWarningTip?: string | TemplateRef<{
//       $implicit: AbstractControl | NgModel;
//     }>;
//     nzErrorTip?: string | TemplateRef<{
//       $implicit: AbstractControl | NgModel;
//     }>;
//     nzValidatingTip?: string | TemplateRef<{
//       $implicit: AbstractControl | NgModel;
//     }>;
//     nzExtra?: string | TemplateRef<void>;
//     nzAutoTips: Record<string, Record<string, string>>;
//     nzDisableAutoTips: boolean | 'default';
//     // nzHasFeedback: ;
//     // nzValidateStatus: ;
//   }
//
// }
