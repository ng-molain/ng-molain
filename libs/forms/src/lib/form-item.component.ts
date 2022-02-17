import {
  Component,
  ComponentRef, EmbeddedViewRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {FormWidgetFactory} from "./form-widget.factory";
import {FormWidget} from "./form-widget";
import {NzInputDirective} from "ng-zorro-antd/input";

// global value
let nextUniqueId = 0;

@Component({
  selector: 'ml-form-item',
  exportAs: 'mlFormItem',
  host: {['class.ml_form_item']: 'true'},
  template: `
    <ng-template #target></ng-template>
  `
})
export class FormItemComponent implements OnInit, OnChanges, OnDestroy {
  private ref!: ComponentRef<any> | EmbeddedViewRef<any>;

  @Input() formItem: any;

  @ViewChild('target', {read: ViewContainerRef, static: true})
  private container!: ViewContainerRef;

  constructor(private widgetFactory: FormWidgetFactory) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.formItem) {
      const {ui: {widget}, schema: {type}} = this.formItem;
      const widgetName: string = widget || type;
      if (!widgetName) {
        throw new Error("widget name cannot be empty");
      }
      this.ref = this.widgetFactory.createWidget(this.container, widgetName);
      if (this.ref instanceof ComponentRef) {
        this.onWidgetInstanciated(this.ref.instance);
      }
    }
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.destroy();
    }
  }

  // TODO 关键属性， 如 itemRef 定义等，通过 注入的方式向下传递，这样的话实现自定义组件的自由，
  //  不用继承（改用接口，接口可以尽量的内聚，拆成多个），可以选择性使用上层对象属性，具有更好的扩展性。
  //  而这里只处理自定义的 @Input，处理时可以检测是否包含 @Input注解，保证值的安全性。
  private onWidgetInstanciated(instance: FormWidget) {
    const virtualId = `_ml-${++nextUniqueId}}`;

    // 设置 Widget 属性
    instance.formItem = this.formItem;

    this.formItem['$widgetInstance'] = instance;
  }
}
