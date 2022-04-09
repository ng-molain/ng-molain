import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  Injector, Input,
  OnChanges, OnDestroy, SimpleChanges,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {WidgetFactory} from "./widget-factory";
import {isEmpty} from "lodash-es";

// global value
let nextUniqueId = 0;

@Component(({
  selector: 'ml-widget-renderer',
  template: `
    <ng-template #outletContainer></ng-template>
  `
}))
export class WidgetRendererComponent implements OnChanges, OnDestroy {
  @ViewChild("outletContainer", {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;

  // @Input("type") nameOrAlias!: string;
  @Input() widgetMeta: any;

  private ref?: ComponentRef<any> | EmbeddedViewRef<any>;

  constructor(private widgetFactory: WidgetFactory,
              private injector: Injector) {
  }

  ngOnChanges(changes: SimpleChanges) {
    const {widgetMeta: widgetMetaChange} = changes;
    if (widgetMetaChange) {
      this.updateView();
    }
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.destroy();
    }
  }

  private updateView() {
    if (!this.widgetMeta) {
      return;
    }
    const {type, context, params} = this.widgetMeta;
    if (!type) {
      throw new Error("type (name or alias) cannot be empty");
    }

    if (this.ref) {
      this.ref.destroy();
    }

    this.ref = this.widgetFactory.createWidget(this.container, type, {...context, injector: this.injector});

    if (this.ref instanceof ComponentRef) {
      this.onWidgetInstanciated(this.ref.instance, params)
    }
  }

  // TODO 关键属性， 如 itemRef 定义等，通过 注入的方式向下传递，这样的话实现自定义组件的自由，
  //  不用继承（改用接口，接口可以尽量的内聚，拆成多个），可以选择性使用上层对象属性，具有更好的扩展性。
  //  而这里只处理自定义的 @Input，处理时可以检测是否包含 @Input注解，保证值的安全性。
  private onWidgetInstanciated(instance: any, params: any) {
    const virtualId = `_ml-${++nextUniqueId}}`;

    // 设置 Widget 属性
    if (!isEmpty(params)) {
      Object.assign(instance, params);
    }
  }
}
