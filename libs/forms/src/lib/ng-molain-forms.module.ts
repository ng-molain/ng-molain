import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormWidgetFactory} from "./form-widget.factory";
import {FormItemComponent} from "./form-item.component";
import { FieldSetComponent } from './field-set/field-set.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SettingFormComponent } from './setting-form/setting-form.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FormWidgetRegistry} from "./form-widget.registry";
import {NzFormWidgetRegistry} from "./widgets/nz-form-widget.registry";
import {FormWidgetsModule} from "./widgets/form-widgets.module";
import {NzButtonModule} from "ng-zorro-antd/button";

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
    FormItemComponent,
    FieldSetComponent,
    SimpleFormComponent,
    SettingFormComponent,
  ],
  providers: [
    FormWidgetFactory,
    {provide: FormWidgetRegistry, useClass: NzFormWidgetRegistry}
  ],
  exports: [
    FieldSetComponent,
    SimpleFormComponent,
    SettingFormComponent
  ]
})
export class NgMolainFormsModule {}
