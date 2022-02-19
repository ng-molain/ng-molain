import {
  Component, ComponentRef, ElementRef, EmbeddedViewRef, forwardRef, Injector,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef, ViewChild,
  ViewContainerRef
} from "@angular/core";
import {AbstractControl} from "@angular/forms";
import {FormWidgetFactory} from "../form-widget.factory";
import {FormControlRef} from "./form-control-ref";

export interface FormControlContext {
  // control type key
  type: string;
  // requiredFormControl
  formControl: AbstractControl;
  fieldSchema: any;
  // ui.attrs
  attrs?: {
    [key: string]: any;
  };

  [key: string]: any
}

// global value
let nextUniqueId = 0;

@Component({
  selector: 'ml-control-renderer',
  template: `
    <ng-template #outletContainer></ng-template>
    <ng-content></ng-content>
  `,
  providers: [
    {provide: FormControlRef, useExisting: forwardRef(() => FormControlRenderer)}
  ]
})
export class FormControlRenderer extends FormControlRef implements OnInit, OnChanges, OnDestroy{

  @ViewChild("outletContainer", {read: ViewContainerRef, static: true})
  override container!: ViewContainerRef;

  @Input('mlContext')
  override context!: FormControlContext;

  private ref?: ComponentRef<any> | EmbeddedViewRef<any>;

  constructor(private controlFactory: FormWidgetFactory,
              private injector: Injector) {
    super();
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.context) {
      const {type} = this.context;
      if (!type) {
        throw new Error("control type cannot be empty");
      }

      // TODO inject control ref
      console.log(type)

      this.ref = this.controlFactory.createWidget(this.container, type, this.context);
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
    instance.formControl = this.context.formControl;
    instance.attrs = this.context.attrs;
    instance.fieldSchema = this.context.fieldSchema;

    // this.context['$widgetInstance'] = instance;
  }
}
