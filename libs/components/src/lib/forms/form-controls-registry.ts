import {WidgetRegistry} from "../widgets/widget-registry";
import {InputWidget} from "./input.widget";
import {InputNumberWidget} from "./input-number.widget";
import {SelectWidget} from "./select.widget";
import {OrgUnitLookupWidget} from "./org-unit-lookup.widget";
import {UserLookupWidget} from "./user-lookup.widget";
import {RangePickerWidget} from "./range-picker-widget.component";

export class FormControlsRegistry extends WidgetRegistry {

  constructor() {
    super();

    this.register('input', InputWidget);
    this.register('inputNumber', InputNumberWidget);
    this.register('select', SelectWidget);
    this.register('rangePicker', RangePickerWidget);
    this.register('userLookup', UserLookupWidget);
    this.register('orgUnitLookup', OrgUnitLookupWidget);

    this.setDefault(InputWidget);
  }
}
