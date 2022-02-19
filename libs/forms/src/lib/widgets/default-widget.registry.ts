import {FormWidgetRegistry} from "../form-widget.registry";
import {VerticalLayoutComponent} from "./vertical-layout/vertical-layout.component";
import {FormItemComponent} from "./form-item/form-item.component";
import {FormControlsRegistry} from "../controls/form-controls.registry";

export class DefaultWidgetRegistry extends FormWidgetRegistry {

  constructor() {
    super();

    this.register("vertical-layout", VerticalLayoutComponent);

    this.register("control", FormItemComponent);

    new FormControlsRegistry(this);
    this.setDefault(VerticalLayoutComponent);
  }
}
