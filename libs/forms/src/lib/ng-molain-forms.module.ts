import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormWidgetFactory} from "./form-widget.factory";
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormWidgetRegistry} from "./form-widget.registry";
import {FormWidgetsModule} from "./widgets/form-widgets.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {DefaultWidgetRegistry} from "./widgets/default-widget.registry";
import {FormControlsRegistry} from "./controls/form-controls.registry";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    FormWidgetsModule,
    NzButtonModule,
  ],
  declarations: [
    SimpleFormComponent,
  ],
  providers: [
    FormWidgetFactory,
    // {provide: FormWidgetRegistry, useClass: FormControlsRegistry}
    {provide: FormWidgetRegistry, useClass: DefaultWidgetRegistry},
  ],
  exports: [
    SimpleFormComponent,
    FormWidgetsModule,
  ]
})
export class NgMolainFormsModule {}
