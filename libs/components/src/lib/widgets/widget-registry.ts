import {TemplateRef, Type} from "@angular/core";

export interface WidgetAlias {
  name: string,
  config?: any;
}

// TODO 改用装饰器的方式
export class WidgetRegistry {
  private _widgets = new Map<string, Type<any> | TemplateRef<any>>();
  private _aliases = new Map<string, WidgetAlias>();

  private defaultWidget!: Type<any> | TemplateRef<any>;

  get widgets(): Map<string, Type<any> | TemplateRef<any>> {
    return this._widgets;
  }

  get aliases(): Map<string, WidgetAlias> {
    return this._aliases;
  }

  setDefault(widgetType: Type<any> | TemplateRef<any>): void {
    this.defaultWidget = widgetType;
  }

  register(name: string, widgetType: Type<any> | TemplateRef<any>): void {
    this.widgets.set(name, widgetType);
  }

  registerAlias(name: string, alias: WidgetAlias): void {
    this._aliases.set(name, alias);
  }


  has(name: string): boolean {
    return this.hasAlias(name) || this.hasWidget(name);
  }

  get(name: string): Type<any> | TemplateRef<any> {
    return this.getByAlias(name) ?? this.getWidget(name);
  }

  hasWidget(name: string): boolean {
    return this._widgets.has(name);
  }

  getWidget(name: string): Type<any> | TemplateRef<any> {
    return this._widgets.get(name) || this.defaultWidget;
  }

  hasAlias(name: string): boolean {
    return this._aliases.has(name);
  }

  getAlias(name: string): WidgetAlias | undefined {
    return this._aliases.get(name);
  }

  getByAlias(name: string): Type<any> | TemplateRef<any> | undefined {
    const alias = this.getAlias(name);
    if (!alias) {
      return undefined;
    }
    const {name: widgetName} = alias as WidgetAlias;
    return this.getWidget(widgetName);
  }

}
