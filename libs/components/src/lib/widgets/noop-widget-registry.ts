import {WidgetRegistry} from "./widget-registry";
import {NoopWidget} from "./noop.widget";

export class NoopWidgetRegistry extends WidgetRegistry {
  constructor() {
    super();
    this.setDefault(NoopWidget);
  }
}
