import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  Injector,
  Input, OnChanges, OnDestroy, OnInit,
  SimpleChanges,
  ViewChild,
  ViewContainerRef
} from "@angular/core";
import {FormWidgetFactory} from "../form-widget.factory";
import {FormRef} from "../form-ref";

// global value
let nextUniqueId = 0;

@Component({
  selector: 'ml-form-widget-renderer',
  template: `
    <ng-template #outletContainer></ng-template>
    <ng-content></ng-content>
  `
})
export class FormWidgetRendererComponent  implements OnInit, OnChanges, OnDestroy {

  @ViewChild("outletContainer", {read: ViewContainerRef, static: true})
  container!: ViewContainerRef;

  @Input('uiSchema')
  uiSchema!: any;

  @Input()
  formRef!: FormRef;

  private ref?: ComponentRef<any> | EmbeddedViewRef<any>;

  constructor(private widgetFactory: FormWidgetFactory,
              private injector: Injector) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.uiSchema) {
      const {type} = this.uiSchema;
      if (!type) {
        throw new Error("widget type cannot be empty");
      }
      // console.log(type)

      this.ref = this.widgetFactory.createWidget(this.container, type, {
        // injector: Injector.create({
        //   providers: [{provide: FormRef, useValue: this.formRef}],
        //   parent: this.injector
        // })
      });
      if (this.ref instanceof ComponentRef) {
        this.onWidgetInstanciated(this.ref.instance);
      }
    }
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.destroy();
    }
  }

  // TODO 关键属性， 如 itemRef 定义等，通过 注入的方式向下传递，这样的话实现自定义组件的自由，
  //  不用继承（改用接口，接口可以尽量的内聚，拆成多个），可以选择性使用上层对象属性，具有更好的扩展性。
  //  而这里只处理自定义的 @Input，处理时可以检测是否包含 @Input注解，保证值的安全性。
  private onWidgetInstanciated(instance: any) {
    const virtualId = `_ml-${++nextUniqueId}}`;

    // 设置 Widget 属性
    // instance.formItem = this.context;
    instance.uiSchema = this.uiSchema;

    // this.context['$widgetInstance'] = instance;


  }
}
