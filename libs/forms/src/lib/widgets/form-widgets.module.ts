import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VerticalLayoutComponent} from './vertical-layout/vertical-layout.component';
import {HorizontalLayoutComponent} from './horizontal-layout/horizontal-layout.component';
import {FieldsetComponent} from './fieldset/fieldset.component';
import {FormWidgetRendererComponent} from "./form-widget-renderer.component";
import {FormItemComponent} from "./form-item/form-item.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormControlsModule} from "../controls/form-controls.module";
import { ObjectControlComponent } from './object-control/object-control.component';
import { GroupLayoutComponent } from './group-layout/group-layout.component';
import {NzDividerModule} from "ng-zorro-antd/divider";


@NgModule({
  declarations: [
    FormWidgetRendererComponent,
    VerticalLayoutComponent,
    HorizontalLayoutComponent,
    FieldsetComponent,
    FormItemComponent,
    ObjectControlComponent,
    GroupLayoutComponent,
  ],
  imports: [
    CommonModule,
    NzFormModule,
    FormControlsModule,
    NzDividerModule,
  ],
  exports: [
    VerticalLayoutComponent,
    HorizontalLayoutComponent,
    FieldsetComponent,
    FormWidgetRendererComponent,
    FormItemComponent,
    ObjectControlComponent,
    GroupLayoutComponent,
  ]
})
export class FormWidgetsModule { }
