import {FormWidgetRegistry} from "../form-widget.registry";
import {VerticalLayoutComponent} from "./vertical-layout/vertical-layout.component";
import {FormItemComponent} from "./form-item/form-item.component";
import {FormControlsRegistry} from "../controls/form-controls.registry";
import {ObjectControlComponent} from "./object-control/object-control.component";
import {GroupLayoutComponent} from "./group-layout/group-layout.component";

export class DefaultWidgetRegistry extends FormWidgetRegistry {

  constructor() {
    super();

    this.register("vertical-layout", VerticalLayoutComponent);

    this.register("control", FormItemComponent);

    this.register("object", ObjectControlComponent);

    this.register("group-layout", GroupLayoutComponent);

    new FormControlsRegistry(this);
    this.setDefault(VerticalLayoutComponent);
  }
}
