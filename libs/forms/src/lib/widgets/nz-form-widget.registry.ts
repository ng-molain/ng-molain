import {FormWidgetRegistry} from "../form-widget.registry";
import {TextWidgetComponent} from "./text-widget/text-widget.component";
import {SwitchWidgetComponent} from "./switch-widget/switch-widget.component";

export class NzFormWidgetRegistry extends FormWidgetRegistry {
  constructor() {
    super();

    this.register('text', TextWidgetComponent);
    this.register('switch', SwitchWidgetComponent);

    this.setDefault(TextWidgetComponent);
  }
}
