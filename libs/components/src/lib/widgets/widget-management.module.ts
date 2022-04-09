import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {WidgetRendererComponent} from "./widget-renderer.component";
import {NoopWidget} from "./noop.widget";
import {WidgetRegistry} from "./widget-registry";
import {NoopWidgetRegistry} from "./noop-widget-registry";
import {WidgetFactory} from "./widget-factory";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WidgetRendererComponent,
    NoopWidget,
  ],
  exports: [
    WidgetRendererComponent,
    NoopWidget,
  ],
  providers: [
    WidgetFactory,
    {provide: WidgetRegistry, useClass: NoopWidgetRegistry}
  ]
})
export class WidgetManagementModule {
}
