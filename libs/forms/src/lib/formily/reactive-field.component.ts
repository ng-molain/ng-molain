import {
  AfterViewInit,
  Component,
  ComponentRef,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewChild
} from '@angular/core';
import {FormPath, GeneralField} from "@formily/core";
import {COMPONENT_PROPS, DECORATOR_PROPS, FormRef2, SchemaContext} from "@ng-molain/forms";
import {CdkPortalOutlet, ComponentPortal} from "@angular/cdk/portal";
import {get} from "lodash-es";

function isValidComponent(target: any) {
  // return (target: any) =>
  return target && (typeof target === 'object' || typeof target === 'function');
}

@Component({
  selector: 'ml-reactive-field',
  template: `
    <ng-template cdkPortalOutlet></ng-template>
    <ng-content></ng-content>
  `,
  styles: []
})
export class ReactiveFieldComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(CdkPortalOutlet, {read: CdkPortalOutlet}) outlet!: CdkPortalOutlet;

  @Input() field!: GeneralField;

  constructor(private formRef: FormRef2,
              private injector: Injector,
              @Optional() private schemaContext?: SchemaContext,
              ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateView();
    })
  }

  ngOnDestroy() {
    // TODO clear
  }

  getComponent(target: any) {
    // console.log(target, isValidComponent(target))
    return isValidComponent(target)
      ? target
      : FormPath.getIn(this.schemaContext?.components, target) ?? target;
  }

  updateView() {
    const decoratorRef = this.renderDecorator();
    this.renderComponent(decoratorRef);
  }

  renderDecorator(): ComponentRef<any> | null {
    this.field.decoratorType
    if (!this.field.decoratorType) {
      return null;
    }

    const {decoratorType: type, decoratorProps: props} = this.field;
    const injector = Injector.create({
      parent: this.injector,
      providers: [{
        provide: DECORATOR_PROPS, useValue: props
      }]
    })
    const portal = new ComponentPortal(this.getComponent(type), null, injector);
    const componentRef = portal.attach(this.outlet);

    return componentRef;
  }

  renderComponent(decoratorRef?: ComponentRef<any> | null): ComponentRef<any> | null {
    if (!this.field.componentType) {
      return null;
    }
    const {componentType: type, componentProps: props} = this.field;
    const injector = Injector.create({
      parent: decoratorRef ? decoratorRef.injector : this.injector,
      providers: [{
        provide: COMPONENT_PROPS, useValue: props
      }]
    });

    // console.log("type:", type, typeof type,typeof this.getComponent(type));

    const portal = new ComponentPortal(this.getComponent(type), null, injector);

    if (decoratorRef) {
      const {componentType, instance} = decoratorRef;
      setTimeout(() => {
        const componentRef = portal.attach(get(instance, 'outlet'));
      });

      return null; // TODO use observable
    } else {
      const componentRef = portal.attach(this.outlet);
      return componentRef;
    }

  }
}
