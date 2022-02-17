import {FormWidget} from "./form-widget";
import {TemplateRef, Type} from "@angular/core";

// TODO 改用装饰器的方式
export class FormWidgetRegistry {
  private _widgets = new Map<string, Type<FormWidget> | TemplateRef<any>>();

  private defaultWidget!: Type<FormWidget> | TemplateRef<any>;

  get widgets(): Map<string, Type<FormWidget> | TemplateRef<any>> {
    return this._widgets;
  }

  setDefault(widgetType: Type<FormWidget> | TemplateRef<any>): void {
    this.defaultWidget = widgetType;
  }

  register(name: string, widgetType: Type<FormWidget> | TemplateRef<any>): void {
    this.widgets.set(name, widgetType);
  }

  has(name: string): boolean {
    return this.widgets.has(name);
  }

  getByName(name: string): Type<FormWidget> | TemplateRef<any> {
    return this.widgets.get(name) || this.defaultWidget;
  }
}
