import {ComponentRef, EmbeddedViewRef, Injectable, TemplateRef, Type, ViewContainerRef} from "@angular/core";
import {FormWidget} from "./form-widget";
import {FormWidgetRegistry} from "./form-widget.registry";

@Injectable()
export class FormWidgetFactory {

  constructor(private readonly widgetRegistry: FormWidgetRegistry) {
  }

  createWidget(container: ViewContainerRef, widgetName: string, context?: any): ComponentRef<FormWidget> | EmbeddedViewRef<any> {
    // const widgetType = this.widgetRegistry.getByName(widgetName) as Type<any>;
    // return container.createComponent(widgetType);

    const widgetType = this.widgetRegistry.getByName(widgetName);
    if (widgetType instanceof Type) {
      return container.createComponent(widgetType);
    } else {
    // if (widgetType instanceof TemplateRef) {
      const ref: EmbeddedViewRef<any> = container.createEmbeddedView(widgetType, {});
      return ref;
    }
  }

}
