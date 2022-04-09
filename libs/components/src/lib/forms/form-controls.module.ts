import {NgModule} from "@angular/core";
import {InputWidget} from "./input.widget";
import {ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {WidgetManagementModule, WidgetRegistry} from "../widgets";
import {FormControlsRegistry} from "./form-controls-registry";
import {FormControlWidget} from "./form-control.widget";
import {InputNumberWidget} from "./input-number.widget";
import {SelectWidget} from "./select.widget";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzSelectModule} from "ng-zorro-antd/select";
import {UserLookupWidget} from "./user-lookup.widget";
import {UserLookupModule} from "../user-lookup";
import {OrgUnitLookupWidget} from "./org-unit-lookup.widget";
import {OrgUnitModule} from "../org-unit";
import {RangePickerWidget} from "./range-picker-widget.component";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

const widgets = [
  InputWidget,
  InputNumberWidget,
  SelectWidget,
  UserLookupWidget,
  OrgUnitLookupWidget,
  RangePickerWidget,
];

@NgModule({
  declarations: [
    FormControlWidget,
    ...widgets
  ],
  imports: [
    ReactiveFormsModule,
    NzInputModule,
    WidgetManagementModule,
    NzInputNumberModule,
    NzSelectModule,
    UserLookupModule,
    OrgUnitModule,
    NzDatePickerModule
  ],
  exports: [
    WidgetManagementModule,
    FormControlWidget,
    ...widgets
  ],
  providers: [
    {provide: WidgetRegistry, useClass: FormControlsRegistry}
  ]
})
export class FormControlsModule {

}
