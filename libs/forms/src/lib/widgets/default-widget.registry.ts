import {FormWidgetRegistry} from "../form-widget.registry";
import {VerticalLayoutComponent} from "./vertical-layout/vertical-layout.component";
import {FormItemComponent} from "./form-item/form-item.component";
import {FormControlsRegistry} from "../controls/form-controls.registry";
import {ObjectControlComponent} from "./object-control/object-control.component";

export class DefaultWidgetRegistry extends FormWidgetRegistry {

  constructor() {
    super();

    this.register("vertical-layout", VerticalLayoutComponent);

    this.register("control", FormItemComponent);

    this.register("object", ObjectControlComponent);

    new FormControlsRegistry(this);
    this.setDefault(VerticalLayoutComponent);
  }
}
