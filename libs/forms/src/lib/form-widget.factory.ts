import {ComponentRef, EmbeddedViewRef, Injectable, TemplateRef, Type, ViewContainerRef} from "@angular/core";
import {FormWidgetRegistry} from "./form-widget.registry";

@Injectable()
export class FormWidgetFactory {

  constructor(private readonly widgetRegistry: FormWidgetRegistry) {
  }

  createWidget(container: ViewContainerRef, widgetName: string, context?: any): ComponentRef<any> | EmbeddedViewRef<any> {
    // const widgetType = this.widgetRegistry.getByName(widgetName) as Type<any>;
    // return container.createComponent(widgetType);

    if (this.widgetRegistry.hasAlias(widgetName)) {
      context['config'] = this.widgetRegistry.getAlias(widgetName)?.config;
    }

    const widgetType = this.widgetRegistry.get(widgetName);
    // console.log(widgetType)
    if (widgetType instanceof Type) {
      // return container.createComponent(widgetType, {injector: context.injector});
      return container.createComponent(widgetType);
    } else {
    // if (widgetType instanceof TemplateRef) {
      const ref: EmbeddedViewRef<any> = container.createEmbeddedView(widgetType, {});
      return ref;
    }
  }

}
