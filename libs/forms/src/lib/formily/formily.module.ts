import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormProviderDirective, NoopComponent} from './form-provider.directive';
import { FieldComponent } from './field.component';
import {PortalModule} from "@angular/cdk/portal";
import { ArrayFieldComponent } from './array-field.component';
import { FormConsumerComponent } from './form-consumer.component';
import { VoidFieldComponent } from './void-field.component';
import { ObjectFieldComponent } from './object-field.component';
import { SchemaFieldComponent } from './schema-field.component';
import { MarkupFieldComponent } from './markup-field.component';
import { RecursionFieldComponent } from './recursion-field.component';
import { ReactiveFieldComponent } from './reactive-field.component';



@NgModule({
  declarations: [
    FormProviderDirective,
    FieldComponent,
    NoopComponent,
    ArrayFieldComponent,
    FormConsumerComponent,
    VoidFieldComponent,
    ObjectFieldComponent,
    SchemaFieldComponent,
    MarkupFieldComponent,
    RecursionFieldComponent,
    ReactiveFieldComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
  ],
  exports: [
    FormProviderDirective,
    FieldComponent,
    NoopComponent,
    ArrayFieldComponent,
    FormConsumerComponent,
    VoidFieldComponent,
    ObjectFieldComponent,
    SchemaFieldComponent,
    MarkupFieldComponent,
    RecursionFieldComponent,
    ReactiveFieldComponent
  ]
})
export class FormilyModule { }
