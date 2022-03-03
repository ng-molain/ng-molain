import {FormWidgetRegistry} from "../form-widget.registry";
import {InputControlComponent} from "./input-control/input-control.component";
import {InputNumberControlComponent} from "./input-number-control/input-number-control.component";
import {RadioGroupControlComponent} from "./radio-group-control/radio-group-control.component";
import {SelectControlComponent} from "./select-control/select-control.component";
import {CheckboxGroupControlComponent} from "./checkbox-group-control/checkbox-group-control.component";
import {SwitchControlComponent} from "./switch-control/switch-control.component";
import {ColorPickerControlComponent} from "./color-picker-control/color-picker-control.component";
import {FileUploadControlComponent} from "./file-upload-control/file-upload-control.component";
import {FontStyleControlComponent} from "./font-style-control/font-style-control.component";


export class FormControlsRegistry {
  constructor(private formWidgetRegistry: FormWidgetRegistry) {
    formWidgetRegistry.register('string', InputControlComponent);
    formWidgetRegistry.register('number', InputNumberControlComponent);
    formWidgetRegistry.register('radioGroup', RadioGroupControlComponent);
    formWidgetRegistry.register('select', SelectControlComponent);
    formWidgetRegistry.register('checkboxGroup', CheckboxGroupControlComponent);
    formWidgetRegistry.register('switch', SwitchControlComponent);
    formWidgetRegistry.register('colorPicker', ColorPickerControlComponent);
    formWidgetRegistry.register('upload', FileUploadControlComponent);
    formWidgetRegistry.register('fontStyle', FontStyleControlComponent);

    formWidgetRegistry.registerAlias('radioGroupButton', {name: 'radioGroup', config: {type: 'button'}});
    formWidgetRegistry.registerAlias('multiSelect', {name: 'select', config: {mode: 'multiple'}});
    formWidgetRegistry.registerAlias('anyOf', {name: 'select', config: {mode: 'multiple'}});
    formWidgetRegistry.registerAlias('tags', {name: 'select', config: {mode: 'tags'}});
    formWidgetRegistry.registerAlias('boolean', {name: 'switch', config: {}});
    formWidgetRegistry.registerAlias('image', {name: 'upload', config: {}});

    // this.setDefault();
  }
}
